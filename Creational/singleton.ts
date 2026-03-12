class EnderDragon{
    private static instance: EnderDragon | undefined;

    private constructor() {
        console.log("Ender Dragon is born");
    }
    public static getInstance(): EnderDragon {
        if (this.instance === undefined) {
            this.instance = new EnderDragon();
        }
        return this.instance;
    }
    public fightPlayer(): void {
        console.log("Dragon throws fire!");
    }
}

const enderDragonInstance = EnderDragon.getInstance();
enderDragonInstance.fightPlayer();

