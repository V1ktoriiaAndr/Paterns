type PlayerState = {
    name: string;
    world: string;
};

type Operation<P, R> = (player: P) => R;

const Teleport = <P, R>(
    activate: () => P,
    finalize: (player: P) => void,
    operation: Operation<P, R>
): R => {
    const resource = activate();
    try {
        return operation(resource);
    } catch (error) {
        console.error("Teleportation failed:", error);
        throw error;
    } finally {
        finalize(resource);
    }
};

const enterNetherPortal = (): PlayerState => {
    console.log("Steve увійшов у портал Незера!");
    return { name: "Steve", world: "Overworld" };
};

const completeNetherArrival = (player: PlayerState): void => {
    console.log(`${player.name} успішно прибув у Незер!`);
};

const travelThroughNether = (player: PlayerState): PlayerState => {
    console.log("Переміщення крізь вимір...");
    return { ...player, world: "Nether" };
};

const enterEndPortal = (): PlayerState => {
    console.log("Стів увійшов у портал Енду!");
    return { name: "Steve", world: "Overworld" };
};

const completeEndArrival = (player: PlayerState): void => {
    console.log(`${player.name} успішно прибув в Енд!`);
};

const travelThroughEnd = (player: PlayerState): PlayerState => {
    console.log("Переміщення крізь вимір...");
    return { ...player, world: "End" };
};

try {
    const netherResult = Teleport(
        enterNetherPortal,
        completeNetherArrival,
        travelThroughNether
    );
    console.log("Результат:", netherResult);

    console.log("---");

    const endResult = Teleport(
        enterEndPortal,
        completeEndArrival,
        travelThroughEnd
    );
    console.log("Результат:", endResult);
} catch (error) {
    console.error("Щось пішло не так:", error);
}