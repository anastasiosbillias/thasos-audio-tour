import { useState, useEffect, useRef } from "react";
import thasosMapImage from "@/imports/09bef8c3-129f-4255-ba8b-be92674d35e7.png";
import appLogo from "@/imports/ChatGPT_Image_22_____2026__07_58_21__._..png";
import {
  Play, Pause, ChevronLeft, ChevronRight, MapPin, Info,
  List, Heart, Volume2, Clock, Phone, Mail, Globe,
  Headphones, Map as MapIcon, SkipForward, SkipBack,
  QrCode, Star, Home, Share2,
} from "lucide-react";
import { Stop, IMGS, STOPS } from "./stopsData";

// ─── Types ────────────────────────────────────────────────────────────────────

type Screen = "home" | "stops" | "detail" | "map" | "info";
type Lang = "el" | "en" | "de" | "sr" | "fr" | "it" | "ro" | "tr" | "bg";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function img(photoId: string, w: number, h: number): string {
  // If it's an Unsplash photo ID (starts with "photo-"), use Unsplash URL
  if (photoId.startsWith('photo-')) {
    return `https://images.unsplash.com/${photoId}?w=${w}&h=${h}&fit=crop&auto=format`;
  }
  // Otherwise it's a local import path, return as-is
  return photoId;
}

function fmtTime(sec: number): string {
  return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;
}

const CINZEL = { fontFamily: "Cinzel, serif" } as const;
const SCROLL_HIDE = { scrollbarWidth: "none" as const, msOverflowStyle: "none" as const };

// ─── Multilanguage Helpers ───────────────────────────────────────────────────

function getStopTitle(stop: Stop, lang: Lang): string {
  if (lang === "fr" && stop.titleFr) return stop.titleFr;
  if (lang === "bg" && stop.titleBg) return stop.titleBg;
  if (lang === "de" && stop.titleDe) return stop.titleDe;
  if (lang === "sr" && stop.titleSr) return stop.titleSr;
  if (lang === "it" && stop.titleIt) return stop.titleIt;
  if (lang === "ro" && stop.titleRo) return stop.titleRo;
  if (lang === "tr" && stop.titleTr) return stop.titleTr;
  if (lang === "en") return stop.titleEn;
  return stop.title;
}

function getStopCategory(stop: Stop, lang: Lang): string {
  if (lang === "fr" && stop.categoryFr) return stop.categoryFr;
  if (lang === "bg" && stop.categoryBg) return stop.categoryBg;
  if (lang === "de" && stop.categoryDe) return stop.categoryDe;
  if (lang === "sr" && stop.categorySr) return stop.categorySr;
  if (lang === "it" && stop.categoryIt) return stop.categoryIt;
  if (lang === "ro" && stop.categoryRo) return stop.categoryRo;
  if (lang === "tr" && stop.categoryTr) return stop.categoryTr;
  if (lang === "en") return stop.categoryEn;
  return stop.category;
}

