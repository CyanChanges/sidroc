import { Context } from "./context";

declare module './context' {
    interface Context {
        runtime: MainScope<this>
        scope: ForkScope<this>
    }
}

export class ForkScope<C extends Context = Context> {
}

export class MainScope<C extends Context = Context> extends ForkScope<C> {
    dispose(): boolean {
        return true
    }
}
