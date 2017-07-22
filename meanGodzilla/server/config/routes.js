const path = require("path")

const users = require("./../controllers/users.js")
const trivia = require("./../controllers/trivias.js")
//this users.js module exports is exporting an object with methods within it
//we are accessing the obect and then calling a method

module.exports = (app) => {
    //these handle session
	app.post("/login", users.login)
	app.get("/all_users", users.index)
	app.get("/logout", users.logout)
	app.get("/get_logged_in_user", users.get_logged_in_user)

	app.get('/trivia', trivia.index)
	app.post('/trivia/add', trivia.add)

	app.get("*", (req, res) => {
		res.sendFile(path.resolve("./client/dist/index.html"))//ALWAYS last make angular name
	})
}
