const fs = require("fs");
const child_process = require("child_process");

for (let i = 0; i < 3; i++) {
  // This method launches a new process with a given command
  const workerProcess = child_process.spawn("node", ["support.js", i]);
  // Waits for child process to fully close
  // child_process.spawnSync

  workerProcess.stdout.on("data", function (data) {
    console.log("stdout: " + data);
  });

  workerProcess.stderr.on("data", function (data) {
    console.log("stderr: " + data);
  });

  workerProcess.stdin.write("Hello from parent");
  workerProcess.stdin.end();

  workerProcess.on("close", function (code) {
    console.log("child process exited with code " + code);
  });
}

// When a new process is created using fork(), it is an exact copy of the parent process.
// All of the memory, variables, and other resources are shared between the two processes.
// When a new process is created using spawn(),
// however, it is a completely new process. It has its own memory, variables, and other resources.

for (let i = 0; i < 3; i++) {
  const worker_process = child_process.fork("support.js", [i]);
  worker_process.on("close", function (code) {
    console.log("forked child process exited with code " + code);
  });

  worker_process.on("message", function (data) {
    console.log("Data sharing" + JSON.stringify(data));
  });
}
