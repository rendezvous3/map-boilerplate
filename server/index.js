import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8080;

app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});