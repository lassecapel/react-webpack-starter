import React, {Component} from 'react';
import {DAYS} from '../../constants/Days.js';

class TimeSlot extends Component {

  parseTimeFrame(slot) {
    const formatTime = time => time.split(':').splice(0, 2).join(':');
    let timeFrame = 'gesloten';
    if (slot.Timespan) {
      const timeSpan = slot.Timespan[0];
      const start = formatTime(timeSpan.Start);
      const end = formatTime(timeSpan.End);
      timeFrame = `${start} tot ${end}`;
    }
    return timeFrame;
  }

  render() {
    const {timeSlot} = this.props;
    return (
      <tr>
        <td>{DAYS[timeSlot.Name]}</td>
        <td>{this.parseTimeFrame(timeSlot)}</td>
      </tr>
    );
  }
}

TimeSlot.propTypes = {
  timeSlot: React.PropTypes.object.isRequired,
};


export default TimeSlot;
