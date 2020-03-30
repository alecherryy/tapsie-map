import React from 'react';
import Amenities from './Amenities';

class Brewery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {addClass: false}
  }
  toggle() {
    this.setState({addClass: !this.state.addClass});
  }
  
  render() {
    let amenitiesShow = ['amenities'];
    
    if(this.state.addClass) {
      amenitiesShow.push('show');
    }

    return (
      <div className="brewery" onClick={this.toggle.bind(this)}>
        <h3 className="brewery__title">{this.props.name}</h3>
        <p>{this.props.description}</p>
        <address className="brewery__address">{this.props.address}</address>
        <p className="brewery__hours">{this.props.hours}</p>
        <a className="brewery__link" href={'http://' + this.props.url}>{this.props.url}</a>
        <Amenities class={amenitiesShow.join(' ')} amenities={this.props.amenities} />
      </div>
    )
  } 
}

export default Brewery;