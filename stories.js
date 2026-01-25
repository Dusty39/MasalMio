const STORY_DB = [
    {
        id: "adventure_01",
        title: "Gizemli Ormanın Sırları",
        title_en: "Secrets of the Mystery Forest",
        summary: "Evinin bahçesinden sihirli bir ormana açılan kapıyı keşfetmeye hazır mısın?",
        summary_en: "Are you ready to discover the door opening from your garden to a magical forest?",
        genre: "adventure",
        coverColor: "#4CAF50",
        requirements: ["sibling", "pet"],
        pages: [
            { text: "Bir zamanlar {{heroPetName}} adında çok sevimli bir dostumuz vardı. Tüyleri pırıl pırıl, gözleri ise merakla parlıyordu. En sevdiği şey, güneşli günlerde bahçedeki renkli kelebeklerin peşinden koşmaktı.", image: "images/scene_garden_pixar.png" },
            { text: "Onun en yakın arkadaşları {{heroName}} ve {{siblingName}} idi. {{siblingName}}, akıllı ve her zaman hazırlıklı biriydi. Kardeşini ve sevimli dostlarını korumayı her şeyden çok severdi.", image: "images/sibling_girl_1.png" },
            { text: "{{heroName}}'in hayalleri boyundan büyüktü. Enerjisi hiç bitmez, aklı hep oyunlarda ve yeni keşiflerdeydi. Özellikle bloklarla yeni dünyalar inşa etmeye bayılırdı.", image: "images/hero_boy_1.png" },
            { text: "Güneşli bir öğleden sonraydı. {{heroPetName}} bahçenin uzak köşesinde yine bir kelebeğin peşine düşmüştü. Çalıların arasında daha önce hiç görmediği, parıl parıl parlayan eski bir kapı fark etti!", image: "images/scene_garden_door_glow.png" },
            { text: "Kapı, etrafına mor ışıklar ve sihirli tozlar saçıyordu. {{heroPetName}} merakına yenik düştü. Patiyle kapıya hafifçe dokundu ve hop! Bir anda kapının içinden geçip gözden kayboldu.", image: "images/scene_portal_pixar.png" },
            { text: "Bahçede sessizlik olunca {{siblingName}} ve {{heroName}} endişelendi. '{{heroPetName}}! Neredesin küçük dostum?' diye seslendiler. Ama yanıt gelmedi. İkisi de telaşla bahçeyi aramaya başladı.", image: "images/scene_garden_pixar.png" },
            { text: "Aramaları onları bahçenin en köşesine götürdü. {{heroName}}'in gözleri büyüdü: '{{siblingName}} bak! Bu kapı da nereden çıktı?' Kapıdan sızan mor ışık, ikisinin de yüzünü aydınlatıyordu.", image: "images/scene_portal_pixar.png" },
            { text: "{{siblingName}}, kardeşinin elini sıkıca tuttu. 'Sanırım {{heroPetName}} içeride. Onu yalnız bırakamayız, değil mi?' dedi. {{heroName}} başını salladı. Korkuyordu ama dostunu kurtarmak için cesur olmalıydı.", image: "images/scene_portal_pixar.png" },
            { text: "İkisi el ele tutuşup kapıdan geçtiler. Gözlerini açtıklarında, kendilerini bambaşka bir dünyada buldular! Burası mavi sislerle kaplı, ağaçların gökyüzüne uzandığı Büyülü Bir Orman'dı.", image: "images/scene_forest_pixar.png" },
            { text: "Etrafta ateş böcekleri uçuşuyor, yapraklar kendi kendine melodiler fısıldıyordu. Uzaktan cılız bir ses duydular. 'Bu {{heroPetName}}'in sesi!' diye bağırdı {{heroName}}. Ses ormanın derinliklerinden geliyordu.", image: "images/scene_forest_pixar.png" },
            { text: "Hızla ormanın içine daldılar. Hava kararmaya başlamıştı ama {{siblingName}}, cebinden hazırlıklı olduğu fenerini çıkardı. 'Korkma,' dedi, 'Işık olduğu sürece yolumuzu kaybetmeyiz.'", image: "images/action_running_forest_lantern.png" },
            { text: "Yürürken yerlerde dev mantarlar gördü. Ama bunlar sıradan mantar değildi! Neon mavisi ve yeşili renklerde parlıyordu. {{heroName}} hayranlıkla, 'Sanki oyunlardaki sihirli dünyalar gibi!' dedi.", image: "images/scene_mushrooms_pixar.png" },
            { text: "Işıkları takip ederek ilerlediler ve sonunda devasa bir mağara girişine ulaştılar. Sesler buradan geliyordu. Mağaranın ağzı karanlıktı ve sarmaşıklarla kaplıydı.", image: "images/scene_cave_entrance_pixar.png" },
            { text: "{{heroName}} derin bir nefes aldı. 'Buraya girmemiz gerekiyor, değil mi?' diye sordu. {{siblingName}} gülümsedi: 'Gerçek kahramanlar zor anlarda belli olur. Hadi, birlikte başarabiliriz!'", image: "images/scene_cave_entrance_pixar.png" },
            { text: "Mağaraya adım attıkları anda şaşkınlıktan donakaldılar. İçerisi karanlık değil, tam tersine pırıl pırıldı! Duvarlar binlerce renkli kristalle kaplıydı ve her yer ışıl ışıl yanıyordu.", image: "images/scene_cave_crystals_pixar.png" },
            { text: "Ve işte orada! {{heroPetName}}, büyük, parlayan bir kristalin üzerine çıkmış, şaşkın şaşkın etrafı izliyordu. Onları görünce sevinçle zıpladı ve kucaklarına atladı.", image: "images/scene_cave_crystals_pixar.png" },
            { text: "{{heroName}}, tüylü dostuna sıkıca sarıldı. 'Seni çok merak ettik yaramaz!' dedi. {{heroPetName}} ise mutlu mırıltılarla karşılık verdi. Artık hepsi bir aradaydı ve güvendeydiler.", image: "images/action_hugging_pet_crystal.png" },
            { text: "Mağaradan çıkarken bu kez korku değil, hayranlık hissediyorlardı. 'Keşke bu kristalleri {{friendName}} de görebilseydi,' dedi {{heroName}}. 'Buna asla inanmayacak!'", image: "images/scene_cave_crystals_pixar.png" },
            { text: "Ormana geri döndüklerinde, bir kayanın üzerinde oturan turuncu bir Tilki gördüler. Tilki onlara bilge gözlerle bakıyordu. 'Evinize dönen yolu mu arıyorsunuz küçük gezginler?' diye sordu.", image: "images/scene_fox_encounter_pixar.png" },
            { text: "{{siblingName}} şaşırdı ama bozuntuya vermedi. 'Evet,' dedi. 'Dostumuzu bulduk, şimdi dönmek istiyoruz.' Tilki gülümsedi. 'Cesaretiniz size yolu zaten gösterdi. Işığı takip edin.'", image: "images/scene_fox_encounter_pixar.png" },
            { text: "Tilkinin gösterdiği yöne baktıklarında, ağaçların arasından süzülen o tanıdık mor ışığı gördüler. Kapı oradaydı! Eve dönüş yolu onları bekliyordu.", image: "images/scene_forest_pixar.png" },
            { text: "Kapıdan geçmeden önce son kez arkalarına, bu büyülü dünyaya baktılar. {{heroName}}, 'Burası harikaydı,' dedi fısıldayarak. 'Biraz korkutucu ama harikaydı.'", image: "images/scene_portal_pixar.png" },
            { text: "Gözlerini kapattılar ve ışığın içinden geçtiler. Gözlerini açtıklarında tekrar kendi bahçelerindeydiler. Güneş hala parlıyor, kuşlar cıvıldıyordu. Sanki zaman hiç geçmemişti.", image: "images/scene_garden_pixar.png" },
            { text: "Tam o sırada {{parentsActor}} bahçeye çıktı. 'Çocuklar, neredesiniz? Kek yaptım!' diye seslendi. İkisi birbirine bakıp kıkırdadılar. Bu macera onların küçük sırrı olacaktı.", image: "images/scene_garden_pixar.png" },
            { text: "O akşam {{heroName}} yatağına yattığında, odasındaki gece lambasının ışığında kristal mağarayı hayal etti. Artık karanlıktan eskisi kadar korkmuyordu.", image: "images/hero_boy_1.png" },
            { text: "{{heroPetName}} ise {{heroName}}'in ayakucuna kıvrılmış mışıl mışıl uyuyordu. Rüyasında belki de hala o renkli kelebekleri kovalıyordu.", image: "images/pet_cat_1.png" },
            { text: "{{siblingName}} kapıdan başını uzattı. 'İyi geceler süper kahraman,' dedi fısıldayarak. {{heroName}} gülümsedi. 'İyi geceler {{siblingName}}. Yarın yine macera var mı?'", image: "images/sibling_girl_1.png" },
            { text: "O gün öğrendikleri en önemli şey şuydu: Bilinmeyen yerler bazen korkutucu görünebilirdi. Ama yanında sevdiklerin ve kalbinde cesaret varsa, her yol aydınlığa çıkardı.", image: "images/masalmio_logo.png" },
            { text: "Ve böylece {{heroName}}, {{siblingName}} ve {{heroPetName}}'in macerası mutlu sonla bitti. Ama kim bilir? Belki de o mor kapı bir gün tekrar açılmayı bekliyordur...", image: "images/scene_portal_pixar.png" },
            { text: "SON", image: "images/scene_the_end_card.png" }
        ],
        pages_en: [
            { text: "Once upon a time, there was a cute friend named {{heroPetName}}. Its fur was shiny and eyes sparked with curiosity. Its favorite thing was chasing butterflies on sunny days.", image: "images/scene_garden_pixar.png" },
            { text: "Its best friends were {{heroName}} and {{siblingName}}. {{siblingName}} was a smart and always prepared big sister. She loved protecting her sibling and cute friends more than anything.", image: "images/sibling_girl_1.png" },
            { text: "{{heroName}} had dreams bigger than himself. His energy never ran out, his mind always on games and new discoveries. He especially loved building new worlds with blocks.", image: "images/hero_boy_1.png" },
            { text: "It was a sunny afternoon. {{heroPetName}} was chasing a butterfly in the garden again. Behind the bushes, it noticed an old, glowing door it had never seen before!", image: "images/scene_garden_door_glow.png" },
            { text: "The door was scattering purple lights and magic dust. {{heroPetName}} succumbed to curiosity. It touched the door with a paw and hop! Suddenly it passed through and vanished.", image: "images/scene_portal_pixar.png" },
            { text: "When silence fell in the garden, {{siblingName}} and {{heroName}} got worried. '{{heroPetName}}! Where are you little friend?' they called. But no answer. They started searching frantically.", image: "images/scene_garden_pixar.png" },
            { text: "The search led them to the far corner. {{heroName}}'s eyes widened: 'Look! Where did this door come from?' The purple light leaking from it illuminated their faces.", image: "images/scene_portal_pixar.png" },
            { text: "{{siblingName}} held her sibling's hand tight. 'I think {{heroPetName}} is inside. We can't leave him alone, right?' {{heroName}} nodded. He was scared but had to be brave.", image: "images/scene_portal_pixar.png" },
            { text: "Hand in hand, they stepped through the door. When they opened their eyes, they were in a completely different world! This was a Magical Forest covered in blue mist with trees reaching the sky.", image: "images/scene_forest_pixar.png" },
            { text: "Fireflies were flying around, leaves whispering melodies. They heard a faint sound. 'That's {{heroPetName}}'s voice!' shouted {{heroName}}. It was coming from deep within.", image: "images/scene_forest_pixar.png" },
            { text: "They rushed into the forest. It was getting dark but {{siblingName}} took out her flashlight. 'Don't worry,' she said, 'As long as we have light, we won't get lost.'", image: "images/action_running_forest_lantern.png" },
            { text: "Walking, they saw giant mushrooms. But not ordinary ones! They glowed in neon blue and green. {{heroName}} said in awe, 'Like magic worlds in games!'", image: "images/scene_mushrooms_pixar.png" },
            { text: "Following the lights, they reached a massive cave entrance. The sounds came from here. The mouth was dark and covered in vines.", image: "images/scene_cave_entrance_pixar.png" },
            { text: "{{heroName}} took a deep breath. 'We have to go in, right?' {{siblingName}} smiled: 'True heroes show themselves in hard times. Come on, we can do it!'", image: "images/scene_cave_entrance_pixar.png" },
            { text: "Stepping inside, they froze in amazement. It wasn't dark, but sparkling bright! Walls were covered in thousands of colorful crystals.", image: "images/scene_cave_crystals_pixar.png" },
            { text: "And there he was! {{heroPetName}}, sitting on a big glowing crystal, looking around confused. Seeing them, he jumped with joy into their arms.", image: "images/scene_cave_crystals_pixar.png" },
            { text: "{{heroName}} hugged his furry friend tight. 'We were so worried, you rascal!' {{heroPetName}} purred happily. They were all together and safe.", image: "images/action_hugging_pet_crystal.png" },
            { text: "Leaving the cave, they felt awe instead of fear. 'I wish {{friendName}} could see these crystals,' said {{heroName}}. 'He'll never believe this!'", image: "images/scene_cave_crystals_pixar.png" },
            { text: "Back in the forest, they saw an orange Fox sitting on a rock. It looked with wise eyes. 'Looking for the way home, little travelers?' it asked.", image: "images/scene_fox_encounter_pixar.png" },
            { text: "{{siblingName}} was surprised. 'Yes,' she said. 'We found our friend, now we want to return.' The Fox smiled. 'Your courage already showed you the way. Follow the light.'", image: "images/scene_fox_encounter_pixar.png" },
            { text: "Looking where the Fox pointed, they saw that familiar purple light filtering through trees. The door was there! The way home waited.", image: "images/scene_forest_pixar.png" },
            { text: "Before leaving, they looked back one last time. {{heroName}} whispered, 'This was amazing. A bit scary, but amazing.'", image: "images/scene_portal_pixar.png" },
            { text: "They closed their eyes and passed through the light. Opening them, they were back in their garden. Sun still shining, birds singing. As if no time had passed.", image: "images/scene_garden_pixar.png" },
            { text: "Just then {{parentsActor}} came out. 'Kids, where are you? Cake is ready!' she called. They looked at each other and giggled. This was their little secret.", image: "images/scene_garden_pixar.png" },
            { text: "In bed that night, {{heroName}} imagined the crystal cave in his nightlight. He wasn't afraid of the dark as much anymore.", image: "images/hero_boy_1.png" },
            { text: "{{heroPetName}} was sleeping soundly at his feet. Maybe still chasing colorful butterflies in his dreams.", image: "images/pet_cat_1.png" },
            { text: "{{siblingName}} peeked in. 'Goodnight superhero,' she whispered. {{heroName}} smiled. 'Goodnight sis. Adventure again tomorrow?'", image: "images/sibling_girl_1.png" },
            { text: "The most important thing they learned: Unknown places can look scary. But with loved ones and courage in your heart, every path leads to light.", image: "images/masalmio_logo.png" },
            { text: "And so ended the adventure of {{heroName}}, {{siblingName}} and {{heroPetName}}. But who knows? Maybe that purple door waits to open again...", image: "images/scene_portal_pixar.png" },
            { text: "THE END", image: "images/scene_the_end_card.png" }
        ]
    },
    {
        id: "space_01",
        title: "Minik Astronotun Uzay Yolculuğu",
        title_en: "Tiny Astronaut's Space Journey",
        summary: "3-2-1 Fırlatma! Yıldızların arasında dans etmeye hazır mısın?",
        summary_en: "3-2-1 Blast off! Are you ready to dance among the stars?",
        genre: "adventure",
        coverColor: "#673AB7",
        requirements: [],
        pages: [
            { text: "{{heroName}}, o gece odasının penceresinden gökyüzüne bakarken yıldızların parlaklığına hayran kaldı. 'Acaba orada kimler yaşıyor?' diye düşündü.", image: "images/hero_boy_1.png" },
            { text: "Ertesi sabah hemen bahçeye koştu. En sevdiği büyük karton kutuyu buldu. 'İşte benim roketim!' dedi heyecanla.", image: "images/scene_space_launch.png" },
            { text: "Kutuyu gümüş rengi boyalarla boyadı. Üzerine renkli kapaklardan düğmeler, kartondan pencereler yaptı.", image: "images/action_painting_box_space.png" },
            { text: "Roketin içine yumuşak minderler koydu. Uzun yolculuk için yanına bir paket bisküvi ve meyve suyu aldı.", image: "images/scene_space_preparations_fix.png" },
            { text: "Kaskını (yani bisiklet kaskını) başına taktı. Eldivenlerini giydi. Artık uçuşa tamamen hazırdı.", image: "images/hero_boy_1.png" },
            { text: "Kokpite oturdu ve derin bir nefes aldı. Kontrol paneline (boyadığı kutuya) dokundu. 'Kule, fırlatma için izin istiyorum' dedi.", image: "images/scene_cardboard_cockpit.png" },
            { text: "Hayalindeki kule cevap verdi: 'İzin verildi kaptan! Geri sayım başlıyor.' {{heroName}}'in kalbi güm güm atıyordu.", image: "images/scene_space_countdown_fix.png" },
            { text: "'10.. 9.. 8.. 7.. 6..' Her sayıda heyecanı artıyordu. Motorların ısındığını hissedebiliyordu.", image: "images/scene_space_engines_warmup_v2.png" },
            { text: "'5.. 4.. 3.. 2.. 1.. FIRLATMA!' {{heroName}} 'Vuuu!' diye bağırarak koltuğuna yapıştı.", image: "images/hero_boy_1.png" },
            { text: "Roket bahçeden havalandı. Ağaçlar aşağıda küçücük kaldı. Kuşların bile üzerine çıktı.", image: "images/scene_space_launch_garden.png" },
            { text: "Bulutların arasından geçti. Pamuk gibi beyaz bulutlar penceresine değiyordu. Gökyüzü maviden mora dönmeye başladı.", image: "images/scene_space_clouds_fix.png" },
            { text: "Ve bir anda... Sessizlik. Artık uzaydaydı. Her yer kapkaranlık ama milyonlarca yıldızla doluydu.", image: "images/scene_space_stars.png" },
            { text: "Yerçekimi yok olmuştu! {{heroName}} oturduğu yerden havalandığını hissetti. Bisküvisi bile havada yüzüyordu.", image: "images/action_zero_gravity_cookie.png" },
            { text: "Pencereden Dünya'ya baktı. Kocaman, mavi ve beyaz bir bilye gibiydi. 'Ne kadar da güzel' diye fısıldadı.", image: "images/scene_space_earth_view_fix.png" },
            { text: "İleride kırmızı bir gezegen gördü. Bu Mars olmalıydı! Etrafında minik uydular dönüyordu.", image: "images/scene_space_planet.png" },
            { text: "Dikkat! Karşıdan bir asteroid kuşağı geliyordu. Kaptan {{heroName}} direksiyonu sıkıca tuttu. Sağa, sola manevralar yaptı.", image: "images/scene_space_asteroid_belt.png" },
            { text: "Şimdi önlerinde Satürn vardı. Halkaları buz ve taştan yapılmıştı ve gökkuşağı gibi parlıyordu.", image: "images/scene_space_saturn_v2.png" },
            { text: "O sırada yanından yeşil, ışıklı bir daire geçti. Bir uzay gemisi! İçinden minik yeşil bir el ona salladı.", image: "images/scene_space_aliens.png" },
            { text: "{{heroName}} de ona el salladı. Uzaylılar dost canlısıydı. Belki de onlar da macera arayan çocuklardı.", image: "images/scene_space_aliens.png" },
            { text: "Yolculuk uzun sürmüştü. Kaptanımızın karnı acıktı. Havada süzülen meyve suyunu yakalayıp içti.", image: "images/scene_space_cockpit_eating.png" },
            { text: "Artık dönme vaktiydi. Rotayı tekrar o güzel mavi gezegene, Dünya'ya çevirdi. Eve dönüş yolculuğu başladı.", image: "images/scene_space_return_journey.png" },
            { text: " Atmosfere girerken roket biraz sarsıldı ama {{heroName}} korkmadı. O tecrübeli bir pilottu.", image: "images/scene_space_turbulence.png" },
            { text: "Bahçeye yumuşak bir iniş yaptı. Kapağı açtığında taze çimen kokusunu içine çekti.", image: "images/scene_space_landing_garden.png" },
            { text: "{{parentsActor}} 'Yemek hazır!' diye seslendi. {{heroName}} gülümsedi. Uzay harikaydı ama evde olmak da güzeldi.", image: "images/hero_boy_1.png" },
            { text: "O gece yatağında yıldızlara bakarken onlara göz kırptı. 'Yarın görüşürüz arkadaşlar' dedi.", image: "images/scene_space_goodnight_star.png" },
            { text: "SON", image: "images/scene_the_end_card.png" }
        ],
        pages_en: [
            { text: "{{heroName}} admired the brightness of stars from his room window that night. 'Who lives there?' he wondered.", image: "images/hero_boy_1.png" },
            { text: "Next morning he ran to the garden. Found his favorite big cardboard box. 'This is my rocket!' he said excitedly.", image: "images/scene_space_launch.png" },
            { text: "He painted the box silver. Made buttons from colorful caps, windows from cardboard.", image: "images/action_painting_box_space.png" },
            { text: "Put soft cushions inside. Took a pack of biscuits and juice for the long journey.", image: "images/scene_space_preparations_fix.png" },
            { text: "Put on his helmet (bike helmet). Wore gloves. Ready for flight.", image: "images/hero_boy_1.png" },
            { text: "Sat in cockpit, took deep breath. Touched control panel (painted box). 'Tower, requesting permission to launch.'", image: "images/scene_cardboard_cockpit.png" },
            { text: "Imaginary tower replied: 'Permission granted captain! Countdown starting.' {{heroName}}'s heart pounded.", image: "images/scene_space_countdown_fix.png" },
            { text: "'10.. 9.. 8.. 7.. 6..' Excitement grew. Engines warming up.", image: "images/scene_space_engines_warmup_v2.png" },
            { text: "'5.. 4.. 3.. 2.. 1.. BLAST OFF!' {{heroName}} shouted 'Whoosh!' sticking to his seat.", image: "images/hero_boy_1.png" },
            { text: "Rocket lifted from garden. Trees looked tiny. Rose above birds.", image: "images/scene_space_launch_garden.png" },
            { text: "Passed through clouds. White cotton clouds touched window. Sky turned from blue to purple.", image: "images/scene_space_clouds_fix.png" },
            { text: "And suddenly... Silence. Now in space. Pitch black but full of millions of stars.", image: "images/scene_space_stars.png" },
            { text: "Gravity gone! {{heroName}} felt floating. Even biscuit floated.", image: "images/action_zero_gravity_cookie.png" },
            { text: "Looked at Earth. Huge, blue and white marble. 'So beautiful' he whispered.", image: "images/scene_space_earth_view_fix.png" },
            { text: "Saw a red planet ahead. Must be Mars! Tiny moons orbiting it.", image: "images/scene_space_planet.png" },
            { text: "Attention! Asteroid belt ahead. Captain {{heroName}} held wheel tight. Maneuvered left and right.", image: "images/scene_space_asteroid_belt.png" },
            { text: "Now Saturn ahead. Rings made of ice and rock shining like rainbow.", image: "images/scene_space_saturn_v2.png" },
            { text: "A green glowing saucer passed by. A spaceship! Tiny green hand waved.", image: "images/scene_space_aliens.png" },
            { text: "{{heroName}} waved back. Aliens were friendly. Maybe kids looking for adventure too.", image: "images/scene_space_aliens.png" },
            { text: "Long journey. Captain hungry. Caught floating juice and drank.", image: "images/scene_space_cockpit_eating.png" },
            { text: "Time to return. Set course to beautiful blue planet Earth. Home journey began.", image: "images/scene_space_return_journey.png" },
            { text: "Rocket shook entering atmosphere but {{heroName}} wasn't scared. Experienced pilot.", image: "images/scene_space_turbulence.png" },
            { text: "Soft landing in garden. Opened hatch, smelled fresh grass.", image: "images/scene_space_landing_garden.png" },
            { text: "{{parentsActor}} called 'Dinner ready!'. {{heroName}} smiled. Space was great but home is good too.", image: "images/hero_boy_1.png" },
            { text: "Winked at stars from bed that night. 'See you tomorrow friends'.", image: "images/scene_space_goodnight_star.png" },
            { text: "THE END", image: "images/scene_the_end_card.png" }
        ]
    },
    {
        id: "submarine_01",
        title: "Derin Deniz Kaşifi",
        title_en: "Deep Sea Explorer",
        summary: "Okyanusun en derinlerinde, ışıklı balıkların dünyasına dalıyoruz.",
        summary_en: "Diving deep into the ocean, to the world of glowing fish.",
        genre: "adventure",
        coverColor: "#00BCD4",
        requirements: [],
        pages: [
            { text: "{{heroName}} plajda oturmuş denizi izliyordu. Dalgalar kıyıya vururken 'Acaba denizin en dibinde ne var?' diye düşündü.", image: "images/hero_boy_1.png" },
            { text: "Hemen hayalindeki sarı denizaltısını çağırdı. Bu denizaltı çok güçlüydü ve en derinlere inebilirdi.", image: "images/masalmio_logo.png" },
            { text: "Tepesindeki kapağı açıp içeri girdi. Düğmelere bastı, ekranlar açıldı. 'Dalışa geçiyoruz!' diye anons yaptı.", image: "images/scene_submarine_cockpit.png" },
            { text: "Denizaltı yavaşça suya battı. Önce suyun rengi açık maviydi. Güneş ışıkları suda dans ediyordu.", image: "images/masalmio_logo.png" },
            { text: "Pencereden baktığında renkli balık sürüleri gördü. Turuncu, sarı, çizgili balıklar ona 'Hoş geldin' der gibi bakıyorlardı.", image: "images/scene_submarine_cockpit_view.png" },
            { text: "Biraz daha aşağı indiler. Burada kocaman kayalar ve üzerlerinde salınan deniz bitkileri vardı. Bir yengeç kıskacını salladı.", image: "images/scene_underwater_coral.png" },
            { text: "Aniden büyük bir gölge belirdi. Bu sevimli bir deniz kaplumbağasıydı! Çok yavaş ve zarif yüzüyordu.", image: "images/masalmio_logo.png" },
            { text: "Derinlere indikçe suyun rengi koyulaştı. Mavi, laciverte dönüştü. Artık güneş ışığı buraya ulaşamıyordu.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} denizaltının ışıklarını açtı. Işık yandığında inanamadı! Etraf parlayan canlılarla doluydu.", image: "images/scene_underwater_deep.png" },
            { text: "Şeffaf deniz anaları neon ışıkları gibi parlıyordu. Pembe, mor, yeşil... Sanki suyun altında havai fişek gösterisi vardı.", image: "images/scene_underwater_deep.png" },
            { text: "Kumların üzerinde eski, tahta bir sandık duruyordu. Acaba bir korsan hazinesi miydi?", image: "images/scene_underwater_treasure.png" },
            { text: "Denizaltının robot kolunu kullanarak sandığın kapağını hafifçe araladı. İçinden altın paralar değil, parlayan inciler çıktı!", image: "images/scene_underwater_treasure.png" },
            { text: "Himenin yanında dev bir ahtapot uyuyordu. Ahtapot gözünü açtı ve sekiz koluyla birden esnedi. {{heroName}} kıkırdadı.", image: "images/masalmio_logo.png" },
            { text: "Bir mağara girişi gördü. İçeri girmeye karar verdi. Mağaranın duvarları kristallerle kaplıydı.", image: "images/masalmio_logo.png" },
            { text: "Mağaranın sonunda uyuyan dev bir balina vardı. Horlamasıyla mağaradaki sular titriyordu.", image: "images/scene_underwater_whale.png" },
            { text: "{{heroName}} onu uyandırmamak için sessizce geri geri gitti. Böyle devasa canlıları görmek büyüleyiciydi.", image: "images/scene_underwater_whale.png" },
            { text: "Hava tanklarını kontrol etti. 'Oksijenimiz azalıyor, yukarı çıkma vakti' dedi.", image: "images/masalmio_logo.png" },
            { text: "Motorları tam güce verdi. Baloncuklar çıkararak hızla yukarı yükselmeye başladılar.", image: "images/masalmio_logo.png" },
            { text: "Su tekrar aydınlanmaya, mavileşmeye başladı. Güneşi görmek güzeldi.", image: "images/masalmio_logo.png" },
            { text: "Denizaltı 'Pop!' diye suyun yüzeyine çıktı. Martılar çığlık atarak onları karşıladı.", image: "images/masalmio_logo.png" },
            { text: "Kapağı açıp temiz havayı içine çekti. Deniz hala masmavi ve sakin görünüyordu.", image: "images/hero_boy_1.png" },
            { text: "Ama {{heroName}} artık biliyordu ki, o sakin yüzeyin altında rengarenk, gizemli bir dünya vardı.", image: "images/masalmio_logo.png" },
            { text: "Denizaltını kıyıya çekti. Ayakları kuma değdiğinde kendini gerçek bir kaşif gibi hissetti.", image: "images/masalmio_logo.png" },
            { text: "Eve dönerken gördüğü parlayan balıkları ve dev balinayı asla unutmayacağını biliyordu.", image: "images/masalmio_logo.png" },
            { text: "SON", image: "images/scene_the_end_card.png" }
        ],
        pages_en: [
            { text: "{{heroName}} sat on beach watching sea. 'What's at the very bottom?' he wondered.", image: "images/hero_boy_1.png" },
            { text: "Summoned imaginary yellow submarine. Very strong, could go deepest.", image: "images/masalmio_logo.png" },
            { text: "Opened top hatch, went in. Pressed buttons, screens on. 'Diving!'", image: "images/scene_submarine_cockpit.png" },
            { text: "Submarine sank slowly. Water light blue first. Sun danced in water.", image: "images/masalmio_logo.png" },
            { text: "Saw colorful fish schools. Orange, yellow, striped fish looked like saying 'Welcome'.", image: "images/scene_submarine_cockpit_view.png" },
            { text: "Went deeper. Giant rocks, sea plants swaying. A crab waved claw.", image: "images/scene_underwater_coral.png" },
            { text: "Sudden shadow. A cute sea turtle! Swimming slow and graceful.", image: "images/masalmio_logo.png" },
            { text: "Water got darker deep down. Blue to navy. Sun couldn't reach here.", image: "images/masalmio_logo.png" },
            { text: "Turned on lights. Couldn't believe it! Glowing creatures everywhere.", image: "images/scene_underwater_deep.png" },
            { text: "Transparent jellyfish glowing neon. Pink, purple, green... Like underwater fireworks.", image: "images/scene_underwater_deep.png" },
            { text: "Old wooden chest on sand. Pirate treasure?", image: "images/scene_underwater_treasure.png" },
            { text: "Used robot arm to open lid. Not gold, but glowing pearls inside!", image: "images/scene_underwater_treasure.png" },
            { text: "Giant octopus sleeping next to it. Opened one eye, yawned. {{heroName}} giggled.", image: "images/masalmio_logo.png" },
            { text: "Saw a cave entrance. Walls covered in crystals.", image: "images/masalmio_logo.png" },
            { text: "Giant sleeping whale at end of cave. Snoring shook waters.", image: "images/scene_underwater_whale.png" },
            { text: "Backed away quietly. Amazing to see such giant.", image: "images/scene_underwater_whale.png" },
            { text: "Checked air tanks. 'Oxygen low, time to go up'.", image: "images/masalmio_logo.png" },
            { text: "Full power to engines. Rising fast with bubbles.", image: "images/masalmio_logo.png" },
            { text: "Water brightening. Nice to see sun.", image: "images/masalmio_logo.png" },
            { text: "Submarine 'Pop!' surfaced. Seagulls greeted.", image: "images/masalmio_logo.png" },
            { text: "Breathed fresh air. Sea looked calm.", image: "images/hero_boy_1.png" },
            { text: "But knew under surface was mysterious world.", image: "images/masalmio_logo.png" },
            { text: "Pulled submarine to shore. Felt like real explorer.", image: "images/masalmio_logo.png" },
            { text: "Would never forget glowing fish and giant whale.", image: "images/masalmio_logo.png" },
            { text: "THE END", image: "images/scene_the_end_card.png" }
        ]
    },
    {
        id: "camp_01",
        title: "Ormandaki Çadır Kampı",
        title_en: "Forest Tent Camp",
        summary: "Kamp ateşi, yıldızlar ve ormanın sesleri. Doğayla baş başa bir gece.",
        summary_en: "Campfire, stars and forest sounds. A night alone with nature.",
        genre: "adventure",
        coverColor: "#795548",
        requirements: [],
        pages: [
            { text: "Hafta sonu nihayet gelmişti! {{heroName}} için bu hafta sonu çok özeldi, çünkü ilk kez kampa gideceklerdi.", image: "images/hero_boy_1.png" },
            { text: "Arabaya yastıklar, uyku tulumları, fenerler ve bolca yiyecek yüklediler. Bagaj tıka basa dolmuştu!", image: "images/masalmio_logo.png" },
            { text: "Yolculuk başladı. Şehirden uzaklaştıkça binalar azaldı, ağaçlar çoğaldı. Camı açtığında mis gibi çam kokusu geldi.", image: "images/masalmio_logo.png" },
            { text: "Ormanlık alana vardıklarında {{heroName}} {{#if pet}}ve {{heroPetName}}{{/if}} arabadan fırladı. Kuşlar cıvıl cıvıl ötüyordu. Hava serin ve tertemizdi.", image: "images/masalmio_logo.png" },
            { text: "{{parentsActor}} 'Hadi bakalım, önce çadırımızı kuralım' dedi. Çadır kurmak dev bir yapboz yapmak gibiydi.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} {{#if sibling}}ve {{siblingName}}{{/if}} çubukları birleştirdi, kazıkları yere çaktı. Çekiç kullanmak onu çok güçlü hissettirdi.", image: "images/masalmio_logo.png" },
            { text: "Sonunda çadır hazırdı! İçine girip yerleşti. Burası sanki kumaştan yapılmış gizli bir kale gibiydi.", image: "images/scene_camp_tent_sunny.png" },
            { text: "Güneş yavaş yavaş batarken ormanda bir yürüyüşe çıktılar. Kuru yaprakların üzerinde yürümek 'hışır hışır' sesler çıkarıyordu.", image: "images/masalmio_logo.png" },
            { text: "Yerde değişik ayak izleri gördü. 'Bu bir tavşan izi olmalı!' dedi {{heroName}}. Doğada bir dedektif gibi iz sürdü.", image: "images/masalmio_logo.png" },
            { text: "Bir ağaçkakanın 'tak tak tak' diye ağacı gagaladığını gördüler. {{#if pet}}{{heroPetName}} sesi duyunca havladı (veya miyavladı).{{/if}} Doğa ne kadar da canlıydı.", image: "images/masalmio_logo.png" },
            { text: "Hava karardığında kamp alanına döndüler. Şimdi en eğlenceli kısım gelmişti: Kamp ateşi!", image: "images/scene_camp_fire_night.png" },
            { text: "Ateş çıtırdayarak yandı. Turuncu alevler dans ediyordu. {{heroName}} ateşin sıcaklığını yüzünde hissetti.", image: "images/scene_camp_fire_night.png" },
            { text: "Çubuklara taktıkları marşmelovları ateşte kızarttılar. Dışı kıtır, içi yumuşacık olmuştu. Çok lezzetliydi!", image: "images/scene_camp_fire_night.png" },
            { text: "Gökyüzüne baktığında şaşırdı. Şehirde hiç bu kadar çok yıldız görmemişti. Sanki biri gökyüzüne sim dökmüştü.", image: "images/masalmio_logo.png" },
            { text: "{{parentsActor}} ona Büyükaıyı takımyıldızını gösterdi. Gerçekten de bir cezveye benziyordu.", image: "images/masalmio_logo.png" },
            { text: "Aniden karanlığın içinden 'Uu-huuu!' diye bir ses geldi. Bu bir baykuştu! {{heroName}} {{#if sibling}}ve {{siblingName}}{{/if}} biraz ürperdi ama korkmadı.", image: "images/scene_forest_owl_night.png" },
            { text: "Çalılıkların arasından parlayan iki göz onlara baktı. Meraklı bir tilki! Ateşin ışığında tüyleri kızıla çalıyordu.", image: "images/scene_forest_animals.png" },
            { text: "Tilki bir süre onları izledi, sonra sessizce ormana geri döndü. Sanki 'İyi geceler' demişti.", image: "images/scene_forest_animals.png" },
            { text: "Ateş köz haline gelince çadıra girdiler. Uyku tulumu sıcacıktı. Dışarıda rüzgar ağaçları sallıyordu.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} ormanın seslerini dinleyerek uykuya daldı. Hayatının en güzel uykularından biriydi.", image: "images/masalmio_logo.png" },
            { text: "Sabah kuşların neşeli şarkılarıyla uyandı. Çadırın fermuarını açtığında güneş yüzüne vurdu.", image: "images/masalmio_logo.png" },
            { text: "Çimenlerin üzerinde çiy damlaları parlıyordu. Her şey pırıl pırıldı.", image: "images/masalmio_logo.png" },
            { text: "Kahvaltıda sıcak çaylarını içtiler. {{heroName}} ormanın enerjisiyle dolmuştu.", image: "images/masalmio_logo.png" },
            { text: "Eşyaları toplarken biraz üzüldü ama biliyordu ki, orman her zaman onları bekleyecekti.", image: "images/hero_boy_1.png" },
            { text: "SON", image: "images/scene_the_end_card.png" }
        ],
        pages_en: [
            { text: "Weekend finally came! Special for {{heroName}}, first time camping.", image: "images/hero_boy_1.png" },
            { text: "Loaded car with pillows, sleeping bags, flashlights, food. Trunk full!", image: "images/masalmio_logo.png" },
            { text: "Journey started. Buildings fewer, trees more. Smelled pine when opened window.", image: "images/masalmio_logo.png" },
            { text: "Arrived at forest. {{heroName}} {{#if pet}}and {{heroPetName}}{{/if}} jumped out. Birds chirping. Air cool and clean.", image: "images/masalmio_logo.png" },
            { text: "{{parentsActor}} said 'Let's set up tent'. Like giant puzzle.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} {{#if sibling}}and {{siblingName}}{{/if}} joined poles, hammered stakes. Felt strong using hammer.", image: "images/masalmio_logo.png" },
            { text: "Tent ready! Went inside. Like a secret cloth castle.", image: "images/scene_camp_tent_sunny.png" },
            { text: "Walked in forest as sun set. Dry leaves 'crunch crunch'.", image: "images/masalmio_logo.png" },
            { text: "Saw strange footprints. 'Must be rabbit!' said {{heroName}}. Tracked like detective.", image: "images/masalmio_logo.png" },
            { text: "Saw woodpecker 'tap tap tap'. {{#if pet}}{{heroPetName}} barked (or meowed) at noise.{{/if}} Nature so alive.", image: "images/masalmio_logo.png" },
            { text: "Returned to camp at dark. Fun part: Campfire!", image: "images/scene_camp_fire_night.png" },
            { text: "Fire crackled. Orange flames danced. Felt warmth on face.", image: "images/scene_camp_fire_night.png" },
            { text: "Roasted marshmallows. Crispy outside, soft inside. Yummy!", image: "images/scene_camp_fire_night.png" },
            { text: "Looked at sky. Never seen so many stars in city. Like glitter spilled.", image: "images/masalmio_logo.png" },
            { text: "{{parentsActor}} showed Big Dipper. Looked like coffee pot.", image: "images/masalmio_logo.png" },
            { text: "Sudden 'Hoo-hoo!' from dark. An owl! Shivered a bit but not scared.", image: "images/scene_forest_owl_night.png" },
            { text: "Two glowing eyes in bushes. Curious fox! Red fur in firelight.", image: "images/scene_forest_animals.png" },
            { text: "Fox watched then left quietly. As if saying 'Goodnight'.", image: "images/scene_forest_animals.png" },
            { text: "Fire turned to embers, went into tent. Sleeping bag warm. Wind shook trees outside.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} fell asleep listening to forest. Best sleep ever.", image: "images/masalmio_logo.png" },
            { text: "Woke up to bird songs. Sun hit face when opened zipper.", image: "images/masalmio_logo.png" },
            { text: "Dew drops on grass. Everything sparkling.", image: "images/masalmio_logo.png" },
            { text: "Drank hot tea. Filled with forest energy.", image: "images/masalmio_logo.png" },
            { text: "Sad to pack but knew forest would always wait.", image: "images/hero_boy_1.png" },
            { text: "THE END", image: "images/scene_the_end_card.png" }
        ]
    },
    {
        id: "holiday_01",
        title: "Unutulmaz Yaz Tatili",
        title_en: "Unforgettable Summer Holiday",
        summary: "Kumsalda kumdan kaleler ve dondurma keyfi!",
        summary_en: "Sand castles and ice cream joy at the beach!",
        genre: "adventure",
        coverColor: "#FFC107",
        requirements: [],
        pages: [
            { text: "Okulların kapanmasıyla birlikte {{heroName}}'in içi içine sığmıyordu. Sonunda yaz tatili gelmişti!", image: "images/hero_boy_1.png" },
            { text: "{{parentsActor}} 'Hadi bavulunu hazırla' dediğinde en sevdiği şortlarını, kova küreğini ve güneş gözlüğünü hemen seçti.", image: "images/masalmio_logo.png" },
            { text: "Bavulun fermuarı zor kapandı ama başardı! Arabayı hazırlarken o da arka koltuğa yerleşti.", image: "images/masalmio_logo.png" },
            { text: "Yolculuk uzundu ama eğlenceliydi. Radyoda çalan şarkılara eşlik ettiler. Camdan koyunları, dağları saydı.", image: "images/masalmio_logo.png" },
            { text: "Sonunda ufukta mavi bir çizgi göründü. Deniz! {{heroName}} 'Deniiiiz!' diye bağırdı sevinçle.", image: "images/masalmio_logo.png" },
            { text: "Otele vardıklarında odaları mis gibi lavanta kokuyordu. Ama {{heroName}}'in aklı fikri aşağıdaydı.", image: "images/masalmio_logo.png" },
            { text: "Hızla mayosunu giydi, güneş kremini sürdü (bunu pek sevmiyordu ama mecburdu!) ve plaja koştu.", image: "images/masalmio_logo.png" },
            { text: "Sıcak kumlar ayaklarını gıdıkladı. Denize doğru koşup kendini serin sulara bıraktı. Oh, dünya varmış!", image: "images/scene_underwater_shallow.png" },
            { text: "Su çok berraktı. Ayaklarının altından geçen minik gümüş balıkları görebiliyordu.", image: "images/scene_underwater_shallow.png" },
            { text: "Sudan çıkınca kova ve küreğini aldı. 'Dünyanın en büyük kalesini yapacağım' dedi.", image: "images/masalmio_logo.png" },
            { text: "Islak kumları kovaya doldurup ters çevirdi. Kale kuleleri yükselmeye başladı.", image: "images/scene_beach_castle.png" },
            { text: "Etrafına derin bir hendek kazdı. Denüzden su taşıyıp hendeği doldurdu. Artık kalesi düşmanlara karşı güvendeydi.", image: "images/scene_beach_castle.png" },
            { text: "Kalenin duvarlarını bulduğu renkli deniz kabuklarıyla süsledi. Tepesine de bir martı tüyü dikti. Bayrak gibi dalgalandı.", image: "images/masalmio_logo.png" },
            { text: "Yanına bir yengeç yaklaştı. Yengeç kaleye şaşkın şaşkın baktı, sonra yan yan yürüyerek uzaklaştı.", image: "images/masalmio_logo.png" },
            { text: "Acıkınca sahildeki büfeden mısır aldılar. Tuzlu suyun ardından haşlanmış mısır ne kadar da lezzetliydi!", image: "images/masalmio_logo.png" },
            { text: "Öğleden sonra {{parentsActor}} ile suda top oynadılar. {{heroName}} topa öyle bir vurdu ki top taa açıklara gitti.", image: "images/masalmio_logo.png" },
            { text: "Akşamüstü güneş turuncuya dönerken sahil tenhalaştı. {{heroName}} kumların üzerine oturdu.", image: "images/scene_beach_sunset.png" },
            { text: "Ufukta batan güneşi izledi. Gökyüzü pembe, mor ve turuncu renklere bürünmüştü.", image: "images/scene_beach_sunset.png" },
            { text: "Akşam yemeğinden sonra çarşıyı gezdiler. Her yer ışıl ışıldı ve dondurma kokuyordu.", image: "images/masalmio_logo.png" },
            { text: "En sevdiği dondurmacıda durdular. {{heroName}} kocaman bir külah dondurma aldı. Tadı harikaydı!", image: "images/masalmio_logo.png" },
            { text: "Otele dönerken çok yorulmuştu. Gözleri kapanıyordu. Deniz havası onu çarpmıştı.", image: "images/masalmio_logo.png" },
            { text: "Yatağına yattığında hala dalgaların sesini duyabiliyordu. 'Hışşşt... Hışşşt...' diye ninniler söylüyordu deniz.", image: "images/masalmio_logo.png" },
            { text: "Yarın yine yüzecek, yine kale yapacaktı. Tatil daha yeni başlıyordu.", image: "images/hero_boy_1.png" },
            { text: "Rüyasında yunuslarla yarıştığını, denizaltı krallığına gittiğini gördü.", image: "images/masalmio_logo.png" },
            { text: "SON", image: "images/scene_the_end_card.png" }
        ],
        pages_en: [
            { text: "{{heroName}} was so excited for summer holiday to start!", image: "images/hero_boy_1.png" },
            { text: "{{parentsActor}} said 'Pack your bag'. Picked favorite shorts, bucket and sunglasses.", image: "images/masalmio_logo.png" },
            { text: "Zipper barely closed but did it! Jumped to back seat of car.", image: "images/masalmio_logo.png" },
            { text: "Long but fun journey. Sang along radio. Counted sheep outside.", image: "images/masalmio_logo.png" },
            { text: "Finally saw blue line. Sea! {{heroName}} shouted 'Seaaaa!'", image: "images/masalmio_logo.png" },
            { text: "Hotel room smelled like lavender. But mind was downstairs.", image: "images/masalmio_logo.png" },
            { text: "Put on swim suit and sunscreen (didn't like it but had to). Ran to beach.", image: "images/masalmio_logo.png" },
            { text: "Hot sand tickled feet. Jumped into cool water. So refreshing!", image: "images/scene_underwater_shallow.png" },
            { text: "Water clear. Could see tiny silver fish under feet.", image: "images/scene_underwater_shallow.png" },
            { text: "Got bucket and shovel. 'Will build biggest castle ever'.", image: "images/masalmio_logo.png" },
            { text: "Filled bucket with wet sand, flipped. Towers rose.", image: "images/scene_beach_castle.png" },
            { text: "Dug moat. Filled with sea water. Castle safe now.", image: "images/scene_beach_castle.png" },
            { text: "Decorated walls with shells. Put seagull feather on top as flag.", image: "images/masalmio_logo.png" },
            { text: "Crab approached. Looked at castle confused, walked away sideways.", image: "images/masalmio_logo.png" },
            { text: "Ate boiled corn. Tasted great after salty water!", image: "images/masalmio_logo.png" },
            { text: "Played ball in water with {{parentsActor}}. Hit so hard it went far.", image: "images/masalmio_logo.png" },
            { text: "Sunset time. Beach got empty. Sat on sand.", image: "images/scene_beach_sunset.png" },
            { text: "Watched sun go down. Sky pink, purple, orange.", image: "images/scene_beach_sunset.png" },
            { text: "Walked in bazaar after dinner. Lights everywhere, smelled like ice cream.", image: "images/masalmio_logo.png" },
            { text: "Stopped at favorite ice cream shop. Bought huge cone. Yummy!", image: "images/masalmio_logo.png" },
            { text: "Very tired going back to hotel. Sea air made sleepy.", image: "images/masalmio_logo.png" },
            { text: "Heard waves from bed. 'Shhh... Shhh...' Sea singing lullaby.", image: "images/masalmio_logo.png" },
            { text: "Swim again tomorrow, build castle again. Holiday just started.", image: "images/hero_boy_1.png" },
            { text: "Dreamed racing dolphins, going to underwater kingdom.", image: "images/masalmio_logo.png" },
            { text: "THE END", image: "images/scene_the_end_card.png" }
        ]
    },
    {
        id: "plane_01",
        title: "Bulutların Üzerinde Yolculuk",
        title_en: "Journey Above Clouds",
        summary: "Kemerlerinizi bağlayın, uçuşa geçiyoruz!",
        summary_en: "Fasten your seatbelts, we are taking off!",
        genre: "adventure",
        coverColor: "#03A9F4",
        requirements: [],
        pages: [
            { text: "Bugün takvimde işaretli büyük gündü. {{heroName}} heyecandan sabah erkenden uyandı. İlk kez uçağa binecekti!", image: "images/hero_boy_1.png" },
            { text: "Havalimanına gittiklerinde gözlerine inanamadı. Burası kocaman bir yerdi, insanlar arılar gibi oradan oraya koşuşturuyordu.", image: "images/masalmio_logo.png" },
            { text: "Önce güvenlikten geçtiler. Çantasını yürüyen banda koydu, makinenin içinden geçişini izledi. Çok ilginçti!", image: "images/masalmio_logo.png" },
            { text: "Sonra dev gibi camların önüne gittiler. Dışarıda sıra sıra uçaklar vardı. Kimisi kocaman, kimisi daha küçüktü.", image: "images/scene_airport_window.png" },
            { text: "Bavulların araçlarla taşınmasını, uçaklara yakıt konulmasını hayranlıkla seyretti. Her şey çok düzenliydi.", image: "images/scene_airport_window.png" },
            { text: "Anons yapıldı: 'Sayın yolcularımız, uçağımız kalkışa hazırdır.' Kalbi küt küt attı.", image: "images/masalmio_logo.png" },
            { text: "Uçağın kapısından girerken hostes abla ona gülümsedi. 'Hoş geldin küçük gezgin' dedi.", image: "images/masalmio_logo.png" },
            { text: "Koridorda ilerleyip koltuğunu buldu. Yaşasın! Pencere kenarıydı. Hemen oturdu ve dışarı baktı.", image: "images/masalmio_logo.png" },
            { text: "'Klik' sesiyle kemerini bağladı. Pilot konuşmaya başladı: 'Kaptanınız konuşuyor, uçuş süremiz 2 saat.'", image: "images/masalmio_logo.png" },
            { text: "Motorlardan 'VUUUU' diye güçlü bir ses geldi. Uçak pistte ilerlemeye başladı. Hızlandı, hızlandı...", image: "images/masalmio_logo.png" },
            { text: "Ve birden koltuğa yapıştı! Tekerlekler yerden kesildi. Havalanıyorlardı! {{heroName}} şaşkınlıkla güldü.", image: "images/masalmio_logo.png" },
            { text: "Aşağıdaki arabalar oyuncak gibi, evler kibrit kutusu gibi görünüyordu. Yollar incecik ipler gibiydi.", image: "images/masalmio_logo.png" },
            { text: "Şehir uzaklaştı, tarlalar, nehirler harita gibi altına serildi. Dünya yukarıdan çok farklı görünüyordu.", image: "images/masalmio_logo.png" },
            { text: "Sonra gri bir sisin içine girdiler. Bunlar buluttu! Ve hop, bulutların üzerine çıktılar.", image: "images/scene_plane_clouds.png" },
            { text: "Güneş burada pırıl pırıldı. Aşağısı ise bembeyaz bir pamuk tarlası gibiydi. Üzerinde zıplamak istedi.", image: "images/scene_plane_clouds.png" },
            { text: "Hostesler yemek servisine başladı. Uçakta sandviç yemek çok havalıydı. Meyve suyunu yudumladı.", image: "images/masalmio_logo.png" },
            { text: "Tuvalete gitmek istedi. Uçak tuvaleti çok küçüktü ve 'voşş' diye gürültülü çalışıyordu. Biraz korktu ama komikti.", image: "images/masalmio_logo.png" },
            { text: "Pilot 'İnişe geçiyoruz' dediğinde uçak hafifçe sallandı. Bu türbülanstı, sanki araba tümsekte zıplamış gibi.", image: "images/masalmio_logo.png" },
            { text: "Tekrar bulutların altına indiler. Şehir ışıkları görünmeye başladı. Akşam olmuştu.", image: "images/masalmio_logo.png" },
            { text: "Tekerlekler piste 'GÜM' diye değdi. Uçak yavaşladı. Yolcular alkışladı. {{heroName}} de alkışladı.", image: "images/masalmio_logo.png" },
            { text: "Uçaktan inerken pilota el salladı. 'Büyüyünce ben de pilot olacağım' dedi.", image: "images/scene_plane_cockpit.png" },
            { text: "Havalimanından çıkarken başını kaldırıp gökyüzüne baktı. Az önce oradaydı. Bu inanılmazdı.", image: "images/masalmio_logo.png" },
            { text: "Bavulunu sürüklerken kendini çok önemli bir iş adamı gibi hissetti.", image: "images/masalmio_logo.png" },
            { text: "Eve gittiklerinde yolculuğunu herkese anlattı. 'Bulutlar gerçekten pamuk şekere benziyor!' dedi.", image: "images/hero_boy_1.png" },
            { text: "SON", image: "images/scene_the_end_card.png" }
        ],
        pages_en: [
            { text: "Big day marked on calendar. Woke up early. First time flying!", image: "images/hero_boy_1.png" },
            { text: "Airport was huge. People running like bees.", image: "images/masalmio_logo.png" },
            { text: "Passed security. Bag went through machine. Interesting!", image: "images/masalmio_logo.png" },
            { text: "Went to giant windows. Saw huge and small planes outside.", image: "images/scene_airport_window.png" },
            { text: "Watched loading luggage, fueling. Very organized.", image: "images/scene_airport_window.png" },
            { text: "Announcement: 'Plane ready for boarding'. Heart pounded.", image: "images/masalmio_logo.png" },
            { text: "Hostess smiled at door. 'Welcome little traveler'.", image: "images/masalmio_logo.png" },
            { text: "Found seat. Yes! Window seat. Sat and looked out.", image: "images/masalmio_logo.png" },
            { text: "Fastened seatbelt 'Click'. Captain spoke: 'Flight time 2 hours'.", image: "images/masalmio_logo.png" },
            { text: "Engines roared 'VUUUU'. Plane moved on runway. Faster, faster...", image: "images/masalmio_logo.png" },
            { text: "Glued to seat! Wheels off ground. Flying! Laughed with amazement.", image: "images/masalmio_logo.png" },
            { text: "Cars like toys below, houses like matchboxes. Roads like thin strings.", image: "images/masalmio_logo.png" },
            { text: "City faded. Fields, rivers like map below. World looked different.", image: "images/masalmio_logo.png" },
            { text: "Entered grey mist. Clouds! And pop, rose above clouds.", image: "images/scene_plane_clouds.png" },
            { text: "Sunny here. Below white cotton field. Wanted to jump on it.", image: "images/scene_plane_clouds.png" },
            { text: "Meal service started. Eating sandwich on plane cool. Sipped juice.", image: "images/masalmio_logo.png" },
            { text: "Went to toilet. Tiny and loud 'whoosh'. Scared but funny.", image: "images/masalmio_logo.png" },
            { text: "Pilot said 'Landing'. Plane shook slightly. Turbulence.", image: "images/masalmio_logo.png" },
            { text: "Went under clouds. City lights appeared. Evening time.", image: "images/masalmio_logo.png" },
            { text: "Wheels hit runway 'BUMP'. Plane slowed. Passengers applauded.", image: "images/masalmio_logo.png" },
            { text: "Waved at pilot leaving. 'Will be pilot when I grow up'.", image: "images/scene_plane_cockpit.png" },
            { text: "Looked at sky leaving airport. Was just there. Amazing.", image: "images/masalmio_logo.png" },
            { text: "Felt like important businessman dragging luggage.", image: "images/masalmio_logo.png" },
            { text: "Told everyone about trip at home. 'Clouds look like cotton candy!'", image: "images/hero_boy_1.png" },
            { text: "THE END", image: "images/scene_the_end_card.png" }
        ]
    },
    {
        id: "train_01",
        title: "Çuf Çuf Tren Gezisi",
        title_en: "Choo Choo Train Ride",
        summary: "Rayların üzerindeki ritmik ses eşliğinde keyifli bir gezi.",
        summary_en: "A delightful trip with rhythmic sounds on rails.",
        genre: "adventure",
        coverColor: "#FF5722",
        requirements: [],
        pages: [
            { text: "{{heroName}} tren garına girdiğinde burnuna demir ve buhar kokusu geldi. Burası tarih kokuyordu.", image: "images/hero_boy_1.png" },
            { text: "İstasyon çok kalabalıktı. Düdük sesleri, tekerlek gıcırtıları, koşturan insanlar... Büyük bir karmaşa ama çok heyecanlı!", image: "images/masalmio_logo.png" },
            { text: "Rayların üzerinde dinlenen devasa treni gördü. Demir bir yılana benziyordu. Lokomotifi çok güçlü görünüyordu.", image: "images/scene_train_station.png" },
            { text: "Bilet kontrol memuru biletlerini deldi. 'İyi yolculuklar küçük yolcu' dedi ve şapkasını düzeltti.", image: "images/masalmio_logo.png" },
            { text: "Vagonlarına binip yerlerini buldular. Koltuklar rahattı ve kocaman bir penceresi vardı.", image: "images/scene_train_compartment.png" },
            { text: "Dışarıdan bir düdük sesi geldi: 'DÜÜÜT!'. Tren sarsılarak hareket etti. Tekerlekler dönmeye başladı.", image: "images/masalmio_logo.png" },
            { text: "Önce yavaş yavaş hızlandılar. İstasyon geride kaldı. Şehir binaları bir bir geçti.", image: "images/masalmio_logo.png" },
            { text: "Tekerlekler raylarda 'tak-taka-tak, tak-taka-tak' diye ritmik bir ses çıkarıyordu. Bu ses {{heroName}}'in hoşuna gitti.", image: "images/masalmio_logo.png" },
            { text: "Şehir bitti, yeşil tarlalar başladı. İnekler otluyor, traktörler çalışıyordu. Hepsi trene el sallıyordu sanki.", image: "images/scene_train_landscape.png" },
            { text: "Aniden her yer karardı! Bir tünele girmişlerdi. {{heroName}} heyecanla 'Aaa!' dedi. Pencerede sadece kendi yansımasını gördü.", image: "images/masalmio_logo.png" },
            { text: "Bir dakika sonra ışık tekrar geldi. Gözleri kamaştı. Şimdi dağların arasından geçiyorlardı.", image: "images/masalmio_logo.png" },
            { text: "{{parentsActor}} 'Hadi yemekli vagona gidelim' dedi. Tren sallandığı için koridorda yürümek çok zordu.", image: "images/masalmio_logo.png" },
            { text: "Sağa sola çarparak, penguen gibi yürüyerek yemekli vagona ulaştılar. Gülmekten karınları ağrıdı.", image: "images/masalmio_logo.png" },
            { text: "Orada tost yiyip çay içtiler ({{heroName}} meyve suyu içti). Manzara eşliğinde yemek yemek çok keyifliydi.", image: "images/scene_train_dining_car.png" },
            { text: "Tren bir köprünün üzerinden geçti. Aşağıda gümüş gibi parlayan bir nehir akıyordu.", image: "images/masalmio_logo.png" },
            { text: "Yanlarından başka bir tren hızla geçti. 'Vınnn!' diye rüzgarı vagonlarını salladı.", image: "images/masalmio_logo.png" },
            { text: "Yolculuk boyunca kitap okudu, resim çizdi, bulmaca çözdü. Zamanın nasıl geçtiğini anlamadı.", image: "images/masalmio_logo.png" },
            { text: "Akşam olurken kondüktör 'Son durak!' diye bağırdı. Tren yavaşlamaya başladı.", image: "images/masalmio_logo.png" },
            { text: "Frenler 'ciiiyk' diye öttü ve tren durdu. İnmeye hazırlandılar.", image: "images/masalmio_logo.png" },
            { text: "Trenden inerken bacakları biraz uyuşmuştu ama mutluydu. Rayların şarkısını hala duyabiliyordu.", image: "images/masalmio_logo.png" },
            { text: "Trendeki o sallantıyı, o sesleri ve manzaraları çok sevmişti.", image: "images/hero_boy_1.png" },
            { text: "İstasyondan çıkarken arkasına dönüp trene baktı. 'Teşekkürler koca tren' dedi.", image: "images/masalmio_logo.png" },
            { text: "{{mentorName}} onları karşılamaya gelmişti. Koşup ona sarıldı.", image: "images/hero_boy_1.png" },
            { text: "Bu tren yolculuğu, tatilin en güzel başlangıcı olmuştu.", image: "images/masalmio_logo.png" },
            { text: "SON", image: "images/scene_the_end_card.png" }
        ],
        pages_en: [
            { text: "Smelled iron and steam entering station. Smelled like history.", image: "images/hero_boy_1.png" },
            { text: "Station crowded. Whistles, wheels, running people... Chaotic but exciting!", image: "images/masalmio_logo.png" },
            { text: "Saw giant train resting on rails. Like iron snake. Locomotive looked strong.", image: "images/scene_train_station.png" },
            { text: "Conductor punched tickets. 'Have a safe trip little passenger'.", image: "images/masalmio_logo.png" },
            { text: "Found seats. Confortable and huge window.", image: "images/scene_train_compartment.png" },
            { text: "Heard whistle 'Choo choo!'. Train moved shaking. Wheels turned.", image: "images/masalmio_logo.png" },
            { text: "Accelerated slowly. Station behind. City passed by.", image: "images/masalmio_logo.png" },
            { text: "Wheels made rhythmic sound 'clack-clack'. Loved this sound.", image: "images/masalmio_logo.png" },
            { text: "City ended, fields started. Cows gazing. Tractors working.", image: "images/scene_train_landscape.png" },
            { text: "Suddenly dark! Tunnel. Excitedly shouted 'Aaa!'. Saw reflection.", image: "images/masalmio_logo.png" },
            { text: "Light came back. Blinded. Passing mountains now.", image: "images/masalmio_logo.png" },
            { text: "{{parentsActor}} said 'Let's go to dining car'. Walking hard while shaking.", image: "images/masalmio_logo.png" },
            { text: "Walked like penguin bumping sides. Laughed hard.", image: "images/masalmio_logo.png" },
            { text: "Ate toast drank juice. Eating with view fun.", image: "images/scene_train_dining_car.png" },
            { text: "Passed over bridge. Silver river below.", image: "images/masalmio_logo.png" },
            { text: "Another train passed 'Vroom!'. Wind shook car.", image: "images/masalmio_logo.png" },
            { text: "Read book, drew pictures. Time flew.", image: "images/masalmio_logo.png" },
            { text: "Conductor shouted 'Last stop!'. Train slowed.", image: "images/masalmio_logo.png" },
            { text: "Brakes squeaked. Stopped. Ready to leave.", image: "images/masalmio_logo.png" },
            { text: "Legs numb but happy. Could still hear rail song.", image: "images/masalmio_logo.png" },
            { text: "Loved Shakespeare, sounds and views.", image: "images/hero_boy_1.png" },
            { text: "Looked back at train. 'Thanks big train'.", image: "images/masalmio_logo.png" },
            { text: "{{mentorName}} met them. Hugged {{mentorName}}.", image: "images/hero_boy_1.png" },
            { text: "Best start to holiday.", image: "images/masalmio_logo.png" },
            { text: "THE END", image: "images/scene_the_end_card.png" }
        ]
    },
    {
        id: "polar_01",
        title: "Karlı Kutup Bekçisi",
        title_en: "Snowy Polar Guardian",
        summary: "Burası çok soğuk ama penguenler çok sıcakkanlı!",
        summary_en: "It's cold here but penguins are very warm-blooded!",
        genre: "adventure",
        coverColor: "#E0F7FA",
        requirements: [],
        pages: [
            { text: "{{heroName}} televizyonda karları izlerken 'Keşke orada olsam' dedi. Lapa lapa kar yağmasını çok özlemişti.", image: "images/hero_boy_1.png" },
            { text: "Gözlerini kapattı ve rüzgarın sesini dinledi. 'Vuuuu...' Gözlerini açtığında odasında değil, bembeyaz bir yerdeydi!", image: "images/scene_polar_landscape.png" },
            { text: "Üzerinde kalın, tüylü bir mont, eldivenler ve kocaman botlar vardı. Burası Karlar Ülkesi olmalıydı.", image: "images/masalmio_logo.png" },
            { text: "Her adım attığında kar 'hart hurt' diye ses çıkarıyordu. Kar o kadar yumuşaktı ki içine batıyordu.", image: "images/masalmio_logo.png" },
            { text: "Hava buz gibiydi ama {{heroName}} üşümüyordu. Çünkü maceranın heyecanı içini ısıtıyordu.", image: "images/masalmio_logo.png" },
            { text: "İleride siyah beyaz noktalar gördü. Bunlar paytak paytak yürüyen penguenlerdi! Bir sürü penguen!", image: "images/scene_polar_penguins.png" },
            { text: "Onlara yaklaştı. Penguenler hiç korkmadı. Hatta bir tanesi merakla gelip {{heroName}}'in botunu gagasıyla tıkladı.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} diz çöktü. 'Merhaba küçük dostum' dedi. Penguen kanatlarını çırparak cevap verdi.", image: "images/masalmio_logo.png" },
            { text: "Birlikte buzdan bir kaydırak buldular. Penguenler göğüslerinin üzerinde kayıyorlardı. {{heroName}} de denedi.", image: "images/masalmio_logo.png" },
            { text: "Hızla aşağı kaydılar. Rüzgar yüzüne çarpıyordu. 'Yuuuhuuu!' diye bağırdı. Çok eğlenceliydi!", image: "images/masalmio_logo.png" },
            { text: "Aşağıda buzdan bir göl vardı. Fok balıkları buzun üzerine çıkmış güneşleniyordu (gerçi güneş çok ısıtmıyordu ama olsun).", image: "images/scene_polar_ice_lake.png" },
            { text: "Aniden gökyüzünde yeşil ışıklar belirdi. Dans eden şeritler gibiydiler. Bu Kuzey Işıkları'ydı! (Ya da Güney Işıkları, kim bilir?)", image: "images/scene_polar_aurora.png" },
            { text: "Gökyüzü bir tablo gibiydi. Yeşil, mor, pembe ışıklar dalgalanıyordu. {{heroName}} büyülenmiş gibi izledi.", image: "images/masalmio_logo.png" },
            { text: "Kar yağmaya başladı. Kocaman kar taneleri burnunun ucuna kondu. Dilini çıkarıp kar tanesi yakalamaya çalıştı.", image: "images/masalmio_logo.png" },
            { text: "Penguenler bir araya toplanıp birbirlerine sokuldular. Isınmak için böyle yapıyorlardı.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} de onlara katıldı. Ortada sıcacık bir sevgi yumağı oldular.", image: "images/masalmio_logo.png" },
            { text: "Uzakta beyaz bir ayı gördü ama ayı onları fark etmedi. Kendi yoluna, balık avlamaya gitti.", image: "images/scene_polar_bear.png" },
            { text: "Yorulunca karların üzerine sırtüstü yattı. Karda melek yaptı. Kollarnı ve bacaklarını açıp kapadı.", image: "images/masalmio_logo.png" },
            { text: "Artık eve dönme vakti gelmişti. Penguen arkadaşına sarıldı. 'Seni özleyeceğim' dedi.", image: "images/masalmio_logo.png" },
            { text: "Gözlerini tekrar kapattı. Karın sesi yavaşça uzaklaştı. Televizyonun sesi geri geldi.", image: "images/masalmio_logo.png" },
            { text: "Gözlerini açtığında koltuğundaydı. Ama botlarının ucunda hala birazcık kar vardı erimekte olan.", image: "images/hero_boy_1.png" },
            { text: "{{parentsActor}}'na 'Penguenler çok komik yürüyor' dedi gülerek.", image: "images/hero_boy_1.png" },
            { text: "Pencereden dışarı baktı. Dışarıda yağmur yağıyordu ama o kar tanelerini hatırlıyordu.", image: "images/masalmio_logo.png" },
            { text: "Belki bir gün gerçekten oraya giderdi. Kim bilir?", image: "images/hero_boy_1.png" },
            { text: "SON", image: "images/scene_the_end_card.png" }
        ],
        pages_en: [
            { text: "Watched snow on TV. 'Wish I was there' {{heroName}} said. Missed snow.", image: "images/hero_boy_1.png" },
            { text: "Closed eyes listen wind. 'Whoosh'. Opened eyes in white place!", image: "images/scene_polar_landscape.png" },
            { text: "Wearing thick coat, gloves, boots. This was Land of Snow.", image: "images/masalmio_logo.png" },
            { text: "Snow crunched under feet. So soft sank in.", image: "images/masalmio_logo.png" },
            { text: "Air freezing but not cold. Adventure warmed heart.", image: "images/masalmio_logo.png" },
            { text: "Saw black white dots ahead. Penguins! Lots of them!", image: "images/scene_polar_penguins.png" },
            { text: "Approached. Not scared. One tapped boot with beak.", image: "images/masalmio_logo.png" },
            { text: "Kneeled down. 'Hello little friend'. Penguin flapped wings.", image: "images/masalmio_logo.png" },
            { text: "Found ice slide. Penguins sliding on bellies. Tried too.", image: "images/masalmio_logo.png" },
            { text: "Slid down fast. Wind on face. 'Yeeesss!'. So fun!", image: "images/masalmio_logo.png" },
            { text: "Ice lake below. Seals sunbathing (sun not hot though).", image: "images/scene_polar_ice_lake.png" },
            { text: "Green lights in sky. Dancing ribbons. Northern Lights!", image: "images/scene_polar_aurora.png" },
            { text: "Sky like painting. Green, purple, pink. Watched amazed.", image: "images/masalmio_logo.png" },
            { text: "Snow started falling. Big flakes on nose. Tried catching with tongue.", image: "images/masalmio_logo.png" },
            { text: "Penguins huddled together. To keep warm.", image: "images/masalmio_logo.png" },
            { text: "Joined them. Warm ball of love.", image: "images/masalmio_logo.png" },
            { text: "Saw white bear far away. Didn't see them. Went fishing.", image: "images/scene_polar_bear.png" },
            { text: "Tired, lied on back. Made snow angel.", image: "images/masalmio_logo.png" },
            { text: "Time to go home. Hugged penguin friend. 'Will miss you'.", image: "images/masalmio_logo.png" },
            { text: "Closed eyes. Snow sound faded. TV sound back.", image: "images/masalmio_logo.png" },
            { text: "Back on couch. But still little snow on boots melting.", image: "images/hero_boy_1.png" },
            { text: "Told {{parentsActor}} 'Penguins walk so funny'.", image: "images/hero_boy_1.png" },
            { text: "Looked out window. Raining but remembered snow flakes.", image: "images/masalmio_logo.png" },
            { text: "Maybe go there one day. Who knows?", image: "images/hero_boy_1.png" },
            { text: "THE END", image: "images/scene_the_end_card.png" }
        ]
    },
    {
        id: "solo_day_01",
        title: "Cesur Kaşifin Tek Başına Macerası",
        title_en: "Brave Explorer's Solo Adventure",
        summary: "Bazen en büyük maceralar, tek başına çıktığın yürüyüşlerde başlar.",
        summary_en: "Sometimes biggest adventures start with a solo walk.",
        genre: "adventure",
        coverColor: "#2196F3",
        requirements: [],
        pages: [
            { text: "{{heroName}} bugün biraz sıkılmıştı. Arkadaşları meşguldü, evde kimse onunla oynamıyordu.", image: "images/hero_boy_1.png" },
            { text: "'O zaman ben de kendi maceramı yaratırım!' dedi kararlılıkla. Sırt çantasını hazırladı.", image: "images/masalmio_logo.png" },
            { text: "Çantasına bir fener, bir büyüteç, bir de not defteri koydu. O artık bir Kaşif'ti.", image: "images/masalmio_logo.png" },
            { text: "Bahçenin en arka, otların uzun olduğu köşesine doğru yürüdü. Burası 'Vahşi Orman'dı onun için.", image: "images/masalmio_logo.png" },
            { text: "Büyüteciyle yerleri inceledi. Karınca sürüsünü gördü. Sıra halinde, disiplinle yürüyorlardı.", image: "images/masalmio_logo.png" },
            { text: "'Hmm, nereye gidiyor bu askerler?' diye not aldı defterine. Karınca yuvasını buldu.", image: "images/masalmio_logo.png" },
            { text: "İlerlerken çalıların arasında parlayan bir şey gördü. Bir hazine mi? Yaklaştı.", image: "images/masalmio_logo.png" },
            { text: "Bu eski, metal bir oyuncak arabaydı! Yıllar önce kaybettiği arabası. Toprağı eşeleyip çıkardı.", image: "images/masalmio_logo.png" },
            { text: "'Kayıp Hazine bulundu!' diye bağırdı zaferle. Arabayı cebine attı.", image: "images/masalmio_logo.png" },
            { text: "Sonra bir ağaca tırmanmaya çalıştı. İlk dalına tutundu ve kendini yukarı çekti.", image: "images/masalmio_logo.png" },
            { text: "Ağacın üzerinden bahçe bambaşka görünüyordu. Çatıları, komşunun köpeğini görebiliyordu.", image: "images/masalmio_logo.png" },
            { text: "Rüzgar esti, yapraklar hışırdadı. {{heroName}} kendini geminin direğindeki gözetleyici gibi hissetti.", image: "images/masalmio_logo.png" },
            { text: "'Kara göründüüü!' diye seslendi hayali tayfasına. Ama tayfası yoktu, olsun.", image: "images/masalmio_logo.png" },
            { text: "Ağaçtan indi. Karnı acıkmıştı. Çantasından bir elma çıkardı. Doğada yemek yemek daha lezzetliydi.", image: "images/masalmio_logo.png" },
            { text: "Yerde ilginç şekildeki taşları topladı. Bir tanesi kalbe benziyordu, bir tanesi yıldıza.", image: "images/masalmio_logo.png" },
            { text: "Bulutlara baktı. Biri ejderhaya, diğeri dondurmaya benziyordu. Hayal gücü sınır tanımıyordu.", image: "images/masalmio_logo.png" },
            { text: "Akşamüzeri gölgeler uzadı. Çalılar biraz korkutucu görünmeye başladı.", image: "images/masalmio_logo.png" },
            { text: "Fenerini çıkardı ve yaktı. Işık ona cesaret verdi. 'Ben cesur bir kaşifim' dedi.", image: "images/masalmio_logo.png" },
            { text: "Eve dönüş yolunu bulmak zor değildi ama o yolu uzattı. Etrafı son kez inceledi.", image: "images/masalmio_logo.png" },
            { text: "Kapıdan içeri girdiğinde {{parentsActor}} 'Neredeydin?' diye sordu. {{heroName}} gizemli bir şekilde gülümsedi.", image: "images/hero_boy_1.png" },
            { text: "'Çok uzak diyarlardaydım anne. Vahşi Orman'da' dedi.", image: "images/hero_boy_1.png" },
            { text: "Hazine arabasını yıkayıp rafına koydu. Artık o sıradan bir araba değildi.", image: "images/masalmio_logo.png" },
            { text: "O, keşif gezisinin ganimetiydi.", image: "images/masalmio_logo.png" },
            { text: "Tek başına oynamanın da ne kadar keyifli olabileceğini öğrenmişti.", image: "images/hero_boy_1.png" },
            { text: "SON", image: "images/scene_the_end_card.png" }
        ],
        pages_en: [
            { text: "{{heroName}} was bored. Friends busy, no one to play with.", image: "images/hero_boy_1.png" },
            { text: "'Will create my own adventure!' said determined. Prepared backpack.", image: "images/masalmio_logo.png" },
            { text: "Put flashlight, magnifier, notebook in bag. Now an Explorer.", image: "images/masalmio_logo.png" },
            { text: "Walked to back of garden with tall grass. 'Wild Forest' for him.", image: "images/masalmio_logo.png" },
            { text: "Examined ground with magnifier. Saw ants marching. Disciplined.", image: "images/masalmio_logo.png" },
            { text: "'Where are they going?' noted in book. Found ant nest.", image: "images/masalmio_logo.png" },
            { text: "Saw something shiny in bushes. Treasure? Approached.", image: "images/masalmio_logo.png" },
            { text: "Old metal toy car! Lost ears ago. Digged it out.", image: "images/masalmio_logo.png" },
            { text: "'Lost Treasure found!' shouted. Put in pocket.", image: "images/masalmio_logo.png" },
            { text: "Tried climbing tree. Held first branch pulled up.", image: "images/masalmio_logo.png" },
            { text: "Garden looked different from up. Saw roofs, neighbor dog.", image: "images/masalmio_logo.png" },
            { text: "Wind blew leaves rustled. Felt like lookout on ship.", image: "images/masalmio_logo.png" },
            { text: "'Land hoy!' shouted to imaginary crew. No crew but okay.", image: "images/masalmio_logo.png" },
            { text: "Climbed down. Hungry. Ate apple from bag. Tasted better outside.", image: "images/masalmio_logo.png" },
            { text: "Collected interesting stones. One like heart, one star.", image: "images/masalmio_logo.png" },
            { text: "Watched clouds. One like dragon, one ice cream. Imagination limitless.", image: "images/masalmio_logo.png" },
            { text: "Evening shadows got long. Bushes looked scary.", image: "images/masalmio_logo.png" },
            { text: "Lit flashlight. Light gave courage. 'I am brave explorer'.", image: "images/masalmio_logo.png" },
            { text: "Found way home easily but took long way. Checked around.", image: "images/masalmio_logo.png" },
            { text: "{{parentsActor}} asked 'Where were you?'. Smiled mysteriously.", image: "images/hero_boy_1.png" },
            { text: "'Far away lands mom. Wild Forest'.", image: "images/hero_boy_1.png" },
            { text: "Washed treasure car put on shelf. Not ordinary car anymore.", image: "images/masalmio_logo.png" },
            { text: "It was trophy of expedition.", image: "images/masalmio_logo.png" },
            { text: "Learned playing alone can be fun too.", image: "images/hero_boy_1.png" },
            { text: "THE END", image: "images/scene_the_end_card.png" }
        ]
    },
    {
        id: "pet_day_01",
        title: "Yaramaz Dostumun Sırrı",
        title_en: "Naughty Friend's Secret",
        summary: "Evcil hayvanın bugün çok garip davranıyor, acaba ne saklıyor?",
        summary_en: "Your pet is acting weird today, what is it hiding?",
        genre: "comedy",
        coverColor: "#FF9800",
        requirements: ["pet"],
        pages: [
            { text: "{{heroName}} sabah uyandığında bir gariplik fark etti. {{heroPetName}} odasında yoktu.", image: "images/hero_boy_1.png" },
            { text: "Normalde sabahları gelip burnunu yalar, onu uyandırırdı. '{{heroPetName}}? Neredesin?' diye seslendi.", image: "images/masalmio_logo.png" },
            { text: "Mutfağa gitti, bahçeye baktı. Yoktu. Tam endişelenmeye başlayacaktı ki bir ses duydu.", image: "images/masalmio_logo.png" },
            { text: "Kiler kapısının altından bir tıkırtı geliyordu. Kapıyı yavaşça açtı.", image: "images/masalmio_logo.png" },
            { text: "{{heroPetName}} oradaydı! Ama ağzında bir şey vardı. {{heroName}}'i görünce suçlu suçlu baktı.", image: "images/pet_cat_1.png" },
            { text: "Ve fırt diye bacaklarının arasından kaçtı! Ağzındaki şey parlıyordu. Ne olabilirdi?", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} kovalamaca başladı. 'Dur! Kaçma!' diye peşinden koştu.", image: "images/hero_boy_1.png" },
            { text: "Salonun ortasından geçtiler, halıyı kaydırdılar. {{parentsActor}} 'Hey, dikkatli olun!' diye bağırdı.", image: "images/masalmio_logo.png" },
            { text: "{{heroPetName}} koltuğun arkasına saklandı. Sadece kuyruğu görünüyordu. {{heroName}} sessizce yaklaştı.", image: "images/masalmio_logo.png" },
            { text: "'Sobe!' dedi ama {{heroPetName}} yine kaçtı. Bu bir oyun muydu?", image: "images/pet_cat_1.png" },
            { text: "Bu sefer merdivenleri tırmandı. {{heroName}} de peşinden. {{heroPetName}} yatak odasına girdi.", image: "images/masalmio_logo.png" },
            { text: "Yatağın altına girdi. {{heroName}} eğilip baktı. İki parlak göz ona bakıyordu.", image: "images/masalmio_logo.png" },
            { text: "'Hadi çık oradan küçük haylaz, ne saklıyorsun?' dedi tatlı dille.", image: "images/masalmio_logo.png" },
            { text: "{{heroPetName}} yavaşça çıktı. Ağzındaki şeyi yere bıraktı. Bu... bu {{parentsActor}}'nın kayıp saatiydi!", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} şaşırdı. 'Bunu sen mi buldun? Babam günlerdir bunu arıyor!'", image: "images/masalmio_logo.png" },
            { text: "Demek sabahki tıkırtı buydu. {{heroPetName}} aslında bir hırsız değil, bir dedektifti!", image: "images/pet_cat_1.png" },
            { text: "{{heroName}} saatle birlikte {{parentsActor}}'nın yanına koştu. {{heroPetName}} de peşinden gururla yürüdü.", image: "images/masalmio_logo.png" },
            { text: "{{parentsActor}} saati görünce çok sevindi. 'Aferin size! Nereden buldunuz?' dedi.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}}, {{heroPetName}}'i gösterdi. 'O buldu baba. O evin koruyucusu.'", image: "images/hero_boy_1.png" },
            { text: "Babası {{heroPetName}}'in başını okşadı. {{heroPetName}} memnuniyetle mırıldandı (veya kuyruk salladı).", image: "images/pet_cat_1.png" },
            { text: "Ödül olarak ona kocaman bir mama verdiler. {{heroName}} de onu izledi.", image: "images/masalmio_logo.png" },
            { text: "Yemekten sonra {{heroPetName}} gelip {{heroName}}'in kucağına yattı. Yorulmuştu.", image: "images/pet_cat_1.png" },
            { text: "{{heroName}} onun yumuşak tüylerini sevdi. 'Sen dünyanın en iyi dedektifisin' dedi.", image: "images/hero_boy_1.png" },
            { text: "İkisi birlikte koltukta uyuyakaldılar. Macera bitmişti, huzur gelmişti.", image: "images/masalmio_logo.png" },
            { text: "SON", image: "images/scene_the_end_card.png" }
        ],
        pages_en: [
            { text: "{{heroName}} noticed something weird. {{heroPetName}} wasn't in room.", image: "images/hero_boy_1.png" },
            { text: "Usually woke him up licking nose. Called '{{heroPetName}}? Where are you?'.", image: "images/masalmio_logo.png" },
            { text: "Checked kitchen, garden. Gone. Heard noise.", image: "images/masalmio_logo.png" },
            { text: "Noise from pantry door. Opened slowly.", image: "images/masalmio_logo.png" },
            { text: "{{heroPetName}} was there! Holding something in mouth. Looked guilty.", image: "images/pet_cat_1.png" },
            { text: "Ran between legs! Thing in mouth shiny. What was it?", image: "images/masalmio_logo.png" },
            { text: "Chase started. 'Stop! Don't run!' followed.", image: "images/hero_boy_1.png" },
            { text: "Passed living room. {{parentsActor}} shouted 'Be careful!'.", image: "images/masalmio_logo.png" },
            { text: "{{heroPetName}} hid behind sofa. Tail visible. Approached quietly.", image: "images/masalmio_logo.png" },
            { text: "'Gotcha!' but escaped again. A game?", image: "images/pet_cat_1.png" },
            { text: "Climbed stairs. Followed. Went into bedroom.", image: "images/masalmio_logo.png" },
            { text: "Went under bed. Bent down looked. Two eyes staring.", image: "images/masalmio_logo.png" },
            { text: "'Come out little rascal, what are you hiding?' asked nicely.", image: "images/masalmio_logo.png" },
            { text: "Came out slowly. Dropped thing. It was... {{parentsActor}}'s lost watch!", image: "images/masalmio_logo.png" },
            { text: "Surprised. 'You found it? Dad looking for days!'", image: "images/masalmio_logo.png" },
            { text: "So that was noise. Not thief but detective!", image: "images/pet_cat_1.png" },
            { text: "Ran to {{parentsActor}} with watch. {{heroPetName}} followed proudly.", image: "images/masalmio_logo.png" },
            { text: "{{parentsActor}} very happy. 'Well done! Where did you find?'", image: "images/masalmio_logo.png" },
            { text: "Pointed at {{heroPetName}}. 'He found it dad. Protector of house.'", image: "images/hero_boy_1.png" },
            { text: "Dad petted head. Purred happily.", image: "images/pet_cat_1.png" },
            { text: "Gave huge treat. Watched him eat.", image: "images/masalmio_logo.png" },
            { text: "After food slept on lap. Tired.", image: "images/pet_cat_1.png" },
            { text: "Petted soft fur. 'World's best detective'.", image: "images/hero_boy_1.png" },
            { text: "Slept together on sofa. Adventure over, peace came.", image: "images/masalmio_logo.png" },
            { text: "THE END", image: "images/scene_the_end_card.png" }
        ]
    },
    {
        id: "mentor_01",
        title: "Bilge Kişi ile Zaman Yolculuğu",
        title_en: "Time Travel with Wise Mentor",
        summary: "Gizemli tavan arasından çıkan eski bir saat, sizi tarihin derinliklerine götürecek!",
        summary_en: "An old watch from attic takes you to depths of history!",
        genre: "sci-fi",
        coverColor: "#9C27B0",
        requirements: ["mentor"],
        pages: [
            { text: "{{heroName}}, yaz tatilinde o gizemli çiftliğe, {{mentorName}} yanına gitmişti. {{mentorName}}, herkesin 'Bilge Kişi' dediği, çok okuyan, çok bilen tonton biriydi.", image: "images/mentor_grandpa_1.png" },
            { text: "Bir yağmurlu öğleden sonra, {{mentorName}} onu yanına çağırdı. 'Gel evlat, sana tavan arasındaki hazinemi göstereyim.'", image: "images/mentor_grandpa_1.png" },
            { text: "Tavan arası tozlu ama gizemliydi. Eski haritalar, teleskoplar ve garip makinelerle doluydu.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}}'in gözüne altın kaplamalı, üzerinde garip semboller olan bir köstekli saat takıldı. 'Bu da ne {{mentorName}}?'", image: "images/masalmio_logo.png" },
            { text: "{{mentorName}} gülümsedi. 'Bu benim en büyük icadım. Ama sadece cesur olanlar kullanabilir. O bir Zaman Anahtarı.'", image: "images/mentor_grandpa_1.png" },
            { text: "{{heroName}} saate dokundu. İbreleri geriye doğru hızla dönmeye başladı! 'Tik-tak, tik-tak!'", image: "images/masalmio_logo.png" },
            { text: "Birden etrafındaki toz bulutu dağıldı, oda değişti. Artık tavan arasında değillerdi!", image: "images/masalmio_logo.png" },
            { text: "Yemyeşil, dev eğrelti otlarıyla dolu bir ormandaydılar. Ve yer sarsılıyordu: GÜM! GÜM!", image: "images/masalmio_logo.png" },
            { text: "'Dikkat et!' diye bağırdı {{mentorName}}. Çalıların arasından kocaman bir dinozor kafası uzandı.", image: "images/masalmio_logo.png" },
            { text: "Bu bir Diplodocus'tu! Otçul olduğu için onlara zarar vermezdi ama {{heroName}} yine de ağzı açık kalmıştı.", image: "images/mentor_grandpa_1.png" },
            { text: "Dinozor yavaşça yaprakları yedi. {{heroName}}, onun elini tutarak dinozorun pullu derisine dokundu.", image: "images/masalmio_logo.png" },
            { text: "'Haydi, daha gidilecek çok yer var' dedi {{mentorName}} ve saati tekrar kurdu.", image: "images/mentor_grandpa_1.png" },
            { text: "Işıklar çaktı ve kendilerini taş döşeli bir yolda buldular. Etrafta at arabaları ve togalı insanlar vardı.", image: "images/masalmio_logo.png" },
            { text: "'Burası Antik Roma' dedi {{mentorName}}. 'Bak, şu ilerideki büyük yapı Kolezyum.'", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} insanların kıyafetlerini inceledi. Herkes sandalet giyiyordu. Bir satıcı ona üzüm ikram etti.", image: "images/masalmio_logo.png" },
            { text: "Sokaklarda mermer heykeller, devasa sütunlar vardı. Her şey tarih kitabından fırlamış gibiydi.", image: "images/masalmio_logo.png" },
            { text: "Saatin zili çaldı. {{mentorName}}, 'Zaman azalıyor, son bir durağımız var' dedi.", image: "images/mentor_grandpa_1.png" },
            { text: "Bu sefer kendilerini uçan arabaların olduğu, gökdelenlerin bulutları geçtiği bir şehirde buldular.", image: "images/scene_plane_clouds.png" },
            { text: "'Burası Gelecek!' dedi {{heroName}}. Robotlar sokakları temizliyor, insanlar uçan kaykaylarla geziyordu.", image: "images/masalmio_logo.png" },
            { text: "Bir çocuk yanlarına yaklaştı ve havada asılı duran bir topla onlara pas attı. Yerçekimi burada daha azdı sanki.", image: "images/masalmio_logo.png" },
            { text: "{{mentorName}} ona baktı. 'Geçmişten ders alıp, geleceği sen inşa edeceksin evlat.'", image: "images/mentor_grandpa_1.png" },
            { text: "Saat son kez çaldı. Dönüş vakti gelmişti. {{heroName}} geleceğe el salladı.", image: "images/masalmio_logo.png" },
            { text: "Tavan arasına döndüklerinde yağmur dinmişti. Her şey rüya gibiydi ama {{heroName}}'in elinde hala gelecekten gelen o top vardı (şaka şaka, sadece hayali kalmıştı).", image: "images/masalmio_logo.png" },
            { text: "{{mentorName}} saatini kutusuna koydu. 'Aramızda kalsın, tamam mı?' dedi göz kırparak.", image: "images/mentor_grandpa_1.png" },
            { text: "O gün {{heroName}} tarihin sadece kitaplarda yazılı olmadığını, yaşanabilir bir macera olduğunu öğrendi.", image: "images/hero_boy_1.png" },
            { text: "SON", image: "images/scene_the_end_card.png" }
        ],
        pages_en: [
            { text: "{{heroName}} went to the mysterious farm. {{mentorName}}, known as 'Wise Person', knew everything.", image: "images/mentor_grandpa_1.png" },
            { text: "Rainy afternoon. {{mentorName}} called. 'Come will show you my attic treasure'.", image: "images/mentor_grandpa_1.png" },
            { text: "Attic dusty mysterious. Old maps, telescopes, machines.", image: "images/masalmio_logo.png" },
            { text: "Saw golden pocket watch with symbols. 'What is this {{mentorName}}?'", image: "images/masalmio_logo.png" },
            { text: "Smiled. 'My greatest invention. Time Key. Only brave can use'.", image: "images/mentor_grandpa_1.png" },
            { text: "Touched watch. Hands turned backwards! 'Tick-tock!'", image: "images/masalmio_logo.png" },
            { text: "Dust cleared, room changed. Not attic anymore!", image: "images/masalmio_logo.png" },
            { text: "Green forest with giant ferns. Ground shaking BOOM BOOM!", image: "images/masalmio_logo.png" },
            { text: "'Careful!' shouted {{mentorName}}. Dinosaur head through bushes.", image: "images/masalmio_logo.png" },
            { text: "Diplodocus! Herbivore so harmless but still jaw dropping.", image: "images/mentor_grandpa_1.png" },
            { text: "Dino ate leaves. Touched scaled skin holding {{mentorName}}'s hand.", image: "images/masalmio_logo.png" },
            { text: "'Come on more places to go'. Reset watch.", image: "images/mentor_grandpa_1.png" },
            { text: "Lights flashed. Paved road. Horse carriages, people in togas.", image: "images/masalmio_logo.png" },
            { text: "'Ancient Rome'. 'Look that is Colosseum'.", image: "images/masalmio_logo.png" },
            { text: "Examined clothes. Sandals. Seller offered grapes.", image: "images/masalmio_logo.png" },
            { text: "Marble statues, giant columns. Like history book.", image: "images/masalmio_logo.png" },
            { text: "Watch rang. 'Time running out, one last stop'.", image: "images/mentor_grandpa_1.png" },
            { text: "City with flying cars, skyscrapers above clouds.", image: "images/scene_plane_clouds.png" },
            { text: "'Future!' said {{heroName}}. Robots cleaning, hoverboards.", image: "images/masalmio_logo.png" },
            { text: "Kid passed ball floating in air. Low gravity?", image: "images/masalmio_logo.png" },
            { text: "Looked at the little hero. 'Learn from past, build future'.", image: "images/mentor_grandpa_1.png" },
            { text: "Watch rang last time. Waved at future.", image: "images/masalmio_logo.png" },
            { text: "Back in attic rain stopped. Like dream but still had imaginary ball.", image: "images/masalmio_logo.png" },
            { text: "Put watch in box. 'Secret okay?' winked.", image: "images/mentor_grandpa_1.png" },
            { text: "Learned history not just books, but adventure.", image: "images/hero_boy_1.png" },
            { text: "THE END", image: "images/scene_the_end_card.png" }
        ]
    },
    {
        id: "friend_01",
        title: "Gizli Hazine Adası",
        title_en: "Secret Treasure Island",
        summary: "Eski bir harita, iki maceralı arkadaş ve çözülmesi gereken ipuçları...",
        summary_en: "An old map, two adventurous friends and clues to solve...",
        genre: "adventure",
        coverColor: "#FFC107",
        requirements: ["friend"],
        pages: [
            { text: "{{heroName}} ve en yakın arkadaşı {{friendName}}, sahilde şişe içinde bir kağıt bulduklarında bunun sıradan bir gün olmayacağını anlamışlardı.", image: "images/hero_boy_1.png" },
            { text: "Şişenin mantarını zorla açtılar. İçinden sararmış, kenarları yanık bir harita çıktı!", image: "images/masalmio_logo.png" },
            { text: "{{friendName}}, 'Baksana! Bu bizim sahilin haritası ama üzerinde çarpı işareti var!' dedi heyecanla.", image: "images/friend_boy_1.png" },
            { text: "Hemen 'Macera Ekibi' şapkalarını taktılar (yani, hayali şapkalarını). Hazine avı başlamıştı.", image: "images/masalmio_logo.png" },
            { text: "Haritadaki ilk ipucu 'Fısıldayan Kayalıklar'ı gösteriyordu. Oraya gitmek için kayalıklara tırmanmaları gerekti.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} önden gitti, elini arkadaşına uzattı. 'Tut elimi, birlikte başarabiliriz!'", image: "images/hero_boy_1.png" },
            { text: "Kayalıkların tepesinde rüzgarın sesi konuşuyor gibiydi. Bir taşın altına sıkışmış ikinci notu buldular.", image: "images/masalmio_logo.png" },
            { text: "Notta şöyle yazıyordu: 'Gölgenin en uzun olduğu saatte, Yalnız Palmiye'nin dibini kaz.'", image: "images/masalmio_logo.png" },
            { text: "{{friendName}}, 'Yalnız Palmiye mi? Şu sahildeki tek ağaç olmalı!' diye bağırdı.", image: "images/friend_boy_1.png" },
            { text: "Koşarak sahile indiler. Güneş batmak üzereydi, gölgeler gerçekten de uzamıştı.", image: "images/scene_beach_sunset.png" },
            { text: "Ağacın dibine geldiklerinde elleriyle kumu kazmaya başladılar. {{friendName}} çok hızlı kazıyordu.", image: "images/masalmio_logo.png" },
            { text: "'Tık!' diye bir ses geldi. Sert bir şeye çarpmışlardı. Küçük, tahta bir kutuydu bu!", image: "images/masalmio_logo.png" },
            { text: "Heyecanla, nefes nefese kutuyu çıkardılar. Kilitli değildi. Kapağı yavaşça kaldırdılar...", image: "images/masalmio_logo.png" },
            { text: "İçinden altınlar, mücevherler... çıkmadı. Eski oyuncaklar, misketler ve komik fotoğraflar çıktı.", image: "images/masalmio_logo.png" },
            { text: "Bir de not vardı: 'Gerçek hazine, bu kutuyu bulurken paylaştığınız dostluktur. -Kaptan Sakalsız'", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} ve {{friendName}} birbirlerine bakıp kahkaha attılar. Kaptan Sakalsız kimdi bilmiyorlardı ama haklıydı.", image: "images/friend_boy_1.png" },
            { text: "Kutunun içindeki misketleri paylaştılar. Fotoğraflara bakıp eğlendiler.", image: "images/masalmio_logo.png" },
            { text: "Geri dönerken omuz omuza verdiler. 'Yarın yeni bir macera bulalım mı?' diye sordu {{friendName}}.", image: "images/friend_boy_1.png" },
            { text: "'Tabii ki,' dedi {{heroName}}. 'Biz Macera Ekibiyiz, bizi hiçbir şey durduramaz!'", image: "images/hero_boy_1.png" },
            { text: "Akşam yıldızlar çıkarken, buldukları şeyin altından daha değerli olduğunu biliyorlardı.", image: "images/scene_space_stars.png" },
            { text: "SON", image: "images/scene_the_end_card.png" }
        ],
        pages_en: [
            { text: "{{heroName}} and {{friendName}} found bottle on beach. Not ordinary day.", image: "images/hero_boy_1.png" },
            { text: "Opened it. Old map inside with burnt edges!", image: "images/masalmio_logo.png" },
            { text: "'Look! Map of our beach with X mark!' said {{friendName}}.", image: "images/friend_boy_1.png" },
            { text: "Put on imaginary Adventure Hats. Treasure hunt on.", image: "images/masalmio_logo.png" },
            { text: "First clue 'Whispering Rocks'. Had to climb rocks.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} helped friend. 'Hold hand, we can do it!'", image: "images/hero_boy_1.png" },
            { text: "Wind spoke on top. Found note under stone.", image: "images/masalmio_logo.png" },
            { text: "Note: 'Dig under Lonely Palm when shadow longest'.", image: "images/masalmio_logo.png" },
            { text: "'Lonely Palm? The only tree on beach!' shouted {{friendName}}.", image: "images/friend_boy_1.png" },
            { text: "Ran to beach. Sun setting shadows long.", image: "images/scene_beach_sunset.png" },
            { text: "Dug sand with hands under tree. Fast.", image: "images/masalmio_logo.png" },
            { text: "'Click!' Hit something hard. Small wooden box!", image: "images/masalmio_logo.png" },
            { text: "Pulled out breathless. Opened lid slowly...", image: "images/masalmio_logo.png" },
            { text: "Not gold. Old toys, marbles and funny photos.", image: "images/masalmio_logo.png" },
            { text: "Note: 'Real treasure is friendship you shared finding this. -Captain Beardless'", image: "images/masalmio_logo.png" },
            { text: "Laughed together. Captain right.", image: "images/friend_boy_1.png" },
            { text: "Shared marbles. Looked at photos.", image: "images/masalmio_logo.png" },
            { text: "Walked back shoulder to shoulder. 'New adventure tomorrow?'", image: "images/friend_boy_1.png" },
            { text: "'Of course. We are Adventure Team!'", image: "images/hero_boy_1.png" },
            { text: "Knew friendship more valuable than gold.", image: "images/scene_space_stars.png" },
            { text: "THE END", image: "images/scene_the_end_card.png" }
        ]
    },
    {
        id: "sibling_01",
        title: "Kayıp Oyuncağın Gizemi",
        title_en: "Mystery of Lost Toy",
        summary: "Evde sevilen bir oyuncak kayboldu. İki kardeş dedektif olup ipuçlarını takip ediyor!",
        summary_en: "A favorite toy is lost. Two sibling detectives follow clues!",
        genre: "mystery",
        coverColor: "#607D8B",
        requirements: ["sibling"],
        pages: [
            { text: "O sabah evde büyük bir kriz vardı. {{siblingName}}'in en sevdiği peluş ayı 'Bay Bal' ortada yoktu!", image: "images/sibling_girl_1.png" },
            { text: "{{siblingName}} ağlamak üzereydi. 'Onu yatağıma bırakmıştım, şimdi yok!' diyordu.", image: "images/sibling_girl_1.png" },
            { text: "{{heroName}}, hemen dedektif şapkasını ({{parentsActor}}'nın eski şapkası) taktı. 'Korkma,' dedi. 'Dedektif {{heroName}} iş başında!'", image: "images/hero_boy_1.png" },
            { text: "'Sen de benim ortağım olacaksın,' dedi kardeşine. Ona da bir büyüteç verdi.", image: "images/masalmio_logo.png" },
            { text: "Olay Yeri İnceleme: Yatak odası. Yerde yün parçacıkları buldular. 'İpucu bir!' dedi {{heroName}}.", image: "images/masalmio_logo.png" },
            { text: "İzler kapıya doğru gidiyordu. Büyüteçle halıyı inceleyerek izleri takip ettiler.", image: "images/masalmio_logo.png" },
            { text: "Koridorda, vazonun devrildiğini (neyse ki kırılmamış) gördüler. Suçlu aceleyle kaçmış olmalıydı.", image: "images/masalmio_logo.png" },
            { text: "{{siblingName}} mutfaktan gelen tıkırtıları duydu. 'Şşşt! Oraya saklanmış olabilir,' diye fısıldadı.", image: "images/sibling_girl_1.png" },
            { text: "Sessizce mutfağa süzüldüler. Tezgahın arkasına baktılar... Kimse yoktu. Sadece açık kalmış bir dolap kapağı.", image: "images/masalmio_logo.png" },
            { text: "Dolabın içinde yarısı yenmiş bir kurabiye vardı. 'Hımm, suçlu acıkmış,' dedi Dedektif {{heroName}}.", image: "images/hero_boy_1.png" },
            { text: "Bahçe kapısı hafif aralıktı. Rüzgar perdeyi uçuruyordu. 'Dışarı çıkmış!' dedi {{siblingName}}.", image: "images/sibling_girl_1.png" },
            { text: "Bahçeye çıktıklarında çimlerin üzerinde bir patika gördüler. Ezilmiş çimler...", image: "images/scene_garden_pixar.png" },
            { text: "İzleri takip ettiler. İzler köpek kulübesine gidiyordu! (Eğer köpekleri yoksa komşunun köpeği diyelim).", image: "images/masalmio_logo.png" },
            { text: "Kulübenin içine eğildiler. Ve işte orada! Bay Bal, mışıl mışıl uyuyan bir köpeğin yanındaydı.", image: "images/masalmio_logo.png" },
            { text: "Meğer köpek kendini yalnız hissetmiş ve uyku arkadaşı olarak Bay Bal'ı ödünç almış.", image: "images/masalmio_logo.png" },
            { text: "{{siblingName}} oyuncağını yavaşça aldı. Köpeği uyandırmadı, onun yerine eski bir battaniye örttü üzerine.", image: "images/sibling_girl_1.png" },
            { text: "'Bay Bal kurtarıldı!' diye sevinçle sarıldı kardeşine. {{heroName}} gururla gülümsedi.", image: "images/hero_boy_1.png" },
            { text: "Eve döndüklerinde anneleri onları tebrik etti. 'Harika iş çıkardınız dedektifler!'", image: "images/parent_mom_1.png" },
            { text: "O akşam {{siblingName}}, ona teşekkür etti. 'Sen olmasan bulamazdım,' dedi.", image: "images/sibling_girl_1.png" },
            { text: "{{heroName}} büyütecini kenara koydu. 'Kardeşler bunun içindir,' dedi. Dava kapanmıştı.", image: "images/hero_boy_1.png" },
            { text: "SON", image: "images/scene_the_end_card.png" }
        ],
        pages_en: [
            { text: "Crisis in morning. {{siblingName}}'s favorite 'Mr Honey' bear missing!", image: "images/sibling_girl_1.png" },
            { text: "'Left it on bed now gone!' she cried.", image: "images/sibling_girl_1.png" },
            { text: "{{heroName}} put on detective hat ({{parentsActor}}'s old hat). 'Don't worry Detective {{heroName}} on duty!'", image: "images/hero_boy_1.png" },
            { text: "'You are my partner' gave magnifier.", image: "images/masalmio_logo.png" },
            { text: "Crime Scene: Bedroom. Found wool pieces. 'Clue one!'", image: "images/masalmio_logo.png" },
            { text: "Tracks going to door. Followed on carpet.", image: "images/masalmio_logo.png" },
            { text: "Vase tipped over in corridor. Criminal in rush.", image: "images/masalmio_logo.png" },
            { text: "Heard noise from kitchen. 'Shhh hiding there'.", image: "images/sibling_girl_1.png" },
            { text: "Sneaked into kitchen. Behind counter... No one. Just open cupboard.", image: "images/masalmio_logo.png" },
            { text: "Half eaten cookie inside. 'Hmm criminal hungry'.", image: "images/hero_boy_1.png" },
            { text: "Garden door open. 'Went outside!'", image: "images/sibling_girl_1.png" },
            { text: "Saw tracks on grass.", image: "images/scene_garden_pixar.png" },
            { text: "Followed tracks to dog house.", image: "images/masalmio_logo.png" },
            { text: "Looked inside. Mr Honey there! Next to sleeping dog.", image: "images/masalmio_logo.png" },
            { text: "Dog felt lonely borrowed bear.", image: "images/masalmio_logo.png" },
            { text: "Took toy back gently. Covered dog with blanket.", image: "images/sibling_girl_1.png" },
            { text: "'Mr Honey saved!' hugged brother/sister.", image: "images/hero_boy_1.png" },
            { text: "Mom congratulated. 'Great job detectives!'", image: "images/parent_mom_1.png" },
            { text: "Thanked sibling in evening. 'Couldn't find without you'.", image: "images/sibling_girl_1.png" },
            { text: "'That's what siblings for'. Case closed.", image: "images/hero_boy_1.png" },
            { text: "THE END", image: "images/scene_the_end_card.png" }
        ]
    },
    {
        id: "mom_01",
        title: "Mutfak Sırları",
        title_en: "Kitchen Secrets",
        summary: "Bugün mutfak bir laboratuvar, yemek yapmak ise bir sihir! Afiyet olsun!",
        summary_en: "Today kitchen is a lab, cooking is magic! Bon appetit!",
        genre: "comedy",
        coverColor: "#E91E63",
        requirements: ["mom"],
        pages: [
            { text: "Yağmurlu bir pazar günüydü. {{heroName}} canı sıkkın mutfağa girdi. 'Yapacak hiçbir şey yook,' diye sızlandı.", image: "images/hero_boy_1.png" },
            { text: "{{parentMomName}} beline önlüğünü bağladı. 'Kim demiş? Bugün Mutfak Sihirbazlığı günü!' dedi.", image: "images/parent_mom_1.png" },
            { text: "'Sihir mi?' {{heroName}}'in gözleri parladı. Annesi ona da küçük bir önlük ve (sihirli değnek yerine) bir kepçe verdi.", image: "images/masalmio_logo.png" },
            { text: "'Şimdi, iksirimiz için gerekli malzemeleri toplayalım,' dedi Annesi. Un (beyaz toz), Şeker (kristal tozu) ve Yumurta (ejderha yumurtası şakasıyla).", image: "images/masalmio_logo.png" },
            { text: "Büyük bir kazana (karıştırma kabına) malzemeleri döktüler. {{parentMomName}}, 'Karıştır çırağım!' diye emretti.", image: "images/parent_mom_1.png" },
            { text: "{{heroName}} tüm gücüyle karıştırdı. Karışım dönüyor, köpürüyor, renk değiştiriyordu.", image: "images/hero_boy_1.png" },
            { text: "Unlar havaya uçuştuğunda ikisi de una bulandı. Birbirlerine bakıp hayalet görmüş gibi güldüler.", image: "images/masalmio_logo.png" },
            { text: "'Şimdi gizli malzeme!' dedi Annesi ve bir tutam tarçın serpti. Mutfak mis gibi koktu.", image: "images/masalmio_logo.png" },
            { text: "Hamura şekil verme zamanı gelmişti. {{heroName}} yıldızlar, kalpler, hatta dinozor şeklinde kurabiyeler yaptı.", image: "images/masalmio_logo.png" },
            { text: "Tepsiyi 'Sihirli Fırın'a (normal fırın) koydular. Şimdi bekleme zamanıydı.", image: "images/masalmio_logo.png" },
            { text: "Beklerken sıcak çikolata yaptılar. {{parentMomName}} ona eski zamanlardan, kendi çocukluğundan hikayeler anlattı.", image: "images/parent_mom_1.png" },
            { text: "'Ding!' Fırın öttü. Sihir tamamlanmıştı!", image: "images/masalmio_logo.png" },
            { text: "Fırından çıkan koku tüm evi sarmıştı. Kurabiyeler altın gibi parlıyordu.", image: "images/masalmio_logo.png" },
            { text: "İlk ısırığı aldıklarında yüzlerine bir gülümseme yayıldı. Bu, sevgiyle yapılan sihrin tadıydı.", image: "images/masalmio_logo.png" },
            { text: "Tepsiyi alıp salona geçtiler. Herkese ikram ettiler. Herkes 'Bu dünyanın en güzel kurabiyesi!' dedi.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} Annesine sarıldı. 'Sen gerçekten bir süper kahramansın anne,' dedi.", image: "images/hero_boy_1.png" },
            { text: "{{parentMomName}} de onu öptü. 'Sen de benim süper yardımcımsın.'", image: "images/parent_mom_1.png" },
            { text: "Mutfak biraz dağılmıştı ama kimin umrunda? O gün en güzel anılarını pişirmişlerdi.", image: "images/masalmio_logo.png" },
            { text: "SON", image: "images/scene_the_end_card.png" }
        ],
        pages_en: [
            { text: "Rainy Sunday. Bored in kitchen. 'Nothing to dooo'.", image: "images/hero_boy_1.png" },
            { text: "{{parentMomName}} put on apron. 'Who says? Today Kitchen Magic day!'", image: "images/parent_mom_1.png" },
            { text: "'Magic?' eyes sparked. Got apron and ladle wand.", image: "images/masalmio_logo.png" },
            { text: "'Gather ingredients for potion'. Flour (white dust), Sugar (crystals), Eggs (dragon eggs).", image: "images/masalmio_logo.png" },
            { text: "Poured into cauldron (bowl). 'Mix apprentice!'", image: "images/parent_mom_1.png" },
            { text: "Mixed hard. Changing color bubbling.", image: "images/hero_boy_1.png" },
            { text: "Flour flew everywhere. Covered in white. Laughed like ghosts.", image: "images/masalmio_logo.png" },
            { text: "'Secret ingredient!' cinnamon. Smelled great.", image: "images/masalmio_logo.png" },
            { text: "Shaped dough. Stars, hearts, dinosaurs.", image: "images/masalmio_logo.png" },
            { text: "Put in Magic Oven. Waiting time.", image: "images/masalmio_logo.png" },
            { text: "Drank hot chocolate waiting. Mom told stories.", image: "images/parent_mom_1.png" },
            { text: "'Ding!' Magic done!", image: "images/masalmio_logo.png" },
            { text: "Smelled amazing house wide. Cookies golden.", image: "images/masalmio_logo.png" },
            { text: "Tasted magic made with love.", image: "images/masalmio_logo.png" },
            { text: "Served everyone. 'Best cookie ever!'", image: "images/masalmio_logo.png" },
            { text: "Hugged Mom. 'You are super hero Mom'.", image: "images/hero_boy_1.png" },
            { text: "She kissed him. 'You are super helper'.", image: "images/parent_mom_1.png" },
            { text: "Kitchen messy but who cares. Baked memories.", image: "images/masalmio_logo.png" },
            { text: "THE END", image: "images/scene_the_end_card.png" }
        ]
    },
    {
        id: "dad_01",
        title: "Büyük Tamirat",
        title_en: "Great Repair",
        summary: "Eski bir bisiklet, bir sürü alet ve {{parentsActor}} ile geçen harika bir gün.",
        summary_en: "An old bike, lots of tools and a great day with {{parentsActor}}.",
        genre: "adventure",
        coverColor: "#3F51B5",
        requirements: ["dad"],
        pages: [
            { text: "{{heroName}} garajın köşesinde paslanmış, tekerleği patlak eski bisikletini buldu. Hüzünle ona baktı.", image: "images/hero_boy_1.png" },
            { text: "{{parentDadName}} yanına geldi. 'Neden suratın asık şampiyon?' diye sordu.", image: "images/parent_dad_1.png" },
            { text: "'Bisikletim bozuldu baba, artık süremem,' dedi {{heroName}}.", image: "images/hero_boy_1.png" },
            { text: "Babası bisikleti inceledi. 'Hımm, biraz ilgiye ihtiyacı var sadece. Hadi kolları sıva, Tamir Ekibi iş başına!'", image: "images/parent_dad_1.png" },
            { text: "Babası o meşhur alet çantasını açtı. İçinde anahtarlar, tornavidalar, yağlar... Her şey vardı.", image: "images/masalmio_logo.png" },
            { text: "'Önce şu tekerleği sökelim,' dedi. {{heroName}} İngiliz anahtarını tuttu. Babası çevirmesine yardım etti.", image: "images/masalmio_logo.png" },
            { text: "Elleri yağa bulanmıştı ama {{heroName}} buna aldırmadı. Tamirci olmak çok havalıydı.", image: "images/hero_boy_1.png" },
            { text: "Tekerleği yamadılar, şişirdiler. Lastik şiştikçe {{heroName}}'in umudu da şişti.", image: "images/masalmio_logo.png" },
            { text: "Sıra paslı zincire gelmişti. Babası 'Buna biraz sihirli iksir (makine yağı) sürelim' dedi.", image: "images/parent_dad_1.png" },
            { text: "Zincir parlamaya, pedallar rahatça dönmeye başladı. Çıkardığı o gıcırtı sesi kaybolmuştu.", image: "images/masalmio_logo.png" },
            { text: "Son olarak bisikleti güzelce yıkadılar. Köpükler içinde kalan bisiklet yepyeni görünüyordu.", image: "images/masalmio_logo.png" },
            { text: "{{parentDadName}} alnındaki teri sildi. 'Nasıl oldu sence?' diye sordu.", image: "images/parent_dad_1.png" },
            { text: "{{heroName}} bisiklete bindi. Pedala bastı ve... uçuyor gibiydi! O kadar hızlı ve sessiz gidiyordu ki.", image: "images/hero_boy_1.png" },
            { text: "Bahçede bir tur atıp babasının yanına döndü. 'Teşekkürler baba! Sen her şeyi tamir edebilirsin!'", image: "images/hero_boy_1.png" },
            { text: "Babası güldü. 'Birlikte yaptık evlat. Ellerimiz kirlendi ama değdi, değil mi?'", image: "images/parent_dad_1.png" },
            { text: "O gün sadece bisikleti tamir etmemişler, birlikte harika bir anı inşa etmişlerdi.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} artık biliyordu ki, bozulan şeyler atılmaz, sevgi ve emekle yenilenirdi.", image: "images/hero_boy_1.png" },
            { text: "SON", image: "images/scene_the_end_card.png" }
        ],
        pages_en: [
            { text: "Found old rusty bike flat tire in garage. Sad.", image: "images/hero_boy_1.png" },
            { text: "{{parentDadName}} came. 'Why sad champion?'", image: "images/parent_dad_1.png" },
            { text: "'Bike broken dad can't ride'.", image: "images/hero_boy_1.png" },
            { text: "'Needs some attention. Repair Team assemble!'", image: "images/parent_dad_1.png" },
            { text: "Opened tool box. Wrenches, oil... Everything there.", image: "images/masalmio_logo.png" },
            { text: "'Take off wheel'. Held wrench. Dad helped turn.", image: "images/masalmio_logo.png" },
            { text: "Hands oily but didn't care. Mechanical cool.", image: "images/hero_boy_1.png" },
            { text: "Patched inflated tire. Hope inflated too.", image: "images/masalmio_logo.png" },
            { text: "Rusty chain. 'Magic Potion (oil)'.", image: "images/parent_dad_1.png" },
            { text: "Chain shined pedals turned smooth. Squeak gone.", image: "images/masalmio_logo.png" },
            { text: "Washed it. Looked brand new in foam.", image: "images/masalmio_logo.png" },
            { text: "Dad wiped sweat. 'How is it?'", image: "images/parent_dad_1.png" },
            { text: "Rode it. Like flying! Fast and silent.", image: "images/hero_boy_1.png" },
            { text: "'Thanks Dad! You can fix everything!'", image: "images/hero_boy_1.png" },
            { text: "Laughed. 'We did it together. Dirty hands worth it right?'", image: "images/parent_dad_1.png" },
            { text: "Built wonderful memory not just bike.", image: "images/masalmio_logo.png" },
            { text: "Broken things not thrown, renewed with love.", image: "images/hero_boy_1.png" },
            { text: "THE END", image: "images/scene_the_end_card.png" }
        ]
    }
];

