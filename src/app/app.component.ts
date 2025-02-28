import { Component, TRANSLATIONS } from '@angular/core';
import { FormComponent } from './form/form.component';
import { SidebarComponent } from './sidebare/sidebare.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GestionPostsComponent } from './gestion-posts/listPost/gestion-posts.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone : true,
  imports: [RouterOutlet,SidebarComponent]
})
export class AppComponent {
  title = 'appTuto';
}
