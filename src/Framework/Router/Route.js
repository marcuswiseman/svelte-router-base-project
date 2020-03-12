import Resolver from "./Resolver";

export default class Route {

    /**
     * @param {string} url
     * @param {object} view
     * @param {object} props
     */
    constructor(url, view, props = {}) {
        this._url = new Resolver(url);
        this._view = view;
        this._props = props;
    }

    /**
     * @returns {object}
     */
    getProps() {
        return this._props;
    }

    /**
     * @returns {string}
     */
    getURL() {
        return this._url.getURL();
    }

    /**
     * @returns {object}
     */
    getView() {
        return this._view;
    }

    /**
     * @param {object} view
     * @returns {Route}
     */
    setView(view) {
        this._view = view;
        return this;
    }

}