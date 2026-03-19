class Dispenser {
    private items: any[] = [];
    private capacity: number = 9;

    addAmmo(item: any) {
        if (this.items.length >= this.capacity) throw new Error("Dispenser full");
        this.items.push(item);
        console.log(`[Dispenser] Loaded: ${item}`);
    }

    shoot(): any | null {
        if (this.items.length === 0) return null;
        const item = this.items.pop();
        console.log(`[Dispenser] Shot: ${item}`);
        return item;
    }

    get isEmpty(): boolean {
        return this.items.length === 0;
    }
}

class Hopper {
    private buffer: any[] = [];
    private capacity: number = 5;

    receive(item: any): boolean {
        if (this.buffer.length >= this.capacity) {
            console.log("[Hopper] Buffer full");
            return false;
        }
        this.buffer.push(item);
        console.log(`[Hopper] Received: ${item}`);
        return true;
    }

    transfer(): any | null {
        if (this.buffer.length === 0) return null;
        const item = this.buffer.shift();
        console.log(`[Hopper] Transferred: ${item}`);
        return item;
    }

    get isFull(): boolean {
        return this.buffer.length >= this.capacity;
    }
}

class Chest {
    private items: any[] = [];
    private capacity: number = 27;

    store(item: any): boolean {
        if (this.items.length >= this.capacity) {
            console.log("[Chest] Storage full");
            return false;
        }
        this.items.push(item);
        console.log(`[Chest] Stored: ${item} (Total: ${this.items.length})`);
        return true;
    }

    get itemCount(): number {
        return this.items.length;
    }

    get isFull(): boolean {
        return this.items.length >= this.capacity;
    }
}

class StorageFacade {
    private dispenser: Dispenser;
    private hopper: Hopper;
    private chest: Chest;

    constructor() {
        this.dispenser = new Dispenser();
        this.hopper = new Hopper();
        this.chest = new Chest();
    }

    transferItem(item: any): boolean {
        console.log("\n--- Starting Transfer ---");

        this.dispenser.addAmmo(item);

        const dispensedItem = this.dispenser.shoot();
        if (!dispensedItem) return false;

        if (!this.hopper.receive(dispensedItem)) return false;

        return this.chest.store(this.hopper.transfer());
    }

    getStatus(): string {
        return `Dispenser: ${!this.dispenser.isEmpty ? 'Has items' : 'Empty'} | ` +
            `Hopper: ${!this.hopper.isFull ? 'Ready' : 'Full'} | ` +
            `Chest: ${this.chest.itemCount} items`;
    }

    isStorageFull(): boolean {
        return this.chest.isFull;
    }
}


const storage = new StorageFacade();

storage.transferItem("diamond");
storage.transferItem("gold");
storage.transferItem("iron");

console.log("\n" + storage.getStatus());