const tree = require("../04_orange_tree");

describe("orangeTree", function() {
  test('should be able to pick an orange when there are some', () => {
    tree.seed();
    tree.oranges = 43;

    expect(tree.pickAnOrange()).toEqual(true);
    expect(tree.oranges).toEqual(42);
  });

  test('should not be able to pick an orange when we just planted the tree', () => {
    tree.seed();
    tree.oranges = 0;

    expect(tree.pickAnOrange()).toEqual(false);
    expect(tree.oranges).toEqual(0);
  })

  for (let year = 1; year < 5; year++) {
    test(`should not produce oranges at year ${year}`, () => {
      tree.seed();

      for (let i = 0; i < year; i++) {
        tree.ageOneYear()
      }

      expect(tree.oranges).toEqual(0);
    })
  };

  for (let year = 5; year < 10; year++) {
    test(`should produce 10 oranges at year ${year}`, () => {
      tree.seed();

      for (let i = 0; i < year; i++) {
        tree.ageOneYear()
      }

      expect(tree.oranges).toEqual(10);
    });
  }

  for (let year = 10; year < 20; year++) {
    test(`should produce 20 oranges at year ${year}`, () => {
      tree.seed();

      for (let i = 0; i < year; i++) {
        tree.ageOneYear()
      }

      expect(tree.oranges).toEqual(20);
    });
  }

  for (let year = 20; year < 40; year++) {
    test(`should produce 5 oranges at year ${year}`, () => {
      tree.seed();

      for (let i = 0; i < year; i++) {
        tree.ageOneYear()
      }

      expect(tree.oranges).toEqual(5);
    });
  }

  for (let year = 40; year <= 100; year++) {
    test(`should not produce oranges at year ${year}`, () => {
      tree.seed();

      for (let i = 0; i < year; i++) {
        tree.ageOneYear()
      }

      expect(tree.oranges).toEqual(0);
    });
  }

  for (let year = 1; year < 10; year++) {
    test(`should have grown at year ${year}`, () => {
      tree.seed();

      for (let i = 0; i < year; i++) {
        tree.ageOneYear()
      }

      expect(tree.height).toEqual(year * 25);
    });
  }

  for (let year = 10; year < 20; year++) {
    test(`should have grown at year ${year}`, () => {
      tree.seed();

      for (let i = 0; i < year; i++) {
        tree.ageOneYear()
      }

      expect(tree.height).toEqual(9 * 25 + (year - 9) * 10);
    });
  }

  for (let year = 20; year <= 100; year++) {
    test(`should have reached its full size at year ${year}`, () => {
      tree.seed();

      for (let i = 0; i < year; i++) {
        tree.ageOneYear()
      }

      expect(tree.height).toEqual(9 * 25 + 10 * 10);
    });
  }

  test(`should die before 100 years but after 50 years`, () => {
    tree.seed();

    while (tree.alive && tree.age < 100) {
      tree.ageOneYear()
    }

    expect(tree.alive).toEqual(false);
    expect(tree.age).toBeLessThanOrEqual(100);
    expect(tree.age).toBeGreaterThanOrEqual(50);
  });
})
