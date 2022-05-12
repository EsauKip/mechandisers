export class Route {
    showDescription:boolean;
    constructor(public id:number, public name:string, public city:string, public location:string,public destination:string,public date:Date)
    {
        this.showDescription=false;
    }
}
