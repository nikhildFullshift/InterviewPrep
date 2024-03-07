// sending large data in chunks is called streams

// 4 Streams
//      Readable;
//      Writeable;
//      Duplex;
//      Transform;

//readstream
const fs = require("fs");
const path = require("path");
const { Transform } = require("stream");

const readStream = fs.createReadStream(
  path.join(__dirname, "./files/input.txt")
);

let content = "";

readStream.on("data", (chunk) => {
  content += chunk;
});

readStream.on("end", () => {
  console.log("Read Successfully file, : ", content);
});

readStream.on("error", (err) => console.log(err));

//Write stream

let contentWrite = "I am nikhil \n";

const writeStream = fs.createWriteStream(
  path.join(__dirname, "./files/write.txt"),
  {
    encoding: "utf-8",
    flags: "a",
  }
);

writeStream.write(contentWrite);
writeStream.on("finish", () => console.log("Write done to file"));

// pipe method -- connects source to destination

const transformData = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

readStream.pipe(transformData).pipe(writeStream);
