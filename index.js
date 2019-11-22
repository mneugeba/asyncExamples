// ATTENTION: this is an articial example. You should not alter global variables (a1,a2,a3,a4), instead you should
// provide the changed values as parameter for the specific return calls within the async mechanisms
// ...cb(newValue)...
// ...resolve(newValue)...
// ...observer.next(newValue)...

// Good overview tutorial: https://www.academind.com/learn/javascript/callbacks-vs-promises-vs-rxjs-vs-async-awaits/

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
