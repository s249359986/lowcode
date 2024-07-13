export default class PluginContext {    
    constructor(options,contextApiAssembler) {
        const { pluginName = 'anonymous', meta = {} } = options;
        contextApiAssembler.assembleApis(this, pluginName, meta);
        // this.pluginEvent = createModuleEventBus(pluginName, 200);
        // const enhancePluginContextHook = engineConfig.get('enhancePluginContextHook');
        // if (enhancePluginContextHook) {
        //   enhancePluginContextHook(this);
        // }    
    }
}