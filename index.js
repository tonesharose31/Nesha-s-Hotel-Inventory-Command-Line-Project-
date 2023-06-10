const { myHotelChoices, randomHotelFactory  } = require("./src/hotels")

function run(){
    if(process.argv[4]){
        console.log(randomHotelFactory(process.argv[3]))
    }else{
        console.log(myHotelChoices())
    }
   
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