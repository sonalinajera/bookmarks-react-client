import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import AddBookmark from './addBookmark';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddBookmark />, div);
  ReactDOM.unmountComponentAtNode(div);
});
