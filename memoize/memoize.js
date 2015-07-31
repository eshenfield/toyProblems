var memoize = function(func) {
  var resultsHash = {};
  return function() {
    argsKey = JSON.stringify(Array.prototype.slice.call(arguments));
    if (resultsHash[argsKey]) {
      return resultsHash[argsKey];
    } else {
      var result = func.apply(null, arguments);
      resultsHash[argsKey] = result;
    }

    return result;
  }
};