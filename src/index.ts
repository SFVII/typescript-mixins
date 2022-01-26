type Constructor<T> = new(...args: any[]) => T;

// Fusion multiple class into one extends
const Mixins = (derivedCtor: any, constructors: Constructor<any>[]) => {
    return applyMixins(derivedCtor, constructors);
}

// Apply Mixins
const applyMixins = (derivedCtor: any, constructors: any[]) => {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null)
            );
        });
    });
    return derivedCtor.prototype;
}

export {Mixins, applyMixins};
