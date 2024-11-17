const mongoose = require("mongoose");

const TopicSchema = new mongoose.Schema({
  topic: String,
  duration: Number,
});

module.exports = mongoose.model("Topic", TopicSchema);
