import Route from './Framework/Router/Route';
import Home from './Pages/Home.svelte';

let routes = [
    new Route('/', Home)
];

export { routes };