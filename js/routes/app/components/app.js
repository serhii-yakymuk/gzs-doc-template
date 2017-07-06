import React, { Component } from 'react';

import Notifications from './notifications';
import Navigation from './navigation';

import styles from './app.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Notifications />
        <div className={styles.contentWrapper}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
