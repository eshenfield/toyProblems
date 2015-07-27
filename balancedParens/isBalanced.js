/*   Solution for only '()' parentheses */
/* var isBalanced = function(string) {
  var stack = [];
  
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      stack.push(')');
    }
    if (string[i] === ')') {
      if (stack.length) {
        stack.pop();
      } else {
        return false;
      } 
    }
  }

  return !!(!stack.length);
}; */

var isBalanced = function(string) {
  if (string === undefined) return false;

  var openBraces = ['[', '{', '('];
  var closeBraces = [']', '}', ')'];
  var index;
  var stack = [];

  for (var i = 0; i < string.length; i++) {
    if (openBraces.indexOf(string[i]) > -1) {
      stack.push(string[i]);
    } else if (closeBraces.indexOf(string[i]) > -1) {
      index = closeBraces.indexOf(string[i]);
      if (stack.pop() !== openBraces[index]) {
        return false;
      }
    }
  }
  return !!(!stack.length);
};


