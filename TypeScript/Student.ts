/// <reference path="ISubscriber" />
/// <reference path="IStudent" />

module tsbr {
    export class Student implements IStudent, ISubscriber {
        constructor(public name: String, public email: String, public isSubscriber: boolean, public age?: number){}
        
        register(): void {
            console.log('Aluno cadastrado com sucesso');
        }
    }
}