function getStopDescription(stop: Stop, lang: Lang): string {
  if (lang === "fr" && stop.descriptionFr) return stop.descriptionFr;
  if (lang === "bg" && stop.descriptionBg) return stop.descriptionBg;
  if (lang === "de" && stop.descriptionDe) return stop.descriptionDe;
  if (lang === "sr" && stop.descriptionSr) return stop.descriptionSr;
  if (lang === "it" && stop.descriptionIt) return stop.descriptionIt;
  if (lang === "ro" && stop.descriptionRo) return stop.descriptionRo;
  if (lang === "tr" && stop.descriptionTr) return stop.descriptionTr;
  if (lang === "en") return stop.descriptionEn;
  return stop.description;
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [selectedStop, setSelectedStop] = useState<Stop>(STOPS[0]);
  const [lang, setLang] = useState<Lang>("el");
  const [favorites, setFavorites] = useState<Set<number>>(new Set([2, 3]));
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mapPin, setMapPin] = useState<Stop | null>(null);
  const [lightbox, setLightbox] = useState<{ srcs: string[]; index: number } | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const startTimeRef = useRef<number>(0);
  const isSpeakingRef = useRef<boolean>(false);
  const lastStopIdRef = useRef<number>(selectedStop.id);

  // Text-to-Speech - SIMPLIFIED for reliability
  useEffect(() => {
    clearInterval(timerRef.current);

    if (!isPlaying) {
      // Stop speech when paused
      if (window.speechSynthesis?.speaking) {
        window.speechSynthesis.cancel();
      }
      setProgress(0);
      return;
    }

    // Check if speech synthesis is available
    if (!window.speechSynthesis) {
      console.warn('[TTS] Speech synthesis not available');
      setIsPlaying(false);
      return;
    }

    const text = getStopDescription(selectedStop, lang);
    console.log('[TTS] Starting TTS - Text length:', text.length, 'Lang:', lang);

    // CRITICAL: Cancel any existing speech IMMEDIATELY and SYNCHRONOUSLY
    if (window.speechSynthesis.speaking) {
      console.log('[TTS] Canceling existing speech...');
      window.speechSynthesis.cancel();
    }

    // Create utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    // Set language
    const langCodes: Record<Lang, string> = {
      el: 'el-GR',
      en: 'en-US',
      de: 'de-DE',
      sr: 'sr-RS',
      fr: 'fr-FR',
      it: 'it-IT',
      ro: 'ro-RO',
      tr: 'tr-TR',
      bg: 'bg-BG',
    };
    utterance.lang = langCodes[lang];
    utterance.rate = 0.9;

    // Find voice
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      const targetLang = langCodes[lang];
      const langPrefix = targetLang.split('-')[0];

      const voice = voices.find(v => v.lang === targetLang) ||
                   voices.find(v => v.lang.toLowerCase().startsWith(langPrefix.toLowerCase())) ||
                   voices.find(v => v.lang.toLowerCase().includes(langPrefix.toLowerCase()));

      if (voice) utterance.voice = voice;
    }

    // Track progress with timer
    startTimeRef.current = Date.now();
    const estimatedDuration = text.length * 70;

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min(99, (elapsed / estimatedDuration) * 100);
      setProgress(progress);
    }, 100);

    // Event handlers
    utterance.onstart = () => {
      console.log('[TTS] ✅ Speech STARTED');
      isSpeakingRef.current = true;
    };

    utterance.onend = () => {
      console.log('[TTS] ✅ Speech ENDED normally');
      isSpeakingRef.current = false;
      clearInterval(timerRef.current);
      setProgress(100);
      setTimeout(() => {
        setIsPlaying(false);
        setProgress(0);
      }, 300);
    };

    utterance.onerror = (event) => {
      console.log('[TTS] ⚠️ Speech error:', event.error);
      isSpeakingRef.current = false;
      clearInterval(timerRef.current);
      setIsPlaying(false);
      setProgress(0);
      // Don't show alerts - errors are often due to normal interruptions
    };

    // Wait 500ms for cancel() to complete, then speak
    // This prevents the "interrupted" error
    setTimeout(() => {
      console.log('[TTS] 🔊 Calling speak()...');
      window.speechSynthesis.speak(utterance);
    }, 500);

    return () => {
      // Cleanup: just clear the timer
      clearInterval(timerRef.current);
      // Don't cancel speech here - it causes interruptions
      // Speech is cancelled when user pauses (isPlaying becomes false)
    };
  }, [isPlaying, selectedStop, lang]);

  const openStop = (stop: Stop) => {
    setSelectedStop(stop);
    setIsPlaying(false);
    setProgress(0);
    setScreen("detail");
  };

  const toggleFav = (id: number) => {
    setFavorites(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const elapsed = Math.floor((progress / 100) * selectedStop.durationSec);

  // ── Screen: Home ────────────────────────────────────────────────────────────

  const renderHome = () => (
    <div className="h-full flex flex-col overflow-y-auto" style={SCROLL_HIDE}>
      {/* Hero */}
      <div className="relative h-[270px] flex-shrink-0 bg-[#071520]">
        <img
          src={img("photo-1602028501878-f6695ba4894e", 780, 540)}
          alt="Αιγαίο Πέλαγος"
          className="w-full h-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(7,21,32,0.6) 0%, transparent 45%, #0a1929 100%)" }}
        />
        {/* Logo */}
        <div className="absolute inset-x-0 top-0 bottom-0 flex flex-col items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl px-3 py-2 mx-6" style={{ maxWidth: 320 }}>
            <img
              src={appLogo}
              alt="Η Αρχαία Θάσος αλλιώς – Ζωντανεύει με Playmobil"
              className="w-full object-contain"
              style={{ maxHeight: 200 }}
            />
          </div>
          <p className="text-[#c9a227] text-[9px] tracking-[0.35em] uppercase mt-3">
            {lang === "el" ? "Ηχητικός Οδηγός" : "Audio Guide"}
          </p>
        </div>
        {/* Lang selector */}
        <div className="absolute top-5 right-4">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase bg-[#0a1929] text-[#c9a227] border border-[rgba(201,162,39,0.4)] rounded-sm focus:outline-none focus:border-[#c9a227] cursor-pointer"
          >
            <option value="el">ΕΛΛΗΝΙΚΑ (EL)</option>
            <option value="en">ENGLISH (EN)</option>
            <option value="de">DEUTSCH (DE)</option>
            <option value="sr">SRPSKI (SR)</option>
            <option value="fr">FRANÇAIS (FR)</option>
            <option value="it">ITALIANO (IT)</option>
            <option value="ro">ROMÂNĂ (RO)</option>
            <option value="tr">TÜRKÇE (TR)</option>
            <option value="bg">БЪЛГАРСКИ (BG)</option>
          </select>
        </div>
      </div>

      {/* Nav grid */}
      <div className="px-4 pt-3 pb-2 flex-1">
        <div className="grid grid-cols-2 gap-2.5 mb-4">
          {[
            {
              icon: Headphones,
              label: lang === "el" ? "Έναρξη Ξενάγησης" : "Start Tour",
              sub: lang === "el" ? "40 στάσεις" : "40 stops",
              go: "stops" as Screen,
              accent: true,
            },
            {
              icon: MapIcon,
              label: lang === "el" ? "Χάρτης" : "Map",
              sub: lang === "el" ? "Διαδρομή" : "Route",
              go: "map" as Screen,
              accent: false,
            },
            {
              icon: List,
              label: lang === "el" ? "Στάσεις" : "Stops",
              sub: lang === "el" ? "Λίστα" : "List",
              go: "stops" as Screen,
              accent: false,
            },
            {
              icon: Info,
              label: lang === "el" ? "Πληροφορίες" : "Information",
              sub: lang === "el" ? "Ωράριο & Εισιτήρια" : "Hours & Tickets",
              go: "info" as Screen,
              accent: false,
            },
          ].map(({ icon: Icon, label, sub, go, accent }) => (
            <button
              key={label}
              onClick={() => setScreen(go)}
              className={`rounded-sm text-left p-4 border transition-all active:scale-[0.97] ${
                accent
                  ? "bg-[#c9a227] border-[#c9a227]"
                  : "bg-[#0f2440] border-[rgba(201,162,39,0.2)] hover:border-[rgba(201,162,39,0.5)]"
              }`}
            >
              <Icon className={`w-6 h-6 mb-3 ${accent ? "text-[#0a1929]" : "text-[#c9a227]"}`} />
              <div
                className={`text-[13px] font-semibold leading-tight ${accent ? "text-[#0a1929]" : "text-[#f0e9d6]"}`}
                style={CINZEL}
              >
                {label}
              </div>
              <div className={`text-[10px] mt-0.5 ${accent ? "text-[#0a1929] opacity-65" : "text-[#4a7a9a]"}`}>
                {sub}
              </div>
            </button>
          ))}
        </div>

        {/* Stats strip */}
        <div className="flex items-center justify-between bg-[#0f2440] border border-[rgba(201,162,39,0.2)] rounded-sm px-4 py-3 mb-3">
          {[
            { value: "40", label: lang === "el" ? "Στάσεις" : "Stops" },
            { value: "~5h", label: lang === "el" ? "Διάρκεια" : "Duration" },
            { value: "5ος", label: lang === "el" ? "αι. π.Χ." : "cent. BC" },
            { value: "2", label: lang === "el" ? "Γλώσσες" : "Languages" },
          ].map(({ value, label }, i, arr) => (
            <div key={label} className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-[#c9a227] text-[15px] font-bold" style={CINZEL}>{value}</div>
                <div className="text-[#3a6080] text-[8px] tracking-widest uppercase mt-0.5">{label}</div>
              </div>
              {i < arr.length - 1 && <div className="w-px h-7 bg-[rgba(201,162,39,0.15)]" />}
            </div>
          ))}
        </div>

        {/* QR note */}
        <div className="flex items-start gap-2">
          <QrCode className="w-3.5 h-3.5 text-[#c9a227] mt-0.5 flex-shrink-0" />
          <p className="text-[#3a6080] text-[10px] leading-relaxed">
            {lang === "el"
              ? "Σκανάρετε τα QR στα μνημεία για αυτόματη πλοήγηση στη σωστή στάση."
              : "Scan QR codes at each monument for automatic navigation to the correct stop."}
          </p>
        </div>
      </div>
    </div>
  );

  // ── Screen: Stops ───────────────────────────────────────────────────────────

  const renderStops = () => (
    <div className="h-full flex flex-col">
      <div className="flex-shrink-0 bg-[#071520] px-4 pt-3 pb-3.5 border-b border-[rgba(201,162,39,0.12)]">
        <div className="flex items-center gap-2.5">
          <button onClick={() => setScreen("home")} className="text-[#c9a227]">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-[#f0e9d6] text-sm font-bold tracking-[0.12em] uppercase" style={CINZEL}>
              {lang === "el" ? "Στάσεις" : "Stops"}
            </h2>
            <p className="text-[#3a6080] text-[9px] tracking-widest uppercase">
              {lang === "el" ? "Περίπατος Ανακαλύψεων · 40 Σημεία" : "Discovery Walk · 40 Points"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto" style={SCROLL_HIDE}>
        {STOPS.map(stop => (
          <button
            key={stop.id}
            onClick={() => openStop(stop)}
            className="w-full flex items-stretch border-b border-[rgba(201,162,39,0.08)] active:bg-[rgba(201,162,39,0.04)] transition-colors"
          >
            <div className="flex-shrink-0 w-10 flex items-center justify-center">
              <span className="text-[#c9a227] text-[13px] font-bold" style={CINZEL}>{stop.num}</span>
            </div>
            <div className="flex-shrink-0 w-[74px] my-2.5 rounded-sm overflow-hidden bg-[#071520]">
              <img
                src={img(stop.imageId, 148, 120)}
                alt={getStopTitle(stop, lang)}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 px-3 py-3 text-left min-w-0">
              <div className="text-[#f0e9d6] text-[13px] font-semibold leading-snug truncate" style={CINZEL}>
                {getStopTitle(stop, lang)}
              </div>
              <div className="text-[#3a6080] text-[9px] mt-0.5 tracking-wider uppercase">
                {getStopCategory(stop, lang)}
              </div>
              <div className="flex items-center gap-1 mt-1.5">
                <Clock className="w-2.5 h-2.5 text-[#c9a227]" />
                <span className="text-[#3a6080] text-[10px]">{stop.duration}</span>
                {favorites.has(stop.id) && (
                  <Heart className="w-2.5 h-2.5 text-[#c9a227] fill-[#c9a227] ml-1" />
                )}
              </div>
            </div>
            <div className="flex items-center pr-3 flex-shrink-0">
              <ChevronRight className="w-4 h-4 text-[rgba(201,162,39,0.3)]" />
            </div>
          </button>
        ))}
        <div className="h-4" />
      </div>
    </div>
  );

  // ── Screen: Detail ──────────────────────────────────────────────────────────

  const renderDetail = () => (
    <div className="h-full flex flex-col">
      {/* Hero */}
      <div
        className="relative flex-shrink-0 h-[195px] bg-[#071520]"
        onClick={selectedStop.localImages ? () => setLightbox({ srcs: selectedStop.localImages!, index: 0 }) : undefined}
        style={selectedStop.localImages ? { cursor: "pointer" } : undefined}
      >
        <img
          src={selectedStop.localImages?.[0] ?? img(selectedStop.imageId, 780, 390)}
          alt={getStopTitle(selectedStop, lang)}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(7,21,32,0.6) 0%, transparent 40%, #0a1929 100%)" }}
        />
        {/* Controls */}
        <div className="absolute top-3 inset-x-0 flex items-center justify-between px-4">
          <button
            onClick={() => setScreen("stops")}
            className="w-8 h-8 rounded-full bg-[rgba(10,25,41,0.75)] backdrop-blur-sm border border-[rgba(201,162,39,0.25)] flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4 text-[#f0e9d6]" />
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleFav(selectedStop.id)}
              className="w-8 h-8 rounded-full bg-[rgba(10,25,41,0.75)] backdrop-blur-sm border border-[rgba(201,162,39,0.25)] flex items-center justify-center"
            >
              <Heart
                className={`w-4 h-4 transition-colors ${
                  favorites.has(selectedStop.id) ? "text-[#c9a227] fill-[#c9a227]" : "text-[#f0e9d6]"
                }`}
              />
            </button>
            <button className="w-8 h-8 rounded-full bg-[rgba(10,25,41,0.75)] backdrop-blur-sm border border-[rgba(201,162,39,0.25)] flex items-center justify-center">
              <QrCode className="w-4 h-4 text-[#f0e9d6]" />
            </button>
          </div>
        </div>
        {/* Stop number */}
        <div className="absolute bottom-4 left-4 w-9 h-9 rounded-full border-2 border-[#c9a227] bg-[#0a1929] flex items-center justify-center">
          <span className="text-[#c9a227] text-[11px] font-bold" style={CINZEL}>{selectedStop.num}</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto" style={SCROLL_HIDE}>
        {/* Title */}
        <div className="px-5 pt-4 pb-3 border-b border-[rgba(201,162,39,0.12)]">
          <h2 className="text-[#f0e9d6] text-[19px] font-bold leading-tight" style={CINZEL}>
            {getStopTitle(selectedStop, lang)}
          </h2>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-[9px] tracking-widest uppercase text-[#c9a227] border border-[rgba(201,162,39,0.35)] px-2 py-0.5">
              {getStopCategory(selectedStop, lang)}
            </span>
            <div className="flex items-center gap-1 text-[#3a6080] text-[10px]">
              <Clock className="w-3 h-3" />
              {selectedStop.duration}
            </div>
          </div>
        </div>

        {/* Audio player */}
        <div className="mx-4 mt-4 bg-[#0f2440] rounded-sm border border-[rgba(201,162,39,0.2)] p-4">
          <div className="flex items-center gap-2 mb-3">
            <Volume2 className="w-3 h-3 text-[#c9a227]" />
            <span className="text-[#3a6080] text-[9px] tracking-widest uppercase">
              {lang === "el" ? "Ηχητική Αφήγηση" : "Audio Narration"}
            </span>
          </div>
          {/* Progress bar */}
          <div
            className="w-full h-1 bg-[rgba(201,162,39,0.12)] rounded-full mb-2 cursor-pointer relative"
            onClick={e => {
              const rect = e.currentTarget.getBoundingClientRect();
              setProgress(Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)));
            }}
          >
            <div
              className="h-full bg-[#c9a227] rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#c9a227] border-2 border-[#0a1929] shadow"
              style={{ left: `calc(${progress}% - 6px)` }}
            />
          </div>
          <div className="flex justify-between text-[#3a6080] text-[10px] mb-4">
            <span>{fmtTime(elapsed)}</span>
            <span>{fmtTime(selectedStop.durationSec)}</span>
          </div>
          {/* Controls */}
          <div className="flex items-center justify-center gap-7">
            <button
              className="text-[#3a6080] hover:text-[#c9a227] transition-colors"
              onClick={() => setProgress(p => Math.max(0, p - 8.33))}
            >
              <SkipBack className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsPlaying(p => !p)}
              className="w-[52px] h-[52px] rounded-full bg-[#c9a227] flex items-center justify-center hover:bg-[#d4aa2e] transition-colors active:scale-95 shadow-lg"
            >
              {isPlaying
                ? <Pause className="w-5 h-5 text-[#0a1929]" />
                : <Play className="w-5 h-5 text-[#0a1929] ml-0.5" />}
            </button>
            <button
              className="text-[#3a6080] hover:text-[#c9a227] transition-colors"
              onClick={() => setProgress(p => Math.min(100, p + 8.33))}
            >
              <SkipForward className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="px-5 pt-4">
          <div className="h-px bg-[rgba(201,162,39,0.12)] mb-4" />
          <div className="space-y-3">
            {getStopDescription(selectedStop, lang)
              .split("\n\n")
              .map((para, i) => (
                <p key={i} className="text-[#7aaac4] text-[13px] leading-relaxed">{para}</p>
              ))}
          </div>
        </div>

        {/* Google Maps link */}
        {selectedStop.mapsUrl && (
          <div className="px-5 pt-3 pb-1">
            <a
              href={selectedStop.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 w-full border border-[rgba(201,162,39,0.3)] rounded-sm px-4 py-3 hover:border-[rgba(201,162,39,0.65)] transition-colors group"
            >
              <MapPin className="w-4 h-4 text-[#c9a227] flex-shrink-0" />
              <span className="text-[#f0e9d6] text-[12px] font-semibold flex-1" style={CINZEL}>
                {lang === "el" ? "Δες στο Google Maps" : "View on Google Maps"}
              </span>
              <ChevronRight className="w-4 h-4 text-[#c9a227] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        )}

        {/* Photo strip */}
        <div className="px-5 pt-4 pb-3">
          <p className="text-[#3a6080] text-[9px] tracking-widest uppercase mb-2">
            {lang === "el" ? "Φωτογραφίες" : "Photos"}
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1" style={SCROLL_HIDE}>
            {selectedStop.localImages
              ? selectedStop.localImages.map((src, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[68px] h-[52px] rounded-sm bg-[#0f2440] overflow-hidden cursor-pointer"
                    onClick={() => setLightbox({ srcs: selectedStop.localImages!, index: i })}
                  >
                    <img
                      src={src}
                      alt={`${getStopTitle(selectedStop, lang)} ${i + 1}`}
                      className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))
              : STOPS.slice(0, 6).map(s => (
              <div
                key={s.id}
                className="flex-shrink-0 w-[68px] h-[52px] rounded-sm bg-[#0f2440] overflow-hidden cursor-pointer"
                onClick={() => openStop(s)}
              >
                <img
                  src={img(s.imageId, 136, 104)}
                  alt={s.title}
                  className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next stop */}

        {selectedStop.id < STOPS.length && (
          <div className="px-4 pb-5 pt-1">
            <button
              onClick={() => openStop(STOPS[selectedStop.id])}
              className="w-full border border-[rgba(201,162,39,0.28)] rounded-sm py-3 flex items-center justify-between px-4 hover:border-[rgba(201,162,39,0.65)] transition-colors group"
            >
              <div className="text-left">
                <div className="text-[#3a6080] text-[9px] tracking-widest uppercase">
                  {lang === "el" ? "Επόμενη Στάση" : "Next Stop"}
                </div>
                <div className="text-[#f0e9d6] text-[13px] font-semibold mt-0.5" style={CINZEL}>
                  {getStopTitle(STOPS[selectedStop.id], lang)}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#c9a227] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );

  // ── Screen: Map ─────────────────────────────────────────────────────────────

  const renderMap = () => {
    // The archaeological map image has:
    // - Left ~67% of width: actual map of the island
    // - Right ~33%: legend (we hide it by cropping via overflow)
    // - Top ~9% of height: header text
    // - Bottom ~6%: footer
    // SVG viewBox matches the image's 1.413:1 aspect ratio (70.8 height per 100 width)
    // Stop coordinates (mapX/mapY in 0–100) are mapped into the map area:
    //   sx = mapX * 0.655   (places markers in left 65.5% of image = map area)
    //   sy = 9 + mapY * 0.618  (shifts past 9% header, spreads into map body)

    return (
      <div className="h-full flex flex-col">
        <div className="flex-shrink-0 bg-[#071520] px-4 pt-3 pb-3.5 border-b border-[rgba(201,162,39,0.12)]">
          <div className="flex items-center gap-2.5">
            <button onClick={() => setScreen("home")} className="text-[#c9a227]">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex-1">
              <h2 className="text-[#f0e9d6] text-sm font-bold tracking-[0.12em] uppercase" style={CINZEL}>
                {lang === "el" ? "Χάρτης" : "Map"}
              </h2>
              <p className="text-[#3a6080] text-[9px] tracking-widest uppercase">
                {lang === "el" ? "Αρχαία Θάσος" : "Ancient Thassos"}
              </p>
            </div>
            <a
              href="https://www.google.com/maps/@40.7779,24.7073,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[rgba(201,162,39,0.12)] border border-[rgba(201,162,39,0.3)] rounded-sm px-3 py-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-[#c9a227]" />
              <span className="text-[#c9a227] text-[10px] font-semibold tracking-wide" style={CINZEL}>
                Google Maps
              </span>
            </a>
          </div>
        </div>

        <div className="flex-1 bg-[#0a1929] relative overflow-hidden">
          {/* Full-fit map container — no scroll */}
          <div className="absolute inset-0">
            <img
              src={thasosMapImage}
              alt="Αρχαία πόλη Θάσου"
              className="absolute inset-0 w-full h-full object-contain"
              draggable={false}
            />

            {/* SVG overlay — viewBox matches image's portrait aspect ratio */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
            >
              {STOPS.map(stop => {
                const sx = stop.mapX;
                const sy = stop.mapY;
                const active = mapPin?.id === stop.id;
                const r = active ? 6.5 : 5.0;
                return (
                  <g
                    key={stop.id}
                    onClick={() => setMapPin(active ? null : stop)}
                    style={{ cursor: "pointer" }}
                  >
                    {active && (
                      <circle cx={sx} cy={sy} r="9.0" fill="rgba(201,162,39,0.22)" />
                    )}
                    <circle
                      cx={sx}
                      cy={sy}
                      r={r}
                      fill={active ? "#c9a227" : "#0a1929"}
                      stroke={active ? "#0a1929" : "#c9a227"}
                      strokeWidth="0.45"
                      style={{ transition: "all 0.15s" }}
                    />
                    <text
                      x={sx}
                      y={sy + 0.5}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={active ? "#0a1929" : "#c9a227"}
                      fontSize={active ? "4.2" : "3.4"}
                      fontFamily="Cinzel, serif"
                      fontWeight="bold"
                      style={{ pointerEvents: "none" }}
                    >
                      {stop.id}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Pin info card */}
          {mapPin && (
            <div className="absolute bottom-0 inset-x-0 bg-[#0f2440] border-t border-[rgba(201,162,39,0.2)] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-[#c9a227] bg-[#0a1929] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#c9a227] text-[11px] font-bold" style={CINZEL}>{mapPin.num}</span>
                </div>
                <div>
                  <div className="text-[#f0e9d6] text-[13px] font-semibold" style={CINZEL}>
                    {getStopTitle(mapPin, lang)}
                  </div>
                  <div className="flex items-center gap-1 text-[#3a6080] text-[10px] mt-0.5">
                    <Clock className="w-2.5 h-2.5" />
                    {mapPin.duration}
                  </div>
                </div>
              </div>
              <button
                onClick={() => { openStop(mapPin); setMapPin(null); }}
                className="flex-shrink-0 bg-[#c9a227] text-[#0a1929] text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-sm hover:bg-[#d4aa2e] transition-colors"
              >
                {lang === "el" ? "Άνοιγμα" : "Open"}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ── Screen: Info ────────────────────────────────────────────────────────────

  const renderInfo = () => (
    <div className="h-full flex flex-col">
      <div className="flex-shrink-0 bg-[#071520] px-4 pt-3 pb-3.5 border-b border-[rgba(201,162,39,0.12)]">
        <div className="flex items-center gap-2.5">
          <button onClick={() => setScreen("home")} className="text-[#c9a227]">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-[#f0e9d6] text-sm font-bold tracking-[0.12em] uppercase" style={CINZEL}>
              {lang === "el" ? "Πληροφορίες" : "Information"}
            </h2>
            <p className="text-[#3a6080] text-[9px] tracking-widest uppercase">
              {lang === "el" ? "Έκθεση · Αρχαία Θάσος" : "Exhibition · Ancient Thassos"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={SCROLL_HIDE}>

        {/* Exhibition banner */}
        <div className="bg-[#0f2440] rounded-sm border border-[rgba(201,162,39,0.35)] p-4 text-center">
          <div className="text-[#c9a227] text-[8px] tracking-[0.38em] uppercase mb-1">
            {lang === "el" ? "Έκθεση" : "Exhibition"}
          </div>
          <div className="text-[#f0e9d6] text-[16px] font-bold leading-snug" style={CINZEL}>
            {lang === "el" ? "Η ΑΡΧΑΙΑ ΘΑΣΟΣ..." : "ANCIENT THASSOS..."}
          </div>
          <div className="text-[#c9a227] text-[13px] font-semibold mt-0.5" style={CINZEL}>
            {lang === "el" ? "αλλιώς" : "differently"}
          </div>
        </div>

        {/* Hours */}
        <div className="bg-[#0f2440] rounded-sm border border-[rgba(201,162,39,0.2)] p-4">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-3.5 h-3.5 text-[#c9a227]" />
            <h3 className="text-[#f0e9d6] text-[10px] font-bold tracking-widest uppercase" style={CINZEL}>
              {lang === "el" ? "Ωράριο Λειτουργίας" : "Opening Hours"}
            </h3>
          </div>
          {[
            { days: lang === "el" ? "Καθημερινά" : "Daily", hours: "10:00 — 14:00", open: true },
          ].map(({ days, hours, open }) => (
            <div key={days} className="flex justify-between items-center py-2 border-b border-[rgba(201,162,39,0.07)] last:border-0">
              <span className="text-[#5a8aaa] text-[11px]">{days}</span>
              <span className={`text-[11px] font-medium ${open ? "text-[#f0e9d6]" : "text-[rgba(201,162,39,0.3)]"}`}>
                {hours}
              </span>
            </div>
          ))}
        </div>

        {/* Tickets */}
        <div className="bg-[#0f2440] rounded-sm border border-[rgba(201,162,39,0.2)] p-4">
          <div className="flex items-center gap-2 mb-3">
            <Star className="w-3.5 h-3.5 text-[#c9a227]" />
            <h3 className="text-[#f0e9d6] text-[10px] font-bold tracking-widest uppercase" style={CINZEL}>
              {lang === "el" ? "Εισιτήρια" : "Tickets"}
            </h3>
          </div>
          {[
            { type: lang === "el" ? "Γενική Είσοδος" : "General Admission", price: "€ 4" },
            { type: lang === "el" ? "Παιδικό" : "Children", price: "€ 2" },
            { type: lang === "el" ? "ΑμεΑ" : "Disabled", price: lang === "el" ? "Δωρεάν" : "Free" },
          ].map(({ type, price }) => (
            <div key={type} className="flex justify-between items-center py-2 border-b border-[rgba(201,162,39,0.07)] last:border-0">
              <span className="text-[#5a8aaa] text-[11px]">{type}</span>
              <span className="text-[#c9a227] text-[11px] font-bold" style={CINZEL}>{price}</span>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="bg-[#0f2440] rounded-sm border border-[rgba(201,162,39,0.2)] p-4">
          <div className="flex items-center gap-2 mb-3">
            <Phone className="w-3.5 h-3.5 text-[#c9a227]" />
            <h3 className="text-[#f0e9d6] text-[10px] font-bold tracking-widest uppercase" style={CINZEL}>
              {lang === "el" ? "Επικοινωνία" : "Contact"}
            </h3>
          </div>
          {[
            { icon: Phone, label: "+30 6946506997" },
            { icon: MapPin, label: lang === "el" ? "Λιμένας Θάσου, 640 04" : "Limenas Thassos, 640 04" },
            { icon: MapPin, label: lang === "el" ? "ΚΑΛΟΓΕΡΙΚΌ, Παλαιό Λιμανάκι Λιμένα Θάσου" : "KALOGERIKO, Old Harbour, Limenas Thassos" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-start gap-3 py-1.5 border-b border-[rgba(201,162,39,0.07)] last:border-0">
              <Icon className="w-3 h-3 text-[#c9a227] flex-shrink-0 mt-0.5" />
              <span className="text-[#7aaac4] text-[11px] leading-relaxed">{label}</span>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="bg-[#0f2440] rounded-sm border border-[rgba(201,162,39,0.2)] p-4">
          <div className="text-[#3a6080] text-[9px] tracking-widest uppercase mb-3">Social Media</div>
          <div className="space-y-2">
            {[
              { label: "Instagram", handle: "@ancienThassosplaymobil" },
              { label: "Facebook", handle: "ancienThassosplaymobil" },
            ].map(({ label, handle }) => (
              <div key={label} className="flex items-center gap-2 border border-[rgba(201,162,39,0.15)] rounded-sm px-3 py-2">
                <Share2 className="w-3 h-3 text-[#c9a227]" />
                <span className="text-[#3a6080] text-[9px] tracking-wider uppercase">{label}</span>
                <span className="text-[#7aaac4] text-[11px] ml-auto">{handle}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-4 pb-2">
          <div className="text-[#c9a227] text-[14px] font-bold tracking-[0.2em] uppercase" style={CINZEL}>
            Αρχαία Θάσος
          </div>
          <div className="text-[#c9a227] text-[11px] mt-0.5 opacity-60" style={CINZEL}>αλλιώς</div>
          <div className="text-[#3a6080] text-[9px] tracking-widest uppercase mt-2">Audio Guide v1.0</div>
          <div className="text-[#1e4060] text-[9px] mt-1">© 2025 ancienThassosplaymobil</div>
        </div>
      </div>
    </div>
  );

  // ── Bottom Nav ──────────────────────────────────────────────────────────────

  const renderBottomNav = () => {
    const tabs: { id: Screen; icon: typeof Home; el: string; en: string }[] = [
      { id: "home", icon: Home, el: "Αρχή", en: "Home" },
      { id: "stops", icon: List, el: "Στάσεις", en: "Stops" },
      { id: "map", icon: MapIcon, el: "Χάρτης", en: "Map" },
      { id: "info", icon: Info, el: "Πληρ.", en: "Info" },
    ];
    return (
      <div className="flex-shrink-0 bg-[#071520] border-t border-[rgba(201,162,39,0.12)] flex">
        {tabs.map(({ id, icon: Icon, el, en }) => {
          const active = screen === id || (id === "stops" && screen === "detail");
          return (
            <button
              key={id}
              onClick={() => setScreen(id)}
              className={`flex-1 flex flex-col items-center pt-2 pb-1.5 gap-0.5 transition-colors ${
                active ? "text-[#c9a227]" : "text-[#2a5070] hover:text-[#4a7a9a]"
              }`}
            >
              <Icon className="w-[18px] h-[18px]" />
              <span className="text-[8px] tracking-widest uppercase">{lang === "el" ? el : en}</span>
              {active && <div className="w-3.5 h-[2px] bg-[#c9a227] rounded-full" />}
            </button>
          );
        })}
      </div>
    );
  };

  // ── Root render ─────────────────────────────────────────────────────────────

  return (
    <div
      className="min-h-screen bg-[#040d18] flex items-center justify-center relative overflow-hidden"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 25% 30%, rgba(201,162,39,0.055) 0%, transparent 52%), radial-gradient(ellipse at 75% 70%, rgba(10,30,70,0.4) 0%, transparent 52%)",
        }}
      />

      {/* Desktop label */}
      <div className="hidden sm:block absolute top-5 inset-x-0 text-center pointer-events-none">
        <span className="text-[#c9a227] text-[8px] tracking-[0.55em] uppercase opacity-35" style={CINZEL}>
          Ancient Thassos · Audio Guide App
        </span>
      </div>

      {/* Phone shell */}
      <div
        className="w-full h-screen sm:w-[390px] sm:h-[844px] sm:max-h-[92vh] bg-[#0a1929] sm:rounded-[44px] overflow-hidden flex flex-col"
        style={{
          boxShadow:
            "0 0 0 1px rgba(201,162,39,0.1), 0 0 0 2px rgba(4,13,24,0.9), 0 45px 90px rgba(0,0,0,0.85), 0 0 60px rgba(10,25,55,0.4)",
        }}
      >

        {/* Active screen */}
        <div className="flex-1 overflow-hidden">
          {screen === "home" && renderHome()}
          {screen === "stops" && renderStops()}
          {screen === "detail" && renderDetail()}
          {screen === "map" && renderMap()}
          {screen === "info" && renderInfo()}
        </div>

        {/* Bottom nav */}
        {renderBottomNav()}

        {/* Home indicator bar */}
        <div className="flex-shrink-0 h-[18px] bg-[#071520] flex items-center justify-center">
          <div className="w-28 h-[3px] bg-[#f0e9d6] opacity-10 rounded-full" />
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="absolute inset-0 z-50 flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.82)" }}
            onClick={() => setLightbox(null)}
          >
            <div
              className="w-[90%] rounded-xl overflow-hidden flex flex-col"
              style={{ background: "#0f1e2e", maxHeight: "82%" }}
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-[rgba(255,255,255,0.07)]">
                <button
                  onClick={() => setLightbox(null)}
                  className="w-7 h-7 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <span className="text-white text-[11px] opacity-50">
                  {lightbox.index + 1} / {lightbox.srcs.length}
                </span>
                <div className="w-7" />
              </div>

              {/* Image */}
              <div className="flex items-center justify-center bg-black" style={{ maxHeight: 320 }}>
                <img
                  src={lightbox.srcs[lightbox.index]}
                  alt=""
                  style={{ maxHeight: 320, width: "100%", objectFit: "contain" }}
                />
              </div>

              {/* Prev / Next */}
              {lightbox.srcs.length > 1 && (
                <div className="flex items-center justify-between px-4 py-3">
                  <button
                    onClick={() => setLightbox(lb => lb && lb.index > 0 ? { ...lb, index: lb.index - 1 } : lb)}
                    className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center disabled:opacity-20"
                    disabled={lightbox.index === 0}
                  >
                    <ChevronLeft className="w-4 h-4 text-white" />
                  </button>
                  <div className="flex gap-1.5 items-center">
                    {lightbox.srcs.map((_, i) => (
                      <div
                        key={i}
                        onClick={() => setLightbox(lb => lb ? { ...lb, index: i } : lb)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${i === lightbox.index ? "w-4 bg-[#c9a227]" : "w-1.5 bg-white opacity-30"}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setLightbox(lb => lb && lb.index < lb.srcs.length - 1 ? { ...lb, index: lb.index + 1 } : lb)}
                    className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center disabled:opacity-20"
                    disabled={lightbox.index === lightbox.srcs.length - 1}
                  >
                    <ChevronRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
