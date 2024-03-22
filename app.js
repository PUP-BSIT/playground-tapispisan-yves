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
var myCar = {
    plate_no: "ABC 1234",
    owner_name: "John Doe",
    speed: 50,
    printSpeed: function () {
        console.log("The current speed of ".concat(this.plate_no, " is ").concat(this.speed, " ").concat(DistanceUnit.MILE));
    },
    direction: function () {
        console.log("Going to ".concat(Direction.SOUTH).concat(Direction.WEST));
    }
};
//4
var janeDee = {
    full_name: "Jane Dee",
    birthday: new Date("2002-03-25"),
    speed: 6.5,
    printSpeed: function () {
        console.log("The current speed of ".concat(this.full_name, " is ").concat(this.speed, " ").concat(DistanceUnit.KILOMETER));
    },
    direction: function () {
        console.log("Going to ".concat(Direction.NORTH).concat(Direction.EAST));
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
