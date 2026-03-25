interface Command {
    execute(): void;
}

class InventoryActions {
    place(block: string): void {
        console.log(`Placing ${block} from inventory`);
    }
    craft(block: string): void {
        console.log(`Crafting with ${block}`);
    }
    replace(block: string): void {
        console.log(`Replacing ${block} in inventory`);
    }
    pickup(block: string): void {
        console.log(`Picking up ${block}`);
    }
}

class PlaceBlockCommand implements Command {
    constructor(private block: string) {}
    execute(): void {
        console.log(`Placing ${this.block}`);
    }
}

class CraftBlockCommand implements Command {
    constructor(private block: string) {}
    execute(): void {
        console.log(`Crafting ${this.block}`);
    }
}

class ReplaceBlockCommand implements Command {
    constructor(private block: string) {}
    execute(): void {
        console.log(`Replacing ${this.block}`);
    }
}

class PickupBlockCommand implements Command {
    constructor(private block: string) {}
    execute(): void {
        console.log("Picking up block");
    }
}

class Player {
    inventory: InventoryActions = new InventoryActions();

    constructor(private name: string) {
    }

    executeCommand(command: Command): void {
        command.execute();
    }
}
const player = new Player("John");
player.executeCommand(new PlaceBlockCommand("stone"));
player.executeCommand(new CraftBlockCommand("diamond pickaxe"));
