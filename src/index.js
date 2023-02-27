/**
 * @Author: 任强
 * @Date: 2023/2/22 20:05
 * @Version: 1.0
 * @Content:
 */
import * as components from './stories'

export default {
    install: (app) => {
        Object.entries(components).forEach(([componentName, component]) => {
            app.component(componentName, component)
        })
    }
}

export * from './stories'



