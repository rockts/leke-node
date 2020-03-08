const Event = require("../models/event");

Event.find().then(documents => console.log(documents));
