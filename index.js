exports.cache = function (key, val) {
    if (val) {
        sessionStorage.setItem(key, JSON.stringify(val));
        return val;
    }
    if (val === null) {
        return sessionStorage.removeItem(key);
    }
    val = sessionStorage.getItem(key);
    return val ? JSON.parse(val) : null;
};

exports.persist = function (key, val) {
    if (val) {
        localStorage.setItem(key, JSON.stringify(val));
        return val;
    }
    var o = localStorage.getItem(key);
    if (val === null) {
        localStorage.removeItem(key);
    }
    if (!o) {
        return null;
    }
    try {
        return JSON.parse(o);
    } catch (e) {
        return null;
    }
};
