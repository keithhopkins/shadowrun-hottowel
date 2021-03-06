(function() {
  'use strict';

  angular.module('app.components.characterDisplay.ware')
    .directive('srWareDisplay', wareDirective);

  function wareDirective(){
    return {
      restrict: 'E',
      scope: {
        editable: '=?'
      },
      templateUrl: 'app/components/characterDisplay/ware/ware.html',
      controller: WareController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  WareController.$inject = ['characterservice'];

  function WareController(characterservice) {
    var vm = this;

    activate();
    vm.deleteWare = deleteWare;

    function activate() {
      vm.editable = Boolean(vm.editable) || false;
      vm.ware = characterservice.getWare();
    }

    function deleteWare(ware){
      for (var i=0; i<vm.ware.length; i++){
        if (ware === vm.ware[i]){
          return vm.ware.splice(i, 1);
        }
      }
    }
  }

})();
