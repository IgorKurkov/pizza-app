import { loginUser } from '../utils/api';
import { errorHandler } from '../utils';

class AuthService {
  constructor() {
    this._token = localStorage.getItem('token') || null;
    this._claims = JSON.parse(localStorage.getItem('claims')) || null;
  }

  set token(token) {
    this._token = token;
    localStorage.setItem('token', token);
  }

  get token() {
    return this._token;
  }

  set claims(claims) {
    this._claims = claims;
    localStorage.setItem('claims', JSON.stringify(claims));
  }

  get claims() {
    return this._claims;
  }

  get username() {
    return this.claims.username;
  }

  get isAuthorized() {
    return !!this.token;
  }

  clearToken() {
    this._token = null;
    localStorage.removeItem('token');
    this._claims = null;
    localStorage.removeItem('claims');
  }
  
  logout() {
    this.clearToken();
  }

  login(userData) {
    return loginUser(userData)
      .then(response => {
        const { success, token } = response;
        if(success) {
          this.token = token;
          this.claims = this.parseJwtClaims(token);
          return { success };
        }
        return response;
      })
  }

  parseJwtClaims(jwtToken) {
    const base64Url = jwtToken.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64))
  }
}

export const AUTH_SERVICE = new AuthService();