app.controller('carController', function($scope, $http) {

    $scope.cars = [

        {
            license: 'ABC 123',
            brand: 'Volvo',
            model: 'V40',
            year: '2008'
        },
        {
            license: '456 CDE',
            brand: 'Opel',
            model: 'Corsa',
            year: '2015'
        },
        {
            license: '789 FGH',
            brand: 'Scania',
            model: 'S',
            year: '2016'
        }
    ];

    $scope.deleteCar = function(index){
        $scope.cars.splice(index,1);
    }

    $scope.addCar = function(){
        var newCar = { license: 'edit', brand: 'edit', model: 'edit', year: 'edit' };
        $scope.cars.push(newCar);
    }
});
