import React from 'react';
import ReactDOM from 'react-dom';
import TodoManager from './TodoManager';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoManager />, div);
});
