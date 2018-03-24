import routes from './src/routes';
import Router from './src/Gordian/Router';

const router = new Router(routes);

document.getElementById('root').appendChild(router.host)