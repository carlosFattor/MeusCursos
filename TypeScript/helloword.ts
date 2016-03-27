//Tipos
var lista:number[] = [1,2,3];
var lista2: Array<number> = [1,2,3];
var lista3: Array<String> = [ "Carlos","Fattor"];
enum Color{Red, Green, Blue};
enum Color2{Red = 1, Green = 2, Blue = 4};
var c: Color = Color.Blue;
var colorName :String = Color[2];
var notSure: any = 4;
notSure = "maybe a string";
notSure = false;
var lista4:any[] = [1,true,"free"];
lista4[0] = 100;


interface IPerson {
    firstName: String;
    lastName: String;
}

class Student {
    fullName: String;
    constructor(public firstName, public lastName){
        this.fullName = firstName + ' ' +lastName;
    }
}

function say(person: IPerson){
       return "Hello " + person;
}

var user = new Student("Carlos", "Fattor");

console.log(say(user));