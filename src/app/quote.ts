export class Quote {
    public showDescription:boolean;
    constructor(public quote:string, public arthur:string, public name: string, public description: string, public completeDate: Date){
        this.showDescription=false;
    }
}
