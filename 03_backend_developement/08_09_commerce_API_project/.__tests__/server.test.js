const server = require("../server.js");

const fakeCategoryFromAPI = [{
  id: '9f8d8840-e22c-496f-b865-f5014710e234',
  decathlon_id: 309814,
  label: 'Chaussettes'
}];

const fakeBrandFromAPI = [{
  id: 'cbe1c32e-faa9-4911-ad8e-4422f2b627c9',
  title: '8C+'
}]

const fakeProductFromAPI = [{ id: '82830e66-b439-4fef-ade8-abb4dce54e6e',
  decathlon_id: 8282689,
  title: 'Corne chasse 14cm',
  description: 'annoncer des phases de chasse en battue.',
  brand_id: 'afa9cfe1-f517-41f0-87d9-6c7b58ef1c13',
  min_price: 9.99,
  max_price: null,
  crossed_price: 0,
  percent_reduction: 0,
  image_path: '828/8282689/zoom_52fc3fd48aac4f30a127e90388958eb6.jpg',
  rating: 3
}]

test("getCategories should retrieve the categories from Decath-product API", () => {
  const logSpy = jest.spyOn(server, 'getCategories').mockImplementation();

  server.getCategories(fakeCategoryFromAPI);

  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(fakeCategoryFromAPI);

  logSpy.mockRestore()
});

test("getBrands should retrieve the brands from Decath-product API", () => {
  const logSpy = jest.spyOn(server, 'getBrands').mockImplementation();

  server.getBrands(fakeBrandFromAPI);

  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(fakeBrandFromAPI);

  logSpy.mockRestore()
});

test("getProducts should retrieve the products from Decath-product API", () => {
  const logSpy = jest.spyOn(server, 'getProducts').mockImplementation();

  server.getProducts(fakeProductFromAPI);

  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(fakeProductFromAPI);

  logSpy.mockRestore()
});
