import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { dark } from 'styles/theme';
import styles from './notifications.scss';

class Notifications extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      notifications: []
    };
    this.hideNotification = this.hideNotification.bind(this);
  }
  hideNotification(id) {
    this.setState({
      notifications: this.state.notifications.filter(notification => notification.id !== id)
    });
  }
  renderNotification(notification, index) {
    const isSuccessNotification = notification.type === 'success';

    if (isSuccessNotification) {
      setTimeout(this.hideNotification, 4000, notification.id);
    }
    return (
      <div className={`${styles.notification} ${styles[notification.type]}`} key={index}>
        <div className={isSuccessNotification ? styles.successMessage : styles.errorMessage}>
          <span>{notification.message}</span>
        </div>
        {
          isSuccessNotification ? '' :
            <ResetButton
              label='Ok'
              labelColor={dark}
              className={styles.notificationButton}
              onClick={this.hideNotification(notification.id)}
            />
        }
      </div>
    );
  }
  render() {
    return (
      <div className={styles.container}>
        <ReactCSSTransitionGroup
          transitionName={{
            enter: styles.notificationEnter,
            enterActive: styles.notificationEnterActive,
            leave: styles.notificationLeave,
            leaveActive: styles.notificationLeaveActive,
            appear: styles.notificationAppear,
            appearActive: styles.notificationAppearActive
          }}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {
            this.state.notifications.map(this.renderNotification, this)
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
export default Notifications;


