import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebare/sidebare.component";
import { GestionPostsComponent } from '../gestion-posts/listPost/gestion-posts.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, GestionPostsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
