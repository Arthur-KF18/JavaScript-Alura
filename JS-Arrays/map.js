const grades = [10, 9.5, 8, 7, 6]
let grade = 0

// Using forEach
grades.forEach((sum) => {
  grade += sum
})

console.log(grade)

// Using map() method

const newNotes = grades.map((grade) => grade + 1 >= 10 ? 10 : grade + 1)
console.log(newNotes)

// Using Reduce method

const resultOfGrades = grades.reduce((acc, cv) => acc + cv, 0)
console.log(resultOfGrades)

// Making all words with the first one of the name uppercase

const names = ['ana Julia', 'Caio vinicius', 'BIA silva']
const standardNames = names.map((name) => name.toUpperCase())

console.log(standardNames)
