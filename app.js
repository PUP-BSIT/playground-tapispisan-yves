//8
var DistanceUnit;
(function (DistanceUnit) {
    DistanceUnit["KILOMETER"] = "km";
    DistanceUnit["MILE"] = "m";
})(DistanceUnit || (DistanceUnit = {}));
//3
var myCar = {
    plate_no: "ABC 1234",
    owner_name: "John Doe",
    speed: 50,
    printSpeed: function () {
        console.log("The current speed of ".concat(this.plate_no, " is ").concat(this.speed, " ").concat(DistanceUnit.MILE));
    }
};
//4
var janeDee = {
    full_name: "Jane Dee",
    birthday: new Date("2002-03-25"),
    speed: 6.5,
    printSpeed: function () {
        console.log("The current speed of ".concat(this.full_name, " is ").concat(this.speed, " ").concat(DistanceUnit.KILOMETER));
    }
};
//5
function speedTest(contestant) {
    //6
    console.log("Speed Test On Going...");
    contestant.printSpeed();
}
//7
speedTest(janeDee);
speedTest(myCar);
