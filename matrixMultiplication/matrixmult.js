var multiplyMatrices = function(matrix1, matrix2) {
  var matrix1Rows = matrix1.length, matrix1Cols = matrix1[0].length,
      matrix2Cols = matrix2[0].length,
      result = [];

  for (var i = 0; i < matrix1Rows; ++i) {
    result[i] = [];
    for (var k = 0; k < matrix2Cols; ++k) {
      result[i][k] = 0;
      for (var p = 0; p < matrix1Cols; ++p) {
        result[i][k] += matrix1[i][p] * matrix2[p][k];
      }
    }
  }

  return result;
};