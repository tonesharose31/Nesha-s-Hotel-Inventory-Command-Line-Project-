const fs = require("node:fs"); 

const {readFileSync, writeFileSync } = fs 

function readJSONFile(path, fileName){
    const collection = readFileSync(`${path}/${fileName}`, "utf-8")
    return collection ? JSON.parse(collection) : []
}

function writeJSONFile (path, fileName, data){
 data = JSON.stringify(data, null, 2 );
    return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8"});
}

/* 
    obj = {
        readJSONFIle: readJSONFile,
        writeJSONFIle: writeJSONFile
    }

*/
module.exports ={
    readJSONFile,
    writeJSONFile
}