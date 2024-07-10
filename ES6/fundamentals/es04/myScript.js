const a = 1;
try{
    a = 2;
} catch (error) {
    console.log("Error: " + error.message);
}
// le constanti non sono immutabili, se sono array o oggetti possono essere mutate come proprietà

var obj = {id:123, name : "Carlo"}
obj.id = 456;
obj.color="red";
console.log(obj);

try{
    obj.push(3);
} catch (error) {
    console.log("Error: " + error.message);
}

const data = [1,2,3];
data.push({});
console.log(data);
//per non renderizzare sempre 
let data2 = [1,2,3];
data2 = data2.concat([4]);
console.log(data2);