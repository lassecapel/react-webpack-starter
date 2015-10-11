import React, {Component} from 'react';

class LocationSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.search || '',
    };
  }

  onChange(ev) {
    this.setState({
      value: ev.target.value.substr(0, 28),
    });
  }

  render() {
    const {value} = this.state;
    return (
      <input type="text" maxLength="28" value={value} className="kiala_postalcode  text-input" placeholder="Postcode / Plaats" onChange={this.onChange.bind(this)}></input>
    );
  }
}

LocationSearch.propTypes = {
  search: React.PropTypes.string,
};


export default LocationSearch;


// <div class="fluid-grid__item   h-boxedbottom--s">
//   <div class="input-group input-group--pickup-point-picker">
//     <input type="text" name="kiala_search_postalcode" maxlength="28" class="kiala_postalcode  text-input" value="3515 CZ" placeholder="Postcode / Plaats">
//       <span class="input-group__addon">
//         <div class="form-select  sb">
//           <select name="kiala_search_country" class="kiala_picker_select_input">
//             <option value="NL" selected="selected">Nederland</option>
//             <option value="BE">België</option>
//           </select>
//         </div>
//       </span>
