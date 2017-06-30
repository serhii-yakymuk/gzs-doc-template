import React, { Component } from 'react';

import Notifications from './notifications';
import Navigation from './navigation';
import Loader from './loader';

import styles from './app.scss';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isLoading: false
    };
  }
  render() {
    return (
      <div>
        <Navigation />
        <Notifications />
        {
          this.state.isLoading ?
            <Loader /> :
            <div className={styles.contentWrapper}>
              { this.props.children }
            </div>
        }
      </div>
    );
  }
}


export default App;
