import { Component, Inject, Input } from '@angular/core';
import { Post } from '../Post';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionpostService } from '../../services/gestionpost.service';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatDialogContent,CommonModule,FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

    post!:Post;
    users : number[]=[1,2,4,6,7]

    constructor(public dialogRef: MatDialogRef<DetailsComponent>,@Inject(MAT_DIALOG_DATA) public data: Post,public postServer:GestionpostService) {
      this.post=data;
    }

    closeDialog() {
      this.dialogRef.close();
    }
    onSubmit() : void {
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
        this.closeDialog()
      }
}
