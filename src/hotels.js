const {faker} = require("@faker-js/faker")



function myHotelChoices() {
const room = faker.science.chemicalElement().name
let amount = faker.string.numeric(); 
const currencyUSD = '$' + amount * 100 
let fakerHotel = faker.person.fullName() 
const hotelDesguise = `${fakerHotel + " " + ('Hotel')}`

let hotels = {
hotelNames : hotelDesguise,
roomPrice : currencyUSD,
availableRooms : faker.datatype.boolean(),
roomTypes: room,
}
return hotels 
}
//console.log(faker)

function generateHotelsFactory(numObjects){
    const hotelArray =[];

    for(let i = 0; i< numObjects; i++){
        hotelArray.push(myHotelChoices())

        }
        return hotelArray;
    }



module.exports = { 
    myHotelChoices,
    generateHotelsFactory
}

//console.log(hotelNames)
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


