const toWords = require("../to_words.js")

test("Check that the sentence is well splited with spaces", () => {
  expect(toWords("Here.the?goal!is,to be:able.to?check!if,a code:behaves.as?expected")).toEqual(["Here","the","goal","is","to","be","able","to","check","if","a","code","behaves","as","expected"]);
});

test("Check that the entry is not undefined", () => {
  expect(toWords()).toBeDefined()
});
