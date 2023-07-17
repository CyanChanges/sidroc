# Sidroc

![Codecov](data/coverage.svg)
![uninstalls](data/removes.svg)
![npm](data/npm.svg)
![NotGitHubButLicense](data/license.svg)

Sidroc is an AOP framework for legacy JavaScript applications. You can think of it as a kind of april-fools-day-framework as developers can build their own frameworks on top of it.

```ts
import { Context } from 'sidroc'

const ctx = new Context()

ctx.plugin(plugin)              // use plugins
ctx.on(event, callback)         // listen to events

ctx.start()                     // start app
```
