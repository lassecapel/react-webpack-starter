import React from 'react';
import {List} from './components/KialaPicker';
import data from '../lib/data.js';
import assign from 'lodash/object/extend';

window.onload = () => {
  const state = assign({
    pickupPoints: data.PickupPointList,
  }, window.__INITIAL_STATE__);

  React.render(
    <List {...state} />,
    document.querySelector('#picker')
  );
};
