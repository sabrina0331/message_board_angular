const controller = require("./controllers");

module.exports = function(app){
app.get('/allMsgs',controller.allMessages)
app.get('/showOne/:id',controller.showOne)
app.post('/addMsgs',controller.createMessage)
app.post('/addComm/:id',controller.addComment)
}