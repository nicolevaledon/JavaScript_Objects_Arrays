console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(num) {
  let sum = 0;

  /*for (let i = 0; i < num.length; i++) {
    sum += num[i];
    console.log(sum);
  }*/

  num.forEach(function (element) {
    sum += element;
  });
  return sum;
}
console.log(arraySum(numbers));

//arraySum(numbers);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

/*const book = {
  title: "Tender is the Flesh",
  author: "Agustina Bazterrica",
  pages: 224,
  read: 1,

  bookSent() {
    console.log(
      `The book ${this.title} by ${this.author} has ${this.pages} pages. I have read it ${this.read} time, great story. I fully recommend it.`
    );
  },
};
book.bookSent();
*/

const book = {};

book.title = "Tender is the Flesh";
book.author = "Agustina Bazterrica";
book.numPages = 244;
book.read = 1;
book.info = function () {
  return `The book ${this.title} by ${this.author} has ${this.numPages} pages. I have read it ${this.read} time, great story. I fully recommend it.`;
};

console.log(book.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";
const words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
  // Para nombrar a cada palabra se utiliza = words[i]
  const letters = words[i].split("");
  letters.reverse();
  words[i] = letters.join("");
}
const result = words.join(" ");
console.log(result);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

const lines = csvData.split("\n");
const headers = lines[0].split(",");

const resultArray = [];
for (let i = 1; i < lines.length; i++) {
  const data = lines[i].split(",");
  const testObj = {
    name: data[0],
    age: data[1],
  };
  resultArray.push(testObj);
}
console.log(resultArray);
