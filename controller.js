//Texten ska bytas ut mot input-fältet när man klickar på texten
//Input-fältet ska innehålla registreringsnumret så att man kan redigera det
//det man skriver in i fältet blir den nya texten
//Lägg till så att man kan redigera alla fält i tabellen
//Skapa ett par egna directives
//funktionalitet för att lägga till och ta bort en bil

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

});