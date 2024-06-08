const http = require("http");
const currenciesData = require("./currencies.json");
const PORT = 8082;

// const server = http.createServer((request, response) => {

//     const serverInfo = {
//         serverName: "Crio Server",
//         version: "1.0.0",
//         currentDate: new Date().toDateString(),
//         currentTime: new Date().toTimeString(),
//     };

//     if (request.url === "/status") {
//         response.writeHead(200, {"Content-Type": "application/json"});
//         // response.write(JSON.stringify(serverInfo))
//         // response.end();
//         // or
//         response.end(JSON.stringify(serverInfo))

//     } else {
//         response.writeHead(200, {"Content-Type": "text/html"});
//         response.write(`<h1>Hello from Server</h1>`);
//         response.end();
//     }
// });

const server = http.createServer((request, response) => {
  switch (request.url) {
    case "/":
      response
        .writeHead(200, { "Content-Type": "text/html" })
        .end(`<h1>Hello from Server</h1>`);
      break;
    case "/currencies":
      response
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(currenciesData.data));
      break;
    default:
      response
        .writeHead(404, { "Content-Type": "application/json" })
        .end(JSON.stringify({ message: "Not found" }));
  }
});

server.listen(PORT, () => {
  console.log("Server is listening now...");
});
