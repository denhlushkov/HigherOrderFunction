'use strict';

const iterate = (obj, callback) => {

    const data = Object.keys(obj);
    for(const key of data)
    {
        const value = obj[key];
        callback(key, value, obj);
    }

};

module.exports = { iterate };
