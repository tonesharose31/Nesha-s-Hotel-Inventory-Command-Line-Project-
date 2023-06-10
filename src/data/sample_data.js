const  { faker }  = require("@faker-js/faker")

function myHotelChoices() {
    let hotels = {
hotelNames : faker.name.findName(),
roomPrice : faker.finance.currencySymbol().faker.number.binary(),
availableRooms : faker.boolean(),
roomTypes: faker.science.chemicalElement(),
 }
return hotels 
}


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


