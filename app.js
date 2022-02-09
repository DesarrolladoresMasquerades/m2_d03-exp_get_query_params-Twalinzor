const express = require("express");

const hbs = require("hbs");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static("public"));

/* app.get("/search-results", (request, response) => {
  const searchString = request.query.searchString;
  const searchDate = request.query.searchDate;

  const searchResult = ["beatles", "nirvana"].filter((el) =>
    el.includes(searchString)
  );
  response.render("search-results", { searchString, searchDate, searchResult });
}); 

app.get("/search", (request, response) => {
  response.render("search-form");
}); */

app
  .route("/search")
  .get((req, res) => {
    res.render("search-form");
  })
  .post((req, res) => {
    const searchString = req.body.searchString;
    const searchDate = req.body.searchDate;

    const searchResult = ["beatles", "nirvana"].filter((el) =>
      el.includes(searchString)
    );
    res.render("search-results", req.body);
  });

app.listen(process.env.PORT, () =>
  console.log(`Running on port: ${process.env.PORT}`)
);
