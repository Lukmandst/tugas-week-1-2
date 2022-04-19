// fungsi arkFood

const arkFood = (price, voucher, range, tax) => {
  if ((price, voucher, range, tax === undefined)) {
    // validasi kelengkapan parameter
    return "Lengkapi Parameter!";
  }
  if (typeof price != "number") {
    //validasi price
    return "Harga harus berupa number";
  }
  if (typeof voucher != "string") {
    // validasi voucher
    return "Voucher harus berupa string";
  }
  if (typeof range != "number") {
    // validasi range
    return "Jarak harus berupa number";
  }
  if (typeof tax != "boolean") {
    // validasi tax
    return "Pajak harus berupa boolean";
  }
  const calculateDiscount = (price, voucher) => {
    // fungsi diskon
    if (voucher === "ARKAFOOD5" && price >= 50000) {
      // kondisi benefit voucher
      let result = price - (price * 50) / 100;
      if (result >= 50000) {
        result = 50000;
      }
      return result;
    }
    if (voucher === "DITRAKTIRDEMY" && price >= 25000) {
      // kondisi benefit
      let result = price - (price * 30) / 100;
      if (result >= 30000) {
        result = 30000;
      }
      return result;
    }
    return 0;
  };
  const deliveryFee = (range) => {
    // fungsi biaya antar
    let feeTambah = 3000; // biaya kelipatan
    let feeDefault = 5000; // biaya standard
    if (range > 2) {
      // kondisi kelipatan
      let selisih = range - 2;
      let feeAntar = feeDefault + selisih * feeTambah;
      return feeAntar;
    } else {
      return feeDefault;
    }
  };
  const taxFee = (price, tax) => {
    // fungsi pajak
    if (tax === true) {
      let result = (price * 5) / 100;
      return result;
    } else {
      return 0;
    }
  };
  // menampung hasil semua fungsi ke dalam variable
  let diskon = calculateDiscount(price, voucher);
  let biaya = deliveryFee(range);
  let pajek = taxFee(price, tax);
  let subTotal = price - diskon + biaya + pajek;
  let output = `
    Harga          : ${price}
    Potongan       : ${diskon}
    Biaya Antar    : ${biaya}
    Pajak          : ${pajek}
    SubTotal       : ${subTotal}`;
  return output;
};

// Demonstrasi
let cek = arkFood(75000, "ARKAFOOD5", 5, true);
console.log(cek);
console.log("=output kondisi normal=");
let cek1 = arkFood(110000, "ARKAFOOD5", 5, true);
let cek2 = arkFood(110000, "DITRAKTIRDEMY", 5, true);
let cek3 = arkFood(110000, "-", 5, true);
console.log(cek1);
console.log(cek2);
console.log(cek3);
console.log("=output diskon max & tanpa diskon=");
let cek4 = arkFood(10000, "DITRAKTIRDEMY", 5, false);
console.log(cek4);
console.log("=output tidak mencapai min pembelian & tanpa pajak=");
let cek5 = arkFood(110000, "DITRAKTIRDEMY", 5);
console.log(cek5);
console.log("=output jika paramater tidak lengkap=");
