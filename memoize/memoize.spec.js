describe('memoize', function() {
  var testFunc = function(n) {
    return n;
  };

  var sum = function(a, b) {
    return a + b;
  }

  it('should be a function', function() {
    expect(memoize).to.be.a('function');
  });

  it('should return a function', function() {
    expect(memoize(testFunc)).to.be.a('function');
  });

  it('should return the expected output', function() {
    expect(memoize(testFunc)(2)).to.equal(2);
    expect(memoize(testFunc)(10)).to.equal(10);
    expect(memoize(sum)(2,3)).to.equal(5);
  });

  it('should only call the memoized function once for the same argument', function() {
    var spy = chai.spy(testFunc);

    var memoizedSpy = memoize(spy);
    memoizedSpy(2);
    expect(spy).to.have.been.called.once;
    memoizedSpy(2);
    expect(spy).to.have.been.called.once;
    memoizedSpy(3);
    expect(spy).to.have.been.called.twice;
    var result = memoizedSpy(3);
    expect(spy).to.have.been.called.twice;
    expect(result).to.equal(3);
  })
});
