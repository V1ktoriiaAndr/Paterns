interface IRideable {
    ride(rider: Person): void;
}

class Person {
    constructor(public name: string, public age: number) {}
}

class Horse {
    constructor(public color: string) {}

    run(): void {
        console.log(`🐎 ${this.color} horse is running`);
    }
}

class SaddleAdapter implements IRideable {
    private horse: Horse;

    constructor(horse: Horse) {
        this.horse = horse;
    }

    ride(rider: Person): void {
        console.log(`🤠 ${rider.name} mounts the saddle on ${this.horse.color} horse`);
        this.horse.run();
    }
}

const person = new Person("John", 25);
const horse = new Horse("brown");

const rideableHorse: IRideable = new SaddleAdapter(horse);
rideableHorse.ride(person);