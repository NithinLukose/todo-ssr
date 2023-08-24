import express from "express";
import renderer from "../utils/renderer";

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(renderer());
});

app.listen(3000, () => {
  console.log("server is now listening to port 3000");
});
