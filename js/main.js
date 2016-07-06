
function Restaurant (name, location, description, author, tagIndexes) {
	this.name = name;
	this.location = location;
	this.description = description;
	this.author = author;
	this.tags = [];

	var that = this;

	tagIndexes.forEach(function(tagIndex){
		that.tags.push(tagsMasterArray[tagIndex]);
	});

}

// prototype points to object which has one property called eat something


var nyFare = [];
var casual = [];
var cheapeats = [];
var datefood = [];
var ethnic = [];
var coffeehouses = [];

var tagsMasterArray = ["NY Fare", "Casual", "Cheap Eats", "Date Food", "Ethnic", "Coffee and Desserts"];

	// var topic1 = "NY Fare";
	// var topic2 = "Casual";
	// var topic3 = "Cheap Eats";
	// var topic4 = "Date Food";
	// var topic5 = "Ethnic";
	// var topic6 = "Coffeehouses";

// Restaurant.prototype.category = function (tags) {
// 	this.tags.push(tags); // pushing something on array

// }

var juniors = new Restaurant("Juniors", "Theater District", "This is a classic New York diner. The food is a bit pricey, but it's tasty and the portions are quite large. Come here for the cheesecake, either after dinner or a show. And the drip coffee has free refills in big mugs.", "Amy Z.", [0, 1, 5]);
var virgils = new Restaurant("Virgils", "Times Square", "Might be the best bbq place in Manhattan. This place does not mess around. No paper towel rolls or wash cloths. They give hand towels to patrons. It's a bit pricey for barbecue: $20-$25 dishes, but the portions are large. Try the brisket or turkey. They have a great Thanksgiving spread, too, with smoked turkey.", "Amy Z.", [1]);
var russianVodkaRoom = new Restaurant("Russian Vodka Room", "Times Square", "They specialize in, what else, vodka, and it's some of the best. If you can't drink it straight, have it mixed with a juice. The food is very good here, too. Try the beef stroganoff or chicken schnitzel.", "Amy Z.", [4]);
var aroma = new Restaurant("Aroma", "West 72nd Street and Broadway", "They give you a little piece of chocalate with your coffee orders. Enough said. The food here is very healthy. I've gotten the chick pea bowl, which is like a salad but with garbanzo beans. There are sandwiches, wraps and even pasta.", "Amy Z.", [2, 5]);
var aangan = new Restaurant("Aangan", "West 103rd and Broadway", "My favorite Indian place in Manhattan. The customer service is wonderful and the chicken tikka masala is delicious. And the naan, too. Sadly, there is no Indian tea to order.", "Amy Z.", [4]);
var halal = new Restaurant("The Halal Guys", "West 53rd Street and Sixth Avenue", "Every now and then you'll crave street food that isn't really healthy. This is the place to go. There is usually a line, which says something. Can't go wrong with grilled chicken over rice with a side salad. So much food.", "Amy Z.", [0, 2]);
var toast = new Restaurant("Toast", "104th Street and Broadway", "This is a neighborhood cafe that has really tasty food: homemade meatloaf, very big salads and juicy hamburgers. It's also very pleasant when they open the windows. The music, sometimes, can be too loud.", "Amy Z.", [1, 3]);
var community = new Restaurant("Community Food and Juice", "Between 112th and 113th Streets and Broadway", "If you are looking for healthy eating, Community Food is it. They have rice bowls with healthy toppings.", "Amy Z.", [3]);


  // Initialize Firebase
var config = {
  apiKey: "AIzaSyApQ4j_0CNBiou_dLhcRF7mVtmSv9gf4ec",
  authDomain: "formadds-c1cf8.firebaseapp.com",
  databaseURL: "https://formadds-c1cf8.firebaseio.com",
  storageBucket: "formadds-c1cf8.appspot.com",
};

firebase.initializeApp(config);

  // Set up auth:

var firebaseAuth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

var token;
var currentUser;

// Log in
firebaseAuth.signInWithPopup(provider).then(function(result) {

  // This gives you a Google Access Token. 
  // You can use it to access the Google API
  // (can be useful for stuff like Google Maps).
  token = result.credential.idToken;
  // console.log(result);

  // The signed-in user info.
  currentUser = result.user;


}).catch(function(error) {
  console.log(error);
});

var firebaseDB = firebase.database();

var objectsInFirebase = firebaseDB.ref('objects');

