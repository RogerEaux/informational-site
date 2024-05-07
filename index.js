import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/pages/index.html`);
});

app.get('/:page', (req, res) => {
  const pages = ['about', 'contact'];
  const pageName = req.params.page;
  if (pages.includes(pageName)) {
    res.sendFile(`${__dirname}/pages/${pageName}.html`);
  } else {
    res.sendFile(`${__dirname}/pages/404.html`);
  }
});

app.listen(port);
