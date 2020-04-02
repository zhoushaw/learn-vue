import Dep from './dep.js';
export default class Watcher {
    constructor(vm,cb){
        this.vm = vm;
        this.cb = cb;

        Dep.target = this;
    }

    update(){
        this.cb.call(this.vm);
    }
}