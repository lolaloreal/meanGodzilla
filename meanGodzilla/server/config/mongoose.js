//database file
const mongoose = require("mongoose")
const fs = require("fs")
const path = require("path")

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/GODZILLA", {useMongoClient: true})
//change the database name after localhost

const models_path = path.join(__dirname, "./../models")

fs.readdirSync(models_path).forEach(file => {
	if(file.toLowerCase().includes(".js")){
		require(path.join(models_path, file))
	}
})
