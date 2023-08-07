const students = [
    'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'
];

const room1 = students.slice(0, (students.length / 2));
const room2 = students.slice(students.length/2);

console.log(room1);
console.log(room2);

const room3 = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
room3.splice(1, 2, 'Rodrigo');

console.log(room3);

const combinedRooms = students.concat(room1);
console.log(combinedRooms)

const grades = [10, 6.5, 8, 7.5, 8];
const studentsTable = [room3, grades];

console.log(studentsTable)
console.log(`O aluno da posicao 2 é ${studentsTable[0][2]} e sua média foi ${studentsTable[1][2]}`);
