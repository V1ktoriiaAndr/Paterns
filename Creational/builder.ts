class Weapon{
    damage: number;
    name: string;

    constructor(damage: number, name: string) {
        this.damage = damage;
        this.name = name;
    }
}

class Food {
    name: string;
    nutrition: number;

    constructor(name: string, nutrition: number) {
        this.name = name;
        this.nutrition = nutrition;
    }
}

class Material {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class StartingChestBuilder {
    private weapon: Weapon | null = null;
    private food: Food | null = null;
    private material: Material | null = null;

    setWeapon(damage: number, name: string): this {
        this.weapon = new Weapon(damage, name);
        return this;
    }

    setFood(name: string, nutrition: number): this {
        this.food = new Food(name, nutrition);
        return this;
    }

    setMaterial(name: string): this {
        this.material = new Material(name);
        return this;
    }

    build(): StartingChest {
        if (!this.weapon || !this.food || !this.material) {
            throw new Error("Chest is incomplete");
        }
        return new StartingChest(this.weapon, this.food, this.material);
    }
}

class StartingChest {
    weapon: Weapon
    food: Food
    material: Material

    constructor(weapon: Weapon, food: Food, material: Material) {
        this.food = food
        this.material = material
        this.weapon = weapon
    }

    static get builder() {
        return new StartingChestBuilder()
    }
}

const chest = new StartingChestBuilder()
    .setWeapon(10, "Axe")
    .setFood("Bread", 5.0)
    .setMaterial("Stone")
    .build();
