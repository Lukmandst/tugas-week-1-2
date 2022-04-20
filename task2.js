// reverse words

const reverseWords = (text) => {
  let string = "";
  let temp = "";
  for (let i = 0; i < text.length; i++) {
    // looping untuk reverse
    if (text[i] !== " ") {
      string += text[i];
      continue;
    }
    temp = " " + string + temp;
    string = "";
  }
  return temp + " " + string;
};

let cek = reverseWords("Saya Belajar Javascript");
console.log(cek);
