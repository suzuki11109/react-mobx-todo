import * as React from 'react';
import TodoStore from './TodoStore';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

class TodoAppProps {
  todoStore: TodoStore;
}

@observer
export default class TodoApp extends React.Component<TodoAppProps, any> {
  render() {
    return <div>
      <TodoList todoStore={this.props.todoStore} />
      <TodoInput todoStore={this.props.todoStore} />
      <div>Completed tasks: {this.props.children}</div>
    </div>;
  }
}

let completedStyles = {
  textDecoration: 'line-through'
};

@observer
class TodoList extends React.Component<{todoStore: TodoStore}, any> {
  render() {
    return <ul>
      { this.props.todoStore.list.map((todo) => {
        return <li style={todo.completed ? completedStyles: null}>
          <input type="checkbox" checked={todo.completed}
          onChange={() => todo.completed = !todo.completed} />
          {todo.text}
        </li>;
      }) }
    </ul>;
  }
}

@observer
class TodoInput extends React.Component<{todoStore: TodoStore}, any> {
  @observable newTodo: string;

  onClickAdd = () => {
    this.props.todoStore.add(this.newTodo);
    this.newTodo = '';
  }

  onInputChange = (e: any) => {
    this.newTodo = e.target.value
  }

  render() {
    return <div>
      <input type="text" value={this.newTodo}
        onChange={this.onInputChange} />

      <button onClick={this.onClickAdd}>Add</button>
    </div>;
  }
}
