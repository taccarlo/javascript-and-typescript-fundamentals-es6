import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListItem } from './components/todolistitem/TodoListItem';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListItem],
  template: 
  `
    <ul>
      <todo-list-item></todo-list-item>
      <todo-list-item></todo-list-item>
      <todo-list-item></todo-list-item>
      <todo-list-item></todo-list-item>
    </ul>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'with-standalone-components';
}
