const users  =[
    {"id":1, "name":"silvia"},
    {"id":2, "name":"fabio"},
    {"id":3, "name":"luca"},
    {"id":4, "name":"lisa"}
]

const newList = users.map(function (user, index){
    console.log(user);
    return user.name;
})

console.log(JSON.stringify(newList));

const users2  =[
    {"id":1, "name":"silvia", "gender":"F"},
    {"id":2, "name":"fabio", "gender":"M"},
    {"id":3, "name":"lucia", "gender":"F"},
    {"id":4, "name":"fabio", "gender":"M"}
]
const newList2 = users2.filter(u=>{
    return u.gender!="M"
})
console.log(JSON.stringify(newList2))