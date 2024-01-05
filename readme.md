# Router

The Router class is a basic JavaScript class designed to manage routing within a web application. It allows for the addition of routes and handles navigation by fetching HTML content dynamically.

### Usage

1. Initialization:
  
```javascript
   const router = new Router();
   ```

2. Adding Routes:
  
```javascript
   router.add('routeName', '/path/to/route');
   ```

3. Routing Events:
  
```javascript
   // Example: Link click event
   document.querySelector('a').addEventListener('click', (event) => {
     router.route(event);
   });
   ```

### Methods

- add(routeName, path): Adds a new route to the router.
- route(event): Handles the navigation event and updates the route accordingly.
- handleRoute(): Retrieves HTML content for the specified route using the fetch API and updates the #app element's content.

### Notes

- The Router class utilizes the HTML5 History API for smooth navigation without page reloads.
- The handleRoute() method fetches the content of the route and updates the designated HTML element (#app in this case) with the fetched HTML.

### Example

```javascript
const router = new Router();

router.add('home', '/home');
router.add('about', '/about');

document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', (event) => {
    router.route(event);
  });
});```

