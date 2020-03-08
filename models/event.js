const db = require("../config/database");

const options = {};

const schema = new db.Schema(
  {
    title: {
      type: String
    }
  },
  optins
);

const Event = db.model("Event", schema);

module.exports = Event;
