interface DamageHandler {
    setNext(handler: DamageHandler): DamageHandler;
    handle(damage: number): void;
}

abstract class BaseHandler implements DamageHandler {
    private next: DamageHandler | null = null;

    setNext(handler: DamageHandler): DamageHandler {
        this.next = handler;
        return handler;
    }

    protected nextHandler(damage: number): void {
        if (this.next) {
            this.next.handle(damage);
        } else {
            console.log(`Шкода ${damage} пройшла наскрізь (кінець ланцюжка)`);
        }
    }

    handle(damage: number): void {
        this.nextHandler(damage);
    }
}

class Shield extends BaseHandler {
    handle(damage: number): void {
        if (damage <= 5) {
            console.log(`Щит повністю поглинув ${damage} шкоди`);
        } else {
            const remaining = damage - 5;
            console.log(`Щит поглинув 5 шкоди. Залишилось: ${remaining}`);
            this.nextHandler(remaining);
        }
    }
}

class Armor extends BaseHandler {
    handle(damage: number): void {
        const absorbed = Math.floor(damage * 0.5);
        const remaining = damage - absorbed;

        console.log(`Броня поглинула ${absorbed}. Залишилось: ${remaining}`);
        this.nextHandler(remaining);
    }
}

class Health extends BaseHandler {
    handle(damage: number): void {
        if (damage > 0) {
            console.log(`Гравець отримав ${damage} шкоди по здоров'ю`);
        } else {
            console.log(`Шкода повністю заблокована`);
        }
    }
}

const shield = new Shield();
shield.setNext(new Armor()).setNext(new Health());

console.log('--- Атака 15 шкоди ---');
shield.handle(15);

console.log('\n--- Атака 3 шкоди ---');
shield.handle(3);
