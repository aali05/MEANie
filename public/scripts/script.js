var myApp = angular.module( 'myApp', [] );
// set up controller removed '$http' string
myApp.controller( 'WhereMyPeeps', function( $http ){
  var vm = this;
  vm.allTheRecords = [];
  vm.addRecord = function(){
    var objectToSend ={
      name: vm.nameIn,
      location: vm.locationIn,
};
  $http({
    method: 'POST',
    url: '/testPost',
    data: objectToSend
  }).then( function( response ){
    vm.getRecords();
    console.log( response );
}); // end http
//empty inputs
vm.nameIn ='';
vm.locationIn='';
// update from server
}; // end addRecord

vm.getRecords = function(){
  $http({
    method: 'GET',
    url: '/getRecords'
  }).then(function success( response ){
    console.log('response ->', response);
    vm.allTheRecords = response.data;
    });
  };
  vm.getRecords();
});
