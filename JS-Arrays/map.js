const grades = [10, 9.5, 8, 7, 6]
let grade = 0

// Using forEach
grades.forEach((sum) => {
  grade += sum
})

console.log(grade)

// Using map() method

const newNotes = grades.map((grade) => {
  return grade + 1 >= 10 ? 10 : grade + 1
})

console.log(newNotes)
