// Deteksi Palindrom

function palindrom(text) {
  if (typeof text != "string") {
    //validasi jenis text
    return "teks harus berupa string";
  }
  const textKecil = text.toLocaleLowerCase(); // mengubah ke lowercase
  let string = ""; // variable kosong sebagai penampung
  for (let i = textKecil.length - 1; i >= 0; i--) {
    // looping untuk reverse
    string += textKecil[i];
  }
  if (string == textKecil) {
    // validasi palindrom
    return `teks ${text} adalah palindrom`;
  }
  return `teks ${text} bukan palindrom`;
}

// demonstrasi
const cekPal = palindrom("MalaM");
console.log(cekPal);
const cekPal1 = palindrom("aYaM");
console.log(cekPal1);
