/* @flow */

import React from 'react';
import { pluralize } from './../utils';

type Props = {
  number: number,
  one: string,
  few: string,
  other: string,
};

export default ({ number, one, few, other }: Props) =>
  (<span>
    {pluralize(number, one, few, other)}
  </span>);
