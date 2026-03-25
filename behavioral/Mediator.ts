interface Mediator {
    notify(sender: Villager, message: string): void;
}

class Player implements Mediator {
    private villagers: Villager[] = [];

    register(villager: Villager) {
        this.villagers.push(villager);
        console.log(`Гравець познайомився з ${villager.name}`);
    }

    notify(sender: Villager, message: string): void {
        console.log(`Гравець отримав від ${sender.name}: "${message}"`);

        this.villagers
            .filter(v => v !== sender)
            .forEach(v => {
                console.log(`  → Гравець передав ${v.name}: "${message}"`);
                v.receive(message);
            });
    }

    tradeWith(villager: Villager, item: string, price: number) {
        console.log(`Гравець торгується з ${villager.name}: ${item} за ${price} смарагдів`);
    }
}

class Villager {
    constructor(public name: string, private mediator: Mediator) {}

    offerTrade(item: string, price: number) {
        this.mediator.notify(this, `Пропоную ${item} за ${price} смарагдів`);
    }

    receive(message: string) {
        console.log(`    ${this.name} почув: "${message}"`);
    }
}

const player = new Player();

const farmer = new Villager("Фермер", player);
const librarian = new Villager("Бібліотекар", player);
const blacksmith = new Villager("Коваль", player);

player.register(farmer);
player.register(librarian);
player.register(blacksmith);

console.log("\n--- Фермер починає торгівлю ---");
farmer.offerTrade("Пшениця", 5);

console.log("\n--- Бібліотекар починає торгівлю ---");
librarian.offerTrade("Книгу", 10);

console.log("\n--- Гравець сам ініціює торгівлю ---");
player.tradeWith(blacksmith, "Залізний меч", 15);