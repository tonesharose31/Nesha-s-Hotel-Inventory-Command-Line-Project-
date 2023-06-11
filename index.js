const { myHotelChoices, generateHotelsFactory  } = require("./src/hotels")
const  { readJSONFile, writeJSONFile } = require("./src/fs-helpers")

function run(){
    const hotels = readJSONFile( "./src/data", "sampleHotelList.json")
    console.log(hotels)
    if(process.argv[3]){
        hotels.push(...generateHotelsFactory(process.argv[3]))
    }else{
        hotels.push(myHotelChoices())
    }
   writeJSONFile("./src/data", "sampleHotelList.json", hotels)
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