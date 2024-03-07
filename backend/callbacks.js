//maintains orders in which callbacks are called
// executes once during the current poll
// it checks for all i/o event handlers to be executed and then this gets executed

setImmediate(() => {
  console.log("HERE");
});

setTimeout(() => {
  console.log("TIME OUT INITIAL");
});

//checks for all functions to be executed in the queue then it calls this
//uses timer queue
setTimeout(() => {
  console.log("Timeout");
}, 1000);

// setImmediate excutes before setTimeout and setInterval only when in timer
setTimeout(function () {
  setTimeout(function () {
    console.log("setTimeout");
  });
  setImmediate(function () {
    console.log("setImmediate");
  });
  process.nextTick(() => {
    console.log("Next Tick");
  });
}, 10);

// Process.nextTick executes first in event loop in each iteration
// When we pass a function to process.nextTick(),
// we instruct the engine to invoke this function at the end of the current operation,
// before the next event loop tick starts:
process.nextTick(() => {
  console.log("Next Tick 1");
});

// process.send({ message: "Hello Parent" });
// process.on("message", (message) => {
//   console.log("Message from Parent : ", message);
//   process.exit();
// });

// Default behaviour is
// nextTick > timeout > immediate

// Incase of timer queue
// nextTick > Immediate > Timeout
