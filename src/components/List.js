import React from 'react';
import Brewery from './Brewery';
import BreweriesList from './BreweriesList'; // delete this when API is in place

class List extends React.Component {

  render() {
    let breweries = BreweriesList.map(function(brewery) {
      return (
        <Brewery amenities={brewery.info} key={brewery.id} name={brewery.name} description={brewery.description} address={brewery.address} hours={brewery.hours} url={brewery.url} info={brewery.info} />
      );
    });

    return (
      <aside className="list">
        <blockquote className="list__quote">
          <p>
          Beauty<br></br>
          is in the eye<br></br>
          of the beerholder.
          </p>
        </blockquote>
        <div className="list__brewery">
          {breweries}
        </div>
      </aside>
    )
  } 
}

export default List;

// render: function() {
//   var breweries = BreweriesList.content.list.map(function(item) {
//     return (<div>{item.name}</div>);
//   });
  
//   return (<div>{breweries}</div>)
// } 