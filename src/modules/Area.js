import { WidgetContainer } from './WidgetContainer';

export class Area {
    constructor() {
        this.container = new WidgetContainer();
    }
    add(config) {
        this.container.add(config);
    }
}