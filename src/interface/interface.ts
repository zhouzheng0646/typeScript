export interface pet {
    sex: string;
    leg: number;
}

export interface Func<T> {
    (a: T, b: T, ...c: T[]): boolean;
}

export interface Func2<Ta, Tb> {
    (a: Ta, b: Tb): number;
}

export interface Func3<Ta, Ret> {
    (...a: Ta[]): Ret;
}

