angular.module('wikiwash').controller('PagesController', ['$scope', '$routeParams', 'socket', 
  function($scope, $routeParams, socket) {
    socket.emit('cycle page data', {page: $routeParams.page});
    
    $scope.$on('$locationChangeStart', function(event) {
      socket.emit('stop cycle');
    });
  }
]);
