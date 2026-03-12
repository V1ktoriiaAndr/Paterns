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

abstract class MobFactory {
    abstract createMob(): Mob;

    abstract createWeapon(): Weapon;

    spawnCombatant(): { mob: Mob; weapon: Weapon } {
        return {
            mob: this.createMob(),
            weapon: this.createWeapon(),
        };
    }
}

class ZombieFactory extends MobFactory {
    createMob(): Mob     { return new Zombie(); }
    createWeapon(): Weapon { return new Sword(); }
}

class SkeletonFactory extends MobFactory {
    createMob(): Mob     { return new Skeleton(); }
    createWeapon(): Weapon { return new Bow(); }
}

type MobType = 'zombie' | 'skeleton';

class MobSuperFactory {
    private factories: Record<MobType, () => MobFactory> = {
        zombie:   () => new ZombieFactory(),
        skeleton: () => new SkeletonFactory(),
    };

    create(type: MobType): MobFactory {
        const factory = this.factories[type];
        if (!factory) throw new Error(`Unknown mob type: ${type}`);
        return factory();
    }

    spawnCombatant(type: MobType): { mob: Mob; weapon: Weapon } {
        return this.create(type).spawnCombatant();
    }
}

class Game {
    private mob: Mob;
    private weapon: Weapon;

    constructor(private superFactory: MobSuperFactory, private mobType: MobType) {
        const { mob, weapon } = superFactory.spawnCombatant(mobType);
        this.mob    = mob;
        this.weapon = weapon;
    }

    battle() {
        this.mob.live();
        this.weapon.attack();
    }

    switchMob(newType: MobType) {
        const { mob, weapon } = this.superFactory.spawnCombatant(newType);
        this.mob     = mob;
        this.weapon  = weapon;
        this.mobType = newType;
    }
}

const superFactory = new MobSuperFactory();

const game = new Game(superFactory, 'zombie');
game.battle();
console.log('-----------------------------');

const game2 = new Game(superFactory, 'skeleton');
game2.battle();
console.log('-----------------------------');

game.switchMob('skeleton');
game.battle();

