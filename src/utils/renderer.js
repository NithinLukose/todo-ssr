import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppRoutes from "../client/components/Routes";

const renderer = (req, context) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <AppRoutes />
    </StaticRouter>
  );
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
