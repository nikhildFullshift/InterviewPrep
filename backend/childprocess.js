const cp = require("child_process");
cp.exec("start chrome");

//execute different language file
const output = cp.execSync("python3 test.py");
console.log("output : " + output);

// has methods like
// spawn - creates
// fork - creates a new child process for independent tasks

//specify which shell to use
const res = cp.spawnSync("node ", ["-v"], { shell: "bash" });
console.log(res.stdout.toString());

const res2 = cp.fork(__dirname + "/callbacks.js");
res2.on("message", (message) => {
  console.log("Message from child : ", message);
});

res2.send({ message: "HEllo child" });
