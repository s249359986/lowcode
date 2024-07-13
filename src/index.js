
import './index.css';
import reportWebVitals from './reportWebVitals';
import { init,plugins } from "./modules/engine-core"
import LogoPlugin from "./plugins/logo"
import TitlePlugin from './plugins/title';


async function run() {
  await plugins.register(LogoPlugin)
  await plugins.register(TitlePlugin)
  init(document.getElementById('root'))
}
run();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
