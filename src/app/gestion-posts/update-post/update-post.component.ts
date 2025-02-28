
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, Router, RouterConfigOptions } from '@angular/router';
import { Post } from '../Post';
import { GestionpostService } from '../../services/gestionpost.service';
import { get } from 'http';


@Component({
  selector: 'app-update-post',
  standalone: true,
  imports: [CommonModule,
        FormsModule],
  templateUrl: './update-post.component.html',
  styleUrl: './update-post.component.css'
})
export class UpdatePostComponent implements OnInit {

  post !: Post;
  users : number[]=[1,2,4,6,7]
  id!:number;
  typeOperation!:string; //1:update  ,  0: add
  constructor(private route: ActivatedRoute,private router : Router,private postServer:GestionpostService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id') || "0" );
    });
    console.log(this.id)
    this.getPostById()
  }
  getPostById(){
    this.postServer.getById(this.id).subscribe(
      {
        next : (res) =>{
          console.log(res);
          if(res.length==0){
           this.typeOperation="0";
           this.post=new Post(0,`${this.id}`,"","")

          }//operation ajouter (new post not existe)
          else
            this.post=res[0]; //post existe

        },
        error : (err) =>{
          console.log("erreur : ",err);
        }
      }
    );
  }
  onSubmit() : void {
    console.log(this.post)
    if(this.typeOperation=="0"){//ajouter
      this.postServer.add(this.post).subscribe(
        {
          next : (res) =>{
            console.log(res);
          },
          error : (err) =>{
            console.log("erreur : ",err);
          }
        }
      );
    }
    else{
      this.postServer.update(this.post).subscribe(
        {
          next : (res) =>{
            console.log(res);
          },
          error : (err) =>{
            console.log("erreur : ",err);
          }
        }
      );
    }
   this.cancel()
  }

   cancel(){
    this.router.navigate(["/posts"])
  }

}
