import React,{ isValidElement, createElement,cloneElement } from 'react';
export class Widget{
    constructor(config)
    {
        this.config = config;
    }

    get name()
    {
        return this.config.name;
    }

    get content()
    {
        if(isValidElement(this.config.content)){
            return this.config.contentProps ? cloneElement(this.config.content,this.config.contentProps) : this.config.content;
        }        
        return createElement(this.config.content,this.config.contentProps)
    }
}