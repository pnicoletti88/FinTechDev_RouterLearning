import React from 'react';
import ReactDOM from 'react-dom';
import App_Page_1 from './App_Page_1';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App_Page_1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
