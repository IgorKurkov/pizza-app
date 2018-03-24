import { AUTH_SERVICE } from './auth/auth-login-service';
import { App, Login, Register, User } from './containers';

export default [
	{
    href: '',
    hasRedirect: true,
    redirectPath: '/',
  },
  {
    href: '/login',
    Component: Login,
    hasRedirect: false,
  },
  {
    href: '/register',
    Component: Register,
    hasRedirect: false,
  },
  {
    href: '/',
    Component: App,
    hasRedirect: false,
    canActivate: AUTH_SERVICE.isAuthorized,
  },
  {
    href: '/user',
    Component: User,
    hasRedirect: false,
    canActivate: AUTH_SERVICE.isAuthorized,
  },
  {
    href: '/logout',
    hasRedirect: true,
    onEnter: () => AUTH_SERVICE.logout,
    redirectPath: '/',
  }
];