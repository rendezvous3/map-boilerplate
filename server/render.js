import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "../client/routes";

export default (req, res, context) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <div className="router-config-wrap">{renderRoutes(Routes)}</div>
    </StaticRouter>
  );

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset='utf-8'>
      <title>aidride</title>
      <meta name="description" content="Uber Wash, Detailing">
      <meta name="author" content>
      <meta name='viewport' content='width=device-width initial-scale=1.0'>
      <link rel="stylesheet" href="/style.min.css">
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
    </head>
    <body>
      <div id="app">${content}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
  `;
};
