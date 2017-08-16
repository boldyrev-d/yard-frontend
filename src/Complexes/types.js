/* eslint-disable import/prefer-default-export */
// @flow

export type ImageShape = {
  id: string,
  isPublic?: boolean,
};

export type RangeShape = {
  from: number,
  to: number,
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

export type DetailsShape = {
  architect: string,
  startYear: number,
  startQuarter: string,
  commissioningYear: number,
  commissioningQuarter: string,
  ceilHeight: RangeShape,
  parkings: number,
  maintenanceCosts: number,
  propertyKind: string,
  security: string,
  undergroundGarages: number,
  constructionKind: string,
};

export type StatisticsShape = {
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
  totalResaleArea: RangeShape,
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
  totalPrimaryArea: RangeShape,
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
  totalArea: RangeShape,
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
  statistics: StatisticsShape,
  details: DetailsShape,
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
