
const data = require("./hotels")
const { nanoid } = require("nanoid");
const chalk = require("chalk");

function create( id,hotelNames, roomPrice ,availableRooms,room) {
    
const newHotel = {
         id: `${nanoid(6)}`,
        hotelNames: index.hotelNames,
        roomPrice : index.roomPrice,
        availableRooms : index.availableRooms,
        roomTypes: index.room
        }
     data.push(newHotel)

     console.log("You have successfully created a new Hotel!");
        }


        function index(goCart){
         const hotelFeeds=[];
             for(let i = 0; i< goCart; i++){
                hotelFeeds.push(create())
               }
            return hotelFeeds;
            }

        





//    function index(goCart) {
//      goCart.map( 
//         (eachHotels) => eachHotels.id + " " + eachHotels.hotelNames + " " + eachHotels.roomPrice + "" + eachHotels.availableRooms+ " " +eachHotels.roomStyle);
//     }
    
    
    
   
   index();












//console.log(hotelNames)
// console.log(availableRooms),
// console.log(roomPrice),
// console.log(roomTypes),


//  },










module.exports= {
    index,create// show, update, destroy
}