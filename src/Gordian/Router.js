import Component from "./Component";

export default class Router extends Component {
  constructor(routes) {
    super();
    this.state = {
      activeRoute: null,
      activeComponent: null,
      routes
    };    
    window.addEventListener("hashchange", () => {
      this.handleUrlChange(this.currentPath);
    });
    
    this.handleUrlChange(this.currentPath); //this is kinda doubling fcksht
  }

  get currentPath() {
    return window.location.hash.slice(1);
  }

  handleUrlChange(currentUrl) {
    console.log('Router: currentPath', this.currentPath)

    const { routes } = this.state;
    const nextRoute = routes.find(route => route.href === currentUrl);
    if (!nextRoute) 
      return this.handleRedirect("/");
    
    if(nextRoute.onEnter != undefined && nextRoute.onEnter) 
      nextRoute.onEnter(); //for instance - delete token + logout
    
    if (nextRoute.hasRedirect) 
      return this.handleRedirect(nextRoute.redirectPath);

    if (nextRoute.canActivate != undefined && !nextRoute.canActivate) 
      return this.navigateTo('/login');

    this.applyRoute(nextRoute);
  }

  handleRedirect(redirectPath) {
    this.navigateTo(redirectPath);
  }

  navigateTo(url) {
    window.location.hash = url;
  }

  applyRoute(route) {
		const { Component } = route;
		const componentsInstance = new Component();

		this.updateState({
			activeRoute: route,
			activeComponent: componentsInstance,
		})
  }
  
  render() {
    return this.state.activeComponent.update();
  }
}
