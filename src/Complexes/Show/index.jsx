/* @flow */

import React, { Component } from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Summary from './Summary';
import Offers from './Offers';
import DistrictGuide from './DistrictGuide';
import Location from './Location';
import { get } from '../../api';
import type { ComplexShape } from '../types';

class Complex extends Component {
  state = {};

  state: ComplexShape;

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    this.loadComplex(id);
  }

  componentWillReceiveProps(nextProps: Object) {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    if (nextProps.match.params.id !== id) {
      this.loadComplex(nextProps.match.params.id);
    }
  }

  loadComplex(id: string) {
    get(`/complexes/${id}`).then(data => this.setState(data));
  }

  render() {
    const {
      name, location = {}, images = [], details = {}, statistics = {},
    } = this.state;

    return (
      <div>
        <Header name={name} location={location} />
        <Gallery images={images} name={name} />
        <Summary details={details} statistics={statistics} />
        <Offers />
        <DistrictGuide />
        <Location location={location} />
      </div>
    );
  }
}

export default Complex;
