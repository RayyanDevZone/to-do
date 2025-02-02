import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [NgFor, FormsModule] // Import required Angular modules directly
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({
        id: Date.now(),
        title: this.newTodo,
        completed: false
      });
      this.newTodo = '';
    }
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
