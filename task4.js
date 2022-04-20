const divideAndSort = (deretAngka) => {
  if (typeof deretAngka != "number") {
    // validasi
    return "Input harus berupa bilangan integer!";
  }
  let angkaString = deretAngka.toString(); // mengubah integer menjadi string
  let angkaTerpisah = angkaString.split(0); // memisahkan nomor jika ada 0
  let result = angkaTerpisah.map((el) => el.split("")); // memisahkan jika bertemu string
  let sorted = result.sort((a, b) => a - b); // sortir ascending
  let joined1 = sorted.map((el) => el.join("")); // menggabungkan kembali dengan pemisah string
  let final = joined1.join(""); // menggabungkan dan mereturn value dalam variable
  console.log(result);
  return final;
};

let cek = divideAndSort(5956560159466056);
console.log(cek);