class StoryEngine {
    static generate(templateId, config) {
        const template = STORY_DB.find(s => s.id === templateId);
        if (!template) return null;

        // Clone story to avoid mutating DB
        const story = JSON.parse(JSON.stringify(template));

        // --- Language Support ---
        // Switch to English content if requested and available
        if (config.lang === 'en') {
            if (story.title_en) story.title = story.title_en;
            if (story.summary_en) story.summary = story.summary_en;
            // Important: We must clone pages_en to story.pages to work on them
            if (story.pages_en) {
                story.pages = JSON.parse(JSON.stringify(story.pages_en));
            }
        }

        const reqs = story.requirements || [];

        // --- Dynamic Role Swapping Logic ---
        const hasMom = config.family.mom.included;
        const hasDad = config.family.dad.included;
        let swapMomToDad = false;
        let swapDadToMom = false;

        // If story needs Mom but we only have Dad -> Swap Mom to Dad
        if (reqs.includes('mom') && !hasMom && hasDad) {
            swapMomToDad = true;
        }
        // If story needs Dad but we only have Mom -> Swap Dad to Mom
        if (reqs.includes('dad') && !hasDad && hasMom) {
            swapDadToMom = true;
        }

        // 2. Prepare Replacement Names
        let momName = config.family.mom.name || (config.lang === 'en' ? "Mom" : "Anne");
        let dadName = config.family.dad.name || (config.lang === 'en' ? "Dad" : "Baba");

        // Swap Logic (Legacy support for swapped constraints if needed, but mainly for consistent names)
        if (swapMomToDad) {
            momName = dadName;
        } else if (swapDadToMom) {
            dadName = momName;
        }

        // --- Smart Mentor Name Logic ---
        let mentorName = config.family.mentor.name;
        if (!mentorName) {
            const avatarSrc = config.family.mentor.avatar || "";
            if (config.lang === 'en') {
                if (avatarSrc.includes('grandma')) mentorName = "Grandma";
                else if (avatarSrc.includes('grandpa')) mentorName = "Grandpa";
                else if (avatarSrc.includes('woman')) mentorName = "Aunt";
                else if (avatarSrc.includes('man')) mentorName = "Uncle";
                else mentorName = "Mentor";
            } else {
                // Turkish
                if (avatarSrc.includes('grandma')) mentorName = "Nine";
                else if (avatarSrc.includes('grandpa')) mentorName = "Dede";
                else if (avatarSrc.includes('woman')) mentorName = "Teyze";
                else if (avatarSrc.includes('man')) mentorName = "Amca";
                else mentorName = "Bilge Kişi";
            }
        }

        // Smart Parents Logic
        let parentsActor = "";
        if (config.family.mom.included && config.family.dad.included) {
            parentsActor = config.lang === 'en' ? "Mom and Dad" : "Annesi ve Babası";
        } else if (config.family.mom.included) {
            parentsActor = config.lang === 'en' ? "Mom" : "Annesi";
        } else if (config.family.dad.included) {
            parentsActor = config.lang === 'en' ? "Dad" : "Babası";
        } else {
            parentsActor = config.lang === 'en' ? "The family" : "Ailesi";
        }

        const processText = (text) => {
            if (!text) return "";

            // Role Swaps in Text (Backwards compatibility / Safety)
            if (swapMomToDad) {
                text = text.replace(/Anne/g, "Baba").replace(/anne/g, "baba")
                    .replace(/Mom/g, "Dad").replace(/mom/g, "dad");
            } else if (swapDadToMom) {
                text = text.replace(/Baba/g, "Anne").replace(/baba/g, "anne")
                    .replace(/Dad/g, "Mom").replace(/dad/g, "mom");
            }

            // Sibling Gender Swaps
            // Sibling Gender Swaps - REMOVED (User request: Use name only)
            // if (config.family.sibling.gender === 'boy') { ... }

            // Conditionals {{#if role}}...{{/if}}
            text = text.replace(/{{#if\s+(\w+)}}([\s\S]*?){{\/if}}/g, (match, role, content) => {
                let show = false;
                if (role === 'mom') show = config.family.mom.included;
                else if (role === 'dad') show = config.family.dad.included;
                else if (role === 'sibling') show = config.family.sibling.included;
                else if (role === 'friend') show = config.family.friend.included;
                else if (role === 'pet') show = config.pets.heroPet.included;
                return show ? content : "";
            });

            // Token Replacements
            return text
                .replace(/{{heroName}}/g, config.hero.name || (config.lang === 'en' ? "Hero" : "Kahraman"))
                .replace(/{{siblingName}}/g, config.family.sibling.name || (config.lang === 'en' ? "Sibling" : "Kardeş"))
                .replace(/{{friendName}}/g, config.family.friend.name || (config.lang === 'en' ? "Friend" : "Arkadaş"))
                .replace(/{{parentMomName}}/g, momName)
                .replace(/{{parentDadName}}/g, dadName)
                .replace(/{{parentsActor}}/g, parentsActor)
                .replace(/{{mentorName}}/g, mentorName)
                .replace(/{{heroPetName}}/g, config.pets.heroPet.name || "Boncuk");
        };

        // Apply to Metadata (Cover)
        story.title = processText(story.title);
        story.summary = processText(story.summary);

        // Apply to Pages
        story.pages.forEach(page => {
            page.text = processText(page.text);


            // Swap Base Images if needed
            if (swapMomToDad && page.image === "images/parent_mom_1.png") {
                page.image = "images/parent_dad_1.png";
            } else if (swapDadToMom && page.image === "images/parent_dad_1.png") {
                page.image = "images/parent_mom_1.png";
            }

            // Normal Avatar Replacement
            if (page.image === "images/hero_boy_1.png") {
                page.image = config.hero.avatar;
            } else if (page.image === "images/sibling_girl_1.png") {
                page.image = config.hero.avatar; // Use Hero instead of Sibling
            } else if (page.image === "images/friend_boy_1.png") {
                page.image = config.hero.avatar; // Use Hero instead of Friend
            } else if (page.image === "images/pet_cat_1.png") {
                page.image = config.pets.heroPet.avatar;
            } else if (page.image === "images/parent_mom_1.png") {
                page.image = config.hero.avatar; // Use Hero instead of Mom
            } else if (page.image === "images/parent_dad_1.png") {
                page.image = config.hero.avatar; // Use Hero instead of Dad
            } else if (page.image === "images/mentor_grandpa_1.png") {
                page.image = config.hero.avatar; // Use Hero instead of Mentor
            }

            // SCENE SWAPS (Gender/Pet specific)
            if (page.image === "images/scene_forest_pixar.png" && config.hero.gender === 'boy') {
                page.image = "images/action_forest_walk_boy.png";
            } else if (page.image === "images/scene_forest_pixar.png" && config.hero.gender === 'girl') {
                page.image = "images/action_forest_walk_girl.png";
            }

            /* 
             * Temporarily disabled missing action scenes to prevent broken images
             * TODO: Generate these images
             */
            /*
            if (page.image === "images/scene_cave_entrance_pixar.png") {
                if (config.hero.gender === 'boy') page.image = "images/action_cave_discovery_boy.png";
                else page.image = "images/action_cave_discovery_girl.png";
            }
 
            if (page.image === "images/scene_portal_pixar.png") {
                if (config.hero.gender === 'boy') page.image = "images/action_portal_interaction_boy.png";
                else page.image = "images/action_portal_interaction_girl.png";
            }
 
            if (page.image === "images/pet_cat_1.png" && config.pets.heroPet.type === 'cat') {
                if (page.text.includes("uyuyordu") || page.text.includes("sleeping")) {
                    page.image = "images/action_sleeping_pet_cat.png";
                }
            }
            if (page.image === "images/pet_dog_1.png" && config.pets.heroPet.type === 'dog') {
                if (page.text.includes("uyuyordu") || page.text.includes("sleeping")) {
                    page.image = "images/action_sleeping_pet_dog.png";
                }
            }
            */
        });

        // --- Cover Page Injection ---
        let coverImg = "images/masalmio_logo.png";
        const firstScene = story.pages.find(p => p.image.includes('scene_'));
        if (firstScene) coverImg = firstScene.image;

        const coverPage = {
            text: `<strong style="font-size:1.5em; display:block; margin-bottom:10px;">${story.title}</strong>${story.summary}`,
            image: coverImg
        };

        story.pages.unshift(coverPage);

        return story;
    }
}
