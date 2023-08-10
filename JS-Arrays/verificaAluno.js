const students = ['Ana', 'Marcos', 'Maria', 'Mauro']
const averages = [7, 4.5, 8, 7.5]

const reproved = students.filter((_, index) => averages[index] >= 7)

console.log(reproved)
