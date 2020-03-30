import React, { Component } from 'react';
import List from './List';
import Leaflet from './Leaflet';

class Explore extends React.Component {
  render() {
    return (
      <div className="tapsie__container">
        <List />
        <Leaflet />
      </div>
    );
  }
}

export default Explore;
