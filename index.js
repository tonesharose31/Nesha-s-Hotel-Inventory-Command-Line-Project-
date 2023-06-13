
const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { create, index,show,destroy,update,score } = require("./src/controller")
const inform = console.log

const run = () => {

    
const action = process.argv[2];
const animal = process.argv[3];
   
    let assets = readJSONFile("./data", "sampleHotelList.json")
    
    let writeToFile = false;
    let updatedHotels = [];
   
    switch (action) {
        
        case "index" :
            const allAnimals = index(assets)
            inform(allAnimals);
            break;   
       
        case "create" :
           inform("CREATE IS FIRING")
            updatedHotels = create(assets, animal) 
            writeToFile = true;
            break;
        
        case "show" :
            const foundAnimal = show(assets, animal)
           inform(foundAnimal)
            break ;  
       
        case "update" :
          inform(animal,  " ")
            updatedAnimals = update(assets, animal, process.argv[4]);
            writeToFile = true;
            break; 
        
        case "destroy" :
            updatedAnimals = destroy(assets, animal);
            writeToFile = true;
            break ;  
    
        case "score" :
            imform(score(assets))
            break; 
        default :
      inform("hey there was an error")  
    }
    if (writeToFile) {
        inform("new data detected - updating")
        
        writeJSONFile("./data", "animals-data.json", updatedAnimals)
    }

}


run()


//This is where it got hazy for me!