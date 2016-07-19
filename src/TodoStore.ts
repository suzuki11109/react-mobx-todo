import { observable, autorun } from 'mobx';

export default class TodoStore {
  @observable list: Todo[] = [];

  constructor() {
    this.list.push(new Todo('Todo 1'));
  }

  add(newTodo: string) {
    this.list.push(new Todo(newTodo));
  }

}

class Todo {
  @observable text: string;
  @observable completed: boolean = false;

  constructor(text: string) {
    this.text = text;
    autorun(() => {
      console.log(this.completed);
    });
  }
}
