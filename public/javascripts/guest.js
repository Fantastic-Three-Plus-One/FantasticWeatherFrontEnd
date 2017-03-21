var dev = 'http://localhost:5280'

//what's our heroku setup? n/s
var heroku = 'https://g-drinks.herokuapp.com'
//redefine as need be for testing and production
var server = heroku




$(document).ready(function() {
    console.log('linked');

})


var hikeSearch = {}


//on submit of the log in info, this will shoot the
$(document).on('click', '.newInfo-submit', function (e){
  // console.log('ahhhhh');
 // e.preventDefault();
 // '.btn-ingredient', function () {
 //   ingredientArray.unshift($('#InputDrinkIngredient').val())
 //   $('#InputDrinkIngredient').val("")



  // need to store and use data from a point clicked on the map

  hikeSearch.name = $('#hikeName').val()
  // console.log(title);
  hikeSearch.maxTemp = $('#maxTemp').val()
  // console.log(director);
  hikeSearch.minTemp = $('#minTemp').val()
  // console.log(year);
  hikeSearch.precipitation = $('#precipitation').val()
  // console.log(rating);
  hikeSearch.maxWind = $('#maxWind').val()
  // console.log(poster);
  hikeSearch.additionalInfo =
  $('#additionalInfo').val()

  console.log(hikeSearch);





 // $.ajax({
 //   method: 'DELETE',
 //   url: '/comment/'+ this.id
 // })
 })
