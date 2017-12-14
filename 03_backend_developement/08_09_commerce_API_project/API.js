const express = require("express");
const app = express();
const PG = require("pg");
const client = new PG.Client();
const port = process.env.PORT || 3000;
client.connect();


app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

app.get("/brands", function(request, result) {
  client.query(
    "SELECT * FROM brands",
    function(error, resultQuery) {
      if (error) {
        console.log(error);
        result.json(error);
      } else {
        result.json(resultQuery.rows);
      }
    }
  );
});

app.get("/brands/:id", function(request, result) {
  client.query(
    "SELECT * FROM brands WHERE id=$1",
    [request.params.id],
    function(error, resultQuery) {
      if (error) {
        console.log(error);
        result.json(error);
      } else {
        result.json(resultQuery.rows);
      }
    }
  );
});

app.get("/categories", function(request, result) {
  client.query(
    "SELECT * FROM categories",
    function(error, resultQuery) {
      if (error) {
        console.log(error);
        result.json(error);
      } else {
        result.json(resultQuery.rows);
      }
    }
  );
});

app.get("/categories/:id", function(request, result) {
  client.query(
    "SELECT * FROM categories WHERE id=$1",
    [request.params.id],
    function(error, resultQuery) {
      if (error) {
        console.log(error);
        result.json(error);
      } else {
        result.json(resultQuery.rows);
      }
    }
  );
});

app.get("/products", function(request, result) {
  client.query(
    "SELECT * FROM products",
    function(error, resultQuery) {
      if (error) {
        console.log(error);
        result.json(error);
      } else {
        result.json(resultQuery.rows);
      }
    }
  );
});

app.get("/products/:id", function(request, result) {
  client.query(
    "SELECT * FROM products WHERE id=$1",
    [request.params.id],
    function(error, resultQuery) {
      if (error) {
        console.log(error);
        result.json(error);
      } else {
        result.json(resultQuery.rows);
      }
    }
  );
});

app.get("/categories/:id/products", function(request, result) {
  client.query(
    "SELECT * FROM products INNER JOIN categories_products ON products.id = categories_products.product_id AND categories_products.category_id = $1",
    [request.params.id],
    function(error, resultQuery) {
      if (error) {
        console.log(error);
        result.json(error);
      } else {
        result.json(resultQuery.rows);
      }
    }
  );
});
