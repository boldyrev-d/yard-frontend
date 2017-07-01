/* @flow */

import React, { Component } from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Summary from './Summary';
import Offers from './Offers';
import DistrictGuide from './DistrictGuide';
import Location from './Location';
import { get } from '../../api';

class Complex extends Component {
  state = {};

  state: {
    adjacentTerritory: Object,
    name: string,
    updatedAt: string,
    location: {
      latitude: string,
      districtId: number,
      localityId: number,
      subLocalityName: string,
      subwayIds: Array<number>,
      countryName: string,
      districtName: string,
      longitude: string,
      postalCode: number,
      countryId: number,
      subLocalityId: number,
      house: string,
      localityName: string,
      street: string,
      regionId: number,
      regionName: string,
    },
    state: string,
    statistics: {
      resalePropertiesCount: number,
      price: {
        from: {
          usd: number,
          eur: number,
          rub: number,
        },
        to: {
          usd: number,
          eur: number,
          rub: number,
        },
      },
      totalResaleArea: {
        from: number,
        to: number,
      },
      resalePrice: {
        from: {
          usd: number,
          eur: number,
          rub: number,
        },
        to: {
          usd: number,
          eur: number,
          rub: number,
        },
      },
      propertiesCount: number,
      totalPrimaryArea: {
        from: number,
        to: number,
      },
      primaryPrice: {
        from: {
          usd: number,
          eur: number,
          rub: number,
        },
        to: {
          usd: number,
          eur: number,
          rub: number,
        },
      },
      primaryPropertiesCount: number,
      totalArea: {
        from: number,
        to: number,
      },
    },
    purchaseTimeConditions: Object,
    linkedContactIds: Array<number>,
    responsibleUser: {
      id: number,
      departmentId: number,
      divisionId: number,
    },
    createdByUserId: number,
    id: number,
    updatedByUserId: number,
    createdAt: string,
    images: Array<Object>,
    accreditors: Array<Object>,
  };

  componentDidMount() {
    this.loadComplex(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps: Object) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.loadComplex(nextProps.match.params.id);
    }
  }

  loadComplex(id: string) {
    get(`/complexes/${id}`).then(data => this.setState(data));
  }

  render() {
    const { name, location = {}, images = [] } = this.state;

    return (
      <div>
        <Header name={name} location={location} />
        <Gallery images={images} />
        <Summary />
        <Offers />
        <DistrictGuide />
        <Location />
      </div>
    );
  }
}

export default Complex;
