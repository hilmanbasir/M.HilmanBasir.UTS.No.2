function hitungBeratBadanIdeal() {
    const tinggi = parseFloat(document.getElementById("height").value);
    
    let beratBadanIdeal = 0;
  
    beratBadanIdeal = (tinggi - 100) - ((tinggi - 100) * 10 / 100);
    
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Berat badan ideal anda adalah: ${beratBadanIdeal.toFixed(1)} kg`;
  }
  
  function reset() {
    document.getElementById("height").value = "0"
    document.getElementById("result").innerHTML = "0"
  }