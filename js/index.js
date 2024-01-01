const routes = {
  "/about": "/pages/about.html",
  "/contact": "/pages/contact.html",
  "/": "/pages/home.html",
  404: "/pages/404.html",
};

function route(event) {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState(null, null, event.target.href);
  handleRoute();
}

function handleRoute() {
  const { pathname } = window.location;
  const route = routes[pathname] || routes[404];

  fetch(route)
    .then((data) => data.text())
    .then((html) => {
      document.querySelector("#app").innerHTML = html;
    });
}
handleRoute();
window.onpopstate = () => handleRoute();
window.route = () => route();
