abstract class Zombie {
    health: number = 20
    protected constructor(public type: string, health: number = 20) {
        this.health = health;
    }
    attack() { console.log(`${this.type} zombie attacks!`); }
}

class NormalZombie extends Zombie { constructor() { super('normal'); } }
class DrownedZombie extends Zombie { constructor() { super('drowned'); } }
class HuskZombie extends Zombie { constructor() { super('husk'); } }

class ZombieSpawner {
    public spawnZombie(type: string): Zombie {
        switch (type) {
            case 'normal': return new NormalZombie();
            case 'drowned': return new DrownedZombie();
            case 'husk': return new HuskZombie();
            default: throw new Error(`Unknown zombie type: ${type}`);
        }
    }
}

const zombieSpawner = new ZombieSpawner();
const zombie = zombieSpawner.spawnZombie('desert');
zombie.attack();