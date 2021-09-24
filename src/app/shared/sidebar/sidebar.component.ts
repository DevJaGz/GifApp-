import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  title: string = 'GifApp';
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [{
      label: 'Menú',
      items: [
        { label: 'Item 1', icon: 'pi pi-fw pi-plus' },
        { label: 'Item 2', icon: 'pi pi-fw pi-download' }
      ]
    }]
  }

}
