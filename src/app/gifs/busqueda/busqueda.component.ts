import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  public inputBusqueda: string = "";
  constructor(private gifsService: GifsService) {
  }

  ngOnInit(): void {
  }

  buscar() {
    if (this.inputBusqueda.trim().length == 0) return
    this.gifsService.buscarGifs(this.inputBusqueda)
    this.inputBusqueda = ""
  }

}
