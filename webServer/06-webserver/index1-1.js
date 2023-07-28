let finalResponse = "";

const request = require("http").request({
    hostname: "127.0.0.1",
    port: 8000,
    path: "some/API",
    method: "POST"
}, (response) => {
    console.log(`STaTUS: ${response.statusCode}`);
    response.setEncoding('utf8');
    response.on("data", (dataChunk) => {
        finalResponse += dataChunk;
    });
    response.on("end", () => {
        console.log(finalResponse);
    });
});

request.write("Some data to send to remote system");
request.end();