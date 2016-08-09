import { observable, autorun, computed } from 'mobx';

export default class TodoStore {
  @observable list: Todo[] = [];

  constructor() {
    this.list.push(new Todo('Todo 1'));
  }

  add(newTodo: string) {
    this.list.push(new Todo(newTodo));
  }

  @computed get completedTasks(): number {
    return this.list.reduce((prev, curr) => {
      if (curr.completed) {
        return prev + 1;
      }
      return prev;
    }, 0);
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
