// server.js
const path = require("path");
const jsonServer = require("json-server");
const parseLinks = require("parse-link-header");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults({ readOnly: true });

const customLimitMiddleware = (req, res, next) => {
  req.query._limit = 10;
  res.locals.limit = 10;
  next();
};

server.use(middlewares);
server.use(customLimitMiddleware);
server.use(router);

router.render = (req, res) => {
  console.log('page is now', req.query._page)
  const header = res.getHeaders()["link"];
  if (header) {
    const paginationLinks = parseLinks(header);
    res.jsonp({
      cursor: {
        next: paginationLinks.next?.url,
        prev: paginationLinks.prev?.url,
        limit: res.locals.limit,
        totalRecords: res.getHeaders()["x-total-count"],
      },
      data: res.locals.data,
    });
  } else {
    res.jsonp({
      data: res.locals.data,
    });
  }
};

server.listen(3002, () => {
  console.log("JSON Server is running");
});
