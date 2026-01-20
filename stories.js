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
        id: "solo_01",
        title: "Gökyüzü Macerası",
        summary: "Bulutların üzerinde ne saklı? Cesaretini topla ve tırmanmaya başla!",
        genre: "adventure",
        coverColor: "#2196F3",
        requirements: [], // No special requirements
        pages: [
            { text: "{{heroName}}, bahçede otururken gökyüzünde parlayan garip bir bulut fark etti.", image: "images/hero_boy_1.png" },
            { text: "Bulut sanki onu çağırıyordu. 'Acaba oraya nasıl çıkarım?' diye düşündü.", image: "images/scene_garden_pixar.png" },
            { text: "Büyük bir balon buldu ve macerası başladı!", image: "images/scene_forest_pixar.png" },
            { text: "SON", image: "images/masalmio_logo.png" }
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
            { text: "{{heroName}}, o gece gökyüzüne bakarken yıldızların ona göz kırptığını hissetti. 'Acaba orada kimler yaşıyor?' diye düşündü.", image: "images/hero_boy_1.png" },
            { text: "Bahçedeki eski karton kutuyu boyadı, üzerine düğmeler çizdi. İşte hazırdı! Bu onun süper hızlı roketiydi.", image: "images/scene_garden_pixar.png" },
            { text: "Kaskını (yani bisiklet kaskını) taktı ve geri sayıma başladı. 10.. 9.. 8.. Motorlar çalışıyor!", image: "images/hero_boy_1.png" },
            { text: "Gözlerini açtığında her yer mordu! Yerçekimi yoktu, havada süzülüyordu. Karton kutu gerçekten uçmuştu!", image: "images/scene_portal_pixar.png" },
            { text: "Pencereden baktığında Dünya kocaman mavi bir bilye gibi görünüyordu. {{heroName}} el salladı: 'Görüşürüz Dünya!'", image: "images/scene_portal_pixar.png" },
            { text: "Bir süre sonra parlayan tozların arasından geçti. Bu bir kuyruklu yıldızdı! Arkasında simli bir iz bırakıyordu.", image: "images/scene_cave_crystals_pixar.png" },
            { text: "Yolculuk yorucuydu ama harikaydı. {{heroName}}, 'Bir gün gerçekten gideceğim,' diye söz verdi kendi kendine.", image: "images/hero_boy_1.png" },
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
            { text: "{{heroName}} denizaltı belgeseli izlerken hayallere daldı. Mavi suların altı ne kadar da gizemliydi.", image: "images/hero_boy_1.png" },
            { text: "Hayalindeki denizaltıya bindi ve kapakları kapattı. Fokur fokur sesler eşliğinde derinlere inmeye başladı.", image: "images/scene_cave_entrance_pixar.png" },
            { text: "Aşağı indikçe güneş ışığı azaldı ama etraf karanlık olmadı. Çünkü burada bitkiler ışık saçıyordu!", image: "images/scene_cave_crystals_pixar.png" },
            { text: "Yanından geçen balıklar gökkuşağı gibi renkliydi. {{heroName}} cama burnunu dayayıp onları izledi.", image: "images/scene_cave_crystals_pixar.png" },
            { text: "Aniden kocaman bir gölge geçti! Bu dost canlısı bir balinaydı. {{heroName}}'e 'Merhaba' der gibi su püskürttü.", image: "images/scene_cave_entrance_pixar.png" },
            { text: "Hava tankı azalmadan yukarı çıkmalıydı. Yüzeye çıktığında derin bir nefes aldı. Deniz kokusu harikaydı.", image: "images/scene_garden_pixar.png" },
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
            { text: "Hafta sonu gelmişti! {{heroName}} ve ailesi, eşyaları arabaya yükleyip ormanın yolunu tuttular.", image: "images/hero_boy_1.png" },
            { text: "Orman yemyeşildi ve kuş cıvıltılarıyla doluydu. {{heroName}} derin bir nefes aldı; hava tertemizdi.", image: "images/scene_forest_pixar.png" },
            { text: "Hemen çadırı kurmaya başladılar. {{heroName}}, çekiçle çadır kazıklarını çakarken kendini çok güçlü hissetti.", image: "images/scene_forest_pixar.png" },
            { text: "Akşam olunca ateş yaktılar. Ateşin çıtırtısı ve turuncu ışığı herkesi ısıtıyordu.", image: "images/scene_fox_encounter_pixar.png" },
            { text: "Tam o sırada çalıların arasından bir hışırtı geldi. {{heroName}} fenerini o yöne tuttu. O da ne?", image: "images/scene_fox_encounter_pixar.png" },
            { text: "Meraklı bir tilki onlara bakıyordu! {{heroName}} sessizce onu izledi. Tilki de ona baktı ve sakince ormana döndü.", image: "images/scene_fox_encounter_pixar.png" },
            { text: "Gece çadırda uyku tulumuna girdiğinde, ormanın ninnisiyle hemen uykuya daldı.", image: "images/scene_mushrooms_pixar.png" },
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
            { text: "Okullar kapanmış, tatil zamanı gelmişti! {{heroName}} bavulunu hazırlarken çok heyecanlıydı.", image: "images/hero_boy_1.png" },
            { text: "Yolculuk boyunca camdan ağaçları, dağları ve köyleri izledi. Dünya ne kadar da büyüktü.", image: "images/scene_garden_pixar.png" },
            { text: "Otele vardıklarında hemen mayosunu giyip koştu. Deniz masmavi ve çarşaf gibiydi.", image: "images/scene_garden_pixar.png" },
            { text: "Kumsalda dev gibi bir kale yaptı. Etrafına hendekler kazdı, deniz kabuklarıyla süsledi.", image: "images/scene_cave_crystals_pixar.png" },
            { text: "Akşamüzeri en sevdiği dondurmadan yedi. Tatil hiç bitmesin istiyordu.", image: "images/hero_boy_1.png" },
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
            { text: "Bugün {{heroName}} için büyük gündü. İlk defa uçağa binecekti!", image: "images/hero_boy_1.png" },
            { text: "Havalimanı o kadar kalabalıktı ki! Herkes bir yerlere yetişmeye çalışıyordu.", image: "images/scene_garden_pixar.png" },
            { text: "Uçaktaki koltuğuna oturdu. Motorlar gürledi ve birden koltuğa yapıştı. Havalanıyorlardı!", image: "images/scene_garden_pixar.png" },
            { text: "Pencereden aşağı baktı. Arabalar karınca kadar, evler ise kibrit kutusu kadar küçüktü.", image: "images/scene_portal_pixar.png" },
            { text: "Bulutların içine girdiklerinde her yer bembeyaz oldu. 'Sanki pamuk tarlasındayız,' dedi.", image: "images/scene_cave_crystals_pixar.png" },
            { text: "İniş yaptıklarında {{heroName}} pilot olmak istediğine karar vermişti bile.", image: "images/hero_boy_1.png" },
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
            { text: "İstasyon düdük sesiyle yankılandı. Tren geliyordu! {{heroName}} trene binmeyi çok severdi.", image: "images/hero_boy_1.png" },
            { text: "Kompartımana yerleştiler. Tren 'Çuf çuf!' diyerek hareket etti. Ağaçlar geriye doğru akmaya başladı.", image: "images/scene_forest_pixar.png" },
            { text: "Tünellere girdiklerinde her yer karanlık oluyor, {{heroName}} heyecanla çığlık atıyordu.", image: "images/scene_cave_entrance_pixar.png" },
            { text: "Yemekli vagona gidip tost yediler. Sallanan trende yürümek çok komikti, sürekli sağa sola yalpalıyorlardı.", image: "images/scene_forest_pixar.png" },
            { text: "Gidecekleri yere vardıklarında {{heroName}}, 'Keşke biraz daha sürseydi,' dedi.", image: "images/scene_garden_pixar.png" },
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
            { text: "{{heroName}} kalın montunu, beresini ve eldivenlerini giydi. Hayalinde Kuzey Kutbu'ndaydı.", image: "images/hero_boy_1.png" },
            { text: "Her yer bembeyaz karla kaplıydı. Nefes alırken ağzından dumanlar çıkıyordu.", image: "images/scene_cave_crystals_pixar.png" },
            { text: "İleride paytak paytak yürüyen siyah beyaz kuşlar gördü. Bunlar penguenlerdi!", image: "images/hero_boy_1.png" },
            { text: "Bir tanesi kaydı ve buzun üzerine düştü. {{heroName}} yardım etmek için koştu.", image: "images/scene_cave_crystals_pixar.png" },
            { text: "Birlikte buzdan bir kale yaptılar. Penguenler ona teşekkür etmek için balık hediye etti (tabii ki şakacıktan!).", image: "images/scene_cave_entrance_pixar.png" },
            { text: "Eve döndüğünde burnu kızarmıştı ama kalbi sıcacıktı.", image: "images/scene_garden_pixar.png" },
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
