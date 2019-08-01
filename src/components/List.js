import React from 'react';
// import myAPI from 'some/API';
import Brewery from './Brewery';
import BreweriesList from './BreweriesList'; // delete this when API is in place

// const brewerylList = myAPI({
//   key: ProcessingInstruction.env.API_KEY,
//   secret: ProcessingInstruction.env.API_SECRET
// })

class List extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     breweries: []
  //   }
  // }

  // componentDidMount() {
  //   BreweriesList.content.list.find({location: 'USA'})
  //   .then(data => {
  //     let breweries;

  //     if (data.myAPI.breweries && data.myAPI.breweries.brewery ) {
  //       if (Array.isArray(data.myAPI.breweries.brewery)) {
  //         breweries = data.myAPI.breweries.brewery;
  //       } else {
  //         breweries = [data.myAPI.breweries.brewery];
  //       }
  //     }
  //   })
  // }

  render() {

    var breweries = BreweriesList.map(function(brewery) {
      return (
        <Brewery amenities={brewery.info} key={brewery.id} name={brewery.name} description={brewery.description} address={brewery.address} hours={brewery.hours} url={brewery.url} info={brewery.info} />
      );
    });

    return (
      <aside className="brewery-list">
        <blockquote className="brewery-list-quote">
          <p>
          Beauty<br></br>
          is in the eye<br></br>
          of the beerholder.
          </p>
        </blockquote>
        {breweries}
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