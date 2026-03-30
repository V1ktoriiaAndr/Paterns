type Skeleton = { biome: 'other' | 'desert' | 'winter', health: number };

const spawnSkeleton= (type: 'normal' | 'stray' | 'parched'): Skeleton => {
    switch (type) {
        case 'normal':
            return { biome: 'other', health: 20};
        case 'stray':
            return { biome: 'winter', health: 20};
        case 'parched':
            return { biome: 'desert', health: 16};
        default:
            throw new Error('Invalid type');
    }
}

const skeleton = spawnSkeleton('normal');
console.log(skeleton.biome);
console.log(skeleton.health);