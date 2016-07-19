import * as React from 'react';
import { render } from 'react-dom';

import TodoApp from './TodoApp';
import TodoStore from './TodoStore';

let todoStore = new TodoStore();

render(<TodoApp todoStore={todoStore} />, document.getElementById('app'));

