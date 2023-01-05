
const getFilesFromDir = require("./getFilesFromDir")


const files = getFilesFromDir("content","blog")

expect(files[0]).toEqual("infiniteScrolling")