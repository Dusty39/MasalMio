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
            { text: "Ertesi sabah hemen bahçeye koştu. En sevdiği büyük karton kutuyu buldu. 'İşte benim roketim!' dedi heyecanla.", image: "images/masalmio_logo.png" },
            { text: "Kutuyu gümüş rengi boyalarla boyadı. Üzerine renkli kapaklardan düğmeler, kartondan pencereler yaptı.", image: "images/masalmio_logo.png" },
            { text: "Roketin içine yumuşak minderler koydu. Uzun yolculuk için yanına bir paket bisküvi ve meyve suyu aldı.", image: "images/masalmio_logo.png" },
            { text: "Kaskını (yani bisiklet kaskını) başına taktı. Eldivenlerini giydi. Artık uçuşa tamamen hazırdı.", image: "images/hero_boy_1.png" },
            { text: "Kokpite oturdu ve derin bir nefes aldı. Kontrol paneline (boyadığı kutuya) dokundu. 'Kule, fırlatma için izin istiyorum' dedi.", image: "images/masalmio_logo.png" },
            { text: "Hayalindeki kule cevap verdi: 'İzin verildi kaptan! Geri sayım başlıyor.' {{heroName}}'in kalbi güm güm atıyordu.", image: "images/masalmio_logo.png" },
            { text: "'10.. 9.. 8.. 7.. 6..' Her sayıda heyecanı artıyordu. Motorların ısındığını hissedebiliyordu.", image: "images/masalmio_logo.png" },
            { text: "'5.. 4.. 3.. 2.. 1.. FIRLATMA!' {{heroName}} 'Vuuu!' diye bağırarak koltuğuna yapıştı.", image: "images/hero_boy_1.png" },
            { text: "Roket bahçeden havalandı. Ağaçlar aşağıda küçücük kaldı. Kuşların bile üzerine çıktı.", image: "images/masalmio_logo.png" },
            { text: "Bulutların arasından geçti. Pamuk gibi beyaz bulutlar penceresine değiyordu. Gökyüzü maviden mora dönmeye başladı.", image: "images/masalmio_logo.png" },
            { text: "Ve bir anda... Sessizlik. Artık uzaydaydı. Her yer kapkaranlık ama milyonlarca yıldızla doluydu.", image: "images/masalmio_logo.png" },
            { text: "Yerçekimi yok olmuştu! {{heroName}} oturduğu yerden havalandığını hissetti. Bisküvisi bile havada yüzüyordu.", image: "images/masalmio_logo.png" },
            { text: "Pencereden Dünya'ya baktı. Kocaman, mavi ve beyaz bir bilye gibiydi. 'Ne kadar da güzel' diye fısıldadı.", image: "images/masalmio_logo.png" },
            { text: "İleride kırmızı bir gezegen gördü. Bu Mars olmalıydı! Etrafında minik uydular dönüyordu.", image: "images/masalmio_logo.png" },
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
            { text: "Tepesindeki kapağı açıp içeri girdi. Düğmelere bastı, ekranlar açıldı. 'Dalışa geçiyoruz!' diye anons yaptı.", image: "images/masalmio_logo.png" },
            { text: "Denizaltı yavaşça suya battı. Önce suyun rengi açık maviydi. Güneş ışıkları suda dans ediyordu.", image: "images/masalmio_logo.png" },
            { text: "Pencereden baktığında renkli balık sürüleri gördü. Turuncu, sarı, çizgili balıklar ona 'Hoş geldin' der gibi bakıyorlardı.", image: "images/masalmio_logo.png" },
            { text: "Biraz daha aşağı indiler. Burada kocaman kayalar ve üzerlerinde salınan deniz bitkileri vardı. Bir yengeç kıskacını salladı.", image: "images/masalmio_logo.png" },
            { text: "Aniden büyük bir gölge belirdi. Bu sevimli bir deniz kaplumbağasıydı! Çok yavaş ve zarif yüzüyordu.", image: "images/masalmio_logo.png" },
            { text: "Derinlere indikçe suyun rengi koyulaştı. Mavi, laciverte dönüştü. Artık güneş ışığı buraya ulaşamıyordu.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} denizaltının ışıklarını açtı. Işık yandığında inanamadı! Etraf parlayan canlılarla doluydu.", image: "images/masalmio_logo.png" },
            { text: "Şeffaf deniz anaları neon ışıkları gibi parlıyordu. Pembe, mor, yeşil... Sanki suyun altında havai fişek gösterisi vardı.", image: "images/masalmio_logo.png" },
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
            { text: "Sonunda çadır hazırdı! İçine girip yerleşti. Burası sanki kumaştan yapılmış gizli bir kale gibiydi.", image: "images/masalmio_logo.png" },
            { text: "Güneş yavaş yavaş batarken ormanda bir yürüyüşe çıktılar. Kuru yaprakların üzerinde yürümek 'hışır hışır' sesler çıkarıyordu.", image: "images/masalmio_logo.png" },
            { text: "Yerde değişik ayak izleri gördü. 'Bu bir tavşan izi olmalı!' dedi {{heroName}}. Doğada bir dedektif gibi iz sürdü.", image: "images/masalmio_logo.png" },
            { text: "Bir ağaçkakanın 'tak tak tak' diye ağacı gagaladığını gördüler. Doğa ne kadar da canlıydı.", image: "images/masalmio_logo.png" },
            { text: "Hava karardığında kamp alanına döndüler. Şimdi en eğlenceli kısım gelmişti: Kamp ateşi!", image: "images/masalmio_logo.png" },
            { text: "Ateş çıtırdayarak yandı. Turuncu alevler dans ediyordu. {{heroName}} ateşin sıcaklığını yüzünde hissetti.", image: "images/masalmio_logo.png" },
            { text: "Çubuklara taktıkları marşmelovları ateşte kızarttılar. Dışı kıtır, içi yumuşacık olmuştu. Çok lezzetliydi!", image: "images/masalmio_logo.png" },
            { text: "Gökyüzüne baktığında şaşırdı. Şehirde hiç bu kadar çok yıldız görmemişti. Sanki biri gökyüzüne sim dökmüştü.", image: "images/masalmio_logo.png" },
            { text: "Babası ona Büyükaıyı takımyıldızını gösterdi. Gerçekten de bir cezveye benziyordu.", image: "images/masalmio_logo.png" },
            { text: "Aniden karanlığın içinden 'Uu-huuu!' diye bir ses geldi. Bu bir baykuştu! {{heroName}} biraz ürperdi ama korkmadı.", image: "images/masalmio_logo.png" },
            { text: "Çalılıkların arasından parlayan iki göz onlara baktı. Meraklı bir tilki! Ateşin ışığında tüyleri kızıla çalıyordu.", image: "images/masalmio_logo.png" },
            { text: "Tilki bir süre onları izledi, sonra sessizce ormana geri döndü. Sanki 'İyi geceler' demişti.", image: "images/masalmio_logo.png" },
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
            { text: "Sıcak kumlar ayaklarını gıdıkladı. Denize doğru koşup kendini serin sulara bıraktı. Oh, dünya varmış!", image: "images/masalmio_logo.png" },
            { text: "Su çok berraktı. Ayaklarının altından geçen minik gümüş balıkları görebiliyordu.", image: "images/masalmio_logo.png" },
            { text: "Sudan çıkınca kova ve küreğini aldı. 'Dünyanın en büyük kalesini yapacağım' dedi.", image: "images/masalmio_logo.png" },
            { text: "Islak kumları kovaya doldurup ters çevirdi. Kale kuleleri yükselmeye başladı.", image: "images/masalmio_logo.png" },
            { text: "Etrafına derin bir hendek kazdı. Denüzden su taşıyıp hendeği doldurdu. Artık kalesi düşmanlara karşı güvendeydi.", image: "images/masalmio_logo.png" },
            { text: "Kalenin duvarlarını bulduğu renkli deniz kabuklarıyla süsledi. Tepesine de bir martı tüyü dikti. Bayrak gibi dalgalandı.", image: "images/masalmio_logo.png" },
            { text: "Yanına bir yengeç yaklaştı. Yengeç kaleye şaşkın şaşkın baktı, sonra yan yan yürüyerek uzaklaştı.", image: "images/masalmio_logo.png" },
            { text: "Acıkınca sahildeki büfeden mısır aldılar. Tuzlu suyun ardından haşlanmış mısır ne kadar da lezzetliydi!", image: "images/masalmio_logo.png" },
            { text: "Öğleden sonra babasıyla suda top oynadılar. {{heroName}} topa öyle bir vurdu ki top taa açıklara gitti.", image: "images/masalmio_logo.png" },
            { text: "Akşamüstü güneş turuncuya dönerken sahil tenhalaştı. {{heroName}} kumların üzerine oturdu.", image: "images/masalmio_logo.png" },
            { text: "Ufukta batan güneşi izledi. Gökyüzü pembe, mor ve turuncu renklere bürünmüştü.", image: "images/masalmio_logo.png" },
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
            { text: "Sonra dev gibi camların önüne gittiler. Dışarıda sıra sıra uçaklar vardı. Kimisi kocaman, kimisi daha küçüktü.", image: "images/masalmio_logo.png" },
            { text: "Bavulların araçlarla taşınmasını, uçaklara yakıt konulmasını hayranlıkla seyretti. Her şey çok düzenliydi.", image: "images/masalmio_logo.png" },
            { text: "Anons yapıldı: 'Sayın yolcularımız, uçağımız kalkışa hazırdır.' Kalbi küt küt attı.", image: "images/masalmio_logo.png" },
            { text: "Uçağın kapısından girerken hostes abla ona gülümsedi. 'Hoş geldin küçük gezgin' dedi.", image: "images/masalmio_logo.png" },
            { text: "Koridorda ilerleyip koltuğunu buldu. Yaşasın! Pencere kenarıydı. Hemen oturdu ve dışarı baktı.", image: "images/masalmio_logo.png" },
            { text: "'Klik' sesiyle kemerini bağladı. Pilot konuşmaya başladı: 'Kaptanınız konuşuyor, uçuş süremiz 2 saat.'", image: "images/masalmio_logo.png" },
            { text: "Motorlardan 'VUUUU' diye güçlü bir ses geldi. Uçak pistte ilerlemeye başladı. Hızlandı, hızlandı...", image: "images/masalmio_logo.png" },
            { text: "Ve birden koltuğa yapıştı! Tekerlekler yerden kesildi. Havalanıyorlardı! {{heroName}} şaşkınlıkla güldü.", image: "images/masalmio_logo.png" },
            { text: "Aşağıdaki arabalar oyuncak gibi, evler kibrit kutusu gibi görünüyordu. Yollar incecik ipler gibiydi.", image: "images/masalmio_logo.png" },
            { text: "Şehir uzaklaştı, tarlalar, nehirler harita gibi altına serildi. Dünya yukarıdan çok farklı görünüyordu.", image: "images/masalmio_logo.png" },
            { text: "Sonra gri bir sisin içine girdiler. Bunlar buluttu! Ve hop, bulutların üzerine çıktılar.", image: "images/masalmio_logo.png" },
            { text: "Güneş burada pırıl pırıldı. Aşağısı ise bembeyaz bir pamuk tarlası gibiydi. Üzerinde zıplamak istedi.", image: "images/masalmio_logo.png" },
            { text: "Hostesler yemek servisine başladı. Uçakta sandviç yemek çok havalıydı. Meyve suyunu yudumladı.", image: "images/masalmio_logo.png" },
            { text: "Tuvalete gitmek istedi. Uçak tuvaleti çok küçüktü ve 'voşş' diye gürültülü çalışıyordu. Biraz korktu ama komikti.", image: "images/masalmio_logo.png" },
            { text: "Pilot 'İnişe geçiyoruz' dediğinde uçak hafifçe sallandı. Bu türbülanstı, sanki araba tümsekte zıplamış gibi.", image: "images/masalmio_logo.png" },
            { text: "Tekrar bulutların altına indiler. Şehir ışıkları görünmeye başladı. Akşam olmuştu.", image: "images/masalmio_logo.png" },
            { text: "Tekerlekler piste 'GÜM' diye değdi. Uçak yavaşladı. Yolcular alkışladı. {{heroName}} de alkışladı.", image: "images/masalmio_logo.png" },
            { text: "Uçaktan inerken pilota el salladı. 'Büyüyünce ben de pilot olacağım' dedi.", image: "images/hero_boy_1.png" },
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
            { text: "Rayların üzerinde dinlenen devasa treni gördü. Demir bir yılana benziyordu. Lokomotifi çok güçlü görünüyordu.", image: "images/masalmio_logo.png" },
            { text: "Bilet kontrol memuru biletlerini deldi. 'İyi yolculuklar küçük yolcu' dedi ve şapkasını düzeltti.", image: "images/masalmio_logo.png" },
            { text: "Vagonlarına binip yerlerini buldular. Koltuklar rahattı ve kocaman bir penceresi vardı.", image: "images/masalmio_logo.png" },
            { text: "Dışarıdan bir düdük sesi geldi: 'DÜÜÜT!'. Tren sarsılarak hareket etti. Tekerlekler dönmeye başladı.", image: "images/masalmio_logo.png" },
            { text: "Önce yavaş yavaş hızlandılar. İstasyon geride kaldı. Şehir binaları bir bir geçti.", image: "images/masalmio_logo.png" },
            { text: "Tekerlekler raylarda 'tak-taka-tak, tak-taka-tak' diye ritmik bir ses çıkarıyordu. Bu ses {{heroName}}'in hoşuna gitti.", image: "images/masalmio_logo.png" },
            { text: "Şehir bitti, yeşil tarlalar başladı. İnekler otluyor, traktörler çalışıyordu. Hepsi trene el sallıyordu sanki.", image: "images/masalmio_logo.png" },
            { text: "Aniden her yer karardı! Bir tünele girmişlerdi. {{heroName}} heyecanla 'Aaa!' dedi. Pencerede sadece kendi yansımasını gördü.", image: "images/masalmio_logo.png" },
            { text: "Bir dakika sonra ışık tekrar geldi. Gözleri kamaştı. Şimdi dağların arasından geçiyorlardı.", image: "images/masalmio_logo.png" },
            { text: "Babası 'Hadi yemekli vagona gidelim' dedi. Tren sallandığı için koridorda yürümek çok zordu.", image: "images/masalmio_logo.png" },
            { text: "Sağa sola çarparak, penguen gibi yürüyerek yemekli vagona ulaştılar. Gülmekten karınları ağrıdı.", image: "images/masalmio_logo.png" },
            { text: "Orada tost yiyip çay içtiler ({{heroName}} meyve suyu içti). Manzara eşliğinde yemek yemek çok keyifliydi.", image: "images/masalmio_logo.png" },
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
            { text: "Gözlerini kapattı ve rüzgarın sesini dinledi. 'Vuuuu...' Gözlerini açtığında odasında değil, bembeyaz bir yerdeydi!", image: "images/masalmio_logo.png" },
            { text: "Üzerinde kalın, tüylü bir mont, eldivenler ve kocaman botlar vardı. Burası Karlar Ülkesi olmalıydı.", image: "images/masalmio_logo.png" },
            { text: "Her adım attığında kar 'hart hurt' diye ses çıkarıyordu. Kar o kadar yumuşaktı ki içine batıyordu.", image: "images/masalmio_logo.png" },
            { text: "Hava buz gibiydi ama {{heroName}} üşümüyordu. Çünkü maceranın heyecanı içini ısıtıyordu.", image: "images/masalmio_logo.png" },
            { text: "İleride siyah beyaz noktalar gördü. Bunlar paytak paytak yürüyen penguenlerdi! Bir sürü penguen!", image: "images/masalmio_logo.png" },
            { text: "Onlara yaklaştı. Penguenler hiç korkmadı. Hatta bir tanesi merakla gelip {{heroName}}'in botunu gagasıyla tıkladı.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} diz çöktü. 'Merhaba küçük dostum' dedi. Penguen kanatlarını çırparak cevap verdi.", image: "images/masalmio_logo.png" },
            { text: "Birlikte buzdan bir kaydırak buldular. Penguenler göğüslerinin üzerinde kayıyorlardı. {{heroName}} de denedi.", image: "images/masalmio_logo.png" },
            { text: "Hızla aşağı kaydılar. Rüzgar yüzüne çarpıyordu. 'Yuuuhuuu!' diye bağırdı. Çok eğlenceliydi!", image: "images/masalmio_logo.png" },
            { text: "Aşağıda buzdan bir göl vardı. Fok balıkları buzun üzerine çıkmış güneşleniyordu (gerçi güneş çok ısıtmıyordu ama olsun).", image: "images/masalmio_logo.png" },
            { text: "Aniden gökyüzünde yeşil ışıklar belirdi. Dans eden şeritler gibiydiler. Bu Kuzey Işıkları'ydı! (Ya da Güney Işıkları, kim bilir?)", image: "images/masalmio_logo.png" },
            { text: "Gökyüzü bir tablo gibiydi. Yeşil, mor, pembe ışıklar dalgalanıyordu. {{heroName}} büyülenmiş gibi izledi.", image: "images/masalmio_logo.png" },
            { text: "Kar yağmaya başladı. Kocaman kar taneleri burnunun ucuna kondu. Dilini çıkarıp kar tanesi yakalamaya çalıştı.", image: "images/masalmio_logo.png" },
            { text: "Penguenler bir araya toplanıp birbirlerine sokuldular. Isınmak için böyle yapıyorlardı.", image: "images/masalmio_logo.png" },
            { text: "{{heroName}} de onlara katıldı. Ortada sıcacık bir sevgi yumağı oldular.", image: "images/masalmio_logo.png" },
            { text: "Uzakta beyaz bir ayı gördü ama ayı onları fark etmedi. Kendi yoluna, balık avlamaya gitti.", image: "images/masalmio_logo.png" },
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
            }
        });

        return story;
    }
}
