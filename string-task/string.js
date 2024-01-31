// // Task-1: Count how many times a string has the letter a

// let dummy =
//   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur culpa laudantium ex fuga voluptatem quibusdam porro. Rerum ratione voluptas qui placeat, veritatis voluptatum amet? Sed, in quidem adipisci magni optio hic molestias officia, minima non ut ab? Ipsa hic facilis natus itaque ut aliquid inventore tempore in iste officiis! Vero.";

// let str = 0;
// for (let i = 0; i < dummy.length; i++) {
//   if (dummy[i] === "a") {
//     str++;
//   }
// }
// console.log(str);

// // Task-2: Count how many times a string has the letter a or A
// let dummy2 =
//   "Lorem ipsum, dolor sit Amet consectetur adipisicing elit. Consectetur culpa laudantium ex fuga voluptatem quibusdam Ameno. Rerum ratione voluptas Aiod placeat, veritatis voluptatum amet? Sed, in quidem adipisci magni optio hic molestias officia, minima non ut ab? Ipsa hic facilis natus itaque ut aliquid inventoAre tempore in iste officiis! Vero.";

// let str2 = 0;
// for (let i = 0; i < dummy2.length; i++) {
//   if (dummy2[i] === "a" || dummy2[i] === "A") {
//     str2++;
//   }
// }
// console.log(str2);
// // using split().filter()
// let findText = dummy2.split("").filter((i) => i === "a" || i === "A").length;
// console.log(findText);

// // Check whether a string contains all the vowels a, e, i, o, u
// let dummy3 =
//   "Lorem ipsum, dolor sit Amet aeiouconsectetur adipisicing elit. Consectetur culpa laudantium ex fuga voluptatem quibusdam Ameno. Rerum ratione voluptas Aiod placeat, veritatis voluptatum amet? Sed, in quidem adipisci magni optio hic molestias officia, minima non ut ab? Ipsa hic facilis natus itaque ut aliquid inventoAre tempore in iste officiis! Vero.";

// const checkVowels = (text) => {
//   let vowel = ["a", "e", "i", "o", "u"];

//   for (let i = 0; i < vowel.length; i++) {
//     if (!text.toLowerCase().includes(vowel[i])) {
//       return false;
//     }
//   }
//   return true;
// };

// const exampleText = "This is an exoample text contuaining all vowels";
// const result = checkVowels(exampleText);

// if (result) {
//   console.log("The text contains all the vowels.");
// } else {
//   console.log("The text does not contain all the vowels.");
// }

// Task-4: If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let dummy4 =
  "xemon is pot seifo juhed wekas Xiol jeknl denos ta Xiom piY and xeano hisa ya";

let modified = "";
modified = dummy4.replace(/x/g, "y");
modified = modified.replace(/X/g, "Y");
console.log(modified);

// Task-5: Capitalize Every first Letter of each word in a String

let doCap = "Capitalize Every first Letter of each word in a String";

console.log(doCap.replace(/\b\w/g, (char) => char.toUpperCase()));
