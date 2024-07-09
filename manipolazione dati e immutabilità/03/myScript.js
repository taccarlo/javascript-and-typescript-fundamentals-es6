const users = [
    {"id":1, "name":"silvia", "gender":"F"},
    {"id":2, "name":"fabio", "gender":"M"},
    {"id":3, "name":"lucia", "gender":"F"},
    {"id":4, "name":"fabio", "gender":"M"}
];

//add
const user = {id:50, name:"Mario"};
let newList = [...users,user]

//delete
const ID = 4;
newList = users.filter(u=>u.id !==ID)


//edit
const updatedUser = { id:2, name:"ciccio",age:25}

newList = users.map(u=>
{
   return (u.id===updatedUser.id)?{...u,...updatedUser}:u;
})

console.log(JSON.stringify(newList));
