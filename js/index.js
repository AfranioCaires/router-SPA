import { Router } from "./router.js";

const router = new Router();
router.add("/about", "/pages/about.html");
router.add("/contact", "/pages/contact.html");
router.add("/", "/pages/home.html");
router.add(404, "/pages/404.html");

router.handleRoute();
window.onpopstate = () => router.handleRoute();
window.route = () => router.route();
