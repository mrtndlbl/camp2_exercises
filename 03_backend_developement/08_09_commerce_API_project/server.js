const request = require("request");
const { Pool } = require("pg");
const pool = new Pool();

// getProducts();
// insertBrands();
// insertProducts();
// getCategoryToArray(getProductsByCategory, 0);

function getCategories() {
  request(
    {
      url: "https://decath-product-api.herokuapp.com/categories",
      method: "GET"
    },
    function(error, response, result) {
      const json = JSON.parse(result);
      return json;
    }
  );
}
function insertCategories(json) {
  pool.connect((err, client, done) => {
    if (err) {
      done();
      return console.error("Error", err.stack);
    } else {
      json.map(category => {
        return client.query(
          "INSERT INTO categories VALUES ($1, $2, $3)",
          [category.id, category.decathlon_id, category.label],
          function(error, resultQuery) {
            if (error) {
              console.log(error);
            } else {
              console.log(resultQuery);
            }
          }
        );
      });
      done();
    }
  });
}

function getBrands() {
  request(
    {
      url: "https://decath-product-api.herokuapp.com/brands",
      method: "GET"
    },
    function(error, response, result) {
      //Recuperation des données
      const json = JSON.parse(result);
      return json;
    }
  );
}
function insertBrands(json) {
  pool.connect((err, client, done) => {
    if (err) {
      done();
      return console.error("Error", err.stack);
    } else {
      json.map(brand => {
        return client.query(
          "INSERT INTO brands VALUES ($1, $2)",
          [brand.id, brand.title],
          function(error, resultQuery) {
            if (error) {
              console.log(error);
            } else {
              console.log(resultQuery);
            }
          }
        );
      });
      done();
    }
  });
}

function getProducts() {
  request(
    {
      url: "https://decath-product-api.herokuapp.com/products",
      method: "GET"
    },
    function(error, response, result) {
      const json = JSON.parse(result);
      return json;
    }
  );
}
function insertProducts(json) {
  pool.connect((err, client, done) => {
    if (err) {
      done();
      return console.error("Error", err.stack);
    } else {
      json.map(product => {
        return client.query(
          "INSERT INTO products VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
          [
            product.id,
            product.decathlon_id,
            product.title,
            product.description,
            product.brand_id,
            product.min_price,
            product.max_price,
            product.crossed_price,
            product.percent_reduction,
            product.image_path,
            product.rating
          ],
          function(error, resultQuery) {
            if (error) {
              console.log(error);
            } else {
              console.log(resultQuery);
            }
          }
        );
      });
      done();
    }
  });
}

function getCategoryToArray(callback, index) {
  request(
    {
      url: "https://decath-product-api.herokuapp.com/categories",
      method: "GET"
    },
    function(error, response, result) {
      if (error) {
        console.log(error);
      } else {
        const json = JSON.parse(result);
        const categories = json.map(category => category.id);
        if (index < categories.length) {
          console.log(`CategoryId = ${categories[index]}, index is ${index}`);
          callback(categories[index], index);
        } else {
          console.log("Loading is over");
        }

      }
    }
  );
}
function getProductsByCategory(categoryId, index) {
  return request(
    {
      url: `https://decath-product-api.herokuapp.com/categories/${categoryId}/products`,
      method: "GET"
    },
    function(error, response, result) {
      if (error) {
        console.log(error);
      } else {
        const json = JSON.parse(result);
        pool.connect((err, client, done) => {
          if (err) {
            done();
            return console.error("Error", err.stack);
          } else {
            json.map(product => {
              return client.query(
                "INSERT INTO categories_products VALUES ($1, $2)",
                [categoryId, product.id],
                function(error, resultQuery) {
                  if (error) {
                    console.log(error);
                  } else {
                    console.log(resultQuery);
                  }
                }
              );
            });
            done();
            //Une fois les données insérées en base, on recommence pour le categoryId suivant
            getCategoryToArray(getProductsByCategory, index + 1);
          }
        });
      }
    }
  );
}

module.exports = {
  getCategories: getCategories,
  insertCategories: insertCategories,
  getBrands: getBrands,
  insertBrands: insertBrands,
  getProducts: getProducts,
  insertProducts: insertProducts,
  getProductsByCategory: getProductsByCategory,
  getCategoryToArray: getCategoryToArray
};
