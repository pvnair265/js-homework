export class ErrorModel {
    public email: string;
    public firstname: string;
    public lastname: string;

    constructor(email?: string, firstname?:string, lastname?: string){
        email = this.email;
        firstname = this.firstname;
        lastname = this.lastname;

    }
}