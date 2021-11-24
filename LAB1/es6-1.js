var num = 0;
var msg = "test";

console.log(num);
num = 1;
console.log(num);

{
    let num = 5;
    console.log(num);
}


console.log(num);

//////////const
{
    const num = 4;
    console.log(num);
//    num = 7;
}

///// Arrow fn.
//es5
function add (a,b) {
    return a * b;
}

var addFn = function (a,b) {
    return a * b;
};

console.log(add(5, 3));
console.log(addFn(4, 5));

//es6
cosnt addEs6 = (a, b) => a * b;
let multiAdd = (a, b) => {
    let c = a * b;
    return c;
};

onsole.log(add(10, 5));
console.log(addFn(4, 2));






