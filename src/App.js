import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import Header from './Header';
import ComplexesList from './ComplexesList';
import Complex from './Complexes/Show';
import Footer from './Footer';

import {theme} from './themes';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={ComplexesList} />
            <Route path="/complexes/:id" component={Complex} />
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
