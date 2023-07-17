import { Context, Plugin } from "./context";
import { MainScope } from "./scope";


export class Registry<C extends Context = Context> extends Map<Plugin<C>, MainScope<C>> {
    delete(key: Plugin<C>): boolean {
        if (!this.has(key)) return false
        return this.get(key)!.dispose()
    }
}
