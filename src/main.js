import View from './Framework/View.svelte';
import Route from './Framework/Router/Route';
import {routes} from './Routes';
import PageNotFound from './404.svelte';

import Router from './Framework/Router/Router';

let route = new Router(routes, {
    'viewOnError' : {
        'view' : PageNotFound,
        'props' : {
            'title': 'Page not found!',
            'message' : 'Sorry this page could not be found, click <a href="/">here</a> to go back to homepage.'
        }
    }
}).route();

const view = new View({
    target: document.body,
    props: {
        activeRoute: route,
        props: route.getProps()
    }
});

export default view;