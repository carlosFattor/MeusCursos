/// <reference path="ISubscriber" />
/// <reference path="IStudent" />
var tsbr;
(function (tsbr) {
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
    tsbr.Student = Student;
})(tsbr || (tsbr = {}));
