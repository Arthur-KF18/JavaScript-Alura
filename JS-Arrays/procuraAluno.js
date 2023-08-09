const students = ['João', 'Carla', 'Juliana', 'Caio'];
const average = [10, 8, 7.5, 9];

const studentsList = [students, average];

function showNameAndScore(student) {
    if (students.includes(student)) {

        const index = students.indexOf(student);
        const studentAverage = average[index];

        return `O aluno ${student} está cadastrado e sua média é ${studentAverage}`;
    } else {
        console.error(`Aluno não encontrado`);
    }
}

console.log(showNameAndScore('João'));
showNameAndScore('Fernando');