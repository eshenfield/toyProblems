describe('isBalanced', function() {
  it('should be a function', function() {
    expect(isBalanced).to.be.a('function');
  });

  it('should return a boolean', function() {
    expect(isBalanced('')).to.be.a('boolean');
    expect(isBalanced()).to.be.a('boolean');
  });

  it('should return true for an empty string', function() {
    expect(isBalanced('')).to.be.true;
  });

  it('should check for three types of braces', function() {
    expect(isBalanced('()')).to.be.true;
    expect(isBalanced('{}')).to.be.true;
    expect(isBalanced('[]')).to.be.true;

    expect(isBalanced('(}')).to.be.false;
  });

  it('should return true if the parentheses are balanced', function() {
    expect(isBalanced('({})[()]')).to.be.true;
    expect(isBalanced('(if((x+y)=== 3) { return true })')).to.be.true;
    expect(isBalanced('var array = [1,2,3]; return (array.push(4))')).to.be.true;
  });

  it('should return false if the parentheses are not balanced', function() {
    expect(isBalanced(')')).to.be.false;
    expect(isBalanced('(')).to.be.false;
    expect(isBalanced('{{{))]')).to.be.false;
    expect(isBalanced('for(var i = 0; i < 3; i + (i + 1){}')).to.be.false;
  });

});