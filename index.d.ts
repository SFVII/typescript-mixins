declare type Constructor<T> = new (...args: any[]) => T;
declare const Mixins: (derivedCtor: any, constructors: Constructor<any>[]) => any[];
declare const applyMixins: (derivedCtor: any, constructors: any[]) => any[];
export { Mixins, applyMixins };
