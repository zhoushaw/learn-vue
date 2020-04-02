export default class Dep{
    constructor(){
        this.subs = [];
    }

    addSubs (sub){
        this.subs.push(sub);
    }

    removeSub (sub) {
        let index = this.subs.indexOf(sub)
        if (index!==-1) {
            this.subs.splice(index,1);
        }
    }

    notify () {
        let subs = this.subs.slice();
        for(var sub of subs) {
            sub.update();
        }
    }

}