// Sayfa yüklendiğinde tüm olay dinleyicilerini kur
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("yanik-form");
    if (form) form.addEventListener("submit", handleFormSubmit);

    setupReadMoreButtons();
});

// Anket formu gönderildiğinde çalışır
function handleFormSubmit(event) {
    event.preventDefault();

    const renk = getCheckedValue("renk");
    const kabarcik = getCheckedValue("kabarcik");
    const agri = getCheckedValue("agri");

    if (renk && kabarcik && agri) {
        const yanikDerecesi = belirleYanıkDerecesi(renk, kabarcik, agri);
        gosterSonuc(yanikDerecesi);
    } else {
        alert("Lütfen tüm soruları cevaplayın.");
    }
}

// Seçilen input değerini alır
function getCheckedValue(name) {
    const input = document.querySelector(`input[name="${name}"]:checked`);
    return input ? input.value : null;
}

// Yanık derecesini belirler
function belirleYanıkDerecesi(renk, kabarcik, agri) {
    if (renk === "kirmizi" && kabarcik === "hayir" && agri === "hafif") {
        return "1. Derece Yanık";
    }
    if (renk === "beyaz" && kabarcik === "evet" && agri === "orta") {
        return "2. Derece Yanık";
    }
    if (renk === "siyah" && kabarcik === "evet" && agri === "siddetli") {
        return "3. Derece Yanık (Acil Durum!)";
    }
    return "Yanık Derecesi Belirlenemedi";
}

// Sonucu kullanıcıya gösterir
function gosterSonuc(yanikDerecesi) {
    const sonucElement = document.getElementById("sonuc");
    sonucElement.textContent = `Yanık Dereceniz: ${yanikDerecesi}`;
    if (yanikDerecesi === "1. Derece Yanık") {
        document.getElementById("aloe-vera-detay").style.display = "block";
        document.getElementById("soguk-su-detay").style.display = "block";
    } else if (yanikDerecesi === "3. Derece Yanık (Acil Durum!)") {
        alert("Acil bir sağlık kuruluşuna başvurun!");
    }
}

// "Devamını Oku" butonlarını işle
function setupReadMoreButtons() {
    const buttons = document.querySelectorAll(".read-more");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const target = document.getElementById(button.dataset.target);
            target.classList.toggle("gizle");
        });
    });
}


  function yorumlariGoster() {
    const icerik = document.getElementById("yorumIcerik");
    const buton = document.getElementById("yorumBtn");
    
    if (icerik.style.display === "none") {
      icerik.style.display = "block";
      buton.textContent = "Yorumları Gizle";
    } else {
      icerik.style.display = "none";
      buton.textContent = "Yorumları Göster";
    }
  }

