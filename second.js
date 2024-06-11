// http
const http = require("http");
const  server = http.createServer((req,resp) =>
{
   // req : request process
   // resp: for write response 
   resp.writeHead(200,{'content-type':'text/html'});
   resp.write("<h1> Wow this is response from first server</h1>");
   resp.write('<h2> ok nice work </h2>');
   resp.write('<button>Click me  </button>');
   resp.end('ok by by');
});
server.listen(9898)