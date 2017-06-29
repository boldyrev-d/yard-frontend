import React, { Component } from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Summary from './Summary';
import Offers from './Offers';
import DistrictGuide from './DistrictGuide';
import Location from './Location';
import { get } from '../../api';

class Complex extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    get(`/complexes/${this.props.match.params.id}`).then(data => this.setState(data));
  }

  render() {
    const { name, location = {} } = this.state;

    return (
      <div>
        <Header name={name} location={location} />
        <Gallery />
        <Summary />
        <Offers />
        <DistrictGuide />
        <Location />
      </div>
    );
  }
}

export default Complex;
