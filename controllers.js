const Message = require("./models");

module.exports = {
    createMessage: function(req,res){
        var new_msg = new Message(req.body)
        new_msg.save(function(err,msgs){
            if(err){
                res.json(err)
            }else{
                res.json(msgs);
            }
        })
    },
    allMessages: function(req,res){
        Message.find({},function(err,msgs){
            if(err){
                res.json(err)
            }else{
                res.json(msgs)
            }
        })
    },
    addComment: function(req,res){
        Message.findById(req.params.id,function(err,msg){
            if(err){
                res.json(err)
            }else{
                msg.commentCreater.push(req.body)
                msg.save(res.json(msg))
            }
        })
    },
    showOne: function(req,res){
        Message.findById(req.params.id,function(err,msg){
            if(err){
                res.json(err)
            }else{
                res.json(msg)
            }
        })
    }
}