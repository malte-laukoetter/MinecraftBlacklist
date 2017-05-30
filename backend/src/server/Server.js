"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Server {
    constructor(blacklist) {
        this._blacklist = null;
        this._blacklist = blacklist;
        this._hashs = [];
        this._domain = "";
        this._ip = "";
        this._port = 25565;
    }
    get hashs() {
        return this._hashs;
    }
    set hashs(value) {
        this._hashs = value;
    }
    get domain() {
        return this._domain;
    }
    set domain(value) {
        this._domain = value;
    }
    get ip() {
        return this._ip;
    }
    set ip(value) {
        this._ip = value;
    }
    get hasTriedToCircumvent() {
        return null; //this._blacklist this.hashs
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map