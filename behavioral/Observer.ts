interface Observer {
    update(isActive: boolean): void;
}

class PressurePlate {
    private observers: Observer[] = [];
    private active: boolean = false;

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    stepOn(): void {
        this.active = true;
        console.log(`Player stepped on the plate.`);
        this.notifyObservers();
    }

    stepOff(): void {
        this.active = false;
        console.log(`Player stepped off the plate.`);
        this.notifyObservers();
    }

    private notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this.active));
    }
}

class IronDoor implements Observer {
    update(isActive: boolean): void {
        if (isActive) {
            console.log(` Door is opened`);
        } else {
            console.log(` Door is closed`);
        }
    }
}

class RedstoneLamp implements Observer {
    update(isActive: boolean): void {
        if (isActive) {
            console.log(` Lamp is on`);
        } else {
            console.log(` Lamp is off`);
        }
    }
}

const plate = new PressurePlate();

plate.addObserver(new IronDoor());
plate.addObserver(new RedstoneLamp());

console.log("--- Activation ---");
plate.stepOn();

console.log("\n--- Deactivation ---");
plate.stepOff();