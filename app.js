import express from "express";
import { start } from "repl";
import { userRouter } from "./users/users.js";

const port = 8000;
const app = express();

app.use((req, res, next) => {
  // S
  console.log("Время", Date.now());
  next();
});

app.get("/hello", (req, res) => {
  //   res.json({ status: "start" });
  res.end();
});

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Сервер запущен http://localhost:${port}`);
});

/*
app.all("/hello", (request, response, next) => {
  console.log("ALL");
  next();
});

const cb = (request, response, next) => {
  console.log("cb1");
  next();
};

app
  .route("/user")
  .get(cb, (request, response) => {
    response.send("Привет");
    //   hel?lo - означает что хелло, или хело будет работать
    //    hel+lo - означает что не важно сколько l будет оно будет работать
    //   hel*lo - любой запрос с hel и тут что хочешь  heloasdkasjfkjasdf
    // /.*a$ - любая строка и любой длины, которая заканчивается на a
  })
  .post((req, res) => {
    res.send("ПОСТ ПРИВЕТ");
  });

app.listen(port, () => {
  console.log(`Сервер запущен http://localhost:${port}`);
});
*/

/*
// http
import http from "http";

const host = "127.0.0.1";
const port = 8000;

const server = http.createServer((request, response) => {
  switch (request.method) {
    case "GET":
      break;
  }
  request.url;

  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Привет");
});

server.listen(port, host, () => {
  console.log(`Сервер запущен ${host}:${port}`);
});
*/
