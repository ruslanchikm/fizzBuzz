
// Execticiul 1

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzz');
        }
         else if (i % 3 === 0) {
            console.log('Fizz');
        }
        else if ( i % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
  
    }
}

fizzBuzz();

// Exercitiul 2

function findMissingNumber(arr) {
    if (!Array.isArray(arr)) {
      return "Argumentul dat nu este un array.";
    }
  
    const n = arr.length + 1; // Numărul total de elemente, inclusiv numărul lipsă
    const expectedSum = (n * (n + 1)) / 2; // Suma elementelor dintr-un array complet
  
    const actualSum = arr.reduce((acc, current) => acc + current, 0);
  
    const missingNumber = expectedSum - actualSum;
  
    return missingNumber;
  }
  
  const cifre = [1, 2, 3, 5]; 
  const numarLipsa = findMissingNumber(cifre);
  console.log(`Numărul lipsă este: ${numarLipsa}`);
  