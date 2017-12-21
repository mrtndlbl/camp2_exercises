const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const fetch = require("node-fetch");
const port = process.env.PORT || 3000;
app.use(express.static("images"));

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.set("views", __dirname + "/views");
app.set("view engine", "njk");

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

app.get("/", function(request, result) {
  getCategories()
  .then(function(categories) {
    result.render("categories_list", {
      categories : categories
      }
    )
  })
});

function getCategories() {
  return fetch("https://decath-product-api.herokuapp.com/categories")
    .then((res) => res.json())
    .catch((error) => {
      console.warn(error);
      client.end();
    });
}

app.get("/category/:idCategory/products", function(request, result) {
  Promise.all(
    [
      getProductsByCategory(request.params.idCategory),
      getCategories(),
    ]
  )
  .then(function(promiseAllResult) {
      const id = request.params.idCategory;
      const cat = promiseAllResult[1].filter(category => category.id === id)
      result.render("category", {
        products : promiseAllResult[0],
        categories : promiseAllResult[1],
        category : cat
      })
  })
})


function getProductsByCategory(idCategory) {
  return fetch(`https://decath-product-api.herokuapp.com/categories/${idCategory}/products`)
    .then((res) => res.json())
    .catch((error) => {
      console.warn(error);
      client.end();
    });
}

app.get("/products/:idProduct", function(request, result) {
  getProducts(request.params.idProduct)
  .then(function(product) {
    result.render("product", {
      product : product
      }
    )
  })
});

function getProducts(idProduct) {
  return fetch(`https://decath-product-api.herokuapp.com/products/${idProduct}`)
    .then((res) => res.json())
    .then((json) => {
      return product = json
    })
    .catch((error) => {
      console.warn(error);
      client.end();
    });
}
