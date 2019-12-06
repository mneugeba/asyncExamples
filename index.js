// ATTENTION: this is an articial example. You should not alter global variables (a1,a2,a3,a4), instead you should
// provide the changed values as parameter for the specific return calls within the async mechanisms
// ...cb(newValue)...
// ...resolve(newValue)...
// ...observer.next(newValue)...

// Good overview tutorial: https://www.academind.com/learn/javascript/callbacks-vs-promises-vs-rxjs-vs-async-awaits


//Danke
/*
// 0. PROBLEM
// -----------------------
console.log("Problem:");
function myBlackBox() {
    setTimeout(() => {
        a += 200;
    },1000)
};

let a = 100;
myBlackBox();
console.log("After function call:", a);
console.log("-------");
// -----------------------

 

// 1. Callback
// -----------------------
console.log("Callback:");
var a1 = 100;
function myBlackBox2(cb) {
    setTimeout(() => {
        a1 += 200;
        cb();
    },1000)
};
myBlackBox2(() => {
    console.log("Callback:", a1);
});
console.log("After function call:", a1);
console.log("-------");
// -----------------------
*/
/*    
// 2. Promise
// -----------------------
console.log("Promise:");
var a2 = 100;
function myBlackBox3() {
    return new Promise(resolve => {
        setTimeout(() => {
            a2 += 200;
            resolve();
        },1000)
    })
};

let myPromise = myBlackBox3();
myPromise.then(() => {
    console.log("Promise:", a2);
});
console.log("After function call:", a2);
console.log("-------");
// -----------------------


// 3. AsyncAwait
// -----------------------
console.log("Async/Await:");
let a3 = 100;
function myBlackBox4() {
    return new Promise(resolve => {
        setTimeout(() => {
            a3 += 200;
            resolve();
        },1000)
    })
};

async function tryAsync() {  
    await myBlackBox4();
    console.log("After await:", a3);
    console.log("-------");
};
tryAsync();
console.log("After function call:", a3);
console.log("-------");
// -----------------------

// 4. Observable
// -----------------------
console.log("Observable:");
let a4 = 100;
function myBlackBox5() {
    return new rxjs.Observable(observer => {
        setTimeout(() => {
            a4 += 200;
            observer.next();
        }, 1000);
    })
}

const observable$ = myBlackBox5();
observable$.subscribe( () => {
    console.log("Within subscription", a4);
});
console.log("After subscription:", a4);
console.log("-------");
*/



// Example to show:
// - the basic meaning of "this"
// - the changed meaning of "this" when used in a callback function
// - clarification that there is a difference between where a function is defined (e.g. within myObject) and where it is executed (e.g. within the global window scope)
// - bind(this)
// - arrow functions: less code to write, automatic binding

var p1 = 100;
var name = "Bob";

/*var onTimeout = function() {
    console.log(this);
    console.log("Nach 1 sec bin ich", this.name);
}*/

var myObject = {
    // external code
    val: 1,
    name: "Heinz",
    hello: function() {
        console.log(this);
        console.log("Ich bin", this.name);
        /*setTimeout(function() {
            console.log(this);
            console.log("Nach 1 sec bin ich", this.name);
            // console.log("Und ausserdem", window.name);
        }.bind(this), 1000);*/
        setTimeout(() => {
            console.log(this);
            console.log("Nach 1 sec bin ich", this.name);
            // console.log("Und ausserdem", window.name);
        }, 1000);
    },
    add1: function() {
        // changing the interal val
        this.val += 1;
        // returning an new object with an completely different val
        // this is misleading, meaningless and somewhat bad code
        // a function should have exactly 1 purpose
        // an add function should only add and not also return misleading objects
        return {
            val: 123
        }
    }
    // -----
}

var blub = function(a,b,c) {
    console.log(arguments);
}




console.log(name);
myObject.hello();
console.log(name);
blub(1, "hallo");
console.log(myObject.add1().val)

// this is bad code!
// console.log(myObject.add1(), myObject.add1(), myObject.add1(), myObject.val);
