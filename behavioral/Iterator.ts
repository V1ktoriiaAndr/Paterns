interface myIterator<T> {
    next(): T | null;
    hasNext(): boolean;
}

class HotbarIterator<T> implements myIterator<T> {
    readonly hotbar: T[];
    private currentIndex: number = 0;

    constructor(hotbar: T[]) {
        this.hotbar = hotbar;
    }

    next(): T | null {
        if (this.currentIndex < this.hotbar.length) {
            return this.hotbar[this.currentIndex++];
        }
        return null;
    }

    hasNext(): boolean {
        return this.currentIndex < this.hotbar.length;
    }
}

class Hotbar<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    createIterator(): myIterator<T> {
        return new HotbarIterator(this.items);
    }
}

const hotbar = new Hotbar<string>();
hotbar.add("Sword");
hotbar.add("Shield");
hotbar.add("Stone");

const iterator = hotbar.createIterator();

while (iterator.hasNext()) {
    const item = iterator.next();
    if (item !== null) {
        console.log(`Taking ${item} in hand`);
        console.log(`Current item: ${item}`);
    }
}