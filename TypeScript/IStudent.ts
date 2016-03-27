module tsbr {
    export interface IStudent {
        name: String;
        email: String;
        age?: number;
        register(): void;
    }   
}