import { observable, decorate, autorun, computed } from "mobx";

class Todo {
  constructor(value) {
    this.id = Date.now();
    this.value = value;
    this.completed = false;
  }
}

decorate(Todo, {
  id: observable,
  value: observable,
  completed: observable
});

class TodoStore {
  todos = [];
  filter = "";
  dummy = "NMS";
  get filteredTodos() {
    let MatchFilter = new RegExp(this.filter, "i");
    return this.todos.filter(
      todo => !this.filter || MatchFilter.test(todo.value)
    );
  }
  createTodo(value) {
    this.todos.push(new Todo(value));
  }
  clearCompleted = () => {
    let incompleteTodos = this.todos.filter(todo => !todo.completed);
    this.todos.replace(incompleteTodos);
  };
}

decorate(TodoStore, {
  todos: observable,
  filter: observable,
  filteredTodos: computed
});

let store = (window.store = new TodoStore());

export default store;

autorun(() => {
  console.log("Store Changed To: ", store.todos);
});
