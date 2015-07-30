describe('maxNonAdjacentSum', function() {
  var testData1 = [3, 6, 7, 10, 4, 1, 2];
  var testData2 = [4, 3, 4, 6, 0];
  var testData3 = [6, 2, 0];
  var testData4 = [4];
  var testData5 = [9, 2, 10, 15, 2, 21];

  it('should be a function', function() {
    expect(maxNonAdjacentSum).to.be.a('function');
  });

  it('should return the greatest non-adjacent sum', function() {
    expect(maxNonAdjacentSum(testData1)).to.equal(18);
    expect(maxNonAdjacentSum(testData2)).to.equal(10);
    expect(maxNonAdjacentSum(testData5)).to.equal(9+15+21);
  });

  it('should handle edge/small cases', function() {
    expect(maxNonAdjacentSum(testData3)).to.equal(6);
    expect(maxNonAdjacentSum(testData4)).to.equal(4);
  })
})

