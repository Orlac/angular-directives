/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('ui.documentClick', []).directive('ngDocumentClick', function() {
    return function(scope, element, attrs) {
        $(document).click(function(e){
            if($(element).is(':visible') ){
                if(e.target!==$(element).get(0) && !$(element).has(e.target).length){ 
                    if(!attrs.ngDocumentClick){
                        $(element).hide(); 
                    }else{
                        scope.$apply(function(){
                            scope.$eval(attrs.ngDocumentClick, {'event': e});
                        });
                    }
                }
            }
        });
    };
});