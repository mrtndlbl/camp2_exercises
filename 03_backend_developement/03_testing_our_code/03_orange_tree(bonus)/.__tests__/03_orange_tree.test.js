const orangeTree = require("../03_orange_tree.js")

test("Check seed function", () => {
  orangeTree.seed();
  expect(orangeTree.oranges).toBe(0);
  expect(orangeTree.height).toBe(0);
  expect(orangeTree.age).toBe(0);
  expect(orangeTree.alive).toBeTruthy();
});

for (let year = 0; year < 10; year++) {
  test(`Check growing at the age of ${year}`, () => {
    orangeTree.seed();
    for (let i = 0; i < year; i++) {
      orangeTree.ageOneYear();
    }
  expect(orangeTree.height).toEqual(year * 25);
  });
}

for (let year = 10; year < 20; year++) {
  test(`Check growing at the age of ${year}`, () => {
    orangeTree.seed();
    for (let i = 0; i < year; i++) {
      orangeTree.ageOneYear();
    }
  expect(orangeTree.height).toEqual((year - 9) * 10 + 225);
  });
}

for (let year = 20; year < 100; year++) {
  test(`Check growing at the age of ${year}`, () => {
    orangeTree.seed();
    for (let i = 0; i < year; i++) {
      orangeTree.ageOneYear();
    }
  expect(orangeTree.height).toEqual(9 * 25 + 10 * 10);
  });
}

for (let year = 0; year < 5; year++) {
  test(`Check oranges at the age of ${year}`, () => {
    orangeTree.seed();
    for (let i = 0; i < year; i++) {
      orangeTree.ageOneYear();
    }
  expect(orangeTree.oranges).toEqual(0);
  });
}

for (let year = 5; year < 10; year++) {
  test(`Check oranges at the age of ${year}`, () => {
    orangeTree.seed();
    for (let i = 0; i < year; i++) {
      orangeTree.ageOneYear();
    }
  expect(orangeTree.oranges).toEqual(10);
  });
}

for (let year = 10; year < 20; year++) {
  test(`Check oranges at the age of ${year}`, () => {
    orangeTree.seed();
    for (let i = 0; i < year; i++) {
      orangeTree.ageOneYear();
    }
  expect(orangeTree.oranges).toEqual(20);
  });
}

for (let year = 20; year < 40; year++) {
  test(`Check oranges at the age of ${year}`, () => {
    orangeTree.seed();
    for (let i = 0; i < year; i++) {
      orangeTree.ageOneYear();
    }
  expect(orangeTree.oranges).toEqual(5);
  });
}

for (let year = 40; year < 100; year++) {
  test(`Check oranges at the age of ${year}`, () => {
    orangeTree.seed();
    for (let i = 0; i < year; i++) {
      orangeTree.ageOneYear();
    }
  expect(orangeTree.oranges).toEqual(0);
  });
}

for (let year = 0; year < 100; year++) {
  test(`Check that the tree age one year each year ${year}`, () => {
    orangeTree.seed();
    for (let i = 0; i < year; i++) {
      orangeTree.ageOneYear();
    }
  expect(orangeTree.age).toEqual(year);
  expect(orangeTree.age).not.toBe(100);
  })
}

for (let year = 0; year < 100; year++) {
  test(`Check that the tree can\'t reach 100 year ${year}`, () => {
    orangeTree.seed();
    for (let i = 0; i < year; i++) {
      orangeTree.ageOneYear();
    }
  expect(orangeTree.age).not.toBe(100);
  })
}

for (let year = 0; year < 5; year++) {
  test(`Check that we can pick an orange at the age of ${year}`, () => {
    orangeTree.seed();
    for (let i = 0; i < year; i++) {
      orangeTree.ageOneYear();
    }
  expect(orangeTree.pickAnOrange()).toEqual(false);
  });
}

for (let year = 5; year < 10; year++) {
  test(`Check that we can pick an orange at the age of ${year}`, () => {
    orangeTree.seed();
    for (let i = 0; i < year; i++) {
      orangeTree.ageOneYear();
    }
  expect(orangeTree.pickAnOrange()).toEqual(true);
  });
}

for (let year = 10; year < 20; year++) {
  test(`Check that we can pick an orange at the age of ${year}`, () => {
    orangeTree.seed();
    for (let i = 0; i < year; i++) {
      orangeTree.ageOneYear();
    }
  expect(orangeTree.pickAnOrange()).toEqual(true);
  });
}

for (let year = 20; year < 40; year++) {
  test(`Check that we can pick an orange at the age of ${year}`, () => {
    orangeTree.seed();
    for (let i = 0; i < year; i++) {
      orangeTree.ageOneYear();
    }
  expect(orangeTree.pickAnOrange()).toEqual(true);
  });
}

for (let year = 40; year < 100; year++) {
  test(`Check that we can pick an orange at the age of ${year}`, () => {
    orangeTree.seed();
    for (let i = 0; i < year; i++) {
      orangeTree.ageOneYear();
    }
  expect(orangeTree.pickAnOrange()).toEqual(false);
  });
}

for (let year = 100; year < 101; year++) {
  test(`Check that the tree is dead at the age of ${year}`, () => {
    orangeTree.seed();
    for (let i = 0; i < year; i++) {
      orangeTree.ageOneYear();
    }
  expect(orangeTree.alive).toBeFalsy();
  });
}

for (let year = 0; year < 50; year++) {
  test(`Check that the tree is alive at the age of ${year}`, () => {
    orangeTree.seed();
    for (let i = 0; i < year; i++) {
      orangeTree.ageOneYear();
    }
  expect(orangeTree.alive).toBeTruthy();
  });
}
