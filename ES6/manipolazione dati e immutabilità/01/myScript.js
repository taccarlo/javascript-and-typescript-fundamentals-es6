//spread operator

let data = [1,2,3,4];
const res = [...data];
console.log(res);

const obj = {
    id:123,
    name:"Fabio"
}

const cloned = Object.assign(obj);
obj.id = 456;

console.log(cloned);

// cloned è una referenza all'oggetto passato

// workaround:
const cloned2 = Object.assign({}, obj);
obj.id = 567;


console.log(cloned2);