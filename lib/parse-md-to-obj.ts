const matter = require("gray-matter");
const fs = require("fs");
const path = require("path");
interface funcOutI{
	data:any,
        content:any
}

const parseMdFileToObj = async(filePath:string[]):Promise<funcOutI>=>{

        const mdData = await fs.readFileSync(path.join(process.cwd(),...filePath),{ encoding: 'utf8' });
        const {data,content} = matter(mdData.toString());
        return {data,content}
	 		



}

export default parseMdFileToObj
