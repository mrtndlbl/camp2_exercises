import React from 'react';
import renderer from 'react-test-renderer';
import App from "./App";
import { configure, shallow, mount  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const products = [
  { "decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99 },
  { "decathlon_id": 8354464, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
  { "decathlon_id": 8380024, "title": "RUN ELIOPRIME", "price": 54.99 },
  { "decathlon_id": 8379970, "title": "Pantalon Gym", "price": 12.99 },
  { "decathlon_id": 8247793, "title": "PALMES WADERS", "price": 24.99 },
  { "decathlon_id": 8357549, "title": "MINIMIZER EDEN UNI  NOIR", "price": 19.99 },
  { "decathlon_id": 8326155, "title": "Pantalon Training mesh marine", "price": 44.99 },
  { "decathlon_id": 8329121, "title": "COUTEAU A PALOURDES", "price": 4.99 },
  { "decathlon_id": 8370749, "title": "Doudoune Hike 100 garçon bleu", "price": 9.99 },
  { "decathlon_id": 8298354, "title": "OREILLER CONFORT", "price": 6.99 },
  { "decathlon_id": 8044622, "title": "2 guêtres RIDING noir", "price": 14.99 },
  { "decathlon_id": 8249674, "title": "BOBINE FUN 2 3 4mm X 40 20 12m", "price": 6.99 },
  { "decathlon_id": 8353265, "title": "Justaucorps manche longue Gym.", "price": 34.99 }
]

beforeAll(() => {
  configure({ adapter: new Adapter() });
})

test('The table appears at server starting', () => {
  const component = renderer.create(<App />);
  let table = component.toJSON();
  expect(table).toMatchSnapshot();
});

test('The table is sorted by price', () => {
  const component = mount(<App lines={products}/>);

  //prices before sorting
  const oldPrices = component.find("td.price").map(node => node.text());
  const floatOldPrices = oldPrices.map(pri => parseFloat(pri));

  // click on sorting button for prices
  component.find("th.priceHeader").simulate("click")

  // prices after sorting
  const newPrices = component.find("td.price").map(node => node.text());
  const floatNewPrices = newPrices.map(pri => parseFloat(pri))

  // test
  expect(floatNewPrices).toEqual(floatOldPrices.sort(function(a, b) { return a - b; }));
});

test('The table is sorted by price and by Name', () => {
  const component = mount(<App lines={products}/>);

  //titles before sorting
  const oldTitles = component.find("td.title").map(node => node.text());

  // click on sorting button for prices
  component.find("th.priceHeader").simulate("click")

  // click on sorting button by Title
  component.find("th.titleHeader").simulate("click")

  // titles after sorting
  const newTitles = component.find("td.title").map(node => node.text());

  // test
  expect(newTitles).toEqual(oldTitles.sort());
});
