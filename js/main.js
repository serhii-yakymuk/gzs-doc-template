import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { configureStore, history } from './store/store';
import App from './routes/app';
import Project from './routes/project';
import TechnicalDocumentation from './routes/technicalDocumentation';
import Settings from './routes/settings';
import NotFound from './routes/notFound';

/* common app styles */
import 'styles/main.scss';
import { muiTheme } from 'styles/theme';

const store = configureStore();

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/** Initialize app */
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <App>
          <Switch>
            <Redirect exact from='/' to='/project' />
            <Route path='/project' component={Project} />
            <Route path='/technical-documentation' component={TechnicalDocumentation} />
            <Route path='/settings' component={Settings} />
            <Route component={NotFound} />
          </Switch>
        </App>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>, document.querySelector('.app'));
