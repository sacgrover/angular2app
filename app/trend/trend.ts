interface TrendConstructor{
id:number
name:string;
caption:string;
likes:number;
createdBy:String;
dateCreated:Date;
}

export class Trend{
id:number;
name:string;
caption:string;
likes:number;
createdBy:String;
dateCreated:Date;

constructor(trend:any){
this.id=trend.id;
this.name=trend.name;
this.caption=trend.caption;
this.likes=trend.likes;
this.createdBy=trend.createdBy;
this.dateCreated=trend.dateCreated;
}

}
