var mainApp = angular.module('ngApp', ['ngAnimate', 'ui.bootstrap','ngMap']);
//FoodService-----------------------------------------------------------------------------
mainApp.factory('FoodService', function(){
  var foodService = {
    restaurants: [
      {id:"0", imageLink:"images/SzechwanPalace.jpg", alt:"SzechwanPalace.jpg", name:"Szechwan Palace", cname:"老四川", address:"Chinese Cultural Center, 668 N 44th St #108, Phoenix, AZ 85008", phone:"(602)685-0888", website:"http://www.szechwanpalacechinese.com/", style:"Szechwan style"},
      {id:"1", imageLink:"images/PacificSeafoodBuffet.jpeg", alt:"PacificSeafoodBuffet.jpeg",name:"Pacific Seafood Buffet", cname:"太平洋海鲜自助", address:"8172 W Bell Rd, Glendale, AZ 85308", phone:"(623)776-7888", website:"http://www.pacificseafoodbuffet.com/", style:"Buffet"},
      {id:"2", imageLink:"images/ThaiBasil.jpg", alt:"ThaiBasil.jpg",name:"Thai Basil",address:"1111 S Rural Rd, Tempe, AZ 85281", phone:"(480)557-0101", website:"http://www.thaibasilasu.com/", style:"Thai food" },
      {id:"3", imageLink:"images/PhoenixPalace.jpg", alt:"PhoenixPalace.jpg",name:"Phoenix Palace",address:"Dobson Park Plaza, 2075 N Dobson Rd, Chandler, AZ 85224", phone:"(480)855-4047", website:"http://www.phoenixpalacechandleraz.com/", style:"Cantonese style"},
      {id:"4", imageLink:"images/ChengduDelightChineseCuisine.jpg", alt:"ChengduDelightChineseCuisine.jpg",name:"Chengdu Delight Chinese Cuisine", cname:"合顺园", address:"2992 N Alma School Rd #3, Chandler, AZ 85224", phone:"(480)963-1198", style:"Szechwan style"},
      {id:"5", imageLink:"images/TaqueriaMiCasita.jpg", alt:"TaqueriaMiCasita.jpg",name:"Taqueria Mi Casita",address:"2050 N Alma School Rd, Chandler, AZ 85224", phone:"(480)814-7047", website:"http://www.taqueriamicasita.com", style:"Mexican style"},
      {id:"6", imageLink:"images/PoposFiestaDelSol.jpg", alt:"PoposFiestaDelSol.jpg",name:"Popo's Fiesta Del Sol",address:"6542 W Indian School Rd, Phoenix, AZ 85033", phone:"(623)846-2636", website:"http://poposmexicanfood.com", style:"Mexican style"},
      {id:"7", imageLink:"images/AnayasFresh.jpg", alt:"AnayasFresh.jpg",name:"Anaya's Fresh Mexican Restaurant",address:"5830 W Thunderbird Rd, Glendale, AZ 85306", phone:"(602)559-4377", website:"http://anayasfreshmexicanrestaurant.com", style:"Mexican style"}
    ],
    food: [
      {imageLink:"images/SzechwanPalaceFood1.jpg", restaurantId:"0", alt="SzechwanPalaceFood1.jpg"},
      {imageLink:"images/SzechwanPalaceFood2.jpg", restaurantId:"0", alt="SzechwanPalaceFood2.jpg"},
      {imageLink:"images/SzechwanPalaceFood3.jpg", restaurantId:"0", alt="SzechwanPalaceFood3.jpg"},
      {imageLink:"images/SzechwanPalaceFood4.jpg", restaurantId:"0", alt="SzechwanPalaceFood4.jpg"},
      {imageLink:"images/PacificSeaFoodBuffetFood1.jpg", restaurantId:"1", alt="PacificSeaFoodBuffetFood1.jpg"},
      {imageLink:"images/PacificSeaFoodBuffetFood2.jpg", restaurantId:"1", alt="PacificSeaFoodBuffetFood2.jpg"},
      {imageLink:"images/PacificSeaFoodBuffetFood3.jpg", restaurantId:"1", alt="PacificSeaFoodBuffetFood3.jpg"},
      {imageLink:"images/PacificSeaFoodBuffetFood4.jpg", restaurantId:"1", alt="PacificSeaFoodBuffetFood4.jpg"},
      {imageLink:"images/ThaiBasilFood1.jpg", restaurantId:"2", alt="ThaiBasilFood1.jpg"},
      {imageLink:"images/ThaiBasilFood2.jpg", restaurantId:"2", alt="ThaiBasilFood2.jpg"},
      {imageLink:"images/ThaiBasilFood3.jpg", restaurantId:"2", alt="ThaiBasilFood3.jpg"},
      {imageLink:"images/ThaiBasilFood4.jpg", restaurantId:"2", alt="ThaiBasilFood4.jpg"},
      {imageLink:"images/PhoenixPalaceFood1.jpg", restaurantId:"3", alt="PhoenixPalaceFood1.jpg"},
      {imageLink:"images/PhoenixPalaceFood2.jpg", restaurantId:"3", alt="PhoenixPalaceFood2.jpg"},
      {imageLink:"images/PhoenixPalaceFood3.jpg", restaurantId:"3", alt="PhoenixPalaceFood3.jpg"},
      {imageLink:"images/PhoenixPalaceFood4.jpg", restaurantId:"3", alt="PhoenixPalaceFood4.jpg"},
      {imageLink:"images/ChengduDelightChineseCuisineFood1.jpg", restaurantId:"4", alt="ChengduDelightChineseCuisineFood1.jpg"},
      {imageLink:"images/ChengduDelightChineseCuisineFood2.jpg", restaurantId:"4", alt="ChengduDelightChineseCuisineFood2.jpg"},
      {imageLink:"images/ChengduDelightChineseCuisineFood3.jpg", restaurantId:"4", alt="ChengduDelightChineseCuisineFood3.jpg"},
      {imageLink:"images/ChengduDelightChineseCuisineFood4.jpeg", restaurantId:"4", alt="ChengduDelightChineseCuisineFood4.jpeg"},
      {imageLink:"images/TaqueriaMiCasitaFood1.jpg", restaurantId:"5", alt="TaqueriaMiCasitaFood1.jpg"},
      {imageLink:"images/TaqueriaMiCasitaFood2.jpg", restaurantId:"5", alt="TaqueriaMiCasitaFood2.jpg"},
      {imageLink:"images/TaqueriaMiCasitaFood3.jpg", restaurantId:"5", alt="TaqueriaMiCasitaFood3.jpg"},
      {imageLink:"images/TaqueriaMiCasitaFood4.jpg", restaurantId:"5", alt="TaqueriaMiCasitaFood4.jpg"},
      {imageLink:"images/PoposFiestaDelSolFood1.jpg", restaurantId:"6", alt="PoposFiestaDelSolFood1.jpg"},
      {imageLink:"images/PoposFiestaDelSolFood2.jpg", restaurantId:"6", alt="PoposFiestaDelSolFood2.jpg"},
      {imageLink:"images/PoposFiestaDelSolFood3.jpg", restaurantId:"6", alt="PoposFiestaDelSolFood3.jpg"},
      {imageLink:"images/PoposFiestaDelSolFood4.jpg", restaurantId:"6", alt="PoposFiestaDelSolFood4.jpg"},
      {imageLink:"images/AnayasFreshFood1.jpg", restaurantId:"7", alt="AnayasFreshFood1.jpg"},
      {imageLink:"images/AnayasFreshFood2.jpg", restaurantId:"7", alt="AnayasFreshFood2.jpg"},
      {imageLink:"images/AnayasFreshFood3.jpg", restaurantId:"7", alt="AnayasFreshFood3.jpg"},
      {imageLink:"images/AnayasFreshFood4.jpg", restaurantId:"7", alt="AnayasFreshFood4.jpg"}
    ]
  };
  return foodService;
});
//CollapseCtrl Sign in/Sign up/Sign out------------------------------------------------------
mainApp.controller('CollapseCtrl', function($scope, $http) {
  $scope.signInisCollapsed = true;
  $scope.signUpisCollapsed = true;
  $scope.isSignIn = false;
  $scope.isExist = false;
  $scope.isEmpty = false;
  $scope.isWrongPw = false;

  $scope.openSignUp = function() {    
    $scope.signUpisCollapsed = false; 
    $scope.signInisCollapsed = true;
  }
   $scope.openSignIn = function() {    
    $scope.signUpisCollapsed = true; 
    $scope.signInisCollapsed = false;
  }

  $scope.signUp = function() {    
    $http({
      method: 'POST',
      url: '/signup',
      header: {'Content-Type' : 'application/json'},
      data: {
              username: $scope.signUpUsername,
              password: $scope.signUpPassword
            }
    }).then(function successCallback(response) {
      console.log(response.data);
      $scope.signUpisCollapsed = true;     
      $scope.isSignIn = true;
      $scope.nameLabel = $scope.signUpUsername;
    }, function errorCallback(response) {
      console.log("Response status: " + response.status);
       $scope.isExist = true;
    });
  }

  $scope.signIn = function(){
    $http({
      method: 'POST',
      url: '/signin',
      header: {'Content-Type' : 'application/json'},
      data: {
              username: $scope.signInUsername,
              password: $scope.signInPassword
            }
    }).then(function successCallback(response) {
      console.log(response.data);
      if(response.status == 203){
        $scope.isWrongPw = true;        
      } else{
        $scope.signInisCollapsed = true; 
        $scope.isEmpty = false;
        $scope.isSignIn = true;
        $scope.nameLabel = $scope.signInUsername;
      }        
    }, function errorCallback(response) {
      console.log("Response status: " + response.status);
      $scope.isEmpty = true;
    });
  }

  $scope.signOut = function() {
    $http({
      method: 'POST',
      url: '/signout',
      header: {'Content-Type' : 'application/json'}
    }).then(function (response) {
      $scope.isSignIn = false;
    });
  } 
});
//Carousel Controller------------------------------------------------------------------------
mainApp.controller('CarouselCtrl', function ($scope, FoodService) {  
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var currIndex = 0;
  var food = FoodService.food;
  var NumofFood = food.length;
  
  var slides = $scope.slides = [
    {
      image: 'images/SzechwanPalaceFood1.jpg',
      id: currIndex++
    },
    {
      image: 'images/SzechwanPalaceFood2.jpg',
      id: currIndex++
    },
    {
      image: 'images/SzechwanPalaceFood3.jpg',
      id: currIndex++
    },
    {
      image: 'images/SzechwanPalaceFood4.jpg',
      id: currIndex++
    }
  ];   
});
//Tab Controller-----------------------------------------------------------------------------
mainApp.controller('TabsCtrl',function ($scope, $timeout, NgMap, FoodService){
  $scope.food = FoodService.food;
  var restaurants = FoodService.restaurants;
  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;
  //rating
  $scope.hoveringOver = function(value) {    
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };  
  
//google map
   $scope.maps = {};  

        NgMap.getMap({ id: 'map1' }).then(function (map) {
                map.showInfoWindow('bar1', 'marker1'); //show marker on map load
                $scope.maps['map1'] = map;
        });
//restaurant
  $scope.myVar = true;
  $scope.myVarFunc = function(f){
    $scope.myVar = !$scope.myVar;
    var restaurant = restaurants[f.restaurantId];  
    $scope.address = restaurant.address;
    $scope.restaurantName = restaurant.name;
    $scope.image = restaurant.imageLink;
    $scope.alt = restaurant.alt;
    $timeout(function () {
                        angular.forEach($scope.maps, function (map) {
                                google.maps.event.trigger(map, 'resize');
                        });
                });
    };

  //show restaurant infomation
  $scope.oneAtTime = true;
  var restaurantPage = "html/restaurantInfo.html"; 
  $scope.restaurantInfo = function(restaurantName){
    restaurantPage = "html/" + restaurantName + ".html";     
  };
  $scope.showRestaurantPage = function(){
    return restaurantPage;
  }
 
});