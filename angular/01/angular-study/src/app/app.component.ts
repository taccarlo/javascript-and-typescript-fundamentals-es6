import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './components/hello.components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet,
      HelloComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-study';
}
