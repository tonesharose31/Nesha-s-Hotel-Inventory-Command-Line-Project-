const  { faker }  = require("@faker-js/faker")

function myHotelChoices() {
const room = faker.science.chemicalElement().name
let amount = faker.random.numeric(); 
const currencyUSD = '$' + amount

let hotels = {
hotelNames : faker.person.fullName(),
roomPrice : currencyUSD,
availableRooms : faker.datatype.boolean(),
roomTypes: room,
}
return hotels 
}
//console.log(faker)

function randomHotelFactory (number){
    const hotel = [];
    for(let i ; i < number; i++){
        hotel.push(myHotelChoices())
    }
    return hotel
}


module.exports = { 
    myHotelChoices,
    randomHotelFactory
}

// console.log(hotelNames),
// console.log(availableRooms),
// console.log(roomPrice),
// console.log(roomTypes),

// {
//     hotelNames = 
//     availableRooms =
//     roomTypes =
//     roomPrice =

//     {hotelNames = 
//         availableRooms =
//         roomTypes =
//         roomPrice =

//     },


