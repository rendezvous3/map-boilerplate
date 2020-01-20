import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { renderToString } from "react-dom/server";

const app = express();
const PORT = 8080;

app.use(morgan("dev"));

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

const content = "Hello World!";

app.get("*", (req, res) => {
  res.send(`
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
  `);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
