interface Vehicle {
    make: string;
    model: string;
    year: number;
    color?: string;//optional property
    start(): void; //method
}

const myCar: Vehicle={
    make: 'Toyota',
    model: 'Corolla',
    year: 2015,
    start: function(){
        console.log('Engine started');
    }
}
console.log(myCar.make); //Toyota
myCar.start(); //Engine started
