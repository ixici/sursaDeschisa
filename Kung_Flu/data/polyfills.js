/**
 * This polyfill for `setPrototypeOf` is needed only when running in development mode.
 * TODO: Find out why.
 * https://github.com/angular/angular/issues/24488#issuecomment-397736012
 */
(function () {
    if (!Object.setPrototypeOf) {
        if ({__proto__: []} instanceof Array) {
            Object.setPrototypeOf = function (obj, proto) {
                obj.__proto__ = proto;
                return obj;
            };
        } else {
            Object.setPrototypeOf = function (obj, proto) {
                for (var prop in proto) {
                    if (!obj.hasOwnProperty(prop)) {
                        obj[prop] = proto[prop];
                    }
                }
                return obj;
            };
        }
    }
})();