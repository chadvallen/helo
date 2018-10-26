import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from './components/Nav/Nav';
import routes from './routes';

class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };

  render() {
    const { location } = this.props;
    return (
      <div className="App">
        {console.log(location.pathname)}
        <Nav location={location}/>
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
