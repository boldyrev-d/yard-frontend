import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import ComplexesList from './ComplexesList';
import ComplexesShow from './ComplexesShow';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Route exact path="/" component={ComplexesList} />
            <Route path="/complexes/:id" component={ComplexesShow} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
