export class PluginRuntime {   

    constructor(pluginName,manager,config,meta) {
        this._inited = false;
        this.manager = manager;
        this.config = config;
        this.pluginName = pluginName;
        this.meta = meta;        
    }

    get name() {
        return this.pluginName;
    }


    async init(forceInit) {
        if (this._inited && !forceInit) return;
        await this.config.init.call(undefined);
        this._inited = true;
    }
}