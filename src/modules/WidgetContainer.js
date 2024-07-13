import { Widget } from "./widget";
export class WidgetContainer{
    constructor(container)
    {  
        this.items = [];
    }
    add(item){        
        this.items.push(new Widget(item))        
    }
}