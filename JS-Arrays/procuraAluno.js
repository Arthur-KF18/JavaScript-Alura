const students = ['João', 'Carla', 'Juliana', 'Caio'];
const average = [10, 8, 7.5, 9];

const studentsList = [students, average];

function showNameAndScore(student) {
    if (studentsList[0].includes(student)) {
        const [students, averages] = studentsList;

        const index = students.indexOf(student);
        const studentAverage = averages[index];

        console.log(`O aluno ${student} está cadastrado e sua média é ${studentAverage}`);
    } else {
        console.log('aluno não encontrado');
    }
}

showNameAndScore('João');
showNameAndScore('Carla');
showNameAndScore('Caio');