// reverse words

const reverseWords = () => {
  let text = ["Saya", "Belajar", "Javascript"];
  let string = "";
  for (let i = text.length - 1; i >= 0; i--) {
    // looping untuk reverse
    string += text[i]+ " ";
  }
  return string;
};

let cek = reverseWords();
console.log(cek);

