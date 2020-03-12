export default class Resolver {

    /**
     * @param {string} url
     */
    constructor(url) {
        this._url = this.resolve(url);
    }

    /**
     * @param {string} url
     * @returns {string}
     */
    resolve(url) {
        return url.trim().replace(/^\/|\/$/g, '').split('?')[0];
    }

    /**
     * @returns {string}
     */
    getURL() {
        return this._url;
    }

}