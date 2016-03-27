var Student = (function () {
    function Student(name, email, isSubscriber, age) {
        this.name = name;
        this.email = email;
        this.isSubscriber = isSubscriber;
        this.age = age;
    }
    Student.prototype.register = function () {
        console.log('Aluno cadastrado com sucesso');
    };
    return Student;
}());
var student = new Student("Carlos", "carlos.fattor@gmail.com", true, 36);
function run(student) {
    student.register();
}
;
