'use strict';

const contract = (fn, ...types) => (...args) => {
    for(let i = 0; i < args.length; i++)
    {
        const arg = args[i];
        const spic = types[i];
        const name = spic.name.toLowerCase();
        if(typeof arg !== name) 
        {
            throw new TypeError(`Type ${name} expected`);
        }
    }
    const res = fn(...args);
    const spic = types[types.length - 1];
    const name = spic.name.toLowerCase();
    if(typeof res !== name)
    {
        throw new TypeError(`Type ${name} expected`);
    }
    return res;
};

module.exports = { contract };
