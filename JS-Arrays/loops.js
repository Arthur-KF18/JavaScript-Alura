// Basic For loop
const numbers = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// Average from students

const grades = [10, 6.5, 8, 7.5];
let gradesSum = 0;

for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];
    gradesSum += grade;
}

const average = (gradesSum / grades.length);
console.log(`A média do aluno foi de ${average}`);

// using `for of` to calc the average of the students

const grades2 = [10, 6.5, 8, 7.5];
let grades2Sum = 0;

for (let element of grades2) {
    grades2Sum += element;
}

const average2 = (grades2Sum / grades2.length)
console.log(`A média do segundo aluno é: ${average2}`)

// Quick example for verification of Even Numbers

const evenNumbers = [];

for (let i = 0; i <= 100; i += 2) {
    evenNumbers.push(i);
}
console.log(evenNumbers);

// Using forEach to average score of students

const grades3 = [8, 10, 6, 7];
let sumGrades3 = 0;

grades3.forEach((grade) => {
    sumGrades3 += grade;
})

const average3 = (sumGrades3 / grades3.length);
console.log(`A nota do terceiro aluno é ${average3}`)


