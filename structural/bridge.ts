class Rails{
    protected cart : Minecart | null = null;
    count : number = 0;
    constructor(count: number) {
        this.count +=1
    }
    connect(rail: Rails): void {
        if (this.count >= 2){
          console.log("Rails are connected");
        }
    }
    ride(cart: Minecart): void {
        this.cart = cart;
        console.log("Riding cart");
    }
}

class PoweredRails extends Rails{
    isPowered: boolean = false;
    constructor(count: number) {
        super(count);
    }

    power(): void {
        this.isPowered = true;
    }
}

interface Minecart{
    drive(): void;
}

class MinecartWithChest implements Minecart{
    isFull: boolean = false;
    drive(): void {
        console.log("Minecart is driving");
    }

    fullfillChest(): void {
        this.isFull = true;
    }
}

let cart: Minecart = new MinecartWithChest();
let rails: Rails = new PoweredRails(4);
rails.ride(cart);
