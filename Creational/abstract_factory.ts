interface Mob{
    live(): void;
}
interface Weapon {
    attack(): void;
}

class Zombie implements Mob{
    live(): void {
        console.log('Urr');
    }
}

class Skeleton implements Mob{
    live(): void {
        console.log('Clack!');
    }
}

class Sword implements Weapon{
    attack(): void {
        console.log('Swing a sword!');
    }
}

class Bow implements Weapon{
    attack(): void {
        console.log('Shoots an arrow!');
    }
}

interface MobFactory{
    createMob(): Mob;
    createWeapon(): Weapon;
}

class ZombieFactory implements MobFactory{
    createMob(): Mob {
        return new Zombie();
    }
    createWeapon(): Weapon {
        return new Sword();
    }
}

class SkeletonFactory implements MobFactory{
    createMob(): Mob {
        return new Skeleton();
    }
    createWeapon(): Weapon {
        return new Bow();
    }
}

class Game{
    private mob: Mob;
    private weapon: Weapon;

    constructor(private mobFactory: MobFactory){
        this.mob = mobFactory.createMob();
        this.weapon = mobFactory.createWeapon();
    }

    battle(){
        this.mob.live();
        this.weapon.attack();
    }
}

const game = new Game(new ZombieFactory());
game.battle();
console.log('-----------------------------');
const game2 = new Game(new SkeletonFactory());
game2.battle();
