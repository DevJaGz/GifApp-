import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {

  title: string = 'GifApp';

  constructor(private gifsService: GifsService) {

  }

  get historial() {
    return this.gifsService._historial
  }


  message() {
    console.log("MSG");
  }

}