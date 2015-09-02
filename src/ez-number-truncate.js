angular.module('ez.numberTruncate', []).filter('ezNumberTruncate', [function () {
  return function (v) {
    var isNegative = false;

    if (v < 0) {
      isNegative = true;
    }

    v = Math.abs(v);

    if (v >= 1000000) {
      v =  (v / 1000000).toFixed(1).replace(/\.0$/, '') + 'Mil';
    } else if (v >= 1000) {
      v =  (v / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }

    if (isNegative) {
      v = '-' + v;
    }

    return v;
  };
}]);
