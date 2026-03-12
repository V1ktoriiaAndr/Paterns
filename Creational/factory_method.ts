abstract class Skeleton {
    health: number = 20
    protected constructor(public type: string, health: number = 20) {
        this.health = health;
    }
    attack(): void { }
}

class NormalSkeleton extends Skeleton {
    constructor() {
        super('normal');
    }
    attack(): void {
        console.log('Normal skeleton attacks!');
    }
}

class StraySkeleton extends Skeleton {
    constructor() {
        super('stray');
    }
    attack(): void {
        console.log('Stray skeleton attacks!');
    }
}

class ParchedSkeleton extends Skeleton {
    constructor() {
        super('parched', 16);
    }
    attack(): void {
        console.log('Parched skeleton attacks!');
    }
}

abstract class SkeletonFactory {
    abstract createSkeleton(): Skeleton;

    public spawn(): Skeleton {
        console.log('Skeleton spawned!');
        const skeleton = this.createSkeleton();
        skeleton.attack()
        return skeleton;
    }
}

class NormalSkeletonFactory extends SkeletonFactory {
    createSkeleton(): Skeleton {
        return new NormalSkeleton();
    }
}

class StraySkeletonFactory extends SkeletonFactory {
    createSkeleton(): Skeleton {
        return new StraySkeleton();
    }
}

class ParchedSkeletonFactory extends SkeletonFactory {
    createSkeleton(): Skeleton {
        return new ParchedSkeleton();
    }
}

const factory = new NormalSkeletonFactory();
const skeleton = factory.spawn();
console.log(skeleton);