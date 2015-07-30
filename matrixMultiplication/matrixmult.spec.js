describe('multiplyMatrices', function() {
  var twoByTwo1 = [[1, 2], [3, 4]],
      twoByTwo2 = [[5, 6], [7, 8]];
  var threeByThree1 = [[1, 1, 1], [2, 2, 2], [3, 3, 3]],
      threeByThree2 = [[4, 4, 4], [5, 5, 5], [6, 6, 6]];
  var result = [];

  var generateMatrix = function(n) {
    var result = [];

    for (var i = 0; i < n; i++) {
      var interimArray = [];
      for (var k = 0; k < n; k++) {
        interimArray.push(Math.floor(Math.random() * 50) + 1);
      }
      result.push(interimArray);
    }

    return result;
  }

  beforeEach(function() {
    result = [];
  });

  it('should be a function', function() {
    expect(multiplyMatrices).to.be.a('function');
  });

  it('should multiply a 2x2 matrix', function() {
    result = multiplyMatrices(twoByTwo1, twoByTwo2);
    expect(result.length).to.equal(2);
    expect(result[0].length).to.equal(2);
    expect(result).to.eql([[19, 22], [43, 50]]);
  });

  it('should multiply a 3x3 matrix', function() {
    result = multiplyMatrices(threeByThree1, threeByThree2);
    expect(result.length).to.equal(3);
    expect(result[0].length).to.equal(3);
    expect(result).to.eql([[15, 15, 15], [30, 30, 30], [45, 45, 45]]);
  });

  it('should multiply an NxN matrix', function() {
    result = multiplyMatrices(generateMatrix(10), generateMatrix(10));
    expect(result.length).to.equal(10);
    expect(result[0].length).to.equal(10);
  });
});