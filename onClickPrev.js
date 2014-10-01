/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('on.clickPrev', []).directive('onClickPrev', ['$parse', '$rootScope', function($parse, $rootScope) {
    var directiveName='onClickPrev';
    var eventName='click';
    return {
        restrict: 'A',
        compile: function($element, attr) {
            var fn = $parse(attr[directiveName]);
            return function ngEventHandler(scope, element) {
                element.on(eventName, function(event) {
                    event.preventDefault();
                    var callback = function() {
                        fn(scope, {$event:event});
                    };
                    scope.$apply(callback);
                });
            };
        }
    };
}]);

