import React, {Component} from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { showNotification, hideNotification } from 'reducers/notifications';

import { dark } from 'styles/theme';
import styles from './notifications.scss';

class Notifications extends Component {
  renderNotification(notification, index) {
    const isSuccessNotification = notification.type === 'success';

    if (isSuccessNotification) {
      setTimeout(this.props.hideNotification, 4000, notification.id);
    }
    return (
      <div className={`${styles.notification} ${styles[notification.type]}`} key={index}>
        <div className={isSuccessNotification ? styles.successMessage : styles.errorMessage}>
          <span>{notification.message}</span>
        </div>
        {
          isSuccessNotification ? '' :
            <RaisedButton
              label='Ok'
              labelColor={dark}
              className={styles.notificationButton}
              onClick={() => this.props.hideNotification(notification.id)}
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
            this.props.notifications.map(this.renderNotification, this)
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const mapDispatchToProps = {
  showNotification,
  hideNotification
};

const mapStateToProps = state => ({
  notifications: state.notifications
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);


