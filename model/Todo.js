var mongoose = require('mongoose'),
schema = mongoose.Schema;

var TodoSchema = new schema({
  title:String,
  note:String,
  completed:Boolean,
  update_at:{type:Date, default: Date.now},
});

module.exports = mongoose.model('Todo', TodoSchema);
