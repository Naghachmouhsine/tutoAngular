import { Post } from './../gestion-posts/Post';
import { HttpClient } from '@angular/common/http';
import { Injectable, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionpostService {
  // private apiUrl:string="https://jsonplaceholder.typicode.com/posts";
  private apiUrl:string="http://localhost:3000/posts";


  // make it observable
  posts:Post[]=[];
  constructor(private http: HttpClient,private router:Router) {

  }

  get()  : Observable<Post[] > {
      return this.http.get<Post[]>(`${this.apiUrl}`);
   }


  getById(id:number) : Observable<any>{
    return this.http.get<any>(this.apiUrl+"/?id="+id)
  }
  update(post:Post):Observable<Post[]>{
    return  this.http.put<Post[]>(`${this.apiUrl}/${post.id}`,post);

  }
  add(post:Post) : Observable<Post[]> {
      return this.http.post<Post[]>(this.apiUrl,post);
  }

  delete(post:Post):Observable<Post[]>{
    return this.http.delete<Post[]>(this.apiUrl+"/"+post.id)
  }

}
