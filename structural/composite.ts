interface WorldObject {
    getName(): string;
    isGenerated(): boolean;
    generate(): void;
    addItem(item: string): void;
    removeItem(): void;
    getTotalItems(): number;
    add(child: WorldObject): void;
    remove(child: WorldObject): void;
    getChildren(): WorldObject[];
}

class Chest implements WorldObject {
    private name: string;
    private items: string[] = [];
    private generated: boolean = false;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string { return this.name; }
    isGenerated(): boolean { return this.generated; }

    generate(): void {
        this.generated = true;
        console.log(`📦 ${this.name} generated with loot!`);
        this.addItem("diamond");
        this.addItem("gold");
    }

    addItem(item: string): void {
        this.items.push(item);
        console.log(`➕ Added ${item} to ${this.name}`);
    }

    removeItem(): void {
        if (this.items.length > 0) {
            const removed = this.items.pop();
            console.log(`➖ Removed ${removed} from ${this.name}`);
        } else {
            console.log(`⚠️ ${this.name} is empty`);
        }
    }

    getTotalItems(): number { return this.items.length; }

    add(child: WorldObject): void {
        console.log("⚠️ Cannot add child to Chest (Leaf)");
    }
    remove(child: WorldObject): void {
        console.log("⚠️ Cannot remove child from Chest (Leaf)");
    }
    getChildren(): WorldObject[] { return []; }
}

abstract class WorldContainer implements WorldObject {
    protected name: string;
    protected children: WorldObject[] = [];
    protected generated: boolean = false;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string { return this.name; }
    isGenerated(): boolean { return this.generated; }

    generate(): void {
        this.generated = true;
        console.log(`🌍 Generating ${this.name}...`);
        // Рекурсивна генерація всіх дітей
        for (const child of this.children) {
            child.generate();
        }
    }

    addItem(item: string): void {
        for (const child of this.children) {
            child.addItem(item);
            return; // Додали в перший знайдений
        }
        console.log(`⚠️ No space to add ${item} in ${this.name}`);
    }

    removeItem(): void {
        for (const child of this.children) {
            if (child.getTotalItems() > 0) {
                child.removeItem();
                return;
            }
        }
        console.log(`⚠️ ${this.name} has no items to remove`);
    }

    getTotalItems(): number {
        // Рекурсивний підрахунок усіх предметів у піддереві
        return this.children.reduce((sum, child) => sum + child.getTotalItems(), 0);
    }

    add(child: WorldObject): void {
        this.children.push(child);
        console.log(`🔗 Added ${child.getName()} to ${this.name}`);
    }

    remove(child: WorldObject): void {
        const index = this.children.indexOf(child);
        if (index > -1) {
            this.children.splice(index, 1);
            console.log(`🔗 Removed ${child.getName()} from ${this.name}`);
        }
    }

    getChildren(): WorldObject[] { return this.children; }
}

class World extends WorldContainer {
    constructor() { super("Overworld"); }
}

class Region extends WorldContainer {
    constructor(name: string) { super(`Region-${name}`); }
}

class Chunk extends WorldContainer {
    constructor(x: number, z: number) { super(`Chunk[${x}:${z}]`); }
}


console.log("=== MINECRAFT COMPOSITE PATTERN ===\n");

const world = new World();
const region1 = new Region("Spawn");
const region2 = new Region("Nether");
const chunk1 = new Chunk(0, 0);
const chunk2 = new Chunk(1, 0);

const chest1 = new Chest("Blacksmith Chest");
const chest2 = new Chest("Dungeon Chest");
const shulkerBox = new Chest("Shulker Box");

world.add(region1);
world.add(region2);
region1.add(chunk1);
region1.add(chunk2);
chunk1.add(chest1);
chunk2.add(chest2);
chest1.add(shulkerBox);

console.log("--- Generate World ---");
world.generate();

console.log("\n--- Add Items ---");
world.addItem("iron");
world.addItem("gold");
region1.addItem("diamond");

console.log("\n--- Total Items ---");
console.log(`World: ${world.getTotalItems()}`);
console.log(`Region1: ${region1.getTotalItems()}`);
console.log(`Chunk1: ${chunk1.getTotalItems()}`);
console.log(`Chest1: ${chest1.getTotalItems()}`);

console.log("\n--- Remove Items ---");
world.removeItem();
console.log(`World total after removal: ${world.getTotalItems()}`);

console.log("\n--- No Class Explosion! ---");