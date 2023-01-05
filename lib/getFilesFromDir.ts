const path = require('path');
const fs = require('fs');


async function getFilesFromDir(dir:string[]){
    
    const directoryPath = path.join(process.cwd(),...dir);
    
    try{
        const files = await fs.readdirSync(directoryPath)
        return files
    }catch(err){
        throw(err)
    }
    

}

export default getFilesFromDir;