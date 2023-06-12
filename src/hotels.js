const {faker} = require("@faker-js/faker");
const { nanoid } = require("nanoid");

function myHotelChoices() {
const room = faker.science.chemicalElement().name
let amount = faker.string.numeric(); 
const currencyUSD = "$" + amount * 100
let fakerHotel = faker.person.fullName() 
const hotelDesguise = `${fakerHotel + " " + ('Hotel')}`

let hotels = {
id: nanoid(6),
hotelNames : hotelDesguise,
roomPrice : currencyUSD,
availableRooms : faker.datatype.boolean(),
roomStyle: room,
}
return hotels 
}


function generateHotelsFactory(numObjects){
    const hotelArray =[];

    for(let i = 0; i< numObjects; i++){
        hotelArray.push(myHotelChoices())

        }
        return hotelArray;
    }


    function (params) {
        
    }


module.exports = { 
    myHotelChoices,
    generateHotelsFactory
}

//console.log(hotelNames)
// console.log(availableRooms),
// console.log(roomPrice),
// console.log(roomTypes),


//  },


