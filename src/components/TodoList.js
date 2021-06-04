import React, { useState } from 'react';
import { v4 } from 'uuid';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      title: 'I love music',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      key: v4(),
      isCompleted: false,
      isEdit: false,
    },
    {
      title: 'Repair PC',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      key: v4(),
      isCompleted: false,
      isEdit: false,
    },
    {
      title: 'Go shopping',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      key: v4(),
      isCompleted: false,
      isEdit: false,
    },
  ]);

  const addTodo = (title, description) => {
    setTodos(prevTodos => {
      return [
        {
          isCompleted: false,
          title,
          description,
          key: v4(),
        },
        ...prevTodos,
      ];
    });
  };

  const editTodo = (id, title, description) => {
    const updatedTodos = todos.map(todo => {
      if (todo.key === id) {
        return { ...todo, title, description, isEdit: false };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== id);
    });
  };

  const toggleCompleted = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.key === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleIsEdit = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.key === id) {
        // return { ...todo, todo: updatedTask };
        return { ...todo, isEdit: !todo.isEdit };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className='todoList'>
      <h1> Tasks Review App 🎼</h1>

      <TodoForm addTodo={addTodo} />

      <TransitionGroup>
        {todos.map(todo => {
          return (
            <CSSTransition
              key={todo.key}
              in
              appear={true}
              timeout={1400}
              classNames='example'
              unmountOnExit
            >
              <Todo
                key={todo.key}
                id={todo.key}
                title={todo.title}
                description={todo.description}
                removeTodo={removeTodo}
                toggleCompleted={toggleCompleted}
                isCompleted={todo.isCompleted}
                toggleIsEdit={toggleIsEdit}
                isEdit={todo.isEdit}
                editTodo={editTodo}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default TodoList;
