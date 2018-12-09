const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board', { useNewUrlParser: true });

const CommentSchema = new mongoose.Schema({
    commentCreater: {type: String, required: [true, "Name is required"], minlength: 1},
    comment: {type: String, required: [true, "Comment can not be empty"], minlength: 1}},
    {timestamps: true});
const MessageSchema = new mongoose.Schema({
    poster: {type: String, required: [true, "Please give your poster a name"],minlength: 1},
    post: {type: String, required: [true,"Please post something"],minlength: 1},
    commentCreater: [CommentSchema],},
    {timestamps: true});

module.exports = mongoose.model('Messages',MessageSchema);
const Message = mongoose.model('Messages')