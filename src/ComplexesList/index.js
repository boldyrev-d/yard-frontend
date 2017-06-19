import React, {Component} from 'react';
import Banner from './Banner';
import Content from './Content/Content';

class ComplexesList extends Component {
  render() {
    return (
      <div>
        <Banner/>
        <Content/>
      </div>
    );
  }
}

export default ComplexesList;
