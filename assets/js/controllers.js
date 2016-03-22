bcApp.controller("bcController", function($scope) {
    console.log("this works?")
    // create a message to display in our view
    $scope.message = 'We have scope!';
  });//end bccontroller

  var lgPaintings = [
    {"id": 0, "title": "Thin Wild Mercury", "year": 2009, "size": "4'x8'", "mat": "Mixed media on canvas", "imgUrl": "assets/images/lrgPaintingImgs/ThinWildMercury2.jpg"},
    {"id": 1, "title": "Survey of The Second Hand", "year": 2010, "size": "5'4'", "mat": "Mixed media on canvas", "imgUrl": "assets/images/lrgPaintingImgs/bc2ndHand.jpg"},
    {"id": 2, "title": "This Is Not A Toy", "year": 2010, "size": "4'x4'", "mat": "Mixed media on canvas", "imgUrl": "assets/images/lrgPaintingImgs/ThisIsNotAToy2.jpg"},
    {"id": 3, "title": "Zero Incogneto", "year": 2009, "size": "4'x4'", "mat": "Mixed media on canvas", "imgUrl": "assets/images/lrgPaintingImgs/ZeroIncogneto.jpg"},
    {"id": 4, "title": "We've Our Second Hand", "year": 2009, "size": "3'x4'", "mat": "Mixed media on canvas", "imgUrl": "assets/images/lrgPaintingImgs/We'veOurHands2.jpg"},
    {"id": 5, "title": "Horizon 2010", "year": 2008, "size": "3'x3'", "mat": "Mixed media on panel", "imgUrl": "assets/images/lrgPaintingImgs/Horizon2.jpg"}
  ];//end lgPaintings
  var smPaintings = [
    {"id": 0, "title": "Untitled", "year": 2015, "size": "20''x16''", "mat": "Mixed media on canvas", "imgUrl": "assets/images/smPaintingImgs/untitled.jpg"},
    {"id": 1, "title": "Untitled", "year": 2015, "size": "24''x28''", "mat": "Mixed media on canvas", "imgUrl": "assets/images/smPaintingImgs/untitled2.jpg"},
    {"id": 2, "title": "Untitled", "year": 2014, "size": "20''x24''", "mat": "Mixed media on canvas", "imgUrl": "assets/images/smPaintingImgs/untitled3.jpg"},
    {"id": 3, "title": "Self Service", "year": 2013, "size": "36''x18''", "mat": "Mixed media on canvas", "imgUrl": "assets/images/smPaintingImgs/SelfService.jpg"},
    {"id": 4, "title": "20/2", "year": 2008, "size": "9''x6''", "mat": "Mixed media on panel", "imgUrl": "assets/images/smPaintingImgs/20-2.jpg"}
  ];//end lgPaintings
  var sketchbook = [
    {"id": 0, "title": "Untitled", "year": 2014, "size": "", "mat": "Mixed media on paper", "imgUrl": "assets/images/sketchbookImgs/sketchbook1.jpg"},
    {"id": 1, "title": "Untitled", "year": 2007, "size": "", "mat": "Mixed media on paper", "imgUrl": "assets/images/sketchbookImgs/sketchbook2.jpg"},
    {"id": 2, "title": "Untitled", "year": 2007, "size": "", "mat": "Mixed media on paper", "imgUrl": "assets/images/sketchbookImgs/sketchbook4.jpg"},
    {"id": 3, "title": "Untitled", "year": 2010, "size": "", "mat": "Mixed media on paper", "imgUrl": "assets/images/sketchbookImgs/sketchbbok5.jpg"}
  ];//end lgPaintings

bcApp.controller("BigPaintController", function($scope){
  $scope.paintings = lgPaintings;
  console.log($scope.paintings);
});//end bigpaintcontroller
bcApp.controller("SmallPaintController", function($scope){
  $scope.paintings = smPaintings;
  console.log($scope.paintings);
});//end bigpaintcontroller
bcApp.controller("SketchbookController", function($scope){
  $scope.paintings = sketchbook;
  console.log($scope.paintings);
});//end bigpaintcontroller
