//destructuting

const list = [10,20,40,40]
console.log(list);

const [a,b] = list;

//equivalente a 
// var a = list[0], b = list[1]

const list2 = [10,20,30,40,50];
const [g,h,...rest] = list2;
console.log(g,h,rest);

const user = {
    first : "Mario",
    last : "Rossi"
};

const {first,last} = user;
user.first="Paolo";
console.log(`${first} ${last}`)


const { first : f, last: l}=user;
console.log(`${f} ${l}`)

//if preference is not set use default value as black
const { first : j, preference = 'black'}=user;
console.log(`${f} ${preference}`)
