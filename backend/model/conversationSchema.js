const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
    members: {
        type: Array,
      }
});

const Conversation = mongoose.model("CONVERSATION",conversationSchema);
module.exports = Conversation;