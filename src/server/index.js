import express from "express";
import renderer from "../utils/renderer";

const app = express();
app.use(express.static("public"));

app.get("*", async (req, res) => {
  res.send(renderer(req, {}));
});

app.listen(3000, () => {
  console.log("server is now listening to port 3000");
});
