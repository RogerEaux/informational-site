import http from 'node:http';
import fs from 'node:fs/promises';
import url from 'node:url';

const server = http.createServer(async (req, res) => {
  const query = url.parse(req.url, true);

  try {
    let page;
    if (query.path === '/') {
      page = await fs.readFile('./pages/index.html');
    } else {
      page = await fs.readFile(`./pages/${query.pathname}.html`);
    }
    res.writeHead(200, { ContentType: 'text/html' });
    res.write(page);
  } catch (error) {
    const errorPage = await fs.readFile('./pages/404.html');
    res.writeHead(404, { ContentType: 'text/html' });
    res.write(errorPage);
  }

  res.end();
});

server.listen(8080);
