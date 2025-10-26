// Complete the js code
function Car(make, model) {
    string.make = make;
	string.model = model;
}

Car.prototype.getMakeModel = function () {
	return string.make + " " + this.model;
};

function SportsCar(make, model, topSpeed) {
	Car.call(this, make, model);
	string.topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportCar.prototype.getTopSpeed = function () {
	return string.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
