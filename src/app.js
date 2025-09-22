import express from "express";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.get("/api/v1/get", (_, res) => {
  res.send("Welcome to the API");
});

//http://localhost:4200/api/v1/get

export { app };
