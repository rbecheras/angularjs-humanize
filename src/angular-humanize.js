(function( angular ) {
  'use strict';

  angular.module('angular-humanize', []).
    filter('humanizeFilesize', function () {
      return function ( input, kilo, decimals, decPoint, thousandsSep ) {
        if ( isNaN(parseInt(input)) ) { return input; }
        if ( isNaN(parseInt(kilo)) ) { kilo = undefined; }
        if ( isNaN(parseInt(decimals)) ) { decimals = undefined; }
        return humanize.filesize(parseInt(input), kilo, decimals, decPoint || undefined, thousandsSep || undefined);
      };
    }).
    filter('humanizeOrdinal', function () {
      return function ( input ) {
        if ( parseInt(input) !== input ) { return input; }
        return humanize.ordinal(input);
      };
    }).
    filter('humanizeNaturalDay', function () {
      return function ( input ) {
        if ( parseInt(input) !== input ) { return input; }
        return humanize.naturalDay(input);
      };
    }).
    filter('humanizeRelativeTime', function () {
      return function ( input ) {
        if ( parseInt(input) !== input ) { return input; }
        return humanize.relativeTime(input);
      };
    });

}( angular ));
