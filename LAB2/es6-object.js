let person ={
    firstName: "riw",
    lastName: "vonggg",
    age: 25,
    sex: "male",

    fullName : function () {
        return this.fistName + " " + this.lastName;
    },
};

console.log(person);

const p = person;
p.age = 10;
console.log(p);

person.age = 28;
console.log(person); //value
console.log(person.fullName); //property
console.log(person.fullName()); // return

//destructuring
const{fistName,lastName,age: a,sex: s } = person;
console.log(firstName);
console.log(s);

//string
const S1 = "Hello World !!";
const S2 = "My Name is ";
const Name = "riw";
const conCat = S1 + S2 + Rname;
console.log(conCat);
// backtick
conCat = I
         love
         it. ${S2} ${Rname}
         ;
console.log(conCat);

//Spread Op (...)
const A1 = [2, 3, 4,];
const A1 = [5, 6, 7,];
const comArr = [A1, A2];
console.log(comArr);

comArr = [...A1, ...A2];
console.log(comArr);

sum = (...numbers) => {
    let total = 0;
    for ( value of mumbers) total += value;
    return total;
};

    console.log(sum(comArr));





