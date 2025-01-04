interface Person{
    name:string;
    age:number;
    greet():void
}
class User implements Person{
    constructor(public name:string,public age:number){

    }
    greet(): void {
        console.log(`Hellow my name is ${this.name}`)
    }
}

const user = new User("Rasel",30);

user.greet()