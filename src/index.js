import React from 'react';
import List from './List.jsx';

window.onload = () => {
  React.render(
    <List />,
    document.querySelector('#container')
  );
};
