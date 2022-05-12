// implementing the polyfill for forEach

// foreach will take a callback function as an argument
// Current element, its index, and the context should be passed as an argument to the callback function.
Array.prototype.myForEach = function(callback, context) {
    for(let i=0; i< this.length; i++) {
        if(this.indexOf(this[i]) > -1) {
            callback.call(context, this[i], i, this)
        }
    }
}

const newArr = [2,3,4,5,6];
newArr.myForEach(elm => console.log(elm));
// array.forEach((elm, index)=>{

// })