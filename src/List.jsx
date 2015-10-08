import React, {Component, PropTypes} from 'react';
import Location from './Location.jsx';
import data from '../lib/data.js';


class List extends Component {

  handleClick(e) {
    this.setState({
      shortList: !this.state.shortList
    });
    e.preventDefault();
  };

  constructor(props) {
    super(props);
    this.state = {shortList: true};
  };

  render() {
    let number = this.state.shortList ? 3 : data.PickupPointList.length;
    let locations = data.PickupPointList.slice(0, number).map(pp => {
      return <Location key={pp.Id} location={pp} />
    });
    return(
      <div>
        <p>Kies je locatie:</p>
        <ul>{locations}</ul>
        <a href="#" onClick={this.handleClick.bind(this)}>Toggle</a>
      </div>
    )
  };
};

export default List;
