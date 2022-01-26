"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMixins = exports.Mixins = void 0;
// Fusion multiple class into one extends
const Mixins = (derivedCtor, constructors) => {
    return applyMixins(derivedCtor, constructors);
};
exports.Mixins = Mixins;
// Apply Mixins
const applyMixins = (derivedCtor, constructors) => {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null));
        });
    });
    return derivedCtor.prototype;
};
exports.applyMixins = applyMixins;
