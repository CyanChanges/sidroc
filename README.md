# Sidroc

![Codecov](https://raw.githubusercontent.com/CyanChanges/sidroc/main/data/coverage.svg)
![uninstalls](https://raw.githubusercontent.com/CyanChanges/sidroc/main/data/removes.svg)
![npm](https://raw.githubusercontent.com/CyanChanges/sidroc/main/data/npm.svg)
![NotGitHubButLicense](https://raw.githubusercontent.com/CyanChanges/sidroc/main/data/license.svg)

Are you looking for [Cordis](https://github.com/shigma/cordis) ?

Sidroc is an AOP framework for legacy JavaScript applications. You can think of it as a kind of april-fools-day-framework as developers can build their own frameworks on top of it.

```ts
import { Context } from 'sidroc'

const ctx = new Context()

ctx.plugin(plugin)              // use plugins
ctx.on(event, callback)         // listen to events

ctx.start()                     // start app
```
