const http = require("http");


http.createServer((req, res)=>{

    res.write("Hola Mundo")
    res.end();
})
.listen(8080);

console.log("Puerto escuchando", 8080)
