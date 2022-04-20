// Membuat method/function membagi dan mengurutkan

const divideAndSort = (deretAngka) => {
  if (typeof deretAngka != "number") {
    // validasi
    return "Input harus berupa bilangan integer!";
  }
  let angkaString = deretAngka.toString(); // mengubah integer menjadi string
  let angkaTerpisah = angkaString.split(0); // memisahkan angka dengan split
  // console.log(angkaTerpisah);
  // destructuring, menampung setiap index pada variable baris1,2,3
  let baris1 = [...angkaTerpisah[0]];
  let baris2 = [...angkaTerpisah[1]];
  let baris3 = [...angkaTerpisah[2]];
  // mengurutkan secara asc dengan sort method
  baris1.sort((a, b) => {
    return a - b;
  });
  baris2.sort((a, b) => {
    return a - b;
  });
  baris3.sort((a, b) => {
    return a - b;
  });
  let gabung = [...baris1, ...baris2, ...baris3]; // membuat array baru berisikan value yang telah diurutkan
  let result = gabung.join(""); // string baru yang berisikan semua element di dalam array gabung
  let final = parseInt(result); // mengkonversi string menjadi number
  // console.log(typeof final);
  return final;
};

// demonstrasi
let angka = divideAndSort(5956560159466056);
console.log(angka);
