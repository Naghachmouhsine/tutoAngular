export class Post {
  constructor(public userId:number,
              public id:string,
              public title:string,
              public body:string
  ){}
  setId(id:any){
    this.id=id;
  }
}
