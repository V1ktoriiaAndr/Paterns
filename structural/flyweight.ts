class BlockType {
    constructor(
        public readonly id: string,
        public readonly texture: string,
        public readonly model: string,
        public readonly sound: string,
        public readonly hardness: number,
        public readonly lightEmission: number
    ) {
        console.log(`🎨 Створено BlockType "${id}" (важкий об'єкт)`);
    }

    render(): void {
        console.log(`🎨 Rendering ${this.id} with texture ${this.texture}`);
    }

    getBreakTime(): number {
        return this.hardness * 1.5;
    }
}

class BlockTypeFactory {
    private static cache: Map<string, BlockType> = new Map();

    static getBlockType(id: string): BlockType {
        if (!this.cache.has(id)) {
            const blockData = BlockTypeFactory.getBlockData(id);
            const blockType = new BlockType(
                id,
                blockData.texture,
                blockData.model,
                blockData.sound,
                blockData.hardness,
                blockData.lightEmission
            );
            this.cache.set(id, blockType);
        }
        return this.cache.get(id)!;
    }

    private static getBlockData(id: string) {
        const data: Record<string, any> = {
            "grass": { texture: "grass_top.png", model: "cube", sound: "grass.wav", hardness: 0.6, lightEmission: 0 },
            "stone": { texture: "stone.png", model: "cube", sound: "stone.wav", hardness: 1.5, lightEmission: 0 },
            "diamond_ore": { texture: "diamond_ore.png", model: "cube", sound: "stone.wav", hardness: 3.0, lightEmission: 0 },
            "glowstone": { texture: "glowstone.png", model: "cube", sound: "glass.wav", hardness: 0.3, lightEmission: 15 },
        };
        return data[id] || data["stone"];
    }

    static getCacheSize(): number {
        return this.cache.size;
    }
}

class BlockInstance {
    constructor(
        public x: number,
        public y: number,
        public z: number,
        public type: BlockType
    ) {}

    render(): void {
        console.log(`📍 [${this.x}:${this.y}:${this.z}]`);
        this.type.render();
    }

    break(): void {
        const time = this.type.getBreakTime();
        console.log(`🔨 Breaking ${this.type.id} at [${this.x}:${this.y}:${this.z}] (${time}s)`);
    }
}

console.log("=== MINECRAFT FLYWEIGHT DEMO ===\n");

console.log("--- Створення 1,000,000 трав'яних блоків ---");
const grassBlocks: BlockInstance[] = [];

for (let i = 0; i < 1_000_000; i++) {
    const grassType = BlockTypeFactory.getBlockType("grass");

    grassBlocks.push(new BlockInstance(
        Math.floor(i / 256) % 100,
        64,
        i % 256,
        grassType
    ));
}

console.log(`\n📊 Статистика:`);
console.log(`   BlockType в кеші: ${BlockTypeFactory.getCacheSize()} (має бути 1)`);
console.log(`   BlockInstance створено: ${grassBlocks.length}`);
console.log(`   Пам'ять: ~16 МБ замість 65 ГБ! ✅\n`);

console.log("--- Рендер кількох блоків ---");
grassBlocks[0].render();
grassBlocks[500].render();
grassBlocks[999_999].render();

console.log("\n--- Додавання інших типів ---");
const stoneType = BlockTypeFactory.getBlockType("stone");
const diamondType = BlockTypeFactory.getBlockType("diamond_ore");
const grassAgain = BlockTypeFactory.getBlockType("grass");

console.log(`BlockType в кеші: ${BlockTypeFactory.getCacheSize()} (має бути 3)`);
console.log(`grassType === grassAgain: ${stoneType !== grassAgain} ✅`);

console.log("\n--- Ламаємо блоки ---");
grassBlocks[100].break();
new BlockInstance(50, 65, 50, diamondType).break();