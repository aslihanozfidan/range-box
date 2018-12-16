import React from 'react';
import ReactDOM from 'react-dom';
import RangeBox from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RangeBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
