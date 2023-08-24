import React from "react";
import { renderToString } from "react-dom/server";
import Landing from "../client/components/Landing";

const renderer = () => {
  const content = renderToString(<Landing />);
  return `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
    `;
};

export default renderer;
