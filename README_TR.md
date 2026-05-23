# 🪂 Kick Paraşüt Atlama Oyunu (Battle Royale & Hybrid Edition)

Bu proje, Kick canlı yayınlarınızda izleyicilerinizin sohbetten yazdıkları komutlarla paraşütle atlayıp hedefe inmeye çalıştığı, tamamen tarayıcı tabanlı (HTML5/CSS3/JS) premium bir **canlı yayın etkileşim overlay'idir.**

Geliştirilen dinamik melez (hybrid) Battle Royale lobi sistemi, interaktif sabote komutları ve özel pastel tasarım özellikleri ile chatinizi tamamen ekrana kilitleyecektir!

---

## 🎮 Nasıl Oynanır? (How to Play)

Oyun iki farklı modda çalışabilir: **Tekil Atlama (Klasik)** ve **Battle Royale (Toplu Atlama)**.

### 1. İzleyici Sohbet Komutları

| Komut | Açıklama | Yetki |
| :--- | :--- | :--- |
| **`!atla`** | **Lobi Kapalıyken:** İzleyiciyi hemen tekil olarak gökyüzünden atlatır.<br>**Lobi Açıkken:** İzleyiciyi toplu atlama kuyruğuna (lobiye) kaydeder. | **Herkes** |
| **`!kes`** | Oyuncu havada süzülürken ipini keser ve serbest düşüşe (hızlı iniş) geçer. Doğru zamanlama ile hedefin 100 puanlık merkezini vurmayı kolaylaştırır. | **Herkes (Yalnızca Kendisi İçin)** |

---

## 👑 Yayıncı & Moderatör Özel Komutları (Admin Commands)

Yayın akışını yönetmek ve chati trolleme/destekleme dinamiklerini kontrol etmek için yayıncı (`beryybob`) ve moderatör botlar (`botrix`, `kickbot` vb.) aşağıdaki özel yetkili komutları kullanabilir:

| Komut | Açıklama | Yetki |
| :--- | :--- | :--- |
| **`!topluatla`** | Ekranın üst ortasında **20 saniyelik Battle Royale Lobisini** ve sayacı başlatır. Lobi açıkken chatin `!atla` yazarak sıraya girmesi istenir. | **Yayıncı & Modlar** |
| **`!kes @kullanıcı`** | Havada süzülen belirli bir izleyicinin paraşüt ipini sabote ederek/yardımcı olarak anında keser! *(Örn: `!kes @kilerh47`)* | **Yayıncı & Modlar** |
| **`!rastgelekes`** | Havada süzülen aktif oyunculardan **rastgele birinin** ipini kesip onu terminal hızda aşağı fırlatır! (Muazzam bir troll komutudur). | **Yayıncı & Modlar** |
| **`!skorsifirla`** | LocalStorage'da kayıtlı olan tüm zamanların en yüksek skorlarını sıfırlar. Yeni bir yayın gününde skorları sıfırdan başlatmak için idealdir. | **Yayıncı & Modlar** |

💡 **NOT:** İnsan moderatörlerinizin (örneğin `aybuu`, `bigfiggings` veya `tiriviri`) bu yetkili komutları kullanabilmesi için yetkilendirmek isterseniz, `index.html` dosyası içindeki `MODERATORS` listesine kullanıcı adlarını küçük harflerle eklemeniz yeterlidir.

---

## 🏆 Canlı Skor Tablosu (Persistent Leaderboard)

Oyun, hedefe en iyi iniş yapan **En İyi 5 Oyuncunun (All-Time Top 5)** skorlarını ekranın sağ üst köşesinde bulunan şık ve yarı transparan (glassmorphic) bir kartta canlı olarak listeler.

* **Kalıcı Depolama (LocalStorage):** Skorlar tarayıcının yerel hafızasında saklanır. OBS Studio kapatılsa veya bilgisayar yeniden başlatılsa bile, tarayıcı kaynağı önbelleği sıfırlanmadığı sürece skorlar kalıcı kalır.
* **Kişisel En İyi Skor:** Bir oyuncu birden fazla iniş yaptığında, skor tablosundaki değeri sadece kendi kişisel rekorunu (en yüksek derecesini) kırdığında güncellenir.
* **Şampiyon Vurgusu:** Birinci sıradaki (1st) oyuncu altın renkli bir taç (`👑`) ile listelenir ve satırı tatlı bir parıltı efektiyle vurgulanır. İkincilik (2nd) gümüş, üçüncülük (3rd) ise bronz renklerle belirtilir.

---

## 🛠️ OBS Studio Entegrasyonu & Kurulumu

Oyun, tarayıcı tabanlı çalıştığı için OBS Studio'da bir **Tarayıcı Kaynağı (Browser Source)** olarak kolayca eklenebilir.

### Adım Adım Kurulum:
1. Projenizi GitHub Pages veya benzeri bir hosting platformunda yayınlayın (Örn: `https://kilerh47.github.io/kick-dropper-game`).
2. OBS Studio'yu açın.
3. **Kaynaklar** panelinden `+` butonuna tıklayıp **Tarayıcı (Browser)** seçeneğini ekleyin.
4. **URL** kısmına oyununuzun canlı adresini yapıştırın.
5. **Genişlik (Width):** `1920` ve **Yükseklik (Height):** `1080` olarak ayarlayın.

---

## 🧠 Akıllı Geliştirici Test Paneli (Developer UI)

Geliştirme aşamasında oyunu test etmeyi kolaylaştırmak için sol üst köşeye yarı transparan bir **Test Paneli** entegre edilmiştir.

* 🖥️ **Production / OBS Güvenliği:** Canlı yayında OBS Browser Source'da test panelinin görünmemesi için akıllı kontrol eklenmiştir. Sayfa canlı sunucuda (http/https) açıldığında test paneli **DOM'dan tamamen silinir.**
* 💻 **Local Test:** Dosyayı bilgisayarınızda çift tıklayarak yerel dosya protokolüyle (`file://`) açtığınızda panel otomatik olarak belirir ve test etmenizi sağlar.
* 👁️ **OBS'te Gösterme Parametresi:** Eğer test panelini OBS'te veya canlı web linkinde özellikle görmek isterseniz, URL'nin sonuna **`?test=true`** parametresini ekleyebilirsiniz (Örn: `index.html?test=true`).

---

## 🎨 Tasarım & Renk Paleti

Overlay arayüzü, yayın ekranlarında gözü yormayacak şekilde son derece premium ve uyumlu **Luna Pastel Pembe & Kakao** renk paletiyle giydirilmiştir:
- **Ana Pembe / Çerçeveler:** `#ffcbdb` (Aesthetic Pembe)
- **Arka Planlar / Gölgeler:** `rgba(103, 71, 70, 0.85)` (`#674746` Luna Koyu Kakao)
- **Süre Çubuğu:** `#ffcbdb` ile `#fbc0b4` (Luna Şeftali) arasında akan yumuşak gradyan.
- **Yazılar & Vurgular:** `#FFD9D1` ve `#fac4b3`
- **İniş Efektleri:** Karakterler hedefe konduğunda veya yere düştüğünde ayaklarında beliren **hareketli pembe/şeftali toz halkası ve su sıçraması (landing splash)** animasyonu.
