import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "../client/routes";

export default (req, res, context) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>
  );

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset='utf-8'>
      <title>aidride</title>
    </head>
    <body>
      <div id="app">${content}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
  `;
};
