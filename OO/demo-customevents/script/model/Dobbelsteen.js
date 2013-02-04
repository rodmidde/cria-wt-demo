/**
 * class Dobbelsteen extends EventTarget {
 *     
 * }
 */
function Dobbelsteen(){
    EventTarget.call(this);
}

Dobbelsteen.prototype = new EventTarget();
Dobbelsteen.prototype.constructor = Dobbelsteen;
Dobbelsteen.prototype.throwMe = function(){
    var number = 1 + Math.round(5 * Math.random())
    this.fire({type:"throwEvent", value: number});
};