const oneriler = [
  "Bugün lavanta çayı içerek gevşemeyi deneyin.",
  "Birkaç dakika derin nefes egzersizi yapın.",
  "Bitkisel bir merhemle ellerinize bakım yapın.",
  "Boyun bölgenize sıcak havlu koyarak kaslarınızı rahatlatın.",
  "Akşam mavi ışığı azaltarak uykuya hazırlanın."
];

function gosterOneri() {
  const kutu = document.getElementById("gunluk-oneri");
  const rastgele = Math.floor(Math.random() * oneriler.length);
  kutu.textContent = oneriler[rastgele];
  kutu.style.display = "block";
}

document.getElementById("gunluk-oneri-button").addEventListener("click", gosterOneri);

  
  
  
