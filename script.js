
function createLetterAndDigitArray() {
    const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65)); // A-Z
    letters.push(...Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97))); // a-z
    const digits = Array.from({ length: 10 }, (_, i) => String(i)); // 0-9
  
    return letters.concat(digits); 
  }
  
  function makeid(l) {
    const chars = createLetterAndDigitArray(); 
        let result = '';
  
    for (let i = 0; i < l; i++) {
      const index = Math.floor(Math.random() * chars.length);
      result += chars[index];
    }
  
    return result;
  }
  

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
