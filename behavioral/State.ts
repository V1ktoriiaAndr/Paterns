interface State {
    interact(player: Player): void;
}

class Player {
    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    setState(state: State): void {
        this.state = state;
        console.log(`Game mode switched to: ${state.constructor.name}`);
    }

    getState(): State {
        return this.state;
    }

    interact(): void {
        this.state.interact(this);
    }

    switchToSurvival(): void {
        this.setState(new SurvivalMode());
    }

    switchToCreative(): void {
        this.setState(new CreativeMode());
    }
}

class SurvivalMode implements State {
    interact(player: Player): void {
        console.log(`Survival: Player collects resources (with limits)`);
        console.log(`   - Health: 10 ️`);
        console.log(`   - Hunger: 8 `);
    }
}

class CreativeMode implements State {
    interact(player: Player): void {
        console.log(`Creative: Player builds without limits`);
        console.log(`   - Health: ∞`);
        console.log(`   - Hunger: ∞`);
        console.log(`   - Flight: enabled`);
    }
}

const player = new Player(new SurvivalMode());

console.log("--- Game is Survival ---");
player.interact();

console.log("\n--- Switching to Creative ---");
player.switchToCreative();
player.interact();

console.log("\n--- Returning to Survival ---");
player.switchToSurvival();
player.interact();