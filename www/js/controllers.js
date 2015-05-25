angular.module('controllers', [])

.controller('HomeCtrl', function($scope){
  $scope.timeline = [
    {title: "Próximo Treino", description: "Segunda-feira, 27 de Setembro de 2015 às 18h<br>Ficha #2"},
    {title: "Último Treino", description: "Ontem, às 16h30<br>45min. de duração<br>Ficha #1"}
  ];
});
