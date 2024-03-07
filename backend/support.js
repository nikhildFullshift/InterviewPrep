console.log("Child Process " + process.argv[2] + " executed.");
//in fork
process.send({ message: "Hello World from " + process.argv[2] });

// in spawn
process.stdin.on("data", (data) => {
  console.log("Received message from parent:", data.toString());
  // Send a message to the parent process
  process.stdout.write("Message received by child");
});
