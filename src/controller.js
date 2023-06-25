
const inform = console.log;
const { nanoid } = require("nanoid");
const chalk = require("chalk");
const data = require("./hotels.json")

function create( goCart,newTels) {
    const index = data.find(
        (hotels) => hotels.hotelDesguise=== newTels
    );
const hotelCheck = {
         id: `${nanoid(6)}`,
        hotelDesguise : newTels,
        roomPrice : index.currencyUSD,
        availableRooms : index.availableRooms,
        room: index.room
        }
        goCart.push(hotelCheck)
        return goCart
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