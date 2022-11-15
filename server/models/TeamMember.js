const mongoose = require("mongoose");

const TeamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  designation: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model("TeamMember", TeamMemberSchema);
