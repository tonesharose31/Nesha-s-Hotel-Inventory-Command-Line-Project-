
const inform = console.log;
const { nanoid } = require("nanoid");
const chalk = require("chalk");
const data = require("./data/hotels.json")

function create( goCart,newTels) {
    const index = data.find(
        (hotels) => hotels.hotelNames === newTels
    );
const hotelCheck = {
         id: `${nanoid(6)}`,
        hotelNames : newTels,
        roomPrice : index.roomPrice,
        availableRooms : index.availableRooms,
        roomStyle: index.roomStyle
        }
        goCart.push(hotelCheck);
        return goCart
        }


   function index(goCart) {
    return goCart.map( 
        (eachHotels) => eachHotels.id + " " + eachHotels.hotelNames + " " + eachHotels.roomPrice + "" + eachHotels.availableRooms+ " " +eachHotels.roomStyle);
    }
    
    
    
   
    index();












//console.log(hotelNames)
// console.log(availableRooms),
// console.log(roomPrice),
// console.log(roomTypes),


//  },










module.exports= {
    index,create, show, update, destroy
}