let Car = {

    make: "Honda",
    model: "Civic",
    year: 2017,
    odometer: 43000,
    serviceCount: 3,
    service: function(){return this.serviceCount ++;},
    getOdometerReading: function(){return this.odometer;},
    reset: function(){
        this.odometer = 0; 
        this.serviceCount = 0;
        return [this.odometer,this.serviceCount];
    }
}

let resetting = Car.reset();
console.log(resetting);

console.log(Car.odometer);