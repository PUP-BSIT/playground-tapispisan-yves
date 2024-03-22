//8
enum DistanceUnit {
    KILOMETER = "km",
    MILE = "m"
}

enum Direction {
    NORTH = "N",
    EAST = "E",
    WEST = "W",
    SOUTH = "S"
}

//1
type Vehicle = {
    plate_no: string;
    owner_name: string;
    speed: number; 
    printSpeed(): void;
    direction(): void;
};

//3
const myCar: Vehicle = {
    plate_no: "ABC 1234",
    owner_name: "John Doe",
    speed: 50,
    printSpeed() {
        console.log(`The current speed of ${this.plate_no} is ${this.speed} ${DistanceUnit.MILE}`);
    },
    direction(){
        console.log(`Going to ${Direction.SOUTH}${Direction.WEST}`)
    }
};

//2
type Person = {
    full_name: string;
    birthday: Date;
    speed: number; 
    printSpeed(): void;
    direction(): void;
};

//4
const janeDee: Person = {
    full_name: "Jane Dee",
    birthday: new Date("2002-03-25"),
    speed: 6.5,
    printSpeed() {
        console.log(`The current speed of ${this.full_name} is ${this.speed} ${DistanceUnit.KILOMETER}`)
    },
    direction(){
        console.log(`Going to ${Direction.NORTH}${Direction.EAST}`)
    }
}


//9
type Contestant = Person | Vehicle;
//5
function speedTest(contestant: Contestant): void {
    //6
    console.log("Speed Test On Going...");
    contestant.printSpeed();
}

function directionGoing(contestant: Contestant): void{
    contestant.direction();
}

//7
speedTest(janeDee);
directionGoing(janeDee);
speedTest(myCar);
directionGoing(myCar);

