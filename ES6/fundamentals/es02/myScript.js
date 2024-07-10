
var dd = "sono visibile ovunque";
{
 var ee = "anche io sono visibile ovunque";
}
console.log(dd, ee) 

let ff = "sono visibile ovunque";
{
 let gg = "sono visibile solo qui";
}
console.log(ff) 

try {
    console.log(gg) // undefined
} catch (error) {
    console.log(error.message);
}