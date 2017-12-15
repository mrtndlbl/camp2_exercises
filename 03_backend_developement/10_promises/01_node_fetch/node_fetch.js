const fetch = require("node-fetch");

function fetchBrandName() {
  return fetch("https://decath-product-api.herokuapp.com/products/efe288cb-fb63-4b23-b8df-529f04b8b02b")
    .then((res) => res.json())
    .then((json) => json.brand_id)
    .then(function(brand_id) {
      return fetch(`https://decath-product-api.herokuapp.com/brands/${brand_id}`)
        .then((res) => res.json())
        .then((json) => json.title)
        .then(function(title) {
          console.log(title);
          return title;
        });
    })
    .catch((error) => {
      console.warn(error);
    });
}

module.exports = {
  fetchBrandName: fetchBrandName
};
