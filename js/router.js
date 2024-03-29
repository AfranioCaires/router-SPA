export class Router {
  routes = {};

  add(routeName, path) {
    this.routes[routeName] = path;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState(null, null, event.target.href);
    this.handleRoute();
  }

  handleRoute() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
