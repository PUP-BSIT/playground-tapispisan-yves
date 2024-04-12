"use strict";
//8
var DistanceUnit;
(function (DistanceUnit) {
    DistanceUnit["KILOMETER"] = "km";
    DistanceUnit["MILE"] = "m";
})(DistanceUnit || (DistanceUnit = {}));
var Direction;
(function (Direction) {
    Direction["NORTH"] = "N";
    Direction["EAST"] = "E";
    Direction["WEST"] = "W";
    Direction["SOUTH"] = "S";
})(Direction || (Direction = {}));
//3
const myCar = {
    plate_no: "ABC 1234",
    owner_name: "John Doe",
    speed: 50,
    printSpeed() {
        console.log(`The current speed of ${this.plate_no} is ${this.speed} ${DistanceUnit.MILE}`);
    },
    direction() {
        console.log(`Going to ${Direction.SOUTH}${Direction.WEST}`);
    }
};
//4
const janeDee = {
    full_name: "Jane Dee",
    birthday: new Date("2002-03-25"),
    speed: 6.5,
    printSpeed() {
        console.log(`The current speed of ${this.full_name} is ${this.speed} ${DistanceUnit.KILOMETER}`);
    },
    direction() {
        console.log(`Going to ${Direction.NORTH}${Direction.EAST}`);
    }
};
//5
function speedTest(contestant) {
    //6
    console.log("Speed Test On Going...");
    contestant.printSpeed();
}
function directionGoing(contestant) {
    contestant.direction();
}
//7
speedTest(janeDee);
directionGoing(janeDee);
speedTest(myCar);
directionGoing(myCar);
