class Bed {
    constructor(private position: string) {}
    getPosition(): string {
        return this.position;
    }
}

class Player{
    private position: string = "0 0 0";

    setPosition(position: string): void {
        this.position = position;
        console.log(`Player is at the ${position} coordinates`);
    }

    save():Bed{
        console.log("Player is sleeping. Saving player position");
        return new Bed(this.position);
    }

    restore(bed: Bed): void {
        this.position = bed.getPosition();
        console.log(`Player is revived at the ${this.position}`);
    }
}

class GameLog{
    private log: Bed[] = [];

    add(bed: Bed): void {
        this.log.push(bed);
    }
    getLog(): Bed[] {
        return this.log;
    }
}

const player = new Player();
player.setPosition("193 50 76");
const gameLog = new GameLog();
gameLog.add(player.save());
player.setPosition("250 45 912");
player.restore(gameLog.getLog()[0]);