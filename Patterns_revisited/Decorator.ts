const sword = {   damage: 7, range: 3, getDescription: () => "Basic sword"}

const enchantedDecorator = (sword: {
    range: number;
    damage: number;
    getDescription(): any;
}) => {
    return {
        ...sword,
        damage: sword.damage + 3,
        range: sword.range + 1,
        getDescription: () => sword.getDescription() + " + Enchanted"
    }
}

const fireDecorator = (sword: { damage: number; range: number; getDescription(): any } ) => {
    return {
        ...sword,
        damage: sword.damage + 10,
        getDescription: () => sword.getDescription() + " + Fire"
    }
}

const fireSuperSword = fireDecorator(enchantedDecorator(sword))
console.log(fireSuperSword.getDescription());
console.log(fireSuperSword.damage);
console.log(fireSuperSword.range);