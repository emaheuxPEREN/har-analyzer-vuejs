import { App } from 'vue'
import * as components from './components'
import Utils from "./plugins/utils";
import AppState from "./plugins/appState";

function install (app: App) {
  app.use(AppState);
  app.use(Utils);
  for (const key in components) {
    app.component(key, components[key]);
  }
}

import './assets/style.scss';

export default { install }

export * from './components'
export * from './plugins'