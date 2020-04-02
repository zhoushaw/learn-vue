export default function _proxy(data){
    Object.keys(data).forEach(key => {
        Object.defineProperty(this, key,{
            enumerable: false,
            configurable: true,
            get(){
                return data[key];
            },
            set(nVal){
                data[key] = nVal;
            }
        })
    })
}