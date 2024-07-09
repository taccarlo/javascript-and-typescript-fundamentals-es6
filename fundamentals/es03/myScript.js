const obj = { id:123, name:"Carlo"};
obj.id =234;

const data = [1,2,3];
data[0]=10;
data.push(4);

try{
    const data2 = [1,2,3];
    data2 = [1,2,3];
} catch (error) {
    console.log("Error: " + error.message);
}
/*
<my-list [value] = "data">
<MyList value={data}>
*/

let data3 = [1,2,3];
data3 = data.concat([4,5,6]);
console.log(data);