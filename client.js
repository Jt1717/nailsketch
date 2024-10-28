const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  // ... other client properties (preferences, past designs, notes)
});

module.exports = mongoose.model('Client', clientSchema);
