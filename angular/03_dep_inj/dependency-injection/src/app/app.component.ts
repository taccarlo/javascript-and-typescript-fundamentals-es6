import { Component } from '@angular/core';
import { ConfigService } from './services/config.service';
@Component({
  selector: 'app-root',
  template: `
      <h1>Salve {{configService.theme}}</h1>
      <button (click)="setTheme('light')">Clicca qui</button>
      <button (click)="setTheme('dark')">Clicca qui</button>
    `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  theme: string;
  constructor(public configService:ConfigService){
    this.theme = configService.theme;
  }
  setTheme(a:string) {
    this.configService.setTheme(a);
  }
}
