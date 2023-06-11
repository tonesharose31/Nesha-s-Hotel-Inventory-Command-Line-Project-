const { myHotelChoices, generateHotelsFactory  } = require("./src/hotels")
const  { readJSONFile, writeJSONFile } = require("./src/fs-helpers")

function run(){
    const hotelArray = readJSONFile( "./data, hotellist.json")
    console.log(hotel)
    if(process.argv[3]){
        hotelArray.push(...generateHotelsFactory(process.argv[3]))
    }else{
        hotelArray.push(myHotelChoices())
    }
   writeJSONFile("./data, hotellist.json", hotelArray)
}
run()


// const  { faker }  = require("@faker-js/faker")
// const {nanoid} = require("nanoid")
// const { chalk } = require("chalk")
 


// function CreateANewRoom(){},
// function listOfAllRooms(){},
// function detailsOfOneRoom(){},
// function deleteingRooms(){},
// function UpdatingRooms(){},


//console.log(faker);
//console.log(nanoid);
//console.log(chalk.blue("string"))