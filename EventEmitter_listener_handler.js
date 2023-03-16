const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// Create an event and .on method listener
myEmitter.on("myEvent", () => {
  console.log("My event was triggered");
});

// Emit the event
myEmitter.emit("myEvent");

// Ex- 2
// Create an event with arguments
myEmitter.on("myEvent", (arg1, arg2) => {
  console.log(arg1, arg2);
});

// Emit the event with arguments
myEmitter.emit("myEvent", "hello", "world");

// ------------------------------- create once time emitter ----------------------------------------

// Create a one-time event listener
myEmitter.once("myEvent", () => {
  console.log("This will only be logged once");
});

// Emit the event
myEmitter.emit("myEvent");
myEmitter.emit("myEvent"); // This will not trigger the listener again
