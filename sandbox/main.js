"use strict";

const port = 3006;
const http = require("http");
const fs = require("fs");

function readFile(file, response) {
    fs.readFile(`./${file}`, (errors, data) => {
        if (errors) {
            console.log("Error reading the file...");
        }
        response.end(data);
    });
}

// リクエストはpublicを除いたディレクトリ、読み込みはpublicを含めたディレクトリにした（Reactなどで使われている一般的な構成に近いため）
const app = http.createServer((request, response) => {
    if (request.url === "/" && request.method === "GET") {
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        readFile("public/index.html", response);
    } else if (request.url === "/image/imgs.jpg" && request.method === "GET") {
        response.writeHead(200, {
            "Content-Type": "image/jpeg"
        });
        readFile("public/image/imgs.jpg", response);
    } else if (request.url === "/css/style.css" && request.method === "GET") {
        response.writeHead(200, {
            "Content-Type": "text/css"
        });
        readFile("public/css/style.css", response);
        
    } else if (request.url === "/js/script.js" && request.method === "GET") {
        response.writeHead(200, {
            "Content-Type": "text/javascript"
        });
        readFile("public/js/script.js", response);
    } else {
        response.writeHead(404, {
            "Content-Type": "text/html"
        });
        response.end(`Not found : ${request.url}`);
        console.log();
    }
});

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);