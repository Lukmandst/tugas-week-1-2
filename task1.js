// Deteksi Palindrom

function palindrom(text) {
  if (typeof text != "string") {
    //validasi jenis text
    return "teks harus berupa string";
  }
  const textKecil = text.toLocaleLowerCase(); // mengubah ke lowercase
  let arrOfText = [...textKecil]; // lalu dimasukan ke dalam array
  let string = "";
  for (let i = arrOfText.length - 1; i >= 0; i--) {
    // looping untuk reverse
    string += arrOfText[i];
  }
  if (string == textKecil) { // validasi palindrom
    return `teks ${text} adalah palindrom`;
  }
  return `teks ${text} bukan palindrom`;
}

// demonstrasi
const cekPal = palindrom("mayam");
console.log(cekPal);
