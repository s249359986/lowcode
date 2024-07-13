import { Area } from "./Area";

export class Skeleton{
    constructor()
    {
        this.topArea = new Area();
        this.leftArea = new Area();
        this.mainArea = new Area();
    }

    add(config){
        return this.topArea.add(config);
    }
}