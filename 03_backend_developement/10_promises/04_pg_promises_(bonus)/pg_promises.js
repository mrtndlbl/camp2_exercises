const PG = require("pg");
const client = new PG.Client();
const fetch = require("node-fetch");


function getCategories() {
  return fetch("https://decath-product-api.herokuapp.com/categories")
    .then((res) => res.json());
}
function getBrands() {
  return fetch("https://decath-product-api.herokuapp.com/brands")
    .then((res) => res.json());
}
function getProducts() {
  return fetch("https://decath-product-api.herokuapp.com/products")
    .then((res) => res.json());
}
function insertCategories (json) {
  client.connect();
  json.map(category => {
    return client.query(
      "INSERT INTO categories VALUES ($1, $2, $3)",
      [category.id, category.decathlon_id, category.label])
      .then(() => client.end())
      .catch((error) => {
        console.warn(error);
        client.end();
      });
  });
}
function insertBrands (json) {
  json.map(brand => {
    client.connect();
    return client.query(
      "INSERT INTO brands VALUES ($1, $2)",
      [brand.id, brand.title])
      .then(() => client.end())
      .catch((error) => {
        console.warn(error);
        client.end();
      });
  });
}
function insertProducts (json) {
  json.map(product => {
    client.connect();
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
      ])
      .then(() => client.end())
      .catch((error) => {
        console.warn(error);
        client.end();
      });
  });
}

insertCategories(getCategories());



module.exports = {
  getCategories: getCategories,
  insertCategories: insertCategories,
  getBrands: getBrands,
  insertBrands: insertBrands,
  getProducts: getProducts,
  insertProducts: insertProducts,
  // getProductsByCategory: getProductsByCategory,
  // getCategoryToArray: getCategoryToArray
};
