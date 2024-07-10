
const user = {
    id:123,
    name:"Carlo",
    surname:"Rossi",
    profile:{
        location:{
            lat:15,
            lng:12
        }
    }
}

const {profile:{location:{lat:lt, lng:lg, zoom=5}}} = user;
//console.log(lat,lng,zoom);

const params = {
    lt,
    lg,
    zoom,
}
console.log(params);