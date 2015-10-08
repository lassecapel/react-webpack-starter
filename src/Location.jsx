import React, {Component, PropTypes} from 'react';

class Location extends Component {

  static propTypes = {
    location: PropTypes.object.isRequired
  };

  render() {
    const location = this.props.location
    return(
      <li>
        <div>{location.Name}</div>
        <p>{location.Address.Street}, {location.Address.Zip}</p>
      </li>
    );
  };
};

export default Location;
