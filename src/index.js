import React from 'react';
import ReactDOM from 'react-dom';
import {List} from './components/KialaPicker';
import data from '../lib/data.js';
import assign from 'lodash/object/extend';

window.onload = () => {
  const state = assign({
    pickupPoints: data.PickupPointList,
  }, window.__INITIAL_STATE__);

  ReactDOM.render(
    <List {...state} />,
    document.querySelector('#picker')
  );
};
