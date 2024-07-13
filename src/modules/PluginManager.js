import { PluginRuntime } from "./PluginRuntime";
import PluginContext from "./PluginContext";

export class PluginManager {
  constructor(contextApiAssembler) {
    this.pluginContextMap = new Map();
    this.pluginsMap = new Map(); // pluginNam,plugin
    this.plugins = [];
    this.contextApiAssembler = contextApiAssembler;
  }

  async register(pluginModel, options) {
    const { pluginName, meta = {} } = pluginModel;
    const cxt = this._getLowCodePluginContext({ pluginName, meta });
    const config = pluginModel(cxt);
    const plugin = new PluginRuntime(pluginName, this, config, meta);    
    if (this.pluginsMap.has(pluginName)) {
      throw new Error(`Plugin with name ${pluginName} exists`);
    }
    this.plugins.push(plugin);
    this.pluginsMap.set(pluginName, plugin);
    console.log(
      `plugin registered with pluginName: ${pluginName}, config: `,
      config,
      "meta:",
      meta
    );
  }

  getPlugins() {
    return this.plugins;
  }

  _getLowCodePluginContext(options) {    
    const { pluginName } = options;
    let context = this.pluginContextMap.get(pluginName);
    if (!context) {
      context = new PluginContext(options, this.contextApiAssembler);
      this.pluginContextMap.set(pluginName, context);
    }
    return context;
  }

  async init() {    
    const pluginNames = [];
    const pluginObj = {};
    this.plugins.forEach((plugin) => {
      pluginNames.push(plugin.name);
      pluginObj[plugin.name] = plugin;
    });
    for (const pluginName of pluginNames) {
      try {
        await this.pluginsMap.get(pluginName).init();
      } catch (e) /* istanbul ignore next */ {
        console.error(
          `Failed to init plugin:${pluginName}, it maybe affect those plugins which depend on this.`
        );
        console.error(e);
      }
    }
  }
}
