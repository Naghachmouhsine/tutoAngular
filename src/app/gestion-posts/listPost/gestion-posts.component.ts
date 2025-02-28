import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';

import { NgFor } from '@angular/common';
import { GestionpostService } from '../../services/gestionpost.service';
import { Post } from '../Post';
import {  Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from '../details/details.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
@Component({
  selector: 'app-gestion-posts',
  standalone: true,
  imports: [NgFor,FormsModule,MatPaginatorModule],
  templateUrl: './gestion-posts.component.html',
  styleUrl: './gestion-posts.component.css'
})
export class GestionPostsComponent implements OnInit{

    posts : Post[]=[];
    postsFiltrs : Post[]=[];
    postAfficher: Post=new Post(0,'0',"","");
    detailAfficher:boolean=false;
    titleSh!:string;
    lastId!:number;
    page: number = 0;
    size: number = 5;
    pageSizeOptions:number[]=[]
    @ViewChild(MatPaginator, { static: true })
    paginator!: MatPaginator;

    constructor(private postService:GestionpostService,private router:Router, private dialog :  MatDialog){}



    ngOnInit(): void {
        this.get();
    }

    next(){
      this.page++;
    }
    prev(){
      if(this.page>1)
        this.page--
      else
        this.page=0
    }

    get(){
      this.postService.get().subscribe(
        {
          next : (res) =>{
            this.posts=res;
            this.posts.sort( (p1,p2)=>parseInt(p2.id)-parseInt(p1.id)) //trie decroissante
            this.postsFiltrs=this.posts;
            console.log(this.postsFiltrs)
          },
          error : (err) =>{
            console.log("erreur : ",err);
          }
        }
      )
      this.lastId=parseInt(this.posts[0].id);
      this.lastId++
      console.log(this.lastId)


  }

  pageChanged(event: { pageIndex: number; pageSize: number }) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.get();
  }

    update(post:Post) {
        this.router.navigate(["/modifierPost",post.id])
    }

    searsh(title:string){
      if(title!==""){
        let pattern=new RegExp(title);
        this.postsFiltrs=this.posts.filter(p=>pattern.test(p.title))
      }
      else
        this.get()

    }

    add(){
      this.router.navigate(["/modifierPost",this.lastId]);
    }

    delete(post:Post){
      this.postService.delete(post).subscribe(
        {
          next : (res) =>{
            this.get()
          },
          error : (err) =>{
            console.log("erreur : ",err);
          }
        }
      );
    }

    detail(post:Post){
      this.dialog.open(DetailsComponent, {
       data : post, width : "500px"
      });
    }
}
