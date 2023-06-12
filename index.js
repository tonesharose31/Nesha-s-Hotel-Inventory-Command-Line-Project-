const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { 
    create, 
    index,
    show,
    destroy,
    update,
    score
} = require("./src/animals-controller")


const run = () => {

    const action = process.argv[2];
     const animal = process.argv[3];
   
     let animals = readJSONFile("./data", "animals-data.json")
    
    let writeToFile = false;
    let updatedAnimals = [];
    
    switch (action) {
        // the index route will display all of our data
        case "index" :
            const allAnimals = index(animals)
            console.log(allAnimals);
            break;   
        // the create route will create a new record in our data
        case "create" :
            console.log("CREATE IS FIRING")
            updatedAnimals = create(animals, animal) 
            writeToFile = true;
            break;
        // the show route will display information on one specific record
        case "show" :
            const foundAnimal = show(animals, animal)
            console.log(foundAnimal)
            break ;  
        // update will change the data at a specific record
        case "update" :
            console.log(animal,  " %%%%%%% ")
            updatedAnimals = update(animals, animal, process.argv[4]);
            writeToFile = true;
            break; 
        // destroy will delete a record from our data at a specific point
        case "destroy" :
            updatedAnimals = destroy(animals, animal);
            writeToFile = true;
            break ;  
        // score will reduce the data's 'points' value to a number and display it to the user
        case "score" :
            console.log(score(animals))
            break; 
        default :
        console.log("hey there was an error")  
    }
    // once the nescesarry action has been created 
        // we determine whether or not to write new data to the data file
    if (writeToFile) {
        console.log("new data detected - updating")
        // here we pass our `updatedAnimals` to our writeJSONFile to record out new entries
        writeJSONFile("./data", "animals-data.json", updatedAnimals)
    }

}

// executing our application
run()


















/