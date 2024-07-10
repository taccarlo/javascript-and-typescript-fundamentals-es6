import { Component } from '@angular/core';
import { HelloComponent } from './components/hello/hello.components';
@Component({
  selector: 'app-root',
  template: `
  <h1>ciao</h1>
  <app-hello></app-hello>
  <app-hello></app-hello>
  <app-hello></app-hello>
  <app-hello></app-hello>
  <app-hello></app-hello>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'with-modules';
}
