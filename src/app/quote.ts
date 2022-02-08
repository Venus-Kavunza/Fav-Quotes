export class Quote {
    public upvotes:number
    public downvotes:number
    public showDescription:boolean;
    constructor(public quote:string, public arthur:string, public name: string, public description: string, public completeDate: Date){
        this.showDescription=false;
        this.upvotes=0
        this.downvotes=0
    }
}
