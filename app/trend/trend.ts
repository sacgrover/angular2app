interface TrendConstructor{
id:number
name:string;
caption:string;
likes:number;
createdBy:String;
}

export class Trend{
id:number;
name:string;
caption:string;
likes:number;
createdBy:String;
dateCreated:Date;

constructor(trend:TrendConstructor){
this.id=trend.id;
this.name=trend.name;
this.caption=trend.caption;
this.likes=0;
this.createdBy=trend.createdBy;
this.dateCreated=new Date();
}

}
