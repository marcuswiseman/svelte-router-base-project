import Resolver from "./Resolver";
import Route from "./Route";

export default class Router {

    /**
     * @param {Route[]} routes
     * @param {object} options
     * @returns {boolean|Route}
     */
    constructor(routes = [], options = {}) {
        this.setRoutes(routes);
        this.setOptions(options);
    }

    /**
     * @returns {Route[]}
     */
    getRoutes() {
        return this._routes;
    }

    /**
     * @param {Route[]} routes
     * @returns {*}
     */
    setRoutes(routes = []) {
        this._routes = routes;
        return this;
    }

    /**
     * @param {object} options
     * @returns {Router}
     */
    setOptions(options = {}) {
        this._options = options;
        return this;
    }

    /**
     * @returns {Object}
     */
    getOptions() {
        return this._options;
    }

    /**
     * @returns {boolean|Route}
     */
    route() {
        let result = false;
        let slug = new Resolver(window.location.pathname.substr(1));
        let BreakException = {};

        try {
            this.getRoutes().forEach(function (route, index) {
                if (slug.getURL() === route.getURL()) {
                    result = route;
                    throw BreakException;
                }
            });

            if (this.getOptions().viewOnError !== undefined && result === false) {
                result = new Route('', this.getOptions().viewOnError.view, this.getOptions().viewOnError.props);
            }

        } catch (e) {
            if (e !== BreakException) throw e;
        }

        return result;
    }
};