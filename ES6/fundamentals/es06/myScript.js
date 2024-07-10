const user = {
    id:123,
    name:"Carlo",
    surname:"Rossi",
    profile:{
        color:'red',
        location:"Trieste"
    }
}

const id = user.id;
const color = user.profile.color;
const params = {
    id,
    color
}
/*
equivale a 
const params = {
    id:user.id,
    color:user.profile.color
}
*/

// ajax 
console.log(params)