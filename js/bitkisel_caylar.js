// Bu örnekte basit bir JavaScript kodu eklenmiştir, ancak bu örnek statik içerik olduğu için herhangi bir işlem yapılmamaktadır.
// Ancak, ileride dinamik özellikler eklemek isterseniz buraya yazabilirsiniz.

// Örnek: Sayfa yüklendiğinde konsola mesaj yazdırma
window.onload = function() {
    console.log("Bitkisel Çaylar Sayfası Yüklendi!");
  };
  // Aktarlar bilgisine tıklanıldığında daha fazla bilgi göstermek için
document.querySelectorAll('.shop-list li').forEach(item => {
    item.addEventListener('click', () => {
        alert("Daha fazla bilgi almak için aktarı arayabilirsiniz.");
    });
});
