const students = [
    'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'
];

students.unshift('Arthur', 'Samara');

const room1 = students.slice(0, (students.length / 2));
const room2 = students.slice(students.length/2);

console.log(room1);
console.log(room2);