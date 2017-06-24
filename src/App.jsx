import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import ComplexesList from './Complexes/List';
import Complex from './Complexes/Show';
import Footer from './Footer';

import theme from './theme';

export default () =>
  (<ThemeProvider theme={theme}>
    <Router>
      <main>
        <Header />
        <Route exact path="/" component={ComplexesList} />
        <Route path="/complexes/:id" component={Complex} />
        <Footer />
      </main>
    </Router>
  </ThemeProvider>);
