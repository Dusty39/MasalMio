const STORY_DB = [
    {
        id: "adventure_01",
        title: "Gizemli Ormanın Sırları",
        summary: "Evinin bahçesinden sihirli bir ormana açılan kapıyı keşfetmeye hazır mısın?",
        genre: "adventure",
        coverColor: "#4CAF50",
        requirements: ["sibling", "pet"],
        pages: [
            {
                text: "Bir zamanlar {{heroPetName}} adında çok sevimli bir dostumuz vardı. Tüyleri pırıl pırıl, gözleri ise merakla parlıyordu. En sevdiği şey, güneşli günlerde bahçedeki renkli kelebeklerin peşinden koşmaktı.",
                image: "images/scene_garden_pixar.png"
            },
            {
                text: "Onun en yakın arkadaşları {{heroName}} ve {{siblingName}} idi. {{siblingName}}, akıllı ve her zaman hazırlıklı bir ablaydı. Kardeşini ve sevimli dostlarını korumayı her şeyden çok severdi.",
                image: "images/sibling_girl_1.png"
            },
            {
                text: "{{heroName}}'in hayalleri boyundan büyüktü. Enerjisi hiç bitmez, aklı hep oyunlarda ve yeni keşiflerdeydi. Özellikle bloklarla yeni dünyalar inşa etmeye bayılırdı.",
                image: "images/hero_boy_1.png"
            },
            {
                text: "Güneşli bir öğleden sonraydı. {{heroPetName}} bahçenin uzak köşesinde yine bir kelebeğin peşine düşmüştü. Çalıların arasında daha önce hiç görmediği, parıl parıl parlayan eski bir kapı fark etti!",
                image: "images/scene_portal_pixar.png"
            },
            {
                text: "Kapı, etrafına mor ışıklar ve sihirli tozlar saçıyordu. {{heroPetName}} merakına yenik düştü. Patiyle kapıya hafifçe dokundu ve hop! Bir anda kapının içinden geçip gözden kayboldu.",
                image: "images/scene_portal_pixar.png"
            },
            {
                text: "Bahçede sessizlik olunca {{siblingName}} ve {{heroName}} endişelendi. '{{heroPetName}}! Neredesin küçük dostum?' diye seslendiler. Ama yanıt gelmedi. İkisi de telaşla bahçeyi aramaya başladı.",
                image: "images/scene_garden_pixar.png"
            },
            {
                text: "Aramaları onları bahçenin en köşesine götürdü. {{heroName}}'in gözleri büyüdü: 'Abla bak! Bu kapı da nereden çıktı?' Kapıdan sızan mor ışık, ikisinin de yüzünü aydınlatıyordu.",
                image: "images/scene_portal_pixar.png"
            },
            {
                text: "{{siblingName}}, kardeşinin elini sıkıca tuttu. 'Sanırım {{heroPetName}} içeride. Onu yalnız bırakamayız, değil mi?' dedi. {{heroName}} başını salladı. Korkuyordu ama dostunu kurtarmak için cesur olmalıydı.",
                image: "images/scene_portal_pixar.png"
            },
            {
                text: "İkisi el ele tutuşup kapıdan geçtiler. Gözlerini açtıklarında, kendilerini bambaşka bir dünyada buldular! Burası mavi sislerle kaplı, ağaçların gökyüzüne uzandığı Büyülü Bir Orman'dı.",
                image: "images/scene_forest_pixar.png"
            },
            {
                text: "Etrafta ateş böcekleri uçuşuyor, yapraklar kendi kendine melodiler fısıldıyordu. Uzaktan cılız bir ses duydular. 'Bu {{heroPetName}}'in sesi!' diye bağırdı {{heroName}}. Ses ormanın derinliklerinden geliyordu.",
                image: "images/scene_forest_pixar.png"
            },
            {
                text: "Hızla ormanın içine daldılar. Hava kararmaya başlamıştı ama {{siblingName}}, cebinden hazırlıklı olduğu fenerini çıkardı. 'Korkma,' dedi, 'Işık olduğu sürece yolumuzu kaybetmeyiz.'",
                image: "images/scene_forest_pixar.png"
            },
            {
                text: "Yürürken yerlerde dev mantarlar gördüler. Ama bunlar sıradan mantar değildi! Neon mavisi ve yeşili renklerde parlıyorlardı. {{heroName}} hayranlıkla, 'Sanki oyunlardaki sihirli dünyalar gibi!' dedi.",
                image: "images/scene_mushrooms_pixar.png"
            },
            {
                text: "Işıkları takip ederek ilerlediler ve sonunda devasa bir mağara girişine ulaştılar. Sesler buradan geliyordu. Mağaranın ağzı karanlıktı ve sarmaşıklarla kaplıydı.",
                image: "images/scene_cave_entrance_pixar.png"
            },
            {
                text: "{{heroName}} derin bir nefes aldı. 'Buraya girmemiz gerekiyor, değil mi?' diye sordu. {{siblingName}} gülümsedi: 'Gerçek kahramanlar zor anlarda belli olur. Hadi, birlikte başarabiliriz!'",
                image: "images/scene_cave_entrance_pixar.png"
            },
            {
                text: "Mağaraya adım attıkları anda şaşkınlıktan donakaldılar. İçerisi karanlık değil, tam tersine pırıl pırıldı! Duvarlar binlerce renkli kristalle kaplıydı ve her yer ışıl ışıl yanıyordu.",
                image: "images/scene_cave_crystals_pixar.png"
            },
            {
                text: "Ve işte orada! {{heroPetName}}, büyük, parlayan bir kristalin üzerine çıkmış, şaşkın şaşkın etrafı izliyordu. Onları görünce sevinçle zıpladı ve kucaklarına atladı.",
                image: "images/scene_cave_crystals_pixar.png"
            },
            {
                text: "{{heroName}}, tüylü dostuna sıkıca sarıldı. 'Seni çok merak ettik yaramaz!' dedi. {{heroPetName}} ise mutlu mırıltılarla karşılık verdi. Artık hepsi bir aradaydı ve güvendeydiler.",
                image: "images/scene_cave_crystals_pixar.png"
            },
            {
                text: "Mağaradan çıkarken bu kez korku değil, hayranlık hissediyorlardı. 'Keşke bu kristalleri {{friendName}} de görebilseydi,' dedi {{heroName}}. 'Buna asla inanmayacak!'",
                image: "images/scene_cave_crystals_pixar.png"
            },
            {
                text: "Ormana geri döndüklerinde, bir kayanın üzerinde oturan turuncu bir Tilki gördüler. Tilki onlara bilge gözlerle bakıyordu. 'Evinize dönen yolu mu arıyorsunuz küçük gezginler?' diye sordu.",
                image: "images/scene_fox_encounter_pixar.png"
            },
            {
                text: "{{siblingName}} şaşırdı ama bozuntuya vermedi. 'Evet,' dedi. 'Dostumuzu bulduk, şimdi dönmek istiyoruz.' Tilki gülümsedi. 'Cesaretiniz size yolu zaten gösterdi. Işığı takip edin.'",
                image: "images/scene_fox_encounter_pixar.png"
            },
            {
                text: "Tilkinin gösterdiği yöne baktıklarında, ağaçların arasından süzülen o tanıdık mor ışığı gördüler. Kapı oradaydı! Eve dönüş yolu onları bekliyordu.",
                image: "images/scene_forest_pixar.png"
            },
            {
                text: "Kapıdan geçmeden önce son kez arkalarına, bu büyülü dünyaya baktılar. {{heroName}}, 'Burası harikaydı,' dedi fısıldayarak. 'Biraz korkutucu ama harikaydı.'",
                image: "images/scene_portal_pixar.png"
            },
            {
                text: "Gözlerini kapattılar ve ışığın içinden geçtiler. Gözlerini açtıklarında tekrar kendi bahçelerindeydiler. Güneş hala parlıyor, kuşlar cıvıldıyordu. Sanki zaman hiç geçmemişti.",
                image: "images/scene_garden_pixar.png"
            },
            {
                text: "Tam o sırada {{parentMomName}} bahçeye çıktı. 'Çocuklar, neredesiniz? Kek yaptım!' diye seslendi. İkisi birbirine bakıp kıkırdadılar. Bu macera onların küçük sırrı olacaktı.",
                image: "images/scene_garden_pixar.png"
            },
            {
                text: "O akşam {{heroName}} yatağına yattığında, odasındaki gece lambasının ışığında kristal mağarayı hayal etti. Artık karanlıktan eskisi kadar korkmuyordu.",
                image: "images/hero_boy_1.png"
            },
            {
                text: "{{heroPetName}} ise {{heroName}}'in ayakucuna kıvrılmış mışıl mışıl uyuyordu. Rüyasında belki de hala o renkli kelebekleri kovalıyordu.",
                image: "images/pet_cat_1.png"
            },
            {
                text: "{{siblingName}} kapıdan başını uzattı. 'İyi geceler süper kahraman,' dedi fısıldayarak. {{heroName}} gülümsedi. 'İyi geceler abla. Yarın yine macera var mı?'",
                image: "images/sibling_girl_1.png"
            },
            {
                text: "O gün öğrendikleri en önemli şey şuydu: Bilinmeyen yerler bazen korkutucu görünebilirdi. Ama yanında sevdiklerin ve kalbinde cesaret varsa, her yol aydınlığa çıkardı.",
                image: "images/masalmio_logo.png"
            },
            {
                text: "Ve böylece {{heroName}}, {{siblingName}} ve {{heroPetName}}'in macerası mutlu sonla bitti. Ama kim bilir? Belki de o mor kapı bir gün tekrar açılmayı bekliyordur...",
                image: "images/scene_portal_pixar.png"
            },
            {
                text: "SON",
                image: "images/masalmio_logo.png"
            }
        ]
    },
    {
        id: "space_01",
        title: "Minik Astronotun Uzay Yolculuğu",
        summary: "3-2-1 Fırlatma! Yıldızların arasında dans etmeye hazır mısın?",
        genre: "adventure",
        coverColor: "#673AB7",
        requirements: [],
        pages: [
            { text: "{{heroName}}, o gece odasının penceresinden gökyüzüne bakarken yıldızların sanki ona göz kırptığını hissetti. 'Acaba orada kimler yaşıyor?' diye düşündü.", image: "images/hero_boy_1.png" },
            { text: "Hemen bahçeye koştu. Eski büyük bir karton kutuyu boyamaya başladı. Üzerine düğmeler, ekranlar ve hız göstergeleri çizdi. İşte hazırdı! Bu onun süper hızlı roketiydi.", image: "images/masalmio_logo.png" },
            { text: "Kaskını (yani aslında bisiklet kaskını) başına taktı, eldivenlerini giydi ve kokpite oturdu. Geri sayı başladı: '10.. 9.. 8.. Motorlar çalışıyor! Fırlatma başlıyor!'", image: "images/hero_boy_1.png" },
            { text: "Gözlerini sıkıca kapattı. Açtığında inanamadı! Her yer mordu ve etrafta parlayan gezegenler vardı. Yerçekimi yoktu, havada kuş gibi süzülüyordu. Karton kutu gerçekten uçmuştu!", image: "images/masalmio_logo.png" },
            { text: "Pencereden aşağı baktığında Dünya, uzayın karanlığında parlayan kocaman mavi bir bilye gibi görünüyordu. {{heroName}} el salladı: 'Görüşürüz Dünya! Birazdan döneceğim!'", image: "images/masalmio_logo.png" },
            { text: "Bir süre sonra parlayan tozların arasından geçti. Bu bir kuyruklu yıldızdı! Arkasında simli, upuzun bir iz bırakarak süzülüyordu. {{heroName}} hayranlıkla izledi.", image: "images/masalmio_logo.png" },
            { text: "Uzaktan ona el sallayan yeşil, minik bir canlı gördü. Uzaylılar da dost canlısıydı demek ki! {{heroName}} de ona gülümsedi.", image: "images/masalmio_logo.png" },
            { text: "Artık eve dönme vaktiydi. Roketini Dünya'ya çevirdi. Bahçeye indiğinde annesi onu yemeğe çağırıyordu. 'Geleceğin astronotu acıkmış olmalı,' dedi annesi gülerek.", image: "images/hero_boy_1.png" },
            { text: "Yemeğini yerken {{heroName}} gülümsedi. Kimse bilmese de o bugün yıldızlara dokunmuştu.", image: "images/masalmio_logo.png" },
            { text: "SON", image: "images/masalmio_logo.png" }
        ]
    },
    {
        id: "submarine_01",
        title: "Derin Deniz Kaşifi",
        summary: "Okyanusun en derinlerinde, ışıklı balıkların dünyasına dalıyoruz.",
        genre: "adventure",
        coverColor: "#00BCD4",
        requirements: [],
        pages: [
            { text: "{{heroName}} televizyonda denizaltı belgeseli izlerken hayallere daldı. Mavi suların altı ne kadar da gizemli ve büyüleyiciydi.", image: "images/hero_boy_1.png" },
            { text: "Gözlerini kapattı ve kendini sarı, minik bir denizaltının içinde hayal etti. Kapakları sıkıca kapattı. Motor sesi 'Fokur fokur!' diye duyuluyordu. Derinlere inmeye hazırdı.", image: "images/masalmio_logo.png" },
            { text: "Aşağı indikçe güneş ışığı azaldı ama etraf karanlık olmadı. Çünkü burada bitkiler ve mercanlar ışık saçıyordu! Deniz tabanı rengarenkti.", image: "images/masalmio_logo.png" },
            { text: "Yanından geçen balıklar gökkuşağı gibi renkliydi. Turuncu, mavi, mor balıklar dans eder gibi yüzüyordu. {{heroName}} cama burnunu dayayıp onları izledi.", image: "images/masalmio_logo.png" },
            { text: "Aniden kocaman bir gölge geçti! Bu dev ama dost canlısı bir balinaydı. {{heroName}}'e 'Merhaba' der gibi su püskürttü ve yavaşça süzülerek uzaklaştı.", image: "images/masalmio_logo.png" },
            { text: "Daha da derinlerde eski bir batık gemi gördü. Acaba içinde korsan hazineleri var mıydı? Ama girmeye vakti yoktu, hava tankı azalıyordu.", image: "images/masalmio_logo.png" },
            { text: "Hızla yukarı çıkmaya başladı. Yüzeye çıkıp kapağı açtığında derin bir nefes aldı. Deniz kokusu ve martı sesleri onu karşıladı.", image: "images/masalmio_logo.png" },
            { text: "Bu macera harikaydı. {{heroName}}, 'Büyüyünce okyanusları koruyacağım,' diye söz verdi kendi kendine.", image: "images/hero_boy_1.png" },
            { text: "SON", image: "images/masalmio_logo.png" }
        ]
    },
    {
        id: "camp_01",
        title: "Ormandaki Çadır Kampı",
        summary: "Kamp ateşi, yıldızlar ve ormanın sesleri. Doğayla baş başa bir gece.",
        genre: "adventure",
        coverColor: "#795548",
        requirements: [],
        pages: [
            { text: "Hafta sonu gelmişti! {{heroName}} ve ailesi, eşyaları arabaya yükleyip ormanın yolunu tuttular. Araba orman yoluna girdiğinde macera başlamıştı.", image: "images/hero_boy_1.png" },
            { text: "Orman yemyeşildi ve kuş cıvıltılarıyla doluydu. Ağaçların arasından süzülen güneş ışıkları yerde dans ediyordu. {{heroName}} derin bir nefes aldı; hava mis gibi çam kokuyordu.", image: "images/masalmio_logo.png" },
            { text: "Hemen kamp alanını kurmaya başladılar. {{heroName}}, babasına yardım etti ve çekiçle çadır kazıklarını yere çaktı. Kendi evini kurmak çok eğlenceliydi.", image: "images/masalmio_logo.png" },
            { text: "Akşam olunca büyük bir kamp ateşi yaktılar. Ateşin çıtırtısı ve turuncu ışığı herkesi ısıtıyordu. Marşmelovları kızartıp afiyetle yediler.", image: "images/masalmio_logo.png" },
            { text: "Tam o sırada çalıların arasından bir hışırtı geldi. Çıtır, çıtır... {{heroName}} biraz korktu ama fenerini cesurca o yöne tuttu. O da ne?", image: "images/masalmio_logo.png" },
            { text: "Meraklı, turuncu bir tilki onlara bakıyordu! Gözleri fener ışığında parlıyordu. {{heroName}} sessizce onu izledi. Tilki de ona baktı, gülümsedi ve sakince ormana döndü.", image: "images/masalmio_logo.png" },
            { text: "Gece çadırda uyku tulumuna girdiğinde, ağaçların rüzgarla hışırtısını dinledi. Bu, ormanın ona söylediği bir ninniydi.", image: "images/masalmio_logo.png" },
            { text: "Sabah kuş sesleriyle uyanmak harikaydı. {{heroName}}, doğayı ve kamp yapmayı çok sevmişti.", image: "images/hero_boy_1.png" },
            { text: "SON", image: "images/masalmio_logo.png" }
        ]
    },
    {
        id: "holiday_01",
        title: "Unutulmaz Yaz Tatili",
        summary: "Kumsalda kumdan kaleler ve dondurma keyfi!",
        genre: "adventure",
        coverColor: "#FFC107",
        requirements: [],
        pages: [
            { text: "Okullar kapanmış, beklenen tatil zamanı gelmişti! {{heroName}}, en sevdiği oyuncakları ve mayosunu bavula koyarken çok heyecanlıydı.", image: "images/hero_boy_1.png" },
            { text: "Uzun bir yolculuk yaptılar. Camdan ağaçları, dağları ve köyleri izledi. Dünya ne kadar da büyüktü. Sonunda denizin mavisini gördü!", image: "images/masalmio_logo.png" },
            { text: "Otele vardıklarında hemen mayosunu giyip kumsala koştu. Kumlar sıcacıktı, deniz ise masmavi ve çarşaf gibiydi.", image: "images/masalmio_logo.png" },
            { text: "Kumsalda dev gibi bir kale yapmaya başladı. Etrafına hendekler kazdı, deniz kabuklarıyla süsledi. Yengeçler kalesini ziyarete geldi.", image: "images/masalmio_logo.png" },
            { text: "Denize girdiğinde balıklarla yarış yaptı. Suda taklalar attı, su tabancasıyla oyunlar oynadı. Güneş onu sıcacık ısıtıyordu.", image: "images/masalmio_logo.png" },
            { text: "Akşamüzeri sahil kenarında yürüyüş yaparken en sevdiği dondurmadan yedi. Dondurması eriyip eline aksa da umurunda değildi.", image: "images/hero_boy_1.png" },
            { text: "Güneş batarken gökyüzü turuncu ve pembe olmuştu. {{heroName}}, 'Bu tatil hiç bitmesin,' diye geçirdi içinden.", image: "images/masalmio_logo.png" },
            { text: "SON", image: "images/masalmio_logo.png" }
        ]
    },
    {
        id: "plane_01",
        title: "Bulutların Üzerinde Yolculuk",
        summary: "Kemerlerinizi bağlayın, uçuşa geçiyoruz!",
        genre: "adventure",
        coverColor: "#03A9F4",
        requirements: [],
        pages: [
            { text: "Bugün {{heroName}} için büyük gündü. Hayatında ilk defa uçağa binecekti! Karnında kelebekler uçuşuyordu.", image: "images/hero_boy_1.png" },
            { text: "Havalimanı o kadar kalabalıktı ki! Kocaman camlardan dev gibi uçakları izledi. Bavulların bantlarda gidişini seyretti.", image: "images/masalmio_logo.png" },
            { text: "Uçaktaki koltuğuna oturdu ve kemerini bağladı. Pilot 'Uçuşa hazırız' dedi. Motorlar gürledi ve uçak hızlandı, hızlandı...", image: "images/masalmio_logo.png" },
            { text: "Birden koltuğa yapıştı. Havalanıyorlardı! Tekerleklerin yerden kesildiğini hissetti. Yükseldikçe yükseldiler.", image: "images/masalmio_logo.png" },
            { text: "Pencereden aşağı baktı. Arabalar karınca kadar, evler ise oyuncak kutusu kadar küçüktü. Yollar incecik çizgiler gibiydi.", image: "images/masalmio_logo.png" },
            { text: "Sonra bulutların içine girdiler. Her yer bembeyaz oldu. 'Sanki pamuk tarlasındayız,' dedi {{heroName}}. Güneş bulutların üzerinde daha parlaktı.", image: "images/masalmio_logo.png" },
            { text: "Hostes abla ona meyve suyu ikram etti. Gökyüzünde meyve suyu içmek çok havalıydı!", image: "images/masalmio_logo.png" },
            { text: "İniş yaptıklarında {{heroName}} pilot olmak istediğine karar vermişti bile. Uçmak harika bir histi.", image: "images/hero_boy_1.png" },
            { text: "SON", image: "images/masalmio_logo.png" }
        ]
    },
    {
        id: "train_01",
        title: "Çuf Çuf Tren Gezisi",
        summary: "Rayların üzerindeki ritmik ses eşliğinde keyifli bir gezi.",
        genre: "adventure",
        coverColor: "#FF5722",
        requirements: [],
        pages: [
            { text: "İstasyon düdük sesiyle yankılandı. Dumanlar çıkararak kocaman bir tren yaklaşıyordu! {{heroName}} trene binmeyi çok severdi.", image: "images/hero_boy_1.png" },
            { text: "Bavullarını yerleştirip kompartımana oturdular. Tren 'Çuf çuf, düüt düüt!' diyerek hareket etti. Tekerleklerin tıkırtısı bir şarkı gibiydi.", image: "images/masalmio_logo.png" },
            { text: "Pencereden dışarısı bir film şeridi gibi akıyordu. Ağaçlar, direkler, inekler hızla geçip gidiyordu. {{heroName}} hepsine el salladı.", image: "images/masalmio_logo.png" },
            { text: "Tünellere girdiklerinde her yer kapkaranlık oluyor, {{heroName}} heyecanla çığlık atıyordu. Sonra tekrar aydınlık oluyordu.", image: "images/masalmio_logo.png" },
            { text: "Yemekli vagona gitmek için koridorda yürüdüler. Tren sallandığı için yürümek çok komikti, sağa sola yalpalayarak dans ediyor gibiydiler.", image: "images/masalmio_logo.png" },
            { text: "Sıcak çikolatasını içerken manzarayı izledi. Tren yolculuğu hiç bitmese ne güzel olurdu.", image: "images/masalmio_logo.png" },
            { text: "İstasyona vardıklarında {{heroName}}, 'Güle güle koca tren,' dedi. Bu gezinti çok eğlenceliydi.", image: "images/hero_boy_1.png" },
            { text: "SON", image: "images/masalmio_logo.png" }
        ]
    },
    {
        id: "polar_01",
        title: "Karlı Kutup Bekçisi",
        summary: "Burası çok soğuk ama penguenler çok sıcakkanlı!",
        genre: "adventure",
        coverColor: "#E0F7FA",
        requirements: [],
        pages: [
            { text: "{{heroName}} en kalın montunu, yünlü beresini ve eldivenlerini giydi. Hayalinde bembeyaz Kuzey Kutbu'ndaydı.", image: "images/hero_boy_1.png" },
            { text: "Adım attığı her yer gıcır gıcır kar sesi çıkarıyordu. Hava o kadar soğuktu ki nefes alırken ağzından dumanlar çıkıyordu.", image: "images/masalmio_logo.png" },
            { text: "İleride paytak paytak yürüyen siyah beyaz kuşlar gördü. Bunlar penguenlerdi! Buzun üzerinde kayarak oyun oynuyorlardı.", image: "images/masalmio_logo.png" },
            { text: "Minik bir penguen kaydı ve buzun üzerine düştü. {{heroName}} hemen yardım etmek için koştu ve onu kaldırdı.", image: "images/masalmio_logo.png" },
            { text: "Birlikte buzdan kocaman bir kale yaptılar. Penguenler ona teşekkür etmek için balık hediye etti (tabii ki şakacıktan!).", image: "images/masalmio_logo.png" },
            { text: "Gökyüzünde yeşil ışıklar dans etmeye başladı. Bu Kuzey Işıkları'ydı! Büyülü gibi görünüyorlardı.", image: "images/masalmio_logo.png" },
            { text: "Eve döndüğünde burnu soğuktan kıpkırmızı olmuştu ama kalbi sıcacıktı. Yeni arkadaşlar edinmişti.", image: "images/hero_boy_1.png" },
            { text: "SON", image: "images/masalmio_logo.png" }
        ]
    },
    {
        id: "solo_day_01",
        title: "Cesur Kşifin Tek Başına Macerası",
        summary: "Bazen en büyük maceralar, tek başına çıktığın yürüyüşlerde başlar.",
        genre: "adventure",
        coverColor: "#2196F3",
        requirements: [],
        pages: [
            { text: "Bugün {{heroName}} için sıradan bir gün gibi başlamıştı. Bahçeye çıkıp etrafı keşfetmek istedi.", image: "images/hero_boy_1.png" },
            { text: "Gökyüzünde parlayan garip, renkli bir bulut gördü. Bulut sanki bir ejderhaya benziyordu!", image: "images/masalmio_logo.png" },
            { text: "Bulutu takip ederken arka bahçede eski, unutulmuş bir top buldu. Bu onun yeni hazinesiydi.", image: "images/masalmio_logo.png" },
            { text: "Akşama kadar topla oynadı. Kendi kendine yetebilmek ve oyun kurmak harika bir histi.", image: "images/hero_boy_1.png" },
            { text: "SON", image: "images/masalmio_logo.png" }
        ]
    },
    {
        id: "pet_day_01",
        title: "Yaramaz Dostumun Sırrı",
        summary: "Evcil hayvanın bugün çok garip davranıyor, acaba ne saklıyor?",
        genre: "comedy",
        coverColor: "#FF9800",
        requirements: ["pet"],
        pages: [
            { text: "{{heroName}}, dostu {{heroPetName}}'in sürekli bahçenin köşesine kaçtığını fark etti.", image: "images/pet_cat_1.png" },
            { text: "Sessizce onu takip etti. {{heroPetName}} patileriyle toprağı kazıyordu.", image: "images/masalmio_logo.png" },
            { text: "Meğerse orada sakladığı kocaman bir oyuncak kemik vardı! {{heroName}} gülerek yanına gitti.", image: "images/masalmio_logo.png" },
            { text: "Birlikte kemikle oynadılar. {{heroPetName}} sırrının ortaya çıkmasına hiç de üzülmemişti.", image: "images/pet_cat_1.png" },
            { text: "SON", image: "images/masalmio_logo.png" }
        ]
    }
];

