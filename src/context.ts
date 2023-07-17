import { Registry } from "./registry";

export type Plugin<C extends Context = Context> = Plugin.Function<C> | Plugin.Object<C> | Plugin.Constructor<C>

export namespace Plugin{
    export type Function<T extends any, C extends Context = any> = (ctx: C, config?: T) => void
    export interface Object<S = any, T = any, C extends Context = any> {
        name?: string
        apply: Function<T, C>
        reusable?: boolean
        Config?: (config?: S) => T
        using?: readonly string[]
    }
    export type Constructor<T extends any, C extends Context = any> = new (ctx: C, config?: T) => void
}

export interface Context<T = any> {
    config: T
    registry: Registry
    root: Context<T>
}

export namespace Context {
    export interface Config {}
}

export class Context {
    constructor(config?: Context.Config) {
        this.root = this
    }
}
