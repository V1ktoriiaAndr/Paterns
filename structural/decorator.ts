interface Sword {
    damage: number;
    range: number;
    getDescription(): string;
}

class BasicSword implements Sword {
    damage: number = 7;
    range: number = 3;

    getDescription(): string {
        return "Basic Sword";
    }
}

abstract class SwordEnchantment implements Sword {
    protected sword: Sword;

    constructor(sword: Sword) {
        this.sword = sword;
    }

    get damage(): number {
        return this.sword.damage;
    }

    get range(): number {
        return this.sword.range;
    }

    getDescription(): string {
        return this.sword.getDescription();
    }
}

class EnchantedSwordDecorator extends SwordEnchantment {
    constructor(sword: Sword) {
        super(sword);
    }

    get damage(): number {
        return super.damage + 3;
    }

    get range(): number {
        return super.range + 1;
    }

    getDescription(): string {
        return super.getDescription() + " + Enchantment";
    }
}


class FireDecorator extends SwordEnchantment{
    constructor(sword: Sword) {
        super(sword);
        console.log("Sword is on fire!");
    }

    get damage(): number {
        return super.damage + 5;
    }

    getDescription(): string {
        return super.getDescription() + " + Fire";
    }

}

const basicSword = new BasicSword();
console.log(`${basicSword.getDescription()}: Dmg ${basicSword.damage}`);

const enchantedSword = new EnchantedSwordDecorator(basicSword);
console.log(`${enchantedSword.getDescription()}: Dmg ${enchantedSword.damage}`);
console.log(`Enchanted Sword Range: ${enchantedSword.range}`);

const superSword = new FireDecorator(new EnchantedSwordDecorator(basicSword));
console.log(superSword.getDescription());