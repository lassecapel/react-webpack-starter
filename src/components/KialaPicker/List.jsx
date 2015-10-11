import React, {Component} from 'react';
import Location from './Location.jsx';
import LocationSearch from './LocationSearch';
import LocationMap from './LocationMap';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {shortList: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    this.setState({
      shortList: !this.state.shortList,
    });
    ev.preventDefault();
  }

  renderMap(showMap) {
    if (showMap) {
      return (
        <LocationMap />
      );
    }
  }

  render() {
    const {
      pickupPoints,
      searchTerm,
      showMap,
    } = this.props;
    const {shortList} = this.state;
    const number = shortList ? 3 : pickupPoints.length;
    const openClose = shortList ? 'Open' : 'Close';

    const locations = pickupPoints.slice(0, number).map(pp => {
      return <Location key={pp.Id} location={pp} />;
    });

    return (
      <div className="details details-small">
        <h1>Kies je locatie:</h1>
        {this.renderMap(showMap)}
        <LocationSearch search={searchTerm}/>
        <ul className="pickup-point-list  pickup-point-list--shortlist">
          {locations}
        </ul>
        <a href="#" onClick={this.handleClick}>{openClose}</a>
      </div>
    );
  }
}

List.defaultProps = {
  searchTerm: '',
};

List.propTypes = {
  pickupPoints: React.PropTypes.array.isRequired,
  showMap: React.PropTypes.bool.isRequired,
  searchTerm: React.PropTypes.string,
};


export default List;
