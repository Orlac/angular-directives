/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * require inputDone.js
 */
angular.module('ui.doneInput', []).directive('ngDoneInput', function() {
    return function(scope, element, attrs) {
        
        $(element).inputDone(function(e){
            scope.$apply(function(){
                scope.$eval(attrs.ngDoneInput, {'event': e});
            });
        });
//        element.bind("keydown keypress", function(event) {
//            if(event.which === 13) {
//                scope.$apply(function(){
//                    scope.$eval(attrs.ngEnter, {'event': event});
//                });
//
//                event.preventDefault();
//            }
//        });
    };
});

