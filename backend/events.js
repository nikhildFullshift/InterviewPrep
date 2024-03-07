const events = require("events");

const eventEmitter = new events.EventEmitter();

const execute = () => {
  eventEmitter.emit("custom", "Nikhil");
};

eventEmitter.on("connection", execute);

eventEmitter.on("custom", (data) => {
  console.log("Custom Event", data);
});

eventEmitter.emit("connection");
