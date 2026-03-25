interface Weapon {
    accept(visitor: EnchantingTableVisitor): void;
}

class Sword implements Weapon {
    accept(visitor: EnchantingTableVisitor): void {
        visitor.visitSword(this);
    }
}

class Pickaxe implements Weapon {
    accept(visitor: EnchantingTableVisitor): void {
        visitor.visitPickaxe(this);
    }
}

class Axe implements Weapon {
    accept(visitor: EnchantingTableVisitor): void {
        visitor.visitAxe(this);
    }
}

interface EnchantingTableVisitor {
    visitSword(sword: Sword): void;
    visitPickaxe(pickaxe: Pickaxe): void;
    visitAxe(axe: Axe): void;
}

class EnchantingTable implements EnchantingTableVisitor {
    visitSword(sword: Sword): void {
        console.log(`Sword is enchanted: Sharpness V, Fire Aspect II`);
    }

    visitPickaxe(pickaxe: Pickaxe): void {
        console.log(`Pickaxe is enchanted: Efficiency IV, Fortune III`);
    }

    visitAxe(axe: Axe): void {
        console.log(`Axe is enchanted: Sharpness III, Unbreaking II`);
    }
}

const weapons: Weapon[] = [new Sword(), new Pickaxe(), new Axe()];
const enchantingTable = new EnchantingTable();

console.log("=== Enchanting weapon ===\n");
weapons.forEach(weapon => weapon.accept(enchantingTable));