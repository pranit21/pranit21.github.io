import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Todos from './features/todos/Todos';
import AddTodo from './features/todos/AddTodo';
import Todo from './features/todos/Todo';
import Counter from './features/todos/Counter';
import { Provider } from 'react-redux';
import store from './store';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Todos />
      },
      {
        path: '/counter',
        element: <Counter />
      },
      {
        path: '/todos',
        element: <Todos />
      },
      {
        path: '/add-todo',
        element: <AddTodo />
      },
      {
        path: '/todos/:id',
        element: <Todo />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
