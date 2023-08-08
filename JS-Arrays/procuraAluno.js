const students = ['João', 'Carla', 'Juliana', 'Caio'];
const average = [10, 8, 7.5, 9];

const studentsList = [students, average];

function showNameAndScore(student) {
    if (studentsList[0].includes(student)) {
        const index = studentsList[0].indexOf(student);
        const studentAverage = studentsList[1][index];

        console.log(`O aluno ${student} está cadastrado e sua média é ${studentAverage}`);
    } else {
        console.log('aluno não encontrado');
    }
}

showNameAndScore('João');
showNameAndScore('Carla');
showNameAndScore('Caio');