class StoryEngine {
    static generate(templateId, config) {
        const template = STORY_DB.find(s => s.id === templateId);
        if (!template) return null;

        // Clone story to avoid mutating DB
        const story = JSON.parse(JSON.stringify(template));

        // Replace Placeholders
        story.pages.forEach(page => {
            page.text = page.text
                .replace(/{{heroName}}/g, config.hero.name || "Kahraman")
                .replace(/{{siblingName}}/g, config.family.sibling.name || "Kardeş")
                .replace(/{{friendName}}/g, config.family.friend.name || "Arkadaş")
                .replace(/{{parentMomName}}/g, config.family.mom.name || "Anne")
                .replace(/{{parentDadName}}/g, config.family.dad.name || "Baba")
                .replace(/{{mentorName}}/g, config.family.mentor.name || "Bilge Dedemiz")
                .replace(/{{heroPetName}}/g, config.pets.heroPet.name || "Boncuk");
        });

        // Dynamic Avatar/Scene Logic
        // We want to overlay the Hero Avatar on scenes if possible, or swap generic scenes 
        // with specific character portraits if the text focuses heavily on them.
        story.pages.forEach(page => {
            // If the page explicitly uses a character portrait path (like 'images/hero_boy_1.png')
            // we should swap it with the ACTUAL user selected avatar.
            if (page.image === "images/hero_boy_1.png") {
                page.image = config.hero.avatar;
            } else if (page.image === "images/sibling_girl_1.png") {
                page.image = config.family.sibling.avatar;
            } else if (page.image === "images/pet_cat_1.png") {
                page.image = config.pets.heroPet.avatar;
            } else if (page.image === "images/parent_mom_1.png") {
                page.image = config.family.mom.avatar;
            }

            // Dynamic Scene Logic
            if (page.image === "images/scene_forest_pixar.png" && config.hero.gender === 'boy') {
                // If we have a specific action shot for "Boy walking in forest", use it
                // We currently only have this one generated action shot.
                page.image = "images/action_forest_walk_boy.png";
            }
            // Scenes (images/scene_*.png) are kept as is.
        });

        return story;
    }
}
