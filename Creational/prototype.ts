interface Prototype{
    clone():this
}

class Silverfish implements Prototype{
    health: number;
    damage: number;
    isInBlock: boolean;

    constructor(isInBlock: boolean = false, health: number = 8, damage: number = 1) {
        this.isInBlock = isInBlock;
        this.health = health;
        this.damage = damage;
    }

    clone(): this {
        return new Silverfish(this.isInBlock, this.health, this.damage) as this;
    }
}

const silverfish = new Silverfish(true, 10);
const clone = silverfish.clone();
console.log(clone.health);