var firebaseDB = firebase.database();
var objectsInFirebase = firebaseDB.ref('objects'); //will create

var submitButton = $('.submit');

submitButton.on('click', function(event){
  event.preventDefault();

  var restName = $('.restname').val();
  $('.restname').val('');

  var location = $('.location').val();
  $('.location').val('');

  var description = $('.description').val();
  $('.description').val('');

  var author = $('.author').val();
  $('.author').val('');

  var tags = [];

  $('.category').each(function(index, item) {
    if ($(item).prop('checked')) {
      tags.push($(item).val());
    }
  });
  
  objectsInFirebase.push({
    name: restName,
    location: location,
    description: description,
    author: author,
    tags: tags,   
  });

});


objectsInFirebase.on('value', function(results) {
  $('.restaurant-suggest').empty();

  // Extract readable version of results
  // (or an empty object if there are no results)
  var restaurantsFromFirebase = results.val() || {};
  // console.log(restaurants);

  var keys = Object.keys(restaurantsFromFirebase);

  // console.log(keys);

  keys.forEach(function(key){
    restaurants.push(restaurantsFromFirebase[key])
  })
});



var restaurants = [juniors, virgils, russianVodkaRoom, aroma, aangan, halal, toast, community];

console.log(restaurants);

var chosenRestaurants = [];


// hide and show list //

$('.box').on('click', function(){
	$( ".topic-wrapper" ).hide();
	$(".restaurant-suggest-wrapper").show();
	var category = $(this).data('category');
	findAllRestaurantsWithinCategory(category);
	appendRestaurantsToList();
});


// hide and show add restaurant form //

$('.btn-add-restaurant').on('click', function(){
	$( ".topic-wrapper" ).hide();
	$(".form-wrapper").show();
});

$('.return-topics').on('click', function(){
	$(".form-wrapper").hide();
	$(".topic-wrapper").show();
	$(".restaurant-suggest-wrapper").hide();
});

// 

$('.return').on('click', function(){
	$(".restaurant-suggest-wrapper").hide();
	$(".form-wrapper").hide();
	$(".topic-wrapper").show();
	$
});




function findAllRestaurantsWithinCategory(category) {
	chosenRestaurants = [];
	// this will eventually hit up our sever to make a request for restaurants that have category tag.  for now, we will just pull out of an array
	restaurants.forEach(function(restaurant){
		if (restaurant.tags.indexOf(category) > -1) {
			console.log(restaurant);
			chosenRestaurants.push(restaurant);
		}
	})
}

function appendRestaurantsToList(){
	// console.log(chosenRestaurants);

	$('.list').html('');

	chosenRestaurants.forEach(function(restaurant){
		var $listItem = $("<li class='item-li'></li>"),
			$h1 = "<h1 class='item-name'>" + restaurant.name + "</h1>",
			$h2 = "<h2 class='item-location'>" + "<strong>" + "Location: " + "</strong>" + restaurant.location + "</h2>",
			$p = "<p class='item-desciption'>" + restaurant.description + "</p>",
			$h3 = "<h3 class='item-author'>" + " &#8212; " + restaurant.author + "</h3>";

		$listItem.append($h1);
		$listItem.append($h2);
		$listItem.append($p);
		$listItem.append($h3);
		$('.list').append($listItem);
	})
}





// function list(title, location, description, author, category[], container) {
//   var box = $('<div class="box">');
//   var name = $('<h2>');
//   var loc = $('<div>');
//	 var descript = $('<p>');
// 	 var author = $('<p>');
//   var category = $('[]');

//   name.text(title);
//   loc.text(location);

//   box.append(name).append(loc);
//   container.append(box);
// }

// var container = $('.container');

// items.forEach(function(item) {
//   list(item.title, item.location, container);
// });

// for (i=0, i < tags.length, i++) 
	// if (tags.indexOf(0)) {
	//   tags.push(nyFare);
	// }


// var restBucket = [{
// 	name:'halal', 
// 	cuisine: ['middle eastern', 'american']}, {name:'burger', cuisine: ['american']}];

// var midEastRests = [];
// var amRests = [];

// restBucket.forEach(function(rest) {

// 	rest.cuisine.forEach(function(cuisine) {

// 		if (cuisine === 'middle eastern') {
// 			midEastRests.push(rest);

// 		} else if (cuisine === 'american') {
// 			amRests.push(rest);
// 		}
// 	})
// })




