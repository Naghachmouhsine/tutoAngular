// sidebar.component.ts
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebare.component.html',
  styleUrls: ['./sidebare.component.css'],
  standalone : true,
  imports : [NgClass,RouterLink]
})
export class SidebarComponent {

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
