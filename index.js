
const { readJSONFile, writeJSONFile } = require("./src/fs-helpers");
const { create,index,show,update,destroy } = require("./src/controller")
const inform = console.log

const run = () => {


    let assets = readJSONFile("./src/data", "hotels.json")
    
    let writeToFile = false;
    let updatedHotels = [];


    const action = process.argv[2];
    const hotels = process.argv[3];
   
    switch (action) {

            case "index" :
            const hotelList = index(assets);
            inform(hotelList);
            break;   


        case "create" :
            updatedHotels = create(assets, hotels,);
            writeToFile = true;
            break;
        
        case "show" :
            const showHotels= show(assets, hotels)
           inform(showHotels);
            break ;  
       
        case "update" :
         updatedHotels = update(assets, hotels, process.argv[4]);
            writeToFile = true;
            break; 
        
        case "destroy" :
            updatedHotels = destroy(assets, hotels);
            writeToFile = true;
            break ;  
    
        default :
      inform("hey there was an error")  
    }
    if (writeToFile) {      
 writeJSONFile("./data", "hotels.json", updatedHotels);
    }
}
run();

