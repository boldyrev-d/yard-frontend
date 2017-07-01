/* eslint-disable import/prefer-default-export */
// @flow

export type ImageShape = {
  id: string,
  isPublic?: boolean,
};

export type LocationShape = {
  latitude?: string,
  localityId?: number,
  subLocalityName?: string,
  subwayIds?: Array<number>,
  countryName?: string,
  longitude?: string,
  postalCode?: number,
  countryId?: number,
  house?: string,
  localityName?: string,
  street?: string,
  regionId?: number,
  regionName?: string,
};

export type ComplexShape = {
  commissioningYear?: number,
  adjacentTerritory?: {
    area?: number,
    isAccessOpen?: boolean,
    isAllowedCars?: boolean,
    isGreeneryPlanted?: boolean,
    playgrounds?: number,
  },
  name: string,
  updatedAt?: string,
  location: LocationShape,
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
  keysIssueDate?: string,
  purchaseTimeConditions?: {
    agreementPreparation?: number,
    oralReservation?: number,
  },
  commissioningQuarter?: number,
  linkedContactIds: Array<number>,
  responsibleUser?: {
    id: number,
    departmentId: number,
  },
  createdByUserId: number,
  id: number,
  updatedByUserId?: number,
  createdAt: string,
  images: Array<ImageShape>,
  accreditors: Array<number>,
};
