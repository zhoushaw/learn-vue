import Dep from './dep.js';

export default function observe(data, cb) {
    for (var key in data) {
        defineReactive(data, key, cb)
    }
}

function defineReactive(data, key, cb) {
    let val = data[key];
    let dep = new Dep();

    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
            if (Dep.target) {
                dep.addSubs(Dep.target);
            }
            return val;
        },
        set(nVal) {
            val = nVal;
            dep.notify();
        }
    })
}


