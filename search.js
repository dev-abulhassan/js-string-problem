const songName = "tumi bondhu kala pakhi, ami jeno ki...! bosonto batase tomay dhorte pari ni"
const searchLyric = "pakhi";
const doseExistLine = songName.toLowerCase().includes(searchLyric.includes);
console.log(doseExistLine);
const doseExistOneLine = songName.toLowerCase().includes(searchLyric.toLowerCase());
console.log(doseExistOneLine);

let myName = "Adnan Hasan";
console.log(myName.startsWith("Adnan"));