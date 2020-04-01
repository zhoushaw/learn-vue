export default function _proxy(target,key,sourceKey){
    let val = target[sourceKey];
    Object.defineProperty(this,key,{
        enumerable: false,
        configurable: true,
        get(){
            return val;
        },
        set(nVal){
            target[sourceKey] = nVal;
        }
    })
}