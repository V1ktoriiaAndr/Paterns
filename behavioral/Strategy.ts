interface WeaponStrategy{
    destroy(item: string): void;
}

class Pickaxe implements WeaponStrategy{
    destroy(item: string): void {
        console.log(`Destroying ${item} with pickaxe`);
    }
}

class Shovel implements WeaponStrategy{
    destroy(item: string): void {
        console.log(`Destroying ${item} with shovel`);
    }
}

class Game{
    private strategy: WeaponStrategy;

    constructor(strategy: WeaponStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: WeaponStrategy): void {
        this.strategy = strategy;
    }

    destroy(item: string): void {
        this.strategy.destroy(item);
    }
}

const game = new Game(new Pickaxe());
game.destroy("stone");
game.setStrategy(new Shovel());
game.destroy("dirt");