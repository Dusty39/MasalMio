const STORY_DB = [
    {
        id: "adventure_01",
        title: "Gizemli Ormanın Sırları",
        summary: "Evinin bahçesinden sihirli bir ormana açılan kapıyı keşfetmeye hazır mısın?",
        genre: "adventure",
        coverColor: "#4CAF50",
        requirements: ["sibling", "pet"],
        pages: [
            { text: "Bir zamanlar {{heroPetName}} adında çok sevimli bir dostumuz vardı. Tüyleri pırıl pırıl, gözleri ise merakla parlıyordu. En sevdiği şey, güneşli günlerde bahçedeki renkli kelebeklerin peşinden koşmaktı.", image: "images/scene_garden_pixar.png" },
            { text: "Onun en yakın arkadaşları {{heroName}} ve {{siblingName}} idi. {{siblingName}}, akıllı ve her zaman hazırlıklı bir ablaydı. Kardeşini ve sevimli dostlarını korumayı her şeyden çok severdi.", image: "images/sibling_girl_1.png" },
            { text: "{{heroName}}'in hayalleri boyundan büyüktü. Enerjisi hiç bitmez, aklı hep oyunlarda ve yeni keşiflerdeydi. Özellikle bloklarla yeni dünyalar inşa etmeye bayılırdı.", image: "images/hero_boy_1.png" },
            { text: "Güneşli bir öğleden sonraydı. {{heroPetName}} bahçenin uzak köşesinde yine bir kelebeğin peşine düşmüştü. Çalıların arasında daha önce hiç görmediği, parıl parıl parlayan eski bir kapı fark etti!", image: "images/scene_portal_pixar.png" },
            { text: "Kapı, etrafına mor ışıklar ve sihirli tozlar saçıyordu. {{heroPetName}} merakına yenik düştü. Patiyle kapıya hafifçe dokundu ve hop! Bir anda kapının içinden geçip gözden kayboldu.", image: "images/scene_portal_pixar.png" },
            { text: "Bahçede sessizlik olunca {{siblingName}} ve {{heroName}} endişelendi. '{{heroPetName}}! Neredesin küçük dostum?' diye seslendiler. Ama yanıt gelmedi. İkisi de telaşla bahçeyi aramaya başladı.", image: "images/scene_garden_pixar.png" },
            { text: "Aramaları onları bahçenin en köşesine götürdü. {{heroName}}'in gözleri büyüdü: 'Abla bak! Bu kapı da nereden çıktı?' Kapıdan sızan mor ışık, ikisinin de yüzünü aydınlatıyordu.", image: "images/scene_portal_pixar.png" },
            { text: "{{siblingName}}, kardeşinin elini sıkıca tuttu. 'Sanırım {{heroPetName}} içeride. Onu yalnız bırakamayız, değil mi?' dedi. {{heroName}} başını salladı. Korkuyordu ama dostunu kurtarmak için cesur olmalıydı.", image: "images/scene_portal_pixar.png" },
            { text: "İkisi el ele tutuşup kapıdan geçtiler. Gözlerini açtıklarında, kendilerini bambaşka bir dünyada buldular! Burası mavi sislerle kaplı, ağaçların gökyüzüne uzandığı Büyülü Bir Orman'dı.", image: "images/scene_forest_pixar.png" },
            { text: "Etrafta ateş böcekleri uçuşuyor, yapraklar kendi kendine melodiler fısıldıyordu. Uzaktan cılız bir ses duydular. 'Bu {{heroPetName}}'in sesi!' diye bağırdı {{heroName}}. Ses ormanın derinliklerinden geliyordu.", image: "images/scene_forest_pixar.png" },
            { text: "Hızla ormanın içine daldılar. Hava kararmaya başlamıştı ama {{siblingName}}, cebinden hazırlıklı olduğu fenerini çıkardı. 'Korkma,' dedi, 'Işık olduğu sürece yolumuzu kaybetmeyiz.'", image: "images/scene_forest_pixar.png" },
            { text: "Yürürken yerlerde dev mantarlar gördüler. Ama bunlar sıradan mantar değildi! Neon mavisi ve yeşili renklerde parlıyorlardı. {{heroName}} hayranlıkla, 'Sanki oyunlardaki sihirli dünyalar gibi!' dedi.", image: "images/scene_mushrooms_pixar.png" },
            { text: "Işıkları takip ederek ilerlediler ve sonunda devasa bir mağara girişine ulaştılar. Sesler buradan geliyordu. Mağaranın ağzı karanlıktı ve sarmaşıklarla kaplıydı.", image: "images/scene_cave_entrance_pixar.png" },
            { text: "{{heroName}} derin bir nefes aldı. 'Buraya girmemiz gerekiyor, değil mi?' diye sordu. {{siblingName}} gülümsedi: 'Gerçek kahramanlar zor anlarda belli olur. Hadi, birlikte başarabiliriz!'", image: "images/scene_cave_entrance_pixar.png" },
            { text: "Mağaraya adım attıkları anda şaşkınlıktan donakaldılar. İçerisi karanlık değil, tam tersine pırıl pırıldı! Duvarlar binlerce renkli kristalle kaplıydı ve her yer ışıl ışıl yanıyordu.", image: "images/scene_cave_crystals_pixar.png" },
            { text: "Ve işte orada! {{heroPetName}}, büyük, parlayan bir kristalin üzerine çıkmış, şaşkın şaşkın etrafı izliyordu. Onları görünce sevinçle zıpladı ve kucaklarına atladı.", image: "images/scene_cave_crystals_pixar.png" },
            { text: "{{heroName}}, tüylü dostuna sıkıca sarıldı. 'Seni çok merak ettik yaramaz!' dedi. {{heroPetName}} ise mutlu mırıltılarla karşılık verdi. Artık hepsi bir aradaydı ve güvendeydiler.", image: "images/scene_cave_crystals_pixar.png" },
            { text: "Mağaradan çıkarken bu kez korku değil, hayranlık hissediyorlardı. 'Keşke bu kristalleri {{friendName}} de görebilseydi,' dedi {{heroName}}. 'Buna asla inanmayacak!'", image: "images/scene_cave_crystals_pixar.png" },
            { text: "Ormana geri döndüklerinde, bir kayanın üzerinde oturan turuncu bir Tilki gördüler. Tilki onlara bilge gözlerle bakıyordu. 'Evinize dönen yolu mu arıyorsunuz küçük gezginler?' diye sordu.", image: "images/scene_fox_encounter_pixar.png" },
            { text: "{{siblingName}} şaşırdı ama bozuntuya vermedi. 'Evet,' dedi. 'Dostumuzu bulduk, şimdi dönmek istiyoruz.' Tilki gülümsedi. 'Cesaretiniz size yolu zaten gösterdi. Işığı takip edin.'", image: "images/scene_fox_encounter_pixar.png" },
            { text: "Tilkinin gösterdiği yöne baktıklarında, ağaçların arasından süzülen o tanıdık mor ışığı gördüler. Kapı oradaydı! Eve dönüş yolu onları bekliyordu.", image: "images/scene_forest_pixar.png" },
            { text: "Kapıdan geçmeden önce son kez arkalarına, bu büyülü dünyaya baktılar. {{heroName}}, 'Burası harikaydı,' dedi fısıldayarak. 'Biraz korkutucu ama harikaydı.'", image: "images/scene_portal_pixar.png" },
            { text: "Gözlerini kapattılar ve ışığın içinden geçtiler. Gözlerini açtıklarında tekrar kendi bahçelerindeydiler. Güneş hala parlıyor, kuşlar cıvıldıyordu. Sanki zaman hiç geçmemişti.", image: "images/scene_garden_pixar.png" },
            { text: "Tam o sırada {{parentMomName}} bahçeye çıktı. 'Çocuklar, neredesiniz? Kek yaptım!' diye seslendi. İkisi birbirine bakıp kıkırdadılar. Bu macera onların küçük sırrı olacaktı.", image: "images/scene_garden_pixar.png" },
            { text: "O akşam {{heroName}} yatağına yattığında, odasındaki gece lambasının ışığında kristal mağarayı hayal etti. Artık karanlıktan eskisi kadar korkmuyordu.", image: "images/hero_boy_1.png" },
            { text: "{{heroPetName}} ise {{heroName}}'in ayakucuna kıvrılmış mışıl mışıl uyuyordu. Rüyasında belki de hala o renkli kelebekleri kovalıyordu.", image: "images/pet_cat_1.png" },
            { text: "{{siblingName}} kapıdan başını uzattı. 'İyi geceler süper kahraman,' dedi fısıldayarak. {{heroName}} gülümsedi. 'İyi geceler abla. Yarın yine macera var mı?'", image: "images/sibling_girl_1.png" },
            { text: "O gün öğrendikleri en önemli şey şuydu: Bilinmeyen yerler bazen korkutucu görünebilirdi. Ama yanında sevdiklerin ve kalbinde cesaret varsa, her yol aydınlığa çıkardı.", image: "images/masalmio_logo.png" },
            { text: "Ve böylece {{heroName}}, {{siblingName}} ve {{heroPetName}}'in macerası mutlu sonla bitti. Ama kim bilir? Belki de o mor kapı bir gün tekrar açılmayı bekliyordur...", image: "images/scene_portal_pixar.png" },
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
            { text: "{{heroName}}, o gece odasının penceresinden gökyüzüne bakarken yıldızların parlaklığına hayran kaldı. 'Acaba orada kimler yaşıyor?' diye düşündü.", image: "images/hero_boy_1.png" },
            { text: "Ertesi sabah hemen bahçeye koştu. En sevdiği büyük karton kutuyu buldu. 'İşte benim roketim!' dedi heyecanla.", image: "images/scene_space_launch.png" },
            { text: "Kutuyu gümüş rengi boyalarla boyadı. Üzerine renkli kapaklardan düğmeler, kartondan pencereler yaptı.", image: "images/masalmio_logo.png" },
            { text: "Roketin içine yumuşak minderler koydu. Uzun yolculuk için yanına bir paket bisküvi ve meyve suyu aldı.", image: "images/masalmio_logo.png" },
            { text: "Kaskını (yani bisiklet kaskını) başına taktı. Eldivenlerini giydi. Artık uçuşa tamamen hazırdı.", image: "images/hero_boy_1.png" },
            { text: "Kokpite oturdu ve derin bir nefes aldı. Kontrol paneline (boyadığı kutuya) dokundu. 'Kule, fırlatma için izin istiyorum' dedi.", image: "images/masalmio_logo.png" },
            { text: "Hayalindeki kule cevap verdi: 'İzin verildi kaptan! Geri sayım başlıyor.' {{heroName}}'in kalbi güm güm atıyordu.", image: "images/masalmio_logo.png" },
            { text: "'10.. 9.. 8.. 7.. 6..' Her sayıda heyecanı artıyordu. Motorların ısındığını hissedebiliyordu.", image: "images/masalmio_logo.png" },
            { text: "'5.. 4.. 3.. 2.. 1.. FIRLATMA!' {{heroName}} 'Vuuu!' diye bağırarak koltuğuna yapıştı.", image: "images/hero_boy_1.png" },
            { text: "Roket bahçeden havalandı. Ağaçlar aşağıda küçücük kaldı. Kuşların bile üzerine çıktı.", image: "images/masalmio_logo.png" },
            { text: "Bulutların arasından geçti. Pamuk gibi beyaz bulutlar penceresine değiyordu. Gökyüzü maviden mora dönmeye başladı.", image: "images/scene_space_stars.png" },
            { text: "Ve bir anda... Sessizlik. Artık uzaydaydı. Her yer kapkaranlık ama milyonlarca yıldızla doluydu.", image: "images/scene_space_stars.png" },
            { text: "Yerçekimi yok olmuştu! {{heroName}} oturduğu yerden havalandığını hissetti. Bisküvisi bile havada yüzüyordu.", image: "images/masalmio_logo.png" },
            { text: "Pencereden Dünya'ya baktı. Kocaman, mavi ve beyaz bir bilye gibiydi. 'Ne kadar da güzel' diye fısıldadı.", image: "images/masalmio_logo.png" },
            { text: "İleride kırmızı bir gezegen gördü. Bu Mars olmalıydı! Etrafında minik uydular dönüyordu.", image: "images/scene_space_planet.png" },
            { text: "Dikkat! Karşıdan bir asteroid kuşağı geliyordu. Kaptan {{heroName}} direksiyonu sıkıca tuttu. Sağa, sola manevralar yaptı.", image: "images/masalmio_logo.png" },
            { text: "Başarıyla geçtiler! Şimdi önlerinde Satürn vardı. Halkaları buz ve taştan yapılmıştı ve gökkuşağı gibi parlıyordu.", image: "images/masalmio_logo.png" },
            { text: "O sırada yanından yeşil, ışıklı bir daire geçti. Bir uzay gemisi! İçinden minik yeşil bir el ona salladı.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} de ona el salladı. Uzaylılar dost canlısıydı. Belki de onlar da macera arayan çocuklardı.", image: "images/masalmio_logo.png" },
            { text: "Yolculuk uzun sürmüştü. Kaptanımızın karnı acıktı. Havada süzülen meyve suyunu yakalayıp içti.", image: "images/masalmio_logo.png" },
            { text: "Artık dönme vaktiydi. Rotayı tekrar o güzel mavi gezegene, Dünya'ya çevirdi. Eve dönüş yolculuğu başladı.", image: "images/masalmio_logo.png" },
            { text: " Atmosfere girerken roket biraz sarsıldı ama {{heroName}} korkmadı. O tecrübeli bir pilottu.", image: "images/masalmio_logo.png" },
            { text: "Bahçeye yumuşak bir iniş yaptı. Kapağı açtığında taze çimen kokusunu içine çekti.", image: "images/masalmio_logo.png" },
            { text: "Annesi 'Yemek hazır!' diye seslendi. {{heroName}} gülümsedi. Uzay harikaydı ama evde olmak da güzeldi.", image: "images/hero_boy_1.png" },
            { text: "O gece yatağında yıldızlara bakarken onlara göz kırptı. 'Yarın görüşürüz arkadaşlar' dedi.", image: "images/masalmio_logo.png" },
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
            { text: "{{heroName}} plajda oturmuş denizi izliyordu. Dalgalar kıyıya vururken 'Acaba denizin en dibinde ne var?' diye düşündü.", image: "images/hero_boy_1.png" },
            { text: "Hemen hayalindeki sarı denizaltısını çağırdı. Bu denizaltı çok güçlüydü ve en derinlere inebilirdi.", image: "images/masalmio_logo.png" },
            { text: "Tepesindeki kapağı açıp içeri girdi. Düğmelere bastı, ekranlar açıldı. 'Dalışa geçiyoruz!' diye anons yaptı.", image: "images/scene_submarine_cockpit.png" },
            { text: "Denizaltı yavaşça suya battı. Önce suyun rengi açık maviydi. Güneş ışıkları suda dans ediyordu.", image: "images/masalmio_logo.png" },
            { text: "Pencereden baktığında renkli balık sürüleri gördü. Turuncu, sarı, çizgili balıklar ona 'Hoş geldin' der gibi bakıyorlardı.", image: "images/scene_underwater_coral.png" },
            { text: "Biraz daha aşağı indiler. Burada kocaman kayalar ve üzerlerinde salınan deniz bitkileri vardı. Bir yengeç kıskacını salladı.", image: "images/scene_underwater_coral.png" },
            { text: "Aniden büyük bir gölge belirdi. Bu sevimli bir deniz kaplumbağasıydı! Çok yavaş ve zarif yüzüyordu.", image: "images/masalmio_logo.png" },
            { text: "Derinlere indikçe suyun rengi koyulaştı. Mavi, laciverte dönüştü. Artık güneş ışığı buraya ulaşamıyordu.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} denizaltının ışıklarını açtı. Işık yandığında inanamadı! Etraf parlayan canlılarla doluydu.", image: "images/scene_underwater_deep.png" },
            { text: "Şeffaf deniz anaları neon ışıkları gibi parlıyordu. Pembe, mor, yeşil... Sanki suyun altında havai fişek gösterisi vardı.", image: "images/scene_underwater_deep.png" },
            { text: "Deniz tabanına yaklaştılar. Kumların üzerinde eski, tahta bir sandık duruyordu. Acaba bir korsan hazinesi miydi?", image: "images/masalmio_logo.png" },
            { text: "Denizaltının robot kolunu kullanarak sandığın kapağını hafifçe araladı. İçinden altın paralar değil, parlayan inciler çıktı!", image: "images/masalmio_logo.png" },
            { text: "Himenin yanında dev bir ahtapot uyuyordu. Ahtapot gözünü açtı ve sekiz koluyla birden esnedi. {{heroName}} kıkırdadı.", image: "images/masalmio_logo.png" },
            { text: "Bir mağara girişi gördü. İçeri girmeye karar verdi. Mağaranın duvarları kristallerle kaplıydı.", image: "images/masalmio_logo.png" },
            { text: "Mağaranın sonunda uyuyan dev bir balina vardı. Horlamasıyla mağaradaki sular titriyordu.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} onu uyandırmamak için sessizce geri geri gitti. Böyle devasa canlıları görmek büyüleyiciydi.", image: "images/masalmio_logo.png" },
            { text: "Hava tanklarını kontrol etti. 'Oksijenimiz azalıyor, yukarı çıkma vakti' dedi.", image: "images/masalmio_logo.png" },
            { text: "Motorları tam güce verdi. Baloncuklar çıkararak hızla yukarı yükselmeye başladılar.", image: "images/masalmio_logo.png" },
            { text: "Su tekrar aydınlanmaya, mavileşmeye başladı. Güneşi görmek güzeldi.", image: "images/masalmio_logo.png" },
            { text: "Denizaltı 'Pop!' diye suyun yüzeyine çıktı. Martılar çığlık atarak onları karşıladı.", image: "images/masalmio_logo.png" },
            { text: "Kapağı açıp temiz havayı içine çekti. Deniz hala masmavi ve sakin görünüyordu.", image: "images/hero_boy_1.png" },
            { text: "Ama {{heroName}} artık biliyordu ki, o sakin yüzeyin altında rengarenk, gizemli bir dünya vardı.", image: "images/masalmio_logo.png" },
            { text: "Denizaltını kıyıya çekti. Ayakları kuma değdiğinde kendini gerçek bir kaşif gibi hissetti.", image: "images/masalmio_logo.png" },
            { text: "Eve dönerken gördüğü parlayan balıkları ve dev balinayı asla unutmayacağını biliyordu.", image: "images/masalmio_logo.png" },
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
            { text: "Hafta sonu nihayet gelmişti! {{heroName}} için bu hafta sonu çok özeldi, çünkü ilk kez kampa gideceklerdi.", image: "images/hero_boy_1.png" },
            { text: "Arabaya yastıklar, uyku tulumları, fenerler ve bolca yiyecek yüklediler. Bagaj tıka basa dolmuştu!", image: "images/masalmio_logo.png" },
            { text: "Yolculuk başladı. Şehirden uzaklaştıkça binalar azaldı, ağaçlar çoğaldı. Camı açtığında mis gibi çam kokusu geldi.", image: "images/masalmio_logo.png" },
            { text: "Ormanlık alana vardıklarında {{heroName}} arabadan fırladı. Kuşlar cıvıl cıvıl ötüyordu. Hava serin ve tertemizdi.", image: "images/masalmio_logo.png" },
            { text: "Babası 'Hadi bakalım, önce çadırımızı kuralım' dedi. Çadır kurmak dev bir yapboz yapmak gibiydi.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} çubukları birleştirdi, kazıkları yere çaktı. Çekiç kullanmak onu çok güçlü hissettirdi.", image: "images/masalmio_logo.png" },
            { text: "Sonunda çadır hazırdı! İçine girip yerleşti. Burası sanki kumaştan yapılmış gizli bir kale gibiydi.", image: "images/scene_camp_tent_sunny.png" },
            { text: "Güneş yavaş yavaş batarken ormanda bir yürüyüşe çıktılar. Kuru yaprakların üzerinde yürümek 'hışır hışır' sesler çıkarıyordu.", image: "images/masalmio_logo.png" },
            { text: "Yerde değişik ayak izleri gördü. 'Bu bir tavşan izi olmalı!' dedi {{heroName}}. Doğada bir dedektif gibi iz sürdü.", image: "images/masalmio_logo.png" },
            { text: "Bir ağaçkakanın 'tak tak tak' diye ağacı gagaladığını gördüler. Doğa ne kadar da canlıydı.", image: "images/masalmio_logo.png" },
            { text: "Hava karardığında kamp alanına döndüler. Şimdi en eğlenceli kısım gelmişti: Kamp ateşi!", image: "images/scene_camp_fire_night.png" },
            { text: "Ateş çıtırdayarak yandı. Turuncu alevler dans ediyordu. {{heroName}} ateşin sıcaklığını yüzünde hissetti.", image: "images/scene_camp_fire_night.png" },
            { text: "Çubuklara taktıkları marşmelovları ateşte kızarttılar. Dışı kıtır, içi yumuşacık olmuştu. Çok lezzetliydi!", image: "images/scene_camp_fire_night.png" },
            { text: "Gökyüzüne baktığında şaşırdı. Şehirde hiç bu kadar çok yıldız görmemişti. Sanki biri gökyüzüne sim dökmüştü.", image: "images/masalmio_logo.png" },
            { text: "Babası ona Büyükaıyı takımyıldızını gösterdi. Gerçekten de bir cezveye benziyordu.", image: "images/masalmio_logo.png" },
            { text: "Aniden karanlığın içinden 'Uu-huuu!' diye bir ses geldi. Bu bir baykuştu! {{heroName}} biraz ürperdi ama korkmadı.", image: "images/masalmio_logo.png" },
            { text: "Çalılıkların arasından parlayan iki göz onlara baktı. Meraklı bir tilki! Ateşin ışığında tüyleri kızıla çalıyordu.", image: "images/scene_forest_animals.png" },
            { text: "Tilki bir süre onları izledi, sonra sessizce ormana geri döndü. Sanki 'İyi geceler' demişti.", image: "images/scene_forest_animals.png" },
            { text: "Ateş köz haline gelince çadıra girdiler. Uyku tulumu sıcacıktı. Dışarıda rüzgar ağaçları sallıyordu.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} ormanın seslerini dinleyerek uykuya daldı. Hayatının en güzel uykularından biriydi.", image: "images/masalmio_logo.png" },
            { text: "Sabah kuşların neşeli şarkılarıyla uyandı. Çadırın fermuarını açtığında güneş yüzüne vurdu.", image: "images/masalmio_logo.png" },
            { text: "Çimenlerin üzerinde çiy damlaları parlıyordu. Her şey pırıl pırıldı.", image: "images/masalmio_logo.png" },
            { text: "Kahvaltıda sıcak çaylarını içtiler. {{heroName}} ormanın enerjisiyle dolmuştu.", image: "images/masalmio_logo.png" },
            { text: "Eşyaları toplarken biraz üzüldü ama biliyordu ki, orman her zaman onları bekleyecekti.", image: "images/hero_boy_1.png" },
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
            { text: "Okulların kapanmasıyla birlikte {{heroName}}'in içi içine sığmıyordu. Sonunda yaz tatili gelmişti!", image: "images/hero_boy_1.png" },
            { text: "Annesi 'Hadi bavulunu hazırla' dediğinde en sevdiği şortlarını, kova küreğini ve güneş gözlüğünü hemen seçti.", image: "images/masalmio_logo.png" },
            { text: "Bavulun fermuarı zor kapandı ama başardı! Babası arabayı hazırlarken o da arka koltuğa yerleşti.", image: "images/masalmio_logo.png" },
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
            { text: "Öğleden sonra babasıyla suda top oynadılar. {{heroName}} topa öyle bir vurdu ki top taa açıklara gitti.", image: "images/masalmio_logo.png" },
            { text: "Akşamüstü güneş turuncuya dönerken sahil tenhalaştı. {{heroName}} kumların üzerine oturdu.", image: "images/scene_beach_sunset.png" },
            { text: "Ufukta batan güneşi izledi. Gökyüzü pembe, mor ve turuncu renklere bürünmüştü.", image: "images/scene_beach_sunset.png" },
            { text: "Akşam yemeğinden sonra çarşıyı gezdiler. Her yer ışıl ışıldı ve dondurma kokuyordu.", image: "images/masalmio_logo.png" },
            { text: "En sevdiği dondurmacıda durdular. {{heroName}} kocaman bir külah dondurma aldı. Tadı harikaydı!", image: "images/masalmio_logo.png" },
            { text: "Otele dönerken çok yorulmuştu. Gözleri kapanıyordu. Deniz havası onu çarpmıştı.", image: "images/masalmio_logo.png" },
            { text: "Yatağına yattığında hala dalgaların sesini duyabiliyordu. 'Hışşşt... Hışşşt...' diye ninniler söylüyordu deniz.", image: "images/masalmio_logo.png" },
            { text: "Yarın yine yüzecek, yine kale yapacaktı. Tatil daha yeni başlıyordu.", image: "images/hero_boy_1.png" },
            { text: "Rüyasında yunuslarla yarıştığını, denizaltı krallığına gittiğini gördü.", image: "images/masalmio_logo.png" },
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
            { text: "Babası 'Hadi yemekli vagona gidelim' dedi. Tren sallandığı için koridorda yürümek çok zordu.", image: "images/masalmio_logo.png" },
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
            { text: "Dedesi onları karşılamaya gelmişti. Koşup dedesine sarıldı.", image: "images/hero_boy_1.png" },
            { text: "Bu tren yolculuğu, tatilin en güzel başlangıcı olmuştu.", image: "images/masalmio_logo.png" },
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
            { text: "Annesine 'Anne, penguenler çok komik yürüyor' dedi gülerek.", image: "images/hero_boy_1.png" },
            { text: "Pencereden dışarı baktı. Dışarıda yağmur yağıyordu ama o kar tanelerini hatırlıyordu.", image: "images/masalmio_logo.png" },
            { text: "Belki bir gün gerçekten oraya giderdi. Kim bilir?", image: "images/hero_boy_1.png" },
            { text: "SON", image: "images/masalmio_logo.png" }
        ]
    },
    {
        id: "solo_day_01",
        title: "Cesur Kaşifin Tek Başına Macerası",
        summary: "Bazen en büyük maceralar, tek başına çıktığın yürüyüşlerde başlar.",
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
            { text: "Kapıdan içeri girdiğinde annesi 'Neredeydin?' diye sordu. {{heroName}} gizemli bir şekilde gülümsedi.", image: "images/hero_boy_1.png" },
            { text: "'Çok uzak diyarlardaydım anne. Vahşi Orman'da' dedi.", image: "images/hero_boy_1.png" },
            { text: "Hazine arabasını yıkayıp rafına koydu. Artık o sıradan bir araba değildi.", image: "images/masalmio_logo.png" },
            { text: "O, keşif gezisinin ganimetiydi.", image: "images/masalmio_logo.png" },
            { text: "Tek başına oynamanın da ne kadar keyifli olabileceğini öğrenmişti.", image: "images/hero_boy_1.png" },
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
            { text: "{{heroName}} sabah uyandığında bir gariplik fark etti. {{heroPetName}} odasında yoktu.", image: "images/hero_boy_1.png" },
            { text: "Normalde sabahları gelip burnunu yalar, onu uyandırırdı. '{{heroPetName}}? Neredesin?' diye seslendi.", image: "images/masalmio_logo.png" },
            { text: "Mutfağa gitti, bahçeye baktı. Yoktu. Tam endişelenmeye başlayacaktı ki bir ses duydu.", image: "images/masalmio_logo.png" },
            { text: "Kiler kapısının altından bir tıkırtı geliyordu. Kapıyı yavaşça açtı.", image: "images/masalmio_logo.png" },
            { text: "{{heroPetName}} oradaydı! Ama ağzında bir şey vardı. {{heroName}}'i görünce suçlu suçlu baktı.", image: "images/pet_cat_1.png" },
            { text: "Ve fırt diye bacaklarının arasından kaçtı! Ağzındaki şey parlıyordu. Ne olabilirdi?", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} kovalamaca başladı. 'Dur! Kaçma!' diye peşinden koştu.", image: "images/hero_boy_1.png" },
            { text: "Salonun ortasından geçtiler, halıyı kaydırdılar. Anneleri 'Hey, dikkatli olun!' diye bağırdı.", image: "images/masalmio_logo.png" },
            { text: "{{heroPetName}} koltuğun arkasına saklandı. Sadece kuyruğu görünüyordu. {{heroName}} sessizce yaklaştı.", image: "images/masalmio_logo.png" },
            { text: "'Sobe!' dedi ama {{heroPetName}} yine kaçtı. Bu bir oyun muydu?", image: "images/pet_cat_1.png" },
            { text: "Bu sefer merdivenleri tırmandı. {{heroName}} de peşinden. {{heroPetName}} yatak odasına girdi.", image: "images/masalmio_logo.png" },
            { text: "Yatağın altına girdi. {{heroName}} eğilip baktı. İki parlak göz ona bakıyordu.", image: "images/masalmio_logo.png" },
            { text: "'Hadi çık oradan küçük haylaz, ne saklıyorsun?' dedi tatlı dille.", image: "images/masalmio_logo.png" },
            { text: "{{heroPetName}} yavaşça çıktı. Ağzındaki şeyi yere bıraktı. Bu... bu babasının kayıp saatiydi!", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} şaşırdı. 'Bunu sen mi buldun? Babam günlerdir bunu arıyor!'", image: "images/masalmio_logo.png" },
            { text: "Demek sabahki tıkırtı buydu. {{heroPetName}} aslında bir hırsız değil, bir dedektifti!", image: "images/pet_cat_1.png" },
            { text: "{{heroName}} saatle birlikte babasının yanına koştu. {{heroPetName}} de peşinden gururla yürüdü.", image: "images/masalmio_logo.png" },
            { text: "Babası saati görünce çok sevindi. 'Aferin size! Nereden buldunuz?' dedi.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}}, {{heroPetName}}'i gösterdi. 'O buldu baba. O evin koruyucusu.'", image: "images/hero_boy_1.png" },
            { text: "Babası {{heroPetName}}'in başını okşadı. {{heroPetName}} memnuniyetle mırıldandı (veya kuyruk salladı).", image: "images/pet_cat_1.png" },
            { text: "Ödül olarak ona kocaman bir mama verdiler. {{heroName}} de onu izledi.", image: "images/masalmio_logo.png" },
            { text: "Yemekten sonra {{heroPetName}} gelip {{heroName}}'in kucağına yattı. Yorulmuştu.", image: "images/pet_cat_1.png" },
            { text: "{{heroName}} onun yumuşak tüylerini sevdi. 'Sen dünyanın en iyi dedektifisin' dedi.", image: "images/hero_boy_1.png" },
            { text: "İkisi birlikte koltukta uyuyakaldılar. Macera bitmişti, huzur gelmişti.", image: "images/masalmio_logo.png" },
            { text: "SON", image: "images/masalmio_logo.png" }
        ]
    },
    {
        id: "mentor_01",
        title: "Bilge Dede ile Zaman Yolculuğu",
        summary: "Dedenin tavan arasından çıkan eski bir saat, sizi tarihin derinliklerine götürecek!",
        genre: "sci-fi",
        coverColor: "#9C27B0",
        requirements: ["mentor"],
        pages: [
            { text: "{{heroName}}, yaz tatilinde dedesinin çiftliğine gitmişti. Dedesi, herkesin 'Bilge Kişi' dediği, çok okuyan, çok bilen tonton bir adamdı.", image: "images/mentor_grandpa_1.png" },
            { text: "Bir yağmurlu öğleden sonra, {{mentorName}} onu yanına çağırdı. 'Gel evlat, sana tavan arasındaki hazinemi göstereyim.'", image: "images/mentor_grandpa_1.png" },
            { text: "Tavan arası tozlu ama gizemliydi. Eski haritalar, teleskoplar ve garip makinelerle doluydu.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}}'in gözüne altın kaplamalı, üzerinde garip semboller olan bir köstekli saat takıldı. 'Bu da ne dede?'", image: "images/masalmio_logo.png" },
            { text: "{{mentorName}} gülümsedi. 'Bu benim en büyük icadım. Ama sadece cesur olanlar kullanabilir. O bir Zaman Anahtarı.'", image: "images/mentor_grandpa_1.png" },
            { text: "{{heroName}} saate dokundu. İbreleri geriye doğru hızla dönmeye başladı! 'Tik-tak, tik-tak!'", image: "images/masalmio_logo.png" },
            { text: "Birden etrafındaki toz bulutu dağıldı, oda değişti. Artık tavan arasında değillerdi!", image: "images/masalmio_logo.png" },
            { text: "Yemyeşil, dev eğrelti otlarıyla dolu bir ormandaydılar. Ve yer sarsılıyordu: GÜM! GÜM!", image: "images/masalmio_logo.png" },
            { text: "'Dikkat et!' diye bağırdı {{mentorName}}. Çalıların arasından kocaman bir dinozor kafası uzandı.", image: "images/masalmio_logo.png" },
            { text: "Bu bir Diplodocus'tu! Otçul olduğu için onlara zarar vermezdi ama {{heroName}} yine de ağzı açık kalmıştı.", image: "images/mentor_grandpa_1.png" },
            { text: "Dinozor yavaşça yaprakları yedi. {{heroName}}, dedesinin elini tutarak dinozorun pullu derisine dokundu.", image: "images/masalmio_logo.png" },
            { text: "'Haydi, daha gidilecek çok yer var' dedi {{mentorName}} ve saati tekrar kurdu.", image: "images/mentor_grandpa_1.png" },
            { text: "Işıklar çaktı ve kendilerini taş döşeli bir yolda buldular. Etrafta at arabaları ve togalı insanlar vardı.", image: "images/masalmio_logo.png" },
            { text: "'Burası Antik Roma' dedi dedesi. 'Bak, şu ilerideki büyük yapı Kolezyum.'", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} insanların kıyafetlerini inceledi. Herkes sandalet giyiyordu. Bir satıcı ona üzüm ikram etti.", image: "images/masalmio_logo.png" },
            { text: "Sokaklarda mermer heykeller, devasa sütunlar vardı. Her şey tarih kitabından fırlamış gibiydi.", image: "images/masalmio_logo.png" },
            { text: "Saatin zili çaldı. {{mentorName}}, 'Zaman azalıyor, son bir durağımız var' dedi.", image: "images/mentor_grandpa_1.png" },
            { text: "Bu sefer kendilerini uçan arabaların olduğu, gökdelenlerin bulutları geçtiği bir şehirde buldular.", image: "images/scene_plane_clouds.png" },
            { text: "'Burası Gelecek!' dedi {{heroName}}. Robotlar sokakları temizliyor, insanlar uçan kaykaylarla geziyordu.", image: "images/masalmio_logo.png" },
            { text: "Bir çocuk yanlarına yaklaştı ve havada asılı duran bir topla onlara pas attı. Yerçekimi burada daha azdı sanki.", image: "images/masalmio_logo.png" },
            { text: "{{mentorName}} torununa baktı. 'Geçmişten ders alıp, geleceği sen inşa edeceksin evlat.'", image: "images/mentor_grandpa_1.png" },
            { text: "Saat son kez çaldı. Dönüş vakti gelmişti. {{heroName}} geleceğe el salladı.", image: "images/masalmio_logo.png" },
            { text: "Tavan arasına döndüklerinde yağmur dinmişti. Her şey rüya gibiydi ama {{heroName}}'in elinde hala gelecekten gelen o top vardı (şaka şaka, sadece hayali kalmıştı).", image: "images/masalmio_logo.png" },
            { text: "{{mentorName}} saatini kutusuna koydu. 'Aramızda kalsın, tamam mı?' dedi göz kırparak.", image: "images/mentor_grandpa_1.png" },
            { text: "O gün {{heroName}} tarihin sadece kitaplarda yazılı olmadığını, yaşanabilir bir macera olduğunu öğrendi.", image: "images/hero_boy_1.png" },
            { text: "SON", image: "images/masalmio_logo.png" }
        ]
    },
    {
        id: "friend_01",
        title: "Gizli Hazine Adası",
        summary: "Eski bir harita, iki maceralı arkadaş ve çözülmesi gereken ipuçları...",
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
            { text: "SON", image: "images/masalmio_logo.png" }
        ]
    },
    {
        id: "sibling_01",
        title: "Kayıp Oyuncağın Gizemi",
        summary: "Evde sevilen bir oyuncak kayboldu. İki kardeş dedektif olup ipuçlarını takip ediyor!",
        genre: "mystery",
        coverColor: "#607D8B",
        requirements: ["sibling"],
        pages: [
            { text: "O sabah evde büyük bir kriz vardı. {{siblingName}}'in en sevdiği peluş ayı 'Bay Bal' ortada yoktu!", image: "images/sibling_girl_1.png" },
            { text: "{{siblingName}} ağlamak üzereydi. 'Onu yatağıma bırakmıştım, şimdi yok!' diyordu.", image: "images/sibling_girl_1.png" },
            { text: "{{heroName}}, hemen dedektif şapkasını (babasının eski şapkası) taktı. 'Korkma,' dedi. 'Dedektif {{heroName}} iş başında!'", image: "images/hero_boy_1.png" },
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
            { text: "O akşam {{siblingName}}, abisine/kardeşine teşekkür etti. 'Sen olmasan bulamazdım,' dedi.", image: "images/sibling_girl_1.png" },
            { text: "{{heroName}} büyütecini kenara koydu. 'Kardeşler bunun içindir,' dedi. Dava kapanmıştı.", image: "images/hero_boy_1.png" },
            { text: "SON", image: "images/masalmio_logo.png" }
        ]
    },
    {
        id: "mom_01",
        title: "Süper Anne'nin Mutfak Sırları",
        summary: "Bugün mutfak bir laboratuvar, yemek yapmak ise bir sihir! Afiyet olsun!",
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
            { text: "SON", image: "images/masalmio_logo.png" }
        ]
    },
    {
        id: "dad_01",
        title: "Baba ile Büyük Tamirat",
        summary: "Eski bir bisiklet, bir sürü alet ve babayla geçen harika bir gün.",
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
                .replace(/{{mentorName}}/g, config.family.mentor.name || "Bilge Kişi")
                .replace(/{{heroPetName}}/g, config.pets.heroPet.name || "Boncuk");
        });

        // Dynamic Avatar/Scene Logic
        // Dynamic Avatar/Scene Logic
        story.pages.forEach(page => {
            if (page.image === "images/hero_boy_1.png") {
                page.image = config.hero.avatar;
            } else if (page.image === "images/sibling_girl_1.png") {
                page.image = config.family.sibling.avatar;
            } else if (page.image === "images/pet_cat_1.png") {
                page.image = config.pets.heroPet.avatar;
            } else if (page.image === "images/parent_mom_1.png") {
                page.image = config.family.mom.avatar;
            }

            if (page.image === "images/scene_forest_pixar.png" && config.hero.gender === 'boy') {
                page.image = "images/action_forest_walk_boy.png";
            } else if (page.image === "images/scene_forest_pixar.png" && config.hero.gender === 'girl') {
                page.image = "images/action_forest_walk_girl.png";
            }

            if (page.image === "images/scene_cave_entrance_pixar.png") {
                if (config.hero.gender === 'boy') page.image = "images/action_cave_discovery_boy.png";
                else page.image = "images/action_cave_discovery_girl.png";
            }

            if (page.image === "images/scene_portal_pixar.png") {
                // Randomly or specifically replace portal with interaction 
                if (config.hero.gender === 'boy') page.image = "images/action_portal_interaction_boy.png";
                else page.image = "images/action_portal_interaction_girl.png";
            }

            if (page.image === "images/pet_cat_1.png" && config.pets.heroPet.type === 'cat') {
                // Check context for sleeping if possible, or just used mostly for sleeping in current stories?
                // In adventure_01 page 35 it is sleeping.
                if (page.text.includes("uyuyordu") || page.text.includes("uyku")) {
                    page.image = "images/action_sleeping_pet_cat.png";
                }
            }
            if (page.image === "images/pet_dog_1.png" && config.pets.heroPet.type === 'dog') {
                if (page.text.includes("uyuyordu") || page.text.includes("uyku")) {
                    page.image = "images/action_sleeping_pet_dog.png";
                }
            }
        });

        // --- Cover Page Injection ---
        // Find a nice cover image (first scene or default)
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
