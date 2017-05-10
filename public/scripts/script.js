var myApp = angular.module( 'myApp', [] );
// set up controller removed '$http' string
myApp.controller( 'WhereMyPeeps', function( $http ){
  var vm = this;
  vm.records = [];
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
    console.log('back from server with ->', response);
    vm.getRecords();
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
    vm.records = response.data;
    });
  };
});
