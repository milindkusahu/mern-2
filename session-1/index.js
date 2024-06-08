const http = require("http")

const server = http.createServer((request, response) => {

    const serverInfo = {
        serverName: "Crio Server",
        version: "1.0.0",
        currentDate: new Date().toDateString(),
        currentTime: new Date().toTimeString(),
    };

    if (request.url === "/status") {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(JSON.stringify(serverInfo))
        response.end();

    } else {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(`<h1>Hello from Server</h1>`);
        response.end();
    }
});

server.listen(8082, () => {
    console.log("Server is listening now...")
})