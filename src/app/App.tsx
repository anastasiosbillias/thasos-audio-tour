import { useState, useEffect, useRef } from "react";
import thasosMapImage from "@/imports/09bef8c3-129f-4255-ba8b-be92674d35e7.png";
import appLogo from "@/imports/ChatGPT_Image_22_____2026__07_58_21__._..png";
import stop35img1 from "@/imports/8e475128-2f46-44e3-8c9e-c49baacef2cc__1_.jfif";
import stop35img2 from "@/imports/a388d98a-68b8-4cfe-9645-3f1bc3ba7dc1.jfif";
import stop35img3 from "@/imports/475430318_591524020422791_3952770634355504451_n.jpg";
import stop35img4 from "@/imports/475921816_591523733756153_5506107075295454022_n.jpg";
import stop35img5 from "@/imports/475789296_591523767089483_9035000822743674481_n.jpg";
import stop35MainImg from "@/imports/8e475128-2f46-44e3-8c9e-c49baacef2cc__1_-1.jfif";
import stop1img1 from "@/imports/1000005343.jpg";
import stop1img2 from "@/imports/1000005352.jpg";
import stop2img1 from "@/imports/_____1_-1.jpg";
import stop2img2 from "@/imports/_____1.jpg";
import stop2img3 from "@/imports/_____5_.jpg";
import stop2img4 from "@/imports/_____1_-2.jpg";
import stop2img5 from "@/imports/_____3_-1.jpg";
import stop2img6 from "@/imports/_____1-1.jpg";
import stop2img7 from "@/imports/_____5_-1.jpg";
import stop36img1 from "@/imports/543d09cd-b8b7-4568-90fd-c4cef292d243.jpg";
import stop36img2 from "@/imports/83570312-d181-4200-a9ad-1068b7453ec5.jpg";
import stop36img3 from "@/imports/_____2_.jpg";
import stop36img4 from "@/imports/_________3_.jpg";
import stop36img5 from "@/imports/_____2_-2.jpg";
import stop36img6 from "@/imports/________4_.jpg";
import stop36img7 from "@/imports/_________3_-2.jpg";
import stop36img8 from "@/imports/_____2__-__________.jpg";
import stop20img1 from "@/imports/______________1_.jpg";
import stop20img2 from "@/imports/______________2_.jpg";
import stop3img1 from "@/imports/_____.jpg";
import stop3img2 from "@/imports/_____1_.jpg";
import stop3img3 from "@/imports/_____2_-1.jpg";
import stop3img4 from "@/imports/_____3___2_.jpg";
import stop3img5 from "@/imports/_____3_.jpg";
import stop10img1 from "@/imports/______2_.jpg";
import stop10img2 from "@/imports/_______1.jpg";
import stop10img3 from "@/imports/_________2_.jpg";
import stop10img4 from "@/imports/_________3_-1.jpg";
import stop11img1 from "@/imports/____1.jpg";
import stop11img2 from "@/imports/____2_.jpg";
import stop4img1 from "@/imports/_______1-1.jpg";
import stop7img1 from "@/imports/____2_-1.jpg";
import stop7img2 from "@/imports/____2.jpg";
import stop7img3 from "@/imports/____5_-1.jpg";
import stop14img1 from "@/imports/____1-1.jpg";
import stop14img2 from "@/imports/____4_.jpg";
import stop6img1 from "@/imports/____1_.jpg";
import stop6img2 from "@/imports/______2_-1.jpg";
import stop8img1 from "@/imports/_______1-2.jpg";
import stop8img2 from "@/imports/_________2_-1.jpg";
import stop8img3 from "@/imports/_________3_-3.jpg";
import {
  Play, Pause, ChevronLeft, ChevronRight, MapPin, Info,
  List, Heart, Volume2, Clock, Phone, Mail, Globe,
  Headphones, Map as MapIcon, SkipForward, SkipBack,
  QrCode, Star, Home, Share2,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Screen = "home" | "stops" | "detail" | "map" | "info";
type Lang = "el" | "en" | "de" | "sr" | "fr" | "it" | "ro" | "tr" | "bg";

interface Stop {
  id: number;
  num: string;
  title: string;
  titleEn: string;
  titleDe?: string;
  titleSr?: string;
  titleFr?: string;
  titleIt?: string;
  titleRo?: string;
  titleTr?: string;
  titleBg?: string;
  category: string;
  categoryEn: string;
  categoryDe?: string;
  categorySr?: string;
  categoryFr?: string;
  categoryIt?: string;
  categoryRo?: string;
  categoryTr?: string;
  categoryBg?: string;
  duration: string;
  durationSec: number;
  imageId: string;
  description: string;
  descriptionEn: string;
  descriptionDe?: string;
  descriptionSr?: string;
  descriptionFr?: string;
  descriptionIt?: string;
  descriptionRo?: string;
  descriptionTr?: string;
  descriptionBg?: string;
  mapX: number;
  mapY: number;
  mapsUrl?: string;
  localImages?: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const IMGS = [
  stop1img1,  // Μακέτα Μύθου της Θάσου
  stop20img1,  // Ανοικτή Αγορά
  stop3img1,  // Πύλη Θεάς με το Άρμα
  stop10img1,  // Ιερό Ηρακλέους
  stop35img1,  // Διονύσιο
  stop36img1,  // Πύλη του Παρμένωνα
  stop11img1,  // Ιερό Αγοραίου Διός
  stop4img1,  // Ασπίδα Κεφαλής Λέοντα
  stop7img1,  // Πύλη-Πύργος Δία και Ήρας
  stop14img1,  // Ο Ξέρξης στη Θάσο
  stop2img1,  // Πύλη του Ερμή
  stop6img1,  // Πύργος-Πύλη Σωτά
  stop8img1,  // Προπύλαια Ηρακλείου
];

const STOPS: Stop[] = [
  {
    id: 1, num: "01",
    title: "Ο Μύθος της Θάσου",
    titleEn: "The Myth of Thassos",
    titleDe: "Der Mythos von Thasos",
    titleIt: "Il Mito di Thasos",
    titleFr: "Le Mythe de Thasos",
    titleRo: "Mitul lui Thasos",
    titleSr: "Mit o Tasosu",
    titleBg: "Митът за Тасос",
    titleTr: "Thasos Efsanesi",
    category: "Μύθος",
    categoryEn: "Myth",
    categoryDe: "Mythos",
    categoryIt: "Mito",
    categoryFr: "Mythe",
    categoryRo: "Mit",
    categorySr: "Mit",
    categoryBg: "Мит",
    categoryTr: "Efsane",
    duration: "8 λεπτά", durationSec: 480,
    imageId: IMGS[0],
    description: "Η ιστορία της Θάσου ξεκινά μέσα από τους μεγάλους μύθους της ελληνικής μυθολογίας και συνδέεται άμεσα με την αρπαγή της Ευρώπης από τον Δία.\n\nΣύμφωνα με την παράδοση, ο Δίας ερωτεύτηκε την όμορφη Ευρώπη, κόρη του βασιλιά Αγήνορα της Φοινίκης. Για να την πλησιάσει χωρίς να την τρομάξει, μεταμορφώθηκε σε έναν εντυπωσιακό λευκό ταύρο με ήρεμο βλέμμα και χρυσά κέρατα.\n\nΗ Ευρώπη, γοητευμένη από το πανέμορφο ζώο, ανέβηκε στην πλάτη του. Τότε ο Δίας έπεσε στη θάλασσα και την οδήγησε μακριά, μέχρι την Κρήτη.\n\nΌταν ο βασιλιάς Αγήνορας έμαθε την εξαφάνιση της κόρης του, έδωσε εντολή στους γιους του να ξεκινήσουν αναζήτηση σε κάθε γωνιά του κόσμου και να μην επιστρέψουν αν δεν τη βρουν. Ανάμεσα στους αδελφούς της Ευρώπης ήταν και ο Θάσος.\n\nΚατά τη διάρκεια του μεγάλου αυτού ταξιδιού, ο Θάσος έφτασε σε ένα καταπράσινο νησί του Βορείου Αιγαίου. Τα πλούσια δάση, τα καθαρά νερά, τα βουνά και ο φυσικός πλούτος του τόπου τον εντυπωσίασαν τόσο πολύ, ώστε αποφάσισε να εγκατασταθεί εκεί. Έτσι, σύμφωνα με τον μύθο, το νησί πήρε το όνομά του: Θάσος.\n\nΗ μυθολογία συνδέει επίσης τη Θάσο με τη λατρεία του Διονύσου, θεού του κρασιού και της γιορτής, καθώς το νησί φημιζόταν από την αρχαιότητα για το εξαιρετικό κρασί του. Παράλληλα, οι αρχαίοι πίστευαν ότι στη Θάσο κατοικούσαν νύμφες και θεότητες της φύσης, που προστάτευαν τα δάση και τις πηγές του νησιού.\n\nΟ μύθος του Θάσου δεν αποτελεί μόνο μια όμορφη ιστορία της αρχαιότητας, αλλά και ένα σύμβολο εξερεύνησης, αναζήτησης και νέας αρχής. Μέσα από αυτόν, η Θάσος παρουσιάζεται ως ένας τόπος ευλογημένος από θεούς και ήρωες, όπου ο άνθρωπος συναντά τη φύση, τη θάλασσα και τον πολιτισμό.\n\nΣήμερα, ο μύθος συνεχίζει να συνοδεύει το νησί και να θυμίζει στους επισκέπτες πως κάθε γωνιά της Θάσου κρύβει ιστορία χιλιάδων ετών, γεμάτη θρύλους, ταξίδια και πολιτισμό.",
    descriptionEn: `The history of Thasos begins through the great myths of Greek mythology and is directly connected to the abduction of Europa by Zeus.

According to tradition, Zeus fell in love with the beautiful Europa, daughter of King Agenor of Phoenicia. To approach her without frightening her, he transformed himself into a magnificent white bull with calm eyes and golden horns.

Enchanted by the beautiful animal, Europa climbed onto its back. Zeus then entered the sea and carried her away to Crete.

When King Agenor learned of his daughter's disappearance, he ordered his sons to search every corner of the world and never return unless they found her. Among Europa's brothers was Thasos.

During this great journey, Thasos arrived at a lush green island in the Northern Aegean. Its rich forests, crystal-clear waters, mountains, and natural wealth impressed him so deeply that he decided to settle there. Thus, according to the myth, the island received its name: Thasos.

Mythology also connects Thasos with the worship of Dionysus, the god of wine and celebration, since the island was famous from ancient times for its exceptional wine. At the same time, the ancient people believed that nymphs and nature deities lived on Thasos, protecting the island's forests and springs.

The myth of Thasos is not only a beautiful ancient story, but also a symbol of exploration, search, and new beginnings. Through it, Thasos is presented as a place blessed by gods and heroes, where humanity meets nature, the sea, and civilization.

Even today, the myth continues to accompany the island and reminds visitors that every corner of Thasos hides a history thousands of years old, full of legends, journeys, and culture.`,
    descriptionDe: `Die Geschichte von Thasos beginnt mit den großen Mythen der griechischen Mythologie und ist eng mit der Entführung Europas durch Zeus verbunden.

Der Überlieferung nach verliebte sich Zeus in die schöne Europa, die Tochter des Königs Agenor von Phönizien. Um sich ihr zu nähern, ohne sie zu erschrecken, verwandelte er sich in einen beeindruckenden weißen Stier mit ruhigem Blick und goldenen Hörnern.

Europa, fasziniert von dem wunderschönen Tier, stieg auf seinen Rücken. Daraufhin sprang Zeus ins Meer und brachte sie bis nach Kreta.

Als König Agenor vom Verschwinden seiner Tochter erfuhr, befahl er seinen Söhnen, in alle Teile der Welt aufzubrechen und nicht zurückzukehren, bevor sie Europa gefunden hätten. Unter Europas Brüdern befand sich auch Thasos.

Während dieser langen Reise gelangte Thasos auf eine grüne Insel in der Nordägäis. Die dichten Wälder, das klare Wasser, die Berge und der natürliche Reichtum der Insel beeindruckten ihn so sehr, dass er beschloss, sich dort niederzulassen. So erhielt die Insel der Sage nach ihren Namen: Thasos.

Die Mythologie verbindet Thasos außerdem mit der Verehrung des Dionysos, des Gottes des Weines und des Festes, da die Insel seit der Antike für ihren hervorragenden Wein berühmt war. Gleichzeitig glaubten die Menschen der Antike, dass auf Thasos Nymphen und Naturgottheiten lebten, die die Wälder und Quellen der Insel schützten.

Der Mythos von Thasos ist nicht nur eine schöne Geschichte aus der Antike, sondern auch ein Symbol für Entdeckung, Suche und Neubeginn. Durch ihn erscheint Thasos als ein von Göttern und Helden gesegneter Ort, an dem Mensch, Natur, Meer und Kultur aufeinandertreffen.

Auch heute begleitet dieser Mythos die Insel weiterhin und erinnert die Besucher daran, dass jede Ecke von Thasos eine jahrtausendealte Geschichte voller Legenden, Reisen und Kultur verbirgt.`,
    descriptionIt: `La storia di Thasos inizia attraverso i grandi miti della mitologia greca ed è direttamente collegata al rapimento di Europa da parte di Zeus.

Secondo la tradizione, Zeus si innamorò della bellissima Europa, figlia del re Agenore di Fenicia. Per avvicinarsi a lei senza spaventarla, si trasformò in uno splendido toro bianco dagli occhi tranquilli e dalle corna dorate.

Europa, affascinata dal magnifico animale, salì sul suo dorso. A quel punto Zeus si gettò nel mare e la portò lontano, fino a Creta.

Quando il re Agenore venne a sapere della scomparsa della figlia, ordinò ai suoi figli di cercarla in ogni angolo del mondo e di non tornare senza averla trovata. Tra i fratelli di Europa vi era anche Thasos.

Durante questo lungo viaggio, Thasos arrivò su un'isola verdeggiante del Mar Egeo settentrionale. Le ricche foreste, le acque cristalline, le montagne e le risorse naturali del luogo lo colpirono così profondamente che decise di stabilirsi lì. Così, secondo il mito, l'isola prese il suo nome: Thasos.

La mitologia collega inoltre Thasos al culto di Dioniso, dio del vino e della festa, poiché l'isola era famosa fin dall'antichità per il suo eccellente vino. Allo stesso tempo, gli antichi credevano che a Thasos vivessero ninfe e divinità della natura che proteggevano le foreste e le sorgenti dell'isola.

Il mito di Thasos non rappresenta soltanto una bella storia dell'antichità, ma anche un simbolo di esplorazione, ricerca e nuovo inizio. Attraverso questo mito, Thasos appare come un luogo benedetto da dèi ed eroi, dove l'uomo incontra la natura, il mare e la civiltà.

Ancora oggi il mito continua ad accompagnare l'isola e a ricordare ai visitatori che ogni angolo di Thasos nasconde una storia millenaria fatta di leggende, viaggi e cultura.`,
    descriptionFr: `L'histoire de Thasos commence à travers les grands mythes de la mythologie grecque et est directement liée à l'enlèvement d'Europe par Zeus.

Selon la tradition, Zeus tomba amoureux de la belle Europe, fille du roi Agénor de Phénicie. Pour l'approcher sans l'effrayer, il se transforma en un magnifique taureau blanc aux yeux paisibles et aux cornes dorées.

Europe, fascinée par ce splendide animal, monta sur son dos. Zeus se jeta alors dans la mer et l'emmena jusqu'en Crète.

Lorsque le roi Agénor apprit la disparition de sa fille, il ordonna à ses fils de partir à sa recherche dans tous les coins du monde et de ne pas revenir sans l'avoir retrouvée. Parmi les frères d'Europe se trouvait aussi Thasos.

Au cours de ce grand voyage, Thasos arriva sur une île verdoyante du nord de la mer Égée. Les riches forêts, les eaux cristallines, les montagnes et les richesses naturelles de l'île l'impressionnèrent tellement qu'il décida de s'y installer. Ainsi, selon le mythe, l'île prit son nom : Thasos.

La mythologie associe également Thasos au culte de Dionysos, dieu du vin et de la fête, car l'île était célèbre depuis l'Antiquité pour son excellent vin. En même temps, les anciens croyaient que des nymphes et des divinités de la nature habitaient Thasos et protégeaient les forêts et les sources de l'île.

Le mythe de Thasos n'est pas seulement une belle histoire de l'Antiquité, mais aussi un symbole d'exploration, de quête et de nouveau départ. À travers lui, Thasos apparaît comme un lieu béni par les dieux et les héros, où l'homme rencontre la nature, la mer et la civilisation.

Aujourd'hui encore, ce mythe accompagne l'île et rappelle aux visiteurs que chaque coin de Thasos cache une histoire millénaire remplie de légendes, de voyages et de culture.`,
    descriptionRo: `Istoria Thasos începe prin marile mituri ale mitologiei grecești și este legată direct de răpirea Europei de către Zeus.

Conform tradiției, Zeus s-a îndrăgostit de frumoasa Europa, fiica regelui Agenor din Fenicia. Pentru a se apropia de ea fără să o sperie, s-a transformat într-un taur alb impresionant, cu privire blândă și coarne aurii.

Fascinată de minunatul animal, Europa s-a urcat pe spatele lui. Atunci Zeus a intrat în mare și a dus-o departe, până în Creta.

Când regele Agenor a aflat despre dispariția fiicei sale, le-a poruncit fiilor săi să o caute în toate colțurile lumii și să nu se întoarcă fără ea. Printre frații Europei se afla și Thasos.

În timpul acestei mari călătorii, Thasos a ajuns pe o insulă verde și bogată din nordul Mării Egee. Pădurile dese, apele limpezi, munții și bogăția naturală a locului l-au impresionat atât de mult încât a decis să se stabilească acolo. Astfel, conform mitului, insula a primit numele său: Thasos.

Mitologia leagă, de asemenea, Thasos de cultul lui Dionysos, zeul vinului și al sărbătorii, deoarece insula era renumită încă din antichitate pentru vinul său excelent. În același timp, anticii credeau că pe Thasos trăiau nimfe și divinități ale naturii care protejau pădurile și izvoarele insulei.

Mitul lui Thasos nu este doar o poveste frumoasă a antichității, ci și un simbol al explorării, căutării și al unui nou început. Prin acest mit, Thasos apare ca un loc binecuvântat de zei și eroi, unde omul întâlnește natura, marea și civilizația.

Chiar și astăzi, mitul continuă să însoțească insula și să le amintească vizitatorilor că fiecare colț al Thasosului ascunde o istorie de mii de ani, plină de legende, călătorii și cultură.`,
    descriptionSr: `Istorija Thasos počinje kroz velike mitove grčke mitologije i direktno je povezana sa otmicom Evrope od strane Zevsa.

Prema predanju, Zevs se zaljubio u prelepu Evropu, ćerku kralja Agenora iz Fenikije. Da bi joj prišao a da je ne uplaši, pretvorio se u veličanstvenog belog bika sa mirnim pogledom i zlatnim rogovima.

Fascinirana divnim životinjom, Evropa je sjela na njegova leđa. Tada je Zevs skočio u more i odveo je daleko, sve do Krita.

Kada je car Agenor saznao za nestanak svoje kćeri, naredio je svojim sinovima da je traže u svakom kutku sveta i da se ne vrate dok je ne pronađu. Među braćom Evrope bio je i Tasos.

Tokom ovog dugog putovanja, Tasos je stigao do zelenog ostrva na severu Egejskog mora. Bogate šume, kristalno čiste vode, planine i prirodno bogatstvo mesta toliko su ga impresionirali da je odlučio da se naseli tamo. Tako je, prema mitu, ostrvo dobilo svoje ime: Tasos.

Mitologija takođe povezuje Tasos sa kultom Dionisa, boga vina i praznika, jer je ostrvo bilo poznato još od antike po svom odličnom vinu. Istovremeno, stari Grci su verovali da na Tasosu žive nimfe i božanstva prirode koja su štitila šume i izvore ostrva.

Mit o Tasosu nije samo lepa priča iz antike, već i simbol istraživanja, potrage i novog početka. Kroz njega, Tasos se pojavljuje kao mesto blagoslovljeno od bogova i heroja, gde se čovek susreće sa prirodom, morem i civilizacijom.

I danas mit nastavlja da prati ostrvo i podsećaju posetiocima da svaki ugao Tasosa krije istoriju od hiljadama godina punu legendi, putovanja i kulture.`,
    descriptionBg: `Историята на Thasos започва чрез великите митове на гръцката митология и е пряко свързана с отвличането на Европа от Зевс.

Според преданието Зевс се влюбил в красивата Европа, дъщеря на цар Агенор от Финикия. За да се приближи до нея, без да я уплаши, той се превърнал във великолепен бял бик със спокоен поглед и златни рога.

Очарована от красивото животно, Европа се качила на гърба му. Тогава Зевс се хвърлил в морето и я отвел далеч, чак до Крит.

Когато цар Агенор научил за изчезването на дъщеря си, той заповядал на синовете си да я търсят във всяко кътче на света и да не се връщат, докато не я намерят. Сред братята на Европа бил и Тасос.

По време на това голямо пътешествие Тасос стигнал до зелен остров в Северно Егейско море. Богатите гори, чистите води, планините и природното богатство на мястото го впечатлили толкова силно, че решил да се засели там. Така, според мита, островът получил своето име: Тасос.

Митологията свързва Тасос и с култа към Дионис, бога на виното и празненствата, тъй като островът бил известен още от древността със своето изключително вино. В същото време древните вярвали, че на Тасос живеят нимфи и природни божества, които пазят горите и изворите на острова.

Митът за Тасос не е само красива история от древността, но и символ на изследване, търсене и ново начало. Чрез него Тасос е представен като място, благословено от богове и герои, където човекът среща природата, морето и цивилизацията.

И днес митът продължава да съпътства острова и да напомня на посетителите, че всеки ъгъл на Тасос крие история на хиляди години, изпълнена с легенди, пътешествия и култура.`,
    descriptionTr: `Thasos adasının tarihi, Yunan mitolojisinin büyük efsaneleriyle başlar ve doğrudan Zeus'un Europa'yı kaçırmasıyla bağlantılıdır.

Efsaneye göre Zeus, Fenike Kralı Agenor'un güzel kızı Europa'ya âşık olur. Onu korkutmadan yaklaşabilmek için sakin bakışlı ve altın boynuzlu görkemli beyaz bir boğaya dönüşür.

Europa bu güzel hayvandan etkilenerek onun sırtına biner. Bunun üzerine Zeus denize atlar ve onu Girit'e kadar götürür.

Kral Agenor kızının kaybolduğunu öğrenince oğullarına dünyanın her köşesinde onu aramalarını ve bulmadan geri dönmemelerini emreder. Europa'nın kardeşlerinden biri de Thasos'tu.

Bu uzun yolculuk sırasında Thasos, Kuzey Ege'de yemyeşil bir adaya ulaşır. Yoğun ormanlar, berrak sular, dağlar ve doğal zenginlikler onu o kadar etkiler ki oraya yerleşmeye karar verir. Böylece efsaneye göre ada kendi adını alır: Thasos.

Mitoloji ayrıca Thasos'u şarap ve eğlence tanrısı Dionysos'un kültüyle de ilişkilendirir, çünkü ada antik çağlardan beri kaliteli şarabıyla ünlüydü. Aynı zamanda antik insanlar, Thasos'ta ormanları ve kaynakları koruyan periler ve doğa tanrılarının yaşadığına inanıyordu.

Thasos efsanesi yalnızca antik çağlardan kalma güzel bir hikâye değil, aynı zamanda keşif, arayış ve yeni başlangıçların da simgesidir. Bu efsane sayesinde Thasos, tanrılar ve kahramanlar tarafından kutsanmış; insanın doğa, deniz ve medeniyetle buluştuğu bir yer olarak görülür.

Bugün bile bu efsane adaya eşlik etmeye devam etmekte ve ziyaretçilere Thasos'un her köşesinin binlerce yıllık tarih, efsane, yolculuk ve kültür barındırdığını hatırlatmaktadır.`,
    mapX: 32, mapY: 20,    mapsUrl: "https://maps.app.goo.gl/se9QAPeYpy4wYVtZ8",
    localImages: [stop1img1, stop1img2],
  },
  {
    id: 2, num: "02",
    title: "Πύλη του Ερμή",
    titleEn: "Gate of Hermes",
    titleDe: "Das Hermestor",
    titleIt: "La Porta di Hermes",
    titleFr: "La Porte d'Hermès",
    titleRo: "Poarta lui Hermes",
    titleSr: "Kapija Hermesa",
    titleBg: "Портата на Хермес",
    titleTr: "Hermes Kapısı",
    category: "Πύλη",
    categoryEn: "Gate",
    categoryDe: "Tor",
    categoryIt: "Porta",
    categoryFr: "Porte",
    categoryRo: "Poartă",
    categorySr: "Kapija",
    categoryBg: "Порта",
    categoryTr: "Kapı",
    duration: "9 λεπτά", durationSec: 540,
    imageId: IMGS[10],
    description: "Η Πύλη του Ερμή αποτελεί ένα από τα σημαντικότερα σημεία των αρχαίων τειχών της πόλης της Θάσου και βρίσκεται στη βορειοανατολική πλευρά της αρχαίας πόλης, κοντά στη λεγόμενη Βόρεια Συνοικία. Η περιοχή αυτή εκτείνεται κάτω από τον λόφο του αρχαίου θεάτρου και αποτελούσε έναν από τους πιο ζωντανούς και οργανωμένους οικιστικούς τομείς της αρχαίας πόλης.\n\nΗ πύλη βρισκόταν κοντά στη θάλασσα και εξυπηρετούσε την επικοινωνία της πόλης με το εμπορικό λιμάνι, το οποίο τοποθετείται στην περιοχή του σημερινού Λιμανιού του Λιμένα. Για τον λόγο αυτό θεωρείται πως υπήρξε μία από τις βασικές εμπορικές πύλες της αρχαίας Θάσου, σημείο εισόδου εμπόρων, προϊόντων και ταξιδιωτών.\n\nΤο ανάγλυφο του Ερμή και των Χαρίτων\n\nΤο σημαντικότερο στοιχείο της Πύλης είναι το περίφημο ανάγλυφο του Ερμή και των Χαρίτων, το οποίο χρονολογείται γύρω στο 480–475 π.Χ. και ανήκει στην πρώτη οικοδομική φάση της πύλης, στις αρχές του 5ου αιώνα π.Χ.\n\nΣτον βορειοανατολικό ορθοστάτη της πύλης απεικονίζεται ο θεός Ερμής ως γυμνή ανδρική μορφή που φορά μόνο μία χλαμύδα στους ώμους. Ο θεός κινείται προς το εσωτερικό της πόλης, ενώ φαίνεται να στρέφεται προς τα πίσω, κοιτάζοντας τρεις γυναικείες μορφές που τον ακολουθούν με ήρεμη και συγκρατημένη κίνηση. Οι μορφές αυτές ταυτίζονται με τις Χάριτες.\n\nΟι Χάριτες στην ελληνική μυθολογία ήταν θεότητες της ομορφιάς, της γονιμότητας, της χαράς, της δημιουργικότητας και της αρμονίας της φύσης. Οι πιο γνωστές ήταν η Αγλαΐα, η Ευφροσύνη και η Θάλεια. Η παρουσία τους στην πύλη πιθανότατα συνδέεται με τη γονιμότητα της περιοχής και την αφθονία νερού, καθώς στη Βόρεια Συνοικία υπήρχαν πολλά πηγάδια και πηγές.\n\nΟ Ερμής θεωρούνταν θεός του εμπορίου, των ταξιδιωτών και των δρόμων. Δεν είναι λοιπόν τυχαίο ότι η μορφή του τοποθετήθηκε σε μία τόσο σημαντική εμπορική πύλη της αρχαίας πόλης.\n\nΟι δύο φάσεις της Πύλης\n\nΗ Πύλη του Ερμή παρουσίασε δύο βασικές οικοδομικές φάσεις, μία του 5ου αιώνα π.Χ. και μία μεταγενέστερη του 4ου αιώνα π.Χ. Οι αρχαιολόγοι κατά τις ανασκαφές ανακάλυψαν δύο διαφορετικά κατώφλια σε διαφορετικά επίπεδα.\n\nΑρχικά πίστευαν ότι το σωζόμενο κατώφλι ανήκε στην αρχική μορφή της πύλης. Όμως η ανακάλυψη υπονόμων και θαμμένων σκαλοπατιών έδειξε ότι υπήρχε παλαιότερο επίπεδο περίπου 60 εκατοστά χαμηλότερα. Έτσι πραγματοποιήθηκαν βαθύτερες ανασκαφές και αποκαλύφθηκε το αρχικό κατώφλι του 5ου αιώνα π.Χ., που συνδεόταν με την εποχή κατασκευής του αναγλύφου.\n\nΗ μεταβολή αυτή εξηγείται από τις συνεχείς κατολισθήσεις και επιχώσεις που δημιουργούνταν με το πέρασμα των αιώνων. Η αρχαία πόλη της Θάσου βρίσκεται κάτω από τρεις λόφους και οι βροχές, οι πλημμύρες και οι φυσικές καταστροφές μετέφεραν μεγάλες ποσότητες χώματος μέσα στην πόλη. Οι κάτοικοι αναγκάζονταν συχνά να ανυψώνουν τους δρόμους και να τροποποιούν τις πύλες σύμφωνα με το νέο υψομετρικό επίπεδο.\n\nΗ θαμμένη αρχαία πόλη\n\nΗ περίπτωση της Πύλης του Ερμή μάς βοηθά να κατανοήσουμε γιατί μεγάλο μέρος της αρχαίας Θάσου βρίσκεται σήμερα θαμμένο κάτω από πολλά μέτρα γης. Οι ανασκαφές στην περιοχή φτάνουν ακόμη και σε βάθος 8–9 μέτρων κάτω από τη σύγχρονη επιφάνεια.\n\nΗ εγκατάλειψη της πόλης τον 7ο αιώνα μ.Χ. επιδείνωσε ακόμη περισσότερο την κατάσταση. Οι συνεχείς πειρατικές επιδρομές ανάγκασαν τους κατοίκους να εγκαταλείψουν την παραθαλάσσια πόλη και να μεταφερθούν στα ορεινά χωριά του νησιού για μεγαλύτερη ασφάλεια.\n\nΟι κάτοικοι πήραν μαζί τους πολλά μαρμάρινα δομικά υλικά από τα αρχαία κτήρια για να κατασκευάσουν τα νέα σπίτια τους. Παράλληλα, ήδη από τους πρώτους χριστιανικούς αιώνες, πολλά αρχαία οικοδομήματα μετατράπηκαν σε παλαιοχριστιανικές βασιλικές και εκκλησίες. Μέσα στην αρχαία πόλη έχουν εντοπιστεί 21 παλαιοχριστιανικοί ναοί.\n\nΈτσι, η αρχαία πόλη ερημώθηκε για περίπου δώδεκα αιώνες. Η φύση, οι κατολισθήσεις και οι επιχώσεις σκέπασαν σταδιακά τα ερείπια, δημιουργώντας τη σημερινή εικόνα της θαμμένης αρχαίας Θάσου.\n\nΗ πολιορκία της Θάσου από τον Κίμων\n\nΜπροστά από την Πύλη συνδέεται και ένα σημαντικό ιστορικό γεγονός της αρχαιότητας: η πολιορκία της Θάσου από τους Αθηναίους το 465 π.Χ.\n\nΕκείνη την εποχή οι Αθηναίοι επιδίωκαν να ελέγξουν τις πλούσιες περιοχές της Θράκης και ιδιαίτερα τα μεταλλεία χρυσού του Παγγαίο. Όταν αποφάσισαν να εγκαταστήσουν αποίκους στις Εννέα Οδούς, κοντά στη σημερινή Αμφίπολη, η Θάσος θεώρησε ότι απειλούνται τα οικονομικά της συμφέροντα και αποστάτησε από την Αθηναϊκή Συμμαχία.\n\nΟ Αθηναίος στρατηγός Κίμων πολιόρκησε την πόλη για τρία χρόνια. Τελικά κατόρθωσε να καταστρέψει τμήμα των τειχών και να την καταλάβει. Η τιμωρία της Θάσου ήταν ιδιαίτερα σκληρή: οι Θάσιοι υποχρεώθηκαν να γκρεμίσουν τα τείχη τους, να παραδώσουν τον στόλο τους, να πληρώσουν μεγάλα χρηματικά ποσά και να εγκαταλείψουν τις αποικίες και τα μεταλλεία τους στη Θράκη.\n\nΗ θασιακή Περαία και η δύναμη της Θάσου\n\nΗ Θάσος στην αρχαιότητα υπήρξε μία τεράστια ναυτική και οικονομική δύναμη. Είχε δημιουργήσει τη λεγόμενη «Θασίων Ήπειρο» ή «Θασιακή Περαία», δηλαδή ένα εκτεταμένο δίκτυο αποικιών και εμπορικών σταθμών στις ακτές της Θράκης, μήκους περίπου 110 χιλιομέτρων.\n\nΜεταξύ των σημαντικότερων αποικιών και εμπορικών σταθμών ήταν η Γαληψός, η Οισύμη, η Στρύμη, η Νεάπολη — η σημερινή Καβάλα —, η Δάτος, η Σκαπτή Ύλη, η Απολλωνία και το Πίστυρο. Αργότερα οι Θάσιοι ίδρυσαν και τις Κρηνίδες, στην περιοχή των σημερινών Αρχαιολογικός Χώρος Φιλίππων, κοντά στα πλούσια κοιτάσματα χρυσού.\n\nΗ οικονομική και πολιτική ισχύς της Θάσου ήταν τόσο μεγάλη ώστε οι Αθηναίοι την αντιμετώπιζαν ως επικίνδυνο ανταγωνιστή στο βόρειο Αιγαίο.",
    descriptionEn: `The Gate of Hermes is one of the most important sections of the ancient walls of the city of Thasos and is located on the northeastern side of the ancient city, near the so-called Northern District. This area extends below the hill of the ancient theater and was one of the liveliest and most organized residential sectors of the ancient city.

The gate stood near the sea and connected the city with the commercial harbor, believed to have been located in the area of today's port of Limenas. For this reason, it is considered one of the main commercial gates of ancient Thasos, serving as an entrance point for merchants, goods, and travelers.

The Relief of Hermes and the Graces

The most important feature of the gate is the famous relief of Hermes and the Graces, dating to around 480–475 BC and belonging to the first construction phase of the gate in the early 5th century BC.

On the northeastern orthostat of the gate, the god Hermes is depicted as a nude male figure wearing only a cloak over his shoulders. The god moves toward the interior of the city while turning backward to look at three female figures following him calmly and gracefully. These figures are identified as the Graces.

In Greek mythology, the Graces were goddesses of beauty, fertility, joy, creativity, and harmony in nature. The best known were Aglaia, Euphrosyne, and Thalia. Their presence at the gate was probably connected with the fertility of the area and the abundance of water, since many wells and springs existed in the Northern District.

Hermes was considered the god of commerce, travelers, and roads. Therefore, it is no coincidence that his figure was placed at such an important commercial gateway of the ancient city.

The Two Phases of the Gate

The Gate of Hermes underwent two main construction phases: one during the 5th century BC and another later in the 4th century BC. During excavations, archaeologists discovered two different thresholds at different levels.

At first, they believed that the surviving threshold belonged to the original structure. However, the discovery of underground drains and buried steps revealed the existence of an earlier level about 60 centimeters lower. Deeper excavations then uncovered the original 5th-century BC threshold associated with the relief.

This change is explained by continuous landslides and soil accumulation over the centuries. The ancient city of Thasos lies beneath three hills, and rain, floods, and natural disasters transported large amounts of earth into the city. Residents were often forced to raise the roads and modify the gates according to the new ground level.

The Buried Ancient City

The case of the Gate of Hermes helps explain why much of ancient Thasos is today buried beneath many meters of earth. Excavations in the area reach depths of 8–9 meters below the modern surface.

The abandonment of the city in the 7th century AD worsened the situation even further. Continuous pirate raids forced the inhabitants to leave the coastal city and move to the mountain villages of the island for greater safety.

The residents carried away many marble building materials from the ancient structures to construct their new homes. At the same time, from the early Christian centuries onward, many ancient buildings were converted into early Christian basilicas and churches. Twenty-one early Christian churches have been identified within the ancient city.

As a result, the ancient city remained deserted for nearly twelve centuries. Nature, landslides, and sediment gradually covered the ruins, creating the image of the buried ancient city of Thasos seen today.

The Siege of Thasos by Cimon

In front of the gate is connected another important historical event: the siege of Thasos by the Athenians in 465 BC.

At that time, the Athenians sought to control the rich regions of Thrace, especially the gold mines of Mount Pangaion. When they decided to establish settlers at Ennea Hodoi near present-day Amphipolis, Thasos considered its economic interests threatened and revolted against the Athenian League.

The Athenian general Cimon besieged the city for three years. Eventually, he managed to destroy part of the walls and capture it. The punishment imposed on Thasos was severe: the Thasians were forced to demolish their walls, surrender their fleet, pay large sums of money, and abandon their colonies and mines in Thrace.

The Thasian Peraia and the Power of Thasos

In antiquity, Thasos was a major naval and economic power. It had established the so-called "Thasian Mainland" or "Thasian Peraia," an extensive network of colonies and trading stations along the Thracian coast, stretching about 110 kilometers.

Among the most important colonies and trading stations were Galepsos, Oisyme, Stryme, Neapolis — present-day Kavala — Datos, Skapte Hyle, Apollonia, and Pistyros. Later, the Thasians also founded Krenides near the rich gold deposits of today's Archaeological Site of Philippi.

The economic and political power of Thasos became so great that the Athenians regarded it as a dangerous rival in the northern Aegean.`,
    descriptionTr: `Hermes Kapısı, antik Thasos kent surlarının en önemli bölümlerinden biridir ve antik kentin kuzeydoğu tarafında, "Kuzey Mahallesi" olarak bilinen bölgenin yakınında yer alır. Bu bölge, antik tiyatronun yamacı altında uzanır ve şehrin en canlı ve düzenli yerleşim alanlarından birini oluştururdu.

Kapı denize yakın konumdaydı ve şehri ticaret limanına bağlıyordu. Bu limanın günümüzdeki Limenas limanı bölgesinde bulunduğu düşünülmektedir. Bu nedenle Hermes Kapısı, tüccarların, malların ve yolcuların giriş yaptığı antik Thasos'un başlıca ticaret kapılarından biri kabul edilir.

Hermes ve Zarafet Tanrıçaları Kabartması

Kapının en önemli özelliği, yaklaşık MÖ 480–475 yıllarına tarihlenen ve kapının ilk inşa evresine ait olan ünlü Hermes ve Zarafet Tanrıçaları kabartmasıdır.

Kapının kuzeydoğu ortostatında, tanrı Hermes çıplak erkek figürü olarak tasvir edilmiştir ve omuzlarında yalnızca bir pelerin taşır. Hermes şehrin içine doğru ilerlerken arkasına dönüp onu sakin ve zarif biçimde takip eden üç kadın figürüne bakmaktadır. Bu figürler Zarafet Tanrıçaları olarak tanımlanır.

Yunan mitolojisinde Zarafet Tanrıçaları; güzellik, bereket, sevinç, yaratıcılık ve doğa uyumunun tanrıçalarıydı. En bilinenleri Aglaia, Euphrosyne ve Thalia idi. Onların kapıda bulunması muhtemelen bölgenin verimliliği ve su bolluğuyla ilişkilidir; çünkü Kuzey Mahallesi'nde çok sayıda kuyu ve kaynak vardı.

Hermes ticaretin, yolcuların ve yolların tanrısı olarak kabul edilirdi. Bu nedenle onun figürünün böylesine önemli bir ticaret kapısına yerleştirilmiş olması tesadüf değildir.

Kapının İki İnşa Evresi

Hermes Kapısı'nın iki ana inşa dönemi vardır: biri MÖ 5. yüzyılda, diğeri ise daha sonraki MÖ 4. yüzyılda gerçekleşmiştir. Kazılar sırasında arkeologlar farklı seviyelerde iki ayrı eşik keşfetmiştir.

Başlangıçta korunan eşiğin orijinal yapıya ait olduğu düşünülüyordu. Ancak yer altı kanalları ve gömülü merdivenlerin bulunması, yaklaşık 60 santimetre daha aşağıda eski bir seviyenin bulunduğunu ortaya koydu. Daha derin kazılar sonucunda MÖ 5. yüzyıla ait orijinal eşik gün yüzüne çıkarıldı.

Bu değişim, yüzyıllar boyunca meydana gelen toprak kaymaları ve dolgu birikimleriyle açıklanır. Antik Thasos kenti üç tepenin altında yer alıyordu ve yağmurlar, seller ile doğal afetler şehre büyük miktarda toprak taşıyordu. Bu nedenle halk yolları yükseltmek ve kapıları yeni zemin seviyesine göre uyarlamak zorunda kalıyordu.

Gömülü Antik Şehir

Hermes Kapısı örneği, antik Thasos'un büyük bölümünün neden bugün metrelerce toprağın altında kaldığını anlamamıza yardımcı olur. Bölgedeki kazılar günümüz yüzeyinin 8–9 metre altına kadar inmektedir.

MS 7. yüzyılda şehrin terk edilmesi durumu daha da kötüleştirdi. Sürekli korsan saldırıları nedeniyle halk kıyı kentini terk ederek daha güvenli olan dağ köylerine taşınmak zorunda kaldı.

İnsanlar antik yapılardan birçok mermer yapı malzemesini sökerek yeni evlerinde kullandılar. Aynı zamanda erken Hristiyanlık dönemlerinden itibaren birçok antik yapı bazilika ve kiliseye dönüştürüldü. Antik şehir içinde 21 erken Hristiyanlık kilisesi tespit edilmiştir.

Böylece antik şehir yaklaşık on iki yüzyıl boyunca terk edilmiş halde kaldı. Doğa, heyelanlar ve toprak birikimleri zamanla kalıntıları örttü ve bugün görülen gömülü antik Thasos görüntüsünü oluşturdu.

Kimon'un Thasos Kuşatması

Kapının önünde antik dönemin önemli bir tarihi olayıyla da bağlantı bulunmaktadır: MÖ 465 yılında Atinalıların Thasos kuşatması.

O dönemde Atinalılar Trakya'nın zengin bölgelerini ve özellikle Pangaion Dağı'nın altın madenlerini kontrol etmek istiyordu. Günümüzdeki Amphipolis yakınındaki Ennea Hodoi bölgesine yerleşimciler göndermeye karar verdiklerinde, Thasos ekonomik çıkarlarının tehdit altında olduğunu düşündü ve Atina Birliği'nden ayrıldı.

Atinalı komutan Cimon şehri üç yıl boyunca kuşattı. Sonunda surların bir kısmını yıkarak şehri ele geçirmeyi başardı. Thasos'a verilen ceza oldukça ağırdı: Thasoslular surlarını yıkmak, filolarını teslim etmek, büyük miktarda para ödemek ve Trakya'daki kolonileri ile madenlerinden vazgeçmek zorunda kaldılar.

Thasos Peraia'sı ve Thasos'un Gücü

Antik çağda Thasos büyük bir denizcilik ve ekonomi gücüydü. Ada, "Thasos Peraia'sı" olarak bilinen, Trakya kıyıları boyunca yaklaşık 110 kilometre uzanan geniş bir koloni ve ticaret merkezi ağı kurmuştu.

En önemli koloniler ve ticaret merkezleri arasında Galepsos, Oisyme, Stryme, Neapolis — günümüzdeki Kavala — Datos, Skapte Hyle, Apollonia ve Pistyros bulunuyordu. Daha sonra Thasoslular, günümüzdeki Archaeological Site of Philippi yakınındaki zengin altın yataklarının bulunduğu bölgede Krenides'i de kurdular.

Thasos'un ekonomik ve siyasi gücü o kadar büyüktü ki Atinalılar onu Kuzey Ege'de tehlikeli bir rakip olarak görüyorlardı.`,
    descriptionBg: `Портата на Хермес е едно от най-важните места на древните крепостни стени на град Тасос и се намира в североизточната страна на древния град, близо до така наречения Северен квартал. Тази област се простира под хълма на древния театър и е била един от най-живите и добре организирани жилищни райони на древния град. Портата се е намирала близо до морето и е обслужвала връзката на града с търговското пристанище, което се е намирало в района на днешното пристанище на Лименас. Поради тази причина се смята, че е била една от основните търговски порти на древен Тасос — входна точка за търговци, стоки и пътешественици.

Релефът на Хермес и Харитите

Най-важният елемент на портата е прочутият релеф на Хермес и Харитите, който датира около 480–475 г. пр. Хр. и принадлежи към първата строителна фаза на портата, в началото на V век пр. Хр. На североизточния ортостат на портата е изобразен бог Хермес като гола мъжка фигура, носеща само хламида върху раменете. Богът се движи към вътрешността на града, като сякаш се обръща назад и гледа три женски фигури, които го следват със спокойно и сдържано движение. Тези фигури се идентифицират като Харитите. В гръцката митология Харитите били богини на красотата, плодородието, радостта, творчеството и хармонията на природата. Най-известните били Аглая, Евфросина и Талия. Присъствието им на портата вероятно е свързано с плодородието на района и изобилието от вода, тъй като в Северния квартал имало много кладенци и извори. Хермес се смятал за бог на търговията, пътешествениците и пътищата. Затова не е случайно, че неговият образ е бил поставен на толкова важна търговска порта на древния град.

Двете фази на портата

Портата на Хермес има две основни строителни фази — една от V век пр. Хр. и една по-късна от IV век пр. Хр. Археолозите по време на разкопките открили два различни прага на различни нива. Първоначално се смятало, че запазеният праг принадлежи към първоначалната форма на портата. Но откриването на канали и заровени стъпала показало, че е съществувало по-старо ниво около 60 сантиметра по-ниско. Така били извършени по-дълбоки разкопки и бил разкрит първоначалният праг от V век пр. Хр., свързан с периода на създаването на релефа. Тази промяна се обяснява с непрекъснатите свлачища и насипвания, които се образували през вековете. Древният град Тасос се намира под три хълма и дъждовете, наводненията и природните бедствия пренасяли големи количества почва в града. Жителите често били принудени да повдигат улиците и да променят портите според новото ниво на терена.

Погребаният древен град

Случаят с Портата на Хермес ни помага да разберем защо голяма част от древния Тасос днес се намира погребана под много метри земя. Разкопките в района достигат дори до дълбочина 8–9 метра под съвременната повърхност. Изоставянето на града през VII век сл. Хр. допълнително влошило ситуацията. Непрекъснатите пиратски нападения принудили жителите да напуснат крайморския град и да се преместят в планинските села на острова за по-голяма сигурност. Жителите взели със себе си много мраморни строителни материали от древните сгради, за да построят новите си домове. Същевременно още от първите християнски векове много древни постройки били превърнати в раннохристиянски базилики и църкви. В рамките на древния град са открити 21 раннохристиянски храма. Така древният град останал пуст около дванадесет века. Природата, свлачищата и насипванията постепенно покрили руините, създавайки днешния облик на погребания древен Тасос.

Обсадата на Тасос от Кимон

Пред Портата е свързано и едно важно историческо събитие от древността: обсадата на Тасос от атиняните през 465 г. пр. Хр. По онова време атиняните се стремели да контролират богатите области на Тракия и особено златните мини на Пангей. Когато решили да заселят колонисти в Деветте пътища, близо до днешния Амфиполис, Тасос сметнал, че икономическите му интереси са застрашени и се отделил от Атинския съюз. Атинският стратег Кимон обсаждал града три години. Накрая успял да разруши част от стените и да го превземе. Наказанието за Тасос било особено тежко: тасосците били принудени да разрушат стените си, да предадат флота си, да платят големи суми пари и да изоставят колониите и мините си в Тракия.

Тасоската Перея и силата на Тасос

В древността Тасос бил огромна морска и икономическа сила. Той създал така наречената „Тасийска земя" или „Тасоска Перея" — широка мрежа от колонии и търговски станции по бреговете на Тракия с дължина около 110 километра. Сред най-важните колонии и търговски станции били Галипсос, Ойсиме, Стрима, Неаполис — днешна Кавала — Датос, Скапти Хиле, Аполония и Пистирос. По-късно тасосците основали и Кренидите, в района на днешния Археологически обект Филипи, близо до богатите залежи на злато. Икономическата и политическата мощ на Тасос била толкова голяма, че атиняните го възприемали като опасен конкурент в северната част на Егейско море.`,
    mapX: 60, mapY: 20,    mapsUrl: "https://maps.app.goo.gl/GHPwHyjcxw2kuuJ48",
    localImages: [stop2img1, stop2img2, stop2img3, stop2img4, stop2img5, stop2img6, stop2img7],
  },
  {
    id: 3, num: "03",
    title: "Πύλη Θεάς με το Άρμα", titleEn: "Gate of the Goddess with the Chariot",
    titleFr: "La Porte de la Déesse au Char",
    titleBg: "Портата на Богинята с Колесницата",
    titleTr: "Arabalı Tanrıça Kapısı",
    titleRo: "Poarta Zeiței cu Carul",
    titleSr: "Kapija Boginje sa Kočijom",
    titleIt: "La Porta della Dea con il Carro",
    titleDe: "Das Tor der Göttin mit dem Wagen",
    category: "Πύλη", categoryEn: "Gate",
    categoryTr: "Kapı",
    categoryFr: "Porte",
    categoryBg: "Порта",
    categoryRo: "Poartă",
    categorySr: "Kapija",
    categoryIt: "Porta",
    categoryDe: "Tor",
    duration: "9 λεπτά", durationSec: 540,
    imageId: IMGS[2],
    description: "Στο βόρειο τμήμα της αρχαίας πόλης της Θάσος, πολύ κοντά στη θάλασσα και στο αρχαίο πολεμικό λιμάνι, σώζεται ένα από τα πιο εντυπωσιακά και αινιγματικά μνημεία του νησιού: η περίφημη Πύλη της Θεάς με το Άρμα. Το μνημείο αυτό δεν αποτελούσε απλώς μία είσοδο στα τείχη της πόλης, αλλά ένα σημείο με βαθιά θρησκευτική, πολιτική και συμβολική σημασία, συνδεδεμένο με τη θαλάσσια δύναμη, το εμπόριο και τις λατρείες της αρχαίας Θάσου.\n\nΟ σημερινός επισκέπτης, ακολουθώντας τον δρόμο που οδηγεί προς το Εβραιόκαστρο, περνά πίσω από το ιστορικό κτίριο του Βατοπεδίου, το γνωστό «Καλογερικό», το οποίο σήμερα λειτουργεί ως πολιτιστικός χώρος του Δήμου Θάσου. Στην περιοχή αυτή διακρίνονται ακόμη τμήματα του αρχαίου οχυρωματικού τείχους, το οποίο χώριζε την κατοικημένη πόλη από το πολεμικό λιμάνι. Τα τείχη της Θάσου θεωρούνται από τα σημαντικότερα σωζόμενα οχυρωματικά έργα του αρχαίου ελληνικού κόσμου και μαρτυρούν τη δύναμη και την οικονομική ακμή της πόλης ήδη από την αρχαϊκή και κλασική εποχή.\n\nΜέσα σε αυτό το αμυντικό σύστημα ανοίγεται η Πύλη της Θεάς με το Άρμα, μία από τις σημαντικές εισόδους της πόλης προς τη θάλασσα. Η πύλη βρίσκεται χαμηλότερα από τον σύγχρονο δρόμο και σώζεται σε εξαιρετικά καλή κατάσταση, γεγονός που επιτρέπει στον επισκέπτη να αντιληφθεί την αρχική της μορφή και τη μνημειακότητά της.\n\nΤο σημαντικότερο στοιχείο της πύλης είναι οι δύο μεγάλοι ορθοστάτες της, επάνω στους οποίους έχει λαξευτεί ένα μοναδικό ανάγλυφο. Η παράσταση παρουσιάζει μία θεά επάνω σε άρμα που το σέρνουν δύο άλογα. Η σκηνή αποδίδεται με έντονη αίσθηση κίνησης, σαν η θεότητα να εξέρχεται πανηγυρικά από την πόλη προς το λιμάνι ή προς κάποιο ιερό.\n\nΗ θεά εικονίζεται νεαρή και επιβλητική. Τα μαλλιά της είναι δεμένα σε αλογοουρά, στοιχείο χαρακτηριστικό της αρχαϊκής και πρώιμης κλασικής τέχνης. Φορά χιτώνα και ιμάτιο με βαθιές κατακόρυφες πτυχώσεις, ενδυμασία που παραπέμπει στην ιωνική καλλιτεχνική παράδοση, την οποία οι Θάσιοι γνώριζαν καλά λόγω των στενών επαφών τους με τα παράλια της Μικράς Ασίας και το βόρειο Αιγαίο.\n\nΔίπλα στα άλογα βαδίζει μία δεύτερη μορφή: ένας γενειοφόρος άνδρας ντυμένος με χιτώνα, ο οποίος κρατά τα χαλινάρια και οδηγεί τα ζώα. Οι περισσότεροι αρχαιολόγοι ταυτίζουν τη μορφή αυτή με τον Ερμή, τον αγγελιοφόρο των θεών και προστάτη των ταξιδιωτών, των εμπόρων και των δρόμων.\n\nΗ θεότητα που απεικονίζεται στο άρμα θεωρείται πιθανότατα η Άρτεμις. Η Άρτεμις λατρευόταν ιδιαίτερα στη Θάσο και συνδεόταν όχι μόνο με το κυνήγι και τη φύση, αλλά και με τις μεταβάσεις, την προστασία της πόλης και τις τελετουργικές πομπές. Το άρμα ίσως συμβολίζει μία ιερή πομπή ή μία θεϊκή επιφάνεια, κατά την οποία η θεά «εξέρχεται» από την πόλη για να προστατεύσει τους κατοίκους και τους ναυτικούς.\n\nΗ θέση της πύλης δίπλα στη θάλασσα είχε τεράστια σημασία για την καθημερινή ζωή της αρχαίας πόλης. Από εδώ περνούσαν εμπορεύματα, ναυτικοί, επισκέπτες και προσκυνητές. Η πύλη λειτουργούσε ως σύνδεσμος ανάμεσα στο εσωτερικό της πόλης και το λιμάνι, δηλαδή το σημείο από το οποίο η Θάσος επικοινωνούσε με ολόκληρο το Αιγαίο.\n\nΠαράλληλα, πολύ κοντά στην πύλη βρισκόταν το σημαντικό ιερό του Ποσειδώνα. Ο ναός υπήρχε ήδη από τον 5ο αιώνα π.Χ. και αποτελούσε κομβικό λατρευτικό κέντρο. Επιγραφές αποκαλύπτουν ότι στον χώρο λατρευόταν και η Ήρα Επιλιμενία, προστάτιδα του λιμανιού, καθώς και η Αφροδίτη Πελαγία — θεά της θάλασσας και των ταξιδιωτών.\n\nΗ Πύλη της Θεάς με το Άρμα αποτελεί σήμερα ένα από τα σημαντικότερα σωζόμενα μνημεία της αρχαίας Θάσος. Δεν είναι απλώς ένα αρχιτεκτονικό κατάλοιπο, αλλά ένα ζωντανό τεκμήριο της δύναμης, της θρησκευτικής ζωής και της καλλιτεχνικής ακμής της αρχαίας πόλης.\n\nΣήμερα, ο επισκέπτης που στέκεται μπροστά στην πύλη δεν βλέπει απλώς πέτρες και ερείπια. Βλέπει ένα σημείο όπου επί αιώνες περνούσαν άνθρωποι, πομπές, έμποροι και ναυτικοί, κάτω από το βλέμμα των θεών που προστάτευαν την πόλη και τη θάλασσα της αρχαίας Θάσου.",
    descriptionEn: `In the northern part of the ancient city of Thasos, very close to the sea and the ancient military harbor, stands one of the island's most impressive and mysterious monuments: the famous Gate of the Goddess with the Chariot. This monument was not simply an entrance through the city walls, but a place of deep religious, political, and symbolic importance, connected with the naval power, trade, and cults of ancient Thasos.

Today's visitor, following the road leading toward Evraiokastro, passes behind the historic building of Vatopedi, known as the "Kalogeriko," which now functions as a cultural center of the Municipality of Thasos. In this area, sections of the ancient fortification wall can still be seen. The wall separated the inhabited city from the military harbor. The fortifications of Thasos are considered among the most important surviving defensive works of the ancient Greek world and testify to the city's power and prosperity already during the Archaic and Classical periods.

Within this defensive system opens the Gate of the Goddess with the Chariot, one of the city's most important entrances toward the sea. The gate lies lower than the modern road and survives in exceptionally good condition, allowing visitors to understand its original form and monumental character.

The most important feature of the gate is its two large orthostats, on which a unique relief has been carved. The scene depicts a goddess riding in a chariot drawn by two horses. The composition conveys a strong sense of movement, as if the deity is ceremonially departing from the city toward the harbor or a sanctuary.

The goddess is portrayed as youthful and imposing. Her hair is tied in a ponytail, a characteristic feature of Archaic and early Classical art. She wears a chiton and a himation with deep vertical folds, clothing associated with the Ionic artistic tradition, which the Thasians knew well due to their close connections with the coasts of Asia Minor and the northern Aegean. Her left arm stretches forward holding the reins of the chariot, while her entire figure radiates power, self-control, and divine presence.

Beside the horses walks a second figure: a bearded man dressed in a chiton, holding the reins and guiding the animals. Most archaeologists identify this figure as Hermes, the messenger of the gods and protector of travelers, merchants, and roads. Hermes' presence in this scene is no coincidence. Thasos was an important naval and commercial center with intense economic activity throughout the northern Aegean. Hermes, as the god of movement and commerce, was the ideal companion for the goddess.

The deity depicted in the chariot is most likely Artemis. Artemis was especially worshipped in Thasos and was associated not only with hunting and nature, but also with transitions, the protection of the city, and ritual processions. The chariot may symbolize a sacred procession or a divine epiphany, during which the goddess "emerges" from the city to protect its inhabitants and sailors.

The location of the gate beside the sea was of enormous importance for the daily life of the ancient city. Merchants, sailors, visitors, and pilgrims all passed through this point. The gate functioned as a connection between the interior of the city and the harbor — the place through which Thasos communicated with the entire Aegean world.

Very close to the gate stood the important sanctuary of Poseidon, one of the principal gods of seafaring and maritime life. The Temple of Poseidon already existed from the 5th century BC and served as a major religious center of the city. Its enclosure had the shape of an irregular quadrilateral and was surrounded by auxiliary buildings.

Along the southern side was a series of rooms probably used for ritual banquets. In ancient Greek religion, communal meals held special significance, forming part of worship and strengthening the bonds between the community and the deity.

Inscriptions found in the area reveal that Hera Epilimenia was also worshipped there — Hera as the protector of the harbor and maritime activities. The title "Epilimenia" directly reflects the goddess's connection with safe anchorage and the protection of sailors.

A statue of Aphrodite Pelagia was also discovered within the same sanctuary. The cult of Aphrodite under the title "Pelagia" was associated with the open sea, maritime life, and voyages. Sailors sought her protection before embarking on long journeys across the Aegean and the Mediterranean.

Today, the Gate of the Goddess with the Chariot remains one of the most important surviving monuments of ancient Thasos. It is not merely an architectural remnant, but a living testimony to the power, religious life, and artistic prosperity of the ancient city. Through its relief, the world of the ancient Thasians is revealed: their gods, their relationship with the sea, trade, sanctuaries, and the everyday life of an important island center of the northern Aegean.

Today, the visitor standing before the gate sees not only stones and ruins, but a place through which, for centuries, people, processions, merchants, and sailors passed beneath the gaze of the gods who protected the city and the sea of ancient Thasos.`,
    descriptionFr: `Dans la partie nord de la ville antique de Thasos, tout près de la mer et de l'ancien port militaire, se trouve l'un des monuments les plus impressionnants et mystérieux de l'île : la célèbre Porte de la Déesse au Char. Ce monument n'était pas simplement une entrée dans les murailles de la ville, mais un lieu d'une profonde importance religieuse, politique et symbolique, lié à la puissance maritime, au commerce et aux cultes de l'ancienne Thasos.

Le visiteur d'aujourd'hui, en suivant la route menant vers Evraiokastro, passe derrière le bâtiment historique du Vatopedi, connu sous le nom de « Kalogeriko », qui fonctionne désormais comme centre culturel de la municipalité de Thasos. Dans cette zone, certaines parties des anciennes fortifications sont encore visibles. Les murailles séparaient la ville habitée du port militaire. Les fortifications de Thasos sont considérées parmi les plus importantes œuvres défensives conservées du monde grec antique et témoignent de la puissance et de la prospérité économique de la cité dès les périodes archaïque et classique.

À l'intérieur de ce système défensif s'ouvre la Porte de la Déesse au Char, l'une des principales entrées de la ville vers la mer. La porte se situe plus bas que la route moderne et se conserve dans un état exceptionnel, permettant aux visiteurs de comprendre sa forme originale et son caractère monumental.

L'élément le plus important de la porte est constitué de ses deux grands orthostates sur lesquels est sculpté un relief unique. La scène représente une déesse sur un char tiré par deux chevaux. La composition transmet une forte impression de mouvement, comme si la divinité quittait solennellement la ville vers le port ou un sanctuaire.

La déesse apparaît jeune et majestueuse. Ses cheveux sont attachés en queue de cheval, caractéristique typique de l'art archaïque et du début de l'époque classique. Elle porte un chiton et un himation aux plis verticaux profonds, vêtements associés à la tradition artistique ionienne, bien connue des habitants de Thasos grâce à leurs relations étroites avec les côtes de l'Asie Mineure et du nord de la mer Égée. Son bras gauche est tendu vers l'avant tenant les rênes du char, tandis que toute sa figure dégage puissance, maîtrise de soi et présence divine.

À côté des chevaux marche une seconde figure : un homme barbu vêtu d'un chiton qui tient les rênes et guide les animaux. La plupart des archéologues identifient cette figure à Hermès, messager des dieux et protecteur des voyageurs, des marchands et des routes. La présence d'Hermès dans cette scène n'est pas due au hasard. Thasos était un important centre maritime et commercial avec une intense activité économique dans tout le nord de l'Égée. Hermès, dieu du mouvement et du commerce, était le compagnon idéal de la déesse.

La divinité représentée sur le char est très probablement Artémis. Artémis était particulièrement vénérée à Thasos et était associée non seulement à la chasse et à la nature, mais aussi aux passages, à la protection de la ville et aux processions rituelles. Le char peut symboliser une procession sacrée ou une apparition divine par laquelle la déesse « sort » de la ville pour protéger les habitants et les marins.

L'emplacement de la porte près de la mer avait une importance énorme pour la vie quotidienne de la ville antique. Marchands, marins, visiteurs et pèlerins passaient par cet endroit. La porte servait de lien entre l'intérieur de la ville et le port — le point par lequel Thasos communiquait avec tout le monde égéen.

Très près de la porte se trouvait également l'important sanctuaire de Poséidon, l'un des principaux dieux de la mer et de la navigation. Le temple de Poséidon existait déjà au Ve siècle av. J.-C. et constituait un centre religieux majeur de la ville. Son enceinte avait la forme d'un quadrilatère irrégulier et était entourée de bâtiments auxiliaires.

Le long du côté sud se trouvait une série de salles probablement utilisées pour des banquets rituels. Dans la religion grecque antique, les repas communautaires avaient une signification particulière car ils faisaient partie du culte et renforçaient les liens entre la communauté et la divinité.

Les inscriptions découvertes dans la région révèlent qu'Héra Épiliménia y était également honorée — Héra en tant que protectrice du port et des activités maritimes. Le titre « Épiliménia » reflète directement le lien de la déesse avec les ports sûrs et la protection des marins.

Une statue d'Aphrodite Pélagia a également été découverte dans le même sanctuaire. Le culte d'Aphrodite sous le nom de « Pélagia » était associé à la haute mer, à la navigation et aux voyages. Les marins recherchaient sa protection avant d'entreprendre de longs voyages à travers l'Égée et la Méditerranée.

Aujourd'hui, la Porte de la Déesse au Char demeure l'un des plus importants monuments conservés de l'ancienne Thasos. Ce n'est pas seulement un vestige architectural, mais un témoignage vivant de la puissance, de la vie religieuse et de la prospérité artistique de la cité antique. À travers son relief se révèle le monde des anciens habitants de Thasos : leurs dieux, leur relation avec la mer, le commerce, les sanctuaires et la vie quotidienne d'un important centre insulaire du nord de l'Égée.

Le visiteur qui se tient aujourd'hui devant la porte ne voit pas seulement des pierres et des ruines. Il voit un lieu où, pendant des siècles, passèrent des hommes, des processions, des marchands et des marins sous le regard des dieux qui protégeaient la ville et la mer de l'antique Thasos.`,
    descriptionBg: `В северната част на древния град Тасос, много близо до морето и старото военно пристанище, се намира един от най-впечатляващите и загадъчни паметници на острова: прочутата Порта на Богинята с Колесницата. Този паметник не е бил просто вход към градските стени, а място с дълбоко религиозно, политическо и символично значение, свързано с морската мощ, търговията и култовете на древния Тасос.

Днешният посетител, следвайки пътя към Еврайокастро, преминава зад историческата сграда на Ватопеди, известна като „Калогерико", която днес функционира като културен център на община Тасос. В този район все още могат да се видят части от древната крепостна стена, която е разделяла населената част на града от военното пристанище. Стените на Тасос се смятат за едни от най-важните запазени отбранителни съоръжения на древногръцкия свят и свидетелстват за силата и икономическия просперитет на града още през архаичния и класическия период.

В рамките на тази отбранителна система се намира Портата на Богинята с Колесницата — един от най-важните изходи на града към морето. Портата се намира по-ниско от съвременния път и е запазена в изключително добро състояние, което позволява на посетителите да разберат първоначалната ѝ форма и монументален характер.

Най-важният елемент на портата са двата големи ортостата, върху които е изсечен уникален релеф. Сцената изобразява богиня в колесница, теглена от два коня. Композицията създава силно усещане за движение, сякаш божеството тържествено напуска града към пристанището или светилище.

Богинята е представена като млада и величествена фигура. Косата ѝ е вързана на опашка — характерна особеност на архаичното и раннокласическото изкуство. Тя носи хитон и химатион с дълбоки вертикални гънки, облекло, свързано с йонийската художествена традиция, която жителите на Тасос познавали добре благодарение на близките си връзки с бреговете на Мала Азия и северната част на Егейско море. Лявата ѝ ръка е протегната напред и държи юздите на колесницата, а цялата фигура излъчва сила, самоконтрол и божествено присъствие.

До конете върви втора фигура: брадат мъж, облечен в хитон, който държи юздите и води животните. Повечето археолози идентифицират тази фигура като Хермес — вестителя на боговете и покровителя на пътешествениците, търговците и пътищата. Присъствието на Хермес в тази сцена не е случайно. Тасос е бил важен морски и търговски център с интензивна икономическа дейност в северната част на Егейско море. Хермес, като бог на движението и търговията, е бил идеалният спътник на богинята.

Божеството, изобразено в колесницата, най-вероятно е Артемида. Артемида е била особено почитана на Тасос и е била свързвана не само с лова и природата, но и с преходите, защитата на града и ритуалните шествия. Колесницата може да символизира свещено шествие или божествено явяване, чрез което богинята „излиза" от града, за да закриля жителите и моряците.

Разположението на портата до морето е имало огромно значение за ежедневния живот на древния град. През това място са преминавали търговци, моряци, посетители и поклонници. Портата е служела като връзка между вътрешността на града и пристанището — мястото, чрез което Тасос е общувал с целия егейски свят.

Много близо до портата се е намирало и важното светилище на Посейдон — един от главните богове на морето и мореплаването. Храмът на Посейдон съществувал още от V век пр. Хр. и представлявал значим религиозен център на града. Ограждението му имало формата на неправилен четириъгълник и било заобиколено от помощни постройки.

По южната страна се намирала поредица от помещения, вероятно използвани за ритуални пиршества. В древногръцката религия общите трапези имали особено значение, защото били част от култа и укрепвали връзката между общността и божеството.

Надписите, открити в района, показват, че там е била почитана и Хера Епилимения — Хера като покровителка на пристанището и морските дейности. Името „Епилимения" пряко отразява връзката на богинята със сигурните пристанища и защитата на моряците.

В същото светилище е открита и статуя на Афродита Пелагия. Култът към Афродита с епитета „Пелагия" бил свързан с откритото море, мореплаването и пътешествията. Моряците търсели нейната закрила преди дълги плавания през Егейско и Средиземно море.

Днес Портата на Богинята с Колесницата остава един от най-значимите запазени паметници на древния Тасос. Тя не е просто архитектурен остатък, а живо свидетелство за силата, религиозния живот и художествения разцвет на древния град. Чрез нейния релеф се разкрива светът на древните жители на Тасос: техните богове, връзката им с морето, търговията, светилищата и ежедневието на един важен островен център в северната част на Егейско море.

Днес посетителят, който стои пред портата, не вижда само камъни и руини. Той вижда място, през което в продължение на векове са преминавали хора, шествия, търговци и моряци под погледа на боговете, които закриляли града и морето на древния Тасос.`,
    descriptionTr: `Antik Thasos kentinin kuzey bölümünde, denize ve eski askeri limana çok yakın bir yerde, adanın en etkileyici ve gizemli anıtlarından biri bulunmaktadır: ünlü Arabalı Tanrıça Kapısı. Bu anıt yalnızca şehir surlarına açılan bir giriş değil, aynı zamanda antik Thasos'un deniz gücü, ticareti ve dini kültleriyle bağlantılı derin dinsel, politik ve sembolik bir merkezdi.

Bugünkü ziyaretçi, Evraiokastro'ya giden yolu takip ederken, bugün Thasos Belediyesi'nin kültür merkezi olarak kullanılan ve "Kalogeriko" adıyla bilinen tarihi Vatopedi yapısının arkasından geçer. Bu bölgede, yerleşim alanını askeri limandan ayıran antik surların bazı bölümleri hâlâ görülebilmektedir. Thasos surları, antik Yunan dünyasının en önemli korunmuş savunma yapıları arasında kabul edilir ve şehrin Arkaik ve Klasik dönemlerdeki gücünü ve ekonomik refahını kanıtlar.

Bu savunma sistemi içinde Arabalı Tanrıça Kapısı yer alır; bu kapı, şehrin denize açılan en önemli girişlerinden biriydi. Kapı günümüz yol seviyesinden daha aşağıda bulunur ve olağanüstü derecede iyi korunmuştur. Bu durum ziyaretçilere yapının orijinal biçimini ve anıtsal karakterini anlama fırsatı verir.

Kapının en önemli özelliği, üzerine eşsiz bir kabartma işlenmiş iki büyük ortostat taşıdır. Sahne, iki at tarafından çekilen bir savaş arabası üzerinde duran bir tanrıçayı tasvir eder. Kompozisyon güçlü bir hareket hissi yaratır; sanki tanrıça törensel bir şekilde şehirden limana ya da kutsal bir alana doğru ilerlemektedir.

Tanrıça genç ve görkemli bir figür olarak betimlenmiştir. Saçları at kuyruğu şeklinde bağlanmıştır; bu özellik Arkaik ve erken Klasik sanatın tipik özelliklerinden biridir. Üzerinde derin dikey kıvrımlara sahip bir khiton ve himation vardır. Bu giysiler, Thasosluların Küçük Asya kıyıları ve Kuzey Ege ile olan yakın ilişkileri sayesinde iyi bildikleri İyon sanat geleneğini yansıtır. Sol kolu ileri uzanmış şekilde arabanın dizginlerini tutar ve tüm figür güç, özdenetim ve ilahi bir varlık hissi yayar.

Atların yanında ikinci bir figür yürümektedir: khiton giymiş sakallı bir adam, dizginleri tutarak hayvanları yönlendirir. Çoğu arkeolog bu figürü, tanrıların habercisi ve yolcuların, tüccarların ve yolların koruyucusu olan Hermes olarak tanımlar. Hermes'in bu sahnedeki varlığı tesadüf değildir. Thasos, Kuzey Ege'de yoğun ekonomik faaliyet gösteren önemli bir denizcilik ve ticaret merkeziydi. Hareketin ve ticaretin tanrısı olan Hermes, tanrıça için ideal bir eşlikçiydi.

Arabada tasvir edilen tanrıçanın büyük olasılıkla Artemis olduğu düşünülmektedir. Artemis, Thasos'ta özellikle saygı gören bir tanrıçaydı ve yalnızca avcılık ve doğayla değil, aynı zamanda geçişler, şehrin korunması ve törensel alaylarla da ilişkilendiriliyordu. Araba, kutsal bir alayı ya da tanrıçanın halkı ve denizcileri korumak için şehirden "çıkışını" simgeleyen ilahi bir görünümü temsil ediyor olabilir.

Kapının deniz kenarındaki konumu, antik şehir yaşamı için son derece önemliydi. Tüccarlar, denizciler, ziyaretçiler ve hacılar bu noktadan geçiyordu. Kapı, şehrin iç bölümü ile liman arasındaki bağlantıyı sağlıyor ve Thasos'un tüm Ege dünyasıyla iletişim kurduğu geçit görevini görüyordu.

Kapının hemen yakınında ayrıca deniz ve denizcilik yaşamının en önemli tanrılarından biri olan Poseidon'un kutsal alanı bulunuyordu. Poseidon Tapınağı MÖ 5. yüzyıldan itibaren varlığını sürdürüyordu ve şehrin önemli dini merkezlerinden biriydi. Kutsal alan düzensiz dörtgen biçimindeydi ve çeşitli yardımcı yapılarla çevriliydi.

Güney tarafı boyunca, muhtemelen ritüel şölenler için kullanılan bir dizi oda bulunuyordu. Antik Yunan dininde ortak yemekler büyük önem taşırdı; çünkü bunlar ibadetin bir parçasıydı ve topluluk ile tanrı arasındaki bağı güçlendirirdi.

Bölgede bulunan yazıtlar burada ayrıca Hera Epilimenia'ya da tapınıldığını göstermektedir — yani limanın ve denizcilik faaliyetlerinin koruyucusu Hera'ya. "Epilimenia" unvanı, tanrıçanın güvenli limanlar ve denizcilerin korunmasıyla olan bağlantısını açıkça ifade eder.

Aynı kutsal alanda Aphrodite Pelagia'nın bir heykeli de bulunmuştur. "Pelagia" sıfatıyla Aphrodite kültü açık deniz, denizcilik ve yolculuklarla ilişkilendiriliyordu. Denizciler, Ege ve Akdeniz'deki uzun yolculuklara çıkmadan önce onun korumasını isterlerdi.

Bugün Arabalı Tanrıça Kapısı, antik Thasos'un en önemli korunmuş anıtlarından biri olarak kabul edilmektedir. Bu yapı yalnızca mimari bir kalıntı değil, aynı zamanda antik şehrin gücünün, dini yaşamının ve sanatsal gelişiminin canlı bir tanığıdır. Kabartması aracılığıyla eski Thasosluların dünyası ortaya çıkar: tanrıları, denizle ilişkileri, ticaretleri, kutsal alanları ve Kuzey Ege'nin önemli ada merkezlerinden birindeki günlük yaşamları.

Bugün kapının önünde duran ziyaretçi yalnızca taşları ve harabeleri görmez. O, yüzyıllar boyunca insanların, alayların, tüccarların ve denizcilerin, antik Thasos'un şehrini ve denizini koruyan tanrıların bakışları altında geçtiği bir yeri görür.`,
    descriptionRo: `În partea de nord a orașului antic Thasos, foarte aproape de mare și de vechiul port militar, se păstrează unul dintre cele mai impresionante și enigmatice monumente ale insulei: faimoasa Poartă a Zeiței cu Carul. Acest monument nu reprezenta doar o intrare în zidurile orașului, ci un loc cu o profundă semnificație religioasă, politică și simbolică, legat de puterea maritimă, comerțul și cultele din anticul Thasos.

Vizitatorul de astăzi, urmând drumul care duce spre Evraiokastro, trece prin spatele clădirii istorice a Vatopediului, cunoscută sub numele de „Kalogeriko", care funcționează în prezent ca spațiu cultural al Municipalității Thasos. În această zonă se mai disting încă părți ale zidului antic de fortificație, care separa orașul locuit de portul militar. Zidurile Thasosului sunt considerate printre cele mai importante lucrări defensive păstrate din lumea greacă antică și mărturisesc puterea și prosperitatea economică a orașului încă din perioada arhaică și clasică.

În interiorul acestui sistem defensiv se deschide Poarta Zeiței cu Carul, una dintre cele mai importante intrări ale orașului către mare. Poarta se află mai jos decât drumul modern și este păstrată într-o stare excelentă, permițând vizitatorului să înțeleagă forma sa originală și caracterul său monumental.

Cel mai important element al porții sunt cei doi mari ortostați pe care a fost sculptat un relief unic. Scena reprezintă o zeiță într-un car tras de doi cai. Compoziția transmite o puternică senzație de mișcare, ca și cum divinitatea ar ieși în mod ceremonial din oraș către port sau către un sanctuar.

Zeița este reprezentată tânără și impunătoare. Părul ei este prins într-o coadă de cal, caracteristică artei arhaice și clasice timpurii. Poartă un chiton și un himation cu falduri verticale adânci, îmbrăcăminte care amintește de tradiția artistică ionică, bine cunoscută de thasieni datorită contactelor strânse cu coastele Asiei Mici și nordul Mării Egee. Brațul ei stâng se întinde înainte ținând frâiele carului, iar întreaga figură emană putere, autocontrol și prezență divină.

Lângă cai merge o a doua figură: un bărbat cu barbă îmbrăcat în chiton, care ține frâiele și conduce animalele. Majoritatea arheologilor identifică această figură cu Hermes, mesagerul zeilor și protectorul călătorilor, comercianților și drumurilor. Prezența lui Hermes în această scenă nu este întâmplătoare. Thasos a fost un important centru naval și comercial, cu o intensă activitate economică în nordul Mării Egee. Hermes, ca zeu al deplasărilor și al comerțului, era însoțitorul ideal al zeiței.

Divinitatea reprezentată în car este considerată cel mai probabil Artemis. Artemis era venerată în mod special în Thasos și era asociată nu doar cu vânătoarea și natura, ci și cu tranzițiile, protecția orașului și procesiunile rituale. Carul poate simboliza o procesiune sacră sau o apariție divină prin care zeița „iese" din oraș pentru a proteja locuitorii și marinarii.

Poziția porții lângă mare avea o importanță enormă pentru viața cotidiană a orașului antic. Pe aici treceau mărfuri, marinari, vizitatori și pelerini. Poarta funcționa ca o legătură între interiorul orașului și port — punctul prin care Thasos comunica cu întreaga lume egeeană.

Foarte aproape de poartă se afla importantul sanctuar al lui Poseidon, unul dintre cei mai importanți zei ai vieții maritime și ai navigației. Templul lui Poseidon exista încă din secolul al V-lea î.Hr. și reprezenta un important centru religios al orașului. Incinta sa avea forma unui patrulater neregulat și era înconjurată de diferite clădiri auxiliare.

De-a lungul laturii sudice exista o serie de încăperi folosite probabil pentru banchete ritualice. În religia greacă antică, mesele comune aveau o semnificație specială, deoarece făceau parte din cult și întăreau legăturile comunității cu divinitatea.

Inscripțiile descoperite în zonă arată că aici era venerată și Hera Epilimenia — Hera ca protectoare a portului și a activităților maritime. Denumirea „Epilimenia" indică direct legătura zeiței cu ancorajul sigur și protecția marinarilor.

În același sanctuar a fost descoperită și o statuie a Afroditei Pelagia. Cultul Afroditei cu epitetul „Pelagia" era asociat cu marea deschisă, navigația și călătoriile. Marinarii îi cereau protecția înainte de marile călătorii pe Marea Egee și în Mediterană.

Poarta Zeiței cu Carul reprezintă astăzi unul dintre cele mai importante monumente păstrate ale anticului Thasos. Nu este doar o rămășiță arhitecturală, ci o mărturie vie a puterii, vieții religioase și înfloririi artistice a orașului antic. Prin relieful său se dezvăluie lumea vechilor thasieni: zeii lor, relația lor cu marea, comerțul, sanctuarele și viața de zi cu zi a unui important centru insular al nordului Mării Egee.

Astăzi, vizitatorul care stă în fața porții nu vede doar pietre și ruine. El vede un loc prin care, timp de secole, au trecut oameni, procesiuni, comercianți și marinari, sub privirea zeilor care protejau orașul și marea anticului Thasos.`,
    descriptionSr: `U severnom delu antičkog grada Tasosa, veoma blizu mora i starog vojnog pristaništa, nalazi se jedan od najimpresivnijih i najtajanstvenijih spomenika ostrva: čuvena Kapija Boginje sa Kočijom. Ovaj spomenik nije predstavljao samo ulaz u gradske zidine, već mesto dubokog verskog, političkog i simboličkog značaja, povezano sa pomorskom moći, trgovinom i kultovima antičkog Tasosa.

Današnji posetilac, prateći put koji vodi ka Evraiokastru, prolazi iza istorijske zgrade Vatopedija poznate kao „Kalogeriko", koja danas funkcioniše kao kulturni centar Opštine Tasos. U ovom području još uvek se mogu videti delovi antičkih bedema koji su odvajali naseljeni grad od vojne luke. Zidine Tasosa smatraju se među najvažnijim sačuvanim odbrambenim delima antičkog grčkog sveta i svedoče o moći i ekonomskom prosperitetu grada još tokom arhajskog i klasičnog perioda.

Unutar ovog odbrambenog sistema otvara se Kapija Boginje sa Kočijom, jedan od najvažnijih izlaza grada prema moru. Kapija se nalazi niže od savremenog puta i očuvana je u izuzetno dobrom stanju, omogućavajući posetiocima da razumeju njen prvobitni izgled i monumentalni karakter.

Najvažniji element kapije jesu dva velika ortostata na kojima je uklesan jedinstven reljef. Scena prikazuje boginju koja se vozi u kočiji koju vuku dva konja. Kompozicija prenosi snažan osećaj pokreta, kao da božanstvo svečano izlazi iz grada prema luci ili svetilištu.

Boginja je prikazana kao mlada i dostojanstvena figura. Njena kosa je vezana u rep, što je karakteristično za arhajsku i ranu klasičnu umetnost. Nosi hiton i himation sa dubokim vertikalnim naborima, odeću povezanu sa jonskom umetničkom tradicijom koju su Tasošani dobro poznavali zahvaljujući svojim vezama sa obalama Male Azije i severnog Egeja. Njena leva ruka pružena je napred držeći uzde kočije, dok cela figura odiše snagom, samokontrolom i božanskim prisustvom.

Pored konja hoda druga figura: bradati muškarac obučen u hiton koji drži uzde i vodi životinje. Većina arheologa identifikuje ovu figuru kao Hermesa, glasnika bogova i zaštitnika putnika, trgovaca i puteva. Prisustvo Hermesa u ovoj sceni nije slučajno. Tasos je bio važan pomorski i trgovački centar sa intenzivnom ekonomskom aktivnošću širom severnog Egeja. Hermes, kao bog kretanja i trgovine, bio je idealan pratilac boginje.

Božanstvo prikazano u kočiji najverovatnije je Artemida. Artemida je na Tasosu bila posebno poštovana i povezivana ne samo sa lovom i prirodom, već i sa prelazima, zaštitom grada i ritualnim procesijama. Kočija može simbolizovati svetu povorku ili božansko pojavljivanje tokom kojeg boginja „izlazi" iz grada kako bi zaštitila stanovnike i moreplovce.

Položaj kapije pored mora imao je ogroman značaj za svakodnevni život antičkog grada. Kroz ovo mesto prolazili su trgovci, mornari, posetioci i hodočasnici. Kapija je predstavljala vezu između unutrašnjosti grada i luke — mesta preko kojeg je Tasos komunicirao sa čitavim egejskim svetom.

Vrlo blizu kapije nalazilo se važno svetilište Posejdona, jednog od glavnih bogova mora i plovidbe. Hram Posejdona postojao je još od 5. veka pre nove ere i predstavljao je značajan verski centar grada. Njegov prostor imao je oblik nepravilnog četvorougla i bio je okružen pomoćnim građevinama.

Duž južne strane nalazio se niz prostorija koje su verovatno služile za ritualne gozbe. U antičkoj grčkoj religiji zajednički obroci imali su posebno značenje jer su bili deo obreda i jačali vezu između zajednice i božanstva.

Natpisi pronađeni u tom području pokazuju da je tamo poštovana i Hera Epilimenija — Hera kao zaštitnica luke i pomorskih aktivnosti. Naziv „Epilimenija" direktno ukazuje na povezanost boginje sa sigurnim pristaništima i zaštitom mornara.

U istom svetilištu pronađena je i statua Afrodite Pelagije. Kult Afrodite sa epitetom „Pelagija" bio je povezan sa otvorenim morem, plovidbom i putovanjima. Mornari su tražili njenu zaštitu pre dugih putovanja preko Egejskog i Sredozemnog mora.

Kapija Boginje sa Kočijom danas predstavlja jedan od najvažnijih sačuvanih spomenika antičkog Tasosa. Ona nije samo arhitektonski ostatak, već živo svedočanstvo moći, religijskog života i umetničkog procvata antičkog grada. Kroz njen reljef otkriva se svet starih Tasošana: njihovi bogovi, odnos prema moru, trgovini, svetilištima i svakodnevnom životu jednog značajnog ostrvskog centra severnog Egeja.

Danas posetilac koji stoji ispred kapije ne vidi samo kamenje i ruševine. On vidi mesto kroz koje su vekovima prolazili ljudi, procesije, trgovci i mornari pod pogledom bogova koji su štitili grad i more antičkog Tasosa.`,
    descriptionIt: `Nella parte settentrionale dell'antica città di Thasos, molto vicino al mare e all'antico porto militare, si conserva uno dei monumenti più impressionanti ed enigmatici dell'isola: la famosa Porta della Dea con il Carro. Questo monumento non rappresentava semplicemente un ingresso nelle mura cittadine, ma un luogo di profondo significato religioso, politico e simbolico, legato alla potenza marittima, al commercio e ai culti dell'antica Thasos.

Il visitatore di oggi, seguendo la strada che conduce verso Evraiokastro, passa dietro lo storico edificio del monastero di Vatopedi, noto come "Kalogeriko", che oggi funziona come centro culturale del Comune di Thasos. In quest'area sono ancora visibili parti delle antiche mura difensive, che separavano la città abitata dal porto militare. Le fortificazioni di Thasos sono considerate tra le più importanti opere difensive conservate del mondo greco antico e testimoniano la forza e la prosperità economica della città già durante l'epoca arcaica e classica.

All'interno di questo sistema difensivo si apre la Porta della Dea con il Carro, uno degli ingressi più importanti della città verso il mare. La porta si trova più in basso rispetto alla strada moderna ed è conservata in condizioni eccellenti, permettendo al visitatore di comprenderne la forma originaria e il carattere monumentale.

L'elemento più importante della porta sono i due grandi ortostati sui quali è scolpito un rilievo unico. La scena raffigura una dea su un carro trainato da due cavalli. La composizione trasmette un forte senso di movimento, come se la divinità stesse uscendo solennemente dalla città verso il porto o un santuario.

La dea appare giovane e maestosa. I suoi capelli sono raccolti in una coda di cavallo, elemento caratteristico dell'arte arcaica e della prima età classica. Indossa un chitone e un himation con profonde pieghe verticali, un abbigliamento che richiama la tradizione artistica ionica, ben conosciuta dai Thasi grazie ai loro stretti contatti con le coste dell'Asia Minore e il nord dell'Egeo. Il suo braccio sinistro si protende in avanti tenendo le redini del carro, mentre l'intera figura emana forza, autocontrollo e presenza divina.

Accanto ai cavalli cammina una seconda figura: un uomo barbuto vestito con un chitone, che tiene le briglie e guida gli animali. La maggior parte degli archeologi identifica questa figura con Hermes, il messaggero degli dèi e protettore dei viaggiatori, dei mercanti e delle strade. La presenza di Hermes in questa scena non è casuale. Thasos fu un importante centro navale e commerciale, con intensa attività economica nel nord dell'Egeo. Hermes, come dio del movimento e del commercio, rappresentava il compagno ideale della dea.

La divinità raffigurata sul carro è molto probabilmente Artemide. Artemide era particolarmente venerata a Thasos ed era associata non solo alla caccia e alla natura, ma anche ai passaggi, alla protezione della città e alle processioni rituali. Il carro potrebbe simboleggiare una processione sacra o una manifestazione divina attraverso la quale la dea "esce" dalla città per proteggere gli abitanti e i marinai.

La posizione della porta accanto al mare aveva enorme importanza per la vita quotidiana della città antica. Da qui passavano merci, marinai, visitatori e pellegrini. La porta funzionava come collegamento tra l'interno della città e il porto, cioè il punto attraverso cui Thasos comunicava con l'intero mondo egeo.

Molto vicino alla porta si trovava inoltre l'importante santuario di Poseidone, uno dei principali dèi del mare e della navigazione. Il tempio di Poseidone esisteva già dal V secolo a.C. e costituiva un fondamentale centro religioso della città. Il suo recinto aveva la forma di un quadrilatero irregolare ed era circondato da diversi edifici ausiliari.

Lungo il lato meridionale vi era una serie di ambienti probabilmente utilizzati per banchetti rituali. Nella religione greca antica i pasti comunitari avevano un significato speciale, poiché facevano parte del culto e rafforzavano i legami tra la comunità e la divinità.

Le iscrizioni rinvenute nella zona rivelano che qui veniva venerata anche Hera Epilimenia, cioè Hera come protettrice del porto e delle attività marittime. Il titolo "Epilimenia" indica direttamente il legame della dea con gli approdi sicuri e la protezione dei marinai.

Nello stesso santuario fu trovata anche una statua di Afrodite Pelagia. Il culto di Afrodite con l'epiteto "Pelagia" era associato al mare aperto, alla navigazione e ai viaggi. I marinai invocavano la sua protezione prima di affrontare lunghi viaggi nell'Egeo e nel Mediterraneo.

La Porta della Dea con il Carro rappresenta oggi uno dei più importanti monumenti conservati dell'antica Thasos. Non è soltanto un resto architettonico, ma una viva testimonianza della potenza, della vita religiosa e della prosperità artistica della città antica. Attraverso il suo rilievo si rivela il mondo degli antichi Thasi: i loro dèi, il loro rapporto con il mare, il commercio, i santuari e la vita quotidiana di un importante centro insulare del nord dell'Egeo.

Oggi il visitatore che si trova davanti alla porta non vede semplicemente pietre e rovine. Vede un luogo attraverso il quale, per secoli, passarono persone, processioni, mercanti e marinai sotto lo sguardo degli dèi che proteggevano la città e il mare dell'antica Thasos.`,
    descriptionDe: `Im nördlichen Teil der antiken Stadt Thasos, ganz in der Nähe des Meeres und des antiken Kriegshafens, befindet sich eines der eindrucksvollsten und geheimnisvollsten Monumente der Insel: das berühmte Tor der Göttin mit dem Wagen. Dieses Monument war nicht einfach nur ein Eingang in die Stadtmauer, sondern ein Ort von tiefer religiöser, politischer und symbolischer Bedeutung, verbunden mit der Seemacht, dem Handel und den Kulten des antiken Thasos.

Der heutige Besucher, der der Straße zum Evraiokastro folgt, passiert hinter dem historischen Gebäude des Vatopedi-Klosters das bekannte „Kalogeriko", das heute als Kulturzentrum der Gemeinde Thasos dient. In diesem Bereich sind noch Teile der antiken Befestigungsmauer sichtbar, welche die bewohnte Stadt vom Kriegshafen trennte. Die Mauern von Thasos gelten als einige der bedeutendsten erhaltenen Befestigungswerke der antiken griechischen Welt und bezeugen die Macht und den wirtschaftlichen Wohlstand der Stadt bereits in archaischer und klassischer Zeit.

Innerhalb dieses Verteidigungssystems öffnet sich das Tor der Göttin mit dem Wagen, eines der wichtigsten Stadttore zum Meer hin. Das Tor liegt tiefer als die heutige Straße und ist außergewöhnlich gut erhalten, sodass Besucher seine ursprüngliche Form und Monumentalität erkennen können.

Das wichtigste Element des Tores sind seine beiden großen Orthostaten, auf denen ein einzigartiges Relief eingemeißelt wurde. Die Darstellung zeigt eine Göttin auf einem Wagen, der von zwei Pferden gezogen wird. Die Szene vermittelt ein starkes Gefühl von Bewegung, als würde die Gottheit feierlich aus der Stadt zum Hafen oder zu einem Heiligtum hinausziehen.

Die Göttin erscheint jung und eindrucksvoll. Ihr Haar ist zu einem Pferdeschwanz gebunden, ein typisches Merkmal archaischer und frühklassischer Kunst. Sie trägt einen Chiton und ein Himation mit tiefen senkrechten Falten – eine Kleidung, die auf die ionische Kunsttradition verweist, mit der die Thasier durch ihre engen Kontakte zu den Küsten Kleinasiens und der nördlichen Ägäis vertraut waren. Ihr linker Arm streckt sich nach vorne und hält die Zügel des Wagens, während ihre gesamte Gestalt Kraft, Selbstbeherrschung und göttliche Präsenz ausstrahlt.

Neben den Pferden geht eine zweite Figur: ein bärtiger Mann im Chiton, der die Zügel hält und die Tiere führt. Die meisten Archäologen identifizieren diese Figur als Hermes, den Götterboten und Beschützer der Reisenden, Händler und Straßen. Die Anwesenheit des Hermes in dieser Szene ist kein Zufall. Thasos war ein bedeutendes Handels- und Seezentrum mit intensiver wirtschaftlicher Aktivität in der nördlichen Ägäis. Hermes, als Gott des Handels und der Bewegung, war der ideale Begleiter der Göttin.

Die auf dem Wagen dargestellte Gottheit wird höchstwahrscheinlich mit Artemis identifiziert. Artemis wurde auf Thasos besonders verehrt und war nicht nur mit Jagd und Natur verbunden, sondern auch mit Übergängen, dem Schutz der Stadt und rituellen Prozessionen. Der Wagen symbolisiert möglicherweise eine heilige Prozession oder eine göttliche Erscheinung, bei der die Göttin die Stadt verlässt, um Einwohner und Seeleute zu schützen.

Die Lage des Tores direkt am Meer war von enormer Bedeutung für das tägliche Leben der antiken Stadt. Hier passierten Waren, Seeleute, Besucher und Pilger. Das Tor diente als Verbindung zwischen dem Inneren der Stadt und dem Hafen – dem Ort, über den Thasos mit der gesamten Ägäis kommunizierte.

Ganz in der Nähe des Tores befand sich außerdem das bedeutende Heiligtum des Poseidon, eines der wichtigsten Götter des Meeres und der Schifffahrt. Der Tempel des Poseidon existierte bereits seit dem 5. Jahrhundert v. Chr. und bildete ein zentrales Kultzentrum der Stadt. Sein Bezirk hatte die Form eines unregelmäßigen Vierecks und war von verschiedenen Nebengebäuden umgeben.

Entlang der Südseite befand sich eine Reihe von Räumen, die wahrscheinlich für rituelle Bankette genutzt wurden. In der antiken griechischen Religion hatten gemeinsame Mahlzeiten eine besondere Bedeutung, da sie Teil des Kultes waren und die Bindung der Gemeinschaft an die Gottheit stärkten.

Inschriften aus dem Gebiet zeigen, dass dort auch Hera Epilimenia verehrt wurde – Hera als Beschützerin des Hafens und der maritimen Aktivitäten. Die Bezeichnung „Epilimenia" verweist direkt auf die Verbindung der Göttin mit sicheren Ankerplätzen und dem Schutz der Seeleute.

Im selben Heiligtum wurde auch eine Statue der Aphrodite Pelagia gefunden. Der Kult der Aphrodite mit dem Beinamen „Pelagia" war mit dem offenen Meer, der Seefahrt und den Reisen verbunden. Seeleute baten vor langen Fahrten über die Ägäis und das Mittelmeer um ihren Schutz.

Das Tor der Göttin mit dem Wagen zählt heute zu den bedeutendsten erhaltenen Monumenten des antiken Thasos. Es ist nicht nur ein architektonisches Überbleibsel, sondern ein lebendiges Zeugnis der Macht, des religiösen Lebens und der künstlerischen Blüte der antiken Stadt. Durch sein Relief offenbart sich die Welt der antiken Thasier: ihre Götter, ihre Beziehung zum Meer, zum Handel, zu den Heiligtümern und zum täglichen Leben eines bedeutenden Inselzentrums der nördlichen Ägäis.

Der Besucher, der heute vor dem Tor steht, sieht nicht einfach nur Steine und Ruinen. Er sieht einen Ort, an dem über Jahrhunderte hinweg Menschen, Prozessionen, Händler und Seeleute unter dem Blick der Götter vorbeizogen, die die Stadt und das Meer des antiken Thasos beschützten.`,
    mapX: 48, mapY: 16,    mapsUrl: "https://maps.app.goo.gl/su1M13dgL5bXTkvb7",
    localImages: [stop3img1, stop3img2, stop3img3, stop3img4, stop3img5],
  },
  {
    id: 4, num: "04",
    title: "Ασπίδα Κεφαλής Λέοντα", titleEn: "Lion-Head Shield",
    titleFr: "Le Bouclier à Tête de Lion",
    titleBg: "Щитът с Лъвската Глава",
    titleTr: "Aslan Başlı Kalkan",
    titleRo: "Scutul cu Cap de Leu",
    titleSr: "Štit sa Lavljom Glavom",
    titleIt: "Lo Scudo con la Testa di Leone",
    titleDe: "Der Schild mit dem Löwenkopf",
    category: "Μνημείο", categoryEn: "Monument",
    categoryTr: "Anıt",
    categoryFr: "Monument",
    categoryBg: "Паметник",
    categoryRo: "Monument",
    categorySr: "Spomenik",
    categoryIt: "Monumento",
    categoryDe: "Monument",
    duration: "7 λεπτά", durationSec: 420,
    imageId: IMGS[7],
    description: "Η ασπίδα αυτή πιθανόν να αποτελούσε την κύρια πολεμική ασπίδα των πολεμιστών της Θάσος και να ήταν διακοσμημένη με τη μορφή λιονταριού, σύμβολο του Ηρακλής, ο οποίος λατρευόταν ως προστάτης του νησιού και των κατοίκων του. Η παράσταση του λιονταριού συνδεόταν άμεσα με τη λεοντή του Ηρακλή, δηλαδή το δέρμα του Νεμέιου Λέοντα που φορούσε ο ήρωας μετά τον πρώτο άθλο του. Για τους αρχαίους Έλληνες, το λιοντάρι συμβόλιζε τη δύναμη, την ανδρεία, την αντοχή και την ακατάβλητη πολεμική ισχύ. Έτσι, η χρήση του επάνω στην ασπίδα δεν είχε μόνο διακοσμητικό χαρακτήρα αλλά λειτουργούσε και ως σύμβολο προστασίας, υπερηφάνειας και ψυχολογικής επιβολής απέναντι στον εχθρό.\n\nΟ οπλίτης αποτελούσε τον σημαντικότερο στρατιώτη των αρχαίων ελληνικών πόλεων. Ήταν βαριά οπλισμένος πεζικάριος και πολεμούσε σε σχηματισμό φάλαγγας, όπου οι στρατιώτες στέκονταν πολύ κοντά ο ένας στον άλλο, σχηματίζοντας ένα συμπαγές και σχεδόν αδιαπέραστο τείχος από ασπίδες και δόρατα. Η επιτυχία της φάλαγγας βασιζόταν στην πειθαρχία, στη συνεργασία και στην απόλυτη συνοχή μεταξύ των πολεμιστών. Κάθε οπλίτης προστάτευε όχι μόνο τον εαυτό του αλλά και τον συμπολεμιστή που στεκόταν δίπλα του.\n\nΟ αμυντικός εξοπλισμός του οπλίτη ήταν ιδιαίτερα βαρύς και εντυπωσιακός. Ο θώρακας, κατασκευασμένος από μέταλλο ή ενισχυμένο λινό, κάλυπτε το στήθος και την κοιλιά προστατεύοντας τα ζωτικά όργανα. Οι περικνημίδες προστάτευαν τα πόδια και ιδιαίτερα τις κνήμες από χτυπήματα και βέλη, ενώ η περικεφαλαία κάλυπτε το κεφάλι, αφήνοντας συνήθως μόνο τα μάτια και το στόμα ελεύθερα. Πολλές περικεφαλαίες έφεραν λοφία από τρίχες αλόγου, τα οποία εντυπωσίαζαν τον αντίπαλο και έδιναν μεγαλύτερο κύρος στον πολεμιστή.\n\nΤο σημαντικότερο αμυντικό όπλο ήταν η μεγάλη κυκλική ασπίδα, γνωστή ως «όπλον». Κατασκευαζόταν κυρίως από ξύλο και επενδυόταν με μέταλλο. Το βάρος της ήταν μεγάλο, όμως παρείχε εξαιρετική προστασία. Πάνω στην εξωτερική της επιφάνεια συχνά απεικονίζονταν σύμβολα, ζώα ή μυθολογικές μορφές, που δήλωναν την ταυτότητα της πόλης, τη δύναμη του πολεμιστή ή την εύνοια κάποιου θεού ή ήρωα. Στην περίπτωση των Θασίων, η μορφή του λιονταριού πιθανόν να υπογράμμιζε τη σύνδεση της πόλης με τον Ηρακλή και να λειτουργούσε ως έμβλημα γενναιότητας.\n\nΟ επιθετικός εξοπλισμός του οπλίτη περιλάμβανε κυρίως το δόρυ, το οποίο αποτελούσε το βασικό όπλο της φάλαγγας. Με το μακρύ του μήκος, οι στρατιώτες μπορούσαν να πλήττουν τον αντίπαλο από ασφαλή απόσταση. Όταν το δόρυ έσπαζε ή η μάχη γινόταν σώμα με σώμα, ο οπλίτης χρησιμοποιούσε το ξίφος του, συνήθως κοντό αλλά ιδιαίτερα αποτελεσματικό σε κοντινή σύγκρουση. Σε ορισμένες περιπτώσεις χρησιμοποιούνταν επίσης ακόντια, τόξα ή σφενδόνες, κυρίως από ειδικές κατηγορίες στρατιωτών.\n\nΠλάι στους βαριά οπλισμένους οπλίτες δρούσαν και οι ελαφρά οπλισμένοι στρατιώτες. Οι σφενδονιστές χρησιμοποιούσαν σφενδόνες για να εκτοξεύουν πέτρες ή μολύβδινα βλήματα με μεγάλη ταχύτητα και ακρίβεια. Οι ακοντιστές έφεραν ελαφριά ακόντια, τα οποία εκτόξευαν από απόσταση, ενώ οι πελταστές κρατούσαν μικρή ελαφριά ασπίδα, την πέλτη, που τους επέτρεπε γρήγορες κινήσεις και ευελιξία. Οι λεγόμενοι «ψιλοί» αποτελούσαν γενικά τις πιο ελαφρές μονάδες του στρατού και χρησιμοποιούνταν για αναγνώριση, παρενόχληση του εχθρού και αιφνιδιαστικές επιθέσεις.\n\nΟι στρατιώτες αυτοί, αν και δεν διέθεταν τη βαριά προστασία των οπλιτών, ήταν εξαιρετικά σημαντικοί στο πεδίο της μάχης. Η ταχύτητα και η ευκινησία τους τους επέτρεπαν να επιτίθενται γρήγορα και να απομακρύνονται πριν δεχθούν αντεπίθεση. Συχνά προέρχονταν από περιοχές με μακρά πολεμική παράδοση ή υπηρετούσαν ως μισθοφόροι, προσφέροντας τις υπηρεσίες τους σε ελληνικές πόλεις, βασίλεια και στρατούς της εποχής. Με τη συμβολή τόσο των οπλιτών όσο και των ελαφρά οπλισμένων μονάδων, οι αρχαίοι ελληνικοί στρατοί κατάφερναν να συνδυάζουν δύναμη, αντοχή και ευελιξία στις πολεμικές επιχειρήσεις.",
    descriptionEn: `This shield may have been the principal war shield of the warriors of Thasos and was probably decorated with the image of a lion, symbol of Heracles, who was worshipped as the protector of the island and its inhabitants. The depiction of the lion was directly connected to the lion skin of Heracles — the hide of the Nemean Lion worn by the hero after completing his first labor. For the ancient Greeks, the lion symbolized strength, courage, endurance, and invincible military power. Thus, its use on the shield was not merely decorative, but also functioned as a symbol of protection, pride, and psychological dominance over the enemy.

The hoplite was the most important soldier of the ancient Greek city-states. He was a heavily armed infantryman who fought in the phalanx formation, where soldiers stood very close together, forming a compact and nearly impenetrable wall of shields and spears. The success of the phalanx depended on discipline, cooperation, and absolute unity among the warriors. Each hoplite protected not only himself but also the fellow soldier standing beside him.

The defensive equipment of the hoplite was particularly heavy and impressive. The cuirass, made of metal or reinforced linen, protected the chest and abdomen. Greaves protected the legs, especially the shins, from blows and arrows, while the helmet covered the head, usually leaving only the eyes and mouth exposed. Many helmets were decorated with horsehair crests that intimidated opponents and added prestige to the warrior.

The most important defensive weapon was the large circular shield, known as the "hoplon." It was mainly constructed of wood and covered with metal. Although heavy, it provided excellent protection. Symbols, animals, or mythological figures were often depicted on its outer surface, representing the identity of the city, the warrior's strength, or the favor of a god or hero. In the case of the Thasians, the lion image probably emphasized the city's connection with Heracles and served as an emblem of bravery.

The offensive equipment of the hoplite mainly included the spear, which was the primary weapon of the phalanx. Its long reach allowed soldiers to strike enemies from a safer distance. When the spear broke or combat became close-range, the hoplite used his sword, usually short but highly effective in hand-to-hand fighting. In some cases, javelins, bows, or slings were also used, especially by specialized troops.

Alongside the heavily armed hoplites fought lightly armed soldiers. Slingers used slings to hurl stones or lead projectiles with great speed and accuracy. Javelin throwers carried light spears that could be launched from a distance, while peltasts carried a small light shield called a pelte, allowing them greater mobility and flexibility. The so-called "psiloi" generally formed the lightest military units and were used for reconnaissance, harassment of the enemy, and surprise attacks.

Although these soldiers lacked the heavy protection of the hoplites, they were extremely important on the battlefield. Their speed and agility enabled them to attack quickly and retreat before facing counterattacks. They often came from regions with long military traditions or served as mercenaries, offering their services to Greek cities, kingdoms, and armies of the era. Through the combined action of hoplites and light infantry units, ancient Greek armies achieved a balance of strength, endurance, and flexibility in warfare.`,
    descriptionFr: `Ce bouclier était probablement le principal bouclier de guerre des guerriers de Thasos et était décoré de l'image d'un lion, symbole de Heracles, vénéré comme protecteur de l'île et de ses habitants. La représentation du lion était directement liée à la peau du Lion de Némée portée par Héraclès après son premier exploit. Pour les Grecs de l'Antiquité, le lion symbolisait la force, le courage, l'endurance et la puissance militaire invincible. Ainsi, son utilisation sur le bouclier n'était pas seulement décorative, mais aussi symbolique : protection, fierté et intimidation psychologique de l'ennemi.\n\nL'hoplite était le soldat le plus important des cités grecques antiques. C'était un fantassin lourdement armé qui combattait dans la formation de la phalange, où les soldats se tenaient très proches les uns des autres, formant un mur compact et presque impénétrable de boucliers et de lances. Le succès de la phalange reposait sur la discipline, la coopération et l'unité absolue entre les guerriers. Chaque hoplite protégeait non seulement lui-même, mais aussi son compagnon placé à côté de lui.\n\nL'équipement défensif de l'hoplite était particulièrement lourd et impressionnant. La cuirasse, fabriquée en métal ou en lin renforcé, protégeait la poitrine et l'abdomen. Les cnémides protégeaient les jambes, surtout les tibias, contre les coups et les flèches, tandis que le casque couvrait la tête en laissant généralement seulement les yeux et la bouche visibles. Beaucoup de casques étaient décorés de crêtes en crin de cheval qui impressionnaient les adversaires et donnaient davantage de prestige au guerrier.\n\nL'arme défensive la plus importante était le grand bouclier circulaire appelé « hoplon ». Il était principalement fabriqué en bois et recouvert de métal. Bien que lourd, il offrait une excellente protection. Sur sa surface extérieure étaient souvent représentés des symboles, des animaux ou des figures mythologiques représentant l'identité de la cité, la force du guerrier ou la faveur d'un dieu ou d'un héros. Dans le cas des habitants de Thasos, l'image du lion soulignait probablement le lien de la ville avec Héraclès et servait d'emblème du courage.\n\nL'équipement offensif de l'hoplite comprenait principalement la lance, arme fondamentale de la phalange. Sa longueur permettait aux soldats de frapper leurs ennemis à une distance plus sûre. Lorsque la lance se brisait ou que le combat devenait rapproché, l'hoplite utilisait son épée, généralement courte mais extrêmement efficace dans les combats au corps à corps. Dans certains cas, des javelots, des arcs ou des frondes étaient également utilisés, surtout par des troupes spécialisées.\n\nAux côtés des hoplites lourdement armés combattaient aussi des soldats légèrement armés. Les frondeurs utilisaient des frondes pour lancer des pierres ou des projectiles de plomb avec une grande vitesse et précision. Les lanceurs de javelot portaient de légères lances de jet, tandis que les peltastes utilisaient un petit bouclier léger appelé « pelta », qui leur donnait mobilité et flexibilité. Les « psiloi » constituaient généralement les unités les plus légères de l'armée et étaient employés pour la reconnaissance, le harcèlement de l'ennemi et les attaques surprises.\n\nBien que ces soldats ne possédaient pas la lourde protection des hoplites, ils étaient extrêmement importants sur le champ de bataille. Leur rapidité et leur agilité leur permettaient d'attaquer rapidement et de se retirer avant les contre-attaques ennemies. Ils provenaient souvent de régions ayant une longue tradition militaire ou servaient comme mercenaires dans les cités, royaumes et armées grecques de l'époque. Grâce à l'action combinée des hoplites et de l'infanterie légère, les armées grecques antiques parvenaient à réunir force, endurance et flexibilité dans l'art de la guerre.`,
    descriptionBg: `Този щит вероятно е бил основният боен щит на воините на Тасос и е бил украсен с образа на лъв — символ на Heracles, почитан като закрилник на острова и неговите жители. Изображението на лъва било пряко свързано с кожата на Немейския лъв, носена от Херакъл след първия му подвиг. За древните гърци лъвът символизирал сила, смелост, издръжливост и непобедима военна мощ. Затова използването му върху щита имало не само декоративна, но и символична функция — защита, гордост и психологическо въздействие върху врага.\n\nХоплитът бил най-важният войник в древногръцките градове-държави. Той бил тежковъоръжен пехотинец, който се сражавал във фаланга — строй, при който войниците стояли много близо един до друг, образувайки плътна и почти непробиваема стена от щитове и копия. Успехът на фалангата зависел от дисциплината, сътрудничеството и пълното единство mellan воините. Всеки хоплит защитавал не само себе си, но и бойния другар до него.\n\nЗащитното въоръжение на хоплита било особено тежко и впечатляващо. Бронята, изработена от метал или подсилен лен, защитавала гърдите и корема. Наколенниците пазели краката и особено пищялите от удари и стрели, а шлемът покривал главата, като обикновено оставял открити само очите и устата. Много шлемове били украсени с гребени от конски косъм, които внушавали страх на противника и придавали престиж на воина.\n\nНай-важното защитно оръжие бил големият кръгъл щит, известен като „хоплон". Той бил изработен основно от дърво и покрит с метал. Макар и тежък, щитът осигурявал отлична защита. Външната му страна често била украсена със символи, животни или митологични фигури, представящи идентичността на града, силата на воина или благоволението на бог или герой. В случая на тасосците изображението на лъва вероятно подчертавало връзката на града с Херакъл и служело като символ на храбростта.\n\nНастъпателното въоръжение на хоплита включвало главно копието — основното оръжие на фалангата. Дължината му позволявала на войниците да поразяват врага от по-безопасно разстояние. Когато копието се счупело или битката станела близка, хоплитът използвал меча си — обикновено къс, но изключително ефективен в ръкопашен бой. В някои случаи се използвали и копия за хвърляне, лъкове или прашки, особено от специализирани части.\n\nНаред с тежковъоръжените хоплити се сражавали и лековъоръжени войници. Прашкарите използвали прашки, за да хвърлят камъни или оловни снаряди с голяма скорост и точност. Метателите на копия носели леки копия за хвърляне, а пелтастите използвали малък лек щит, наречен „пелта", който им осигурявал по-голяма подвижност и гъвкавост. Така наречените „псилои" представлявали най-леките части на армията и били използвани за разузнаване, тормоз над врага и внезапни нападения.\n\nМакар да нямали тежката защита на хоплитите, тези войници били изключително важни на бойното поле. Тяхната бързина и подвижност им позволявали да нападат бързо и да се изтеглят преди контраатака. Често те произхождали от области с дълга военна традиция или служели като наемници в гръцките градове, царства и армии на епохата. Чрез съвместното действие на хоплити и лека пехота древногръцките армии постигали баланс между сила, издръжливост и гъвкавост във войната.`,
    descriptionTr: `Bu kalkan muhtemelen Thasos savaşçılarının ana savaş kalkanıydı ve ada ile halkının koruyucusu olarak saygı gören Heracles simgesi olan bir aslan figürüyle süslenmişti. Aslan tasviri, Herakles'in ilk görevinden sonra giydiği Nemea Aslanı'nın postuyla doğrudan bağlantılıydı. Antik Yunanlılar için aslan; güç, cesaret, dayanıklılık ve yenilmez askeri kuvvetin sembolüydü. Bu nedenle kalkan üzerindeki aslan yalnızca dekoratif değil, aynı zamanda koruma, gurur ve düşmanı psikolojik olarak korkutma amacı taşıyan sembolik bir öğeydi.

Hoplites, antik Yunan şehir devletlerinin en önemli askeriydi. Bunlar, falanks düzeninde savaşan ağır zırhlı piyadelerdi. Askerler birbirine çok yakın durarak mızrak ve kalkanlardan oluşan sıkı ve neredeyse geçilmez bir duvar meydana getirirdi. Falanksın başarısı disipline, iş birliğine ve savaşçılar arasındaki mutlak birliğe dayanıyordu. Her hoplit yalnızca kendisini değil, yanındaki savaş arkadaşını da koruyordu.

Hoplitin savunma ekipmanı son derece ağır ve etkileyiciydi. Metal ya da güçlendirilmiş ketenden yapılan göğüs zırhı göğsü ve karnı koruyordu. Baldırlıklar özellikle alt bacakları darbelerden ve oklardan korurken, miğfer başı kaplıyor ve genellikle yalnızca gözlerle ağzı açık bırakıyordu. Birçok miğfer, düşmanı korkutan ve savaşçıya prestij kazandıran at kılı sorguçlarla süslenmişti.

En önemli savunma silahı "hoplon" adı verilen büyük yuvarlak kalkandı. Çoğunlukla ahşaptan yapılır ve metal ile kaplanırdı. Ağır olmasına rağmen mükemmel koruma sağlıyordu. Dış yüzeyinde sık sık semboller, hayvanlar veya mitolojik figürler yer alırdı; bunlar şehrin kimliğini, savaşçının gücünü ya da bir tanrı veya kahramanın desteğini temsil ederdi. Thasoslular için aslan figürü muhtemelen şehrin Herakles ile bağlantısını vurguluyor ve cesaret sembolü olarak kullanılıyordu.

Hoplitin saldırı ekipmanının başlıca unsuru mızraktı; bu falanksın temel silahıydı. Uzunluğu sayesinde askerler düşmanı daha güvenli bir mesafeden vurabiliyordu. Mızrak kırıldığında ya da savaş yakın dövüşe dönüştüğünde hoplit kısa fakat son derece etkili bir kılıç kullanıyordu. Bazı durumlarda özellikle uzman birlikler tarafından ciritler, yaylar veya sapanlar da kullanılıyordu.

Ağır silahlı hoplitlerin yanında hafif silahlı askerler de savaşırdı. Sapancılar taş ya da kurşun mermileri büyük hız ve doğrulukla fırlatıyordu. Ciritçiler uzaktan atılabilen hafif mızraklar taşıyor, peltastlar ise "pelta" adı verilen küçük hafif bir kalkan kullanıyordu; bu onlara hareketlilik ve esneklik sağlıyordu. "Psiloi" adı verilen birlikler ordunun en hafif kuvvetleriydi ve keşif, düşmanı rahatsız etme ve ani saldırılar için kullanılıyordu.

Bu askerler hoplitlerin ağır korumasına sahip olmasalar da savaş alanında son derece önemliydiler. Hızları ve çeviklikleri sayesinde hızlı saldırılar yapabiliyor ve karşı saldırıdan önce geri çekilebiliyorlardı. Çoğu, uzun askeri geleneklere sahip bölgelerden geliyor ya da Yunan şehirlerinde, krallıklarda ve dönemin ordularında paralı asker olarak görev yapıyordu. Hoplitler ile hafif piyadelerin ortak hareketi sayesinde antik Yunan orduları güç, dayanıklılık ve esnekliği bir araya getirebiliyordu.`,
    descriptionRo: `Acest scut era probabil principalul scut de război al războinicilor din Thasos și era decorat cu imaginea unui leu, simbol al lui Heracles, venerat ca protector al insulei și al locuitori lor săi. Reprezentarea leului era direct legată de pielea Leului din Nemeea purtată de Heracle după primul său muncă eroică. Pentru grecii antici, leul simboliza puterea, curajul, rezistența și forța militară de neînvins. Astfel, folosirea sa pe scut nu avea doar un rol decorativ, ci și unul simbolic — de protecție, mândrie și intimidare psihologică a inamicului.

Hoplitul era cel mai important soldat al cetăților grecești antice. El era un infanterist greu înarmat care lupta în formația numită falangă, unde soldații stăteau foarte aproape unii de alții, formând un zid compact și aproape impenetrabil de scuturi și sulițe. Succesul falangei se baza pe disciplină, cooperare și unitate absolută între războinici. Fiecare hoplit își proteja nu doar propria persoană, ci și camaradul aflat lângă el.

Echipamentul defensiv al hoplitului era deosebit de greu și impresionant. Cuirasa, realizată din metal sau in întărit, proteja pieptul și abdomenul. Cnemidele apărau picioarele și mai ales fluierul piciorului de lovituri și săgeți, iar coiful acoperea capul, lăsând de obicei doar ochii și gura libere. Multe coifuri aveau creste din păr de cal, care impresionau adversarul și ofereau războinicului mai mult prestigiu.

Cea mai importantă armă defensivă era marele scut circular, cunoscut sub numele de „hoplon". Acesta era realizat în principal din lemn și acoperit cu metal. Deși greu, oferea o protecție excelentă. Pe suprafața sa exterioară erau adesea reprezentate simboluri, animale sau figuri mitologice care exprimau identitatea cetății, puterea războinicului sau favoarea unui zeu ori erou. În cazul thasienilor, imaginea leului sublinia probabil legătura orașului cu Heracle și servea drept emblemă a curajului.

Echipamentul ofensiv al hoplitului includea în principal sulița, arma de bază a falangei. Lungimea ei le permitea soldaților să lovească inamicul de la o distanță sigură. Când sulița se rupea sau lupta devenea corp la corp, hoplitul folosea sabia, de obicei scurtă, dar foarte eficientă în lupta apropiată. În anumite cazuri se foloseau și sulițe ușoare, arcuri sau praștii, mai ales de către trupele specializate.

Alături de hopliții greu înarmați luptau și soldați ușor înarmați. Praștierii foloseau praștii pentru a lansa pietre sau proiectile de plumb cu mare viteză și precizie. Aruncătorii de sulițe purtau sulițe ușoare care puteau fi aruncate de la distanță, iar peltastele purtau un scut mic și ușor numit pelta, care le permitea mobilitate și flexibilitate. Așa-numiții „psiloi" reprezentau cele mai ușoare unități ale armatei și erau folosiți pentru recunoaștere, hărțuirea inamicului și atacuri surpriză.

Deși acești soldați nu aveau protecția grea a hopliților, ei erau extrem de importanți pe câmpul de luptă. Viteza și agilitatea lor le permiteau să atace rapid și să se retragă înainte de contraatac. Adesea proveneau din regiuni cu tradiție militară îndelungată sau serveau ca mercenari în orașe, regate și armate grecești ale vremii. Prin colaborarea hopliților și a trupelor ușoare, armatele grecești antice reușeau să combine forța, rezistența și flexibilitatea în război.`,
    descriptionSr: `Ovaj štit je verovatno predstavljao glavni ratni štit ratnika Tasosa i bio je ukrašen likom lava, simbolom Heracles, koji je poštovan kao zaštitnik ostrva i njegovih stanovnika. Prikaz lava bio je direktno povezan sa kožom Nemejskog lava koju je Herakle nosio nakon svog prvog podviga. Za stare Grke, lav je simbolizovao snagu, hrabrost, izdržljivost i nepobedivu vojnu moć. Zato njegova upotreba na štitu nije imala samo dekorativnu funkciju, već i simboličnu — zaštitu, ponos i psihološko zastrašivanje neprijatelja.

Hoplita je bio najvažniji vojnik antičkih grčkih gradova-država. Bio je teško naoružani pešadinac koji se borio u falangi, formaciji u kojoj su vojnici stajali veoma blizu jedni drugima formirajući kompaktan i gotovo neprobojan zid štitova i kopalja. Uspeh falange zavisio je od discipline, saradnje i apsolutnog jedinstva među ratnicima. Svaki hoplita štitio je ne samo sebe već i saborca pored sebe.

Odbrambena oprema hoplite bila je posebno teška i impresivna. Oklop od metala ili ojačanog platna štitio je grudi i stomak. Potkolenice su štitile noge, naročito cevanice, od udaraca i strela, dok je šlem pokrivao glavu ostavljajući uglavnom samo oči i usta otkrivenim. Mnogi šlemovi bili su ukrašeni perjanicama od konjske dlake koje su zastrašivale protivnike i davale dodatni ugled ratniku.

Najvažnije odbrambeno oružje bio je veliki okrugli štit poznat kao „hoplon". Izrađivan je uglavnom od drveta i obložen metalom. Iako težak, pružao je odličnu zaštitu. Na spoljašnjoj strani često su prikazivani simboli, životinje ili mitološke figure koje su predstavljale identitet grada, snagu ratnika ili naklonost nekog boga ili heroja. U slučaju Tasošana, lik lava verovatno je naglašavao povezanost grada sa Heraklom i služio kao simbol hrabrosti.

Napadačka oprema hoplite uglavnom je uključivala koplje, osnovno oružje falange. Njegova dužina omogućavala je vojnicima da napadaju neprijatelje sa bezbednije udaljenosti. Kada bi se koplje polomilo ili bi borba postala bliska, hoplita je koristio mač, obično kratak ali veoma efikasan u borbi prsa u prsa. U nekim slučajevima korišćeni su i džavelini, lukovi ili praćke, naročito kod specijalizovanih jedinica.

Pored teško naoružanih hoplita borili su se i lako naoružani vojnici. Praćkaši su koristili praćke za bacanje kamenja ili olovnih projektila velikom brzinom i preciznošću. Bacači koplja nosili su laka koplja koja su mogla biti bačena iz daljine, dok su peltasti nosili mali laki štit zvan pelta koji im je omogućavao veću pokretljivost i fleksibilnost. Takozvani „psiloi" činili su najlakše vojne jedinice i korišćeni su za izviđanje, uznemiravanje neprijatelja i iznenadne napade.

Iako nisu imali tešku zaštitu hoplita, ovi vojnici bili su izuzetno važni na bojnom polju. Njihova brzina i okretnost omogućavale su im brze napade i povlačenje pre neprijateljskog protivnapada. Često su dolazili iz oblasti sa dugom vojnom tradicijom ili su služili kao plaćenici u grčkim gradovima, kraljevstvima i vojskama tog doba. Kroz zajedničko delovanje hoplita i lake pešadije, antičke grčke vojske uspevale su da spoje snagu, izdržljivost i fleksibilnost u ratovanju.`,
    descriptionIt: `Questo scudo probabilmente costituiva il principale scudo da guerra dei guerrieri di Thasos ed era decorato con la figura di un leone, simbolo di Heracles, venerato come protettore dell'isola e dei suoi abitanti. La rappresentazione del leone era direttamente collegata alla pelle del Leone di Nemea indossata da Eracle dopo la sua prima fatica. Per gli antichi Greci, il leone simboleggiava forza, coraggio, resistenza e potenza militare invincibile. Per questo motivo, la sua presenza sullo scudo non aveva solo una funzione decorativa, ma anche simbolica: protezione, orgoglio e intimidazione psicologica del nemico.

L'oplita era il soldato più importante delle antiche città-stato greche. Era un fante pesantemente armato che combatteva nella formazione a falange, dove i soldati stavano molto vicini tra loro formando un muro compatto e quasi impenetrabile di scudi e lance. Il successo della falange si basava sulla disciplina, sulla cooperazione e sulla totale unità tra i guerrieri. Ogni oplita proteggeva non solo sé stesso ma anche il compagno accanto a lui.

L'equipaggiamento difensivo dell'oplita era particolarmente pesante e impressionante. La corazza, realizzata in metallo o lino rinforzato, proteggeva il petto e l'addome. I gambali proteggevano le gambe e soprattutto le tibie dai colpi e dalle frecce, mentre l'elmo copriva la testa lasciando generalmente scoperti solo gli occhi e la bocca. Molti elmi erano decorati con creste di crine di cavallo che impressionavano il nemico e conferivano maggiore prestigio al guerriero.

L'arma difensiva più importante era il grande scudo circolare chiamato "hoplon". Era costruito principalmente in legno e rivestito di metallo. Sebbene pesante, offriva una protezione eccellente. Sulla superficie esterna venivano spesso raffigurati simboli, animali o figure mitologiche che rappresentavano l'identità della città, la forza del guerriero o il favore di un dio o di un eroe. Nel caso dei Thasi, l'immagine del leone sottolineava probabilmente il legame della città con Eracle e serviva come emblema di coraggio.

L'equipaggiamento offensivo dell'oplita comprendeva principalmente la lancia, arma fondamentale della falange. La sua lunghezza permetteva ai soldati di colpire il nemico da una distanza relativamente sicura. Quando la lancia si rompeva o il combattimento diventava ravvicinato, l'oplita utilizzava la spada, generalmente corta ma estremamente efficace nel corpo a corpo. In alcuni casi venivano utilizzati anche giavellotti, archi o fionde, soprattutto da truppe specializzate.

Accanto agli opliti combattevano anche soldati leggermente armati. I frombolieri usavano fionde per lanciare pietre o proiettili di piombo con grande velocità e precisione. I giavellottisti portavano leggere lance da lancio, mentre i peltasti utilizzavano un piccolo scudo leggero chiamato "pelta", che permetteva loro movimenti rapidi e grande flessibilità. I cosiddetti "psiloi" costituivano generalmente le unità più leggere dell'esercito e venivano impiegati per ricognizione, disturbo del nemico e attacchi improvvisi.

Anche se questi soldati non disponevano della pesante protezione degli opliti, erano estremamente importanti sul campo di battaglia. La loro velocità e agilità permettevano attacchi rapidi e ritirate immediate prima dei contrattacchi nemici. Spesso provenivano da regioni con una lunga tradizione militare o servivano come mercenari presso città greche, regni ed eserciti dell'epoca. Grazie alla collaborazione tra opliti e fanteria leggera, gli antichi eserciti greci riuscivano a combinare forza, resistenza e flessibilità nelle operazioni militari.`,
    descriptionDe: `Dieser Schild war wahrscheinlich der wichtigste Kriegsschild der Krieger von Thasos und möglicherweise mit einem Löwenkopf verziert – dem Symbol des Heracles, der als Beschützer der Insel und ihrer Bewohner verehrt wurde. Die Darstellung des Löwen stand in direkter Verbindung mit dem Löwenfell des Herakles, also der Haut des Nemeischen Löwen, die der Held nach seiner ersten Aufgabe trug. Für die alten Griechen symbolisierte der Löwe Stärke, Mut, Ausdauer und unbesiegbare Kampfkraft. Daher hatte die Darstellung auf dem Schild nicht nur dekorativen Charakter, sondern diente auch als Symbol für Schutz, Stolz und psychologische Einschüchterung des Feindes.

Der Hoplit war der wichtigste Soldat der antiken griechischen Stadtstaaten. Er war ein schwer bewaffneter Infanterist und kämpfte in der Phalanxformation, bei der die Soldaten dicht nebeneinander standen und eine kompakte, beinahe undurchdringliche Mauer aus Schilden und Speeren bildeten. Der Erfolg der Phalanx beruhte auf Disziplin, Zusammenarbeit und absolutem Zusammenhalt unter den Kriegern. Jeder Hoplit schützte nicht nur sich selbst, sondern auch den Mitkämpfer neben ihm.

Die Verteidigungsausrüstung des Hopliten war besonders schwer und beeindruckend. Der Brustpanzer aus Metall oder verstärktem Leinen schützte Brust und Bauch. Beinschienen schützten die Beine und insbesondere die Schienbeine vor Schlägen und Pfeilen, während der Helm den Kopf bedeckte und meist nur Augen und Mund freiließ. Viele Helme trugen Rosshaarkämme, die den Gegner einschüchterten und dem Krieger zusätzliches Ansehen verliehen.

Die wichtigste Verteidigungswaffe war der große runde Schild, bekannt als „Hoplon". Er bestand hauptsächlich aus Holz und war mit Metall verstärkt. Obwohl er schwer war, bot er ausgezeichneten Schutz. Auf seiner Außenseite wurden häufig Symbole, Tiere oder mythologische Figuren dargestellt, die die Identität der Stadt, die Stärke des Kriegers oder die Gunst eines Gottes oder Helden symbolisierten. Im Fall der Thasier unterstrich das Löwenmotiv wahrscheinlich die Verbindung der Stadt zu Herakles und diente als Zeichen der Tapferkeit.

Zur Angriffsausrüstung des Hopliten gehörte vor allem der Speer, die Hauptwaffe der Phalanx. Durch seine Länge konnten die Soldaten den Gegner aus sicherer Entfernung treffen. Wenn der Speer zerbrach oder der Kampf in den Nahbereich überging, verwendete der Hoplit sein Schwert – meist kurz, aber äußerst wirksam im Nahkampf. In manchen Fällen wurden auch Wurfspeere, Bögen oder Schleudern eingesetzt, insbesondere von speziellen Truppeneinheiten.

Neben den schwer bewaffneten Hopliten kämpften auch leicht bewaffnete Soldaten. Schleuderer benutzten Schleudern, um Steine oder Bleigeschosse mit großer Geschwindigkeit und Genauigkeit zu werfen. Speerwerfer trugen leichte Wurfspeere, während Peltasten einen kleinen leichten Schild, die Pelte, trugen, der ihnen schnelle Bewegungen und Flexibilität ermöglichte. Die sogenannten „Psiloi" bildeten im Allgemeinen die leichtesten Einheiten des Heeres und wurden für Aufklärung, Belästigung des Feindes und Überraschungsangriffe eingesetzt.

Obwohl diese Soldaten nicht über den schweren Schutz der Hopliten verfügten, waren sie auf dem Schlachtfeld äußerst wichtig. Ihre Geschwindigkeit und Beweglichkeit ermöglichten schnelle Angriffe und raschen Rückzug vor Gegenangriffen. Oft stammten sie aus Regionen mit langer militärischer Tradition oder dienten als Söldner in griechischen Städten, Königreichen und Armeen der damaligen Zeit. Durch das Zusammenwirken von Hopliten und leichter Infanterie konnten die antiken griechischen Armeen Stärke, Ausdauer und Flexibilität im Krieg vereinen.`,
    mapX: 68, mapY: 24,    mapsUrl: "https://maps.app.goo.gl/uULYTxnuABkQSS2A6",
    localImages: [stop4img1],
  },
  {
    id: 5, num: "05",
    title: "Αρχαία Λατομεία — Μάρμαρο Θάσου", titleEn: "Ancient Quarries — Thassos Marble",
    titleFr: "Les Carrières Antiques – Le Marbre de Thasos",
    titleBg: "Древните Кариери – Тасоският Мрамор",
    titleTr: "Antik Taş Ocakları – Thasos Mermeri",
    titleIt: "Antiche Cave – Il Marmo di Thasos",
    titleRo: "Carierele Antice – Marmura din Thasos",
    titleSr: "Antički Kamenolomi – Tasoski Mermer",
    titleDe: "Antike Steinbrüche – Der Marmor von Thasos",
    category: "Λατομεία", categoryEn: "Quarries",
    categoryTr: "Taş Ocakları",
    categoryFr: "Carrières",
    categoryBg: "Кариери",
    categoryRo: "Cariere",
    categorySr: "Kamenolomi",
    categoryIt: "Cave",
    categoryDe: "Steinbrüche",
    duration: "9 λεπτά", durationSec: 540,
    imageId: IMGS[4],
    description: "Το μάρμαρο της Θάσος αποτελεί έναν από τους σημαντικότερους φυσικούς και πολιτιστικούς θησαυρούς της αρχαιότητας και συνδέθηκε άμεσα με την εξέλιξη της ελληνικής αρχιτεκτονικής, γλυπτικής και οικονομίας. Η φήμη του ξεπέρασε τα όρια του Αιγαίου και εξαπλώθηκε σε ολόκληρη τη Μεσόγειο, καθιστώντας τη Θάσο ένα από τα μεγαλύτερα κέντρα εξόρυξης και εμπορίου μαρμάρου του αρχαίου κόσμου.\n\nΗ εκμετάλλευση των μαρμάρων του νησιού ξεκίνησε ήδη από την αρχαϊκή εποχή, περίπου τον 7ο αιώνα π.Χ., όταν οι κάτοικοι της Θάσου αντιλήφθηκαν την εξαιρετική ποιότητα του πετρώματος που υπήρχε στα βουνά του νησιού. Τα λατομεία αναπτύχθηκαν κυρίως στις παράκτιες περιοχές, ώστε η μεταφορά των τεράστιων όγκων μαρμάρου να γίνεται ευκολότερα μέσω της θάλασσας. Ιδιαίτερα γνωστά ήταν τα αρχαία λατομεία της Αλυκής, όπου οι βράχοι κατέβαιναν σχεδόν μέσα στη θάλασσα, επιτρέποντας στα πλοία να φορτώνουν απευθείας το πολύτιμο υλικό.\n\nΤο θασίτικο μάρμαρο ξεχώριζε για το εκθαμβωτικό λευκό του χρώμα, τη διαφάνειά του και την καθαρότητα της υφής του. Σε ορισμένες περιπτώσεις, όταν το φως περνούσε μέσα από λεπτά κομμάτια του μαρμάρου, δημιουργούσε μια μοναδική φωτεινότητα, χαρακτηριστικό που το έκανε ιδιαίτερα αγαπητό στους γλύπτες της αρχαιότητας. Η λεπτόκοκκη σύστασή του επέτρεπε την απόδοση εξαιρετικά λεπτών και ρεαλιστικών λεπτομερειών στα αγάλματα, στα πρόσωπα και στις πτυχώσεις των ενδυμάτων. Για τον λόγο αυτό θεωρούνταν ισάξιο με τα πιο φημισμένα μάρμαρα της Ελλάδας, όπως το πεντελικό και το παριανό.\n\nΟι αρχαίοι Έλληνες χρησιμοποίησαν το μάρμαρο της Θάσου για την κατασκευή σπουδαίων ναών, μνημείων και δημοσίων οικοδομημάτων. Ανάμεσα στα σημαντικότερα έργα όπου χρησιμοποιήθηκε συγκαταλέγονται ο ναός του Διός στην Αρχαία Ολυμπία, καθώς και ο Ναός Αθηνάς Νίκης στην Ακρόπολη Αθηνών. Παράλληλα, χρησιμοποιήθηκε σε αναθηματικά μνημεία, βωμούς, επιτύμβιες στήλες και πολυάριθμα γλυπτά που κοσμούσαν ιερά και δημόσιους χώρους.\n\nΚατά τη ρωμαϊκή περίοδο, η αξία του θασίτικου μαρμάρου αυξήθηκε ακόμη περισσότερο. Οι Ρωμαίοι αυτοκράτορες και οι αριστοκρατικές οικογένειες το θεωρούσαν σύμβολο πλούτου, δύναμης και πολυτέλειας. Τεράστιες ποσότητες εξάγονταν από τη Θάσο προς τη Ρώμη, την Κωνσταντινούπολη, την Αλεξάνδρεια και άλλες μεγάλες πόλεις της αυτοκρατορίας. Με αυτό διακοσμήθηκαν παλάτια, λουτρά, επαύλεις, ναοί και δημόσια κτίρια, ενώ συχνά χρησιμοποιούνταν και για επενδύσεις τοίχων και δαπέδων.\n\nΗ διαδικασία εξόρυξης ήταν ιδιαίτερα δύσκολη και απαιτούσε μεγάλη τεχνική γνώση. Οι εργάτες χρησιμοποιούσαν σιδερένια εργαλεία, σφήνες και μοχλούς για να αποσπούν τους τεράστιους όγκους από το βουνό. Στη συνέχεια, οι μαρμάρινοι όγκοι μεταφέρονταν με ξύλινα έλκηθρα ή κυλίνδρους προς τα λιμάνια. Στα λατομεία σώζονται ακόμη ίχνη από τα αυλάκια κοπής, τις ράμπες μεταφοράς και τις ημιτελείς εξορύξεις, στοιχεία που αποκαλύπτουν την οργάνωση και την τεχνογνωσία των αρχαίων τεχνιτών.\n\nΙδιαίτερη σημασία είχε το αρχαίο λατομείο της Αλυκής, στη νοτιοανατολική πλευρά της Θάσου. Εκεί, το μάρμαρο εξορυσσόταν αδιάκοπα για πολλούς αιώνες και φορτωνόταν απευθείας στα πλοία. Σήμερα, ο επισκέπτης μπορεί να δει μέσα στη θάλασσα τους κομμένους βράχους, τις λαξεμένες επιφάνειες και τα ίχνη των εργαλείων, μια μοναδική εικόνα που μαρτυρά τη μεγάλη ακμή της αρχαίας μαρμαροτεχνίας του νησιού.\n\nΗ οικονομική δύναμη της Θάσου βασίστηκε σε μεγάλο βαθμό στο εμπόριο του μαρμάρου. Το υλικό αυτό αποτέλεσε πηγή πλούτου και διεθνούς φήμης για το νησί, ενισχύοντας τις εμπορικές του σχέσεις με τις πόλεις του Αιγαίου, της Μικράς Ασίας και αργότερα της Ρώμης. Τα έσοδα από την εξόρυξη συνέβαλαν στην ανάπτυξη της πόλης της Θάσου, στην ανέγερση δημοσίων έργων και στην πολιτιστική άνθηση του νησιού.\n\nΑκόμη και σήμερα, το μάρμαρο της Θάσου θεωρείται ένα από τα καλύτερα λευκά μάρμαρα στον κόσμο. Η παράδοση της μαρμαροτεχνίας συνεχίζεται, ενώ τα αρχαία λατομεία αποτελούν σημαντικά ιστορικά και αρχαιολογικά μνημεία, υπενθυμίζοντας τη στενή σχέση της Θάσου με την τέχνη, την αρχιτεκτονική και τον πολιτισμό της αρχαιότητας.",
    descriptionEn: `The marble of Thasos is one of the most important natural and cultural treasures of antiquity and was directly connected with the development of Greek architecture, sculpture, and economy. Its fame extended far beyond the Aegean and spread throughout the Mediterranean, making Thasos one of the greatest marble extraction and trade centers of the ancient world.

The exploitation of the island's marble began as early as the Archaic period, around the 7th century BC, when the inhabitants of Thasos recognized the exceptional quality of the stone found in the island's mountains. The quarries developed mainly in coastal areas so that the enormous marble blocks could be transported more easily by sea. Particularly famous were the ancient quarries of Alyki, where the rocks descended almost directly into the sea, allowing ships to load the valuable material straight from the shore.

Thasian marble stood out for its dazzling white color, translucency, and purity of texture. In some cases, when light passed through thin pieces of the marble, it created a unique luminosity that made it especially beloved by ancient sculptors. Its fine-grained composition allowed artists to produce exceptionally delicate and realistic details in statues, faces, and folds of garments. For this reason, it was considered equal to the most renowned marbles of Greece, such as Pentelic and Parian marble.

The ancient Greeks used Thasian marble for the construction of important temples, monuments, and public buildings. Among the most notable works where it was used were the Temple of Zeus at Ancient Olympia and the Temple of Athena Nike on the Acropolis of Athens. It was also employed in votive monuments, altars, funerary steles, and numerous sculptures that adorned sanctuaries and public spaces.

During the Roman period, the value of Thasian marble increased even further. Roman emperors and aristocratic families regarded it as a symbol of wealth, power, and luxury. Vast quantities were exported from Thasos to Rome, Constantinople, Alexandria, and other great cities of the empire. It decorated palaces, baths, villas, temples, and public buildings, and was often used for wall and floor coverings.

The extraction process was extremely difficult and required great technical knowledge. Workers used iron tools, wedges, and levers to detach enormous blocks from the mountainside. The marble blocks were then transported on wooden sledges or rollers toward the ports. Even today, traces of cutting grooves, transport ramps, and unfinished extractions remain visible in the quarries, revealing the organization and technical expertise of ancient craftsmen.

Particularly important was the ancient quarry of Alyki, on the southeastern side of Thasos. There, marble was extracted continuously for many centuries and loaded directly onto ships. Today, visitors can still see the cut rocks inside the sea, the carved surfaces, and the marks left by ancient tools — a unique image testifying to the great flourishing of marble craftsmanship on the island.

The economic power of Thasos was based largely on the marble trade. This material became a source of wealth and international fame for the island, strengthening its commercial relations with the cities of the Aegean, Asia Minor, and later Rome. The profits from marble extraction contributed to the development of the city of Thasos, the construction of public works, and the cultural flourishing of the island.

Even today, Thasian marble is considered one of the finest white marbles in the world. The tradition of marble craftsmanship continues, while the ancient quarries remain important historical and archaeological monuments, reminding visitors of the close relationship between Thasos and the art, architecture, and civilization of antiquity.`,
    descriptionFr: `Le marbre de Thasos représente l'un des plus importants trésors naturels et culturels de l'Antiquité et fut directement lié au développement de l'architecture, de la sculpture et de l'économie grecques. Sa renommée dépassa largement les frontières de l'Égée et se répandit dans toute la Méditerranée, faisant de Thasos l'un des plus grands centres d'extraction et de commerce du marbre du monde antique.\n\nL'exploitation du marbre de l'île commença dès l'époque archaïque, vers le VIIe siècle av. J.-C., lorsque les habitants de Thasos découvrirent la qualité exceptionnelle de la pierre présente dans les montagnes de l'île. Les carrières se développèrent principalement dans les zones côtières afin de faciliter le transport maritime des énormes blocs de marbre. Les carrières antiques d'Alyki étaient particulièrement célèbres : les rochers y descendaient presque directement dans la mer, permettant aux navires de charger le précieux matériau depuis le rivage.\n\nLe marbre thasien se distinguait par sa blancheur éclatante, sa translucidité et la pureté de sa texture. Dans certains cas, lorsque la lumière traversait de fines plaques de marbre, elle créait une luminosité unique qui le rendait particulièrement apprécié des sculpteurs antiques. Sa structure à grain fin permettait de réaliser des détails extrêmement délicats et réalistes dans les statues, les visages et les plis des vêtements. C'est pourquoi il était considéré égal aux marbres les plus célèbres de Grèce, comme le marbre pentélique et le marbre de Paros.\n\nLes Grecs de l'Antiquité utilisèrent le marbre de Thasos pour construire d'importants temples, monuments et bâtiments publics. Parmi les œuvres les plus remarquables figurent le temple de Zeus à Olympie et le temple d'Athéna Nikè sur l'Acropole d'Athènes. Il servit également à la fabrication de monuments votifs, d'autels, de stèles funéraires et de nombreuses sculptures décorant sanctuaires et espaces publics.\n\nDurant l'époque romaine, la valeur du marbre thasien augmenta encore davantage. Les empereurs romains et les familles aristocratiques le considéraient comme un symbole de richesse, de puissance et de luxe. D'immenses quantités furent exportées de Thasos vers Rome, Constantinople, Alexandrie et d'autres grandes villes de l'Empire. Il décorait palais, thermes, villas, temples et bâtiments publics, et servait souvent au revêtement des murs et des sols.\n\nLe processus d'extraction était extrêmement difficile et nécessitait un grand savoir-faire technique. Les ouvriers utilisaient des outils de fer, des coins et des leviers pour détacher d'énormes blocs de la montagne. Les blocs de marbre étaient ensuite transportés sur des traîneaux en bois ou des rouleaux jusqu'aux ports. Aujourd'hui encore, on peut voir dans les carrières des traces de canaux de coupe, de rampes de transport et d'extractions inachevées révélant l'organisation et la maîtrise technique des artisans antiques.\n\nLa carrière antique d'Alyki, située dans le sud-est de Thasos, revêtait une importance particulière. Le marbre y fut extrait sans interruption pendant de nombreux siècles et chargé directement sur les navires. Les visiteurs peuvent encore y voir les rochers taillés dans la mer, les surfaces sculptées et les traces laissées par les outils antiques — une image unique témoignant de la grande prospérité de l'art du marbre sur l'île.\n\nLa puissance économique de Thasos reposait en grande partie sur le commerce du marbre. Ce matériau devint une source de richesse et de renommée internationale pour l'île, renforçant ses relations commerciales avec les cités de l'Égée, de l'Asie Mineure et plus tard de Rome. Les revenus tirés de l'extraction contribuèrent au développement de la ville de Thasos, à la construction de travaux publics et à l'épanouissement culturel de l'île.\n\nAujourd'hui encore, le marbre de Thasos est considéré comme l'un des meilleurs marbres blancs du monde. La tradition du travail du marbre se poursuit, tandis que les anciennes carrières demeurent d'importants monuments historiques et archéologiques rappelant le lien étroit entre Thasos, l'art, l'architecture et la civilisation de l'Antiquité.`,
    descriptionBg: `Мраморът на Thasos представлява едно от най-значимите природни и културни богатства на Античността и е бил пряко свързан с развитието на гръцката архитектура, скулптура и икономика. Славата му надхвърлила пределите на Егейско море и се разпространила из цялото Средиземноморие, превръщайки Тасос в един от най-големите центрове за добив и търговия с мрамор в древния свят.\n\nИзползването на мрамора на острова започнало още през архаичния период, около VII век пр. Хр., когато жителите на Тасос открили изключителното качество на камъка в планините на острова. Кариерите се развивали главно в крайбрежните райони, за да могат огромните мраморни блокове по-лесно да бъдат транспортирани по море. Особено известни били древните кариери в Алики, където скалите слизали почти директно към морето и позволявали на корабите да товарят ценния материал направо от брега.\n\nТасоският мрамор се отличавал със своя ослепително бял цвят, прозрачност и чистота на структурата. В някои случаи, когато светлината преминавала през тънки плочи мрамор, се създавала уникална светлина, която го правела особено ценен за древните скулптори. Финозърнестата му структура позволявала изработването на изключително деликатни и реалистични детайли в статуи, лица и гънки на дрехи. Поради това той се смятал за равен на най-прочутите мрамори на Гърция, като пентелийския и пароския мрамор.\n\nДревните гърци използвали тасоския мрамор за строежа на важни храмове, паметници и обществени сгради. Сред най-известните произведения са Храмът на Зевс в Олимпия и Храмът на Атина Нике на Акропола в Атина. Мраморът бил използван също за оброчни паметници, олтари, надгробни стели и множество скулптури, украсяващи светилища и обществени пространства.\n\nПо време на римския период стойността на тасоския мрамор нараснала още повече. Римските императори и аристократични семейства го смятали за символ на богатство, власт и лукс. Огромни количества били изнасяни от Тасос към Рим, Константинопол, Александрия и други големи градове на империята. С него били украсявани дворци, терми, вили, храмове и обществени сгради, а често се използвал и за облицовка на стени и подове.\n\nПроцесът на добив бил изключително труден и изисквал големи технически познания. Работниците използвали железни инструменти, клинове и лостове, за да отделят огромните блокове от планината. След това мраморните блокове били транспортирани върху дървени шейни или валяци до пристанищата. И днес в кариерите могат да се видят следи от разрези, транспортни рампи и недовършени изкопи, които разкриват организацията и техническото майсторство на древните занаятчии.\n\nОсобено важна била древната кариера в Алики, в югоизточната част на Тасос. Там мраморът се добивал непрекъснато в продължение на много векове и директно се товарел на кораби. Днес посетителите все още могат да видят изсечените скали в морето, обработените повърхности и следите от древните инструменти — уникална картина, свидетелстваща за големия разцвет на мраморното изкуство на острова.\n\nИкономическата мощ на Тасос до голяма степен се основавала на търговията с мрамор. Този материал се превърнал в източник на богатство и международна слава за острова, укрепвайки търговските му връзки с градовете на Егейско море, Мала Азия и по-късно Рим. Приходите от добива допринесли за развитието на град Тасос, строежа на обществени съоръжения и културния разцвет на острова.\n\nИ днес тасоският мрамор се смята за един от най-добрите бели мрамори в света. Традицията на мраморната обработка продължава, а древните кариери остават важни исторически и археологически паметници, напомнящи за тясната връзка на Тасос с изкуството, архитектурата и цивилизацията на Античността.`,
    descriptionTr: `Thasos mermeri, antik çağın en önemli doğal ve kültürel hazinelerinden biridir ve Yunan mimarisi, heykel sanatı ve ekonomisinin gelişimiyle doğrudan bağlantılıdır. Ünü Ege sınırlarını aşarak tüm Akdeniz'e yayılmış ve Thasos'u antik dünyanın en büyük mermer çıkarma ve ticaret merkezlerinden biri haline getirmiştir.

Adadaki mermerin kullanımı Arkaik dönemde, yaklaşık MÖ 7. yüzyılda başlamıştır. Thasos halkı, adanın dağlarında bulunan taşın olağanüstü kalitesini fark etmişti. Taş ocakları özellikle kıyı bölgelerinde gelişti; böylece dev mermer blokları deniz yoluyla daha kolay taşınabiliyordu. Özellikle Alyki antik taş ocakları ünlüydü; burada kayalar neredeyse doğrudan denize uzanıyor ve gemiler değerli malzemeyi kıyıdan yükleyebiliyordu.

Thasos mermeri parlak beyaz rengi, yarı saydamlığı ve saf dokusuyla dikkat çekiyordu. Bazı durumlarda ışık ince mermer parçalarından geçtiğinde benzersiz bir parlaklık oluşuyor ve bu özellik onu antik heykeltıraşlar için son derece değerli kılıyordu. İnce taneli yapısı, heykellerde, yüzlerde ve giysi kıvrımlarında son derece hassas ve gerçekçi ayrıntılar yapılmasına olanak tanıyordu. Bu nedenle Pentelikon ve Paros mermeri gibi Yunanistan'ın en ünlü mermerleriyle eşdeğer kabul edilirdi.

Antik Yunanlılar Thasos mermerini önemli tapınaklar, anıtlar ve kamu binaları inşa etmek için kullandılar. En dikkat çekici yapılardan bazıları Olympia'daki Zeus Tapınağı ve Atina Akropolü'ndeki Athena Nike Tapınağı'dır. Ayrıca adak anıtları, sunaklar, mezar stelleri ve kutsal alanlarla kamusal alanları süsleyen çok sayıda heykelde de kullanılmıştır.

Roma döneminde Thasos mermerinin değeri daha da arttı. Roma imparatorları ve aristokrat aileler onu zenginlik, güç ve lüksün simgesi olarak görüyordu. Büyük miktarlarda mermer Thasos'tan Roma, Konstantinopolis, İskenderiye ve imparatorluğun diğer büyük şehirlerine ihraç edildi. Saraylar, hamamlar, villalar, tapınaklar ve kamu yapıları bu mermerle süslendi; ayrıca duvar ve zemin kaplamalarında da sıkça kullanıldı.

Mermer çıkarma süreci son derece zordu ve büyük teknik bilgi gerektiriyordu. İşçiler demir aletler, kamalar ve kaldıraçlar kullanarak dev blokları dağdan ayırıyordu. Daha sonra bu bloklar ahşap kızaklar veya silindirlerle limanlara taşınıyordu. Bugün bile taş ocaklarında kesim izleri, taşıma rampaları ve tamamlanmamış çıkarma alanları görülebilir; bunlar antik ustaların organizasyonunu ve teknik becerisini ortaya koymaktadır.

Özellikle Thasos'un güneydoğusunda bulunan Alyki antik taş ocağı büyük önem taşıyordu. Burada mermer yüzyıllar boyunca kesintisiz şekilde çıkarılmış ve doğrudan gemilere yüklenmiştir. Günümüzde ziyaretçiler deniz içindeki kesilmiş kayaları, işlenmiş yüzeyleri ve antik aletlerin bıraktığı izleri hâlâ görebilirler — bu, adadaki mermer işçiliğinin büyük gelişimini gösteren eşsiz bir görüntüdür.

Thasos'un ekonomik gücü büyük ölçüde mermer ticaretine dayanıyordu. Bu malzeme ada için zenginlik ve uluslararası ün kaynağı olmuş, Ege şehirleri, Küçük Asya ve daha sonra Roma ile ticari ilişkileri güçlendirmiştir. Mermer çıkarımından elde edilen gelirler Thasos kentinin gelişimine, kamu yapılarının inşasına ve adanın kültürel yükselişine katkı sağlamıştır.

Bugün bile Thasos mermeri dünyanın en kaliteli beyaz mermerlerinden biri kabul edilir. Mermer işçiliği geleneği devam ederken, antik taş ocakları Thasos'un sanat, mimari ve antik uygarlıkla olan yakın bağını hatırlatan önemli tarihi ve arkeolojik anıtlar olarak varlığını sürdürmektedir.`,
    descriptionRo: `Marmura din Thasos reprezintă una dintre cele mai importante comori naturale și culturale ale antichității și a fost direct legată de dezvoltarea arhitecturii, sculpturii și economiei grecești. Faima sa a depășit granițele Mării Egee și s-a răspândit în întreaga Mediterană, transformând Thasos într-unul dintre cele mai mari centre de extracție și comerț cu marmură ale lumii antice.

Exploatarea marmurei insulei a început încă din perioada arhaică, în jurul secolului al VII-lea î.Hr., când locuitorii din Thasos au descoperit calitatea excepțională a pietrei din munții insulei. Carierele s-au dezvoltat în special în zonele de coastă, pentru ca transportul uriașelor blocuri de marmură să poată fi realizat mai ușor pe mare. Deosebit de cunoscute erau carierele antice din Alyki, unde stâncile coborau aproape direct în mare, permițând navelor să încarce materialul prețios direct de pe țărm.

Marmura thasiană se remarca prin culoarea sa albă strălucitoare, transparența și puritatea texturii. În anumite cazuri, când lumina trecea prin bucăți subțiri de marmură, se crea o luminozitate unică, caracteristică ce o făcea foarte apreciată de sculptorii antici. Structura sa fină permitea realizarea unor detalii extrem de delicate și realiste în statui, chipuri și faldurile veșmintelor. Din acest motiv era considerată egală cu cele mai renumite marmuri ale Greciei, precum marmura pentelică și cea din Paros.

Grecii antici au folosit marmura din Thasos pentru construirea unor temple, monumente și clădiri publice importante. Printre cele mai renumite opere se numără Templul lui Zeus din Olympia și Templul Atenei Nike de pe Acropola Atenei. Marmura era folosită și pentru monumente votive, altare, stele funerare și numeroase sculpturi care împodobeau sanctuare și spații publice.

În perioada romană, valoarea marmurei thasiene a crescut și mai mult. Împărații romani și familiile aristocratice o considerau un simbol al bogăției, puterii și luxului. Cantități uriașe erau exportate din Thasos către Roma, Constantinopol, Alexandria și alte mari orașe ale imperiului. Cu ea erau decorate palate, băi publice, vile, temple și clădiri publice, fiind folosită adesea și pentru placarea pereților și podelelor.

Procesul de extracție era extrem de dificil și necesita mari cunoștințe tehnice. Muncitorii foloseau unelte de fier, pene și pârghii pentru a desprinde blocurile uriașe din munte. Apoi blocurile de marmură erau transportate pe sănii de lemn sau role către porturi. În cariere se păstrează și astăzi urme ale șanțurilor de tăiere, rampelor de transport și exploatărilor neterminate, dezvăluind organizarea și măiestria tehnică a meșteșugarilor antici.

Deosebit de importantă era cariera antică din Alyki, aflată în sud-estul insulei Thasos. Acolo marmura era extrasă neîntrerupt timp de multe secole și încărcată direct pe nave. Astăzi, vizitatorii pot vedea în mare stâncile tăiate, suprafețele sculptate și urmele uneltelor antice — o imagine unică ce mărturisește înflorirea artei prelucrării marmurei pe insulă.

Puterea economică a Thasosului s-a bazat în mare măsură pe comerțul cu marmură. Acest material a devenit o sursă de bogăție și faimă internațională pentru insulă, consolidând relațiile comerciale cu orașele din Marea Egee, Asia Mică și mai târziu Roma. Veniturile obținute din extracția marmurei au contribuit la dezvoltarea orașului Thasos, la construirea lucrărilor publice și la înflorirea culturală a insulei.

Și astăzi, marmura din Thasos este considerată una dintre cele mai bune marmuri albe din lume. Tradiția prelucrării marmurei continuă, iar carierele antice rămân importante monumente istorice și arheologice, amintind de legătura strânsă dintre Thasos și arta, arhitectura și civilizația antichității.`,
    descriptionSr: `Mermer sa Thasos predstavlja jedno od najvažnijih prirodnih i kulturnih bogatstava antike i bio je direktno povezan sa razvojem grčke arhitekture, skulpture i ekonomije. Njegova slava proširila se daleko izvan Egeja širom Mediterana, pretvarajući Tasos u jedan od najvećih centara eksploatacije i trgovine mermerom u antičkom svetu.

Eksploatacija mermera na ostrvu započela je još tokom arhajskog perioda, oko 7. veka pre nove ere, kada su stanovnici Tasosa prepoznali izuzetan kvalitet kamena u planinama ostrva. Kamenolomi su se razvijali uglavnom uz obalu kako bi ogromni blokovi mermera mogli lakše da se transportuju morem. Posebno su bili poznati antički kamenolomi u Alikiju, gde su se stene gotovo direktno spuštale u more, omogućavajući brodovima da ukrcavaju dragoceni materijal pravo sa obale.

Tasoski mermer izdvajao se svojom blistavo belom bojom, providnošću i čistoćom teksture. U pojedinim slučajevima, kada bi svetlost prolazila kroz tanke slojeve mermera, stvarala se jedinstvena svetlost koja ga je činila naročito omiljenim među antičkim vajarima. Njegova fina struktura omogućavala je izradu izuzetno delikatnih i realističnih detalja na statuama, licima i naborima odeće. Zbog toga je smatran ravnopravnim najpoznatijim mermerima Grčke, poput penteličkog i parskog mermera.

Stari Grci koristili su tasoski mermer za izgradnju važnih hramova, spomenika i javnih zgrada. Među najpoznatijim delima nalaze se Zevsov hram u Olimpiji i Hram Atene Nike na atinskom Akropolju. Takođe je korišćen za zavetne spomenike, oltare, nadgrobne stele i brojne skulpture koje su ukrašavale svetilišta i javne prostore.

Tokom rimskog perioda vrednost tasoskog mermera dodatno je porasla. Rimski carevi i aristokratske porodice smatrali su ga simbolom bogatstva, moći i luksuza. Ogromne količine izvožene su iz Tasosa u Rim, Konstantinopolj, Aleksandriju i druge velike gradove carstva. Njime su ukrašavane palate, terme, vile, hramovi i javne građevine, a često je korišćen i za oblaganje zidova i podova.

Proces eksploatacije bio je izuzetno težak i zahtevao je veliko tehničko znanje. Radnici su koristili gvozdene alate, klinove i poluge kako bi odvojili ogromne blokove od planine. Blokovi mermera zatim su transportovani drvenim saonicama ili valjcima do luka. I danas su u kamenolomima vidljivi tragovi useka, transportnih rampi i nedovršenih iskopavanja koji otkrivaju organizaciju i tehničku umešnost antičkih zanatlija.

Posebno značajan bio je antički kamenolom Aliki na jugoistočnoj strani Tasosa. Tamo se mermer vadio neprekidno tokom mnogih vekova i direktno utovarivao na brodove. Posetioci danas još mogu videti isečene stene u moru, obrađene površine i tragove antičkih alata — jedinstvenu sliku koja svedoči o velikom procvatu mermerne umetnosti na ostrvu.

Ekonomska moć Tasosa u velikoj meri zasnivala se na trgovini mermerom. Ovaj materijal postao je izvor bogatstva i međunarodne slave ostrva, jačajući trgovačke veze sa gradovima Egeja, Male Azije i kasnije Rima. Prihodi od eksploatacije mermera doprineli su razvoju grada Tasosa, izgradnji javnih radova i kulturnom procvatu ostrva.

I danas se tasoski mermer smatra jednim od najboljih belih mermera na svetu. Tradicija obrade mermera nastavlja se i dalje, dok antički kamenolomi ostaju važni istorijski i arheološki spomenici koji podsećaju na blisku povezanost Tasosa sa umetnošću, arhitekturom i civilizacijom antike.`,
    descriptionIt: `Il marmo di Thasos rappresenta uno dei più importanti tesori naturali e culturali dell'antichità ed è stato strettamente legato allo sviluppo dell'architettura, della scultura e dell'economia greca. La sua fama superò i confini dell'Egeo e si diffuse in tutto il Mediterraneo, facendo di Thasos uno dei più grandi centri di estrazione e commercio del marmo del mondo antico.

Lo sfruttamento del marmo dell'isola iniziò già in epoca arcaica, intorno al VII secolo a.C., quando gli abitanti di Thasos riconobbero l'eccezionale qualità della pietra presente nelle montagne dell'isola. Le cave si svilupparono soprattutto lungo le coste, così da facilitare il trasporto via mare degli enormi blocchi di marmo. Particolarmente famose erano le antiche cave di Alyki, dove le rocce scendevano quasi direttamente nel mare, permettendo alle navi di caricare il prezioso materiale direttamente dalla riva.

Il marmo di Thasos si distingueva per il suo bianco abbagliante, la trasparenza e la purezza della sua texture. In alcuni casi, quando la luce attraversava sottili lastre di marmo, si creava una luminosità unica che lo rendeva particolarmente amato dagli scultori dell'antichità. La sua struttura a grana fine permetteva di realizzare dettagli estremamente delicati e realistici in statue, volti e pieghe degli abiti. Per questo motivo era considerato pari ai più celebri marmi della Grecia, come il marmo pentelico e quello pario.

Gli antichi Greci utilizzarono il marmo di Thasos per costruire importanti templi, monumenti ed edifici pubblici. Tra le opere più famose figurano il Tempio di Zeus a Olimpia e il Tempio di Atena Nike sull'Acropoli di Atene. Il marmo veniva inoltre utilizzato per monumenti votivi, altari, stele funerarie e numerose sculture che decoravano santuari e spazi pubblici.

Durante il periodo romano, il valore del marmo di Thasos aumentò ulteriormente. Gli imperatori romani e le famiglie aristocratiche lo consideravano un simbolo di ricchezza, potere e lusso. Enormi quantità venivano esportate da Thasos verso Roma, Costantinopoli, Alessandria e altre grandi città dell'impero. Con questo marmo venivano decorati palazzi, terme, ville, templi ed edifici pubblici, e spesso veniva usato anche per rivestimenti di pareti e pavimenti.

Il processo di estrazione era estremamente difficile e richiedeva grandi conoscenze tecniche. Gli operai utilizzavano strumenti di ferro, cunei e leve per staccare gli enormi blocchi dalla montagna. I blocchi di marmo venivano poi trasportati su slitte di legno o rulli verso i porti. Ancora oggi nelle cave sono visibili tracce di canali di taglio, rampe di trasporto ed estrazioni incompiute, elementi che rivelano l'organizzazione e la maestria tecnica degli artigiani antichi.

Di particolare importanza era l'antica cava di Alyki, nella parte sud-orientale di Thasos. Qui il marmo veniva estratto ininterrottamente per molti secoli e caricato direttamente sulle navi. Oggi i visitatori possono ancora vedere nel mare le rocce tagliate, le superfici scolpite e i segni lasciati dagli utensili antichi — un'immagine unica che testimonia il grande splendore dell'antica lavorazione del marmo sull'isola.

La potenza economica di Thasos si basava in larga misura sul commercio del marmo. Questo materiale divenne fonte di ricchezza e fama internazionale per l'isola, rafforzando i suoi rapporti commerciali con le città dell'Egeo, dell'Asia Minore e successivamente di Roma. I profitti derivanti dall'estrazione contribuirono allo sviluppo della città di Thasos, alla costruzione di opere pubbliche e alla fioritura culturale dell'isola.

Ancora oggi il marmo di Thasos è considerato uno dei migliori marmi bianchi del mondo. La tradizione della lavorazione del marmo continua, mentre le antiche cave rimangono importanti monumenti storici e archeologici, ricordando il profondo legame di Thasos con l'arte, l'architettura e la civiltà dell'antichità.`,
    descriptionDe: `Der Marmor von Thasos gehört zu den bedeutendsten natürlichen und kulturellen Schätzen der Antike und war eng mit der Entwicklung der griechischen Architektur, Bildhauerei und Wirtschaft verbunden. Sein Ruhm überschritt die Grenzen der Ägäis und verbreitete sich im gesamten Mittelmeerraum, wodurch Thasos zu einem der größten Zentren für Marmorabbau und Marmorhandel der antiken Welt wurde.

Die Nutzung der Marmorlagerstätten begann bereits in archaischer Zeit, etwa im 7. Jahrhundert v. Chr., als die Bewohner von Thasos die außergewöhnliche Qualität des Gesteins in den Bergen der Insel erkannten. Die Steinbrüche entwickelten sich hauptsächlich in Küstenregionen, damit die riesigen Marmorblöcke leichter über das Meer transportiert werden konnten. Besonders bekannt waren die antiken Steinbrüche von Alyki, wo die Felsen fast direkt ins Meer hinabführten und Schiffe das wertvolle Material unmittelbar verladen konnten.

Der thasische Marmor zeichnete sich durch seine strahlend weiße Farbe, seine Transparenz und die Reinheit seiner Struktur aus. In manchen Fällen erzeugte das Licht, das durch dünne Marmorschichten fiel, eine einzigartige Leuchtkraft, die ihn bei antiken Bildhauern besonders beliebt machte. Seine feinkörnige Struktur ermöglichte äußerst präzise und realistische Details bei Statuen, Gesichtern und Gewandfalten. Deshalb galt er als ebenbürtig mit den berühmtesten Marmorsorten Griechenlands, wie dem pentelischen und dem parischen Marmor.

Die alten Griechen verwendeten den Marmor von Thasos für den Bau bedeutender Tempel, Monumente und öffentlicher Gebäude. Zu den wichtigsten Bauwerken gehören der Zeustempel in Olympia sowie der Tempel der Athena Nike auf der Akropolis von Athen. Außerdem wurde er für Weihdenkmäler, Altäre, Grabstelen und zahlreiche Skulpturen verwendet, die Heiligtümer und öffentliche Plätze schmückten.

Während der römischen Zeit stieg der Wert des thasischen Marmors noch weiter an. Römische Kaiser und aristokratische Familien betrachteten ihn als Symbol von Reichtum, Macht und Luxus. Riesige Mengen wurden von Thasos nach Rom, Konstantinopel, Alexandria und in andere große Städte des Reiches exportiert. Mit diesem Marmor schmückte man Paläste, Thermen, Villen, Tempel und öffentliche Gebäude; häufig wurde er auch für Wand- und Bodenverkleidungen genutzt.

Der Abbauprozess war äußerst schwierig und erforderte großes technisches Wissen. Die Arbeiter verwendeten Eisenwerkzeuge, Keile und Hebel, um die riesigen Blöcke aus dem Berg zu lösen. Anschließend wurden die Marmorblöcke auf Holzschlitten oder Rollen zu den Häfen transportiert. Noch heute sind in den Steinbrüchen Spuren von Schnittkanälen, Transportrampen und unvollendeten Abbaustellen sichtbar, die die Organisation und das technische Können der antiken Handwerker offenbaren.

Von besonderer Bedeutung war der antike Steinbruch von Alyki im Südosten von Thasos. Dort wurde über viele Jahrhunderte hinweg ununterbrochen Marmor gewonnen und direkt auf Schiffe verladen. Besucher können heute im Meer die abgeschnittenen Felsen, die bearbeiteten Oberflächen und die Werkzeugspuren sehen – ein einzigartiges Bild, das von der großen Blüte der antiken Marmorkunst auf der Insel zeugt.

Die wirtschaftliche Macht von Thasos beruhte zu einem großen Teil auf dem Handel mit Marmor. Dieses Material wurde zu einer Quelle von Reichtum und internationalem Ruhm für die Insel und stärkte ihre Handelsbeziehungen zu den Städten der Ägäis, Kleinasiens und später Roms. Die Einnahmen aus dem Marmorabbau trugen zur Entwicklung der Stadt Thasos, zum Bau öffentlicher Werke und zur kulturellen Blüte der Insel bei.

Auch heute gilt der Marmor von Thasos als einer der besten weißen Marmore der Welt. Die Tradition der Marmorkunst lebt weiter, während die antiken Steinbrüche bedeutende historische und archäologische Denkmäler geblieben sind, die an die enge Verbindung von Thasos mit Kunst, Architektur und der Kultur der Antike erinnern.`,
    mapX: 78, mapY: 32,    mapsUrl: "https://maps.app.goo.gl/5HEUbFtvNRKHm5qs5",
  },
  {
    id: 6, num: "06",
    title: "Πύργος-Πύλη Σωτά", titleEn: "Tower-Gate of Sotas",
    titleFr: "La Tour–Porte de Sotas",
    titleBg: "Кулата–Порта на Сотас",
    titleTr: "Sotas'ın Kule–Kapısı",
    titleRo: "Turnul–Poartă al lui Sotas",
    titleSr: "Kula–Kapija Sotasa",
    titleIt: "La Torre–Porta di Sotas",
    titleDe: "Der Turm–Torbau des Sotas",
    category: "Πύργος", categoryEn: "Tower",
    categoryTr: "Kule",
    categoryFr: "Tour",
    categoryBg: "Кула",
    categoryRo: "Turn",
    categorySr: "Kula",
    categoryIt: "Torre",
    categoryDe: "Turm",
    duration: "7 λεπτά", durationSec: 420,
    imageId: IMGS[11],
    description: "Ο Πύργος – Πύλη του Σωτά αποτελούσε ένα από τα πιο εντυπωσιακά και ιδιαίτερα αμυντικά έργα της αρχαίας Θάσος.\n\nΣτη μακέτα βλέπουμε ένα μοναδικό οικοδόμημα που λειτουργούσε ταυτόχρονα ως πύργος και ως πύλη εισόδου της πόλης. Το μνημείο είναι γνωστό ως «Πύργος – Πύλη του Σωτά».\n\nΟ Σωτάς ήταν πλούσιος άρχοντας της Θάσου, γιος του Ευπόρου, και χρηματοδότησε ο ίδιος την κατασκευή του πύργου κατά τον 2ο αιώνα π.Χ., προσφέροντας ένα σπουδαίο αμυντικό έργο στην πόλη. Η ύπαρξη τέτοιων ιδιωτικών χορηγιών αποδεικνύει τον πλούτο αλλά και τη μεγάλη κοινωνική επιρροή ορισμένων Θασίων πολιτών κατά την ελληνιστική εποχή.\n\nΟ πύργος βρισκόταν στα βορειοδυτικά της αρχαίας πόλης της Θάσου, κοντά στη σημερινή οδό Δημητριάδη, στον δρόμο που οδηγεί προς τον Πρίνο. Τα θεμέλιά του αποτυπώθηκαν το 1913 από τον αρχαιολόγο S. Risom, ύστερα από τις ανασκαφές των C. Fredrich και J. Baker-Penoyre.\n\nΤο οικοδόμημα είχε στο κέντρο έναν τετραγωνισμένο χώρο διαστάσεων 4,95 x 4,92 μέτρων. Στο μέσο υπήρχε βωμός, στοιχείο που δείχνει ότι ο χώρος δεν είχε μόνο στρατιωτική αλλά πιθανώς και θρησκευτική σημασία. Ο πύργος διέθετε δύο πύλες: μία νοτιοανατολική, που αποτελούσε την κύρια έξοδο από την πόλη, και μία βόρεια, που οδηγούσε προς το λιμάνι και τη θάλασσα.\n\nΟ δρόμος από τη βόρεια πύλη συνέχιζε περίπου 100 μέτρα μέχρι να συναντήσει την Πύλη του Ιχθύος, ενώ το τείχος προς τα βορειοανατολικά συνέδεε τον πύργο με την Πύλη του Διός και της Ήρας. Έτσι ο Πύργος του Σωτά αποτελούσε βασικό σημείο ελέγχου και επικοινωνίας του βόρειου τμήματος των τειχών της πόλης.\n\nΙδιαίτερο χαρακτηριστικό του μνημείου ήταν η εσωτερική ημικυκλική κατασκευή. Απέναντι από την εσωτερική πύλη της πόλης υπήρχε ένας ημικυκλικός τοίχος, ο οποίος ξεκινούσε από τα θεμέλια και έφθανε μέχρι τον τρίτο όροφο, όπου συνδεόταν με το ύψος των τειχών. Η παράξενη αυτή αρχιτεκτονική μορφή δημιουργήθηκε επειδή στη δυτική πλευρά υπήρχε ένας τεράστιος φυσικός βράχος, που δεν επέτρεπε την κατασκευή ευθύγραμμου τοίχου.\n\nΟ πύργος είχε συνολικά τέσσερις ορόφους. Ο πρώτος και ο δεύτερος ήταν απομονωμένοι από τους επάνω ορόφους, πιθανόν για λόγους ασφάλειας. Ο τρίτος όροφος, σε ύψος περίπου 8 μέτρων, επικοινωνούσε άμεσα με τα τείχη της πόλης, ενώ ο τέταρτος όροφος με τη σκεπή λειτουργούσε ως παρατηρητήριο και πολεμική ταράτσα.\n\nΗ αρχιτεκτονική του πύργου είχε σχεδιαστεί ως παγίδα για τους εισβολείς. Όταν οι εχθροί περνούσαν από την εξωτερική πύλη, εγκλωβίζονταν στον κεντρικό τετράγωνο χώρο. Οι Θάσιοι έκλειναν τότε την εσωτερική πύλη και οι πολεμιστές, από τα ανοίγματα του τρίτου ορόφου, εκτόξευαν βέλη και σαΐτες ή έριχναν καυτό λάδι και άλλα αντικείμενα πάνω στους παγιδευμένους επιτιθέμενους. Με αυτόν τον τρόπο οι εισβολείς εξοντώνονταν ή αναγκάζονταν να υποχωρήσουν.\n\nΟ Πύργος – Πύλη του Σωτά αποτελεί ένα εξαιρετικό παράδειγμα της στρατιωτικής αρχιτεκτονικής της ελληνιστικής εποχής και αποδεικνύει τη μεγάλη σημασία που είχε η οχύρωση της αρχαίας Θάσου για την προστασία του λιμανιού και της πόλης.",
    descriptionEn: `The Tower–Gate of Sotas was one of the most impressive and distinctive defensive structures of ancient Thasos.

In the model, we see a unique structure that functioned both as a tower and as an entrance gate to the city. The monument is known as the "Tower–Gate of Sotas."

Sotas was a wealthy nobleman of Thasos, son of Euporos, and he personally financed the construction of the tower during the 2nd century BC, offering the city an important defensive work. The existence of such private sponsorships demonstrates both the wealth and the great social influence of certain Thasian citizens during the Hellenistic period.

The tower stood in the northwestern part of the ancient city of Thasos, near today's Dimitriadi Street, on the road leading toward Prinos. Its foundations were documented in 1913 by the archaeologist S. Risom after the excavations of C. Fredrich and J. Baker-Penoyre.

At the center of the structure was a square chamber measuring 4.95 × 4.92 meters. In the middle stood an altar, indicating that the site may have held not only military but also religious significance.

The tower had two gates:

a southeastern gate, which served as the main exit from the city,
and a northern gate, leading toward the harbor and the sea.

The road from the northern gate continued for approximately 100 meters until it reached the Fish Gate, while the wall extending northeast connected the tower with the Gate of Zeus and Hera. In this way, the Tower of Sotas served as a key control and communication point for the northern section of the city walls.

A distinctive feature of the monument was its internal semicircular structure. Opposite the city's inner gate stood a semicircular wall that rose from the foundations to the third floor, where it connected with the height of the fortification walls. This unusual architectural form was created because a massive natural rock existed on the western side, preventing the construction of a straight wall.

The tower had four floors in total. The first and second floors were isolated from the upper levels, probably for security reasons. The third floor, at a height of about 8 meters, communicated directly with the city walls, while the fourth floor and roof functioned as an observation point and combat platform.

The architecture of the tower was designed as a trap for invaders. When enemies passed through the outer gate, they became trapped in the central square chamber. The Thasians would then close the inner gate, while warriors positioned on the openings of the third floor fired arrows and darts or poured boiling oil and other objects onto the trapped attackers. In this way, the invaders were either destroyed or forced to retreat.

The Tower–Gate of Sotas is an exceptional example of Hellenistic military architecture and demonstrates the great importance that the fortification of ancient Thasos held for the protection of the harbor and the city itself.`,
    descriptionFr: `La Tour–Porte de Sotas constituait l'une des structures défensives les plus impressionnantes et les plus particulières de l'antique Thasos.\n\nSur la maquette, nous voyons une construction unique qui servait à la fois de tour et de porte d'entrée de la ville. Le monument est connu sous le nom de « Tour–Porte de Sotas ».\n\nSotas était un riche noble de Thasos, fils d'Euporos, et il finança personnellement la construction de la tour au IIe siècle av. J.-C., offrant ainsi à la ville une importante œuvre défensive. L'existence de telles donations privées montre à la fois la richesse et la grande influence sociale de certains citoyens de Thasos durant la période hellénistique.\n\nLa tour se situait dans la partie nord-ouest de la ville antique de Thasos, près de l'actuelle rue Dimitriadi sur la route menant à Prinos. Ses fondations furent documentées en 1913 par l'archéologue S. Risom après les fouilles de C. Fredrich et J. Baker-Penoyre.\n\nAu centre de la structure se trouvait une salle carrée de 4,95 × 4,92 mètres. Au milieu se dressait un autel, ce qui indique que le lieu pouvait avoir non seulement une fonction militaire, mais aussi religieuse.\n\nLa tour possédait deux portes :\n\nune porte sud-est servant de sortie principale de la ville,\net une porte nord menant vers le port et la mer.\n\nLa route partant de la porte nord continuait sur environ 100 mètres jusqu'à la Porte du Poisson, tandis que le mur vers le nord-est reliait la tour à la Porte de Zeus et d'Héra. Ainsi, la Tour de Sotas constituait un important point de contrôle et de communication du secteur nord des remparts de la ville.\n\nUne caractéristique particulière du monument était sa structure intérieure semi-circulaire. En face de la porte intérieure de la ville se trouvait un mur semi-circulaire s'élevant depuis les fondations jusqu'au troisième étage, où il rejoignait la hauteur des murailles. Cette forme architecturale inhabituelle fut créée parce qu'un énorme rocher naturel empêchait la construction d'un mur droit du côté ouest.\n\nLa tour comportait quatre étages au total. Les premier et deuxième étages étaient isolés des niveaux supérieurs, probablement pour des raisons de sécurité. Le troisième étage, situé à environ huit mètres de hauteur, communiquait directement avec les murailles de la ville, tandis que le quatrième étage et le toit servaient de poste d'observation et de plateforme de combat.\n\nL'architecture de la tour avait été conçue comme un piège pour les envahisseurs. Lorsque les ennemis franchissaient la porte extérieure, ils se retrouvaient enfermés dans la salle carrée centrale. Les habitants de Thasos fermaient alors la porte intérieure tandis que les guerriers, depuis les ouvertures du troisième étage, tiraient des flèches et des javelots ou déversaient de l'huile bouillante et d'autres objets sur les assaillants piégés. Ainsi, les envahisseurs étaient détruits ou contraints à la retraite.\n\nLa Tour–Porte de Sotas constitue un remarquable exemple d'architecture militaire hellénistique et démontre l'importance majeure que les fortifications de l'antique Thasos avaient pour la protection du port et de la ville elle-même.`,
    descriptionBg: `Кулата–Порта на Сотас е представлявала едно от най-впечатляващите и необичайни отбранителни съоръжения на древния Thasos.\n\nНа макета виждаме уникална постройка, която е служела едновременно като кула и като градска порта. Паметникът е известен като „Кулата–Порта на Сотас".\n\nСотас бил богат благородник от Тасос, син на Евпорос, и лично финансирал строежа на кулата през II век пр. Хр., подарявайки на града важно отбранително съоръжение. Съществуването на подобни частни дарения показва както богатството, така и голямото обществено влияние на някои граждани на Тасос през елинистическия период.\n\nКулата се намирала в северозападната част на древния град Тасос, близо до днешната улица Димитриади по пътя към Принос. Основите ѝ били документирани през 1913 г. от археолога С. Рисом след разкопките на К. Фредрих и Дж. Бейкър-Пенойр.\n\nВ центъра на съоръжението имало квадратна зала с размери 4,95 × 4,92 метра. В средата се намирал олтар, което показва, че мястото вероятно е имало не само военна, но и религиозна функция.\n\nКулата имала две порти:\n\nюгоизточна порта, която служела като главен изход на града,\nи северна порта, водеща към пристанището и морето.\n\nПътят от северната порта продължавал около 100 метра до Рибната порта, а стената на североизток свързвала кулата с Портата на Зевс и Хера. По този начин Кулата на Сотас представлявала важен контролен и комуникационен пункт на северния участък от градските стени.\n\nОсобена характеристика на паметника била вътрешната му полукръгла конструкция. Срещу вътрешната градска порта се издигала полукръгла стена, която започвала от основите и достигала до третия етаж, където се свързвала с височината на крепостните стени. Тази необичайна архитектурна форма била създадена, защото от западната страна имало огромна естествена скала, която не позволявала изграждането на права стена.\n\nКулата имала общо четири етажа. Първият и вторият били отделени от горните нива, вероятно по съображения за сигурност. Третият етаж, разположен на около осем метра височина, бил пряко свързан с градските стени, докато четвъртият етаж и покривът служели като наблюдателен пункт и бойна площадка.\n\nАрхитектурата на кулата била замислена като капан за нашествениците. Когато враговете преминели през външната порта, те попадали в централното квадратно помещение. Тасосците затваряли вътрешната порта, а воините от отворите на третия етаж изстрелвали стрели и копия или изливали вряло масло и други предмети върху нападателите. По този начин нашествениците били унищожавани или принуждавани да се оттеглят.\n\nКулата–Порта на Сотас представлява изключителен пример за елинистическа военна архитектура и показва огромното значение, което укрепленията на древния Тасос имали за защитата на пристанището и самия град.`,
    descriptionTr: `Sotas'ın Kule–Kapısı, antik Thasos'un en etkileyici ve en özgün savunma yapılarından biriydi.

Maket üzerinde hem kule hem de şehir kapısı olarak işlev gören benzersiz bir yapı görüyoruz. Bu anıt "Sotas'ın Kule–Kapısı" olarak bilinmektedir.

Sotas, Euporos'un oğlu olan zengin bir Thasos soylusuydu ve MÖ 2. yüzyılda kulenin inşasını kendi servetiyle finanse ederek şehre önemli bir savunma yapısı kazandırdı. Bu tür özel bağışlar, Helenistik dönemde bazı Thasos vatandaşlarının hem zenginliğini hem de toplumsal etkisini göstermektedir.

Kule, antik Thasos kentinin kuzeybatısında, günümüzdeki Dimitriadi Caddesi yakınında, Prinos'a giden yol üzerinde bulunuyordu. Temelleri, C. Fredrich ve J. Baker-Penoyre'nin kazılarından sonra 1913 yılında arkeolog S. Risom tarafından belgelenmiştir.

Yapının merkezinde 4,95 × 4,92 metre ölçülerinde kare bir oda bulunuyordu. Ortasında yer alan sunak, yapının yalnızca askeri değil aynı zamanda dini bir işlev de taşıyabileceğini göstermektedir.

Kulenin iki kapısı vardı:

şehirden ana çıkış olarak kullanılan güneydoğu kapısı,
ve limana ile denize açılan kuzey kapısı.

Kuzey kapısından çıkan yol yaklaşık 100 metre devam ederek Balık Kapısı'na ulaşıyordu; kuzeydoğu yönündeki sur ise kuleyi Zeus ve Hera Kapısı'na bağlıyordu. Böylece Sotas'ın Kulesi, şehir surlarının kuzey bölümünde önemli bir kontrol ve iletişim noktası işlevi görüyordu.

Anıtın en dikkat çekici özelliği iç yarım daire biçimli yapısıydı. Şehrin iç kapısının karşısında, temellerden üçüncü kata kadar yükselen ve burada surların yüksekliğiyle birleşen yarım daire biçimli bir duvar bulunuyordu. Bu sıra dışı mimari biçim, batı tarafında düz bir duvar inşasını engelleyen dev doğal kayanın varlığı nedeniyle oluşturulmuştu.

Kule toplam dört katlıydı. Birinci ve ikinci katlar güvenlik amacıyla üst katlardan ayrılmıştı. Yaklaşık sekiz metre yükseklikteki üçüncü kat doğrudan şehir surlarıyla bağlantılıydı; dördüncü kat ve çatı ise gözlem noktası ve savaş platformu olarak kullanılıyordu.

Kulenin mimarisi istilacılar için bir tuzak olarak tasarlanmıştı. Düşmanlar dış kapıdan içeri girdiklerinde merkezi kare odada sıkışıp kalıyorlardı. Thasoslular daha sonra iç kapıyı kapatıyor ve üçüncü kattaki açıklıklardan oklar ve mızraklar fırlatıyor ya da kaynar yağ ve başka nesneleri saldırganların üzerine döküyorlardı. Böylece istilacılar ya yok ediliyor ya da geri çekilmek zorunda bırakılıyordu.

Sotas'ın Kule–Kapısı, Helenistik askeri mimarinin olağanüstü bir örneğidir ve antik Thasos surlarının limanı ve şehri korumadaki büyük önemini açıkça göstermektedir.`,
    descriptionRo: `Turnul–Poartă al lui Sotas a reprezentat una dintre cele mai impresionante și speciale structuri defensive ale anticului Thasos.

În machetă vedem o construcție unică ce funcționa simultan ca turn și ca poartă de intrare în oraș. Monumentul este cunoscut sub numele de „Turnul–Poartă al lui Sotas".

Sotas era un nobil bogat din Thasos, fiul lui Euporos, și a finanțat personal construcția turnului în secolul al II-lea î.Hr., oferind orașului o importantă lucrare defensivă. Existența unor astfel de sponsorizări private demonstrează atât bogăția, cât și influența socială a unor cetățeni thasieni în perioada elenistică.

Turnul se afla în partea de nord-vest a orașului antic Thasos, aproape de actuala stradă Dimitriadi, pe drumul care duce spre Prinos. Fundațiile sale au fost documentate în 1913 de arheologul S. Risom, în urma săpăturilor efectuate de C. Fredrich și J. Baker-Penoyre.

Construcția avea în centru o încăpere pătrată cu dimensiunile de 4,95 × 4,92 metri. În mijloc se afla un altar, element care arată că locul avea nu doar o funcție militară, ci probabil și una religioasă.

Turnul avea două porți:

una sud-estică, care constituia ieșirea principală din oraș,
și una nordică, care ducea spre port și mare.

Drumul de la poarta nordică continua aproximativ 100 de metri până la Poarta Peștelui, iar zidul spre nord-est lega turnul de Poarta lui Zeus și Hera. Astfel, Turnul lui Sotas reprezenta un important punct de control și comunicație al sectorului nordic al zidurilor orașului.

O caracteristică specială a monumentului era construcția sa semicirculară interioară. În fața porții interioare a orașului exista un zid semicircular care pornea de la fundații și ajungea până la al treilea etaj, unde se conecta cu înălțimea zidurilor de apărare. Această formă arhitecturală neobișnuită a fost creată deoarece pe latura vestică exista o stâncă naturală uriașă care nu permitea construirea unui zid drept.

Turnul avea în total patru etaje. Primul și al doilea erau izolate de nivelurile superioare, probabil din motive de securitate. Al treilea etaj, aflat la aproximativ 8 metri înălțime, comunica direct cu zidurile orașului, iar al patrulea etaj și acoperișul serveau drept punct de observație și platformă de luptă.

Arhitectura turnului fusese concepută ca o capcană pentru invadatori. Când dușmanii treceau prin poarta exterioară, erau prinși în spațiul pătrat central. Thasienii închideau apoi poarta interioară, iar războinicii, din deschiderile celui de-al treilea etaj, trăgeau săgeți și sulițe sau aruncau ulei încins și alte obiecte asupra atacatorilor prinși în capcană. În acest mod invadatorii erau distruși sau obligați să se retragă.

Turnul–Poartă al lui Sotas reprezintă un exemplu remarcabil de arhitectură militară elenistică și demonstrează importanța majoră pe care fortificațiile anticului Thasos o aveau pentru protecția portului și a orașului.`,
    descriptionSr: `Kula–Kapija Sotasa predstavljala je jednu od najimpresivnijih i najneobičnijih odbrambenih građevina antičkog Thasos.

Na maketi vidimo jedinstvenu građevinu koja je istovremeno služila kao kula i kao ulazna kapija grada. Spomenik je poznat kao „Kula–Kapija Sotasa".

Sotas je bio bogati plemić Tasosa, sin Euporosa, i lično je finansirao izgradnju kule tokom 2. veka pre nove ere, poklanjajući gradu značajno odbrambeno delo. Postojanje ovakvih privatnih donacija pokazuje i bogatstvo i veliki društveni uticaj pojedinih građana Tasosa tokom helenističkog perioda.

Kula se nalazila u severozapadnom delu antičkog grada Tasosa, blizu današnje Dimitrijadi ulice na putu prema Prinosu. Njene temelje dokumentovao je 1913. godine arheolog S. Risom nakon iskopavanja C. Fredriha i J. Baker-Penoyrea.

U središtu građevine nalazila se kvadratna prostorija dimenzija 4,95 × 4,92 metra. U njenom centru stajao je oltar, što ukazuje da je mesto možda imalo ne samo vojni već i verski značaj.

Kula je imala dve kapije:

jugoistočnu kapiju, koja je služila kao glavni izlaz iz grada,
i severnu kapiju, koja je vodila prema luci i moru.

Put od severne kapije nastavljao se oko 100 metara do Riblje kapije, dok je zid prema severoistoku povezivao kulu sa Kapijom Zevsa i Here. Na taj način Kula Sotasa predstavljala je važnu tačku kontrole i komunikacije severnog dela gradskih zidina.

Posebna karakteristika spomenika bila je njegova unutrašnja polukružna konstrukcija. Nasuprot unutrašnje gradske kapije nalazio se polukružni zid koji se uzdizao od temelja do trećeg sprata, gde se povezivao sa visinom bedema. Ovaj neobičan arhitektonski oblik nastao je zato što se na zapadnoj strani nalazila ogromna prirodna stena koja je onemogućavala izgradnju pravog zida.

Kula je imala ukupno četiri sprata. Prvi i drugi bili su odvojeni od gornjih nivoa, verovatno iz bezbednosnih razloga. Treći sprat, na visini od oko osam metara, bio je direktno povezan sa gradskim zidinama, dok su četvrti sprat i krov služili kao osmatračnica i borbena platforma.

Arhitektura kule bila je osmišljena kao zamka za osvajače. Kada bi neprijatelji prošli kroz spoljašnju kapiju, ostajali bi zarobljeni u centralnoj kvadratnoj prostoriji. Tasošani bi tada zatvorili unutrašnju kapiju, dok su ratnici sa otvora trećeg sprata ispaljivali strele i koplja ili bacali vrelo ulje i druge predmete na zarobljene napadače. Na taj način osvajači su bili uništeni ili primorani na povlačenje.

Kula–Kapija Sotasa predstavlja izuzetan primer helenističke vojne arhitekture i pokazuje veliki značaj koji su utvrđenja antičkog Tasosa imala za zaštitu luke i samog grada.`,
    descriptionIt: `La Torre–Porta di Sotas rappresentava una delle opere difensive più impressionanti e particolari dell'antica Thasos.

Nel modellino vediamo una costruzione unica che funzionava contemporaneamente come torre e come porta d'ingresso della città. Il monumento è conosciuto come "Torre–Porta di Sotas".

Sotas era un ricco nobile di Thasos, figlio di Euporos, e finanziò personalmente la costruzione della torre nel II secolo a.C., offrendo alla città un'importante opera difensiva. L'esistenza di tali sponsorizzazioni private dimostra sia la ricchezza sia la grande influenza sociale di alcuni cittadini thasi durante il periodo ellenistico.

La torre si trovava nella parte nord-occidentale dell'antica città di Thasos, vicino all'attuale via Dimitriadi, lungo la strada che conduce a Prinos. Le sue fondamenta furono documentate nel 1913 dall'archeologo S. Risom, dopo gli scavi di C. Fredrich e J. Baker-Penoyre.

Al centro dell'edificio vi era uno spazio quadrato di 4,95 × 4,92 metri. Nel mezzo si trovava un altare, elemento che indica come il luogo avesse non solo funzione militare ma probabilmente anche religiosa.

La torre possedeva due porte:

una sud-orientale, che costituiva l'uscita principale della città,
e una settentrionale, che conduceva verso il porto e il mare.

La strada dalla porta nord proseguiva per circa 100 metri fino a incontrare la Porta del Pesce, mentre il muro verso nord-est collegava la torre con la Porta di Zeus ed Hera. In questo modo la Torre di Sotas costituiva un importante punto di controllo e comunicazione del settore settentrionale delle mura cittadine.

Una caratteristica particolare del monumento era la sua struttura semicircolare interna. Di fronte alla porta interna della città vi era un muro semicircolare che partiva dalle fondamenta e arrivava fino al terzo piano, dove si collegava all'altezza delle mura difensive. Questa insolita forma architettonica fu creata perché sul lato occidentale esisteva un enorme masso naturale che impediva la costruzione di un muro rettilineo.

La torre aveva complessivamente quattro piani. Il primo e il secondo erano isolati dai livelli superiori, probabilmente per motivi di sicurezza. Il terzo piano, situato a circa 8 metri di altezza, comunicava direttamente con le mura cittadine, mentre il quarto piano e il tetto funzionavano come punto di osservazione e piattaforma di combattimento.

L'architettura della torre era stata progettata come una trappola per gli invasori. Quando i nemici attraversavano la porta esterna, rimanevano intrappolati nello spazio quadrato centrale. I Thasi chiudevano allora la porta interna e i guerrieri, dalle aperture del terzo piano, lanciavano frecce e giavellotti oppure versavano olio bollente e altri oggetti sugli assalitori intrappolati. In questo modo gli invasori venivano eliminati o costretti alla ritirata.

La Torre–Porta di Sotas costituisce uno straordinario esempio di architettura militare ellenistica e dimostra la grande importanza che le fortificazioni dell'antica Thasos avevano per la protezione del porto e della città.`,
    descriptionDe: `Der Turm–Torbau des Sotas war eines der beeindruckendsten und außergewöhnlichsten Verteidigungswerke des antiken Thasos.

Auf dem Modell sehen wir ein einzigartiges Bauwerk, das gleichzeitig als Turm und als Stadttor diente. Das Monument ist als „Turm–Tor des Sotas" bekannt.

Sotas war ein reicher Adliger von Thasos, Sohn des Euporos, und finanzierte den Bau des Turmes im 2. Jahrhundert v. Chr. aus eigenen Mitteln. Damit schenkte er der Stadt ein bedeutendes Verteidigungswerk. Solche privaten Stiftungen zeigen sowohl den Reichtum als auch den großen gesellschaftlichen Einfluss bestimmter Bürger von Thasos während der hellenistischen Zeit.

Der Turm befand sich im Nordwesten der antiken Stadt Thasos, nahe der heutigen Dimitriadi-Straße auf dem Weg nach Prinos. Seine Fundamente wurden 1913 vom Archäologen S. Risom nach den Ausgrabungen von C. Fredrich und J. Baker-Penoyre dokumentiert.

Im Zentrum des Bauwerks befand sich ein quadratischer Raum mit den Maßen 4,95 × 4,92 Meter. In der Mitte stand ein Altar, was darauf hinweist, dass der Ort nicht nur militärische, sondern möglicherweise auch religiöse Bedeutung hatte.

Der Turm besaß zwei Tore:

ein südöstliches Tor, das als Hauptausgang der Stadt diente,
und ein nördliches Tor, das zum Hafen und zum Meer führte.

Die Straße vom Nordtor setzte sich etwa 100 Meter fort, bis sie das Fischtor erreichte, während die Mauer nach Nordosten den Turm mit dem Tor des Zeus und der Hera verband. Dadurch bildete der Turm des Sotas einen wichtigen Kontroll- und Kommunikationspunkt im nördlichen Abschnitt der Stadtmauer.

Ein besonderes Merkmal des Monuments war seine innere halbkreisförmige Konstruktion. Gegenüber dem inneren Stadttor befand sich eine halbkreisförmige Mauer, die von den Fundamenten bis zum dritten Stockwerk reichte und dort mit der Höhe der Stadtmauern verbunden war. Diese ungewöhnliche architektonische Form entstand, weil sich an der Westseite ein gewaltiger natürlicher Felsen befand, der den Bau einer geraden Mauer unmöglich machte.

Der Turm hatte insgesamt vier Stockwerke. Das erste und zweite Stockwerk waren von den oberen Ebenen getrennt, wahrscheinlich aus Sicherheitsgründen. Das dritte Stockwerk lag etwa acht Meter hoch und stand in direkter Verbindung mit den Stadtmauern, während das vierte Stockwerk mit dem Dach als Beobachtungs- und Kampfplattform diente.

Die Architektur des Turmes war als Falle für Eindringlinge konzipiert. Wenn Feinde durch das äußere Tor eindrangen, wurden sie im zentralen quadratischen Raum eingeschlossen. Die Thasier schlossen daraufhin das innere Tor, während die Krieger aus den Öffnungen des dritten Stockwerks Pfeile und Wurfspeere abschossen oder heißes Öl und andere Gegenstände auf die eingeschlossenen Angreifer warfen. Auf diese Weise wurden die Eindringlinge vernichtet oder zum Rückzug gezwungen.

Der Turm–Torbau des Sotas ist ein hervorragendes Beispiel hellenistischer Militärarchitektur und zeigt die große Bedeutung der Befestigungen des antiken Thasos für den Schutz des Hafens und der Stadt.`,
    mapX: 82, mapY: 40,    mapsUrl: "https://maps.app.goo.gl/EPzB8zN6K6geBkt88",
    localImages: [stop6img1, stop6img2],
  },
  {
    id: 7, num: "07",
    title: "Πύλη-Πύργος Δία και Ήρας", titleEn: "Gate-Tower of Zeus and Hera",
    titleDe: "Tor-Turm des Zeus und der Hera",
    titleRo: "Poarta – Turnul lui Zeus și Hera",
    titleTr: "Zeus ve Hera Kapısı – Kulesi",
    titleBg: "Портата – Кулата на Зевс и Хера",
    category: "Πύλη", categoryEn: "Gate",
    categoryDe: "Tor",
    categoryRo: "Poartă",
    categoryTr: "Kapı",
    categoryBg: "Порта",
    duration: "10 λεπτά", durationSec: 600,
    imageId: IMGS[8],
    description: "Η Πύλη – Πύργος του Δία και της Ήρας αποτελεί ένα από τα πιο εντυπωσιακά και επιβλητικά οχυρωματικά μνημεία της αρχαίας Θάσου. Δεν ήταν απλώς μία στρατιωτική πύλη του τείχους, αλλά ένα έργο υψηλής αρχιτεκτονικής αισθητικής, θρησκευτικού συμβολισμού και πολιτικής προβολής της δύναμης της πόλης. Το μνημείο αυτό συνδύαζε την άμυνα, την τέχνη και τη λατρεία των θεών, αποτελώντας ένα από τα λαμπρότερα δείγματα ελληνιστικής αρχιτεκτονικής στο βόρειο Αιγαίο.\n\nΗ πύλη βρισκόταν περίπου 170 μέτρα βορειοδυτικά από την πύλη του Ηρακλή και οδηγούσε προς την εύφορη πεδιάδα έξω από τα τείχη της πόλης. Η θέση της ήταν στρατηγικής σημασίας, καθώς συνέδεε την πόλη με τις εξωτερικές αγροτικές εκτάσεις, τα νεκροταφεία και τους δρόμους που οδηγούσαν προς την ενδοχώρα του νησιού. Από την περιοχή αυτή περνούσαν έμποροι, ταξιδιώτες, στρατιώτες αλλά και οι πομπές των νεκρικών τελετών.\n\nΗ αρχική μορφή της πύλης κατασκευάστηκε στις αρχές του 5ου αιώνα π.Χ., κατά την κλασική εποχή. Τότε αποτελούσε ένα απλό άνοιγμα στο τείχος, χωρίς ιδιαίτερη διακόσμηση ή μνημειακή μορφή. Στο εσωτερικό διασώζεται ακόμη μία σκάλα μετάπυργίου με δεκατρία σκαλοπάτια, η οποία κατέβαινε στο αρχαιότερο επίπεδο της πόλης και επέτρεπε στους φρουρούς να μετακινούνται επάνω στα τείχη.\n\nΗ πραγματική αίγλη της πύλης εμφανίζεται στα τέλη του 4ου αιώνα π.Χ. ή στις αρχές του 3ου αιώνα π.Χ., στην ελληνιστική εποχή. Ανακατασκευάστηκε τότε σε μνημειακή μορφή από τον Πύθιππο, γιο του Παιεστράτου, έναν πλούσιο Θάσιο αριστοκράτη και άρχοντα της πόλης. Το όνομά του αναγραφόταν στο επιστύλιο της πύλης: «Πύθιππος, γιος του Παιειστράτου», ώστε όλοι όσοι περνούσαν να γνωρίζουν τον ευεργέτη.\n\nΗ αρχιτεκτονική του μνημείου ήταν εντυπωσιακή. Το άνοιγμα του τείχους καλυπτόταν από έναν κοίλο τετράγωνο πύργο. Δύο τεράστιοι πεσσοί – μεγάλες τετραγωνικές μαρμάρινες κολώνες – σχημάτιζαν το πέρασμα της δίφυλλης πύλης, με άνοιγμα 2,70 μέτρων για καλύτερο έλεγχο. Στο εσωτερικό υπήρχαν δύο τεράστιοι ορθοστάτες ύψους περίπου 4,80 μέτρων, που έφεραν ανάγλυφες παραστάσεις του Δία και της Ήρας.\n\nΣτον δυτικό ορθοστάτη εικονιζόταν η θεά Ήρα ένθρονη, φορώντας χιτώνα και ιμάτιο, κρατώντας σκήπτρο σύμβολο εξουσίας, στραμμένη προς τον εξωτερικό κόσμο. Μπροστά της εμφανιζόταν η Ίριδα, η φτερωτή αγγελιοφόρος των θεών, έτοιμη να μεταφέρει τις εντολές της θεάς. Ανάμεσα στα πόδια του θρόνου διακρίνεται μία μικρή γυμνή ανδρική μορφή, πιθανότατα χορευτής ή αθλητής.\n\nΣτον απέναντι ορθοστάτη εικονιζόταν ο Δίας καθισμένος σε θρόνο, κρατώντας κεραυνό — το σύμβολο της θεϊκής του δύναμης. Ο θρόνος ήταν διακοσμημένος με μορφή σφίγγας, φανερώνοντας ανατολικές και μακεδονικές επιρροές. Μπροστά στον Δία στεκόταν ο Ερμής, ο αγγελιοφόρος και ψυχοπομπός, φορώντας χλαμύδα με τον πέτασο κρεμασμένο στον αυχένα.\n\nΕξωτερικά δέσποζε ο τεράστιος πύργος διαστάσεων 7,70 × 9,60 μέτρων. Δύο ισχυροί τοίχοι σε σχήμα Γ δημιουργούσαν πλακόστρωτο προθάλαμο ελέγχου. Ολόκληρος ο πύργος έφθανε περίπου τα 15 μέτρα ύψος, με στεγασμένο παρατηρητήριο στην κορυφή από όπου οι φρουροί έβλεπαν την πεδιάδα, τη θάλασσα και κάθε εχθρική κίνηση.\n\nΗ παρουσία του Ερμή και της Ίριδας, θεοτήτων που συνδέονται με τη μετάβαση των ψυχών, οδήγησε πολλούς μελετητές στην άποψη ότι από αυτή την πύλη περνούσαν οι νεκρικές πομπές προς τη νεκρόπολη. Η πύλη αποτελούσε έτσι ιερό τόπο μετάβασης: από την πόλη προς τον έξω κόσμο, από τη ζωή προς τον θάνατο, από τον κόσμο των ανθρώπων προς τον κόσμο των θεών. Παραμένει μέχρι σήμερα ένα αριστούργημα της ελληνιστικής αρχιτεκτονικής και γλυπτικής.",
    descriptionEn: `The Gate-Tower of Zeus and Hera is one of the most impressive and imposing fortification monuments of ancient Thasos. It was not simply a military gate in the wall, but a work of high architectural aesthetics, religious symbolism, and political projection of the city's power. This monument combined defense, art, and worship of the gods, constituting one of the most brilliant examples of Hellenistic architecture in the northern Aegean.

The gate was located approximately 170 meters northwest of the Gate of Herakles and led toward the fertile plain outside the city walls. Its position was of strategic importance, as it connected the city with the external agricultural lands, cemeteries, and roads leading to the island's interior. Merchants, travelers, soldiers, and funeral processions passed through this area.

The original form of the gate was constructed in the early 5th century BC, during the Classical period. At that time it consisted of a simple opening in the wall, without particular decoration or monumental form. Inside, a staircase of thirteen steps still survives, which descended to the older level of the city and allowed guards to move along the walls.

The gate's true glory appeared in the late 4th century BC or early 3rd century BC, in the Hellenistic period. It was then reconstructed in monumental form by Pythippos, son of Paiestratos, a wealthy Thasian aristocrat and archon of the city. His name was inscribed on the gate's epistyle: "Pythippos, son of Paiestratos," so that all who passed would know the city's benefactor.

The architecture of the monument was impressive. The opening in the wall was covered by a hollow square tower. Two enormous pessoi — large square marble columns — formed the passage of the double gate, with an opening of 2.70 meters for better control. Inside were two enormous orthostats approximately 4.80 meters high, bearing relief representations of Zeus and Hera.

On the western orthostat, Hera was depicted enthroned, wearing a chiton and himation, holding a scepter as a symbol of power, facing the exterior world. Before her appeared Iris, the winged messenger of the gods, ready to convey the goddess's commands. Between the throne's legs can be seen a small nude male figure, probably a dancer or athlete.

On the opposite orthostat was depicted Zeus seated on a throne, holding a thunderbolt — the symbol of his divine power. The throne was decorated with a sphinx figure, revealing oriental and Macedonian influences. Before Zeus stood Hermes, the messenger and psychopomp of the gods, wearing a chlamys with his petasos hanging from his neck.

Externally, the enormous tower dominated, measuring 7.70 × 9.60 meters. Two strong walls in a Γ shape created a paved antechamber for control. The entire tower reached approximately 15 meters in height, with a roofed observatory at the top from which guards could see the plain, the sea, and any hostile movement.

The presence of Hermes and Iris, deities connected with the passage of souls, led many scholars to believe that funeral processions passed through this gate to the necropolis. The gate thus constituted a sacred place of transition: from the city to the outer world, from life to death, from the world of humans to the world of the gods. It remains to this day a masterpiece of Hellenistic architecture and sculpture.`,
    descriptionDe: `Das Tor – der Turm des Zeus und der Hera – gehört zu den eindrucksvollsten und imposantesten Befestigungsmonumenten des antiken Thasos. Es war nicht nur ein militärisches Stadttor, sondern ein Bauwerk von hoher architektonischer Ästhetik, religiöser Symbolik und politischer Selbstdarstellung der Macht der Stadt. Das Monument vereinte Verteidigung, Kunst und Götterverehrung und zählt zu den bedeutendsten Beispielen hellenistischer Architektur in der nördlichen Ägäis.

Das Tor befand sich etwa 170 Meter nordwestlich vom Heraklestor und führte zur fruchtbaren Ebene außerhalb der Stadtmauern. Seine Lage war von strategischer Bedeutung, da es die Stadt mit den landwirtschaftlichen Flächen, den Nekropolen und den Straßen ins Inselinnere verband. Händler, Reisende, Soldaten und auch Trauerzüge passierten diesen Bereich.

Die ursprüngliche Form des Tores wurde zu Beginn des 5. Jahrhunderts v. Chr. in der klassischen Epoche errichtet. Damals bestand es lediglich aus einer einfachen Öffnung in der Stadtmauer, ohne besondere Dekoration oder monumentalen Charakter. Im Inneren ist bis heute eine Treppe mit dreizehn Stufen erhalten, die auf das ältere Niveau der Stadt hinabführte und den Wächtern die Bewegung entlang der Mauern ermöglichte.

Der eigentliche Glanz des Tores entstand jedoch erst am Ende des 4. Jahrhunderts v. Chr. oder zu Beginn des 3. Jahrhunderts v. Chr., während der hellenistischen Epoche. Es wurde damals in monumentaler Form von Pythippos, Sohn des Paiistratos, einem reichen thasischen Aristokraten und Stadtbeamten, neu errichtet. Sein Name war auf dem Architrav des Tores eingraviert: „Pythippos, Sohn des Paiistratos", damit jeder Besucher den Wohltäter der Stadt erkennen konnte.

Die Architektur des Monuments war beeindruckend. Die Öffnung der Stadtmauer wurde von einem hohlen quadratischen Turm überdeckt. Zwei gewaltige Pfeiler – große quadratische Marmorsäulen – bildeten den Durchgang des zweiflügeligen Tores, mit einer Öffnung von 2,70 Metern für bessere Kontrolle. Im Inneren befanden sich zwei riesige Orthostaten von etwa 4,80 Metern Höhe, die Reliefdarstellungen von Zeus und Hera trugen.

Auf dem westlichen Orthostaten war die Göttin Hera thronend dargestellt, Chiton und Himation tragend und ein Zepter als Symbol der Macht haltend, zur Außenwelt gewandt. Vor ihr erscheint Iris, die geflügelte Botin der Götter, bereit, die Befehle der Göttin zu überbringen. Zwischen den Beinen des Thrones erkennt man eine kleine nackte männliche Figur, vermutlich einen Tänzer oder Athleten.

Auf dem gegenüberliegenden Orthostaten war Zeus dargestellt, auf einem Thron sitzend und einen Blitz haltend – das Symbol göttlicher Macht. Sein Thron war mit einer Sphinx verziert, was östliche und makedonische Einflüsse erkennen lässt. Vor Zeus stand Hermes, der Götterbote und Psychopompos, eine Chlamys tragend mit dem Petasos im Nacken hängend.

Äußerlich dominierte der gewaltige Turm mit den Maßen 7,70 × 9,60 Meter. Zwei starke L-förmige Mauern bildeten einen gepflasterten Vorhof. Der gesamte Turm erreichte etwa 15 Meter Höhe, mit einem überdachten Beobachtungsposten an der Spitze, von dem aus die Wächter die Ebene, das Meer und jede feindliche Bewegung überwachen konnten.

Die Anwesenheit von Hermes und Iris – Gottheiten, die mit dem Übergang der Seelen verbunden sind – führte viele Forscher zu der Annahme, dass die Trauerzüge zur Nekropole des antiken Thasos durch dieses Tor zogen. So war das Tor nicht nur ein militärisches Bauwerk, sondern auch ein heiliger symbolischer Übergang: von der Stadt zur Außenwelt, vom Leben zum Tod, von der Welt der Menschen zur Welt der Götter. Es bleibt bis heute ein Meisterwerk hellenistischer Architektur und Bildhauerkunst.`,
    descriptionRo: `Poarta – Turnul lui Zeus și Hera reprezintă unul dintre cele mai impresionante și impunătoare monumente fortificate ale vechii Thasos. Nu era doar o poartă militară a zidurilor cetății, ci o operă de mare valoare arhitecturală, simbolism religios și afirmare politică a puterii orașului. Monumentul combina apărarea, arta și cultul zeilor, constituind unul dintre cele mai strălucite exemple de arhitectură elenistică din nordul Mării Egee.

Poarta se afla la aproximativ 170 de metri nord-vest de Poarta lui Heracle și conducea spre câmpia fertilă din afara zidurilor orașului. Poziția sa era de importanță strategică, deoarece lega orașul de terenurile agricole, necropole și drumurile care duceau spre interiorul insulei. Prin această zonă treceau negustori, călători, soldați, dar și procesiuni funerare.

Forma inițială a porții a fost construită la începutul secolului al V-lea î.Hr., în perioada clasică. Atunci era doar o simplă deschidere în zid, fără decor special sau aspect monumental. În interior se păstrează și astăzi o scară cu treisprezece trepte, care cobora spre nivelul mai vechi al orașului și permitea străjerilor să se deplaseze de-a lungul zidurilor.

Adevărata splendoare a porții apare însă la sfârșitul secolului al IV-lea î.Hr. sau începutul secolului al III-lea î.Hr., în perioada elenistică. A fost reconstruită atunci în formă monumentală de către Pythippos, fiul lui Paiistratos, un bogat aristocrat și magistrat al orașului. Numele lui Pythippos era inscripționat pe arhitrava porții: „Pythippos, fiul lui Paiistratos", astfel încât toți cei care treceau prin monument să cunoască binefăcătorul orașului.

Arhitectura monumentului era impresionantă și inovatoare. Deschiderea zidului era acoperită de un turn pătrat gol pe interior. Două coloane masive din marmură formau pasajul porții cu două canaturi, cu o deschidere de 2,70 metri pentru a controla mai bine accesul în oraș. În interior existau două ortostate uriașe de aproximativ 4,80 metri înălțime, purtând reliefuri reprezentând Zeus și Hera.

Pe ortostatul vestic, Hera era reprezentată așezată pe tron, purtând chiton și himation și ținând un sceptru ca simbol al autorității, privind spre câmpie. În fața ei apărea Iris, mesagera înaripată a zeilor, pregătită să transmită poruncile zeiței. Între picioarele tronului se distinge o mică figură masculină nudă, probabil un dansator sau un atlet.

Pe ortostatul opus era reprezentat Zeus așezat pe tron și ținând un fulger — simbolul puterii sale divine. Tronul său era decorat cu o sfinxă, element care arată influențe orientale și macedonene. În fața lui Zeus stătea Hermes, mesagerul zeilor și psihopompul, purtând o hlamidă cu petasosul atârnat la ceafă.

La exterior domina uriașul turn cu dimensiunile de 7,70 × 9,60 metri. Două ziduri puternice în formă de L formau o curte pavată. Întregul turn atingea aproximativ 15 metri înălțime, iar în partea superioară exista un observator acoperit de unde străjerii puteau supraveghea câmpia, marea și orice posibilă mișcare inamică.

Prezența lui Hermes și a Irisului, divinități asociate cu trecerea sufletelor, i-a determinat pe mulți cercetători să creadă că prin această poartă treceau procesiunile funerare către necropola vechiului Thasos. Astfel, poarta reprezenta nu doar o construcție militară, ci și un loc sacru de trecere simbolică: din oraș spre lumea exterioară, din viață spre moarte, din lumea oamenilor spre lumea zeilor. Rămâne și astăzi o capodoperă a arhitecturii și sculpturii elenistice.`,
    descriptionTr: `Zeus ve Hera Kapısı – Kulesi, antik Thasos'un en etkileyici ve görkemli savunma yapılarından biridir. Bu yapı yalnızca surların askeri bir kapısı değil, aynı zamanda yüksek mimari estetik, dini sembolizm ve şehrin gücünü yansıtan politik bir gösteriydi. Anıt, savunmayı, sanatı ve tanrılara tapınmayı bir araya getirerek kuzey Ege'deki Helenistik mimarinin en parlak örneklerinden biri olmuştur.

Kapı, Herakles Kapısı'nın yaklaşık 170 metre kuzeybatısında bulunuyordu ve şehir surlarının dışındaki verimli ovaya açılıyordu. Konumu stratejik açıdan büyük önem taşıyordu; çünkü şehri tarım alanlarına, nekropollere ve adanın iç kesimlerine giden yollara bağlıyordu. Tüccarlar, yolcular, askerler ve cenaze alayları bu bölgeden geçiyordu.

Kapının ilk hali MÖ 5. yüzyılın başlarında, Klasik Dönem'de inşa edildi. O dönemde süslemeleri olmayan basit bir sur açıklığından ibaretti. İç kısımda bugün hâlâ on üç basamaklı bir merdiven korunmaktadır. Bu merdiven şehrin daha eski seviyesine iniyor ve muhafızların surlar üzerinde hareket etmelerine olanak sağlıyordu.

Kapının gerçek görkemi ise MÖ 4. yüzyılın sonu veya MÖ 3. yüzyılın başında, Helenistik Dönem'de ortaya çıktı. Zeus ve Hera Kapısı, zengin bir Thasos aristokratı ve şehir yöneticisi olan Paiistratos'un oğlu Pythippos tarafından anıtsal biçimde yeniden inşa edildi. Pythippos'un adı kapının arşitravına yazılmıştı: "Paiistratos'un oğlu Pythippos", böylece anıttan geçen herkes şehrin hayırseverini tanıyabiliyordu.

Anıtın mimarisi etkileyici ve yenilikçiydi. Sur açıklığı içi boş kare bir kuleyle örtülmüştü. Devasa iki mermer paye, çift kanatlı kapının geçişini oluşturuyordu. Giriş genişliği 2,70 metre ile sınırlandırılmıştı. İçeride yaklaşık 4,80 metre yüksekliğinde iki büyük ortostat bulunuyordu; Zeus ve Hera'yı tasvir eden kabartmalar taşıyan sanatsal anıtlardı.

Batı ortostatında tanrıça Hera tahtta oturur şekilde tasvir edilmiştir, khiton ve himation giymekte ve gücün simgesi olan bir asa tutmaktadır. Önünde, tanrıların kanatlı habercisi İris görülmektedir. Tahtın ayakları arasında çıplak küçük bir erkek figürü görülmektedir; muhtemelen bir dansçı ya da atlet.

Karşı ortostatta Olimpos'un en büyük tanrısı Zeus tasvir edilmiştir, tahtta oturur halde ve elinde yıldırım tutarken gösterilmiştir. Tahtı bir sfenks figürüyle süslenmiştir. Zeus'un önünde tanrıların habercisi ve ruhların ölüler diyarına rehberi olan Hermes durmaktadır.

Dışarıdan bakıldığında 7,70 × 9,60 metre ölçülerindeki dev kule dikkat çekiyordu. L biçimli iki güçlü duvar, taş döşeli bir ön avlu oluşturuyordu. Kulenin tamamı yaklaşık 15 metre yüksekliğe ulaşıyordu. Tepesinde ise çatılı bir gözetleme noktası bulunuyordu; buradan muhafızlar ovayı, denizi ve olası düşman hareketlerini gözlemleyebiliyordu.

Hermes ve İris gibi ruhların geçişiyle bağlantılı tanrıların varlığı, birçok araştırmacının bu kapının antik Thasos nekropolüne giden cenaze alayları tarafından kullanıldığı görüşüne ulaşmasına neden olmuştur. Bu nedenle kapı yalnızca askeri bir yapı değil, aynı zamanda kutsal ve sembolik bir geçiş noktasıydı: şehirden dış dünyaya, yaşamdan ölüme, insanların dünyasından tanrıların dünyasına. Günümüzde de Helenistik mimari ile heykel sanatının başyapıtlarından biri olarak kabul edilmektedir.`,
    descriptionBg: `Портата – Кулата на Зевс и Хера представлява един от най-впечатляващите и величествени укрепителни паметници на древен Тасос. Тя не била просто военна порта в градските стени, а произведение с висока архитектурна естетика, религиозна символика и политическа демонстрация на силата на града. Паметникът съчетава отбраната, изкуството и почитането на боговете и е един от най-блестящите примери на елинистическата архитектура в северната част на Егейско море.

Портата се намирала приблизително на 170 метра северозападно от Портата на Херакъл и водела към плодородната равнина извън градските стени. Нейното местоположение било от стратегическо значение, тъй като свързвало града със земеделските земи, некрополите и пътищата към вътрешността на острова. Оттам преминавали търговци, пътешественици, войници, както и погребални шествия.

Първоначалната форма на портата била изградена в началото на V век пр. Хр., през класическата епоха. Тогава тя представлявала обикновен отвор в стената, без особена украса или монументален характер. Вътре и до днес е запазено стълбище с тринадесет стъпала, което слизало към по-старото ниво на града и позволявало на стражите да се придвижват по крепостните стени.

Истинският блясък на портата се появява в края на IV век пр. Хр. или началото на III век пр. Хр., през елинистическата епоха. Портата на Зевс и Хера била преустроена в монументален вид от Питипос, син на Паиестратос, богат тасоски аристократ и градски управник. Името на Питипос било изписано върху архитрава на портата: „Питипос, син на Паиестратос", така че всички преминаващи през паметника да познават благодетеля на града.

Архитектурата на паметника била впечатляваща и новаторска. Отворът в стената бил покрит от куха квадратна кула. Два огромни мраморни пилона оформяли прохода на двукрилната порта. Отворът бил ограничен до 2,70 метра. Вътре имало два гигантски ортостата с височина около 4,80 метра, носещи релефни изображения на Зевс и Хера.

На западния ортостат била изобразена богинята Хера, седнала на трон, носела хитон и химатион и държала скиптър – символ на властта. Пред нея се появявала Ирида – крилатата вестителка на боговете. Между краката на трона се вижда малка гола мъжка фигура, вероятно танцьор или атлет.

На срещуположния ортостат бил изобразен Зевс – върховният бог на Олимп, седнал на трон и държащ мълния – абсолютния символ на своята божествена сила. Тронът му бил украсен със сфинкс. Пред Зевс стоял Хермес – вестителят на боговете и психопомпът, носел хламида, а петасът му висял на тила.

Отвън доминирала огромната кула с размери 7,70 × 9,60 метра. Две мощни Г-образни стени образували павиран двор. Цялата кула достигала приблизително 15 метра височина, а на върха имало покрит наблюдателен пост, откъдето стражите можели да наблюдават равнината, морето и всяко възможно движение на врага.

Присъствието на Хермес и Ирида – божества, свързани с преминаването на душите – накарало много учени да смятат, че през тази порта преминавали погребалните шествия към некропола на древен Тасос. Така портата била не само военно съоръжение, но и свещено символично място на преход: от града към външния свят, от живота към смъртта, от света на хората към света на боговете. Остава и днес шедьовър на елинистическата архитектура и скулптура.`,
    mapX: 80, mapY: 48,    mapsUrl: "https://maps.app.goo.gl/zLjztjtHBX73sYxK9",
    localImages: [stop7img1, stop7img2, stop7img3],
  },
  {
    id: 8, num: "08",
    title: "Προπύλαια Ηρακλείου", titleEn: "Propylaea of the Herakleion",
    titleRo: "Propileele Heracleionului",
    titleTr: "Herakleion Propylaia'ları",
    titleFr: "Les Propylées de l'Héracleion",
    titleIt: "I Propilei dell'Herakleion",
    titleBg: "Пропилеи на Хераклейона",
    titleDe: "Propylaea des Herakleion",
    titleSr: "Propileje Heraklejona",
    category: "Ιερό", categoryEn: "Sanctuary",
    categoryRo: "Sanctuar",
    categoryTr: "Kutsal Alan",
    categoryFr: "Sanctuaire",
    categoryIt: "Santuario",
    categoryBg: "Светилище",
    categoryDe: "Heiligtum",
    categorySr: "Svetilište",
    duration: "6 λεπτά", durationSec: 360,
    imageId: IMGS[12],
    description: "Επιβλητική πύλη-προπύλαια με μαρμάρινη σκάλα έξι βαθμίδων και στέγη που στηριζόταν σε δωρικούς κίονες. Χρονολογείται στην ελληνιστική εποχή και έδινε πρόσβαση στη μεγάλη πλατεία του Ηρακλείου.",
    descriptionEn: "Monumental propylaea with a six-step marble staircase and a roof supported by Doric columns, dating to the Hellenistic period, leading to the great open square of the Herakleion.",
    descriptionRo: "Poartă monumentală – Propilee cu o scară de marmură formată din șase trepte, care servea drept fundație pentru un ansamblu monumental cu acoperiș susținut de coloane dorice. Întregul complex datează din perioada elenistică. Scările au fost construite după propilee și se pare că erau folosite doar în timpul marilor sărbători religioase. Propileele și cele două scări ofereau acces către o piață pavată situată în fața marelui altar.",
    descriptionTr: "Görkemli bir kapı olan Propylaia, altı basamaklı mermer bir merdiven temeli üzerine inşa edilmişti. Yapı, Dor düzenindeki sütunların taşıdığı çatılı bir giriş bölümünden oluşuyordu. Bu bütün, Helenistik döneme tarihlenmektedir. Merdivenler ise Propylaia'dan sonra yapılmış olup, muhtemelen yalnızca büyük dini törenler sırasında kullanılıyordu. Propylaia ve iki merdiven, büyük sunağın önündeki taş döşeli meydana ulaşımı sağlıyordu.",
    descriptionFr: "Imposante porte monumentale, les Propylées étaient construits avec un escalier en marbre à six marches servant de fondation. Il s'agissait d'une entrée monumentale couverte, soutenue par des colonnes doriques. L'ensemble est daté de l'époque hellénistique. Les escaliers, construits après les Propylées, semblent avoir été utilisés uniquement lors des grandes fêtes religieuses. Les Propylées ainsi que les deux escaliers donnaient accès à une place pavée située devant le grand autel.",
    descriptionIt: "Imponente porta monumentale, i Propilei erano costruiti con una scala in marmo a sei gradini che fungeva da fondazione. Si trattava di un ingresso monumentale coperto, sostenuto da colonne doriche. L'intero complesso risale all'epoca ellenistica. Le scale, costruite successivamente ai Propilei, sembrano essere state utilizzate soltanto durante le grandi festività religiose. I Propilei e le due scalinate conducevano a una piazza lastricata situata davanti al grande altare.",
    descriptionBg: "Внушителна порта – пропилеи с мраморно стълбище от шест стъпала, което служело като основа на пропилеите, със покрив, поддържан от дорийски колони. Целият този комплекс датира от елинистическата епоха. Стълбите, които обслужвали достъпа, били построени след пропилеите. Изглежда, че те се използвали само по време на големите празници. Пропилеите и двете стълби осигурявали достъп до павиран площад пред големия олтар.",
    descriptionDe: "Monumentales Tor – die Propyläen mit einer sechsstufigen Marmortreppe, die als Fundament diente, mit einem von dorischen Säulen getragenen Dach. Der gesamte Komplex stammt aus hellenistischer Zeit. Die Treppen wurden nach den Propyläen errichtet und scheinen nur während der großen Feste genutzt worden zu sein. Die Propyläen und beide Treppen ermöglichten den Zugang zu einem gepflasterten Platz vor dem großen Altar.",
    descriptionSr: "Impozantna kapija – propileje sa mermernim stepenicama od šest stepenika koje su služile kao osnova propileja, sa krovom koji su podržavale dorske kolone. Ceo ovaj kompleks potiče iz helenističkog perioda. Stepenice su bile izgrađene nakon propileja i izgleda da su se koristile samo tokom velikih praznika. Propileje i obe stepenice omogućavale su pristup popločanom trgu ispred velikog oltara.",
    mapX: 75, mapY: 54,    mapsUrl: "https://maps.app.goo.gl/vdN7uVd4kHHCupxVA",
    localImages: [stop8img1, stop8img2, stop8img3],
  },
  {
    id: 9, num: "09",
    title: "Αψίδα Καρακάλλα", titleEn: "Arch of Caracalla",
    titleTr: "Caracalla Takı",
    titleBg: "Арката на Каракала",
    titleDe: "Bogen des Caracalla",
    titleSr: "Luk Karakale",
    titleRo: "Arcul lui Caracalla",
    titleFr: "L'Arc de Caracalla",
    titleIt: "L'Arco di Caracalla",
    category: "Μνημείο", categoryEn: "Monument",
    categoryTr: "Anıt",
    categoryBg: "Паметник",
    categoryDe: "Denkmal",
    categorySr: "Spomenik",
    categoryRo: "Monument",
    categoryFr: "Monument",
    categoryIt: "Monumento",
    duration: "8 λεπτά", durationSec: 480,
    imageId: IMGS[2],
    description: "Η Αψίδα του Καρακάλλα αποτελεί ένα από τα πιο εντυπωσιακά και σημαντικά ρωμαϊκά μνημεία της αρχαίας Θάσος. Το μνημείο αυτό βρισκόταν σε ιδιαίτερα κεντρικό και συμβολικό σημείο της πόλης, στο τέλος της πλακόστρωτης οδού που ξεκινούσε από τη Δίοδο των Θεωρών της Αρχαίας Αγοράς και οδηγούσε προς τη Μεγάλη Πλατεία, η οποία εκτεινόταν κάτω από το ιερό του Ηρακλής.\n\nΗ θέση της αψίδας δεν ήταν τυχαία. Τοποθετήθηκε σε ένα από τα πιο πολυσύχναστα σημεία της αρχαίας πόλης, εκεί όπου συναντιούνταν ο εμπορικός, ο θρησκευτικός και ο δημόσιος χώρος της Θάσου. Ο επισκέπτης που ανέβαινε από την Αγορά προς το Ηράκλειο περνούσε υποχρεωτικά μπροστά από αυτό το μνημείο, το οποίο λειτουργούσε ως σύμβολο δύναμης, αυτοκρατορικής εξουσίας και μεγαλείου.\n\nΗ αψίδα είχε συνολικό μήκος 16,85 μέτρα, βάθος 2,06 μέτρα και υπολογίζεται ότι έφθανε περίπου τα 9,80 μέτρα σε ύψος. Ήταν εφαπτόμενη σε μεγάλο τοίχο, πιθανότατα τμήμα του περιβόλου του Ηρακλείου. Αποτελούνταν από τρία τοξωτά ανοίγματα: ένα μεγάλο κεντρικό τόξο και δύο μικρότερα πλαϊνά — διάταξη χαρακτηριστική των μεγάλων ρωμαϊκών θριαμβικών αψίδων. Τα τόξα στηρίζονταν σε τέσσερα μεγάλα βάθρα και μονολιθικούς πεσσούς από θασίτικο μάρμαρο.\n\nΗ αψίδα ήταν πλούσια διακοσμημένη. Πάνω από τα τόξα υψωνόταν θριγκός που περιλάμβανε επιστύλιο με τρεις ταινίες, ζωφόρο διακοσμημένη με γλωσσίτσες και μαρμάρινο γείσο. Στην κορυφή πιθανότατα υπήρχαν αγάλματα του αυτοκράτορα Καρακάλλα ή θεοποιημένων μορφών της δυναστείας των Σεβήρων.\n\nΤο σημαντικότερο στοιχείο του μνημείου είναι η μεγάλη επιγραφή που βρέθηκε στο επιστύλιο της κεντρικής αψίδας. Η επιγραφή ήταν αφιερωμένη στον αυτοκράτορα Καρακάλλα και ανέφερε τους επίσημους τίτλους του: Παρθικός Μέγιστος, Βρεταννικός Μέγιστος, Γερμανικός Μέγιστος — τίτλους που αποκτήθηκαν ύστερα από τις στρατιωτικές του εκστρατείες. Παράλληλα, ανέφερε τη σύζυγό του Ιουλία Δόμνα και τον θεοποιημένο πατέρα του Σεπτίμιο Σεβήρο.\n\nΗ επιγραφή επιτρέπει ακριβή χρονολόγηση: ο Καρακάλλας έλαβε τον τίτλο «Germanicus Maximus» στις 6 Οκτωβρίου 213 μ.Χ. και δολοφονήθηκε στις 8 Απριλίου 217 μ.Χ., άρα η επιγραφή χαράχθηκε μεταξύ αυτών των δύο χρονολογιών. Ωστόσο, οι αρχαιολόγοι θεωρούν ότι η ίδια η αψίδα ίσως ήταν παλαιότερη και αργότερα προσαρμόστηκε για να τιμήσει τον αυτοκράτορα.\n\nΗ Αψίδα του Καρακάλλα δεν ήταν απλώς διακοσμητικό μνημείο — ήταν κυρίως πολιτικό και ιδεολογικό σύμβολο. Η Θάσος, ως πλούσια πόλη με σημαντικό λιμάνι και μεγάλη παραγωγή μαρμάρου, διατηρούσε στενές σχέσεις με τη Ρώμη. Η ανέγερση τόσο μνημειακής αψίδας αποδείκνυε την οικονομική ευημερία της πόλης και την αφοσίωση των Θασίων στον αυτοκράτορα.\n\nΣήμερα η αψίδα σώζεται σε κακή κατάσταση — μόνο τα βάθρα και οι βάσεις τους διατηρούνται στη θέση τους. Παρ' όλα αυτά, η μορφή της κατέστη δυνατό να ανασυντεθεί χάρη σε περίπου 200 αρχιτεκτονικά μέλη και θραύσματα που βρέθηκαν κατά τις ανασκαφές. Παραμένει ένα από τα σημαντικότερα σύμβολα της ρωμαϊκής Θάσου και πολύτιμη μαρτυρία της ιστορίας του νησιού.",
    descriptionEn: `The Arch of Caracalla is one of the most impressive and important Roman monuments of ancient Thasos. This monument stood in a particularly central and symbolic location in the city, at the end of the paved street that began at the Passage of the Theoroi of the Ancient Agora and led toward the Great Square, which extended below the sanctuary of Herakles.

The position of the arch was not accidental. It was placed at one of the busiest points of the ancient city, where the commercial, religious, and public spaces of Thasos met. The visitor ascending from the Agora toward the Herakleion necessarily passed before this monument, which functioned as a symbol of power, imperial authority, and grandeur.

The arch had a total length of 16.85 meters, depth of 2.06 meters, and is estimated to have reached approximately 9.80 meters in height. It was tangent to a large wall, probably part of the enclosure of the Herakleion. The arch consisted of three arched openings: a large central arch and two smaller lateral ones — an arrangement characteristic of the great Roman triumphal arches. The arches were supported by four large pedestals and monolithic pessoi of Thasian marble.

The arch was richly decorated. Above the arches rose a frieze that included an epistyle with three bands, a frieze decorated with tongue-and-dart moldings, and a marble cornice. At the top there were probably statues of Emperor Caracalla or deified figures of the Severan dynasty.

The most important element of the monument is the large inscription found on the epistyle of the central arch. The inscription was dedicated to Emperor Caracalla and mentioned his official titles: Parthicus Maximus, Britannicus Maximus, Germanicus Maximus — titles acquired after his military campaigns. It also mentioned his wife Julia Domna and his deified father Septimius Severus.

The inscription allows precise dating: Caracalla received the title "Germanicus Maximus" on October 6, 213 AD and was assassinated on April 8, 217 AD, so the inscription was carved between these two dates. However, archaeologists believe that the arch itself may have been older and later adapted to honor the emperor.

The Arch of Caracalla was not merely a decorative monument — it was primarily a political and ideological symbol. Thasos, as a wealthy city with an important harbor and large marble production, maintained close relations with Rome. The erection of such a monumental arch demonstrated the city's economic prosperity and the Thasians' devotion to the emperor.

Today the arch survives in poor condition — only the pedestals and their bases remain in place. Nevertheless, its form was possible to reconstruct thanks to approximately 200 architectural members and fragments found during excavations. It remains one of the most important symbols of Roman Thasos and valuable testimony to the island's history.`,
    descriptionTr: `Antik Thasos'taki Caracalla Takı

Caracalla Takı, antik Thasos'un en etkileyici ve en önemli Roma dönemi anıtlarından biridir. Anıt, kentin son derece merkezi ve simgesel bir noktasında bulunuyordu: Antik Agora'daki Theoroi Geçidi'nden başlayan taş döşeli yolun sonunda ve Herakles kutsal alanının altındaki Büyük Meydan'a giden güzergâhta yer alıyordu.

Takın bulunduğu yer tesadüfi değildi. Kentin ticari, dini ve kamusal alanlarının birleştiği en yoğun noktalardan birine yerleştirilmişti. Agora'dan Herakleion'a çıkan ziyaretçiler mutlaka bu anıtın önünden geçiyordu. Böylece yapı, gücün, imparatorluk otoritesinin ve ihtişamın sembolü haline gelmişti.

Anıtın Mimari Yapısı

Takın toplam uzunluğu 16,85 metre, derinliği 2,06 metreydi ve yüksekliğinin yaklaşık 9,80 metreye ulaştığı tahmin edilmektedir. Bu nedenle şehirde büyük etki bırakan görkemli bir yapıydı.

Anıt, muhtemelen Herakles kutsal alanının çevre duvarına bitişik şekilde inşa edilmişti. Takın arkasında, Theoroi Geçidi'nden gelen yolun genişlediği küçük bir meydan bulunuyordu. Bu alanın tören alayı, resmi karşılama veya toplantı alanı olarak kullanıldığı düşünülmektedir.

Tak üç kemerli açıklıktan oluşuyordu. Ortadaki büyük kemer daha geniş ve daha yüksekti; iki yanında ise daha küçük ve daha alçak kemerler yer alıyordu. Bu düzenleme, Roma zafer taklarının tipik özelliğidir ve imparatorluğun ihtişamını simgeler.

Kemerler dört büyük kaide ve Thasos mermerinden yapılmış yekpare payeler üzerine oturuyordu. Yan kemerler tam yarım daire şeklindeyken, merkezi kemerin yayı biraz daha basıktı; bu özellik geç Roma mimarisine aittir.

Takın Süslemeleri

Caracalla Takı oldukça zengin biçimde süslenmişti. Kemerlerin üzerinde yatay üst bölüm olan entablatur bulunuyordu. Bu bölüm şunlardan oluşuyordu:

• üç şeritli arşitrav,
• dil motifleriyle süslü friz,
• mermer korniş.

Tüm mimari parçalar aynı mermer üzerine büyük ustalıkla işlenmişti ve Thasos mermercilik sanatının yüksek seviyesini göstermektedir.

Takın tepesinde muhtemelen heykeller bulunuyordu. Arkeologlar burada İmparator Caracalla'nın, ailesinin veya Severus Hanedanı'nın tanrılaştırılmış üyelerinin heykellerinin yer aldığını düşünmektedir. Bu heykeller anıtı daha da görkemli hale getiriyordu.

Günümüzdeki Durumu

Bugün tak kötü durumda korunmuştur. Yalnızca kaideleri ve bazı temel parçaları yerinde kalmıştır. Buna rağmen kazılar sırasında bulunan yaklaşık 200 mimari parça sayesinde anıtın ilk görünümü yeniden oluşturulabilmiştir.

Yazıt

Anıtın en önemli unsuru, merkezi kemerin arşitravında bulunan büyük yazıttır. Yazıt İmparator Caracalla ve imparatorluk ailesine adanmıştır. Burada imparatorun şu unvanları yer almaktadır:

• Parthicus Maximus,
• Britannicus Maximus,
• Germanicus Maximus.

Bu unvanlar onun Partlara, Germen kabilelerine ve Britanyalılara karşı yürüttüğü seferlerden sonra verilmiştir.

Yazıtta ayrıca eşi Julia Domna ile ölümünden sonra tanrılaştırılan babası Septimius Severus'un adı da geçmektedir.

Tarihlendirme

Caracalla "Germanicus Maximus" unvanını M.S. 213 yılında aldı ve 217 yılında öldürüldü. Bu nedenle yazıt bu iki tarih arasında kazınmıştır. Ancak arkeologlar takın aslında daha eski olabileceğini düşünmektedir.

Politik Önemi

Caracalla Takı yalnızca süsleme amaçlı bir yapı değildi; aynı zamanda siyasi ve ideolojik bir simgeydi. Roma İmparatorluğu'nda zafer takları imparatorları ve askeri başarıları onurlandırmak amacıyla inşa edilirdi.

Thasos, önemli limanı ve mermer üretimi sayesinde Roma ile yakın ilişkilere sahip zengin bir kentti. Bu görkemli anıt, kentin hem ekonomik gücünü hem de Roma'ya bağlılığını göstermekteydi.

Günümüzdeki Önemi

Bugün Caracalla Takı, Thasos'taki Roma döneminin en önemli anıtlarından biri kabul edilmektedir. Yıkılmış olmasına rağmen hâlâ antik kentin görkemini yansıtmaktadır. Anıt:

• Thasosluların yüksek mimari becerisini,
• Thasos mermerinin önemini,
• Thasos ile Roma arasındaki yakın bağı,
• imparatorluk gücünün anıtsal mimari aracılığıyla nasıl sergilendiğini göstermektedir.`,
    descriptionBg: `Арката на Каракала е един от най-впечатляващите и значими римски паметници на древния Тасос. Този паметник се е намирал на особено централно и символично място в града — в края на павирания път, който започвал от Прохода на Теорите на Древната агора и водел към Големия площад, разположен под светилището на Херакъл.

Мястото на арката не било случайно. Тя била поставена на едно от най-оживените места в древния град, където се срещали търговското, религиозното и общественото пространство на Тасос. Посетителят, който се изкачвал от Агората към Хераклейона, задължително минавал пред този паметник, който служел като символ на сила, императорска власт и величие.

Арката имала обща дължина 16,85 метра, дълбочина 2,06 метра и се изчислява, че достигала приблизително 9,80 метра височина. Тя била прилепена към голяма стена, вероятно част от оградата на Хераклейона. Състояла се от три сводести отвора: един голям централен свод и два по-малки странични — разположение, характерно за големите римски триумфални арки. Сводовете се поддържали от четири големи основи и монолитни пиластри от тасоски мрамор.

Арката била богато украсена. Над сводовете се издигал антаблемент, включващ архитрав с три пояса, фриз, украсен с орнаменти, и мраморен корниз. На върха вероятно е имало статуи на император Каракала или обожествени представители на династията на Северите.

Най-важният елемент на паметника е големият надпис, открит върху архитрава на централната арка. Надписът бил посветен на император Каракала и споменавал официалните му титли: „Parthicus Maximus", „Britannicus Maximus", „Germanicus Maximus" — титли, получени след военните му походи. Същевременно се споменавали съпругата му Юлия Домна и обожественият му баща Септимий Север.

Надписът позволява точно датиране: Каракала получил титлата „Germanicus Maximus" на 6 октомври 213 г. сл. Хр., а бил убит на 8 април 217 г. сл. Хр., следователно надписът е изсечен между тези две дати. Въпреки това археолозите смятат, че самата арка може да е била по-стара и по-късно да е била приспособена в чест на императора.

Арката на Каракала не била просто декоративен паметник — тя била преди всичко политически и идеологически символ. Тасос, като богат град с важно пристанище и голямо производство на мрамор, поддържал тесни връзки с Рим. Издигането на толкова монументална арка доказвало икономическия просперитет на града и предаността на тасосците към императора.

Днес арката е запазена в лошо състояние — само основите и базите им са останали на мястото си. Въпреки това нейният облик е успял да бъде възстановен благодарение на около 200 архитектурни елемента и фрагменти, открити по време на археологическите разкопки. Тя остава един от най-значимите символи на римския Тасос и ценно свидетелство за историята на острова.`,
    mapX: 70, mapY: 58,    mapsUrl: "https://maps.app.goo.gl/LB5xLGDbtdhZzBWw8",
  },
  {
    id: 10, num: "10",
    title: "Ιερό Ηρακλέους", titleEn: "Sanctuary of Herakles",
    titleRo: "Sanctuarul lui Heracle",
    titleTr: "Herakles Kutsal Alanı",
    titleFr: "Le Sanctuaire d'Héraclès",
    titleIt: "Il Santuario di Eracle",
    titleBg: "Светилището на Херакъл",
    titleDe: "Heiligtum des Herakles",
    titleSr: "Svetilište Herakla",
    category: "Ιερό", categoryEn: "Sanctuary",
    categoryRo: "Sanctuar",
    categoryTr: "Kutsal Alan",
    categoryFr: "Sanctuaire",
    categoryIt: "Santuario",
    categoryBg: "Светилище",
    categoryDe: "Heiligtum",
    categorySr: "Svetilište",
    duration: "10 λεπτά", durationSec: 600,
    imageId: IMGS[3],
    description: "Το Ιερό του Ηρακλή στη Θάσο, γνωστό ως Ηράκλειον, αποτελούσε ένα από τα αρχαιότερα, σημαντικότερα και ιερότερα θρησκευτικά κέντρα του νησιού. Ήταν αφιερωμένο στον ημίθεο Ηρακλή, ο οποίος λατρευόταν όχι μόνο ως μυθικός ήρωας αλλά και ως προστάτης θεός της πόλης. Η λατρεία του συνδέθηκε βαθιά με την πολιτική, τη στρατιωτική δύναμη, την οικονομική ανάπτυξη και την καθημερινή ζωή της αρχαίας Θάσου. Ο Ηρακλής θεωρούνταν «Σωτήρ των Θασίων» και η μορφή του απεικονιζόταν στα αρχαία νομίσματα της Θάσου με την επιγραφή «ΗΡΑΚΛΕΟΥΣ ΣΩΤΗΡΟΣ ΘΑΣΙΩΝ».\n\nΟ ιστορικός Ηρόδοτος, που επισκέφθηκε τη Θάσο στις αρχές του 5ου αιώνα π.Χ., αναφέρει ότι η λατρεία του Ηρακλή στη Θάσο έμοιαζε με εκείνη του Ηρακλή-Μελκάρτ της φοινικικής πόλης της Τύρου. Με αυτόν τον τρόπο επιχειρούσε να συνδέσει μυθολογικά τη Θάσο με τους Φοίνικες αποίκους που είχαν φτάσει στο νησί αναζητώντας την Ευρώπη, την αδελφή του πρίγκιπα Φοίνικα. Η παράδοση αυτή αποκαλύπτει τη στενή σχέση της Θάσου με τον φοινικικό κόσμο και δείχνει ότι η λατρεία πιθανόν να είχε πολύ αρχαίες ρίζες.\n\nΚαι ο μεγάλος ιατρός Ιπποκράτης αναφέρεται στο Ιερό κατά τη διετή παραμονή του στη Θάσο. Στο έργο του «Περί Επιδημιών» σημειώνει ότι κοντά στο ιερό περιέθαλψε ασθενείς, αποδεικνύοντας πως ο χώρος αποτελούσε σημαντικό σημείο αναφοράς για την πόλη.\n\nΟ μυθογράφος Απολλόδωρος αναφέρει ότι ο Ηρακλής, επιστρέφοντας από τη χώρα των Αμαζόνων, κατέλαβε τη Θάσο και παρέδωσε τη διοίκησή της στους Αλκαίο και Σθένελο, εγγονούς του βασιλιά Μίνωα. Η αφήγηση αυτή δείχνει πόσο στενά είχε συνδεθεί ο Ηρακλής με τη μυθική ιστορία και την ταυτότητα της Θάσου.\n\nΟ Ηρακλής ήταν ιδιαίτερα αγαπητός στους εργάτες, στους λατόμους και στους μεταλλωρύχους, επειδή θεωρούνταν θεός της δύναμης και της σκληρής εργασίας. Η Θάσος ήταν γνωστή για τα περίφημα λατομεία λευκού μαρμάρου, τα μεταλλεία χρυσού και τα ορυχεία αργύρου, γι' αυτό λατρευόταν ως προστάτης ανθρώπων που εργάζονταν σε δύσκολες συνθήκες.\n\nΣτο Ιερό πραγματοποιούνταν τα περίφημα Ηράκλεια — μεγάλες γιορτές με θυσίες, αγώνες, πολεμικούς διαγωνισμούς και συμπόσια. Ωστόσο, στις γυναίκες δεν επιτρεπόταν η είσοδος στον ναό ούτε η συμμετοχή στις θυσίες, κάτι που δείχνει τον αυστηρά ανδρικό χαρακτήρα της λατρείας.\n\nΚατά τη διάρκεια του Πελοποννησιακού Πολέμου συνέβη ένα από τα πιο τραγικά γεγονότα της ιστορίας της Θάσου. Το 404 π.Χ. ο Σπαρτιάτης ναύαρχος Λύσανδρος συγκέντρωσε στο Ιερό του Ηρακλή τους Θασίους που υποστήριζαν τους Αθηναίους, υποσχόμενος ότι δεν θα πάθουν κακό. Οι άνθρωποι πίστεψαν στον λόγο του και συγκεντρώθηκαν άοπλοι, όμως ο Λύσανδρος αθέτησε την υπόσχεσή του και τους έσφαξε μέσα στον ιερό χώρο — πράξη που ο Πολύαινος χαρακτήρισε πολιτική εξαπάτηση και ιεροσυλία.\n\nΣτη βόρεια πλευρά της πλατείας βρισκόταν ο μεγάλος ναός, κτισμένος πάνω σε τεχνητό άνδηρο. Τον 5ο αιώνα π.Χ. υπήρχε μικρός μονόχωρος ναός διαστάσεων 9×12 μέτρων με ιωνική διακόσμηση. Κατά την ελληνιστική εποχή επεκτάθηκε σε 20×23 μέτρα, με στοές, 6 ιωνικούς κίονες στην πρόσοψη και 8 στις πλευρές. Κατά τη ρωμαϊκή εποχή, στο ίδιο ιερό λατρεύτηκε και ο αυτοκράτορας Αύγουστος, δείγμα της μετάβασης από τον ελληνικό στον ρωμαϊκό κόσμο. Το Ιερό βρίσκεται σήμερα στο κέντρο του Λιμένα, δίπλα από το Δημαρχείο, αποτελώντας έναν από τους σημαντικότερους αρχαιολογικούς χώρους του νησιού.",
    descriptionEn: "The Sanctuary of Herakles (Herakleion) was one of the oldest and most sacred religious centres. Herakles was worshipped here as the divine Saviour of the Thassians.",
    descriptionRo: `Sanctuarul lui Heracle din Thasos, cunoscut sub numele de Heracleion, reprezenta unul dintre cele mai vechi, importante și sacre centre religioase ale insulei. Era dedicat semizeului Heracle, care era venerat nu doar ca erou mitologic, ci și ca zeu protector al orașului thasienilor. Cultul său era strâns legat de politica, puterea militară, dezvoltarea economică și viața cotidiană a Thasosului antic.

Heracle era considerat „Soter al thasienilor", adică protectorul și salvatorul poporului. Din acest motiv, imaginea sa apărea frecvent pe monedele antice ale Thasosului, însoțită de inscripția:

„ΗΡΑΚΛΕΟΥΣ ΣΩΤΗΡΟΣ ΘΑΣΙΩΝ"

Acest fapt demonstrează importanța sa deosebită pentru oraș.

Cultul lui Heracle și fenicienii

Istoricul Herodot, care a vizitat Thasos la începutul secolului al V-lea î.Hr., menționează că cultul lui Heracle din Thasos semăna cu cel al lui Heracle-Melqart din orașul fenician Tyr. În acest fel, el încerca să lege mitologic Thasosul de coloniștii fenicieni care ajunseseră pe insulă în căutarea Europei, sora prințului Phoenix, fiul lui Agenor.

Această tradiție dezvăluie legătura strânsă a Thasosului cu lumea feniciană și arată că venerarea lui Heracle ar putea avea rădăcini foarte vechi, încă dinaintea perioadei de înflorire a coloniei grecești.

Hipocrate și sanctuarul

Și marele medic Hipocrate menționează sanctuarul lui Heracle în timpul șederii sale de doi ani în Thasos. În lucrarea sa „Despre epidemii", el notează că a tratat bolnavi în apropierea sanctuarului, fapt ce demonstrează că locul constituia un important punct de referință pentru oraș.

Heracle și mitologia Thasosului

Mitograful Apollodor relatează că Heracle, întorcându-se din țara amazoanelor după ce obținuse centura Hipolitei, a cucerit Thasosul. Ulterior, el a încredințat conducerea insulei lui Alcaios și Sthenelos, nepoții regelui Minos, pe care îi luase ostatici din Paros.

Această povestire arată cât de strâns era legat Heracle de istoria mitică și identitatea Thasosului.

Protectorul muncitorilor și al minerilor

Heracle era deosebit de iubit de muncitori, cioplitori în piatră și mineri, deoarece era considerat zeul forței și al muncii grele.

Thasosul era cunoscut în antichitate pentru:
• faimoasele cariere de marmură albă,
• minele de aur,
• și minele de argint.

De aceea, Heracle era venerat ca protector al oamenilor care lucrau în condiții dificile și periculoase.

Heracleele

În sanctuar aveau loc faimoasele Heraclee, marile sărbători dedicate zeului. Aceste festivități includeau:
• sacrificii,
• competiții,
• concursuri militare,
• și mari ospețe.

Aceste sărbători reprezentau un important eveniment social și religios pentru întreaga insulă Thasos.

Totuși, femeilor nu le era permis accesul în templu și nici participarea la sacrificii, ceea ce arată caracterul special și strict masculin al cultului lui Heracle.

Masacrul lui Lysandros

În timpul Războiului Peloponesiac a avut loc unul dintre cele mai tragice evenimente din istoria Thasosului.

În anul 404 î.Hr., amiralul spartan Lysandros i-a adunat în Sanctuarul lui Heracle pe thasienii care susțineau Atena. El le-a promis că nu vor păți nimic rău, invocând chiar caracterul sacru al locului și protecția zeului ancestral.

Oamenii au avut încredere în cuvântul său și s-au adunat neînarmați în sanctuar. Însă Lysandros și-a încălcat promisiunea și i-a măcelărit în interiorul spațiului sacru.

Scriitorul Polyaenos descrie acest eveniment în „Strategemata", caracterizându-l drept un act de înșelăciune politică și sacrilegiu.

Locația sanctuarului

Sanctuarul lui Heracle se află în actualul Limenas din Thasos, chiar lângă Primărie, în centrul orașului. Reprezintă unul dintre cele mai importante situri arheologice ale insulei și mărturisește puterea și prosperitatea Thasosului antic.

Marele templu

Pe partea nordică a pieței se afla marele templu al lui Heracle, construit pe o terasă artificială.

Templul original

În secolul al V-lea î.Hr. exista un mic templu cu o singură încăpere, având aproximativ:
• 9 metri × 12 metri.

În jurul său exista un spațiu pavat, iar intrarea avea decor ionic.

Templul elenistic

În perioada elenistică, templul a fost extins considerabil și a dobândit un aspect monumental.

Noul templu:
• avea dimensiuni de aproximativ 20 × 23 metri,
• era înconjurat de porticuri,
• avea 6 coloane ionice în fațadă,
• și 8 coloane pe laturi.

Bazele uriașe ale coloanelor mărturisesc dimensiunea impresionantă și luxul construcției.

Cultul lui Augustus

În perioada romană, în același sanctuar a fost venerat și primul împărat roman, Augustus.

Augustus, cunoscut și ca Gaius Iulius Caesar Octavianus Augustus, a condus Imperiul Roman între 27 î.Hr. și 14 d.Hr. Cultul său în cadrul sanctuarului arată trecerea Thasosului din lumea greacă în cea romană și legătura dintre puterea imperială și vechile culte locale.`,
    descriptionTr: `Thasosluların Kurtarıcısı Herakles'in Kutsal Alanı

Thasos'taki Herakles Kutsal Alanı, yani Herakleion, adanın en eski ve en kutsal dini merkezlerinden biriydi. Yarı tanrı Herakles'e adanmıştı ve o yalnızca mitolojik bir kahraman değil, aynı zamanda kentin koruyucu tanrısı olarak görülüyordu.

Herakles "Thasosluların Kurtarıcısı" olarak kabul edilirdi. Bu nedenle figürü sık sık antik sikkelerde şu yazıyla birlikte tasvir edilirdi:

"THASOSLULARIN KURTARICISI HERAKLES"

Fenikeliler ve Herakles

Tarihçi Herodotos, Thasos'taki Herakles kültünün Fenike'nin Sur kentindeki Melkart-Herakles kültüne benzediğini belirtmiştir. Bu gelenek, Thasos'un Fenikeli kolonilerle olan bağını göstermektedir.

Hipokrat ve Kutsal Alan

Ünlü hekim Hipokrat da Thasos'ta kaldığı dönemde Herakles Kutsal Alanı'ndan söz eder. "Epidemiler Üzerine" adlı eserinde burada hastaları tedavi ettiğini belirtmektedir.

İşçilerin ve Madencilerin Koruyucusu

Herakles, gücün ve ağır çalışmanın tanrısı sayıldığı için özellikle işçiler, taş ustaları ve madenciler tarafından saygı görüyordu.

Thasos antik çağda:
• beyaz mermer ocakları,
• altın madenleri,
• gümüş ocaklarıyla ünlüydü.

Herakleia Şenlikleri

Kutsal alanda Herakleia adı verilen büyük festivaller düzenlenirdi. Bu törenlerde:

• kurbanlar sunulur,
• yarışmalar yapılır,
• savaş oyunları düzenlenir,
• büyük şölenler gerçekleştirilirdi.

Lysandros Katliamı

Peloponnesos Savaşı sırasında M.Ö. 404 yılında Spartalı komutan Lysandros, Atina yanlısı Thasosluları Herakles Tapınağı'nda topladı ve onlara zarar verilmeyeceğine söz verdi. Ancak daha sonra onları kutsal alan içinde katletti. Bu olay tarihçi Polyainos tarafından büyük bir ihanet ve kutsal saygısızlık olarak anlatılır.

Tapınağın Konumu

Herakles Kutsal Alanı bugün Thasos Limenas bölgesinde, belediye binasının yanında yer almaktadır ve adanın en önemli arkeolojik alanlarından biridir.

Büyük Tapınak

M.Ö. 5. yüzyılda burada yaklaşık 9 × 12 metre ölçülerinde küçük bir tapınak bulunuyordu.

Helenistik dönemde ise yapı genişletildi:
• yaklaşık 20 × 23 metre boyutlarına ulaştı,
• sütunlu galerilerle çevrildi,
• ön cephede 6 İyon sütunu,
• yanlarda 8 sütun bulunuyordu.

Augustus Kültü

Roma döneminde burada ilk Roma imparatoru Augustus'a da tapınılmıştır. Bu durum Thasos'un Yunan dünyasından Roma dünyasına geçişini göstermektedir.`,
    descriptionFr: `Le Sanctuaire d'Héraclès Sauveur des Thasiens

Le sanctuaire d'Héraclès à Thasos, connu sous le nom d'Héracleion, constituait l'un des centres religieux les plus anciens, les plus importants et les plus sacrés de l'île. Il était dédié au demi-dieu Héraclès, qui était honoré non seulement comme héros mythologique mais aussi comme dieu protecteur de la cité des Thasiens. Son culte était profondément lié à la politique, à la puissance militaire, au développement économique et à la vie quotidienne de la Thasos antique.

Héraclès était considéré comme le « Sauveur des Thasiens », c'est-à-dire le protecteur et le sauveur du peuple. C'est pourquoi son image apparaissait fréquemment sur les monnaies antiques de Thasos avec l'inscription :

« HÉRACLÈS SAUVEUR DES THASIENS »

ce qui démontre son immense importance pour la cité.

Le culte d'Héraclès et les Phéniciens

L'historien Hérodote, qui visita Thasos au début du Ve siècle av. J.-C., mentionne que le culte d'Héraclès à Thasos ressemblait à celui d'Héraclès-Melkart de la ville phénicienne de Tyr. De cette manière, il cherchait à relier mythologiquement Thasos aux colons phéniciens arrivés sur l'île à la recherche d'Europe, la sœur du prince phénicien, fils d'Agénor.

Cette tradition révèle les liens étroits entre Thasos et le monde phénicien et montre que le culte d'Héraclès avait probablement des origines très anciennes, avant même l'essor de la colonie grecque.

Hippocrate et le Sanctuaire

Le grand médecin Hippocrate mentionne également le sanctuaire d'Héraclès pendant son séjour de deux ans à Thasos. Dans son œuvre « Des Épidémies », il note qu'il soignait des malades près du sanctuaire, preuve que cet endroit constituait un point de référence important pour la ville.

Héraclès et la mythologie de Thasos

Le mythographe Apollodore raconte qu'Héraclès, revenant du pays des Amazones après avoir obtenu la ceinture d'Hippolyte, conquit Thasos. Il confia ensuite l'administration de l'île à Alcée et Sthénélos, petits-fils du roi Minos, qu'il avait emmenés comme otages depuis Paros.

Ce récit montre à quel point Héraclès était étroitement lié à l'histoire mythique et à l'identité de Thasos.

Protecteur des ouvriers et des carriers

Héraclès était particulièrement apprécié des ouvriers, des carriers et des mineurs, car il était considéré comme le dieu de la force et du travail difficile.

Dans l'Antiquité, Thasos était célèbre pour :
• ses célèbres carrières de marbre blanc,
• ses mines d'or,
• et ses mines d'argent.

C'est pourquoi Héraclès était vénéré comme le protecteur des travailleurs exerçant dans des conditions difficiles et dangereuses.

Les Héracléia

Dans le sanctuaire se déroulaient les célèbres Héracléia, les grandes fêtes en l'honneur du dieu. Ces célébrations comprenaient :
• des sacrifices,
• des compétitions,
• des concours guerriers,
• et de grands banquets.

Ces fêtes représentaient un événement religieux et social majeur pour toute l'île de Thasos.

Cependant, les femmes n'étaient pas autorisées à entrer dans le temple ni à participer aux sacrifices, ce qui montre le caractère particulier et strictement masculin du culte d'Héraclès.

Le massacre de Lysandre

Pendant la guerre du Péloponnèse, l'un des événements les plus tragiques de l'histoire de Thasos eut lieu.

En 404 av. J.-C., le commandant spartiate Lysandre rassembla dans le sanctuaire d'Héraclès les Thasiens favorables aux Athéniens. Il leur promit qu'aucun mal ne leur serait fait, invoquant même le caractère sacré du lieu et la protection du dieu ancestral.

Les habitants le crurent et se réunirent sans armes dans le sanctuaire. Pourtant, Lysandre trahit sa promesse et les massacra à l'intérieur même du lieu sacré.

L'écrivain Polyen décrit cet événement dans ses « Stratagèmes », le qualifiant d'acte de tromperie politique et de sacrilège.

L'emplacement du sanctuaire

Le sanctuaire d'Héraclès se situe aujourd'hui dans la ville actuelle de Liménas à Thasos, juste à côté de la mairie, au centre de la ville. Il constitue l'un des sites archéologiques les plus importants de l'île et témoigne de la puissance et de la prospérité de la Thasos antique.

Le grand temple

Sur le côté nord de la place se trouvait le grand temple d'Héraclès, construit sur une terrasse artificielle.

Le temple archaïque

Au Ve siècle av. J.-C., il existait un petit temple à salle unique mesurant environ :
• 9 mètres × 12 mètres.

Autour du bâtiment se trouvait un espace pavé, tandis que l'entrée possédait une décoration ionique.

Le temple hellénistique

À l'époque hellénistique, le temple fut considérablement agrandi et prit une forme monumentale.

Le nouveau temple :
• mesurait environ 20 × 23 mètres,
• était entouré de portiques,
• possédait 6 colonnes ioniques sur la façade,
• et 8 colonnes sur les côtés.

Les énormes bases des colonnes témoignent de la grandeur et du luxe de l'édifice.

Le culte d'Auguste

À l'époque romaine, le premier empereur romain Auguste fut également honoré dans ce sanctuaire.

Auguste, connu aussi sous le nom de Gaius Julius Caesar Octavianus Augustus, gouverna l'Empire romain de 27 av. J.-C. à 14 apr. J.-C. Son culte à l'intérieur du sanctuaire montre la transition de Thasos du monde grec vers le monde romain ainsi que l'association du pouvoir impérial avec les anciennes traditions religieuses locales.`,
    descriptionIt: `Il Santuario di Eracle Salvatore dei Thasii

Il Santuario di Eracle a Thasos, conosciuto come Herakleion, costituiva uno dei centri religiosi più antichi, importanti e sacri dell'isola. Era dedicato al semidio Eracle, venerato non solo come eroe mitologico ma anche come divinità protettrice della città dei Thasii. Il suo culto era profondamente legato alla politica, alla forza militare, allo sviluppo economico e alla vita quotidiana dell'antica Thasos.

Eracle era considerato il «Salvatore dei Thasii», cioè il protettore e il salvatore del popolo. Per questo motivo la sua figura appariva spesso sulle antiche monete di Thasos con l'iscrizione:

«ERACLE SALVATORE DEI THASII»

a dimostrazione della sua enorme importanza per la città.

Il culto di Eracle e i Fenici

Lo storico Erodoto, che visitò Thasos agli inizi del V secolo a.C., riferisce che il culto di Eracle a Thasos assomigliava a quello di Eracle-Melqart della città fenicia di Tiro. In questo modo cercava di collegare mitologicamente Thasos ai coloni fenici che erano giunti sull'isola alla ricerca di Europa, sorella del principe fenicio figlio di Agenore.

Questa tradizione rivela gli stretti legami tra Thasos e il mondo fenicio e mostra che il culto di Eracle probabilmente aveva origini molto antiche, precedenti persino allo sviluppo della colonia greca.

Ippocrate e il Santuario

Anche il grande medico Ippocrate menziona il Santuario di Eracle durante il suo soggiorno di due anni a Thasos. Nella sua opera «Sulle Epidemie» annota di aver curato malati vicino al santuario, dimostrando che il luogo costituiva un importante punto di riferimento per la città.

Eracle e la mitologia di Thasos

Il mitografo Apollodoro racconta che Eracle, tornando dal paese delle Amazzoni dopo aver ottenuto la cintura di Ippolita, conquistò Thasos. Successivamente affidò il governo dell'isola ad Alcéo e Stenelo, nipoti del re Minosse, che aveva preso in ostaggio da Paro.

Questo racconto mostra quanto strettamente Eracle fosse legato alla storia mitica e all'identità di Thasos.

Protettore degli operai e dei cavatori

Eracle era particolarmente amato dagli operai, dai cavatori e dai minatori, poiché era considerato il dio della forza e del duro lavoro.

Thasos era famosa nell'antichità per:
• le celebri cave di marmo bianco,
• le miniere d'oro,
• e le miniere d'argento.

Per questo motivo Eracle veniva venerato come protettore delle persone che lavoravano in condizioni difficili e pericolose.

Le Eraclee

Nel santuario si celebravano le famose Eraclee, grandi festività in onore del dio. Le celebrazioni comprendevano:
• sacrifici,
• gare,
• competizioni militari,
• e grandi banchetti.

Queste feste costituivano un importante evento sociale e religioso per tutta Thasos.

Tuttavia, alle donne non era consentito entrare nel tempio né partecipare ai sacrifici, elemento che mostra il carattere particolare e strettamente maschile del culto di Eracle.

Il massacro di Lisandro

Durante la Guerra del Peloponneso avvenne uno degli episodi più tragici della storia di Thasos.

Nel 404 a.C. il comandante spartano Lisandro radunò nel Santuario di Eracle i Thasii favorevoli agli Ateniesi. Promise loro che non avrebbero subito alcun male, invocando persino la sacralità del luogo e la protezione del dio ancestrale.

Gli uomini credettero alle sue parole e si riunirono disarmati all'interno del santuario. Tuttavia Lisandro tradì la promessa e li massacrò all'interno stesso dello spazio sacro.

Lo scrittore Polieno descrive l'episodio nei suoi «Strategemata», definendolo un atto di inganno politico e sacrilegio.

La posizione del santuario

Il Santuario di Eracle si trova oggi nell'attuale Limenas di Thasos, proprio accanto al Municipio, nel centro della città. Costituisce uno dei più importanti siti archeologici dell'isola e testimonia la potenza e la prosperità dell'antica Thasos.

Il grande tempio

Sul lato nord della piazza si trovava il grande tempio di Eracle, costruito sopra una terrazza artificiale.

Il tempio originario

Nel V secolo a.C. esisteva un piccolo tempio a navata unica di circa:
• 9 metri × 12 metri.

Intorno vi era uno spazio pavimentato, mentre l'ingresso presentava decorazioni ioniche.

Il tempio ellenistico

Durante l'epoca ellenistica il tempio fu notevolmente ampliato e assunse una forma monumentale.

Il nuovo tempio:
• misurava circa 20 × 23 metri,
• era circondato da portici,
• possedeva 6 colonne ioniche sulla facciata,
• e 8 colonne sui lati.

Le enormi basi delle colonne testimoniano la grandiosità e il lusso dell'edificio.

Il culto di Augusto

Durante l'epoca romana, nello stesso santuario fu venerato anche il primo imperatore romano Augusto.

Augusto, conosciuto anche come Gaius Iulius Caesar Octavianus Augustus, governò l'Impero Romano dal 27 a.C. al 14 d.C. Il suo culto all'interno del santuario mostra il passaggio di Thasos dal mondo greco a quello romano e il collegamento del potere imperiale con gli antichi culti locali.`,
    descriptionBg: `Светилището на Херакъл в Тасос, известно като Хераклейон, било едно от най-древните, най-значимите и най-свещени религиозни средища на острова. То било посветено на полубога Херакъл, който бил почитан не само като митичен герой, но и като покровител на града. Неговият култ бил дълбоко свързан с политиката, военната мощ, икономическото развитие и ежедневния живот на древния Тасос. Херакъл бил смятан за „Спасител на тасосците", а образът му бил изобразяван върху древните монети на Тасос с надписа: „ΗΡΑΚΛΕΟΥΣ ΣΩΤΗΡΟΣ ΘΑΣΙΩΝ".

Историкът Херодот, който посетил Тасос в началото на V век пр. Хр., споменава, че култът към Херакъл в Тасос приличал на този към Херакъл-Мелкарт от финикийския град Тир. По този начин той се опитвал митологично да свърже Тасос с финикийските колонисти, които пристигнали на острова в търсене на Европа, сестрата на принц Финикс. Това предание разкрива тесните връзки на Тасос с финикийския свят и показва, че култът вероятно има много древни корени.

Великият лекар Хипократ също споменава Светилището по време на двугодишния си престой в Тасос. В труда си „За епидемиите" той отбелязва, че лекувал болни близо до светилището, доказвайки, че мястото било важна отправна точка за града.

Митографът Аполодор разказва, че Херакъл, връщайки се от страната на амазонките, завладял Тасос и предал управлението му на Алкей и Стенел, внуци на цар Минос. Този разказ показва колко тясно бил свързан Херакъл с митичната история и идентичността на Тасос.

Херакъл бил особено почитан от работниците, каменоделците и миньорите, защото се смятал за бог на силата и тежкия труд. Тасос бил известен със своите прочути кариери за бял мрамор, златни мини и сребърни рудници, затова Херакъл бил почитан като покровител на хората, работещи при тежки условия.

В Светилището се провеждали прочутите Хераклеи — големи празници с жертвоприношения, състезания, военни игри и пиршества. Въпреки това на жените не било позволено да влизат в храма или да участват в жертвоприношенията, което показва строго мъжкия характер на култа.

По време на Пелопонеска война се случило едно от най-трагичните събития в историята на Тасос. През 404 г. пр. Хр. спартанският военачалник Лизандър събрал в Светилището на Херакъл тасосците, които подкрепяли атиняните, обещавайки им, че няма да пострадат. Хората му повярвали и се събрали невъоръжени, но Лизандър нарушил обещанието си и ги избил в самото свещено пространство — действие, което Полиен определя като политическа измама и светотатство.

От северната страна на площада се намирал големият храм, построен върху изкуствена тераса. През V век пр. Хр. там съществувал малък еднокорабен храм с размери 9×12 метра и йонийска украса. По време на елинистическата епоха той бил разширен до 20×23 метра, със стои, 6 йонийски колони на фасадата и 8 отстрани. През римската епоха в същото светилище бил почитан и император Август — знак за прехода от гръцкия към римския свят.

Днес Светилището се намира в центъра на Лименас, до кметството, и представлява един от най-важните археологически обекти на острова.`,
    mapX: 62, mapY: 60,    mapsUrl: "https://maps.app.goo.gl/czMpW5o5KVMLwxEY8",
    localImages: [stop10img1, stop10img2, stop10img3, stop10img4],
  },
  {
    id: 11, num: "11",
    title: "Ιερό Αγοραίου Διός", titleEn: "Sanctuary of Agoraios Zeus",
    titleDe: "Heiligtum des Agoraios Zeus",
    titleRo: "Sanctuarul lui Zeus Agoraios",
    titleTr: "Agoraios Zeus Kutsal Alanı",
    titleFr: "Le Sanctuaire de Zeus Agoraios",
    titleBg: "Светилище на Агорайос Зевс",
    titleSr: "Svetilište Agoraios Zeusa",
    titleIt: "Santuario di Zeus Agoraios",
    category: "Ιερό", categoryEn: "Sanctuary",
    categoryDe: "Heiligtum",
    categoryRo: "Sanctuar",
    categoryTr: "Kutsal Alan",
    categoryFr: "Sanctuaire",
    categoryBg: "Светилище",
    categorySr: "Svetilište",
    categoryIt: "Santuario",
    duration: "7 λεπτά", durationSec: 420,
    imageId: IMGS[6],
    description: "Στην αρχαία Αγορά της Θάσος, στη βόρεια γωνία της και μπροστά από το Βουλευτήριο, βρισκόταν το Τέμενος του Ιερού του Αγοραίου Διός των Θασίων, ενός από τα σημαντικότερα ιερά της δημόσιας ζωής της πόλης. Ο Δίας λατρευόταν εδώ ως «Αγοραίος», δηλαδή προστάτης της Αγοράς, της δικαιοσύνης, του λόγου, των συναλλαγών και της πολιτικής τάξης.\n\nΓύρω από το τέμενος υπήρχε χαμηλή λίθινη περίφραξη, περίπου μέχρι το ύψος της μέσης, η οποία όριζε τον ιερό χώρο. Η πρόσβαση γινόταν από δύο ανοίγματα: ένα στη δυτική πλευρά και ένα στη βορειοανατολική. Σε έναν από τους πεσσούς βρέθηκε επιγραφή που αναφέρει ξεκάθαρα το όνομα του ιερού: «Διός Αγοραίου Θασίου», γεγονός που βοήθησε τους αρχαιολόγους να ταυτίσουν με βεβαιότητα τον ναό.\n\nΟ ναός ήταν μικρός αλλά ιδιαίτερα σημαντικός. Είχε διαστάσεις περίπου 11,65 × 6,10 μέτρα και αποτελούνταν από έναν απλό σηκό με πρόναο. Το οικοδόμημα ήταν στραμμένο προς τα νοτιοανατολικά, εκεί όπου βρισκόταν ένας βωμός του 4ου αιώνα π.Χ., στον οποίο τελούνταν οι θυσίες και οι τελετουργίες προς τιμήν του θεού.\n\nΚατά τον 3ο και 2ο αιώνα π.Χ. διαμορφώθηκε στην ανατολική γωνία του ιερού ένας μεγάλος κυκλικός υπαίθριος περίβολος, στο εσωτερικό του οποίου υπήρχε ακόμη ένας ορθογώνιος βωμός. Το γεγονός αυτό δείχνει ότι το ιερό συνέχισε να χρησιμοποιείται και να επεκτείνεται για πολλούς αιώνες.\n\nΓια τους αρχαίους Θασίους η Αγορά δεν ήταν απλώς ένας χώρος εμπορίου. Ήταν το διοικητικό, οικονομικό, κοινωνικό και πνευματικό κέντρο της πόλης. Εκεί πραγματοποιούνταν οι εμπορικές συναλλαγές, οι πολιτικές συζητήσεις, οι δημόσιοι λόγοι και οι συγκεντρώσεις των πολιτών. Η ίδια η λέξη «αγορά» προέρχεται από το αρχαίο ρήμα «αγορεύω», που σημαίνει μιλώ δημόσια, εκφωνώ λόγο, συμβουλεύω ή ανακοινώνω.\n\nΜπροστά από τον ναό υπήρχε βωμός με λίθινη τράπεζα της κλασικής εποχής, όπου οι πιστοί τελούσαν θυσίες πριν συμμετάσχουν στις διαδικασίες της αγοράς ή πριν ορκιστούν ενώπιον του Δία ότι θα τηρούν τους νόμους, τις συμφωνίες και τις αρχές του δημόσιου λόγου.\n\nΟι θυσίες αποτελούσαν σημαντικό μέρος της αρχαίας λατρείας. Οι πιστοί προσέφεραν ζώα όπως χοίρους, κατσίκια, πρόβατα ή μοσχάρια. Από τα ζώα αυτά αφιερώνονταν στους θεούς τα σπλάχνα και τα οστά, τα οποία καίγονταν πάνω στον βωμό. Ο καπνός και η μυρωδιά της θυσίας θεωρούνταν ότι ανέβαιναν προς τον ουρανό, φτάνοντας στους θεούς και ευχαριστώντας τους. Για τον λόγο αυτό οι βωμοί βρίσκονταν πάντοτε έξω από τους ναούς.\n\nΟι άνθρωποι που συμμετείχαν στη θυσία δεν κατανάλωναν τα αφιερωμένα μέρη του ζώου — αυτά ανήκαν αποκλειστικά στους θεούς. Το υπόλοιπο κρέας το έτρωγαν οι ίδιοι οι πιστοί σε κοινό γεύμα, που είχε χαρακτήρα θρησκευτικό αλλά και κοινωνικό. Η συνήθεια αυτή θυμίζει σε κάποιο βαθμό τα σημερινά κουρμπάνια ή τα κοινά γεύματα μετά από μεγάλες θρησκευτικές γιορτές, όπου οι άνθρωποι συγκεντρώνονται, τρώνε μαζί και τιμούν την πίστη και την κοινότητά τους.",
    descriptionEn: "At the north corner of the ancient Agora stood the temenos of Agoraios Zeus, protector of trade and guarantor of just dealings in the marketplace.",
    descriptionDe: `In der antiken Agora von Thasos, an ihrer nördlichen Ecke und vor dem Bouleuterion, befand sich das Temenos des Heiligtums des Agoraios Zeus der Thasier – eines der bedeutendsten Heiligtümer des öffentlichen Lebens der Stadt. Zeus wurde hier als „Agoraios" verehrt, also als Schutzgott der Agora, der Gerechtigkeit, der Rede, des Handels und der politischen Ordnung.

Rund um das Heiligtum verlief eine niedrige steinerne Umfriedung, etwa bis Hüfthöhe, die den heiligen Bereich abgrenzte. Der Zugang erfolgte durch zwei Öffnungen: eine an der Westseite und eine an der nordöstlichen Seite. Auf einem der Pfeiler der Einfriedung fand man eine Inschrift mit dem Namen des Heiligtums:

„Διός Αγοραίου Θασίου"

Diese Inschrift half den Archäologen, den Tempel eindeutig zu identifizieren.

Der Tempel war klein, aber von großer Bedeutung. Er maß etwa 11,65 × 6,10 Meter und bestand aus einer einfachen Cella mit Pronaos. Das Gebäude war nach Südosten ausgerichtet, wo sich ein Altar aus dem 4. Jahrhundert v. Chr. befand, an dem Opfer und Rituale zu Ehren des Gottes durchgeführt wurden.

Im 3. und 2. Jahrhundert v. Chr. entstand an der östlichen Ecke des Heiligtums ein großer kreisförmiger offener Bezirk, in dessen Innerem sich ein weiterer rechteckiger Altar befand. Dies zeigt, dass das Heiligtum über viele Jahrhunderte hinweg genutzt und erweitert wurde und ein lebendiges Zentrum des religiösen und politischen Lebens der Stadt blieb.

Für die antiken Thasier war die Agora nicht nur ein Handelsplatz. Sie war das administrative, wirtschaftliche, gesellschaftliche und geistige Zentrum der Stadt. Dort fanden Handelsgeschäfte, politische Diskussionen, öffentliche Reden und Versammlungen der Bürger statt. Das Wort „Agora" stammt vom altgriechischen Verb „agoreuo", was bedeutet: öffentlich sprechen, eine Rede halten, beraten oder verkünden.

Vor dem Tempel befand sich ein Altar mit einem steinernen Opfertisch aus klassischer Zeit. Dort brachten die Gläubigen Opfer dar, bevor sie an den Geschäften der Agora teilnahmen oder vor Zeus schworen, die Gesetze, Vereinbarungen und Prinzipien des öffentlichen Lebens einzuhalten.

Die Opferhandlungen waren ein wesentlicher Bestandteil der antiken Religion. Die Gläubigen opferten Tiere wie Schweine, Ziegen, Schafe oder Rinder. Von diesen Tieren wurden die Eingeweide und Knochen den Göttern geweiht und auf dem Altar verbrannt. Der Rauch und der Duft des Opfers galten als Botschaft an die Götter im Himmel.

Deshalb befanden sich die Altäre stets außerhalb der Tempel und niemals im Inneren.

Die Teilnehmer des Opfers verzehrten die den Göttern geweihten Teile des Tieres nicht – diese gehörten ausschließlich den Göttern. Das übrige Fleisch wurde von den Gläubigen selbst bei einem gemeinsamen Mahl gegessen, das sowohl religiösen als auch gesellschaftlichen Charakter hatte.

Diese Tradition erinnert in gewisser Weise an heutige gemeinsame Festmahle oder religiöse Opferfeste, bei denen Menschen zusammenkommen, gemeinsam essen und ihren Glauben sowie ihre Gemeinschaft ehren.`,
    descriptionRo: `În Agora antică din Thasos, în colțul său nordic și în fața Bouleuterionului, se afla Temenosul Sanctuarului lui Zeus Agoraios al thasienilor, unul dintre cele mai importante sanctuare ale vieții publice ale orașului. Zeus era venerat aici ca „Agoraios", adică protector al Agorei, al dreptății, al discursului public, al comerțului și al ordinii politice.

În jurul sanctuarului exista o împrejmuire joasă din piatră, aproximativ până la înălțimea taliei, care delimita spațiul sacru. Accesul se făcea prin două deschideri: una pe latura vestică și una pe latura nord-estică. Pe unul dintre pilaștrii împrejmuirii a fost descoperită o inscripție care menționează clar numele sanctuarului:

„Διός Αγοραίου Θασίου"

Această inscripție i-a ajutat pe arheologi să identifice cu certitudine templul.

Templul era mic, dar foarte important. Avea dimensiuni de aproximativ 11,65 × 6,10 metri și era alcătuit dintr-o simplă cella cu pronaos. Clădirea era orientată spre sud-est, acolo unde se afla un altar din secolul al IV-lea î.Hr., pe care se desfășurau sacrificiile și ritualurile dedicate zeului.

În secolele III și II î.Hr., în colțul estic al sanctuarului a fost amenajat un mare peribol circular în aer liber, în interiorul căruia exista încă un altar dreptunghiular. Acest fapt arată că sanctuarul a continuat să fie folosit și extins timp de multe secole, rămânând un centru viu al vieții religioase și politice a orașului.

Pentru thasienii antici, Agora nu era doar un spațiu comercial. Ea reprezenta centrul administrativ, economic, social și spiritual al orașului. Acolo aveau loc tranzacțiile comerciale, dezbaterile politice, discursurile publice și adunările cetățenilor. Cuvântul „agora" provine din verbul grec antic „agoreuo", care înseamnă a vorbi în public, a ține un discurs, a sfătui sau a anunța.

În fața templului exista un altar cu o masă de piatră din perioada clasică, unde credincioșii aduceau sacrificii înainte de a participa la activitățile agorei sau înainte de a jura în fața lui Zeus că vor respecta legile, acordurile și principiile vieții publice.

Sacrificiile constituiau o parte esențială a religiei antice. Credincioșii ofereau animale precum porci, capre, oi sau vite. Din aceste animale, măruntaiele și oasele erau dedicate zeilor și arse pe altar. Fumul și mirosul sacrificiului erau considerate ca urcând spre cer și ajungând la zei.

Din acest motiv, altarele se aflau întotdeauna în exteriorul templelor și nu în interiorul lor.

Participanții la sacrificiu nu consumau părțile dedicate zeilor — acestea aparțineau exclusiv divinităților. Restul cărnii era mâncat de credincioși într-o masă comună, care avea atât caracter religios, cât și social.

Această tradiție amintește într-o anumită măsură de mesele comune sau de sărbătorile religioase de astăzi, unde oamenii se adună, mănâncă împreună și își onorează credința și comunitatea.`,
    descriptionTr: `Thasos Agoraios Zeus Kutsal Alanı

Antik Thasos Agorası'nın kuzey köşesinde, Bouleuterion'un önünde Agoraios Zeus Kutsal Alanı bulunuyordu. Zeus burada "Agoraios", yani pazar yerinin, adaletin, kamusal konuşmanın ve siyasi düzenin koruyucusu olarak tapınım görmekteydi.

Kutsal alanın çevresi alçak taş bir duvarla çevriliydi. Giriş iki açıklıktan sağlanıyordu. Duvarın bir payesinde şu yazıt bulunmuştur:

"Thasoslu Agoraios Zeus"

Bu yazıt sayesinde arkeologlar kutsal alanı kesin olarak tanımlayabilmiştir.

Tapınak küçük fakat önemliydi. Yaklaşık 11,65 × 6,10 metre boyutlarındaydı ve pronaoslu basit bir naostan oluşuyordu.

Agora, Thasoslular için yalnızca ticaret alanı değildi; aynı zamanda siyasi, sosyal ve kültürel yaşamın merkeziydi. İnsanlar burada ticaret yapar, konuşmalar gerçekleştirir ve kamusal toplantılar düzenlerdi.

Tapınağın önündeki sunakta insanlar:
• kurbanlar sunar,
• yasaları ve anlaşmaları koruyacaklarına Zeus adına yemin ederlerdi.

Kurban törenlerinde domuz, keçi, koyun ve dana gibi hayvanlar sunulurdu. Hayvanların iç organları ve kemikleri tanrılara adanır ve sunağın üzerinde yakılırdı. Geri kalan et ise törene katılanlar arasında ortak yemek olarak paylaşılırdı.

Bu gelenek, günümüzdeki bazı ortak dini yemek ve kurban geleneklerini hatırlatmaktadır.`,
    descriptionFr: `Sanctuaire de Zeus Agoraios des Thasiens

Dans l'Agora antique de Thasos, à son angle nord et devant le Bouleutérion, se trouvait le téménos du Sanctuaire de Zeus Agoraios des Thasiens, l'un des sanctuaires les plus importants de la vie publique de la cité. Zeus y était honoré sous l'épithète « Agoraios », c'est-à-dire protecteur de l'Agora, de la justice, de la parole publique, des échanges commerciaux et de l'ordre politique.

Autour du téménos s'élevait une basse clôture de pierre, d'environ la hauteur de la taille, qui délimitait l'espace sacré. L'accès se faisait par deux ouvertures : l'une à l'ouest et l'autre au nord-est. Sur l'un des piliers de la clôture fut découverte une inscription mentionnant clairement le nom du sanctuaire :

« Zeus Agoraios des Thasiens »

Cette inscription permit aux archéologues d'identifier le temple avec certitude.

Le temple était de petite taille mais d'une grande importance. Il mesurait environ 11,65 × 6,10 mètres et se composait d'un simple naos avec pronaos. L'édifice était orienté vers le sud-est, où se trouvait un autel datant du IVe siècle av. J.-C., sur lequel étaient accomplis les sacrifices et les rites en l'honneur du dieu.

Aux IIIe et IIe siècles av. J.-C., un grand enclos circulaire à ciel ouvert fut aménagé dans l'angle oriental du sanctuaire. À l'intérieur se trouvait encore un autel rectangulaire. Cela montre que le sanctuaire continua à être utilisé et agrandi pendant de nombreux siècles, demeurant un centre vivant de la vie religieuse et politique de la cité.

Pour les anciens Thasiens, l'Agora n'était pas seulement un lieu de commerce. Elle constituait le centre administratif, économique, social et intellectuel de la ville. C'est là qu'avaient lieu les échanges commerciaux, les discussions politiques, les discours publics et les assemblées citoyennes. Le mot « agora » provient d'ailleurs du verbe grec ancien « agoreuo », qui signifie parler en public, prononcer un discours, conseiller ou annoncer.

Devant le temple se trouvait un autel avec une table de pierre de l'époque classique, où les fidèles accomplissaient des sacrifices avant de participer aux activités de l'agora ou avant de prêter serment devant Zeus qu'ils respecteraient les lois, les accords et les principes de la parole publique.

Les sacrifices constituaient une part essentielle du culte antique. Les fidèles offraient des animaux tels que des porcs, des chèvres, des moutons ou des veaux. Les entrailles et les os étaient consacrés aux dieux et brûlés sur l'autel. La fumée et l'odeur du sacrifice étaient censées monter vers le ciel et parvenir aux dieux pour les honorer.

C'est pour cette raison que les autels se trouvaient toujours à l'extérieur des temples et non à l'intérieur.

Les participants au sacrifice ne consommaient pas les parties consacrées de l'animal, car celles-ci appartenaient exclusivement aux dieux. Le reste de la viande était partagé entre les fidèles lors d'un repas commun, ayant à la fois un caractère religieux et social.

Cette coutume rappelle, dans une certaine mesure, les repas communautaires et certaines traditions religieuses actuelles, où les gens se réunissent, mangent ensemble et honorent leur foi ainsi que leur communauté.`,
    descriptionBg: `В древната Агора на Тасос, в северния ѝ ъгъл и пред Булевтериона, се намирало Теменосът на Светилището на Агорайос Зевс на тасосците — едно от най-важните светилища в обществения живот на града. Тук Зевс бил почитан като „Агорайос", тоест покровител на Агората, справедливостта, словото, търговията и политическия ред.

Около теменоса имало ниска каменна ограда, висока приблизително до кръста, която очертавала свещеното пространство. Достъпът се осъществявал през два входа: един от западната страна и един от североизточната. Върху един от пилоните, тоест малките колони на оградата, бил открит надпис, който ясно споменава името на светилището:
„На Агорайос Зевс на тасосците", факт, който помогнал на археолозите със сигурност да идентифицират храма.

Храмът бил малък, но изключително важен. Размерите му били приблизително 11,65 × 6,10 метра и се състоял от прост наос с пронаос. Сградата била ориентирана към югоизток, където се намирал олтар от IV век пр. Хр., на който се извършвали жертвоприношения и ритуали в чест на бога.

През III и II век пр. Хр. в източния ъгъл на светилището бил оформен голям кръгъл открит ограден двор, в чийто център имало още един правоъгълен олтар. Това показва, че светилището продължило да се използва и разширява в продължение на много векове, оставайки жив център на религиозния и политически живот на града.

За древните тасосци Агората не била просто място за търговия. Тя била административният, икономическият, общественият и духовният център на града. Там се извършвали търговските сделки, политическите обсъждания, публичните речи и събранията на гражданите. Самата дума „агора" произлиза от древногръцкия глагол „агоревo", който означава говоря публично, произнасям реч, съветвам или обявявам.

Пред храма имало олтар с каменна маса от класическата епоха, където вярващите извършвали жертвоприношения, преди да участват в дейностите на агората или преди да се закълнат пред Зевс, че ще спазват законите, споразуменията и принципите на обществения ред и словото.

Жертвоприношенията били важна част от древния култ. Вярващите принасяли животни като прасета, кози, овце или телета. От тези животни вътрешностите и костите били посвещавани на боговете и изгаряни върху олтара. Смятало се, че димът и ароматът на жертвата се издигат към небето, достигат до боговете и ги удовлетворяват. Поради тази причина олтарите винаги се намирали извън храмовете, а не вътре в тях.

Хората, които участвали в жертвоприношението, не консумирали посветените части на животното — те принадлежали изцяло на боговете. Останалото месо било изяждано от самите вярващи по време на общо угощение с религиозен и обществен характер. Този обичай донякъде напомня днешните курбани или общите трапези след големи религиозни празници, когато хората се събират, хранят се заедно и почитат вярата и общността си.`,
    mapX: 55, mapY: 62,    mapsUrl: "https://maps.app.goo.gl/eiwHQx8regtY8QVK7",
    localImages: [stop11img1, stop11img2],
  },
  {
    id: 12, num: "12",
    title: "Βουλευτήριο", titleEn: "Bouleuterion",
    titleTr: "Meclis Binası (Bouleuterion)",
    category: "Πολιτεία", categoryEn: "Civic Building",
    categoryTr: "Kamu Binası",
    duration: "8 λεπτά", durationSec: 480,
    imageId: IMGS[5],
    description: "Βρισκόμαστε στη βόρεια γωνία της Αρχαίας Αγοράς της Θάσος, στον σημαντικότερο ίσως διοικητικό και πολιτικό χώρο της πόλης. Μπροστά μας απλώνονται τα λείψανα ενός μεγάλου ορθογώνιου οικοδομήματος, γνωστού σήμερα ως Πώρινο Οικοδόμημα, το οποίο οι αρχαιολόγοι θεωρούν ότι πιθανότατα ήταν το Βουλευτήριο — το κτίριο όπου συνεδρίαζε η Βουλή των Θασίων και λαμβάνονταν αποφάσεις που καθόριζαν τη ζωή ολόκληρης της πόλης.\n\nΗ θέση του οικοδομήματος είναι εξαιρετικά σημαντική. Δίπλα του βρίσκεται το Κτήριο με τα Παρασκήνια, όπου φυλάσσονταν δημόσια έγγραφα και επιγραφές, ενώ ακριβώς κοντά βρισκόταν και το Ιερό του Αγοραίου Διός, προστάτη των νόμων, των όρκων και της πολιτικής τάξης. Έτσι, ολόκληρη αυτή η περιοχή αποτελούσε το διοικητικό κέντρο της αρχαίας πόλης, έναν χώρο όπου συνδέονταν η πολιτική εξουσία, η δικαιοσύνη και η θρησκεία.\n\nΗ βάση του οικοδομήματος είναι χτισμένη από πώρινο λίθο, ενώ τα ανώτερα τμήματα ήταν κατασκευασμένα από το περίφημο λευκό μάρμαρο της Θάσου και από γνεύσιο. Τρεις πλευρές ήταν κλειστές και ισχυρά δομημένες, ενώ η τέταρτη, αυτή που έβλεπε προς την αγορά, σχημάτιζε τη μνημειακή πρόσοψη. Η κύρια πρόσβαση γινόταν από τη στενή νοτιοδυτική πλευρά μέσω δύο θυρών. Η τεχνική της κατασκευής χρονολογείται στην ελληνιστική περίοδο, περίπου στον 3ο αιώνα π.Χ.\n\nΗ Βουλή ήταν ένα από τα σημαντικότερα πολιτικά όργανα της αρχαίας ελληνικής πόλης. Στην αρχαία Θάσο αριθμούσε περίπου 360 βουλευτές — αριθμός που αντιστοιχούσε συμβολικά στις ημέρες του έτους, συμβολίζοντας ότι η πόλη διοικείται συνεχώς. Οι βουλευτές συζητούσαν για το λιμάνι, το εμπόριο, τη φορολογία, τα μεταλλεία, τα λατομεία, τα δημόσια έργα, τα τείχη, τη θρησκευτική ζωή, τις συμμαχίες και τον στόλο. Κάθε βουλευτής είχε δικαίωμα να πάρει τον λόγο μία φορά τον χρόνο, έπρεπε όμως να προτείνει ταυτόχρονα και λύση στο πρόβλημα που παρουσίαζε.\n\nΟ χώρος συνεδριάσεων ήταν πιθανότατα ορθογώνιος με μικρή αμφιθεατρική αίθουσα. Στο κέντρο βρισκόταν το λογείον ή βήμα, από όπου μιλούσαν οι ρήτορες και οι άρχοντες. Υπήρχαν επίσης ξύλινοι κίονες που στήριζαν τη βαριά στέγη, ξύλινος δρύφακτος που χώριζε τον χώρο της Βουλής από τους επισκέπτες, και φράγματα που διατηρούσαν την τάξη κατά τις συνεδριάσεις.\n\nΌταν μια πρόταση γινόταν αποδεκτή, ο γραφέας της πόλης κατέγραφε τις αποφάσεις αρχικά σε ξύλινες πινακίδες, λευκώματα, πάπυρο και αργότερα σε περγαμηνή. Οι σημαντικότεροι νόμοι χαράσσονταν σε μαρμάρινες στήλες. Γι' αυτό σήμερα η Θάσος διαθέτει έναν από τους μεγαλύτερους αριθμούς σωζόμενων επιγραφών στον αρχαίο ελληνικό κόσμο.\n\nΣτην αρχαία Θάσο υπήρχε και σώμα ενόρκων πολιτών που επιλεγόταν με κλήρωση μέσω ειδικής λίθινης συσκευής, του κληρωτηρίου. Οι Θάσιοι είχαν αποκτήσει μεγάλη φήμη ως δίκαιοι δικαστές και πολλές φορές καλούνταν σε άλλες ελληνικές πόλεις για να επιλύσουν διαφορές — μια πρακτική που θεωρούνταν αξιόπιστη επειδή οι ξένοι δικαστές δεν επηρεάζονταν από τις τοπικές αντιπαλότητες.\n\nΤο Βουλευτήριο της αρχαίας Θάσος δεν ήταν απλώς ένα δημόσιο οικοδόμημα. Ήταν το πολιτικό, διοικητικό και δικαστικό κέντρο της πόλης, το μέρος όπου συζητούνταν οι νόμοι, λαμβάνονταν οι αποφάσεις, οργανώνονταν τα δημόσια έργα, απονέμονταν δικαιοσύνη και καθοριζόταν το μέλλον της πόλης. Μέσα σε αυτόν τον χώρο χτυπούσε ουσιαστικά η «καρδιά» της αρχαίας θασιακής δημοκρατίας.",
    descriptionEn: "At the north corner of the Ancient Agora stands the Bouleuterion, the most important political space of the city, where the Council (Boule) — the advisory body of democratic governance — convened.",
    descriptionTr: `12. MECLİS BİNASI (BOULEUTERION)
Taş Agora'nın Poros Taşından Yapılmış Yapısı – Ayrıntılı Rehberli Anlatım

Şu anda Taşos Antik Agorası'nın kuzey köşesinde, kentin en önemli idari ve siyasi alanlarından birinde bulunuyoruz. Önümüzde, bugün "Poros Yapısı" olarak bilinen büyük dikdörtgen planlı yapının kalıntıları uzanıyor. Arkeologlar bu yapının büyük olasılıkla antik Taşos'un Bouleuterion'u, yani Taşosluların meclisinin toplandığı ve tüm kentin yaşamını etkileyen kararların alındığı yapı olduğunu düşünmektedir.

Yapının konumu son derece önemlidir. Hemen yanında kamu belgeleri ve yazıtların saklandığı "Paraskenia Yapısı" bulunuyordu; yakınında ise yasaların, yeminlerin ve siyasi düzenin koruyucusu olan Agora Zeus'u kutsal alanı yer alıyordu. Böylece bu bölge, antik kentin siyaset, adalet ve dinin birleştiği idari merkeziydi.

Kalıntılara dikkatle bakıldığında, yapının temelinin dayanıklı poros taşından inşa edildiği görülür. Üst bölümler ise ünlü beyaz Taşos mermeri ve yapının sağlamlığını artıran gnays taşından yapılmıştı. Yapının üç tarafı kapalı ve güçlü biçimde inşa edilmişti; pazara bakan dördüncü taraf ise anıtsal cepheyi oluşturuyordu. Günümüzde bu cepheden büyük bir mermer blok korunmuştur ve yapının eski görkemi hakkında fikir verir.

Cephenin iç kısmında büyük ortostatlar bulunuyordu; bu durum burada sütunlar ya da merkezi bir giriş olmadığını düşündürmektedir. Ana girişin güneybatıdaki dar taraftan, Paraskenia Yapısı yönünden iki kapıyla sağlandığı anlaşılmaktadır.

Yapının inşa tekniği Helenistik Dönem'e, yaklaşık MÖ 3. yüzyıla tarihlenmektedir. Bu dönem Taşos'un ekonomik ve siyasi açıdan geliştiği bir çağdı. Ada altın ve gümüş madenleri, şarabı, ticareti ve tüm antik dünyaya ihraç edilen beyaz mermeriyle ünlüydü.

Yapının Gizemi

Bu yapı arkeologları uzun süre düşündürmüştür. İç kısmın güneydoğu bölümünde, ikinci kez kullanılmış sur taşlarından oluşan apsis biçimli bir yapı ve eğik duvarlar görülmektedir. Bu sıra dışı düzenleme nedeniyle yapının idari bina mı, depo mu, kutsal alan mı yoksa anıtsal bir yapı mı olduğu uzun süre anlaşılamamıştır.

Bugünkü yapının altında daha eski bir temel yapısının izleri de bulunmuştur. Bu durum aynı alanda daha eski, muhtemelen kamusal bir yapının bulunduğunu göstermektedir. Günümüzde en kabul gören görüşe göre yapı, Taşos kent meclisinin toplandığı Bouleuterion'dur.

Antik Taşos Meclisi

Meclis, antik Yunan kentlerinin en önemli siyasi kurumlarından biriydi. Yönetim, yasa hazırlığı ve karar süreçlerinden sorumluydu. Taşos'ta meclisin yaklaşık 360 üyeden oluştuğu düşünülmektedir; bu sayı muhtemelen yılın günlerini sembolik olarak temsil ediyordu. Böylece kentin her gün yönetildiği vurgulanıyordu.

Mecliste şu konular görüşülüyordu:

limanın işleyişi
ticaret ve vergiler
madenlerin yönetimi
mermer ocakları
kamu yapıları
yollar ve limanlar
surların bakımı
dini yaşam
ittifaklar ve diğer kentlerle ilişkiler
savunma ve donanma.

Her meclis üyesi yılda bir kez konuşma hakkına sahipti. Konuşmacı kürsüsüne çıkarak kente dair bir sorun, öneri ya da anlaşmazlık sunardı. Ancak yalnızca sorunu belirtmek yeterli değildi; aynı zamanda çözüm de sunulmalıydı. Bu durum antik Yunan kurumlarının vatandaşlardan aktif katılım ve sorumluluk beklediğini göstermektedir.

Konuşmanın ardından tartışma ve oylama yapılır, diğer üyeler öneriyi kabul ya da reddederdi.

Bouleuterion'un İç Mekânı

Toplantı salonu muhtemelen kare ya da dikdörtgen planlıydı ve içinde küçük amfi tiyatro biçiminde bir düzen bulunuyordu. Oturma yerleri büyük olasılıkla ahşap sıralardan oluşuyordu. Ortada ise hatiplerin ve yöneticilerin konuştuğu kürsü yer alıyordu.

Yapının genişliği nedeniyle çatıyı taşıyan ahşap sütunlar bulunuyordu. Ayrıca "dryphaktos" adı verilen ahşap bir parmaklık, meclis alanını ziyaretçilerden ayırıyordu. Dış kısımda da toplantılar sırasında düzeni sağlamak için ipler ya da engeller kullanılmış olabilir.

Yazmanlar ve Yasaların Kaydedilmesi

Bir öneri kabul edildiğinde kentin yazmanı devreye girerdi. Kararlar önce balmumu kaplı ahşap levhalara, papirüslere veya daha sonra parşömene yazılırdı. Balmumlu levhalar yeniden kullanılabiliyordu; eski yazılar kazınıp yerine yenileri yazılıyordu.

Önemli belgeler arşivlerde saklanıyor, yasalar ise herkesin görebilmesi için mermer steller üzerine kazınıyordu. Taşos'ta birçok resmi yasa Paraskenia Yapısı'na yerleştiriliyordu. Bu nedenle Taşos bugün antik Yunan dünyasının en zengin yazıt koleksiyonlarından birine sahiptir.

Adalet ve Mahkemeler

Bouleuterion aynı zamanda mahkeme işlevi de görüyordu. Davalar dönemin hâkimleri tarafından yürütülüyor, duruma göre üç ya da yedi yargıç görev yapıyordu. Oturumlara kentin Arkhon'u başkanlık ederdi.

Davalar şu konularla ilgili olabiliyordu:

ticari anlaşmazlıklar
borçlar
yasa ihlalleri
miras meseleleri
siyasi çekişmeler
kamu projeleri ve sözleşmeler.

Toplantılar kutsal kabul ediliyor ve meclisin koruyucusu olan Hestia'ya adanıyordu. Zeus ile birlikte yasaların ve kentin düzeninin koruyucuları sayılıyorlardı.

Jüri Sistemi ve Kleroterion

Antik Taşos'ta kura ile seçilen yurttaş jürileri de bulunuyordu. Her adayın adı bronz bir levhaya kazınır ve "kleroterion" adı verilen taş bir düzeneğe yerleştirilirdi. Duruşmadan önce jüri üyeleri kura ile seçilir, böylece eşitlik ve tarafsızlık sağlanırdı.

Taşoslular adil ve yetenekli yargıçlar olarak ün kazanmıştı. Bu nedenle zaman zaman başka Yunan kentlerine de hakemlik yapmaları için çağrılıyorlardı.

Bouleuterion'un Önemi

Taşos Bouleuterion'u yalnızca bir kamu binası değildi. Burası kentin siyasi, idari ve adli merkeziydi. Yasalar burada tartışılıyor, kararlar alınıyor, kamu projeleri düzenleniyor ve adalet dağıtılıyordu. Kısacası, antik Taşos demokrasisinin "kalbi" burada atıyordu.`,
    mapX: 48, mapY: 62,    mapsUrl: "https://maps.app.goo.gl/jNCqpk92t6yQAMCP7",
  },
  {
    id: 13, num: "13",
    title: "Κτήριο με Παρασκήνια", titleEn: "Building with Wings",
    titleTr: "Paraskenia Yapısı",
    category: "Αρχιτεκτονική", categoryEn: "Architecture",
    categoryTr: "Mimari",
    duration: "7 λεπτά", durationSec: 420,
    imageId: IMGS[0],
    description: "Στη βόρεια πλευρά της αρχαίας Αγοράς της Θάσος βρισκόταν ένα από τα πιο επιβλητικά και σημαντικά δημόσια οικοδομήματα της πόλης, γνωστό σήμερα ως «Κτίριο με Παρασκήνια». Οι αρχαιολόγοι θεωρούν ότι πιθανότατα λειτουργούσε είτε ως Πρυτανείο — το κεντρικό διοικητικό μέγαρο της πόλης — είτε ως μνημειακά Προπύλαια που οδηγούσαν προς το Θησαυροφυλάκιο, όπου φυλάσσονταν τα οικονομικά αποθέματα και οι πολύτιμοι θησαυροί της πόλης.\n\nΤο οικοδόμημα είχε μήκος περίπου 21,5 μέτρα και πλάτος 9,3 μέτρα. Οι δύο πλάγιες πτέρυγες προεξείχαν προς τα εμπρός, ενώ το κεντρικό τμήμα ήταν ελαφρώς εσοχευμένο, δημιουργώντας κάτοψη σε σχήμα Π. Ο τύπος αυτός συναντάται και στη Στοά του Ελευθερίου Διός στην Αγορά της Αθήνας, σε δημόσια οικοδομήματα της Δήλου, της Μεγαλόπολης και της Κάτω Ιταλίας.\n\nΤο οικοδόμημα ήταν εξ ολοκλήρου κατασκευασμένο από θασίτικο μάρμαρο. Η πρόσοψη ήταν επιβλητική με δωρικούς κίονες — τέσσερις σε κάθε πλάγια πτέρυγα, δύο στις εσωτερικές στενές πλευρές και τέσσερις στην κεντρική πρόσοψη. Πάνω από το κεντρικό μετακιόνιο υπήρχε αναθηματική επιγραφή, σήμερα ορατά μόνο τα πρώτα γράμματα «ΤΙ…», πιθανόν το όνομα του αφιερωτή.\n\nΜπροστά από την πρόσοψη υπήρχαν βάσεις τιμητικών αγαλμάτων ευεργετών, στρατηγών ή σημαντικών πολιτών της Θάσου — σύμβολα πολιτικής δύναμης και κοινωνικού κύρους που αποδεικνύουν ότι το κτίριο βρισκόταν στο επίκεντρο της δημόσιας ζωής.\n\nΣτον πίσω εσωτερικό τοίχο χαράχθηκε ένας από τους σημαντικότερους επιγραφικούς καταλόγους της αρχαίας Θάσου: ο κατάλογος των αρχόντων και αξιωματούχων της πόλης. Η επιγραφή δημιουργήθηκε στα τέλη του 4ου αιώνα π.Χ. και καταγράφει τις τριάδες των ανώτερων αξιωματούχων από τα πρώτα χρόνια ίδρυσης της αποικίας μέχρι τον 3ο αιώνα μ.Χ. — σχεδόν επτά αιώνες ιστορίας.\n\nΣτους ίδιους τοίχους αναρτήθηκαν επίσης σημαντικά δημόσια έγγραφα και επίσημη αλληλογραφία με τη Ρώμη: ψηφίσματα της ρωμαϊκής Συγκλήτου, επιστολές αξιωματούχων όπως ο Λεύκιος Σύλλας, ο Κορνήλιος Δολαβέλλας και ο Λούκιος Σέστιος Κουιρινάλης, καθώς και επιγραφές των αυτοκρατόρων Κλαύδιου και Νέρωνα.\n\nΝεότερες ανασκαφές αποκάλυψαν στο πίσω μέρος είσοδο που οδηγούσε σε δεύτερο κτίσμα με εσωτερική αυλή. Είχε ισχυρούς τοίχους και αίθριο που περιβαλλόταν από δώδεκα δωρικούς κίονες — μορφή που οδήγησε τους αρχαιολόγους στην άποψη ότι ίσως επρόκειτο για το Θησαυροφυλάκιο, όπου φυλάσσονταν τα οικονομικά αποθέματα, τα ιερά αφιερώματα και τα δημόσια έγγραφα.\n\nΤο οικοδόμημα φαίνεται πως διατηρήθηκε σε χρήση μέχρι τον 5ο αιώνα μ.Χ. Κατά την παλαιοχριστιανική εποχή τα μάρμαρα και τα αρχιτεκτονικά μέλη χρησιμοποιήθηκαν για την κατασκευή της βασιλικής του Αγίου Ακακίου. Σήμερα αποτελεί μία από τις σημαντικότερες μαρτυρίες για την πολιτική, διοικητική και οικονομική οργάνωση της αρχαίας Θάσου.",
    descriptionEn: "On the north side of the ancient Agora stands the Building with Wings — Propylaea of the Treasury — one of the most impressive structures and an important centre of administrative life.",
    descriptionTr: `Taşos Antik Agorası'nın kuzey tarafında, kentin en görkemli ve en önemli kamu yapılarından biri yer alıyordu. Günümüzde "Paraskenia Yapısı" olarak bilinen bu anıt, antik kentin temel idari ve siyasi merkezlerinden biriydi ve agoranın, yani Taşosluların kamusal yaşamının kalbinin işleyişiyle doğrudan bağlantılıydı. Arkeologlar yapının büyük olasılıkla ya kentin merkezi yönetim binası olan Prytaneion ya da Taşosluların hazinesine açılan anıtsal Propylonlar olarak kullanıldığını düşünmektedir.

Yapının toplam uzunluğu yaklaşık 21,5 metre, genişliği ise 9,3 metreydi. Mimari düzeni dönemine göre oldukça etkileyici ve nadirdi. İki yan kanat öne doğru çıkıntı yapıyor, orta bölüm ise hafif içeri çekilerek Π biçiminde bir plan oluşturuyordu. Bu görünüm yapıya anıtsal bir karakter ve resmi bir giriş hissi kazandırıyordu.

Bu mimari tip, Atina Agorası'ndaki ünlü Zeus Eleutherios Stoası ile Delos, Megalopolis ve Güney İtalya'daki bazı kamu yapılarında da görülmektedir. Özellikle Atina'daki Zeus Eleutherios Stoası ile olan benzerlik dikkat çekicidir. O stoa MÖ 5. yüzyılda Atinalıların zaferlerini onurlandırmak amacıyla inşa edilmişti. İçinde savaş ganimetleri ve vatandaşlar için mermer oturma sıraları bulunuyordu. Benzer mermer sıraların Taşos'ta da bulunması, yapının resmi ve kamusal bir işlev taşıdığını göstermektedir.

Yapı tamamen Taşos'un ünlü beyaz mermerinden inşa edilmişti. Cephesi dor düzenindeki sütunlarla süslenmişti: iki yan kanatta dörder sütun, iç dar yüzlerde ikişer sütun ve merkez cephede dört sütun bulunuyordu. Dor düzeni yapıya güç, ciddiyet ve görkem kazandırıyordu.

Merkezdeki sütun aralığının üzerindeki arşitravda adak yazıtı bulunuyordu. Günümüzde yalnızca "ΤΙ…" harfleri korunmuştur. Bu harflerin yapının finansmanını sağlayan yönetici ya da bağışçının adına ait olduğu düşünülmektedir.

Binanın önünde onur heykellerinin kaideleri yer alıyordu. Burada muhtemelen hayırseverlerin, komutanların, yöneticilerin ve önemli Taşosluların heykelleri bulunuyordu. Bu heykeller siyasi güç, toplumsal onur ve prestijin sembolleriydi.

İç arka duvarda Taşos'un en önemli yazıt listelerinden biri yer alıyordu: kentin yöneticileri ve görevlileri listesi. MÖ 4. yüzyılın sonlarında oluşturulan bu kayıtlar yaklaşık yedi yüzyıl boyunca güncellenmeye devam etti ve MS 3. yüzyıla kadar ulaştı. Bu yazıtlar, tarihçilerin Taşos'un siyasi tarihini tarihlendirmesinde büyük rol oynamıştır.

Aynı duvarlarda Roma Senatosu kararları ve Romalı yöneticilerin mektupları da sergileniyordu. Lucius Sulla, Cornelius Dolabella ve Lucius Sestius Quirinalis gibi isimlerin yazıları ile İmparator Claudius ve Nero'ya ait yazıtlar burada bulunmuştur. Bu durum Taşos'un Roma yönetimiyle yakın ilişkisini göstermektedir.

Yapı MS 5. yüzyıla kadar kullanımda kaldı. Erken Hristiyanlık döneminde büyük zarar gördü ve mermer parçaları Aziz Akakios Bazilikası'nın yapımında yeniden kullanıldı.

Son kazılar, yapının arkasında iç avlulu ikinci bir kare yapının bulunduğunu ortaya çıkardı. Güçlü duvarları ve ortasında on iki Dor sütunuyla çevrili avlusu bulunan bu yapı muhtemelen Taşos'un hazine binasıydı. Burada ekonomik rezervler, değerli metaller, kutsal adaklar ve kamu belgeleri saklanıyordu. Bu nedenle Paraskenia Yapısı bugün Taşosluların hazinesine açılan anıtsal Propylonlar olarak kabul edilmektedir.

Bu anıt, antik Taşos'un siyasi, idari ve ekonomik örgütlenmesinin en önemli kanıtlarından biridir.`,
    mapX: 40, mapY: 60,    mapsUrl: "https://maps.app.goo.gl/J5bVBa9JVmUKX5ye9",
  },
  {
    id: 14, num: "14",
    title: "Ο Ξέρξης στη Θάσο", titleEn: "Xerxes at Thassos",
    titleTr: "Kserkses'in Taşos'a Gelişi",
    titleDe: "Xerxes auf Thasos",
    titleRo: "Xerxes în Thasos",
    titleBg: "Ксеркс в Тасос",
    titleSr: "Kserkse u Tasosu",
    titleIt: "Serse a Taso",
    titleFr: "Xerxès à Thasos",
    category: "Ιστορία", categoryEn: "History",
    categoryTr: "Tarih",
    categoryDe: "Geschichte",
    categoryRo: "Istorie",
    categoryBg: "История",
    categorySr: "Istorija",
    categoryIt: "Storia",
    categoryFr: "Histoire",
    duration: "8 λεπτά", durationSec: 480,
    imageId: IMGS[9],
    description: "Το 480 π.Χ., κατά τη διάρκεια της μεγάλης εκστρατείας του Πέρση βασιλιά Ξέρξης Α΄ εναντίον της Ελλάδας, η Θάσος βρέθηκε αντιμέτωπη με τη δύναμη της μεγαλύτερης αυτοκρατορίας της εποχής. Ο Ξέρξης, συνεχίζοντας την εκστρατεία που είχε αρχίσει ο πατέρας του Δαρείος Α΄, συγκέντρωσε έναν τεράστιο στρατό και στόλο με σκοπό την υποταγή των ελληνικών πόλεων.\n\nΗ εκστρατεία ξεκίνησε από την Ασία και ο περσικός στρατός πέρασε στην Ευρώπη μέσω δύο τεράστιων πλωτών γεφυρών στον Ελλήσποντο. Χιλιάδες στρατιώτες, ιππείς, άρματα και πλοία προχωρούσαν προς τη Μακεδονία και τη νότια Ελλάδα. Πολλές πόλεις αναγκάστηκαν να προσφέρουν γη και ύδωρ — σύμβολα υποταγής στον Πέρση βασιλιά.\n\nΗ Θάσος εκείνη την εποχή ήταν μία από τις πλουσιότερες ελληνικές πόλεις του βόρειου Αιγαίου. Το νησί είχε αποκτήσει τεράστια οικονομική δύναμη χάρη στα μεταλλεία χρυσού και αργύρου, στα λατομεία λευκού μαρμάρου, στο εμπόριο και στις αποικίες που είχε ιδρύσει στη Θράκη. Η γεωγραφική θέση του νησιού το έκανε επίσης ιδιαίτερα σημαντικό για τον έλεγχο των θαλάσσιων δρόμων.\n\nΌταν ο Ξέρξης έφτασε στην περιοχή, οι Θάσιοι αποφάσισαν να τον υποδεχθούν με μεγάλες τιμές. Η φιλοξενία αυτή δεν ήταν μόνο πράξη ευγένειας αλλά κυρίως πολιτική αναγκαιότητα — οποιαδήποτε αντίσταση μπορούσε να οδηγήσει στην ολοκληρωτική καταστροφή τους. Έτσι, η Θάσος υποχρεώθηκε να οργανώσει πολυδάπανα γεύματα, να προσφέρει τρόφιμα, κρασί, ζώα για θυσίες και πολυτελή φιλοξενία για τον βασιλιά, τους αξιωματούχους και τον στρατό του.\n\nΟ αρχαίος ιστορικός Ηρόδοτος περιγράφει ότι το κόστος αυτής της φιλοξενίας ήταν τόσο μεγάλο ώστε ξεπέρασε ακόμη και τα ετήσια έσοδα της πόλης. Σύμφωνα με τον Αντίπατρο, γιο του Οργέα, έναν αξιόπιστο πολίτη της Θάσου, μόνο για το επίσημο δείπνο δαπανήθηκαν τετρακόσια αργυρά τάλαντα.\n\nΣτην αρχαία ελληνική οικονομία, ένα τάλαντο αντιστοιχούσε σε 6.000 δραχμές. Τα τετρακόσια τάλαντα αντιπροσώπευαν 2.400.000 δραχμές — ένα ποσό που ήταν τεράστιο για τα δεδομένα της εποχής. Ένας απλός εργάτης ή κωπηλάτης αμειβόταν με περίπου μία δραχμή την ημέρα, άρα το κόστος αντιστοιχούσε σε εκατομμύρια ημερομίσθια.\n\nΗ αναφορά του Ηροδότου έχει και συμβολική σημασία. Δείχνει πώς οι ελληνικές πόλεις, ακόμη και οι πλούσιες, μπορούσαν να εξαντληθούν οικονομικά μπροστά στις απαιτήσεις της περσικής αυτοκρατορίας. Η Θάσος αναγκάστηκε να διαθέσει τεράστιους πόρους μέσα σε ελάχιστο χρόνο μόνο για να εξασφαλίσει την εύνοια ή τουλάχιστον την ανοχή του Ξέρξη.\n\nΤο περιστατικό αυτό αποτελεί μία από τις πιο χαρακτηριστικές μαρτυρίες για τον πλούτο της αρχαίας Θάσου αλλά και για τη δύναμη και την επιρροή της Περσικής Αυτοκρατορίας κατά την εποχή των Περσικών Πολέμων.",
    descriptionEn: "In 480 BC, during Xerxes' great campaign against Greece, Thassos faced the power of the greatest empire of the ancient world. The city received the Persian fleet and provisioned the entire army.",
    descriptionTr: `MÖ 480 yılında Pers Kralı I. Kserkses'in Yunanistan seferi sırasında Taşos, dönemin en büyük imparatorluğunun gücüyle karşı karşıya kaldı. Kserkses, babası I. Darius'un başlattığı seferi sürdürerek Yunan kentlerini boyunduruk altına almak amacıyla büyük bir ordu ve donanma topladı.

Pers ordusu Asya'dan yola çıkarak Hellespontos üzerinde kurulan iki dev yüzer köprü aracılığıyla Avrupa'ya geçti. Binlerce asker, süvari, savaş arabası ve gemi Makedonya ile güney Yunanistan'a doğru ilerliyordu. Birçok şehir teslim olmak ya da Pers kralına bağlılığın simgesi olan "toprak ve su" sunmak zorunda kaldı.

O dönemde Taşos, kuzey Ege'nin en zengin Yunan kentlerinden biriydi. Altın ve gümüş madenleri, beyaz mermer ocakları, ticareti ve Trakya'daki kolonileri sayesinde büyük bir ekonomik güce sahipti.

Kserkses bölgeye ulaştığında Taşoslular onu büyük törenlerle karşıladı. Bu yalnızca misafirperverlik değil, aynı zamanda siyasi bir zorunluluktu. Pers ordusuna karşı koymanın şehirlerin tamamen yok edilmesine yol açabileceği biliniyordu. Bu nedenle Taşos büyük şölenler düzenlemek, yiyecek, şarap ve kurban hayvanları sağlamak zorunda kaldı.

Antik tarihçi Herodotos'a göre bu misafirperverliğin maliyeti kentin yıllık gelirini bile aşmıştı. Yalnızca resmi ziyafet için dört yüz gümüş talent harcanmıştı.

Antik Yunan ekonomisinde:

1 talent = 60 mina, 1 mina = 100 drahmi

Dolayısıyla:

1 talent = 6000 drahmi

Ve:

400 × 6000 = 2400000 drahmi

Bu miktar dönem için inanılmaz derecede büyüktü. Basit bir işçi ya da kürekçi günde yaklaşık bir drahmi kazanıyordu. Bu olay hem Taşos'un büyük zenginliğini hem de Pers İmparatorluğu'nun şehirler üzerindeki baskısını göstermektedir.`,
    descriptionDe: `Im Jahr 480 v. Chr., während des großen Feldzuges des persischen Königs Xerxes I. gegen Griechenland, sah sich Thasos der Macht des größten Reiches seiner Zeit gegenüber. Xerxes setzte den Feldzug seines Vaters Dareios I. fort und stellte ein gewaltiges Heer sowie eine riesige Flotte auf, um die griechischen Städte zu unterwerfen.

Der Feldzug begann in Asien, und das persische Heer gelangte über zwei gewaltige Pontonbrücken am Hellespont nach Europa. Der Vormarsch der Armee war beeindruckend und zugleich furchteinflößend für die Griechen jener Zeit. Tausende Soldaten, Reiter, Streitwagen, Diener und Schiffe zogen in Richtung Makedonien und Südgriechenland. Viele Städte waren gezwungen, sich zu unterwerfen oder „Erde und Wasser" zu überreichen – Symbole der Unterwerfung unter den persischen König.

Thasos war damals eine der reichsten griechischen Städte der nördlichen Ägäis. Die Insel hatte enormen wirtschaftlichen Wohlstand erlangt dank:
• der Gold- und Silberminen,
• der berühmten Steinbrüche aus weißem Marmor,
• des Handels,
• sowie ihrer Kolonien in Thrakien.

Dieser Wohlstand ermöglichte den Thasiern den Bau mächtiger Stadtmauern, Tempel, öffentlicher Gebäude und Häfen. Gleichzeitig machte die geografische Lage der Insel sie besonders wichtig für die Kontrolle der Seewege der nördlichen Ägäis.

Als Xerxes die Region erreichte, beschlossen die Thasier, ihn mit großen Ehren zu empfangen. Diese Gastfreundschaft war nicht nur ein Zeichen der Höflichkeit, sondern vor allem eine politische Notwendigkeit. Die griechischen Städte wussten, dass jeder Widerstand gegen das gewaltige persische Heer ihre völlige Zerstörung bedeuten konnte.

Daher war Thasos gezwungen:
• prächtige Festmahle auszurichten,
• Lebensmittel und Wein bereitzustellen,
• Tiere für Opfer und Verpflegung zu liefern,
• sowie luxuriöse Unterkünfte für den König, seine Beamten und sein Heer zu organisieren.

Der antike Historiker Herodot berichtet, dass die Kosten dieser Bewirtung so hoch waren, dass sie sogar die jährlichen Einnahmen der Stadt überstiegen.

Nach Aussage des Antipatros, Sohn des Orgeas, eines angesehenen Bürgers von Thasos, wurden allein für das offizielle Bankett vierhundert Silbertalente ausgegeben.

In der antiken griechischen Wirtschaft war das Talent eine außerordentlich große Gewichts- und Werteinheit, die für Staatseinnahmen, militärische Ausgaben und große öffentliche Projekte verwendet wurde.

Das Verhältnis der Einheiten war:

1 Talent=60 Minen,1 Mine=100 Drachmen

Daraus ergibt sich:

1 Talent=6000 Drachmen

Somit entsprachen vierhundert Talente:

400×6000=2400000 Drachmen

Diese Summe war für die damalige Zeit enorm. Um die Größenordnung besser zu verstehen: Ein einfacher Arbeiter oder Ruderer erhielt oft etwa eine Drachme pro Tag. Die 2.400.000 Drachmen entsprachen also Millionen von Tageslöhnen.

Dieses Ereignis beweist nicht nur den Reichtum von Thasos, sondern auch die enorme Belastung, die die erzwungene Versorgung des persischen Heeres bedeutete.

Der Bericht des Herodot besitzt zudem symbolische Bedeutung. Er zeigt, wie selbst wohlhabende griechische Städte wirtschaftlich erschöpft werden konnten angesichts der Forderungen des Persischen Reiches.

Obwohl Thasos wirtschaftlich stark war, musste die Stadt innerhalb kürzester Zeit gewaltige Ressourcen aufbringen, nur um sich die Gunst – oder zumindest die Duldung – des Xerxes zu sichern.

Dieses Ereignis gehört zu den eindrucksvollsten Zeugnissen für den Reichtum des antiken Thasos sowie für die Macht und den Einfluss des Persischen Reiches während der Perserkriege.`,
    descriptionRo: `În anul 480 î.Hr., în timpul marii campanii a regelui persan Xerxes I împotriva Greciei, Thasos s-a confruntat cu puterea celui mai mare imperiu al epocii. Xerxes, continuând expediția începută de tatăl său, Darius I, a adunat o armată și o flotă uriașă cu scopul de a supune orașele grecești.

Campania a început în Asia, iar armata persană a trecut în Europa prin două poduri plutitoare uriașe construite peste Hellespont. Înaintarea armatei era impresionantă și înfricoșătoare pentru grecii vremii. Mii de soldați, călăreți, care de luptă, servitori și nave înaintau spre Macedonia și sudul Greciei. Multe orașe au fost obligate fie să se supună, fie să ofere „pământ și apă", simboluri ale supunerii față de regele persan.

În acea perioadă, Thasos era unul dintre cele mai bogate orașe grecești din nordul Mării Egee. Insula dobândise o putere economică enormă datorită:
• minelor de aur și argint,
• celebrelor cariere de marmură albă,
• comerțului,
• și coloniilor întemeiate în Tracia.

Această prosperitate economică le permitea thasienilor să construiască ziduri puternice, temple, clădiri publice și porturi. În același timp, poziția geografică a insulei o făcea extrem de importantă pentru controlul rutelor maritime din nordul Mării Egee.

Când Xerxes a ajuns în regiune, thasienii au decis să-l primească cu mari onoruri. Această ospitalitate nu reprezenta doar un gest de politețe, ci mai ales o necesitate politică. Orașele grecești știau că orice rezistență împotriva uriașei armate persane putea duce la distrugerea lor totală.

Astfel, Thasos a fost obligat:
• să organizeze banchete costisitoare,
• să ofere alimente și vin,
• să furnizeze animale pentru sacrificii și hrană,
• precum și cazare luxoasă pentru rege, oficialii și armata sa.

Istoricul antic Herodot relatează că costul acestei ospitalități a fost atât de mare încât a depășit chiar veniturile anuale ale orașului.

Potrivit lui Antipatros, fiul lui Orgeas, un cetățean important și de încredere al Thasosului, numai pentru banchetul oficial s-au cheltuit patru sute de talanți de argint.

În economia greacă antică, talantul era o unitate foarte mare de valoare și greutate, folosită pentru venituri de stat, cheltuieli militare și mari proiecte publice.

Relația dintre unități era următoarea:

1 talant=60 mine,1 mina=100 drahme

Prin urmare:

1 talant=6000 drahme

Astfel, patru sute de talanți corespundeau la:

400×6000=2400000 drahme

Această sumă era enormă pentru epoca respectivă. Pentru a înțelege dimensiunea cheltuielii, trebuie menționat că un simplu muncitor sau vâslaș era plătit adesea cu aproximativ o drahmă pe zi. Așadar, cele 2.400.000 de drahme reprezentau milioane de zile de muncă.

Acest fapt demonstrează nu doar bogăția Thasosului, ci și povara uriașă pe care o însemna găzduirea obligatorie a armatei persane.

Relatarea lui Herodot are și o valoare simbolică. Ea arată cum chiar și orașele grecești bogate puteau fi epuizate economic în fața cerințelor Imperiului Persan.

Deși Thasos era prosper, orașul a fost obligat să cheltuiască resurse uriașe într-un timp foarte scurt doar pentru a-și asigura bunăvoința — sau cel puțin toleranța — lui Xerxes.

Acest episod reprezintă una dintre cele mai caracteristice mărturii ale bogăției Thasosului antic, dar și ale puterii și influenței Imperiului Persan în perioada războaielor medice.`,
    descriptionBg: `През 480 г. пр. Хр., по време на големия поход на персийския цар Ксеркс I срещу Гърция, Тасос се изправил пред силата на най-голямата империя на епохата. Ксеркс, продължавайки похода, започнат от баща му Дарий I, събрал огромна армия и флот с цел да подчини гръцките градове.

Походът започнал от Азия, а персийската армия преминала в Европа чрез два огромни плаващи моста, построени над Хелеспонта. Движението на армията било впечатляващо и ужасяващо за гърците от онова време. Хиляди войници, конници, колесници, слуги и кораби напредвали към Македония и Южна Гърция. Много градове били принудени или да се подчинят, или да поднесат „земя и вода" — символи на покорство пред персийския цар.

По това време Тасос бил един от най-богатите гръцки градове в северната част на Егейско море. Островът придобил огромна икономическа мощ благодарение на златните и сребърните мини, кариерите за прочутия бял мрамор, търговията и колониите, които бил основал в Тракия. Икономическото благополучие позволявало на тасосците да строят мощни крепостни стени, храмове, обществени сгради и пристанища. В същото време географското положение на острова го правело особено важен за контрола на морските пътища в северното Егейско море.

Когато Ксеркс достигнал района, тасосците решили да го посрещнат с големи почести. Това гостоприемство не било само акт на учтивост, а преди всичко политическа необходимост. Гръцките градове знаели, че всяка съпротива срещу огромната персийска армия може да доведе до пълното им унищожение. Така Тасос бил принуден да организира скъпи пиршества, да предостави храна, вино, животни за жертвоприношения и изхранване, както и луксозно настаняване за царя, неговите сановници и армията му.

Древният историк Херодот описва, че цената на това гостоприемство била толкова голяма, че надминала дори годишните приходи на града. Според Антипатър, син на Оргей — важен и надежден гражданин на Тасос — само за официалната вечеря били изразходвани четиристотин сребърни таланта.

В древногръцката икономика талантът бил изключително голяма единица за стойност и тегло. Той се използвал за държавни приходи, военни разходи и големи икономически проекти.

1 талант=60 мини,1 мина=100 драхми

Следователно:

1 талант=6000 драхми

Така четиристотин таланта се равнявали на:

400×6000=2400000 драхми

Тази сума била огромна за времето си. За да се разбере мащабът на разходите, един обикновен работник или гребец често получавал около една драхма на ден. Следователно 2 400 000 драхми съответствали на милиони надници. Това показва не само богатството на Тасос, но и тежестта на задължителното гостоприемство към персийската армия.

Разказът на Херодот има и символично значение. Той показва как гръцките градове — дори богатите — можели икономически да се изтощят под натиска на изискванията на Персийската империя. Тасос, макар и икономически силен, бил принуден да изразходва огромни ресурси за много кратко време само за да осигури благоволението или поне търпимостта на Ксеркс.

Този епизод е едно от най-характерните свидетелства за богатството на древния Тасос, но и за силата и влиянието на Персийската империя по времето на Гръко-персийски войни.`,
    mapX: 32, mapY: 55,    mapsUrl: "https://maps.app.goo.gl/Jko5s2BVUGSGtCG77",
    localImages: [stop14img1, stop14img2],
  },
  {
    id: 15, num: "15",
    title: "Η Νίκη της Θάσου", titleEn: "Nike of Thassos",
    titleTr: "Taşos'un Nike Heykeli",
    titleDe: "Die Nike von Thasos",
    titleRo: "Nike din Thasos",
    titleBg: "Никата на Тасос",
    titleSr: "Nike sa Tasosa",
    titleIt: "La Nike di Taso",
    titleFr: "La Niké de Thasos",
    category: "Τέχνη", categoryEn: "Art",
    categoryTr: "Sanat",
    categoryDe: "Kunst",
    categoryRo: "Artă",
    categoryBg: "Изкуство",
    categorySr: "Umetnost",
    categoryIt: "Arte",
    categoryFr: "Art",
    duration: "6 λεπτά", durationSec: 420,
    imageId: IMGS[2],
    description: "Η λεγόμενη «Νίκη της Θάσου» αποτελεί ένα από τα πιο μυστηριώδη και εντυπωσιακά χαμένα έργα της ελληνιστικής γλυπτικής τέχνης. Δυστυχώς, σήμερα δεν σώζεται το ίδιο το άγαλμα, αλλά μόνο η μαρμάρινη βάση του, η οποία αποτελεί το μοναδικό κατάλοιπο ενός μεγάλου αναθηματικού μνημείου του 2ου αιώνα π.Χ.\n\nΗ βάση αυτή είχε τη μορφή πλώρης πολεμικού πλοίου, επάνω στην οποία στεκόταν το άγαλμα της θεάς Νίκης. Η μορφή της πλώρης συμβόλιζε ξεκάθαρα μια μεγάλη ναυτική επιτυχία των αρχαίων Θασίων και αποτελούσε μνημείο θριάμβου και δόξας. Το μνημείο πιθανότατα ήταν αφιερωμένο σε κάποιο σημαντικό ιερό ή δημόσιο χώρο της πόλης, ώστε να θυμίζει στους κατοίκους και στους επισκέπτες τη ναυτική ισχύ του νησιού.\n\nΟ τύπος αυτού του μνημείου ήταν ιδιαίτερα διαδεδομένος κατά την ελληνιστική εποχή. Τα αναθήματα με τη θεά Νίκη πάνω σε πλώρη πλοίου εμφανίστηκαν αρχικά στη Ρόδο τον 3ο αιώνα π.Χ. και συνδέονταν κυρίως με μεγάλες ναυτικές νίκες. Το πιο διάσημο παράδειγμα είναι η Νίκη της Σαμοθράκης — ένα από τα σημαντικότερα αριστουργήματα της αρχαίας ελληνικής τέχνης. Η ομοιότητα του μνημείου της Θάσου με τη Νίκη της Σαμοθράκης δείχνει ότι και οι Θάσιοι επηρεάζονταν από τα μεγάλα καλλιτεχνικά ρεύματα της ελληνιστικής περιόδου.\n\nΣτην ελληνική μυθολογία, η θεά Νίκη προσωποποιούσε τη νίκη, τον θρίαμβο και την επιτυχία. Ήταν φτερωτή θεότητα και συνόδευε συχνά τον Δία και την Αθηνά, μεταφέροντας τη νίκη στους θεούς και στους ανθρώπους. Σύμφωνα με τον Ησίοδο, ήταν κόρη του Τιτάνα Πάλλαντα και της Στύγας, αδελφή του Ζήλου, του Κράτους και της Βίας. Τα χαρακτηριστικά της ήταν τα μεγάλα ανοιχτά φτερά, η δυναμική κίνηση του σώματος και το στεφάνι για τους θριαμβευτές.\n\nΗ Νίκη της Θάσου πιθανότατα δημιουργήθηκε για να τιμήσει μια μεγάλη ναυτική ή στρατιωτική επιτυχία της πόλης. Η αρχαία Θάσος διέθετε ισχυρό στόλο και σημαντική οικονομική δύναμη χάρη στα μεταλλεία χρυσού και αργύρου, στο εμπόριο, στα περίφημα λατομεία μαρμάρου και στις αποικίες της στο βόρειο Αιγαίο. Ένα τόσο επιβλητικό μνημείο θα αποτελούσε σύμβολο ισχύος, πλούτου και πολιτικής επιρροής.\n\nΜέχρι σήμερα, το άγαλμα της Νίκης της Θάσου δεν έχει εντοπιστεί και η τύχη του παραμένει άγνωστη. Οι αρχαιολόγοι έχουν διατυπώσει διάφορες θεωρίες: ίσως μεταφέρθηκε κατά τη ρωμαϊκή εποχή ως πολεμικό λάφυρο, πιθανόν καταστράφηκε από σεισμούς ή επιδρομές, ίσως αφιερώθηκε σε άλλο ιερό του αρχαίου κόσμου, ή κάποιοι το συνδέουν με γλυπτά Νίκης που βρέθηκαν στη Σαμοθράκη. Ωστόσο, καμία από αυτές τις θεωρίες δεν έχει αποδειχθεί αρχαιολογικά.\n\nΤο μνημείο εξακολουθεί να αποτελεί ένα από τα μεγαλύτερα χαμένα μυστήρια της αρχαίας Θάσου και συνεχίζει να προκαλεί το ενδιαφέρον ιστορικών και αρχαιολόγων.",
    descriptionEn: "The Nike of Thassos is one of the most mysterious and impressive lost works of Hellenistic sculpture — a winged goddess seemingly in flight, known from ancient descriptions and coin impressions.",
    descriptionTr: `"Taşos'un Nike Heykeli" olarak bilinen eser, Helenistik dönem heykel sanatının en etkileyici ve aynı zamanda en gizemli kayıp eserlerinden biridir. Günümüzde heykelin kendisi korunmamıştır; yalnızca MÖ 2. yüzyıla ait büyük bir adak anıtının parçası olan mermer kaidesi günümüze ulaşmıştır.

Bu kaide, bir savaş gemisinin pruvası şeklinde yapılmıştı ve üzerinde zafer tanrıçası Nike'nin heykeli yükseliyordu. Gemi pruvası biçimi açıkça büyük bir deniz zaferini simgeliyordu ve Taşosluların askeri gücünü ve görkemini temsil eden bir anıt niteliğindeydi. Büyük olasılıkla antik Taşos'un önemli bir kutsal alanında veya kamusal bir noktasında bulunuyordu, böylece hem halk hem de ziyaretçiler kentin denizcilik gücünü görebiliyordu.

Bu tür anıtlar Helenistik dönemde oldukça yaygındı. Gemi pruvası üzerinde duran Nike figürleri ilk kez MÖ 3. yüzyılda Rodos'ta ortaya çıkmış ve büyük deniz zaferleriyle ilişkilendirilmiştir. Bu sanat anlayışının en ünlü örneği elbette Semadirek Nike'sidir. Taşos'taki anıtın Semadirek Nike'sine olan benzerliği, Taşosluların da Helenistik dönemin büyük sanat akımlarından etkilendiğini göstermektedir.

Yunan Mitolojisinde Nike Tanrıçası

Yunan mitolojisinde Nike, zaferin, başarının ve ihtişamın kişileştirilmiş hâliydi. Kanatlı bir tanrıça olarak tasvir edilir ve çoğu zaman Zeus ile Athena'nın yanında yer alırdı.

Hesiodos'a göre Nike, Titan Pallas ile Styx'in kızıdır ve Zelos, Kratos ve Bia'nın kardeşidir. Bazı geleneklerde ise savaş tanrısı Ares'in kızı olarak kabul edilmiştir.

Tanrıçanın temel özellikleri şunlardı:

büyük açık kanatları
bedeninin dinamik hareketi
kazananların, komutanların ve tanrıların yanında bulunması
zafer kazananları taçlandırmak için taşıdığı çelenk.

Nike'nin ilk tasvirleri MÖ 6. yüzyılda ortaya çıkmış, Helenistik dönemde ise heykel ve sanatta son derece popüler hâle gelmiştir.

Anıtın Olası Anlamı

Taşos'un Nike anıtı büyük olasılıkla kentin önemli bir deniz veya askeri zaferini kutlamak amacıyla yapılmıştır. Antik Taşos güçlü bir donanmaya ve büyük ekonomik güce sahipti. Bu güç şunlardan kaynaklanıyordu:

altın ve gümüş madenleri
ticaret
ünlü mermer ocakları
kuzey Ege'deki koloniler ve ticari ilişkiler.

Bu nedenle böylesine görkemli bir anıt, Taşosluların zenginliğini, siyasi etkisini ve deniz üstünlüğünü simgeliyordu.

Kayıp Heykelin Gizemi

Bugüne kadar Taşos'un Nike heykeli bulunamamıştır ve kaderi hâlâ bilinmemektedir. Arkeologlar çeşitli teoriler ortaya koymuştur:

Roma döneminde savaş ganimeti olarak taşınmış olabilir
deprem veya istilalar sırasında yok olmuş olabilir
başka bir kutsal alana adanmış olabilir
Semadirek'te bulunan Nike heykelleriyle bağlantılı olabilir
Filippoi Arkeolojik Alanı'ndaki anıtlarla ilişkili olabilir.

Ancak bu teorilerin hiçbiri arkeolojik olarak kanıtlanmamıştır. Bu anıt hâlâ antik Taşos'un en büyük gizemlerinden biri olarak kabul edilmekte ve tarihçiler ile arkeologların ilgisini çekmeye devam etmektedir.`,
    descriptionDe: `Die sogenannte „Nike von Thasos" gehört zu den geheimnisvollsten und eindrucksvollsten verlorenen Werken der hellenistischen Bildhauerkunst. Leider ist heute nicht mehr die Statue selbst erhalten, sondern nur noch ihre marmorne Basis, die das einzige Überbleibsel eines großen Weihmonumentes aus dem 2. Jahrhundert v. Chr. darstellt.

Diese Basis hatte die Form eines Kriegsschiffbugs, auf dem einst die Statue der Göttin Nike stand. Die Form des Schiffbugs symbolisierte eindeutig einen bedeutenden Seesieg der antiken Thasier und stellte ein Denkmal des Triumphs und Ruhmes dar.

Das Monument war vermutlich einem wichtigen Heiligtum oder öffentlichen Platz der antiken Stadt Thasos gewidmet, damit es sowohl die Einwohner als auch Besucher an die Macht und die maritime Stärke der Insel erinnerte.

Dieser Monumenttyp war während der hellenistischen Epoche besonders verbreitet. Weihgaben mit der Göttin Nike auf einem Schiffbug erschienen erstmals im 3. Jahrhundert v. Chr. auf Rhodos und standen meist im Zusammenhang mit großen Seesiegen.

Das berühmteste Beispiel dieses künstlerischen Typs ist natürlich die Nike von Samothrake, eines der bedeutendsten Meisterwerke der antiken griechischen Kunst. Die Ähnlichkeit des thasischen Monumentes mit der Nike von Samothrake zeigt, dass auch die Thasier von den großen künstlerischen Strömungen der hellenistischen Zeit beeinflusst wurden.

Die Göttin Nike in der griechischen Mythologie

In der griechischen Mythologie verkörperte die Göttin Nike den Sieg, den Triumph und den Erfolg. Sie war eine geflügelte Gottheit und begleitete häufig Zeus und Athene, indem sie den Göttern und Menschen den Sieg brachte.

Nach Hesiod war Nike die Tochter des Titanen Pallas und der Styx sowie Schwester von Zelos, Kratos und Bia. In anderen Überlieferungen galt sie als Tochter des Ares, des Kriegsgottes.

Die wichtigsten Merkmale der Göttin waren:
• ihre großen ausgebreiteten Flügel,
• die dynamische Bewegung ihres Körpers,
• ihre Anwesenheit an der Seite von Siegern, Feldherren und Göttern,
• sowie der Kranz, den sie trug, um die Triumphierenden zu krönen.

Die ersten Darstellungen der Göttin erscheinen bereits im 6. Jahrhundert v. Chr., während ihre Gestalt in der hellenistischen Zeit besonders beliebt in Kunst und Bildhauerei wurde.

Die mögliche Bedeutung des Monumentes

Die Nike von Thasos wurde wahrscheinlich geschaffen, um einen großen militärischen oder maritimen Sieg der Stadt zu ehren.

Das antike Thasos verfügte über eine starke Flotte und große wirtschaftliche Macht dank:
• der Gold- und Silberminen,
• des Handels,
• der berühmten Marmorsteinbrüche,
• sowie seiner Kolonien und Handelsbeziehungen in der nördlichen Ägäis.

Ein so monumentales Denkmal stellte daher ein Symbol für Macht, Reichtum und politischen Einfluss der Thasier in der antiken Welt dar.

Das Rätsel der verlorenen Statue

Bis heute wurde die Statue der Nike von Thasos nicht gefunden, und ihr Schicksal bleibt unbekannt. Archäologen haben verschiedene Theorien aufgestellt:
• vielleicht wurde sie in römischer Zeit als Kriegsbeute fortgebracht,
• möglicherweise wurde sie durch Erdbeben oder Angriffe zerstört,
• vielleicht wurde sie in einem anderen Heiligtum der antiken Welt wieder aufgestellt,
• einige bringen sie mit Nike-Statuen in Verbindung, die auf Samothrake gefunden wurden,
• andere vermuten eine Beziehung zu Monumenten der archäologischen Stätte von Philippi.

Keine dieser Theorien konnte jedoch bislang archäologisch bewiesen werden.

Das Monument bleibt eines der größten verlorenen Rätsel des antiken Thasos und fasziniert weiterhin Historiker und Archäologen.`,
    descriptionRo: `Așa-numita „Nike din Thasos" reprezintă una dintre cele mai misterioase și impresionante opere pierdute ale sculpturii elenistice. Din păcate, astăzi nu se mai păstrează statuia propriu-zisă, ci doar baza sa de marmură, care constituie singura rămășiță a unui mare monument votiv din secolul al II-lea î.Hr.

Această bază avea forma provei unei nave de război, pe care se afla statuia zeiței Nike. Forma provei simboliza în mod clar o mare victorie navală a thasienilor și reprezenta un monument al triumfului și gloriei.

Monumentul era probabil dedicat unui sanctuar important sau unui spațiu public al orașului antic Thasos, pentru a le aminti locuitorilor și vizitatorilor de puterea și dominația maritimă a insulei.

Acest tip de monument era foarte răspândit în perioada elenistică. Monumentele votive cu zeița Nike amplasată pe prova unei nave au apărut pentru prima dată în Rhodos, în secolul al III-lea î.Hr., și erau asociate în special cu marile victorii navale.

Cel mai celebru exemplu al acestui tip artistic este, desigur, Nike din Samothrake, una dintre cele mai importante capodopere ale artei grecești antice. Asemănarea monumentului din Thasos cu Nike din Samothrake arată că și thasienii erau influențați de marile curente artistice ale epocii elenistice.

Zeița Nike în mitologia greacă

În mitologia greacă, zeița Nike personifica victoria, triumful și succesul. Era o divinitate înaripată și îi însoțea adesea pe Zeus și Atena, aducând victoria zeilor și oamenilor.

Potrivit lui Hesiod, Nike era fiica titanului Pallas și a Styxului și sora lui Zelos, Kratos și Bia. În alte tradiții era considerată fiica lui Ares, zeul războiului.

Principalele caracteristici ale zeiței erau:
• aripile sale mari și deschise,
• mișcarea dinamică a corpului,
• prezența sa alături de învingători, generali și zei,
• coroana pe care o ținea pentru a-i încununa pe triumfători.

Primele reprezentări ale zeiței apar încă din secolul al VI-lea î.Hr., iar în perioada elenistică figura ei a devenit extrem de populară în artă și sculptură.

Semnificația posibilă a monumentului

Nike din Thasos a fost probabil creată pentru a celebra o mare victorie navală sau militară a orașului.

Thasosul antic dispunea de o flotă puternică și de o mare putere economică datorită:
• minelor de aur și argint,
• comerțului,
• celebrelor cariere de marmură,
• coloniilor și relațiilor comerciale din nordul Mării Egee.

Astfel, un monument atât de impunător reprezenta un simbol al puterii, bogăției și influenței politice a thasienilor în lumea antică.

Misterul statuii pierdute

Până astăzi, statuia Nike din Thasos nu a fost descoperită, iar destinul ei rămâne necunoscut. Arheologii au formulat diverse teorii:
• poate a fost transportată în perioada romană ca pradă de război,
• posibil a fost distrusă de cutremure sau invazii,
• poate a fost dedicată unui alt sanctuar al lumii antice,
• unii o leagă de statuile Nike descoperite în Samothrake,
• alții presupun o posibilă legătură cu monumentele sitului arheologic de la Philippi.

Totuși, niciuna dintre aceste teorii nu a fost demonstrată arheologic.

Monumentul continuă să reprezinte unul dintre cele mai mari mistere pierdute ale Thasosului antic și continuă să stârnească interesul istoricilor și arheologilor.`,
    descriptionBg: `Така наречената „Ника на Тасос" представлява едно от най-мистериозните и впечатляващи изгубени произведения на елинистическата скулптура. За съжаление днес самата статуя не е запазена — оцеляла е единствено мраморната ѝ основа, която е единственият остатък от голям оброчен паметник от II век пр. Хр.

Тази основа имала формата на носа на военен кораб, върху който стояла статуята на богинята Ника. Формата на корабния нос ясно символизирала голяма морска победа на древните тасосци и представлявала паметник на триумфа и славата. Паметникът вероятно бил посветен в важно светилище или обществено място на древния град Тасос, за да напомня на жителите и посетителите за силата и морското могъщество на острова.

Този тип паметници бил особено разпространен през елинистическата епоха. Оброчните паметници с богинята Ника върху корабен нос се появили първо на Родос през III век пр. Хр. и били свързвани главно с големи морски победи. Най-известният пример за този художествен тип е, разбира се, Ника от Самотраки — един от най-великите шедьоври на древногръцкото изкуство. Приликата между паметника на Тасос и Никата от Самотраки показва, че и тасосците били повлияни от големите художествени течения на елинистическия период.

Богинята Ника в гръцката митология

В гръцката митология богинята Ника олицетворявала победата, триумфа и успеха. Тя била крилато божество и често придружавала Зевс и Атина, носейки победата на боговете и хората.

Според Хезиод Ника била дъщеря на титана Палант и Стикс и сестра на Зелос, Кратос и Биа. В други предания тя се смятала за дъщеря на Арес.

Основните характеристики на богинята били:
• големите ѝ разперени крила
• динамичното движение на тялото
• присъствието ѝ до победители, военачалници и богове
• венецът, който държала, за да коронова победителите.

Първите изображения на богинята се появяват още през VI век пр. Хр., а през елинистическата епоха образът ѝ станал особено популярен в изкуството и скулптурата.

Вероятното значение на паметника

Никата на Тасос вероятно била създадена, за да почете голям морски или военен успех на града. Древният Тасос разполагал със силен флот и значителна икономическа мощ благодарение на:
• златните и сребърните мини
• търговията
• прочутите мраморни кариери
• колониите и търговските връзки в северната част на Егейско море.

Следователно толкова внушителен паметник би представлявал символ на сила, богатство и политическо влияние на тасосците в древния свят.

Мистерията на изгубената статуя

До днес статуята на Никата на Тасос не е открита и съдбата ѝ остава неизвестна. Археолозите са предложили различни теории:
• може би е била пренесена през римската епоха като военен трофей
• вероятно е била разрушена от земетресения или нападения
• възможно е да е била посветена в друго светилище на древния свят
• някои я свързват със статуи на Ника, открити на Самотраки
• други предполагат връзка с паметници от Археологически обект Филипи.

Въпреки това никоя от тези теории не е доказана археологически. Паметникът продължава да бъде една от най-големите изгубени загадки на древния Тасос и все още предизвиква интереса на историци и археолози.`,
    mapX: 25, mapY: 48,    mapsUrl: "https://maps.app.goo.gl/ta4Q5MbwYM3A14x8A",
  },
  {
    id: 16, num: "16",
    title: "Βορειοανατολική Στοά", titleEn: "North-East Stoa",
    titleTr: "Kuzeydoğu Stoası",
    category: "Στοά", categoryEn: "Stoa",
    categoryTr: "Stoa",
    duration: "6 λεπτά", durationSec: 360,
    imageId: IMGS[3],
    description: "Η στοά που βρισκόταν δίπλα στο Κτήριο με τα Παρασκήνια αποτελούσε ένα από τα σημαντικά αρχιτεκτονικά στοιχεία της αρχαίας Αγοράς της Θάσου και συνδεόταν άμεσα με τη δημόσια και πολιτική ζωή της πόλης. Η θέση της, σε επαφή με ένα από τα σημαντικότερα δημόσια οικοδομήματα της αγοράς, δείχνει ότι αποτελούσε τμήμα ενός ευρύτερου διοικητικού και εμπορικού συγκροτήματος. Οι στοές στην αρχαία Ελλάδα δεν ήταν απλώς στεγασμένοι διάδρομοι — λειτουργούσαν ως χώροι συνάντησης, περιπάτου, συζητήσεων, εμπορικών συναλλαγών αλλά και δημόσιων ανακοινώσεων.\n\nΈνα από τα στεγάστρα της στοάς κατασκευάστηκε χάρη στη δωρεά ενός πλούσιου πολίτη της Θάσου. Παρότι το όνομά του δεν σώθηκε, διατηρήθηκαν στο επιστύλιο τα τελευταία γράμματα της αφιερωματικής επιγραφής προς τον δήμο των Θασίων. Η επιγραφή αυτή αποτελούσε δημόσια αναγνώριση της προσφοράς του και ήταν χαραγμένη σε εμφανές σημείο ώστε να τη βλέπουν όλοι όσοι περνούσαν από την αγορά.\n\nΗ πρόσοψη της στοάς περιλάμβανε έντεκα δωρικούς κίονες, οι οποίοι σχημάτιζαν μια επιβλητική κιονοστοιχία προς τον ανοιχτό χώρο της αγοράς. Ο δωρικός ρυθμός, ο αρχαιότερος και αυστηρότερος από τους ελληνικούς αρχιτεκτονικούς ρυθμούς, χαρακτηριζόταν από λιτότητα, αρμονία και δύναμη. Οι στιβαροί κίονες χωρίς βάση, με απλό κιονόκρανο, δημιουργούσαν έναν σκιερό και προστατευμένο χώρο για τους πολίτες.\n\nΣτο εσωτερικό της, η στοά πιθανότατα χρησιμοποιούνταν ως χώρος αναμονής, συναλλαγών και δημόσιων συγκεντρώσεων. Η γειτνίασή της με το Κτήριο με τα Παρασκήνια υποδηλώνει ότι ίσως σχετιζόταν και με επίσημες τελετές ή διοικητικές δραστηριότητες της πόλης.\n\nΚατά τη ρωμαϊκή αυτοκρατορική εποχή πραγματοποιήθηκαν σημαντικές αλλαγές στη διαρρύθμιση. Τότε η αίθουσα της στοάς επικοινωνούσε με την πλατεία κοντά στη Δίοδο των Θεωρών μέσω μιας πλάγιας θύρας. Η Δίοδος των Θεωρών ήταν ένα από τα σημαντικότερα περάσματα της αγοράς, από όπου περνούσαν επίσημες πομπές, απεσταλμένοι και θρησκευτικές αποστολές. Η δημιουργία της πλάγιας εισόδου φανερώνει ότι το οικοδόμημα συνέχισε να χρησιμοποιείται ενεργά και στους ρωμαϊκούς χρόνους.\n\nΟι μετατροπές αυτές αποδεικνύουν ότι η αρχαία αγορά της Θάσου δεν παρέμεινε στατική αλλά εξελισσόταν συνεχώς ανάλογα με τις ανάγκες της πόλης. Η στοά, από την ελληνιστική έως και τη ρωμαϊκή εποχή, διατηρούσε τον ρόλο της ως σημαντικό κέντρο δημόσιας ζωής, όπου συνδυάζονταν η αρχιτεκτονική μεγαλοπρέπεια, η πολιτική λειτουργία και η καθημερινή δραστηριότητα των κατοίκων.",
    descriptionEn: "The north-east stoa of the Ancient Agora was one of the key architectural elements, connected to the Building with Wings, providing a covered gathering space for citizens and merchants.",
    descriptionTr: `Paraskenia Yapısı'nın yanında bulunan stoa, Taşos Antik Agorası'nın en önemli mimari unsurlarından biriydi ve kentin kamusal ile siyasi yaşamıyla doğrudan bağlantılıydı. En önemli kamu yapılarından birinin hemen yanında yer alması, onun daha geniş bir idari ve ticari kompleksin parçası olduğunu göstermektedir. Burada vatandaşlar, yöneticiler, tüccarlar ve ziyaretçiler bir araya geliyordu. Antik Yunan'da stoalar yalnızca üstü kapalı geçitler değildi; aynı zamanda buluşma, yürüyüş, tartışma, ticaret ve kamu duyurularının yapıldığı alanlardı.

Stoanın çatılı bölümlerinden biri, Taşoslu zengin bir vatandaşın bağışı sayesinde inşa edilmişti. Bu durum, antik Yunan kentlerinde hayırseverliğin ne kadar önemli olduğunu göstermektedir. Varlıklı kişiler tapınakların, stoaların ve kamu yapılarının inşasını finanse ederek toplumsal saygınlık kazanırlardı. Bağışçının adı günümüze ulaşmamış olsa da, Taşoslular halkına adanmış yazıtın son harfleri arşitrav üzerinde korunmuştur. Bu yazıt herkesin görebileceği görünür bir noktaya yerleştirilmişti.

Stoanın cephesinde on bir Dor düzeni sütun bulunuyordu ve bunlar agoranın açık alanına bakan etkileyici bir sütun dizisi oluşturuyordu. Dor düzeni, Yunan mimarisinin en eski ve en sade düzenlerinden biridir; güç, sadelik ve uyum hissi verir. Sütunlar sağlam yapılıydı, kaidesizdi ve sade başlıklara sahipti. Bu mimari tarz yapıya hem görkem hem de işlevsellik kazandırıyordu; çünkü vatandaşlar için gölgeli ve korunaklı bir alan sağlıyordu.

İç mekân muhtemelen bekleme alanı, ticaret yeri ve kamu toplantıları için kullanılıyordu. Antik agoralardaki stoalar sıklıkla dükkânlara, kamu hizmetlerine ve idari faaliyetlere ev sahipliği yapıyordu. Paraskenia Yapısı'na yakınlığı, bu alanın resmi törenlerle veya yönetsel işlevlerle bağlantılı olabileceğini düşündürmektedir.

Roma İmparatorluk döneminde agora ve stoa düzeninde önemli değişiklikler yapıldı. Bu dönemde stoa salonu, Theoroi Geçidi yakınındaki meydanla yan taraftaki bir kapı aracılığıyla bağlantılı hâle geldi. Theoroi Geçidi, resmi alayların, elçilerin ve dini heyetlerin geçtiği önemli geçiş noktalarından biriydi. Bu yan giriş, kamusal alanlar arasındaki iletişimi kolaylaştırıyor ve yapının Roma döneminde de aktif olarak kullanılmaya devam ettiğini gösteriyordu.

Bu değişiklikler, Taşos Agorası'nın zaman içinde gelişmeye devam ettiğini göstermektedir. Kuzeydoğu Stoası, Helenistik dönemden Roma dönemine kadar kamusal yaşamın önemli merkezlerinden biri olmayı sürdürmüş; mimari görkem, siyasi işlev ve günlük yaşam burada birleşmiştir.`,
    mapX: 22, mapY: 40,    mapsUrl: "https://maps.app.goo.gl/qfuxMZo6ZTtePK399",
  },
  {
    id: 17, num: "17",
    title: "Στοά σε Γ & Υπόστυλη Αίθουσα", titleEn: "L-shaped Stoa & Hypostyle Hall",
    titleTr: "Γ Şeklindeki Stoa ve Hipostil Salon",
    titleBg: "Стоа във форма на Г и Хипостилна зала",
    titleDe: "Γ-förmige Stoa und Säulenhalle",
    titleSr: "Stoa u obliku Γ i hipostilna dvorana",
    titleRo: "Stoa în formă de Γ și Sala Hipostilă",
    titleIt: "Stoa a forma di Γ e Sala Ipostila",
    titleFr: "Stoa en forme de Γ et Salle Hypostyle",
    category: "Στοά", categoryEn: "Stoa",
    categoryTr: "Stoa",
    categoryBg: "Стоа",
    categoryDe: "Stoa",
    categorySr: "Stoa",
    categoryRo: "Stoa",
    categoryIt: "Stoa",
    categoryFr: "Stoa",
    duration: "7 λεπτά", durationSec: 420,
    imageId: IMGS[4],
    description: "Η Στοά σε σχήμα Γ και η Υπόστυλη Αίθουσα αποτελούσαν ένα από τα μεγαλύτερα και εντυπωσιακότερα οικοδομικά συγκροτήματα της αρχαίας Αγοράς της Θάσος. Το μνημειακό αυτό σύνολο καταλάμβανε σχεδόν ολόκληρη την ανατολική πλευρά της αγοράς και συνδύαζε εμπορικές, διοικητικές αλλά και θρησκευτικές λειτουργίες, φανερώνοντας τον πλούτο και την πολιτιστική ανάπτυξη της πόλης κατά την ελληνιστική και κυρίως τη ρωμαϊκή εποχή.\n\nΗ μεγάλη επιμήκης στοά ξεκινούσε από τη βορειοανατολική γωνία της αγοράς και εκτεινόταν προς τα νότια, όπου στρεφόταν προς τα δυτικά σχηματίζοντας το γράμμα Γ. Στην πρόσοψή της υπήρχαν τριάντα τρεις δωρικοί μονολιθικοί κίονες κατά μήκος της νοτιοανατολικής πλευράς και ακόμη έξι κίονες στη γωνία. Σήμερα σώζονται αρκετά τμήματα, ενώ μπροστά από την κιονοστοιχία έχουν τοποθετηθεί αρχιτεκτονικά μέλη του θριγκού, βοηθώντας τον επισκέπτη να κατανοήσει την αρχική μορφή.\n\nΠίσω από την εξωτερική κιονοστοιχία υπήρχε μαρμαροθετημένος τοίχος με πέντε μεγάλα ανοίγματα και παράθυρα που οδηγούσαν σε μία μεγάλη υπόστυλη αίθουσα πλάτους περίπου εννέα μέτρων. Η αίθουσα χωριζόταν σε δύο κλίτη από μία σειρά δεκαέξι τετράγωνων πεσσών από πωρόλιθο, οι οποίοι πατούσαν σε μαρμάρινες βάσεις και έφεραν μαρμάρινα πεσσόκρανα. Πιθανότατα το συγκρότημα ήταν διώροφο.\n\nΤο συγκρότημα φαίνεται ότι ακολουθούσε τον προσανατολισμό παλαιότερου οικοδομήματος του τέλους του 4ου αιώνα π.Χ. Στο πίσω μέρος υπήρχαν καταστήματα, εργαστήρια και πιθανόν μικρές κατοικίες. Η ύπαρξη πηγαδιών, νεροχυτών και αποχετευτικών αγωγών αποδεικνύει ότι οι χώροι αυτοί χρησιμοποιούνταν καθημερινά από εμπόρους, τεχνίτες και κατοίκους.\n\nΗ Στοά και η Υπόστυλη Αίθουσα λειτουργούσαν ως σημαντικό εμπορικό και κοινωνικό κέντρο. Η αρχαία αγορά ήταν η «καρδιά» της δημόσιας ζωής, όπου συγκεντρώνονταν πολίτες, έμποροι, ναυτικοί και τεχνίτες. Η Θάσος, χάρη στο σημαντικό λιμάνι της, στα μεταλλεία χρυσού και αργύρου και στο περίφημο λευκό μάρμαρό της, εξελίχθηκε σε ένα από τα σημαντικότερα εμπορικά και ναυτικά κέντρα του βόρειου Αιγαίου.\n\nΤο μνημειακό συγκρότημα χρονολογείται πιθανότατα στον 1ο αιώνα π.Χ. ή στις αρχές του 1ου αιώνα μ.Χ. και θεωρείται χαρακτηριστικό παράδειγμα τοπικής προσαρμογής της ρωμαϊκής βασιλικής — μεγάλου δημόσιου οικοδομήματος για εμπορικές δραστηριότητες, διοικητικές υποθέσεις και δημόσιες συγκεντρώσεις. Η αρχιτεκτονική μορφή δείχνει τη στενή επαφή της πόλης με τον ρωμαϊκό κόσμο.\n\nΣτη νοτιοδυτική πλευρά υπήρχε αψιδωτή αίθουσα με πλούσια μαρμαροθέτηση, η οποία κατά τη ρωμαϊκή εποχή συνδέθηκε με την αυτοκρατορική λατρεία. Εκεί βρέθηκε άγαλμα του αυτοκράτορα Αδριανού, ενώ η αίθουσα επικοινωνούσε με την αγορά μέσω μνημειακών διόδων με ιωνικούς κίονες και μεγάλες πύλες.\n\nΗ Στοά σε σχήμα Γ και η Υπόστυλη Αίθουσα αποτελούν σήμερα ένα από τα σημαντικότερα μνημεία της αρχαίας αγοράς. Αποκαλύπτουν τη μεγάλη οικονομική άνθηση και τη διεθνή ακτινοβολία της Θάσου, μαρτυρώντας τον τρόπο με τον οποίο η αρχιτεκτονική εξυπηρετούσε το εμπόριο, τη διοίκηση, την κοινωνική ζωή και τη λατρεία μέσα στον δημόσιο χώρο.",
    descriptionEn: "The L-shaped Stoa and Hypostyle Hall formed one of the largest and most impressive building complexes of the ancient Agora, extending along its western and southern sides.",
    descriptionTr: `Γ şeklindeki Stoa ve Hipostil Salon, Taşos Antik Agorası'nın en büyük ve en etkileyici yapı komplekslerinden biriydi. Bu anıtsal yapı topluluğu agoranın neredeyse tüm doğu tarafını kaplıyor ve ticari, idari ve dini işlevleri bir araya getiriyordu. Böylece kentin Helenistik ve özellikle Roma dönemlerindeki zenginliğini, ekonomik gücünü ve kültürel gelişimini yansıtıyordu.

Uzun stoa, agoranın kuzeydoğu köşesinden başlıyor, güneye doğru uzanıyor ve ardından batıya dönerek Γ harfi biçimini oluşturuyordu. Cephesinde güneydoğu boyunca otuz üç Dor düzeni monolit sütun ve köşe kısmında altı sütun daha bulunuyordu. Bu sütunlar çatıyı taşıyor ve vatandaşların yürüyebileceği, sohbet edebileceği, ticaret yapabileceği ve hava koşullarından korunabileceği geniş kapalı alanlar oluşturuyordu. Günümüzde yapının birçok bölümü korunmuştur ve ön tarafa yerleştirilen mimari parçalar ziyaretçilere yapının eski görkemini anlamada yardımcı olmaktadır.

Dış sütun sırasının arkasında, beş büyük açıklık ve pencereye sahip mermer kaplı bir duvar bulunuyordu. Bu açıklıklar yaklaşık dokuz metre genişliğinde büyük bir hipostil salona açılıyordu. Salon, poros taşından yapılmış on altı kare paye dizisiyle iki nefe ayrılmıştı. Payeler mermer kaideler üzerine oturuyor ve mermer başlıklar taşıyordu; bu durum iç mekâna zenginlik ve anıtsallık kazandırıyordu. Yapının muhtemelen iki katlı olduğu düşünülmektedir; bu da doğu tarafından agoraya giren ziyaretçiler üzerinde daha da etkileyici bir görünüm yaratıyordu.

Kompleksin planı, MÖ 4. yüzyıl sonlarına ait daha eski bir yapının yönelimini takip ediyor gibi görünmektedir. Bu yapı Roma dönemine kadar kullanılmaya ve uyarlanmaya devam etmiştir. Stoanın arka kısmında dükkânlar, atölyeler ve muhtemelen küçük konutlar bulunuyordu. Kuyuların, lavaboların ve kanalizasyon sistemlerinin varlığı, bu alanların tüccarlar, zanaatkârlar ve kent sakinleri tarafından günlük olarak kullanıldığını göstermektedir.

Stoa ve Hipostil Salon, antik Taşos'un önemli ticari ve sosyal merkezlerinden biriydi. Dükkânlarda ürünler, hammaddeler ve deniz ticareti yoluyla adaya gelen değerli mallar alınıp satılıyordu. Agora, vatandaşların, tüccarların, denizcilerin ve zanaatkârların buluştuğu kamusal yaşamın kalbiydi. Ticaret, antik Yunan ekonomisinin temel dayanaklarından biriydi; Yunan kentleri şarap, zeytinyağı, seramik, kumaş, metal ve mermeri Akdeniz'in farklı bölgeleriyle değiş tokuş ediyordu. Taşos ise limanı, altın ve gümüş madenleri ile ünlü beyaz mermeri sayesinde kuzey Ege'nin en önemli ticaret ve denizcilik merkezlerinden biri hâline gelmişti.

Bu anıtsal kompleks muhtemelen MÖ 1. yüzyıl veya MS 1. yüzyılın başlarına tarihlenmektedir ve Roma bazilikasının yerel bir uyarlaması olarak kabul edilir. Roma bazilikaları ticari faaliyetler, idari işler, mahkemeler ve kamu toplantıları için kullanılan büyük kamu yapılarıydı. Taşos'taki stoanın mimari biçimi, kentin Roma dünyasıyla olan yakın ilişkisini göstermektedir.

Kompleksin güneybatı tarafında ayrıca zengin mermer süslemelere sahip apsisli bir salon bulunuyordu. Roma İmparatorluk döneminde bu salon imparator kültüyle ilişkilendirildi. Burada Roma İmparatoru Hadrianus'un heykeli bulunmuştur; bu da alanın imparatorlara adanan törenlerde kullanıldığını göstermektedir. Salon, İyon düzeni sütunlara sahip anıtsal geçitler ve büyük kapılar aracılığıyla agora ile bağlantılıydı. Böylece siyasi güç, din ve kamusal yaşam tek bir görkemli mimari bütün içinde birleşiyordu.

Γ şeklindeki Stoa ve Hipostil Salon bugün Taşos Antik Agorası'nın en önemli anıtlarından biri olarak kabul edilmektedir. Bu yapı, antik kentin ekonomik refahını, gücünü ve uluslararası etkisini ortaya koyarken; mimarinin ticaret, yönetim, toplumsal yaşam ve ibadet için nasıl kullanıldığını da göstermektedir.`,
    descriptionBg: `Стоата във формата на буквата Г и Хипостилната зала представлявали един от най-големите и впечатляващи архитектурни комплекси на древната Агора на Тасос. Този монументален ансамбъл заемал почти цялата източна страна на агората и съчетавал търговски, административни и религиозни функции, разкривайки богатството, икономическата мощ и културното развитие на града през елинистическата и най-вече римската епоха.

Голямата продълговата стоа започвала от североизточния ъгъл на агората и се простирала на юг, след което завивала на запад, оформяйки буквата Г. На фасадата ѝ имало тридесет и три дорийски монолитни колони по югоизточната страна и още шест колони при ъгъла. Тези колони поддържали покрива на стоата и създавали широко покрито пространство, където гражданите можели да се разхождат, разговарят, извършват търговски сделки и да се предпазват от атмосферните условия. Днес са запазени значителни части от паметника, а пред колоните са поставени архитектурни елементи от антаблемента, които помагат на посетителя да разбере първоначалната форма и монументалността на сградата.

Зад външната колонада имало облицована с мрамор стена с пет големи отвора и прозорци, които водели към голяма хипостилна зала с ширина около девет метра. Залата била разделена на два кораба чрез редица от шестнадесет квадратни стълба, изградени от порест камък. Стълбовете стъпвали върху мраморни основи и били увенчани с мраморни капители, придавайки лукс и внушителност на вътрешността на сградата. Вероятно комплексът бил двуетажен, което го правело още по-впечатляващ за онези, които влизали в агората от източната страна.

Комплексът изглежда следвал ориентацията на по-стара сграда от края на IV век пр. Хр., която продължила да се използва и приспособява чак до римската епоха. В задната част на стоата имало магазини, работилници и вероятно малки жилища. Наличието на кладенци, мивки и канализационни канали доказва, че тези пространства се използвали ежедневно от търговци, занаятчии и жители на града, представлявайки оживен център на икономическа дейност.

Стоата и Хипостилната зала функционирали като важен търговски и обществен център на древния Тасос. В магазините се извършвали продажби на продукти, суровини и ценни стоки, които пристигали на острова чрез морската търговия. Древната агора била „сърцето" на обществения живот на града, където се събирали граждани, търговци, моряци и занаятчии. Търговията била основен стълб на икономиката на древна Гърция, тъй като гръцките градове обменяли вино, зехтин, керамика, тъкани, метали и мрамор с други райони на Егейско море и Средиземноморието. Тасос, благодарение на важното си пристанище, златните и сребърните мини и прочутия си бял мрамор, се превърнал в един от най-важните търговски и морски центрове на северното Егейско море.

Този монументален комплекс вероятно датира от I век пр. Хр. или началото на I век сл. Хр. и се счита за характерен пример за местна адаптация на римската базилика. Римските базилики били големи обществени сгради, използвани за търговски дейности, административни въпроси, съдилища и обществени събрания. Архитектурната форма на Стоата на Тасос показва тесния контакт на града с римския свят и новите архитектурни тенденции на епохата.

В югозападната страна на комплекса имало и апсидна зала с богата мраморна украса, която през римския императорски период била свързана с императорския култ. Там била открита статуя на римския император Адриан, което показва, че пространството се използвало за почитане на императорите. Залата се свързвала с агората чрез монументални проходи с йонийски колони и големи порти, създавайки впечатляващ архитектурен ансамбъл, който съчетавал политическата власт, религията и обществения живот.

Стоата във формата на Г и Хипостилната зала днес представляват едни от най-важните паметници на древната агора на Тасос. Тази сграда разкрива големия икономически разцвет, силата и международното влияние на древния град, като същевременно свидетелства за начина, по който архитектурата служела на търговията, управлението, обществения живот и култа в публичното пространство на древния гръцки и римски град.`,
    mapX: 25, mapY: 32,    mapsUrl: "https://maps.app.goo.gl/WiBLCHyMC8HbGfnP9",
  },
  {
    id: 18, num: "18",
    title: "Αρχαία Αρχιτεκτονική", titleEn: "Ancient Architecture",
    titleTr: "Antik Yunan Mimarisi",
    category: "Αρχιτεκτονική", categoryEn: "Architecture",
    categoryTr: "Mimari",
    duration: "7 λεπτά", durationSec: 420,
    imageId: IMGS[5],
    description: "Η αρχαία ελληνική αρχιτεκτονική, η οποία γνώρισε μεγάλη άνθηση από τον 9ο αιώνα π.Χ. έως και τον 1ο αιώνα μ.Χ., αποτελεί ένα από τα σημαντικότερα επιτεύγματα του αρχαίου ελληνικού πολιτισμού και άσκησε τεράστια επιρροή στην αρχιτεκτονική ολόκληρου του δυτικού κόσμου. Χαρακτηρίζεται από την αρμονία, τη συμμετρία, την ισορροπία των αναλογιών και την καθαρότητα των γραμμών, στοιχεία που αντανακλούσαν την ελληνική αντίληψη για το μέτρο, την τάξη και την αισθητική τελειότητα. Οι αρχαίοι Έλληνες δεν επιδίωκαν μόνο την πρακτικότητα των οικοδομημάτων τους, αλλά και την ιδανική ομορφιά, δημιουργώντας κτίρια που συνδύαζαν λειτουργικότητα και καλλιτεχνική αρτιότητα.\n\nΚεντρικό στοιχείο της ελληνικής αρχιτεκτονικής υπήρξαν οι τρεις μεγάλοι αρχιτεκτονικοί ρυθμοί: ο δωρικός, ο ιωνικός και ο κορινθιακός. Ο δωρικός ρυθμός θεωρείται ο αρχαιότερος και πιο αυστηρός — χαρακτηρίζεται από στιβαρούς κίονες χωρίς βάση, απλά κιονόκρανα και λιτή διακόσμηση, αποπνέοντας δύναμη και επιβλητικότητα. Ο ιωνικός ρυθμός είναι πιο κομψός και λεπτός, με κίονες που διαθέτουν βάση και χαρακτηριστικά ελικοειδή κιονόκρανα, προσδίδοντας χάρη και κομψότητα. Ο κορινθιακός ρυθμός εμφανίστηκε αργότερα και διακρίνεται για τον πλούσιο διάκοσμο, ιδιαίτερα στα περίτεχνα κιονόκρανα με φύλλα ακάνθου, εκφράζοντας πολυτέλεια και μεγαλοπρέπεια.\n\nΟι Έλληνες εφάρμοσαν αυτούς τους ρυθμούς σε ποικίλα δημόσια και θρησκευτικά οικοδομήματα. Οι ναοί αποτελούσαν τα σημαντικότερα μνημεία των πόλεων και ήταν αφιερωμένοι στους θεούς, με κορυφαίο παράδειγμα τον Παρθενώνα στην Ακρόπολη Αθηνών. Παράλληλα, κατασκεύασαν επιβλητικά θέατρα με εξαιρετική ακουστική, όπως το θέατρο της Επιδαύρου, μεγάλες στοές για εμπορικές και κοινωνικές δραστηριότητες, βουλευτήρια, γυμνάσια και αγορές που αποτελούσαν το κέντρο της δημόσιας ζωής.",
    descriptionEn: "Ancient Greek architecture flourished from the 9th century BC. In Thassos all three classical orders — Doric, Ionic, and Corinthian — appear in unique combinations reflecting the island's cosmopolitan connections.",
    descriptionTr: `Antik Yunan mimarisi, MÖ 9. yüzyıldan MS 1. yüzyıla kadar büyük bir gelişim göstermiş ve antik Yunan uygarlığının en önemli başarılarından biri hâline gelmiştir. Aynı zamanda tüm Batı dünyasının mimarisini derinden etkilemiştir. Bu mimari; uyum, simetri, oran dengesi ve çizgilerin sadeliğiyle karakterize edilir. Bu özellikler, Yunanların ölçü, düzen ve estetik mükemmellik anlayışını yansıtır. Antik Yunanlılar yalnızca işlevsel yapılar inşa etmeyi değil, aynı zamanda ideal güzelliği yaratmayı amaçlamışlardır. Böylece hem kullanışlı hem de sanatsal açıdan kusursuz yapılar ortaya çıkmıştır.

Antik Yunan mimarisinin temelini üç büyük mimari düzen oluşturuyordu: Dor, İyon ve Korinth düzenleri.

Dor Düzeni

Dor düzeni en eski ve en sade mimari düzendir. Kaidesiz sağlam sütunlar, basit sütun başlıkları ve sade süslemelerle karakterize edilir. Güç, disiplin ve görkem hissi verir.

İyon Düzeni

İyon düzeni daha zarif ve ince bir görünüme sahiptir. Sütunlar kaideli olup, karakteristik kıvrımlı başlıklara sahiptir. Bu düzen yapılara zarafet ve estetik bir yumuşaklık kazandırır.

Korinth Düzeni

Korinth düzeni daha geç ortaya çıkmıştır ve en süslü mimari düzendir. Özellikle akantus yapraklarıyla bezeli gösterişli sütun başlıklarıyla tanınır. Zenginlik, ihtişam ve görkemin sembolü olarak kabul edilirdi.

Yunanlılar bu mimari düzenleri çeşitli kamusal ve dini yapılarda kullandılar. Tapınaklar kentlerin en önemli yapılarıydı ve tanrılara adanmıştı. Bunun en ünlü örneği, Atina Akropolisi'ndeki Parthenon'dur.

Ayrıca mükemmel akustiğe sahip görkemli tiyatrolar inşa ettiler. Bunların en ünlülerinden biri Epidaurus Antik Tiyatrosu'dur. Bunun yanında stoalar, meclis binaları, gymnasionlar ve agoralar da inşa ederek kentlerin kamusal yaşam merkezlerini oluşturdular.`,
    mapX: 32, mapY: 24,    mapsUrl: "https://maps.app.goo.gl/rGZWBetXmPGrWzfz6",
  },
  {
    id: 19, num: "19",
    title: "Μνήμα του Γλαύκου", titleEn: "Tomb of Glaukos",
    titleTr: "Glaukos'un Anıtı",
    category: "Μνημείο", categoryEn: "Monument",
    categoryTr: "Anıt",
    duration: "6 λεπτά", durationSec: 360,
    imageId: IMGS[0],
    description: "Στην ανατολική γωνία της αρχαίας αγοράς της Θάσος βρισκόταν το Μνήμα του Γλαύκου, ένα από τα σημαντικότερα και πιο σεβαστά μνημεία της δημόσιας ζωής της αρχαίας πόλης. Το μνημείο αυτό δεν αποτελούσε απλώς έναν ταφικό χώρο, αλλά ένα ηρώο αφιερωμένο σε έναν από τους πρώτους αποίκους της Θάσου, που συνδέθηκε με την ίδρυση και τους πρώτους αγώνες της πόλης κατά τον 7ο αιώνα π.Χ.\n\nΟι άποικοι από την Πάρο εγκαταστάθηκαν στη Θάσο αναζητώντας νέες καλλιεργήσιμες εκτάσεις, εμπορικές δυνατότητες και πρόσβαση στα πλούσια μεταλλεία χρυσού και αργύρου της περιοχής. Η εγκατάστασή τους όμως δεν υπήρξε ειρηνική. Στο νησί κατοικούσαν ήδη θρακικά φύλα, τα οποία αντιστάθηκαν δυναμικά. Οι συγκρούσεις υπήρξαν σκληρές και αιματηρές, καθώς οι Πάριοι προσπαθούσαν να εδραιώσουν την παρουσία τους.\n\nΜέσα σε αυτές τις συγκρούσεις ξεχωρίζει η μορφή του Γλαύκου, γιου του Λεπτίνη, ο οποίος θεωρείται ένας από τους σημαντικούς πρώτους οικιστές της πόλης. Σύμφωνα με την παράδοση, ο Γλαύκος σκοτώθηκε σε μάχη εναντίον των Θρακών και αργότερα τιμήθηκε από τους συμπολίτες και τους απογόνους του ως ήρωας της αποικίας.\n\nΤο μνημείο του βρισκόταν σε εξαιρετικά σημαντικό σημείο — στη διασταύρωση δύο κεντρικών δρόμων. Ο ένας συνέδεε το Ηράκλειο και τη Δίοδο των Θεωρών με το αρχαίο θέατρο, ενώ ο άλλος κατηφόριζε από την αγορά προς τη θάλασσα και το λιμάνι. Η θέση αυτή επηρέασε μάλιστα τη διάταξη των γύρω κτιρίων και τη διαμόρφωση της αγοράς, γεγονός που αποδεικνύει τη σπουδαιότητά του.\n\nΑρχικά το μνήμα ήταν υπαίθριο και ορατό από όλες τις πλευρές. Σε μεταγενέστερη εποχή ενσωματώθηκε μέσα σε στοά, πιθανότατα κατά την αναδιαμόρφωση της αγοράς στους ελληνιστικούς ή ρωμαϊκούς χρόνους. Παρ' όλα αυτά, η θέση και ο συμβολικός του χαρακτήρας διατηρήθηκαν αναλλοίωτα.\n\nΤο μνημείο αποτελείται από μία επιμήκη βάση δύο βαθμίδων από γνεύσιο, θασίτικο μάρμαρο και κίτρινο πωρόλιθο, διαστάσεων περίπου 4,53 × 1,79 μέτρων. Ιδιαίτερη αξία έχει η αρχαϊκή επιγραφή που βρέθηκε εκεί και χρονολογείται περίπου γύρω στο 600 π.Χ.: «Εἰμὶ τὸ μνῆμα τοῦ Γλαύκου, τοῦ υἱοῦ τοῦ Λεπτίνη· μ' ἀνέθεσαν οἱ υἱοὶ τοῦ Βρέντη.» Η επιγραφή αυτή αποτελεί ένα από τα αρχαιότερα επιγραφικά μνημεία της Θάσου.\n\nΗ εποχή της ίδρυσης της αποικίας συνδέεται επίσης με τον μεγάλο λυρικό ποιητή Αρχίλοχο, ο οποίος συμμετείχε στην αποικιστική εκστρατεία των Παρίων. Πατέρας του ήταν ο Τελεσικλής, αρχηγός της αποστολής. Ο ίδιος ο Αρχίλοχος αναφέρεται στις δυσκολίες και τις μάχες της Θάσου μέσα από τα ποιήματά του, δίνοντας μια σπάνια προσωπική μαρτυρία για εκείνη την ταραγμένη περίοδο.\n\nΚατά τη ρωμαϊκή αυτοκρατορική εποχή η αρχική επιγραφή του μνημείου καλύφθηκε, πιθανόν λόγω νέων οικοδομικών επεμβάσεων. Ωστόσο, η μνήμη του Γλαύκου δεν χάθηκε ποτέ. Το μνημείο συνέχισε να αποτελεί σημείο σεβασμού και ιστορικής μνήμης, υπενθυμίζοντας τους πρώτους αποίκους, τους αγώνες τους και τη δημιουργία μιας πόλης που εξελίχθηκε σε ένα από τα σημαντικότερα εμπορικά και πολιτιστικά κέντρα του βόρειου Αιγαίου.",
    descriptionEn: "At the eastern corner of the ancient agora stood the Tomb of Glaukos — one of the most revered monuments of public life. Glaukos was the legendary founder of the Thassian colony.",
    descriptionTr: `Taşos Antik Agorası'nın doğu köşesinde Glaukos'un Anıtı bulunuyordu. Bu yapı, antik kentin kamusal yaşamındaki en önemli ve en saygı duyulan anıtlardan biriydi. Anıt yalnızca bir mezar değildi; aynı zamanda MÖ 7. yüzyılda Taşos'un kuruluşu ve ilk mücadeleleriyle bağlantılı olan ilk kolonistlerden birine adanmış kahramanlık anıtıydı.

Paros Adası'ndan gelen kolonistler, yeni tarım alanları, ticari fırsatlar ve özellikle bölgedeki zengin altın ile gümüş madenlerine erişim sağlamak amacıyla Taşos'a yerleşmişlerdi. Ancak bu yerleşim barışçıl olmadı. Adada zaten Trak kabileleri yaşıyordu ve onlar yeni gelen kolonistlere karşı sert bir direniş gösterdi. Çatışmalar oldukça kanlı geçti; çünkü Paroslular yeni koloniyi kurmaya ve güçlendirmeye çalışıyordu.

Bu çatışmalar sırasında Leptines'in oğlu Glaukos önemli bir figür olarak öne çıktı. O, kentin ilk yerleşimcilerinden biri olarak kabul edilir. Geleneklere göre Glaukos, Traklara karşı yapılan bir savaşta öldü ve daha sonra Taşoslular tarafından koloninin kahramanı olarak onurlandırıldı. Ona verilen bu büyük saygı, kentin kuruluşu ve hayatta kalması açısından ne kadar önemli görüldüğünü göstermektedir.

Anıt, agoranın son derece önemli bir noktasında, iki ana yolun kesişiminde bulunuyordu. Yollardan biri Herakleion ve Theoroi Geçidi'ni antik tiyatroya bağlıyor, diğeri ise agoradan limana ve denize doğru iniyordu. Bu konum, anıtı kent için önemli bir referans noktası hâline getiriyordu; çünkü vatandaşlar, tüccarlar, ziyaretçiler ve yöneticiler her gün buradan geçiyordu. Hatta anıtın varlığı çevredeki yapıların ve agoranın düzenini bile etkilemiştir.

Başlangıçta mezar açık havadaydı ve her yönden görülebiliyordu; böylece agoranın kamusal alanında dikkat çekici bir konuma sahipti. Daha sonraki dönemlerde, muhtemelen Helenistik veya Roma çağında yapılan düzenlemeler sırasında bir stoa içine dâhil edildi. Buna rağmen anıtın sembolik önemi ve konumu korunmaya devam etti.

Anıt, gnays taşı, Taşos mermeri ve sarı poros taşından yapılmış iki basamaklı uzun bir kaideden oluşuyordu. Ölçüleri yaklaşık 4,53 × 1,79 metreydi. Büyük olasılıkla üzerinde bir stel ya da kahramana adanmış başka bir anıtsal unsur bulunuyordu.

Anıtın en önemli unsurlarından biri, yaklaşık MÖ 600 yılına tarihlenen arkaik yazıttır. Yazıtta şöyle denmektedir:

"Ben Leptines'in oğlu Glaukos'un anıtıyım; beni Brentes'in oğulları adadı."

Bu yazıt, Taşos'un en eski epigrafik belgelerinden biridir ve anıtın Glaukos'un soyundan gelenler ya da akrabaları tarafından onun anısını sonsuza dek yaşatmak amacıyla dikildiğini göstermektedir.

Koloninin kuruluş dönemi aynı zamanda ünlü lirik şair Archilokhos ile de bağlantılıdır. Babası Telesikles, Parosluların Taşos'a yaptığı kolonizasyon seferinin liderlerinden biriydi. Archilokhos şiirlerinde Taşos'taki zorluklardan ve savaşlardan söz ederek bu çalkantılı dönem hakkında önemli bilgiler vermektedir.

Roma İmparatorluk döneminde anıtın ilk yazıtı yeni mimari düzenlemeler nedeniyle örtülmüş olabilir. Buna rağmen Glaukos'un anısı hiçbir zaman kaybolmadı. Anıt, Taşoslular için tarihsel hafızanın ve ilk kolonistlerin mücadelesinin sembolü olmaya devam etti. Aynı zamanda Taşos'un nasıl kuzey Ege'nin en önemli ticaret ve kültür merkezlerinden biri hâline geldiğini de hatırlatmaktadır.`,
    mapX: 42, mapY: 18,    mapsUrl: "https://maps.app.goo.gl/sYMV43omoheszA8b8",
  },
  {
    id: 20, num: "20",
    title: "Ανοικτή Αγορά", titleEn: "Open Agora",
    titleTr: "Açık Pazar (Agora)",
    category: "Αγορά", categoryEn: "Agora",
    categoryTr: "Agora",
    duration: "9 λεπτά", durationSec: 540,
    imageId: IMGS[1],
    description: "Η αγορά της Θάσου αποτελούσε το πολιτικό, διοικητικό και θρησκευτικό κέντρο της αρχαίας πόλης. Αποτελεί ένα μνημειακό συγκρότημα που πήρε την οριστική του μορφή στη διάρκεια πολλών αιώνων. Οι πρώιμες κατασκευές χρονολογούνται στον 6ο αιώνα π.Χ. Μία σταδιακή ανοικοδόμηση ξεκινά από τις αρχές του 4ου αιώνα π.Χ., εποχή γενικής αναδιοργάνωσης της θασιακής πολιτείας, και φτάνει μέχρι τα ρωμαϊκά χρόνια, όπου της έδωσε τη μορφή μιας σχεδόν ορθογώνιας πλατείας, περίκλειστης με κιονοστοιχίες.",
    descriptionEn: "The Agora of Thassos was the political, administrative, and religious centre of the ancient city. The open square hosted commercial, judicial, and ceremonial functions for all citizens.",
    descriptionTr: `Taşos Agorası, antik kentin siyasi, idari ve dini merkeziydi. Bu alan, yüzyıllar boyunca gelişerek son şeklini alan anıtsal bir yapı kompleksiydi. İlk yapılar MÖ 6. yüzyıla tarihlenmektedir.

Agoranın yeniden inşası ve düzenlenmesi MÖ 4. yüzyılın başlarında başladı. Bu dönem, Taşos devletinin genel yeniden örgütlenme süreciyle bağlantılıydı. Yapı çalışmaları Roma dönemine kadar devam etti ve sonunda agora, sütunlu galerilerle çevrili, neredeyse dikdörtgen biçimli büyük bir meydana dönüştü.`,
    mapX: 52, mapY: 15,    mapsUrl: "https://maps.app.goo.gl/X8qcgLNvMSczf2Ly6",
    localImages: [stop20img1, stop20img2],
  },
  {
    id: 21, num: "21",
    title: "Δίοδος των Θεωρών", titleEn: "Passageway of the Theoroi",
    category: "Αγορά", categoryEn: "Agora",
    duration: "8 λεπτά", durationSec: 480,
    imageId: IMGS[2],
    description: "Η Δίοδος των Θεωρών αποτελεί ένα από τα σημαντικότερα, πιο εντυπωσιακά και συμβολικά μνημεία της Αρχαίας Αγοράς της Θάσου. Βρίσκεται στη βορειοανατολική γωνία της αγοράς και σχημάτιζε μία μνημειακή οδό που συνέδεε το πεδινό τμήμα της πόλης με τις πλαγιές της Ακρόπολης. Δεν ήταν ένας απλός δρόμος διέλευσης, αλλά ένας χώρος όπου συναντιούνταν η πολιτική εξουσία, η θρησκεία, η δημόσια μνήμη και η καλλιτεχνική έκφραση. Είναι μοναδικό στον ελληνικό κόσμο, επειδή συνδυάζει ταυτόχρονα χαρακτήρα ιερό, πολιτικό και πολεοδομικό.\n\nΗ ιστορία της διόδου ξεκινά ήδη από τον 7ο αιώνα π.Χ., από τα πρώτα στάδια οργάνωσης της αρχαίας πόλης. Τότε λειτουργούσε ως τα προπύλαια της πόλης — επίσημη είσοδος προς τον οικισμό. Στην περιοχή βρέθηκε βωμός σε σχήμα Π αφιερωμένος στη θεά Αθηνά Προπυλαία, την προστάτιδα των πυλών και των εισόδων. Γύρω στο 680 π.Χ. έφτασαν οι άποικοι από την Πάρο και η δίοδος απέκτησε ακόμη μεγαλύτερη σημασία ως βασικός σύνδεσμος ανάμεσα στον παλαιό οικισμό, τη νέα πόλη και την αγορά.\n\nΟ δρόμος πλαισιωνόταν από δύο αντικριστούς μαρμάρινους τοίχους μήκους περίπου έντεκα μέτρων, διακοσμημένους με εξαιρετικά ανάγλυφα έργα τέχνης. Τα ανάγλυφα εντόπισε το 1864 ο Γάλλος περιηγητής Ernest Miller και τα μετέφερε στο Μουσείο του Λούβρου. Το 2020 το Λούβρο προσέφερε στο Αρχαιολογικό Μουσείο Θάσου πιστά αντίγραφα των έργων.\n\nΤο σημαντικότερο ανάγλυφο, γνωστό ως «Απόλλων και Νύμφες», καταλάμβανε το κέντρο του βορειοδυτικού τοίχου. Ο Απόλλωνας απεικονίζεται όρθιος με κιθάρα, ενώ τρεις Νύμφες προσφέρουν στεφάνια, καρπούς και ταινίες. Πάνω από το ανάγλυφο επιγραφή καθόριζε: «Στις Νύμφες και στον Απόλλωνα Νυμφηγέτη να θυσιάζεις αρσενικό ή θηλυκό ζώο, αλλά όχι προβατίνα ούτε χοίρο.»\n\nΣτην απέναντι πλευρά υπήρχε βωμός αφιερωμένος στις Χάριτες — θεότητες της ομορφιάς, της αρμονίας και της κοινωνικής ομόνοιας. Δίπλα υπήρχαν δύο συμμετρικές ανάγλυφες πλάκες: η μία με τις Χάριτες να κρατούν στεφάνια, η άλλη με τον Ερμή ντυμένο με χλαμύδα και θρακικό πίλο, κρατώντας το κηρύκειο. Η σχετική επιγραφή όριζε: «Στις Χάριτες μην θυσιάσεις κατσίκα ή χοίρο.» Στους μαρμάρινους τοίχους εντοπίστηκαν επίσης ίχνη από καρφιά — αποδείξεις ότι οι πιστοί κρεμούσαν αναθήματα ως προσφορές.\n\nΣτα τέλη του 4ου αιώνα π.Χ. οι Θάσιοι χάραξαν πάνω στους τοίχους μεγάλο κατάλογο των Θεωρών — επίσημων αρχόντων που εκπροσωπούσαν τη Θάσο σε πανελλήνια ιερά και γιορτές, κυρίως στο ιερό του Απόλλωνα στους Δελφούς. Τα ονόματά τους οργανώνονταν ανά έτος και ο κατάλογος ενημερωνόταν μέχρι τη ρωμαϊκή εποχή. Ήταν τρόπος διατήρησης της συλλογικής μνήμης και δημόσιας τιμής.\n\nΗ Δίοδος των Θεωρών αποτελεί ένα μοναδικό μνημείο γιατί συνδυάζει πολεοδομία, πολιτική ζωή, θρησκευτική λατρεία και καλλιτεχνική δημιουργία. Μέσα από τα ανάγλυφα, τις επιγραφές και τις λατρείες της αποκαλύπτεται ο τρόπος με τον οποίο οι αρχαίοι Θάσιοι αντιλαμβάνονταν τη σχέση ανάμεσα στην πόλη, τους θεούς και τους πολίτες.",
    descriptionEn: "The Passageway of the Theoroi is one of the most important and symbolic monuments of the Ancient Agora — a paved corridor separating the agora into two sections, used for sacred processions.",
    mapX: 62, mapY: 18,    mapsUrl: "https://maps.app.goo.gl/RKuvF4E2tTW24S8TA",
  },
  {
    id: 22, num: "22",
    title: "Προπύλαια Αρτεμισίου", titleEn: "Propylaea of the Artemision",
    titleTr: "Artemision'un Propylonları",
    category: "Ιερό", categoryEn: "Sanctuary",
    categoryTr: "Kutsal Alan",
    duration: "7 λεπτά", durationSec: 420,
    imageId: IMGS[3],
    description: "Τα Προπύλαια του Αρτεμισίου αποτελούσαν τη μνημειακή είσοδο προς ένα από τα σημαντικότερα ιερά της αρχαίας Θάσου, το ιερό της θεάς Αρτέμιδος. Βρίσκονταν στο νότιο τμήμα της Αρχαίας Αγοράς και οδηγούσαν προς τον ιερό χώρο που αναπτυσσόταν επάνω στον λόφο. Το μνημείο αυτό είχε ιδιαίτερη αρχιτεκτονική, θρησκευτική και συμβολική σημασία, γιατί αποτελούσε το πέρασμα από τον κοσμικό χώρο της καθημερινής ζωής στον ιερό κόσμο της θεάς. Ο πιστός, περνώντας μέσα από αυτά, ένιωθε ότι εγκαταλείπει τον κόσμο των ανθρώπων και πλησιάζει τον χώρο των θεών.\n\nΤα Προπύλαια χτίστηκαν στα τέλη του 4ου αιώνα π.Χ. Η πρόσβαση γινόταν μέσω μεγάλης μαρμάρινης κλίμακας που οδηγούσε σε πρόσοψη με δύο δίδυμες πύλες, κοσμημένη από τρεις ισχυρούς πεσσούς που έδιναν στο κτήριο αυστηρότητα και μεγαλοπρέπεια. Το λευκό θασίτικο μάρμαρο προσέδιδε λαμπρότητα και επιβλητικότητα.\n\nΑπό εδώ ξεκινούσε η ιερή πορεία προς το Αρτεμίσιο. Οι πιστοί ανηφόριζαν από την αγορά προς τον ναό, ακολουθώντας διαδρομή με τελετουργικό χαρακτήρα. Η ανάβαση συμβόλιζε τη μετάβαση από τον θόρυβο και την καθημερινότητα της αγοράς στη γαλήνη και την ιερότητα του χώρου της θεάς.\n\nΗ Άρτεμις ήταν μία από τις σημαντικότερες θεότητες της Θάσου — θεά του κυνηγιού, της άγριας φύσης, της γονιμότητας και προστάτιδα των νέων κοριτσιών και των γυναικών. Η σχέση της με τα βουνά, τα δάση και τη φύση ταίριαζε απόλυτα με το πλούσιο σε βλάστηση και νερά περιβάλλον της Θάσου.\n\nΣτο ιερό πραγματοποιούνταν θρησκευτικές τελετές, θυσίες και εορτές. Πιθανότατα οργανώνονταν πομπές από την αγορά προς το ιερό, συνοδευόμενες από μουσική, ύμνους και προσφορές. Οι νέες γυναίκες της πόλης ίσως συμμετείχαν σε τελετουργίες αφιερωμένες στην Άρτεμη, ζητώντας την προστασία της πριν από τον γάμο και τη μητρότητα.\n\nΚατά τον 1ο αιώνα μ.Χ. το οικοδόμημα υπέστη φθορές και ανακαινίστηκε με δαπάνη της πόλης. Μία επιγραφή αναφέρει ότι η Θασία Ηπιή χρηματοδότησε μέρος των εργασιών αποκατάστασης — απόδειξη της βαθιάς ευσέβειας των κατοίκων και της συμμετοχής εύπορων πολιτών στη συντήρηση των ιερών μνημείων.\n\nΜέσα από τα Προπύλαια του Αρτεμισίου κατανοούμε καλύτερα τη σημασία που είχαν τα ιερά στην αρχαία ελληνική πόλη. Οι Θάσιοι δεν διαχώριζαν τη θρησκεία από τη δημόσια ζωή — αντίθετα, η λατρεία των θεών αποτελούσε βασικό στοιχείο της πολιτικής, κοινωνικής και πολιτιστικής ταυτότητας της κοινότητας.",
    descriptionEn: "The Propylaea of the Artemision formed the monumental entrance to one of the most important sanctuaries of ancient Thassos — the sanctuary of the goddess Artemis.",
    descriptionTr: `Artemision'un Propylonları, antik Taşos'un en önemli kutsal alanlarından biri olan Artemis Tapınağı'na açılan anıtsal girişti. Agoranın güney bölümünde bulunuyor ve pazar alanının üzerindeki tepede yer alan kutsal bölgeye ulaşımı sağlıyordu. Bu yapı hem mimari hem dini hem de sembolik açıdan büyük önem taşıyordu; çünkü günlük yaşamın geçtiği dünyevi alandan tanrıçanın kutsal dünyasına geçişi temsil ediyordu.

"Propylon" kelimesi, kutsal alanlara veya önemli kamu yapılarının girişlerine verilen anıtsal kapı anlamına gelir. Antik Yunan'da propylonlar yalnızca işlevsel yapılar değildi; ziyaretçiyi kutsal alana hazırlayan mimari geçişlerdi. İnsanlar bu kapılardan geçerken, insanların dünyasını geride bırakıp tanrıların alanına yaklaştıklarını hissediyorlardı.

Artemision'un Propylonları MÖ 4. yüzyılın sonlarında, Taşos'un büyük bir gelişim ve yoğun inşa faaliyetleri yaşadığı dönemde inşa edildi. Yapı son derece etkileyici ve anıtsaldı. Giriş, büyük mermer bir merdiven aracılığıyla sağlanıyordu ve bu merdiven iki ikiz kapıya sahip görkemli bir cepheye ulaşıyordu. Cephede üç güçlü paye bulunuyordu ve bunlar yapıya sağlamlık ve ihtişam kazandırıyordu. Antik çağ boyunca ün kazanan Taşos'un beyaz mermeri, yapıya parlaklık ve görkem katıyordu.

Propylonların bulunduğu yer de özel bir öneme sahipti. Buradan, Artemis'e adanmış kutsal alan olan Artemision'a çıkan kutsal yol başlıyordu. İnananlar agoradan yukarı doğru yürüyerek tapınağa ulaşıyor ve bu yolculuk törensel bir anlam taşıyordu. Bu yükseliş, pazar yerinin gürültüsünden ve günlük yaşamından uzaklaşıp tanrıçanın kutsal huzuruna yaklaşmayı simgeliyordu.

Artemis, Taşos'un en önemli tanrıçalarından biriydi. Avın, vahşi doğanın, bereketin ve genç kızların koruyucusu olarak adada büyük saygı görüyordu. Dağlar, ormanlar ve doğayla olan ilişkisi, yoğun bitki örtüsüne ve bol su kaynaklarına sahip Taşos'un doğal yapısıyla mükemmel şekilde uyum sağlıyordu. Onun kültünün kökleri çok eskiye dayanıyor ve muhtemelen daha eski yerel doğa tanrıçalarıyla bağlantılıydı.

Artemis kutsal alanında dini törenler, kurbanlar ve festivaller düzenleniyordu. Büyük olasılıkla alaylar agoradan başlayarak propylonlardan geçiyor ve kutsal alana ulaşıyordu. Bu törenlere müzik, ilahiler ve tanrıçaya sunulan adaklar eşlik ediyordu. Kentin genç kadınları da evlilik ve annelik öncesinde Artemis'in korumasını istemek amacıyla bazı ritüellere katılıyor olabilirlerdi.`,
    mapX: 48, mapY: 38,    mapsUrl: "https://maps.app.goo.gl/pnCLkLGAbBPNbSdA6",
  },
  {
    id: 23, num: "23",
    title: "Πλατεία των Χαρίτων", titleEn: "Square of the Charites",
    category: "Δημόσιος Χώρος", categoryEn: "Public Space",
    duration: "6 λεπτά", durationSec: 360,
    imageId: IMGS[4],
    description: "Η Πλατεία των Χαρίτων αποτελούσε έναν από τους πιο όμορφους και συμβολικούς δημόσιους χώρους της αρχαίας Θάσου. Βρισκόταν κοντά στη μνημειακή Δίοδο των Θεωρών και συνδεόταν άμεσα με τη θρησκευτική, πολιτική και κοινωνική ζωή της πόλης. Ο χώρος αυτός δεν ήταν απλώς μια ανοιχτή πλατεία· ήταν τόπος τελετών, συμβολισμού και δημόσιας παρουσίας, αφιερωμένος στις Χάριτες — θεότητες της ομορφιάς, της ευημερίας, της αρμονίας και της κοινωνικής συνοχής.\n\nΟι Χάριτες στην αρχαία ελληνική θρησκεία ήταν τρεις θεότητες: η Αγλαΐα, η Ευφροσύνη και η Θάλεια. Συμβόλιζαν τη χαρά, την ευγένεια, την αφθονία, την καλλιτεχνική έμπνευση και την αρμονική συμβίωση των ανθρώπων. Στην αρχαία Θάσο θεωρούνταν προστάτιδες της κοινωνικής ενότητας, της ευημερίας της πόλης και της καλής σχέσης μεταξύ πολιτών και θεών.\n\nΗ σύνδεσή της με τη Δίοδο των Θεωρών είναι ιδιαίτερα σημαντική. Οι θεωροί ήταν ιεροί αξιωματούχοι που εκπροσωπούσαν τη Θάσο σε πανελλήνιες γιορτές και θρησκευτικές αποστολές. Η πλατεία πιθανότατα λειτουργούσε ως σημείο συνάντησης πριν από θρησκευτικές πομπές, δημόσιες τελετές και γιορτές. Οι Χάριτες λειτουργούσαν συμβολικά ως εγγυήτριες της ομόνοιας, της ευημερίας και της επιτυχίας των αποστολών.\n\nΑρχιτεκτονικά, η πλατεία πιθανότατα περιβαλλόταν από στοές, μνημεία, αναθηματικές βάσεις και δημόσια οικοδομήματα της αγοράς, διακοσμημένα με αγάλματα, ανάγλυφα, βωμούς και επιγραφές αφιερωμένες στις θεότητες ή σε ευεργέτες της πόλης.\n\nΗ Πλατεία των Χαρίτων ήταν όχι μόνο θρησκευτικός χώρος αλλά και σημείο κοινωνικής ζωής. Εκεί συναντιούνταν οι πολίτες, συζητούσαν δημόσια ζητήματα, παρακολουθούσαν πομπές και συμμετείχαν στις μεγάλες γιορτές. Η παρουσία των Χαρίτων σε τόσο κεντρικό σημείο δείχνει ότι οι Θάσιοι θεωρούσαν την αρμονία και την κοινωνική συνοχή απαραίτητες για την ευημερία της πόλης-κράτους.\n\nΣήμερα, παρόλο που σώζονται κυρίως ερείπια και θεμέλια, η περιοχή εξακολουθεί να μεταφέρει την αίσθηση ενός σημαντικού δημόσιου χώρου όπου η θρησκεία, η πολιτική, η τέχνη και η κοινωνική ζωή ενώνονταν στο κέντρο της αρχαίας Θάσου.",
    descriptionEn: "The Square of the Charites was one of the most beautiful and symbolic public spaces of ancient Thassos, dedicated to the Charites — goddesses of beauty, grace, and harmony.",
    mapX: 52, mapY: 42,    mapsUrl: "https://maps.app.goo.gl/YBQb6ktRwiipcs649",
  },
  {
    id: 24, num: "24",
    title: "Αίθουσα Πολεμάρχων", titleEn: "Hall of the Polemarchs",
    category: "Αίθουσα", categoryEn: "Hall",
    duration: "6 λεπτά", durationSec: 360,
    imageId: IMGS[5],
    description: "Στη δυτική και πιο προστατευμένη πλευρά του διοικητικού συγκροτήματος της Αρχαίας Αγοράς Θάσου βρισκόταν η Αίθουσα των Πολεμάρχων, ένας από τους σημαντικότερους στρατιωτικούς χώρους της πόλης. Η αίθουσα αυτή αποτελούσε το κέντρο της στρατιωτικής διοίκησης, εκεί όπου λαμβάνονταν αποφάσεις για την άμυνα, τον στρατό, τον στόλο, την ασφάλεια των τειχών και την προστασία του εμπορίου. Η θέση της κοντά στον δρόμο που οδηγούσε προς το πολεμικό λιμάνι δεν ήταν τυχαία — από εκεί οι στρατιωτικοί άρχοντες εποπτεύσουν τις ναυτικές εγκαταστάσεις και την κίνηση των πλοίων.\n\nΟι Πολέμαρχοι ήταν οι ανώτατοι στρατιωτικοί αξιωματούχοι της Θάσου — πέντε στον αριθμό. Είχαν την ευθύνη της στρατιωτικής οργάνωσης, της εκπαίδευσης των οπλιτών, της φρούρησης των τειχών, της οργάνωσης του στόλου και της φύλαξης των όπλων. Ο πολέμαρχος στην αρχαία ελληνική πόλη δεν ήταν απλώς στρατιωτικός διοικητής — ήταν πρόσωπο με σημαντική πολιτική δύναμη, καθώς η ασφάλεια της πόλης εξαρτιόταν άμεσα από τις αποφάσεις του.\n\nΗ αίθουσα πιθανότατα λειτουργούσε και ως οπλοστάσιο. Στο εσωτερικό της φυλάσσονταν δόρατα, ασπίδες, ξίφη, τόξα, περικεφαλαίες και θώρακες. Ο στρατός της Θάσου αποτελούνταν κυρίως από οπλίτες — βαριά οπλισμένους στρατιώτες που πολεμούσαν σε σχηματισμό φάλαγγας — αλλά και από πελταστές, τοξότες, σφενδονιστές και ακοντιστές.\n\nΟι νέοι της Θάσου εκπαιδεύονταν από μικρή ηλικία στη χρήση των όπλων, στη γυμναστική, στη στρατιωτική πειθαρχία και στις τακτικές μάχης. Η φάλαγγα των οπλιτών απαιτούσε πειθαρχία, συνεργασία και απόλυτο συγχρονισμό. Οι πολέμαρχοι επέβλεπαν στρατιωτικές ασκήσεις, επιθεωρήσεις εξοπλισμού και καταλόγους στρατεύσιμων πολιτών.\n\nΗ Θάσος διέθετε σημαντική ναυτική ισχύ χάρη στο εμπόριο, στον πλούτο των μεταλλείων και στη στρατηγική της θέση στο βόρειο Αιγαίο. Ο στόλος της χρησιμοποιούνταν για προστασία εμπορικών πλοίων, έλεγχο θαλάσσιων διαδρομών και στρατιωτικές επιχειρήσεις. Το πολεμικό λιμάνι αποτελούσε ένα από τα πιο ασφαλή σημεία της πόλης και συνδεόταν άμεσα με τις στρατιωτικές υπηρεσίες της αίθουσας.\n\nΜέσα στην αίθουσα πιθανότατα πραγματοποιούνταν στρατιωτικά συμβούλια, συσκέψεις για την άμυνα και σχεδιασμός επιχειρήσεων. Οι πολέμαρχοι συζητούσαν την ασφάλεια των τειχών, τις περιπολίες, τη φύλαξη του λιμανιού, τις σχέσεις με άλλες πόλεις και τις πιθανές απειλές από εχθρούς ή πειρατές. Η ατμόσφαιρα θα ήταν αυστηρή και γεμάτη πειθαρχία, καθώς εδώ λαμβάνονταν αποφάσεις που μπορούσαν να κρίνουν την ασφάλεια και την επιβίωση ολόκληρης της Θάσου.",
    descriptionEn: "On the western side of the administrative complex stood the Hall of the Polemarchs — the military commanders who directed Thassos's formidable naval and land forces.",
    mapX: 56, mapY: 44,  },
  {
    id: 25, num: "25",
    title: "Αίθουσα Υφαντικής", titleEn: "Weaving Hall",
    category: "Αίθουσα", categoryEn: "Hall",
    duration: "6 λεπτά", durationSec: 360,
    imageId: IMGS[0],
    description: "Στο διοικητικό συγκρότημα της Αγοράς υπήρχε η Αίθουσα Υφαντικής, χώρος αφιερωμένος σε μία από τις σημαντικότερες τέχνες και καθημερινές δραστηριότητες των αρχαίων γυναικών.",
    descriptionEn: "Within the Agora's administrative complex, the Weaving Hall was dedicated to one of the most important arts and daily activities of ancient women — the production of fine textiles.",
    mapX: 60, mapY: 42,    mapsUrl: "https://maps.app.goo.gl/hi6NHZpY7ZYavwn87",
  },
  {
    id: 26, num: "26",
    title: "Αίθουσα Αγγειοπλαστικής", titleEn: "Pottery Hall",
    category: "Αίθουσα", categoryEn: "Hall",
    duration: "6 λεπτά", durationSec: 360,
    imageId: IMGS[1],
    description: "Στο διοικητικό και βιοτεχνικό συγκρότημα της Αρχαίας Αγοράς Θάσου υπήρχε η Αίθουσα Αγγειοπλαστικής, ένας χώρος αφιερωμένος σε μία από τις σημαντικότερες τέχνες της αρχαιότητας. Η αγγειοπλαστική αποτελούσε βασικό στοιχείο της οικονομικής και καθημερινής ζωής της Θάσου, καθώς τα αγγεία ήταν απαραίτητα για αποθήκευση τροφίμων, μεταφορά κρασιού και λαδιού, μαγείρεμα, θρησκευτικές τελετές και συμπόσια. Η Θάσος, χάρη στο ανεπτυγμένο εμπόριο και τη ναυτική της δύναμη, είχε μεγάλη ανάγκη από κεραμικά προϊόντα που ταξίδευαν με τα εμπορικά πλοία σε ολόκληρο το βόρειο Αιγαίο.\n\nΗ αγγειοπλαστική ήταν εξαιρετικά απαιτητική τέχνη που συνδύαζε τεχνική δεξιοτεχνία, καλλιτεχνική δημιουργία και πρακτική χρήση. Η κατασκευή ενός αγγείου περνούσε από πολλά στάδια: εξόρυξη και καθαρισμό του πηλού, ζύμωμα, διαμόρφωση στον τροχό, ξήρανση, διακόσμηση και τελικά ψήσιμο στον κλίβανο.\n\nΤο σημαντικότερο εργαλείο ήταν ο κεραμικός τροχός. Ο τεχνίτης τοποθετούσε τον πηλό στον περιστρεφόμενο τροχό και με τα χέρια του διαμόρφωνε αμφορείς, κύλικες, κρατήρες, λήκυθους, σκύφους, υδρίες και μικρά καθημερινά αγγεία. Κάθε τύπος αγγείου είχε διαφορετική χρήση και ιδιαίτερο σχήμα.\n\nΗ αγγειοπλαστική δεν ήταν μόνο πρακτική τέχνη αλλά και μορφή καλλιτεχνικής έκφρασης. Τα αγγεία διακοσμούνταν με γεωμετρικά σχέδια, φυτικά μοτίβα, μυθολογικές παραστάσεις, σκηνές συμποσίων, αθλητές, πολεμιστές, θεούς και ήρωες. Μέσα από αυτά οι αρχαιολόγοι σήμερα μαθαίνουν για τη ζωή των ανθρώπων, τα έθιμα, τις γιορτές και τη θρησκεία της αρχαίας Ελλάδας.\n\nΟι αμφορείς της Θάσου ήταν γνωστοί σε πολλές περιοχές του ελληνικού κόσμου και συχνά έφεραν σφραγίδες που πιστοποιούσαν την προέλευση και την ποιότητα του προϊόντος. Η σύνδεση της αγγειοπλαστικής με το εμπόριο κρασιού ήταν ιδιαίτερα σημαντική, αφού οι αμφορείς ήταν απαραίτητοι για τη μεταφορά του περίφημου θασιακού κρασιού.\n\nΜπορούμε να φανταστούμε τον χώρο γεμάτο πηλό, ξύλινα εργαλεία, περιστρεφόμενους τροχούς, μισοτελειωμένα αγγεία και τη θερμότητα των κλιβάνων. Ήταν ένας ζωντανός χώρος παραγωγής και δημιουργίας, όπου η τέχνη συναντούσε την οικονομία και το εμπόριο — ένας από τους σημαντικότερους τομείς του αρχαίου ελληνικού πολιτισμού.",
    descriptionEn: "The Pottery Hall in the Agora's craft complex was dedicated to one of antiquity's most important arts. Thassian pottery was famed across the Aegean for its quality and distinctive style.",
    mapX: 58, mapY: 46,    mapsUrl: "https://maps.app.goo.gl/7a8TZ8jacgnXgukYA",
  },
  {
    id: 27, num: "27",
    title: "Αίθουσα Γυναικονόμων", titleEn: "Hall of the Gynaikonomoi",
    category: "Αίθουσα", categoryEn: "Hall",
    duration: "6 λεπτά", durationSec: 360,
    imageId: IMGS[2],
    description: "Στο διοικητικό συγκρότημα της Αρχαίας Αγοράς Θάσου υπήρχε η Αίθουσα των Γυναικονόμων, ένας ιδιαίτερα σημαντικός χώρος που συνδεόταν με την εποπτεία της κοινωνικής ζωής και των ηθών της πόλης. Εδώ στεγάζονταν οι γυναικονόμοι, ειδικοί δημόσιοι αξιωματούχοι που είχαν την ευθύνη να ελέγχουν τη συμπεριφορά των γυναικών και την τήρηση των κοινωνικών κανόνων.\n\nΟι Γυναικονόμοι ήταν δημόσιοι λειτουργοί που επιτηρούσαν τη συμπεριφορά των γυναικών, την εξωτερική τους εμφάνιση, τις δημόσιες τελετές, τις εκδηλώσεις πένθους και γενικά την τήρηση των ηθών της κοινωνίας. Αντιπροσώπευαν την προσπάθεια της πόλης να διατηρεί την κοινωνική πειθαρχία, την ευπρέπεια και την ισορροπία στη δημόσια ζωή. Στην αρχαία ελληνική κοινωνία οι γυναίκες συμμετείχαν κυρίως σε θρησκευτικές τελετές, γάμους, κηδείες και οικογενειακές εορτές — οι δημόσιες αυτές εμφανίσεις έπρεπε να ακολουθούν συγκεκριμένους κανόνες, τους οποίους επέβλεπαν οι γυναικονόμοι.\n\nΈνα από τα σημαντικότερα καθήκοντά τους ήταν ο έλεγχος των νεκρικών τελετών και του πένθους. Στην αρχαιότητα οι γυναίκες είχαν πρωταγωνιστικό ρόλο στις κηδείες, θρηνώντας δημόσια, τραγουδώντας μοιρολόγια και εκδηλώνοντας έντονα συναισθήματα. Οι υπερβολικές εκδηλώσεις πένθους θεωρούνταν επικίνδυνες για τη δημόσια τάξη, γι' αυτό οι γυναικονόμοι φρόντιζαν να τηρούνται οι νόμοι και να υπάρχει μέτρο στις δημόσιες εκδηλώσεις θρήνου.\n\nΟι γυναικονόμοι επέβλεπαν επίσης την ενδυμασία, τα κοσμήματα, την πολυτέλεια και τη γενική δημόσια εικόνα των γυναικών. Σε πολλές ελληνικές πόλεις υπήρχαν νόμοι που περιόριζαν την υπερβολική χλιδή, θεωρώντας την ένδειξη αλαζονείας. Οι γυναικονόμοι φρόντιζαν ώστε οι πολίτες να ακολουθούν το μέτρο και τη σωφροσύνη, αξίες ιδιαίτερα σημαντικές στην αρχαία ελληνική σκέψη.\n\nΗ αίθουσα όπου στεγάζονταν οι γυναικονόμοι πιθανότατα χρησιμοποιούνταν για συναντήσεις, διοικητικές καταγραφές, την επιβολή κοινωνικών κανόνων και τη διαχείριση υποθέσεων που σχετίζονταν με δημόσια συμπεριφορά. Η θέση της κοντά στις υπόλοιπες διοικητικές υπηρεσίες δείχνει ότι το αξίωμα θεωρούνταν σημαντικό για τη λειτουργία της πόλης.\n\nΟ θεσμός των γυναικονόμων αποκαλύπτει ότι στην αρχαία ελληνική πόλη η ιδιωτική ζωή, η δημόσια εικόνα και η κοινωνική συμπεριφορά ήταν ζητήματα που αφορούσαν άμεσα το κράτος. Οι γυναικονόμοι δεν ήταν απλώς επιτηρητές αλλά φορείς της δημόσιας ηθικής και της κοινωνικής πειθαρχίας — μέσα από την ύπαρξή τους μπορούμε να κατανοήσουμε τον τρόπο λειτουργίας της αρχαίας κοινωνίας και τον ρόλο που είχε η διοίκηση ακόμη και στις κοινωνικές και οικογενειακές εκδηλώσεις των πολιτών της Θάσου.",
    descriptionEn: "The Hall of the Gynaikonomoi was connected to the supervision of women's social life in Thassos. These magistrates regulated public ceremonies, festivals, and the conduct of women in public spaces.",
    mapX: 54, mapY: 46,    mapsUrl: "https://maps.app.goo.gl/EyNCoWLH68hbmcZo6",
  },
  {
    id: 28, num: "28",
    title: "Αίθουσα Αρχόντων & Θεώρων", titleEn: "Hall of Archons & Theoroi",
    category: "Αίθουσα", categoryEn: "Hall",
    duration: "6 λεπτά", durationSec: 360,
    imageId: IMGS[3],
    description: "Η Αίθουσα Αρχόντων και Θεώρων ήταν ένας από τους σημαντικότερους διοικητικούς και τελετουργικούς χώρους της αγοράς. Εδώ συγκεντρώνονταν οι άρχοντες της πόλης, οι ανώτεροι πολιτικοί αξιωματούχοι, καθώς και οι θεωροί, οι επίσημοι θρησκευτικοί αντιπρόσωποι της Θάσου.\n\nΟι άρχοντες είχαν την ευθύνη της διοίκησης, της εφαρμογής των νόμων, της λειτουργίας της Εκκλησίας του Δήμου και της εξωτερικής πολιτικής. Ανάλογα με την πολιτική περίοδο, η Θάσος είχε έναν άρχοντα σε περιόδους μοναρχικής ή ξένης κυριαρχίας, ή τρεις άρχοντες σε περιόδους δημοκρατίας.\n\nΟι θεωροί αποτελούσαν ιδιαίτερο θεσμό που προερχόταν από την παράδοση των Πάριων αποίκων. Ήταν υπεύθυνοι για τη διοργάνωση γιορτών, για τη συμμετοχή σε θυσίες, για την επίβλεψη αγώνων και για την εκπροσώπηση της πόλης σε πανελλήνιες θρησκευτικές εκδηλώσεις. Θεωρούνταν ιερά πρόσωπα και απολάμβαναν ιδιαίτερες τιμές, προερχόμενοι συχνά από τις ανώτερες κοινωνικές τάξεις, ώστε να εκπροσωπούν επάξια τη Θάσο σε άλλες πόλεις.\n\nΗ αίθουσα αυτή εκφράζει τη στενή σύνδεση πολιτικής, θρησκείας και δημόσιας ζωής στην αρχαία ελληνική πόλη.",
    descriptionEn: "The Hall of Archons and Theoroi was one of the most important administrative and ceremonial spaces in the agora, where the official envoys (theoroi) of the city conducted their affairs.",
    mapX: 50, mapY: 44,    mapsUrl: "https://maps.app.goo.gl/nf3yGcy6zdbSNhyv6",
  },
  {
    id: 29, num: "29",
    title: "Αίθουσες Συμποσίων", titleEn: "Symposion Halls",
    category: "Αίθουσα", categoryEn: "Hall",
    duration: "7 λεπτά", durationSec: 420,
    imageId: IMGS[4],
    description: "Στο διοικητικό συγκρότημα της Αρχαίας Θάσου υπήρχαν ειδικά διαμορφωμένες Αίθουσες Συμποσίων, χώροι αφιερωμένοι στα επίσημα γεύματα, στις πολιτικές συγκεντρώσεις και στις τελετουργικές συνεστιάσεις της πόλης. Το συμπόσιο στην αρχαιότητα δεν ήταν απλώς ένα γεύμα αλλά ένας θεσμός με βαθιά κοινωνική, πολιτική και θρησκευτική σημασία.\n\nΗ αρχιτεκτονική των χώρων αυτών αποκαλύπτει ξεκάθαρα τη χρήση τους. Οι αίθουσες είχαν διαστάσεις κατάλληλες ώστε κατά μήκος των τοίχων να τοποθετούνται κλίνες — συνήθως οκτώ ή εννέα σε κάθε χώρο. Πάνω στις κλίνες ξάπλωναν οι συμμετέχοντες κατά τη διάρκεια του συμποσίου, σύμφωνα με το ελληνικό έθιμο της ανάκλισης, ενώ στο κέντρο υπήρχαν μικρά τραπέζια με φαγητό, κρασί και σκεύη.\n\nΤα συμπόσια ξεκινούσαν συνήθως μετά το κύριο γεύμα και συνοδεύονταν από πόση κρασιού, μουσική, τραγούδι, φιλοσοφικές και πολιτικές συζητήσεις και απαγγελίες ποιημάτων. Το κρασί αναμιγνυόταν με νερό μέσα σε μεγάλους κρατήρες, γιατί οι αρχαίοι Έλληνες θεωρούσαν βαρβαρικό να πίνει κανείς ανέρωτο κρασί. Γύρω από τον κρατήρα συζητιόνταν η διοίκηση της πόλης, οι στρατιωτικές υποθέσεις, το εμπόριο, η θρησκεία και η φιλοσοφία.\n\nΟι αίθουσες αυτές χρησιμοποιούνταν πιθανότατα από άρχοντες, θεωρούς, αξιωματούχους, ξένους πρέσβεις και επίσημους επισκέπτες. Σε περιόδους γιορτών ή θρησκευτικών εορτών τα δημόσια συμπόσια αποκτούσαν ιδιαίτερα επίσημο χαρακτήρα — μετά τις θυσίες προς τους θεούς ακολουθούσε κοινό γεύμα, λειτουργώντας ως πράξη ενότητας και κοινωνικής συνοχής. Δεν αποκλείεται στις αίθουσες αυτές να γίνονταν ακόμη και πολιτικές διαπραγματεύσεις ή ανεπίσημες συναντήσεις πριν από σημαντικές αποφάσεις.\n\nΗ παρουσία των Αιθουσών Συμποσίων μέσα στο διοικητικό συγκρότημα δείχνει ξεκάθαρα ότι στην αρχαία Θάσο η πολιτική, η κοινωνική ζωή, η θρησκεία και η φιλοξενία ήταν άρρηκτα συνδεδεμένες. Οι αίθουσες αυτές δεν ήταν απλώς χώροι γευμάτων — ήταν χώροι δημόσιας ζωής, επικοινωνίας και πολιτισμού, όπου διαμορφωνόταν η κοινωνική και πολιτική ταυτότητα της πόλης.",
    descriptionEn: "The Symposion Halls were purpose-built spaces for official banquets and political gatherings. Symposia were a cornerstone of ancient Greek public life, combining dining, debate, and cultural celebration.",
    mapX: 48, mapY: 42,    mapsUrl: "https://maps.app.goo.gl/iS8mh42E5B5BiQZm9",
  },
  {
    id: 30, num: "30",
    title: "Αίθουσα-Βωμός Εστίας", titleEn: "Hall & Altar of Hestia",
    category: "Βωμός", categoryEn: "Altar",
    duration: "6 λεπτά", durationSec: 360,
    imageId: IMGS[5],
    description: "Στο βορειοανατολικό άκρο του διοικητικού συγκροτήματος της Αρχαίας Θάσου βρισκόταν ένας από τους πιο ιερούς και συμβολικούς χώρους της πόλης: η Αίθουσα και ο Βωμός της Εστίας. Ο χώρος αυτός δεν ήταν απλώς μία ακόμη διοικητική αίθουσα — αποτελούσε το πνευματικό και θρησκευτικό κέντρο της δημόσιας ζωής της Θάσου.\n\nΗ αίθουσα ξεχώριζε αρχιτεκτονικά από τα υπόλοιπα δωμάτια: διέθετε μεγαλύτερη είσοδο πλάτους περίπου 1,54 μέτρων, βάσεις δύο κιόνων στη φυσική τους θέση και ίχνη εστίας, αποδεικνύοντας ότι εδώ έκαιγε η ιερή φωτιά της θεάς. Η φωτιά αυτή έπρεπε να παραμένει αναμμένη αδιάκοπα, ημέρα και νύχτα — ήταν το σύμβολο της συνέχειας, της σταθερότητας και της ζωής της πόλης.\n\nΗ θεά Εστία ήταν προστάτιδα της οικογένειας, της οικιακής ζωής, της ενότητας, της ειρήνης και της συνοχής της κοινότητας. Για τους αρχαίους Έλληνες το κράτος θεωρούνταν μια μεγάλη οικογένεια, γι' αυτό και τα διοικητικά κτίρια λειτουργούσαν συμβολικά ως ο «οίκος» της πόλης. Η δημόσια φωτιά της Εστίας αντιπροσώπευε τη συνέχεια της πόλης, τη νομιμότητα της εξουσίας και την ενότητα των πολιτών.\n\nΣε περιόδους ίδρυσης αποικιών, οι άποικοι έπαιρναν ιερή φωτιά από την εστία της μητρόπολης για να ανάψουν τη νέα εστία στη νέα πόλη. Η Θάσος, ως αποικία των Πάριων, διατηρούσε ιδιαίτερη σημασία σε αυτή την παράδοση.\n\nΜέσα στην αίθουσα πιθανότατα τελούνταν θυσίες, σπονδές, τελετές πριν από δημόσιες συνεδριάσεις και επίσημες θρησκευτικές πράξεις. Οι άρχοντες και οι αξιωματούχοι ίσως συγκεντρώνονταν εδώ πριν από σημαντικές αποφάσεις ή πριν από την έναρξη εορτών, καθώς στην αρχαία ελληνική πόλη η πολιτική και η θρησκεία ήταν απόλυτα συνδεδεμένες.\n\nΟ χώρος αυτός δεν ήταν απλώς διοικητικός — ήταν η καρδιά της πόλης, εκεί όπου η εξουσία, η θρησκεία και η συλλογική ταυτότητα των Θασίων ενώνονταν σε ένα κοινό ιερό σύμβολο. Οι πολίτες της Θάσου θεωρούσαν ότι όσο έκαιγε η ιερή φωτιά, η πόλη παρέμενε ασφαλής και προστατευμένη από τους θεούς.",
    descriptionEn: "At the northeast end of the administrative complex stood the holiest space: the Hall and Altar of Hestia. Hestia, goddess of the hearth, symbolised community unity — her sacred fire was never extinguished.",
    mapX: 46, mapY: 46,    mapsUrl: "https://maps.app.goo.gl/FT4DQRCHimfHS9aCA",
  },
  {
    id: 31, num: "31",
    title: "Νομισματοκοπείο", titleEn: "Mint",
    category: "Νομισματοκοπείο", categoryEn: "Mint",
    duration: "7 λεπτά", durationSec: 420,
    imageId: IMGS[0],
    description: "Στο διοικητικό και οικονομικό κέντρο της Αρχαίας Αγοράς Θάσου βρισκόταν το Νομισματοκοπείο, ένας από τους σημαντικότερους χώρους της αρχαίας πόλης. Στην αρχαιότητα, το δικαίωμα κοπής νομισμάτων ανήκε μόνο σε ισχυρές και οργανωμένες πόλεις-κράτη, και το γεγονός ότι η Θάσος διέθετε δικό της νομισματοκοπείο αποδεικνύει τον πλούτο και τη σημασία της στο Αιγαίο.\n\nΗ οικονομική ευημερία της Θάσου βασιζόταν κυρίως στα κοιτάσματα χρυσού και αργύρου, στη μεταλλευτική δραστηριότητα, στο εμπόριο, στη ναυτιλία και στην εκμετάλλευση της Θασιακής Περαίας απέναντι στο όρος Παγγαίο. Ο Ηρόδοτος επισκέφθηκε τη Θάσο και αναφέρθηκε στον μεγάλο πλούτο που προερχόταν από τα μεταλλεία — οι αρχαίοι θεωρούσαν τη Θάσο μία από τις πιο εύπορες πόλεις της εποχής.\n\nΤα νομίσματα της Θάσου δεν ήταν απλώς μέσο συναλλαγής. Ήταν σύμβολα δύναμης, μέσα πολιτικής προβολής και αποδείξεις ανεξαρτησίας. Κυκλοφορούσαν σε ολόκληρο το Αιγαίο και ήταν γνωστά για την ποιότητα του μετάλλου τους. Πολλά έφεραν παραστάσεις του θεού Διόνυσου, του Ηρακλή, σατύρων, νυμφών ή συμβόλων της πόλης — λειτουργώντας σαν «ταυτότητα» της Θάσου σε ολόκληρο τον ελληνικό κόσμο.\n\nΗ παραγωγή νομισμάτων ήταν μια απαιτητική και εξαιρετικά οργανωμένη διαδικασία. Ο χρυσός ή ο άργυρος λιώνονταν σε ειδικούς κλιβάνους και χύνονταν σε καλούπια για να δημιουργηθούν μεταλλικοί δίσκοι σταθερού βάρους. Οι δίσκοι θερμαίνονταν ξανά για ευκολότερη χάραξη, τοποθετούνταν επάνω σε μεταλλική μήτρα με το σχέδιο της μίας όψης, και με δυνατό χτύπημα σφυριού αποτυπωνόταν η παράσταση. Κάθε νόμισμα ήταν ουσιαστικά ένα μικρό έργο τέχνης που απαιτούσε ακρίβεια, εμπειρία και μεγάλη τεχνική δεξιοτεχνία.\n\nΤα νομίσματα της Θάσου διευκόλυναν το εμπόριο, τις θαλάσσιες συναλλαγές, τη φορολογία και τις οικονομικές συμφωνίες με άλλες πόλεις — στο Αιγαίο, στη Μακεδονία, στον Εύξεινο Πόντο και στην ανατολική Μεσόγειο. Το Νομισματοκοπείο ήταν η «καρδιά» της οικονομικής δύναμης της πόλης, εκεί όπου ο ορυκτός πλούτος μετατρεπόταν σε πολιτική ισχύ, εμπόριο και πολιτισμό.",
    descriptionEn: "At the economic centre of the Ancient Agora stood the Mint. Thassian coins — bearing the Satyr and Nike — were renowned across the Mediterranean for their fine silver and artistic quality.",
    mapX: 44, mapY: 44,    mapsUrl: "https://maps.app.goo.gl/kLSLu8HqSfCvF2uE8",
  },
  {
    id: 32, num: "32",
    title: "Γραφείο — Λογείον", titleEn: "Office & Archive",
    category: "Πολιτεία", categoryEn: "Civic Building",
    duration: "6 λεπτά", durationSec: 360,
    imageId: IMGS[1],
    description: "Στο διοικητικό συγκρότημα της Αρχαίας Αγοράς Θάσου υπήρχε ένας ιδιαίτερα σημαντικός χώρος για τη λειτουργία του κράτους: το Γραφείο ή Λογείον. Αποτελούσε το διοικητικό και γραμματειακό κέντρο της πόλης, εκεί όπου συντάσσονταν οι νόμοι, καταγράφονταν οι αποφάσεις και φυλάσσονταν τα δημόσια έγγραφα της Θάσου.\n\nΕδώ εργάζονταν γραμματείς, δημόσιοι υπάλληλοι, λογιστές και αξιωματούχοι της διοίκησης με την ευθύνη να καταγράφουν τα ψηφίσματα, να συντάσσουν νόμους, να τηρούν οικονομικά στοιχεία και να διατηρούν τα δημόσια αρχεία. Η ύπαρξη τέτοιου χώρου δείχνει πόσο οργανωμένη ήταν η διοίκηση — στην αρχαία ελληνική πόλη η νομιμότητα βασιζόταν συχνά στη δημόσια καταγραφή και ανάρτηση των νόμων.\n\nΟι αρχαίοι Έλληνες χρησιμοποιούσαν διάφορα υλικά γραφής ανάλογα με τη χρήση. Οι ξύλινες πινακίδες καλύπτονταν με στρώμα κεριού και πάνω σε αυτό χάραζαν τα γράμματα με γραφίδα — η πλατιά άκρη της επέτρεπε το σβήσιμο και την επαναχρησιμοποίηση. Για σημαντικότερα κείμενα χρησιμοποιούσαν πάπυρο, εισαγόμενο κυρίως από την Αίγυπτο, που κολλημένος σχημάτιζε μεγάλους κυλίνδρους, τα ειλητάρια. Η περγαμηνή από επεξεργασμένο δέρμα ζώων ήταν πιο ανθεκτική και μπορούσε να γραφτεί και από τις δύο πλευρές.\n\nΤο λογείον ήταν ουσιαστικά η «μνήμη» του κράτους. Εδώ καταγράφονταν οι νόμοι, οι αποφάσεις, οι φόροι, οι στρατιωτικές υποχρεώσεις και οι οικονομικές συναλλαγές της Θάσου. Πολλά από αυτά τα κείμενα χαράσσονταν και σε λίθινες στήλες που τοποθετούνταν δημόσια στην αγορά — επιγραφές που αποτελούν σήμερα πολύτιμες πηγές για την ιστορία της πόλης.\n\nΤο Γραφείο – Λογείον δεν ήταν απλώς ένας χώρος γραφής. Ήταν το διοικητικό νευρικό κέντρο της πόλης, εκεί όπου η πολιτική εξουσία αποκτούσε μόνιμη μορφή μέσα από τον γραπτό λόγο. Οι αποφάσεις που λαμβάνονταν στην αγορά περνούσαν από εδώ για να καταγραφούν και να γίνουν επίσημοι νόμοι της Θάσου.",
    descriptionEn: "The Office or Archive (Logeion) in the administrative complex was vital for city governance — official records, financial accounts, and civic decrees were kept and managed here.",
    mapX: 50, mapY: 48,    mapsUrl: "https://maps.app.goo.gl/hYX9tL3nqunQ8Ma46",
  },
  {
    id: 33, num: "33",
    title: "Τράπεζα Εμπορίου", titleEn: "Trading Bank",
    category: "Εμπόριο", categoryEn: "Commerce",
    duration: "6 λεπτά", durationSec: 360,
    imageId: IMGS[2],
    description: "Στο διοικητικό και εμπορικό κέντρο της Αρχαίας Αγοράς Θάσου βρισκόταν η Τράπεζα Εμπορίου, χώρος άμεσα συνδεδεμένος με την οικονομική ζωή, τις συναλλαγές και τον έλεγχο της αγοράς. Η Θάσος ήταν μία από τις πλουσιότερες πόλεις του βορείου Αιγαίου χάρη στο εμπόριο, τη ναυτιλία, τα μεταλλεία χρυσού και αργύρου και τις εξαγωγές κρασιού, μαρμάρου και άλλων προϊόντων.\n\nΗ λέξη «τράπεζα» στην αρχαιότητα σήμαινε αρχικά το τραπέζι πάνω στο οποίο γίνονταν οι συναλλαγές. Εδώ εργάζονταν αγορανόμοι, έμποροι, γραμματείς και τραπεζίτες, και πραγματοποιούνταν έλεγχοι προϊόντων, οικονομικές συμφωνίες, υπολογισμοί φόρων και ανταλλαγές νομισμάτων. Η αίθουσα λειτουργούσε ουσιαστικά ως οικονομικό κέντρο της αγοράς, άμεσα συνδεδεμένη με το εμπόριο του λιμανιού.\n\nΣε αυτόν τον χώρο βρέθηκαν επίσημα μέτρα χωρητικότητας και σταθμά της αγοράς — μεταξύ αυτών μια μαρμάρινη τράπεζα μέτρησης αφιερωμένη στον θεό Ερμή από έναν αγορανόμο, με ημισφαιρικές κοιλότητες και σταθερές μετρήσεις χωρητικότητας. Με αυτά τα επίσημα μέτρα ελέγχονταν το κρασί, το λάδι, τα σιτηρά και άλλα εμπορεύματα. Ο Ερμής θεωρούνταν προστάτης του εμπορίου και των συναλλαγών, γι' αυτό πολλά εμπορικά αντικείμενα αφιερώνονταν σε εκείνον.\n\nΙδιαίτερα γνωστό ήταν το θασιακό κρασί, που εξαγόταν σε πολλές περιοχές του Αιγαίου. Οι αμφορείς της Θάσου έφεραν ειδικές σφραγίδες που πιστοποιούσαν την προέλευση, την ποιότητα και τη φορολόγηση του προϊόντος. Μάλιστα στην περιοχή των διοικητικών κτιρίων βρέθηκε ένας από τους αρχαιότερους ελληνικούς νόμους που αφορούσαν το εμπόριο κρασιού και ξυδιού — αποδεικνύοντας πόσο οργανωμένο ήταν το εμπόριο της πόλης.\n\nΗ Τράπεζα Εμπορίου ήταν η «καρδιά» του εμπορίου, εκεί όπου ελέγχονταν τα αγαθά, οργανώνονταν οι συναλλαγές, καθορίζονταν οι εμπορικοί κανόνες και προστατευόταν η αξιοπιστία της αγοράς. Στην αγορά μπορούσαν να συναντηθούν Έλληνες έμποροι, Θράκες, Μακεδόνες, Φοίνικες και ταξιδιώτες από πολλά μέρη του Αιγαίου — απόδειξη του διεθνούς χαρακτήρα της Θάσου ως ναυτικού και οικονομικού κέντρου.",
    descriptionEn: "The Trading Bank in the commercial centre of the Agora was the hub of economic life. Merchants from across the Mediterranean exchanged currency, negotiated contracts, and conducted their business here.",
    mapX: 54, mapY: 50,    mapsUrl: "https://maps.app.goo.gl/bmGBQKxjhEyPKvzx7",
  },
  {
    id: 34, num: "34",
    title: "Αξιώματα Διοίκησης Θάσου", titleEn: "Offices of Thassos Administration",
    category: "Πολιτεία", categoryEn: "Civic Building",
    duration: "7 λεπτά", durationSec: 420,
    imageId: IMGS[3],
    description: "Η Αρχαία Θάσος διέθετε ένα ιδιαίτερα οργανωμένο διοικητικό σύστημα, με πολλούς άρχοντες και δημόσιους λειτουργούς που φρόντιζαν για τη σωστή λειτουργία της πόλης. Τα αξιώματα κάλυπταν τη διοίκηση, τη δικαιοσύνη, τη θρησκεία, την οικονομία, το εμπόριο, τη στρατιωτική οργάνωση και την κοινωνική ζωή των πολιτών.\n\nΤο ανώτατο αξίωμα ήταν ο Άρχοντας — σε περιόδους δημοκρατίας υπήρχαν συνήθως τρεις, ενώ σε περιόδους ξένης κυριαρχίας ή τυραννίας η εξουσία συχνά συγκεντρωνόταν σε έναν. Το σημαντικότερο πολιτικό όργανο ήταν η Εκκλησία του Δήμου, όπου οι πολίτες ψήφιζαν νόμους, αποφάσιζαν για πόλεμο ή ειρήνη, εξέλεγαν άρχοντες και στρατηγούς. Οι Πολέμαρχοι (συνήθως πέντε) είχαν την ευθύνη του στρατού, της άμυνας και της οργάνωσης του στόλου — αξίωμα ιδιαίτερα σημαντικό για μια ναυτική δύναμη όπως η Θάσος.\n\nΟι Θεωροί ήταν θρησκευτικοί και διπλωματικοί αξιωματούχοι που οργάνωναν γιορτές, επέβλεπαν αγώνες και εκπροσωπούσαν τη Θάσο σε μεγάλα πανελλήνια ιερά. Οι Αγορανόμοι εποπτεύαν τα μέτρα και σταθμά, την ποιότητα των προϊόντων και το σφράγισμα των αμφορέων κρασιού. Οι Γυναικονόμοι επέβλεπαν την κοινωνική συμπεριφορά και τα έθιμα πένθους. Οι Απόλογοι λειτουργούσαν ως δικηγόροι, οι Διαλλάκτες ως διαιτητές και μεσολαβητές, ο Αποδέκτης ως φοροεισπράκτορας, ο Ιερομνήμων ως διαχειριστής του δημόσιου θησαυρού, και ο Γυμνασίαρχος ως υπεύθυνος της εκπαίδευσης και των αθλητικών δραστηριοτήτων.\n\nΤο σύστημα των αξιωμάτων αποκαλύπτει ότι η Θάσος ήταν μια εξαιρετικά οργανωμένη κοινωνία, όπου κάθε τομέας της ζωής — πολιτικός, στρατιωτικός, θρησκευτικός, οικονομικός και κοινωνικός — βρισκόταν υπό την ευθύνη ειδικών λειτουργών. Η διοίκηση δεν βασιζόταν σε έναν μόνο ηγέτη αλλά σε ένα πολύπλοκο δίκτυο θεσμών που εξασφάλιζαν τη λειτουργία του κράτους, την τάξη, τη δικαιοσύνη και τη σταθερότητα της κοινωνίας.",
    descriptionEn: "Ancient Thassos had a highly organised administrative system with many magistrates ensuring the city's proper functioning. This well-governed plutocratic democracy made Thassos an extraordinarily powerful polis.",
    mapX: 58, mapY: 48,    mapsUrl: "https://maps.app.goo.gl/xY6XjnBdDEud6gtx8",
  },
  {
    id: 35, num: "35",
    title: "Διονύσιο Αρχαίας Θάσου", titleEn: "Dionysion of Ancient Thassos",
    category: "Ιερό", categoryEn: "Sanctuary",
    duration: "8 λεπτά", durationSec: 480,
    imageId: IMGS[4],
    description: "Το Διονύσιο της αρχαίας Θάσου αποτελούσε ένα από τα σημαντικότερα θρησκευτικά και πολιτιστικά κέντρα της πόλης. Δεν ήταν απλώς ένα ιερό αφιερωμένο στον θεό Διόνυσο — ήταν χώρος όπου ενώνονταν η θρησκεία, το θέατρο, η μουσική, οι τελετουργίες και η δημόσια ζωή των Θασίων. Βρισκόταν περίπου εκατό μέτρα βόρεια από τη Δίοδο των Θεωρών, δίπλα στον λιθόστρωτο δρόμο που οδηγούσε στο θέατρο — θέση που δεν ήταν καθόλου τυχαία, αφού ο Διόνυσος θεωρούνταν προστάτης του θεάτρου και κάθε παράσταση είχε ουσιαστικά θρησκευτικό χαρακτήρα.\n\nΟ Διόνυσος ήταν θεός του κρασιού, της βλάστησης, της γονιμότητας, της χαράς, της έκστασης και της θεατρικής δημιουργίας. Ήταν «διπλογεννημένος» — ο Δίας τον έσωσε από τη νεκρή Σεμέλη ράβοντάς τον στον μηρό του. Μεγαλώνοντας ανακάλυψε το αμπέλι και δίδαξε στους ανθρώπους την παραγωγή του κρασιού. Από τις διονυσιακές γιορτές — πομπές με μουσική, χορό, Σατύρους και Βάκχες — γεννήθηκε το αρχαίο ελληνικό θέατρο, καθώς οι ύμνοι και οι διθύραμβοι εξελίχθηκαν στην τραγωδία, την κωμωδία και το σατυρικό δράμα.\n\nΤο ιερό είχε τη μορφή τριγωνικού περιβόλου με δύο ναούς, βωμούς και μνημειακά οικοδομήματα, που χρονολογούνται κυρίως στον 4ο και 3ο αιώνα π.Χ. Το καλύτερα σωζόμενο οικοδόμημα, ανυψωμένο 1,8 μέτρα λόγω της κλίσης του εδάφους, είχε τετράστηλη δωρική πρόσοψη και εσωτερική αίθουσα σε σχήμα Π. Στο κέντρο της στεκόταν μεγάλη αψιδωτή βάση με το άγαλμα του Διονύσου σε μέγεθος μεγαλύτερο του φυσικού, περιτριγυρισμένο από αγάλματα που συμβόλιζαν την Τραγωδία, την Κωμωδία, τον Διθύραμβο και τον Νυχτερινό Ύμνο.\n\nΟι επιγραφές στον χώρο αναφέρουν διάσημους καλλιτέχνες: τον αυλητή Αρίστων από τη Μίλητο, τον τραγικό ηθοποιό Θεόδωρο από την Αθήνα και τον κωμικό Φιλήμωνα — απόδειξη ότι στη Θάσο διοργανώνονταν δραματικοί αγώνες που προσέλκυαν καλλιτέχνες ευρύτατης φήμης. Το προσωπείο της Τραγωδίας, το άγαλμα της Κωμωδίας και το κεφάλι του Διονύσου που βρέθηκαν φυλάσσονται σήμερα στο μουσείο της Θάσου.\n\nΤο Διονύσιο ήταν τόπος λατρείας, θεάτρου, μουσικής, γιορτής και κοινωνικής ζωής — εκεί συγκεντρώνονταν οι πολίτες για να τιμήσουν τον θεό που συμβόλιζε τη χαρά, τη δημιουργία και την ανθρώπινη έκφραση. Μέσα από τα ερείπια του μπορούμε ακόμη σήμερα να φανταστούμε τη ζωντανή ατμόσφαιρα της αρχαίας Θάσου, γεμάτη μουσική, πομπές και διονυσιακή έκσταση.",
    descriptionEn: "The Dionysion of ancient Thassos was one of the city's most important religious and cultural centres. Dionysus, god of wine, was especially beloved here — Thassian wine was famous throughout antiquity.",
    mapX: 44, mapY: 50,    mapsUrl: "https://maps.app.goo.gl/FShNrkA4F4P6ZV9b6",
    localImages: [stop35img1, stop35img2, stop35img3, stop35img4, stop35img5],
  },
  {
    id: 36, num: "36",
    title: "Πύλη του Παρμένωνα", titleEn: "Gate of Parmenon",
    category: "Πύλη", categoryEn: "Gate",
    duration: "7 λεπτά", durationSec: 420,
    imageId: IMGS[5],
    description: "Στο νοτιοδυτικό τμήμα των τειχών της αρχαίας πόλης, στην απόκρημνη πλευρά της Ακρόπολης, βρίσκεται μία από τις πιο εντυπωσιακές και στρατηγικά σημαντικές πύλες της οχύρωσης: η Πύλη του Παρμένωνα. Η πύλη συναντάται κατά την κάθοδο από το Ιερό του Πάνα προς την περιοχή Τσαΐρια, ακολουθώντας την πορεία του τείχους πάνω στη δύσβατη και βραχώδη πλαγιά.\n\nΛίγο πριν φτάσουμε στην πύλη, διακρίνεται εντοιχισμένος ένας τεράστιος λίθος που φέρει μία από τις σημαντικότερες αρχαϊκές επιγραφές της Θάσου, χαραγμένη γύρω στο 510–490 π.Χ.: «ΠΑΡΜΕΝΟΝ ΜΕ ΕΠΩ[ΙΕΣΕΝ]» — «Ο Παρμένων με κατασκεύασε». Η φράση θεωρείται πιθανότατα υπογραφή του λατόμου ή τεχνίτη που επεξεργάστηκε τον λίθο, και αποτελεί εξαιρετικά σημαντική μαρτυρία για την περηφάνια και την κοινωνική αναγνώριση των αρχαίων τεχνιτών.\n\nΗ πύλη είναι κατασκευασμένη με τεράστιους λίθους από γνεύσιο, το σκληρό πέτρωμα που χρησιμοποιήθηκε και στο υπόλοιπο τείχος. Σώζονται ακόμη δύο από τα υπέρθυρα της εισόδου και οι ογκώδεις ορθοστάτες που τα στήριζαν. Το συνολικό ύψος του ανοίγματος έφθανε περίπου τα 3,12 μέτρα, επιτρέποντας τη διέλευση ανθρώπων, ζώων και στρατιωτικών μονάδων.\n\nΙδιαίτερο ενδιαφέρον παρουσιάζει ο μηχανισμός ασφάλισης: σε ένα από τα υπέρθυρα σώζεται εγκοπή μέσα στην οποία τοποθετούνταν κάθετο ξύλινο δοκάρι, που διασταυρωνόταν με οριζόντιο σύρτη εισχωρώντας βαθιά μέσα στο τείχος. Πάνω από την πύλη υπήρχε μηχανισμός ανύψωσης και καταβίβασης του δοκαριού, επιτρέποντας σταυρωτή ασφάλιση με εξαιρετική σταθερότητα — κατασκευή που θυμίζει εξελιγμένα αμυντικά συστήματα άλλων μεγάλων ελληνικών οχυρώσεων.\n\nΗ Πύλη του Παρμένωνα αποτελεί σήμερα ένα από τα πιο χαρακτηριστικά παραδείγματα αρχαϊκής οχυρωματικής τέχνης στη Θάσο. Συνδυάζει τεχνική δεξιοτεχνία, αρχιτεκτονική δύναμη και αμυντική ευφυΐα, ενώ παράλληλα διατηρεί ζωντανή τη μνήμη του Παρμένωνα, του τεχνίτη που άφησε χαραγμένο το όνομά του πάνω στην πέτρα πριν από δυόμισι χιλιάδες χρόνια.",
    descriptionEn: "On the southwest section of the walls, on the steep Acropolis face, stands one of the most impressive gates — where a craftsman named Parmenon carved his name into the stone 2,500 years ago.",
    mapX: 30, mapY: 44,    mapsUrl: "https://maps.app.goo.gl/qGadQ5YhKFRp6XxD6",
    localImages: [stop36img1, stop36img2, stop36img3, stop36img4, stop36img5, stop36img6, stop36img7, stop36img8],
  },
  {
    id: 37, num: "37",
    title: "Αρχαίο Θέατρο Θάσου", titleEn: "Ancient Theatre of Thassos",
    category: "Θέατρο", categoryEn: "Theatre",
    duration: "12 λεπτά", durationSec: 720,
    imageId: IMGS[0],
    description: "Το Αρχαίο Θέατρο της Θάσου αποτελεί ένα από τα σημαντικότερα και καλύτερα τοποθετημένα θέατρα του αρχαίου ελληνικού κόσμου. Είναι χτισμένο πάνω σε φυσική κοιλότητα του λόφου της Ακρόπολης, εφάπτεται στο αρχαίο τείχος και ανοίγεται προς τα δυτικά, προσφέροντας μοναδική θέα προς τη θάλασσα και το αρχαίο λιμάνι. Το θέατρο αναφέρεται ήδη από τον 5ο αιώνα π.Χ. από τον Ιπποκράτη στο έργο του «Περί Επιδημιών», ωστόσο τη σημερινή του μορφή την απέκτησε στις αρχές της ελληνιστικής περιόδου, στα τέλη του 4ου και αρχές του 3ου αιώνα π.Χ.\n\nΗ σκηνή ήταν επιβλητικό οικοδόμημα με μαρμάρινη πρόσοψη από δώδεκα δωρικούς κίονες, αφιερωμένη στον θεό Διόνυσο από τον Θάσιο πολίτη Λυσίστρατο. Η κιονοστοιχία στήριζε το λογείο — ένα υπερυψωμένο μαρμάρινο εξώστη, ασυνήθιστα πολυτελή για την εποχή — πάνω στον οποίο εμφανίζονταν οι ηθοποιοί. Οι κίονες είχαν ειδικές εγκοπές για να στερεώνονται ζωγραφικοί πίνακες και σκηνικά που άλλαζαν κατά τη διάρκεια της παράστασης.\n\nΤο θέατρο διέθετε εντυπωσιακούς μηχανισμούς: τον περίακτο, έναν περιστρεφόμενο τριγωνικό μηχανισμό αλλαγής σκηνικών, και τον γερανό για την εμφάνιση του «από μηχανής θεού» — από τη θεατρική αυτή πρακτική προέρχεται και η σύγχρονη έκφραση. Στην ορχήστρα, τον ημικυκλικό χώρο μεταξύ σκηνής και κοίλου, κινούνταν ο Χορός (περίπου 24 άτομα) που τραγουδούσε, χόρευε και σχολίαζε τα γεγονότα. Στο κέντρο της βρισκόταν η θυμέλη, ο βωμός του Διονύσου. Το κοίλο χωρούσε περίπου 3.500 θεατές σε μαρμάρινα εδώλια, χωρισμένα σε τέσσερις κερκίδες με εξαιρετική ακουστική.\n\nΚατά τη ρωμαϊκή εποχή το θέατρο μετατράπηκε σε αρένα για μονομαχίες και θηριομαχίες. Η ορχήστρα περιβλήθηκε με μαρμάρινο στηθαίο — με δαπάνη του Ηραγόρα και της συζύγου του Ισπανής — και μεγάλη τέντα προστάτευε τους θεατές. Εμπλουτίστηκε επίσης με ανάγλυφες παραστάσεις: Διόνυσος με πάνθηρα, Θρακικός ήρωας έφιππος, θεός Άρης. Πολλά ανάγλυφα ανακαλύφθηκαν το 1887 και φυλάσσονται σήμερα στο Αρχαιολογικό Μουσείο της Κωνσταντινούπολης.\n\nΤο Αρχαίο Θέατρο δεν ήταν μόνο χώρος ψυχαγωγίας — ήταν τόπος θρησκευτικών γιορτών, ποίησης, μουσικής και δημόσιας ζωής. Σήμερα συνεχίζει να φιλοξενεί πολιτιστικές εκδηλώσεις, διατηρώντας ζωντανή τη σχέση του νησιού με το αρχαίο του παρελθόν.",
    descriptionEn: "The Ancient Theatre of Thassos is one of the finest and most beautifully sited theatres of the ancient world, built into a natural hollow of the Acropolis hill with views across the Aegean.",
    mapX: 40, mapY: 35,    mapsUrl: "https://maps.app.goo.gl/cdvLiMxNAfMvK49k9",
  },
  {
    id: 38, num: "38",
    title: "Θεσμοφόριον", titleEn: "Thesmophorion",
    category: "Ιερό", categoryEn: "Sanctuary",
    duration: "7 λεπτά", durationSec: 420,
    imageId: IMGS[1],
    description: "Εκτός των τειχών, στο βραχώδες ακρωτήριο του Εβραιοκάστρου, στην άκρη της πόλης των Θασίων, βρίσκεται το ιερό των Θεσμοφόρων θεοτήτων, της Δήμητρας και της Κόρης Περσεφόνης. Σύμφωνα με την παράδοση, το ιερό της Δήμητρας ανεγειρόταν πάντοτε εκτός των τειχών ή στους πρόποδες της ακρόπολης.\n\nΤο ιερό ορίζεται από μεγάλο αναλημματικό τοίχο. Σώζονται τα ερείπια στοάς ανοιχτής προς τη θάλασσα σε σχήμα Π, ενώ στο βάθος βρέθηκε έδρανο σαν μαρμάρινο τραπέζι. Η βάση χρονολογείται στον 6ο αιώνα π.Χ., με την τελική μορφή να διαμορφώνεται γύρω στο 390–370 π.Χ. Η ταύτιση με ιερό της Δήμητρας και της Κόρης προέκυψε από τα αφιερώματα: πήλινα ειδώλια δεόμενων γυναικών, κέρνοι και πήλινο ομοίωμα χοίρου με «ανοιγμένη» κοιλιά — θυμίζοντας το έθιμο κατά το οποίο, στα Θεσμοφόρια, χοίροι ερρίπτοντο στα «μέγαρα» της θεάς.\n\nΤα Θεσμοφόρια ήταν τριήμερη γιορτή αποκλειστικά των γυναικών — στους άνδρες απαγορευόταν η είσοδος στους ναούς. Γιορταζόταν σε πολλές πόλεις: Αθήνα, Άργος, Τροιζήνα, Αίγινα, Δήλο, Σικελία και αλλού. Διαρκούσε τέσσερις ημέρες και αποτελούνταν από τις επιμέρους γιορτές Στηνία (σε ανάμνηση της άφιξης της Δήμητρας στην Ελευσίνα), Κάθοδος, Νηστεία και Καλλιγένεια. Γιορταζόταν ακριβώς την ίδια μέρα με την εορτή του θανάτου του Όσιρη στην Αίγυπτο — τη φθινοπωρινή ισημερία.\n\nΟ μύθος που ενέπνεε αυτές τις τελετές ήταν της Περσεφόνης: η θεά Δήμητρα είχε αποκτήσει με τον Δία την όμορφη Περσεφόνη. Μια μέρα που η νεαρή μάζευε λουλούδια, άνοιξε η Γη και ο Άδης-Πλούτωνας την άρπαξε στον Κάτω Κόσμο. Η θλιμμένη Δήμητρα μάρανε την πλάση — δεν καρποφορούσαν οι σοδειές, δεν άνθιζαν τα λουλούδια. Τελικά, με τη βοήθεια του Δία, επιτεύχθηκε συμφωνία: η Περσεφόνη να ζει έξι μήνες στη Γη και έξι στον Κάτω Κόσμο. Έτσι εξηγούνταν οι εποχές — χειμώνας και φθινόπωρο όταν η μητέρα θρηνεί, άνοιξη και καλοκαίρι όταν έχει την κόρη της πάλι κοντά της.\n\nΣτο ιερό βρέθηκαν επίσης αφιερώματα για θεότητες του Κάτω Κόσμου, όπως της Εκάτης και της Κυβέλης, καθώς και ενεπίγραφοι όροι που μαρτυρούν λατρεία πατρώων θεών του νησιού: Διός Αλάστορος, Αθηνάς Πατρώας, Αρτέμιδος Ορθοσίης και Νυμφών.",
    descriptionEn: "Outside the walls, on the rocky promontory of Evraiokastro, stands the sanctuary of the Thesmophorian deities — Demeter and Persephone — a place of exclusively female religious ceremonies.",
    mapX: 65, mapY: 54,    mapsUrl: "https://maps.app.goo.gl/J5qVpwFhStzJJuZ78",
  },
  {
    id: 39, num: "39",
    title: "Ιερό Δήλιας Αρτέμιδος", titleEn: "Sanctuary of Delian Artemis",
    titleTr: "Delia Artemis Kutsal Alanı",
    titleRo: "Sanctuarul Artemisei Delia",
    titleIt: "Il Santuario di Artemide Delia",
    titleBg: "Светилището на Делийската Артемида",
    category: "Ιερό", categoryEn: "Sanctuary",
    categoryTr: "Kutsal Alan",
    categoryRo: "Sanctuar",
    categoryIt: "Santuario",
    categoryBg: "Светилище",
    duration: "7 λεπτά", durationSec: 420,
    imageId: IMGS[2],
    description: "Στο βορειότερο άκρο των αρχαίων τειχών της Θάσου, στην πλευρά του Εβριόκαστρου, πάνω σε τεχνητό πλάτωμα με ανοιχτή θέα προς τη θάλασσα, αποκαλύφθηκε το 2003 ένα μικρό αλλά εξαιρετικά σημαντικό ιερό: το Δήλιον της Θάσου. Από εκεί ελέγχεται ολόκληρο το θαλάσσιο πέρασμα ανάμεσα στη Θάσο και την θρακική ακτή, ενώ στις αρχές του 5ου αιώνα π.Χ. το ιερό ενσωματώθηκε στο αμυντικό σύστημα της πόλης ως προπύργιο της οχύρωσης.\n\nΗ ιστορία του ιερού συνδέεται με την ίδρυση της Θάσου από τους Πάριους αποίκους. Σύμφωνα με τον Θουκυδίδη, οι Πάριοι ξεκίνησαν με αρχηγό τον Τελεσικλή, ύστερα από χρησμό του Μαντείου των Δελφών: «Να πεις στους Παριανούς, Τελεσικλή, ότι σου παραγγέλλω να χτίσεις στο νησί Αέρια μια πόλη που να φαίνεται από παντού.» Η παράδοση αναφέρει ότι οι πρώτοι άποικοι αποβιβάστηκαν ακριβώς σε αυτήν την περιοχή, άναψαν φωτιά ευχαριστώντας τον Απόλλωνα και την Άρτεμη, και ονόμασαν το ιερό «Δήλιον» — αφού τα δίδυμα αδέλφια θεωρούνταν γεννημένα στη Δήλο — μεταφέροντας έτσι στη νέα πατρίδα τη λατρεία των θεών της μητρόπολης.\n\nΗ ταύτιση του ιερού με τη λατρεία της Αρτέμιδος επιβεβαιώθηκε το 2005, όταν βρέθηκε επιγραφή του 4ου αιώνα π.Χ. με δύο λατρευτικούς κανονισμούς. Ο πρώτος όριζε ότι κατά τη διάρκεια των Θεσμοφορίων καμία γυναίκα δεν επιτρεπόταν να εισέλθει στο ιερό, ώστε ο επιμελητής των θυσιών να μπορεί να προετοιμάσει σωστά τις τελετές. Ο δεύτερος απαγόρευε τη στάθμευση ζώων κοντά στο ιερό για να μη βεβηλώνεται ο ιερός χώρος. Οι επιγραφές αποδεικνύουν ότι η κύρια θεότητα ήταν τελικά η Άρτεμις, ενώ ο Απόλλωνας είχε δευτερεύοντα ρόλο.\n\nΟι Πάριοι, αφού επέβαλαν τον έλεγχο του νησιού εκτοπίζοντας τα θρακικά φύλα, επεκτάθηκαν και στις απέναντι ακτές ιδρύοντας εμπορικούς σταθμούς κοντά στο Παγγαίο, εκμεταλλευόμενοι τα περίφημα μεταλλεία χρυσού και αργύρου. Το Δήλιον της Θάσου, παρά το μικρό του μέγεθος, αποτελεί μνημείο με τεράστια ιστορική και συμβολική αξία: συνδέει τη μυθική ίδρυση της Θάσου, τη μεταφορά των παριανών λατρειών, την αμυντική οργάνωση της πόλης και τη βαθιά σχέση των αρχαίων Ελλήνων με τη θάλασσα, τη θρησκεία και την αποικιακή ταυτότητά τους.",
    descriptionEn: `At the northernmost edge of the ancient walls of Thasos, on the side of Evriokastro, atop an artificial terrace overlooking the sea, a small yet remarkably important sanctuary was uncovered in 2003: the Delion of Thasos. The excavation was carried out by the French archaeologists François Salviat and Yves Grandjean as part of the study of the fortifications of the ancient city. Although it is a small shrine, its location and symbolism make it one of the most distinctive sanctuaries on Thasos.

The site was not chosen by chance. From this point, one could oversee the entire sea passage between Thasos and the opposite Thracian coast. To the west lies Cape Pachys, while to the east are the estuaries of the Nestos River. The position also allowed the observation of possible invasions arriving by sea. For this reason, at the beginning of the 5th century BC, the sanctuary was incorporated into the city's defensive system as a fortified outpost.

The history of the sanctuary is directly connected with the foundation of Thasos by colonists from Paros. According to Thucydides, the Parians set out under the leadership of Telesikles after receiving an oracle from the Oracle of Delphi:

"Tell the Parians, Telesikles, as I command you,
to build in the island of Aeria a city visible from everywhere."

At that time, Thasos was known by several names, including Aeria, Heria Chryse, Aithria, and Etyra. Telesikles, probably accompanied by the poet Archilochus, arrived on the island and encountered Thracian tribes already settled there.

Tradition states that the first colonists landed precisely in the area where the Delion was later established. There they lit a fire in gratitude to Apollo for the Delphic oracle, and also to Artemis, the great patron goddess of Paros. Since Apollo and Artemis were believed to be twin siblings born on Delos, the colonists named the sanctuary "Delion," thus transferring the cults of their motherland to their new homeland.

The settlement of the Parians on Thasos was not easy. Fierce conflicts took place with the Thracian tribes, yet Telesikles eventually succeeded in establishing control over the island. From that point onward, Thasos developed into one of the wealthiest and best-organized cities of the northern Aegean. The Parians also expanded to the opposite Thracian coast, founding trading posts at Galipsos, Aisyme, Maroneia, Stryme, and Neapolis, especially around the region of Pangaion, where they exploited the famous gold and silver mines.

Archaeological evidence demonstrates that the Delion of Thasos followed the same topographical logic as other sanctuaries of Apollo and Artemis known as "Delia." These sanctuaries were usually established on elevated sites with open views toward the sea, maintaining a symbolic relationship with Delos, the sacred island of Apollo. A similar example is the Delion of Paros, situated on a hill facing Delos.

The identification of the sanctuary with the cult of Artemis was confirmed in 2005, when an important 4th-century BC inscription was discovered near the sanctuary. The inscription contained two sacred regulations. The first referred to the sanctuary of "Apollo Delios and Artemis," while the second mentioned only the "sanctuary of Delia." The study of these inscriptions revealed that Artemis was ultimately the principal deity of the sanctuary, whereas Apollo held a secondary role.

The first regulation, dating to the archonship of Sonbrotos during the month of Plynterion (late June to mid-July), stated that during the Thesmophoria festival no woman was permitted to enter the sanctuary of Apollo Delios and Artemis. The sanctuary was to remain closed so that the official responsible for the sacrifices could properly prepare the rituals. Violating this rule was considered a religious offense burdening the soul of the offender.

The second regulation, from the archonship of Pantokleos, concerned the protection of the sacred space. It ordered that an older decree be inscribed on stone, prohibiting the stationing of animals near the sanctuary of Delia so that the sacred area would neither be obstructed nor polluted. Responsibility for the inscription belonged to the official overseeing the sacrifices, demonstrating the importance attached to the administration and care of the sanctuary.

Despite its small size, the Delion of Thasos is a monument of immense historical and symbolic significance. It connects the mythical foundation of Thasos, the transfer of Parian religious traditions, the political and military importance of the city, and the profound relationship of the ancient Greeks with the sea, religion, and their colonial identity.`,
    descriptionTr: `Taşoz antik surlarının en kuzey ucunda, Evriokastro tarafında, denize hâkim yapay bir teras üzerinde, 2003 yılında küçük fakat son derece önemli bir kutsal alan ortaya çıkarılmıştır: Taşoz Delion'u. Kazı çalışmaları, antik kentin sur sistemini inceleyen Fransız arkeologlar François Salviat ve Yves Grandjean tarafından gerçekleştirilmiştir. Küçük bir tapınak olmasına rağmen, bulunduğu konum ve taşıdığı sembolik anlam nedeniyle Taşoz'un en özel kutsal alanlarından biri kabul edilir.

Kutsal alanın kurulduğu yer rastgele seçilmemiştir. Buradan Taşoz ile karşıdaki Trakya kıyıları arasındaki tüm deniz geçidi kontrol edilebiliyordu. Batıda Pahis Burnu, doğuda ise Nestos Nehri'nin deltası görülmektedir. Bu konum aynı zamanda denizden gelebilecek saldırıları gözlemleme imkânı sağlıyordu. Bu nedenle MÖ 5. yüzyılın başlarında kutsal alan, kentin savunma sistemine bir ileri karakol olarak dâhil edilmiştir.

Kutsal alanın tarihi, Taşoz'un Paroslu kolonistler tarafından kurulmasıyla doğrudan bağlantılıdır. Thukydides'e göre, Paroslular liderleri Telesikles önderliğinde, Delfi Kahini'nden gelen bir kehanet üzerine yola çıkmışlardır:

"Paroslulara söyle, Telesikles, sana buyuruyorum;
Aeria adasında her yerden görülebilecek bir şehir kur."

O dönemde Taşoz, Aeria, Heria Hrysie, Aithria ve Etyra gibi farklı isimlerle bilinmekteydi. Telesikles, muhtemelen şair Arkhilokhos ile birlikte adaya ulaşmış ve burada Trak kabileleriyle karşılaşmıştır.

Rivayete göre ilk kolonistler tam da daha sonra Delion'un kurulacağı bu bölgeye ayak basmışlardır. Burada, Delfi kehaneti için Apollon'a ve Paros'un koruyucu tanrıçası Artemis'e şükranlarını sunmak amacıyla ateş yakmışlardır. Apollon ile Artemis'in Delos adasında doğmuş ikiz kardeşler olduğuna inanıldığından, kolonistler bu kutsal alana "Delion" adını vermiş ve böylece ana vatanlarının dini geleneklerini yeni topraklara taşımışlardır.

Parosluların Taşoz'a yerleşmesi kolay olmamıştır. Trak kabileleriyle sert çatışmalar yaşanmış, ancak Telesikles sonunda adanın kontrolünü ele geçirmeyi başarmıştır. Buradan itibaren Taşoz büyük bir gelişim sürecine girmiş ve Kuzey Ege'nin en zengin ve düzenli şehirlerinden biri hâline gelmiştir. Paroslular ayrıca Trakya kıyılarına da yayılmış; Galipsos, Aisyme, Maroneia, Stryme ve Neapolis gibi ticaret merkezleri kurmuşlardır. Özellikle Pangaion bölgesindeki ünlü altın ve gümüş madenlerinden yararlanmışlardır.

Arkeolojik veriler, Taşoz Delion'unun, Apollon ve Artemis'e adanmış diğer "Delia" kutsal alanlarıyla aynı topoğrafik mantığı izlediğini göstermektedir. Bu tür kutsal alanlar genellikle denize açık manzaralı yüksek noktalara kurulmuş ve kutsal Delos Adası ile sembolik bir bağ kurmuştur. Paros'taki Delion da Delos'a bakan bir tepede yer almaktadır.

Kutsal alanın Artemis kültüne ait olduğu 2005 yılında kesinleşmiştir. O yıl kutsal alanın yanında, MÖ 4. yüzyıla ait önemli bir yazıt bulunmuştur. Yazıtta iki dini düzenleme yer almaktadır. İlkinde "Delios Apollon ve Artemis kutsal alanı"ndan söz edilirken, ikincisinde yalnızca "Delia'nın kutsal alanı" geçmektedir. Yazıtların incelenmesi sonucunda kutsal alanın esas tanrıçasının Artemis olduğu, Apollon'un ise ikincil bir role sahip bulunduğu anlaşılmıştır.

İlk düzenleme, arkhon Sonbrotos döneminde, Plinterion ayı sırasında (Haziran sonu – Temmuz ortası) hazırlanmıştır. Buna göre Thesmophoria şenlikleri sırasında hiçbir kadının Apollon Delios ve Artemis kutsal alanına girmesine izin verilmiyordu. Kutsal alan kapalı tutulacak, böylece kurban törenlerinden sorumlu görevli ritüelleri uygun şekilde hazırlayabilecekti. Bu yasağın ihlali dini bir suç sayılıyor ve kişinin ruhuna yük getirdiğine inanılıyordu.

İkinci düzenleme ise arkhon Pantokleos dönemine aittir ve kutsal alanın korunmasını konu alır. Buna göre, daha eski bir kararın taş üzerine kazınması emredilmiştir. Bu karar, kutsal alanın yakınında hayvanların bekletilmesini yasaklıyor, böylece kutsal alanın kapanmasının ve kirletilmesinin önüne geçiliyordu. Yazının hazırlanmasından kurban törenlerinin sorumlusu görevli yükümlüydü; bu da kutsal alanın yönetimi ve korunmasına verilen önemi göstermektedir.

Taşoz Delion'u, küçük boyutuna rağmen son derece büyük tarihî ve sembolik değere sahip bir anıttır. Taşoz'un efsanevi kuruluşunu, Paros kültlerinin taşınmasını, kentin siyasi ve askerî önemini ve aynı zamanda antik Yunanların deniz, din ve koloni kimliğiyle olan derin bağını bir araya getirmektedir.`,
    descriptionRo: `La extremitatea nordică a zidurilor antice ale Thasos, în zona Evriokastro, pe o terasă artificială cu vedere deschisă spre mare, a fost descoperit în anul 2003 un sanctuar mic, dar deosebit de important: Delionul din Thasos. Cercetarea arheologică a fost realizată de arheologii francezi François Salviat și Yves Grandjean, în cadrul studiului fortificațiilor orașului antic. Deși este vorba despre un templu de mici dimensiuni, poziția și simbolismul său îl transformă într-unul dintre cele mai speciale sanctuare ale insulei Thasos.

Locul unde a fost întemeiat nu a fost ales întâmplător. Din acest punct se putea controla întregul pasaj maritim dintre Thasos și coasta tracică aflată vizavi. Spre vest se vede Capul Pachys, iar spre est gurile râului Nestos. Poziția permitea și observarea unor eventuale invazii venite dinspre mare. Din acest motiv, la începutul secolului al V-lea î.Hr., sanctuarul a fost integrat în sistemul defensiv al orașului, devenind un avanpost al fortificațiilor.

Istoria sanctuarului este direct legată de întemeierea Thasosului de către coloniștii din Paros. Potrivit lui Tucidide, parienii au pornit sub conducerea lui Telesikles, după ce au primit un oracol de la Oracolul din Delphi:

„Spune-le parienilor, Telesikles, așa cum îți poruncesc,
să întemeieze pe insula Aeria un oraș vizibil de pretutindeni."

În acea perioadă, Thasos era cunoscut sub mai multe nume, precum Aeria, Heria Hrysie, Aithria și Etyra. Telesikles, probabil împreună cu poetul Arhiloh, a ajuns pe insulă și a găsit triburi tracice deja stabilite acolo.

Tradiția spune că primii coloniști au debarcat exact în zona unde mai târziu a fost construit Delionul. Acolo au aprins un foc în semn de mulțumire către Apollo pentru oracolul delfic și către Artemis, marea protectoare a insulei Paros. Deoarece Apollo și Artemis erau considerați frați gemeni născuți pe Delos, coloniștii au numit sanctuarul „Delion", transferând astfel în noua lor patrie cultul zeilor din metropolă.

Stabilirea parienilor în Thasos nu a fost ușoară. Conflictele cu triburile tracice au fost dure, însă Telesikles a reușit în cele din urmă să impună controlul asupra insulei. De aici a început marea dezvoltare a Thasosului, care a devenit unul dintre cele mai bogate și organizate orașe din nordul Mării Egee. Parienii s-au extins și pe coastele Traciei, întemeind centre comerciale la Galipsos, Aisyme, Maroneia, Stryme și Neapolis, mai ales în jurul regiunii Pangaion, unde au exploatat faimoasele mine de aur și argint.

Datele arheologice demonstrează că Delionul din Thasos urmează aceeași logică topografică precum alte sanctuare dedicate lui Apollo și Artemis, cunoscute sub numele de „Delia". Aceste sanctuare erau de obicei construite pe înălțimi cu vedere deschisă spre mare, menținând o legătură simbolică cu Delos, insula sacră a lui Apollo. Un exemplu asemănător este Delionul din Paros, situat pe o colină orientată spre Delos.

Identificarea sanctuarului cu cultul Artemisei a fost confirmată în anul 2005, când lângă sanctuar a fost descoperită o importantă inscripție din secolul al IV-lea î.Hr., care conținea două regulamente religioase. În primul era menționat sanctuarul „lui Apollo Delios și al Artemisei", iar în al doilea era amintit doar „sanctuarul Deliei". Studiul inscripțiilor a arătat că principala divinitate a sanctuarului era Artemis, în timp ce Apollo avea un rol secundar.

Primul regulament, datând din timpul arhontelui Sonbrotos, în luna Plynterion (sfârșitul lunii iunie – mijlocul lunii iulie), stabilea că în timpul sărbătorii Thesmophoria nicio femeie nu avea voie să intre în sanctuarul lui Apollo Delios și Artemis. Sanctuarul trebuia să rămână închis pentru ca responsabilul sacrificiilor să poată pregăti corect ritualurile. Încălcarea regulii era considerată o ofensă religioasă care împovăra sufletul celui vinovat.

Al doilea regulament, din timpul arhontelui Pantokleos, privea protecția spațiului sacru. Acesta ordona ca un decret mai vechi să fie gravat pe piatră, interzicând staționarea animalelor lângă sanctuarul Deliei, pentru ca locul sacru să nu fie blocat sau profanat. Responsabilitatea pentru inscripționare revenea administratorului sacrificiilor, fapt ce demonstrează importanța acordată administrării și îngrijirii sanctuarului.

Delionul din Thasos, în ciuda dimensiunilor sale reduse, reprezintă un monument de o imensă valoare istorică și simbolică. El leagă întemeierea mitică a Thasosului, transferul cultelor pariene, importanța politică și militară a orașului și relația profundă a grecilor antici cu marea, religia și identitatea lor colonială.`,
    descriptionIt: `All'estremità settentrionale delle antiche mura di Taso, sul lato di Evriokastro, sopra una terrazza artificiale con vista aperta sul mare, nel 2003 è stato scoperto un piccolo ma straordinariamente importante santuario: il Delion di Taso. Lo scavo archeologico è stato condotto dagli archeologi francesi François Salviat e Yves Grandjean nell'ambito dello studio delle fortificazioni dell'antica città. Sebbene si tratti di un piccolo tempio, la sua posizione e il suo simbolismo lo rendono uno dei santuari più particolari di Taso.

Il luogo in cui fu fondato non fu scelto casualmente. Da lì era possibile controllare l'intero passaggio marittimo tra Taso e la costa tracia di fronte. A ovest si distingue il capo Pachys, mentre a est si trovano le foci del fiume Nestos. Questa posizione permetteva anche di osservare eventuali invasioni provenienti dal mare. Per questo motivo, all'inizio del V secolo a.C., il santuario venne incorporato nel sistema difensivo della città come avamposto fortificato.

La storia del santuario è direttamente collegata alla fondazione di Taso da parte dei coloni di Paro. Secondo Tucidide, i Pari partirono guidati da Telesicle, dopo aver ricevuto un oracolo dal Oracolo di Delfi:

«Di' ai Pari, Telesicle, come ti comando,
di costruire nell'isola di Aeria una città visibile da ogni parte.»

In quel periodo Taso era conosciuta con diversi nomi, tra cui Aeria, Heria Chryse, Aithria ed Etyra. Telesicle, probabilmente insieme al poeta Archiloco, arrivò sull'isola trovandovi già insediate tribù trace.

La tradizione racconta che i primi coloni sbarcarono proprio nell'area dove in seguito sarebbe stato edificato il Delion. Lì accesero un fuoco in segno di ringraziamento ad Apollo per il responso delfico, ma anche ad Artemide, grande dea protettrice di Paro. Poiché Apollo e Artemide erano considerati fratelli gemelli nati a Delo, i coloni chiamarono il santuario "Delion", trasferendo così nella nuova patria il culto delle divinità della madrepatria.

L'insediamento dei Pari a Taso non fu facile. I conflitti con le tribù trace furono duri, ma Telesicle riuscì infine a imporre il controllo sull'isola. Da quel momento iniziò il grande sviluppo di Taso, che divenne una delle città più ricche e organizzate dell'Egeo settentrionale. I Pari si espansero anche sulle coste opposte della Tracia, fondando empori commerciali a Galipsos, Aisyme, Maroneia, Stryme e Neapolis, soprattutto attorno alla regione del Pangeo, dove sfruttarono le celebri miniere d'oro e d'argento.

Le prove archeologiche dimostrano che il Delion di Taso segue la stessa logica topografica di altri santuari dedicati ad Apollo e Artemide chiamati "Delia". Questi santuari venivano generalmente costruiti su alture con ampia vista sul mare, mantenendo un legame simbolico con Delo, l'isola sacra di Apollo. Un caso simile è il Delion di Paro, situato su una collina rivolta verso Delo.

L'identificazione del santuario con il culto di Artemide fu confermata nel 2005, quando accanto al santuario fu scoperta un'importante iscrizione del IV secolo a.C. contenente due regolamenti sacri. Nel primo si menziona il santuario di "Apollo Delio e Artemide", mentre nel secondo compare soltanto il "santuario della Delia". Lo studio delle iscrizioni dimostrò che la divinità principale del santuario era in realtà Artemide, mentre Apollo aveva un ruolo secondario.

Il primo regolamento, datato all'epoca dell'arconte Sonbrotos, nel mese di Plynterion (fine giugno – metà luglio), stabiliva che durante le Tesmoforie nessuna donna potesse entrare nel santuario di Apollo Delio e Artemide. Il santuario doveva restare chiuso affinché il responsabile dei sacrifici potesse preparare correttamente i rituali. La violazione della norma era considerata una colpa religiosa che gravava sull'anima del trasgressore.

Il secondo regolamento, risalente all'arcontato di Pantocleo, riguarda la protezione dello spazio sacro. Ordinava di incidere su pietra un decreto più antico che vietava la sosta degli animali vicino al santuario della Delia, affinché il luogo sacro non venisse ostruito o profanato. La responsabilità dell'iscrizione ricadeva sul responsabile dei sacrifici, dimostrando l'importanza attribuita all'amministrazione e alla cura del santuario.

Il Delion di Taso, nonostante le sue piccole dimensioni, rappresenta un monumento di enorme valore storico e simbolico. Esso collega la fondazione mitica di Taso, il trasferimento dei culti pari, l'importanza politica e militare della città e il profondo rapporto degli antichi Greci con il mare, la religione e la loro identità coloniale.`,
    descriptionBg: `В най-северния край на древните крепостни стени на Тасос, от страната на Евриокастро, върху изкуствена тераса с открит изглед към морето, през 2003 г. беше разкрито малко, но изключително важно светилище: Делийонът на Тасос. Археологическите разкопки бяха проведени от френските археолози François Salviat и Yves Grandjean в рамките на изследването на укрепленията на древния град. Макар да става дума за малък храм, неговото местоположение и символика го правят едно от най-особените светилища на Тасос.

Мястото, където е основано светилището, не е избрано случайно. Оттам може да се наблюдава целият морски проход między Тасос и срещуположния тракийски бряг. На запад се вижда нос Пахис, а на изток — устието на река Нестос. Позицията позволявала и наблюдение на евентуални нападения откъм морето. Поради тази причина в началото на V век пр. Хр. светилището било включено в отбранителната система на града като укрепен аванпост.

Историята на светилището е пряко свързана с основаването на Тасос от колонисти от Парос. Според Тукидид, парийците потеглили под водачеството на Телесикъл, след като получили прорицание от Делфийският оракул:

„Кажи на парийците, Телесикле, както ти повелявам,
да построят на остров Аерия град, който да се вижда отвсякъде."

По онова време Тасос бил известен с различни имена, като Аерия, Херия Хрисия, Етрия и Етира. Телесикъл, вероятно заедно с поета Архилох, пристигнал на острова и заварил вече заселени тракийски племена.

Според преданието първите колонисти слезли именно в района, където по-късно бил изграден Делийонът. Там те запалили огън в благодарност към Аполон за делфийското прорицание, както и към Артемида — великата покровителка на Парос. Тъй като Аполон и Артемида били смятани за близнаци, родени на Делос, колонистите нарекли светилището „Делийон", пренасяйки така в новата си родина култовете на своята метрополия.

Заселването на парийците в Тасос не било лесно. Сблъсъците с тракийските племена били ожесточени, но Телесикъл в крайна сметка успял да наложи контрол над острова. Оттам започнало голямото развитие на Тасос, който се превърнал в един от най-богатите и добре организирани градове в северната част на Егейско море. Парийците се разширили и по срещуположните тракийски брегове, основавайки търговски станции в Галепсос, Айсима, Маронея, Стрима и Неаполис, главно около района на Пангей, където експлоатирали прочутите златни и сребърни мини.

Археологическите данни доказват, че Делийонът на Тасос следва същата топографска логика като други светилища на Аполон и Артемида, наричани „Делия". Обикновено тези светилища били изграждани на височини с открит изглед към морето, поддържайки символична връзка с Делос — свещения остров на Аполон. Подобен пример е Делийонът на Парос, разположен на възвишение срещу Делос.

Идентифицирането на светилището с култа към Артемида било потвърдено през 2005 г., когато до него била открита важна надпис от IV век пр. Хр., съдържаща два религиозни регламента. В първия се споменава светилището на „Аполон Делийски и Артемида", докато във втория вече се говори само за „светилището на Делия". Изследването на надписите показало, че основното божество на светилището всъщност била Артемида, докато Аполон имал второстепенна роля.

Първият регламент, датиран от времето на архонта Сонбротос, през месец Плинтерион (края на юни – средата на юли), постановявал, че по време на Тесмофориите нито една жена не може да влиза в светилището на Аполон Делийски и Артемида. Светилището трябвало да остане затворено, за да може отговорникът за жертвоприношенията правилно да подготви ритуалите. Нарушаването на правилото се считало за религиозно престъпление, което тежало върху душата на нарушителя.

Вторият регламент, от времето на архонта Пантоклеос, се отнасял до защитата на свещеното пространство. Той нареждал върху камък да бъде издълбан по-стар указ, забраняващ престоя на животни близо до светилището на Делия, за да не бъде свещеното място преградено или осквернено. Отговорността за надписа носел управителят на жертвоприношенията, което показва значението, отдавано на управлението и грижата за светилището.

Делийонът на Тасос, въпреки малките си размери, представлява паметник с огромна историческа и символична стойност. Той свързва митичното основаване на Тасос, пренасянето на парийските култове, политическото и военно значение на града, както и дълбоката връзка на древните гърци с морето, религията и тяхната колониална идентичност.`,
    mapX: 43, mapY: 33,    mapsUrl: "https://maps.app.goo.gl/qRqbjpKE2S2nmH4f6",
  },
  {
    id: 40, num: "40",
    title: "Βιβλίο Εντυπώσεων", titleEn: "Visitors' Book",
    category: "Βιβλίο", categoryEn: "Visitors' Book",
    duration: "10 λεπτά", durationSec: 600,
    imageId: IMGS[3],
    description: "Η περιήγησή σας στην Αρχαία Θάσο ολοκληρώνεται εδώ. Μοιραστείτε τις εντυπώσεις σας, τις σκέψεις σας και τα συναισθήματά σας από αυτό το μοναδικό ταξίδι στον χρόνο.",
    descriptionEn: "Your journey through Ancient Thassos ends here. Share your impressions, thoughts and feelings from this unique journey through time.",
    mapX: 32, mapY: 22,
    mapsUrl: "https://maps.app.goo.gl/BrZRLWvpmnSgv3oV6",
  },
];

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
