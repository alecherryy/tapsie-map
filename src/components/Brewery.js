import React from 'react';
import Amenities from './Amenities';

class Brewery extends React.Component {
  render() {

    return (
      <div className="brewery-component">
        <h3 className="brewery-title">{this.props.name}</h3>
        <p>{this.props.description}</p>
        <address className="brewery-address">{this.props.address}</address>
        <p className="brewery-hours">{this.props.hours}</p>
        <a className="brewery-link" href={'http://' + this.props.url}>{this.props.url}</a>
        <Amenities amenities={this.props.amenities} />
      </div>
    )
  } 
}

export default Brewery;