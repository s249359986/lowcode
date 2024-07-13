import Workbench from '../layout/Workbench';
import React,{ createElement } from 'react';
import ReactDOM from 'react-dom/client';
import { PluginManager } from './PluginManager';
import { Skeleton } from './Skeleton';


export {
    plugins
}

const skeleton = new Skeleton();
const pluginContextApiAssembler = {
    assembleApis:(context)=>{
        context.skeleton = skeleton
    }

}
let plugins = new PluginManager(pluginContextApiAssembler);



export async function init(container,
    options,
    pluginPreference){
        await plugins.init(pluginPreference);
        const root = ReactDOM.createRoot(container);
        root.render(
            createElement(Workbench,{skeleton:skeleton})  
        );
    
}