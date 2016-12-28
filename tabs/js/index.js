var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl',["$scope",function ($scope) {

    $scope.person = [
        {
            "firstname":"Sam",
            "lastname":"Zhang",
            "gender":"Male",
            "salary":14333.20,
            "birthday":new Date("2007-03-01")
        },{
            "firstname":"Zame",
            "lastname":"Wang",
            "gender":"Male",
            "salary":12333.20,
            "birthday":new Date("1997-09-09")
        },{
            "firstname":"Ame",
            "lastname":"Huang",
            "gender":"Female",
            "salary":12133.60,
            "birthday":new Date("1989-03-05")
        },{
            "firstname":"Lili",
            "lastname":"Liu",
            "gender":"Female",
            "salary":9333.20,
            "birthday":new Date("2003-06-01")
        },{
            "firstname":"Edward",
            "lastname":"Jack",
            "gender":"Male",
            "salary":19333.50,
            "birthday":new Date("1998-05-01")
        }
    ];

    $scope.firName = "";
    $scope.lasName = "";
    $scope.checks  = false;
    $scope.title   = "title";
    $scope.dsc     = true;
    $scope.checkn  = true;

    $scope.show    = function (val) {
        $scope.checkn = !val;
    };

    $scope.find    = function (val) {

        if (this.firName != "" && $scope.lasName == ""){
            if(val.firstname.toLowerCase().indexOf($scope.firName.toLowerCase()) != -1){
                return true
            }else {
                return false
            }
        }else if(this.firName == "" && $scope.lasName != ""){
            if(val.lastname.toLowerCase().indexOf($scope.lasName.toLowerCase()) != -1){
                return true
            }else {
                return false
            }
        }else if(this.firName != "" && $scope.lasName != ""){
            if(val.firstname.toLowerCase().indexOf($scope.firName.toLowerCase()) != -1 && val.lastname.toLowerCase().indexOf($scope.lasName.toLowerCase()) != -1){
                return true
            }else {
                return false
            }
        }else{
            return true
        }

    };

    $scope.click   = function (name) {
        if($scope.title != name){
            $scope.title = name;
            $scope.dsc   = true;
        }else {
            $scope.dsc = !$scope.dsc;
        }
    };
    $scope.addC    = function (name) {
        if($scope.title == name){
            return !$scope.dsc ? "up-arr" : "down-arr"
        }
    }

}]);