import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Landing from "../client/components/Landing";

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  const content = renderToString(<Landing />);
  const html = `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log("server is now listening to port 3000");
});
