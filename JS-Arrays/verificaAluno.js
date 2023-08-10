const students = ['Ana', 'Marcos', 'Maria', 'Mauro']
const averages = [7, 4.5, 8, 7.5]

const reproved = students.filter((_, index) => averages[index] >= 7)

console.log(reproved)

// Using reduce method for calculating the average of 3 rooms of students

const roomJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const roomJava = [6, 5, 8, 9, 5, 6]
const roomPython = [7, 3.5, 9, 9.5]

function calcAverage(roomGrade) {
  const sumRoomGrade = roomGrade.reduce((acc, grade) => acc + grade, 0)

  const average = sumRoomGrade / roomGrade.length

  return average
}

console.log(`A média da sala de JS é ${calcAverage(roomJs)}`)
console.log(`A média da sala de Java é ${calcAverage(roomJava)}`)
console.log(`A média da sala de Python é ${calcAverage(roomPython)}`)
