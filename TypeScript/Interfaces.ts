/// <reference path="Student" />


module tsbr{
     
    var student = new Student("Carlos", "carlos.fattor@gmail.com", true, 36);

    function run(student: Student) {
        student.register();
    };
    
    run(student);
}
