const http = require("http");
const server = http.createServer((req, res) => {
  res.write("<h1 style='color:pink'>HELLO NODE !!!!</h1>");
  res.end();
});
server.listen(5000, (err) =>
  err ? console.log(err) : console.log("listening on port 5000")
);
