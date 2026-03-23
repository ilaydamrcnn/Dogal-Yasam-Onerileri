const buttons = [
    { buttonId: "ses1", audioId: "audio1", progressId: "progress1", containerId: "progress-container1", backgroundImage: "url('img/yağmur.jpg')" },
    { buttonId: "ses2", audioId: "audio2", progressId: "progress2", containerId: "progress-container2", backgroundImage: "url('img/deniz.jpg')" },
    { buttonId: "ses3", audioId: "audio3", progressId: "progress3", containerId: "progress-container3", backgroundImage: "url('img/doğa.jpg')" }
];

const audios = buttons.map(item => document.getElementById(item.audioId));
const btnElements = buttons.map(item => document.getElementById(item.buttonId));
const heroSection = document.getElementById("hero-section"); // Hero section'ı alıyoruz

buttons.forEach((item, index) => {
    const button = document.getElementById(item.buttonId);
    const audio = document.getElementById(item.audioId);
    const progress = document.getElementById(item.progressId);
    const container = document.getElementById(item.containerId);
    const icon = button.querySelector(".icon");

    button.addEventListener("click", () => {
        // Diğer sesleri durdur
        audios.forEach((otherAudio, i) => {
            if (i !== index) {
                otherAudio.pause();
                otherAudio.currentTime = 0;
                const otherIcon = btnElements[i].querySelector(".icon");
                otherIcon.textContent = "▶"; // Başka sesler durdurulduğunda ikonları '▶' yap
            }
        });

        // Ses çalmıyor, çalmasını sağla
        if (audio.paused) {
            audio.play();
            icon.textContent = "⏸"; // Ses çalmaya başladığında ikon '⏸' olacak
            // Hero bölümünün arka planını değiştir
            heroSection.style.backgroundImage = item.backgroundImage; 
        } else {
            audio.pause();
            icon.textContent = "▶"; // Ses durduğunda ikon '▶' olacak
            // Arka planı eski haline getir (varsayılan)
            heroSection.style.backgroundImage = ""; 
        }
    });

    // Ses bittiğinde ikon ve progress bar sıfırlanacak
    audio.addEventListener("ended", () => {
        icon.textContent = "▶"; // Ses bittiğinde ikon '▶' olacak
        progress.style.width = "0%"; // Progress bar sıfırlanacak
        // Arka planı eski haline getir
        heroSection.style.backgroundImage = ""; 
    });

    // Progress bar'ı güncelleme
    audio.addEventListener("timeupdate", () => {
        if (audio.duration > 0) {
            const percent = (audio.currentTime / audio.duration) * 100;
            progress.style.width = `${percent}%`; // Progress bar'ı güncellerken template literal kullandım
        }
    });

    // Oynatma çubuğuna tıklanırsa ses ileri/geri alınacak
    container.addEventListener("click", (e) => {
        const rect = container.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percent = clickX / rect.width;
        audio.currentTime = percent * audio.duration; // Tıklanan konumda sesin zamanını ayarlar
    });
});

// 🌙 Dark Mode Butonunu işleme alma
const darkModeToggle = document.getElementById("darkModeToggle");

// Daha önce kaydedilmiş mod varsa onu uygula
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀ Light Mode";
}

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Buton ikonunu değiştir
    const isDark = document.body.classList.contains("dark-mode");
    darkModeToggle.textContent = isDark ? "☀ Light Mode" : "🌙 Dark Mode";

    // Hero bölümünün arka planını koyu moda göre güncelle
    if (isDark) {
        heroSection.style.backgroundImage = "url('img/dark-background.jpg')";  // Örneğin, koyu mod için farklı bir arka plan
    } else {
        heroSection.style.backgroundImage = ""; // Varsayılan arka plan
    }

    // Kalıcılık için localStorage’a kaydet
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
});




  
  
  

