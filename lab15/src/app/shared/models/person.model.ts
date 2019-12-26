export class Person {
    public id: number;
    public firstname: string;
    public lastname: string;
    public phone: number;
    constructor(firstname: string, lastname: string, id?: number, phone?:number) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
    }
}