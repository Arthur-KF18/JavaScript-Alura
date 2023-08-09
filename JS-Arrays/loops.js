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

