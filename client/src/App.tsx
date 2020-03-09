import React, { useState, Fragment, useEffect } from 'react';
import clsx from 'clsx';
import { Box, Theme, Typography } from '@material-ui/core';
import { Switch, Route } from 'react-router';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';

import ConditionalRoute from 'components/ConditionalRoute';
import AppHeader from 'components/AppHeader';
import AppDrawer from 'components/AppDrawer';
import LoginPage from 'pages/LoginPage';
import ForgotPasswordPage from 'pages/ForgotPasswordPage';
import { CurrentUserProvider } from 'contexts/CurrentUserContext';
import { isUserAuthenticated } from 'selectors';
import { attachTokenToHeader, detachTokenFromHeader } from 'utils/AxiosUtils';
import { GET_CURRENT_USER_URL } from 'constants/url';
import { CurrentPageProvider } from 'contexts/CurrentPageContext';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '95vh',
    overflow: 'auto'
  },
  footerPaddingIsLoggedIn: {
    paddingRight: theme.spacing(6)
  },
  footerColor: {
    color: '#C6C6C6'
  }
}));

const App: React.FC = () => {
  const classes = useStyles();
  const [currentPageTitle, setCurrentPageTitle] = useState<string>('');
  const [CurrentUserData, setCurrentUserData] = useState<CurrentUser>();
  const [isAuthenticating, setAuthenticating] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);

  const isLoggedIn = isUserAuthenticated(CurrentUserData);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const setCurrentUser = (currentUser: CurrentUser, token: string): void => {
    localStorage.setItem('token', token);
    attachTokenToHeader(token);

    setCurrentUserData(currentUser);
  };

  const unsetCurrentUser = (): void => {
    localStorage.removeItem('token');
    detachTokenFromHeader();

    setCurrentUserData(undefined);
  };

  useEffect(() => {
    const getPersistedToken = () => {
      return localStorage.getItem('token');
    };

    const getCurrentUserData = async () => {
      setAuthenticating(true);
      const token = getPersistedToken();

      if (token) {
        try {
          const response = await axios.get(GET_CURRENT_USER_URL, { headers: { Authorization: `Bearer ${token}` } });
          const currentUser: CurrentUser = response.data;

          setCurrentUser(currentUser, token);
        } catch (err) {
          unsetCurrentUser();
        }
      }

      setAuthenticating(false);
    };

    getCurrentUserData();
  }, []);

  return isAuthenticating ? null : (
    <Box>
      <CurrentUserProvider
        value={{
          currentUser: CurrentUserData,
          setCurrentUser,
          unsetCurrentUser
        }}
      >
        <CurrentPageProvider
          value={{
            currentPageTitle,
            setCurrentPageTitle
          }}
        >
          <div className={classes.root}>
            {isLoggedIn && (
              <Fragment>
                <AppHeader open={openDrawer} handleDrawerOpen={handleDrawerOpen} isAdminHeader={true} />
                <AppDrawer openDrawer={openDrawer} handleDrawerClose={handleDrawerClose} />
              </Fragment>
            )}
            <main className={classes.content}>
              {isLoggedIn && <div className={classes.appBarSpacer} />}
              <Switch>
                <ConditionalRoute exact={true} path={'/login'} routeCondition={!isLoggedIn} component={LoginPage} redirectTo={'/candidates'} />
                <ConditionalRoute
                  exact={true}
                  path={'/forgotpassword'}
                  routeCondition={!isLoggedIn}
                  component={ForgotPasswordPage}
                  redirectTo={'/'}
                />
              </Switch>
            </main>
          </div>
        </CurrentPageProvider>
      </CurrentUserProvider>
      <Typography
        variant='body2'
        align={!isLoggedIn ? 'center' : 'right'}
        className={clsx(classes.footerColor, { [classes.footerPaddingIsLoggedIn]: isLoggedIn })}
      >
        {'© 2020'}
      </Typography>
    </Box>
  );
};

export default App;
