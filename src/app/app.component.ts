import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'GifApp';

  dockItems: any = [];

  ngOnInit() {
      this.dockItems = [
          {
              label: 'Youtube',
              icon: "../assets/Icon/youtube.svg"
          },
          {
              label: 'Facebook',
              icon: "../assets/Icon/facebook.svg"
          },
          {
              label: 'Instagram',
              icon: "../assets/Icon/instagram.svg"
          },
          {
              label: 'Telegram',
              icon: "../assets/Icon/telegrama.svg"
          }
      ];

  }
}
