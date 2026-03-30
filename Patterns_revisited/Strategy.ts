type ToolStrategy = (item: string) => void

const Pickaxe : ToolStrategy = (item) => {
    console.log(`Using pickaxe to mine ${item}`);
}

const Axe : ToolStrategy = (item) => {
    console.log(`Using axe to chop ${item}`);
}

const Shovel : ToolStrategy = (item) => {
    console.log(`Using shovel to dig ${item}`);
}

const DestroyBlock = (item: string, strategy: ToolStrategy) => {
    strategy(item);
}

DestroyBlock("stone", Pickaxe);
DestroyBlock("dirt", Shovel);
DestroyBlock("wood", Axe);