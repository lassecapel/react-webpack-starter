import React, {Component} from 'react';
import TimeSlot from './TimeSlot';
import classnames from 'classnames';

const styles = {
  visible: {
    display: 'inherit',
  },
  invisible: {
    display: 'none',
  },
};

class Location extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
    this.bindEvents();
  }

  bindEvents() {
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    ev.preventDefault();
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    const {location} = this.props;
    const tableStyle = this.state.visible ? styles.visible : styles.invisible;
    const timeslots = location.OpeningHours.KialaDay.map((slot) => {
      const key = `${location.Id}_${slot.Name}`;
      return (
        <TimeSlot timeSlot={slot} key={key} />
      );
    });
    const providerName = location.Provider;
    const addressClass = classnames(
      'pickup-point-list__address',
      `pickup-point-list__address--${providerName}`
    );

    return (
      <li className="pickup-point-list__item">
        <div className="fluid-grid">
          <div className="fluid-grid__item">
            <div className={addressClass}>
              <p className="nosp">{location.Name}</p>
              <p className="small_details nosp">{location.Address.Street}, {location.Address.Zip}</p>
              <p className="small_details  nosp">afhalen bij de Albert Heijn servicebalie</p>
              <a href="#" className="small_details" onClick={this.handleClick}>openingstijden</a>
            </div>
            <div className="pickup-point-list__opening-hours" style={tableStyle} >
              <table className="table--openinghours small_details">
                <tbody>
                  {timeslots}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

Location.propTypes = {
  location: React.PropTypes.object.isRequired,
};


export default Location;
