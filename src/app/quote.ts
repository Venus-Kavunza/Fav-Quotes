export class Quote {
    showDescription:boolean;
    constructor(public quote:string, public arthur:string, public name: string, public description: string){
        this.showDescription=false;
    }
}
