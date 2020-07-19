type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type Ignore<T, K> = Pick<T, Exclude<keyof T, K>>; // More flexible version of Omit, allows passing properties in K that aren't part of T
type MakeRequired<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> & { [P in K]-?: Exclude<T[P], undefined> };
type MakeAllRequired<T> = { [P in keyof T]-?: Exclude<T[P], undefined> };

type GetMethodKeys<T> = ({ [P in keyof T]: T[P] extends Function ? P : never })[keyof T];

type OnlyMethods<T> = Pick<T, GetMethodKeys<T>>;
type OnlyProperties<T, U extends keyof T = never> = Omit<T, GetMethodKeys<T> | U>;

type Serialized<T> = { [P in keyof T]: string };

type FunctionReturnValueType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;

interface Constructor<T> {
  new (...a: any[]): T;
}
