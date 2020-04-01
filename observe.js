
export default function observe(data, cb) {
    for (var key in data) {
        defineReactive(data, key, cb)
    }
}

function defineReactive(data, key, cb) {
    let val = data[key];
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
            return val;
        },
        set(nVal) {
            val = nVal;
            cb();
        }
    })
}
