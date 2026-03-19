interface IChunk {
    getBlock(x: number, y: number, z: number): number;
    setBlock(x: number, y: number, z: number, blockID: number): void;
    save(): void;
    unload(): void;
    getCoords(): [number, number, number];
}

class Chunk implements IChunk {
    private blocks: number[][][];
    private isModified: boolean = false;

    constructor(public x: number, public y: number, public z: number) {
        console.log(`🔨 [Chunk ${x}:${z}] ЗАВАНТАЖЕННЯ з диска...`);
        this.blocks = new Array(16).fill(0).map(() =>
            new Array(256).fill(0).map(() => new Array(16).fill(0))
        );
    }

    getBlock(x: number, y: number, z: number): number {
        return this.blocks[x]?.[y]?.[z] ?? 0;
    }

    setBlock(x: number, y: number, z: number, blockID: number): void {
        this.blocks[x][y][z] = blockID;
        this.isModified = true;
        console.log(`🧱 [Chunk ${this.x}:${this.z}] Block set at ${x}:${y}:${z}`);
    }

    save(): void {
        if (this.isModified) {
            console.log(`💾 [Chunk ${this.x}:${this.z}] Збереження на диск...`);
            this.isModified = false;
        }
    }

    unload(): void {
        console.log(`🗑️ [Chunk ${this.x}:${this.z}] Видалення з пам'яті...`);
        this.blocks = [];
    }

    getCoords(): [number, number, number] {
        return [this.x, this.y, this.z];
    }
}

class ChunkProxy implements IChunk {
    private chunk: Chunk | null = null;
    private isLoaded: boolean = false;

    constructor(private x: number, private y: number, private z: number) {
        console.log(`📍 [Proxy ${x}:${z}] Створено (легкий об'єкт)`);
    }

    private loadIfNeeded(): void {
        if (!this.isLoaded) {
            console.log(`⚡ [Proxy ${this.x}:${this.z}] Перше звернення - завантажую Chunk...`);
            this.chunk = new Chunk(this.x, this.y, this.z);
            this.isLoaded = true;
        }
    }

    getBlock(x: number, y: number, z: number): number {
        this.loadIfNeeded();
        return this.chunk!.getBlock(x, y, z);
    }

    setBlock(x: number, y: number, z: number, blockID: number): void {
        this.loadIfNeeded();
        this.chunk!.setBlock(x, y, z, blockID);
    }

    save(): void {
        if (this.isLoaded) {
            this.chunk!.save();
        }
    }

    unload(): void {
        if (this.isLoaded) {
            this.chunk!.save();
            this.chunk!.unload();
            this.chunk = null;
            this.isLoaded = false;
            console.log(`✅ [Proxy ${this.x}:${this.z}] Вивантажено`);
        }
    }

    getCoords(): [number, number, number] {
        return [this.x, this.y, this.z];
    }

    isChunkLoaded(): boolean {
        return this.isLoaded;
    }
}

console.log("=== MINECRAFT VIRTUAL PROXY DEMO ===\n");

const chunkProxy = new ChunkProxy(0, 0, 0);
console.log(`Chunk loaded? ${chunkProxy.isChunkLoaded()}`);
console.log();

console.log("--- Гравець ходить поруч ---");
console.log(`Coords: ${chunkProxy.getCoords()}`);
console.log(`Chunk loaded? ${chunkProxy.isChunkLoaded()}`);
console.log();

console.log("--- Гравець ставить блок ---");
chunkProxy.setBlock(5, 64, 5, 1);
console.log(`Chunk loaded? ${chunkProxy.isChunkLoaded()}`);
console.log();

console.log("--- Гравець ламає блок ---");
chunkProxy.getBlock(5, 64, 5);
console.log();

console.log("--- Гравець пішов далеко ---");
chunkProxy.unload();
console.log(`Chunk loaded? ${chunkProxy.isChunkLoaded()}`);