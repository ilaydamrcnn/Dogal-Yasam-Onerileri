const dropdown = document.getElementById("hissetme");
const oneriAlani = document.getElementById("oneri-alani");
const videoAlani = document.getElementById("video-alani");

dropdown.addEventListener("change", function () {
  const secim = this.value;
  oneriAlani.innerHTML = "";
  videoAlani.innerHTML = "";

  if (!secim) return;

  let icerik = "";

  if (secim === "boyun") {
    icerik = `
      <h2>Boyun Ağrısı İçin Öneriler</h2>
      <ul>
        <li><strong>Bitkisel Yağlar:</strong> Lavanta ve okaliptüs yağı gibi rahatlatıcı özelliklere sahip yağlarla boyun bölgesine hafifçe masaj yapmak kas gerginliğini azaltabilir. Masajı dairesel hareketlerle ve fazla baskı uygulamadan yapmaya özen gösterin. Günde 1-2 kez uygulanabilir.</li>
        <li><strong>Kompres:</strong> Ağrının başladığı ilk 24 saat içinde şişliği ve iltihaplanmayı azaltmak için soğuk kompres kullanılmalıdır. 24 saatten sonra kasları gevşetmek ve kan dolaşımını artırmak için sıcak kompres uygulanabilir. Her iki uygulamada da 15-20 dakikadan uzun süre kompres yapılmamalıdır.</li>
        <li><strong>Egzersiz:</strong> Boyun kaslarını güçlendirmek, esnekliği artırmak ve ağrıyı azaltmak için düzenli egzersiz önemlidir. Egzersiz sırasında ani hareketlerden kaçınmalı, her hareketi yavaş ve kontrollü şekilde yapmalısınız.</li>
      </ul>
      <h3>📺 İlgili Videolar</h3>
      <ul class="video-links">
        <li><a href="https://www.youtube.com/watch?v=wPLBCyCbYgs" target="_blank">Boyun Fıtığı Egzersizleri</a></li>
        <li><a href="https://www.youtube.com/watch?app=desktop&v=X7FxeW76O2w" target="_blank">Boyun Düzleşmesi Egzersizleri</a></li>
        <li><a href="https://www.youtube.com/watch?v=odglLKNwtls" target="_blank">Boyun Kaslarını Güçlendirme</a></li>
      </ul>
      <div class="egzersiz-galeri">
        <h3>Boyun Egzersizi Adımları</h3>
        <div class="galeri">
          <img src="img/boyun1.jpg" alt="Egzersiz 1">
          <img src="img/boyun2.jpg" alt="Egzersiz 2">
          <img src="img/boyun3.jpg" alt="Egzersiz 3">
          <img src="img/boyun4.jpg" alt="Egzersiz 4">
          <img src="img/boyun5.jpg" alt="Egzersiz 5">
          <img src="img/boyun6.jpg" alt="Egzersiz 6">
          <img src="img/boyun7.jpg" alt="Egzersiz 7">
          <img src="img/boyun8.jpg" alt="Egzersiz 8">
        </div>
      </div>
      <button id="geri-btn">🔙 Geri Dön</button>
    `;
  }

  if (secim === "sirt") {
    icerik = `
      <h2>Sırt Ağrısı İçin Öneriler</h2>
      <ul>
        <ul>
  <li><strong>Bitkisel Yağlar:</strong> Biberiye, nane veya okaliptüs yağı gibi doğal yağlar, kas gevşetici ve dolaşım artırıcı özellikleriyle bilinir. Bu yağlardan birini birkaç damla taşıyıcı bir yağ (örneğin zeytinyağı veya badem yağı) ile karıştırarak sırt bölgesine nazikçe masaj yapabilirsiniz. Masajı parmak uçlarınızla dairesel hareketlerle, omurgaya baskı yapmadan uygulayın. Bu uygulama, kas liflerinde biriken laktik asit birikimini azaltabilir ve ağrıyı hafifletebilir. Günde 1-2 kez yapılması yeterlidir.</li>

  <li><strong>Kompres:</strong> Kas gerginliği kaynaklı sırt ağrılarında, özellikle uzun süreli oturma veya yanlış duruş sonrası ortaya çıkan ağrılarda, sıcak kompres oldukça etkilidir. Temiz bir havluya sarılmış sıcak su torbası veya ısıtılmış havlu, kasları gevşetip kan akışını artırarak rahatlama sağlar. Eğer ağrı travmaya bağlıysa (örneğin düşme ya da ani zorlanma), ilk 24 saat içinde şişliği ve iltihabı azaltmak amacıyla soğuk kompres tercih edilmelidir. Her iki kompres yöntemi de 15-20 dakika süreyle ve günde 2-3 kez uygulanmalıdır. Deriye doğrudan temas ettirilmemeli, ince bir bez kullanılmalıdır.</li>

  <li><strong>Egzersiz:</strong> Sırt kaslarını esnetmek, omurgayı destekleyen kas gruplarını güçlendirmek ve ağrıyı azaltmak için düzenli egzersiz oldukça önemlidir. Öne doğru eğilme, geriye esneme, gövde döndürme ve kedi-deve pozisyonu gibi hareketler başlangıç seviyesinde uygundur. Bu egzersizler, kasları hem esnek tutar hem de omurgaya binen yükü azaltır. Her egzersiz yavaş ve kontrollü yapılmalı, ani veya zorlayıcı hareketlerden kaçınılmalıdır. Günlük olarak 10-15 dakikalık bir egzersiz rutini sırt sağlığı açısından faydalı olacaktır.</li>
</ul>

      <h3>📺 İlgili Videolar</h3>
      <ul class="video-links">
        <li><a href="https://www.youtube.com/watch?v=ZKME0gKMAz8" target="_blank">Sırt Rahatlatıcı Yoga</a></li>
        <li><a href="https://www.youtube.com/watch?v=QOVaHwm-Q6U" target="_blank">Evde Sırt Ağrısı Egzersizleri</a></li>
        <li><a href="https://www.youtube.com/watch?v=2qZ517Rw7ME" target="_blank">Sırt Kaslarını Güçlendirme</a></li>
      </ul>
      <div class="egzersiz-galeri">
        <h3>Sırt Egzersizi Adımları</h3>
        <div class="galeri">
          <img src="img/sırt1.jpg" alt="Egzersiz 1">
          <img src="img/sırt2.jpg" alt="Egzersiz 2">
          <img src="img/sırt3.jpg" alt="Egzersiz 3">
          <img src="img/sırt4.jpg" alt="Egzersiz 4">
          <img src="img/sırt5.jpg" alt="Egzersiz 5">
          <img src="img/sırt6.jpg" alt="Egzersiz 6">
          <img src="img/sırt7.jpg" alt="Egzersiz 7">
        </div>
      </div>
      <button id="geri-btn">🔙 Geri Dön</button>
    `;
  }

  if (secim === "bacak") {
    icerik = `
      <h2>Bacak Ağrısı İçin Öneriler</h2>
      <ul>
        <ul>
  <li><strong>Bitkisel Yağlar:</strong> Lavanta yağı, sakinleştirici ve rahatlatıcı özellikleriyle bilinir. Özellikle kas ağrılarını hafifletmeye ve kasları gevşetmeye yardımcı olabilir. Lavanta yağı, taşıyıcı yağlarla (örneğin zeytinyağı, tatlı badem yağı) karıştırılarak bacak bölgesine nazikçe masaj yapılarak uygulanabilir. Masaj sırasında kasların gerginliğini hafifletmek için yavaş ve dairesel hareketler kullanılmalıdır. Bu işlem, bacaklardaki kan dolaşımını hızlandırır, rahatlatıcı bir etki yaratır ve gün içinde yaşanabilecek bacak yorgunluğunu azaltır. Günde 1-2 kez uygulanması yeterlidir.</li>

  <li><strong>Kompres:</strong> Bacak gerginliği ve kas ağrılarını hafifletmek için sıcak su torbası veya ısıtılmış havlu ile kompres yapılabilir. Isı, kasları gevşetir ve kan dolaşımını artırarak bacaklardaki gerginliği azaltır. Kompresin, bacakların gergin olduğu bölgelere (örneğin baldır veya uyluk) yerleştirilmesi önerilir. 15-20 dakika boyunca bu uygulama yapılabilir. Eğer bacak ağrısı bir travma sonucu oluşmuşsa veya iltihap varsa, ilk 24 saat içinde soğuk kompres uygulamak daha faydalıdır. Soğuk kompres, şişlik ve iltihaplanmayı azaltmaya yardımcı olur.</li>

  <li><strong>Egzersiz:</strong> Bacak kaslarını güçlendirmek ve esnekliğini artırmak için düzenli egzersizler yapmak önemlidir. Özellikle diz çevresindeki kasları hedef alan egzersizler, bacak ağrılarını önleyebilir ve mevcut ağrıların hafiflemesine yardımcı olabilir. Basit egzersizler arasında bacak kaldırma, diz üstü germe, bacak esnetme ve çömelme hareketleri yer alır. Bu egzersizler, kasları güçlendirirken aynı zamanda eklem sağlığını da destekler. Her hareket yavaşça ve kontrollü bir şekilde yapılmalı, ani hareketlerden kaçınılmalıdır. Haftada 3-4 gün, 10-15 dakika boyunca yapılan egzersizler etkili olabilir.</li>
</ul>

      </ul>
      <h3>📺 İlgili Videolar</h3>
      <ul class="video-links">
        <li><a href="https://www.youtube.com/watch?v=wPLBCyCbYgs" target="_blank">Bacak Egzersizleri</a></li>
        <li><a href="https://www.youtube.com/watch?app=desktop&v=X7FxeW76O2w" target="_blank">Bacak Kaslarını Güçlendirme</a></li>
        <li><a href="https://www.youtube.com/watch?v=odglLKNwtls" target="_blank">Bacak Kaslarını Rahatlatma</a></li>
      </ul>
      <div class="egzersiz-galeri">
        <h3>Bacak Egzersizi Adımları</h3>
        <div class="galeri">
          <img src="img/bacak1.jpg" alt="Egzersiz 1">
          <img src="img/bacak2.jpg" alt="Egzersiz 2">
          <img src="img/bacak3.jpg" alt="Egzersiz 3">
          <img src="img/bacak4.jpg" alt="Egzersiz 4">
        </div>
      </div>
      <button id="geri-btn">🔙 Geri Dön</button>
    `;
  }

  oneriAlani.innerHTML = icerik;
  oneriAlani.style.display = "block";


  const geriBtn = document.getElementById("geri-btn");
  if (geriBtn) {
    geriBtn.addEventListener("click", function () {
      dropdown.value = "";
      oneriAlani.innerHTML = "";
      videoAlani.innerHTML = "";
    });
  }
});



