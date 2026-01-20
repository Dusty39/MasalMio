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
        id: "pet_01",
        title: "Kayıp Kemik Vakası",
        summary: "Dedektif şapkanı tak! Sevimli dostunla birlikte gizemi çöz.",
        genre: "mystery",
        coverColor: "#FF9800",
        requirements: ["pet"], // Needs pet
        pages: [
            { text: "{{heroName}} ve {{heroPetName}} bahçede oyun oynuyordu.", image: "images/hero_boy_1.png" },
            { text: "Aniden {{heroPetName}} yerleri koklamaya başladı. Bir iz bulmuştu!", image: "images/pet_cat_1.png" },
            { text: "Çalıların arasında parlayan eski bir kutu buldular.", image: "images/scene_mushrooms_pixar.png" },
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
