import React from 'react';

class Brewery extends React.Component {
  render() {
    const amenities = this.props.amenities

    return (
      <div className="breweries-amenities">
        <h4 className="brewery-amenities-title">Amenities</h4>
        <ul className="breweries-amenities-list">
          {amenities.map(a => <li key={a.id}>{a.name}</li>)}
        </ul>
      </div>
    )
  } 
}

export default Brewery;

// set up React Router for the Link component to work