abstract class Crafting{
    craft(items: string[]): void {
        console.log("Crafting items");
        this.placeItems(items);
        this.craftItem();
        this.getResult();
    }

    placeItems(items: string[]): void {
        console.log("Placing items on the crafting table");
    }

    craftItem(): void {
        console.log("Crafting item");
    }

    getResult(): void {
        console.log("Item crafted");
    }
}

class CraftWeapon extends Crafting{
    craftItem(): void {
        console.log("Crafting weapon");
    }
}

class CraftArmor extends Crafting{
    craftItem(): void {
        console.log("Crafting armor");
    }
}

const game = new CraftWeapon();
game.craft(["wood", "leather"]);
game.craft(["metal", "cloth"]);