interface TrendConstructor{
name:string;
caption:string;
likes:number;
createdBy:String;
}

export class Trend{
name:string;
caption:string;
likes:number;
createdBy:String;
dateCreated:Date;

constructor(trend:TrendConstructor){
this.name=trend.name;
this.caption=trend.caption;
this.likes=0;
this.createdBy=trend.createdBy;
this.dateCreated=new Date();
}

}
