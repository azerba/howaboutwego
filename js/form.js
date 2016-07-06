//   // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyApQ4j_0CNBiou_dLhcRF7mVtmSv9gf4ec",
//   authDomain: "formadds-c1cf8.firebaseapp.com",
//   databaseURL: "https://formadds-c1cf8.firebaseio.com",
//   storageBucket: "formadds-c1cf8.appspot.com",
// };
// // 
// firebase.initializeApp(config);

//   // Set up auth:

// var firebaseAuth = firebase.auth();
// var provider = new firebase.auth.GoogleAuthProvider();

// var token;
// var currentUser;

// // Log in
// firebaseAuth.signInWithPopup(provider).then(function(result) {

//   // This gives you a Google Access Token. 
//   // You can use it to access the Google API
//   // (can be useful for stuff like Google Maps).
//   token = result.credential.idToken;
//   // console.log(result);

//   // The signed-in user info.
//   currentUser = result.user;


// }).catch(function(error) {
//   console.log(error);
// });

// var firebaseDB = firebase.database();

// var objectsInFirebase = firebaseDB.ref('objects');

// var firebaseDB = firebase.database();
// var objectsInFirebase = firebaseDB.ref('objects'); //will create

// var submitButton = $('.submit');

// submitButton.on('click', function(event){
//   event.preventDefault();

//   var restName = $('.restname').val();
//   $('.restname').val('');

//   var location = $('.location').val();
//   $('.location').val('');

//   var description = $('.description').val();
//   $('.description').val('');

//   var author = $('.author').val();
//   $('.author').val('');

//   var tags = [];

//   $('.category').each(function(index, item) {
//     if ($(item).prop('checked')) {
//       tags.push($(item).val());
//     }
//   });
  
//   objectsInFirebase.push({
//     name: restName,
//     location: location,
//     description: description,
//     author: author,
//     tags: tags,   
//   });

// });


// objectsInFirebase.on('value', function(results) {
//   $('.restaurant-suggest').empty();

//   // Extract readable version of results
//   // (or an empty object if there are no results)
//   var restaurantsFromFirebase = results.val() || {};
//   // console.log(restaurants);

//   var keys = Object.keys(restaurantsFromFirebase);

//   // console.log(keys);

//   keys.forEach(function(key){
//     restaurants.push(restaurantsFromFirebase[key])
//   })
// });


// // var restaurantStore = [];

// // var weirdIds = Object.keys(restaurants);

// // weirdIds.forEach(function(weirdId) {
// //   var rest = restaurants[weirdId];
// //   restaurantStore.push({
// //     name: rest.resttitle,
// //     location: rest.restlocation,
// //     description: rest.restdescript,
// //     author: rest.restauthor,
// //     tags: rest.restcategories
// //   })
// // });

// // categoryStore.forEach(function(category, index) {
// //   category.restaurants = [];
// // });



// // restaurantStore.forEach(function(restaurant) {
// //   restaurant.tags.forEach(function(tag, index) {
// //     if (tag) {
// //       categoryStore[index].restaurants.push(restaurant);
// //     }
// //   });
// // });


// // categoryStore.forEach(function(category, index) {
// //   var $li = $($('.box')[index]);
// //   $li.on('click', function(event) {
// //     var category = categoryStore[index];
// //     var restaurants = category.restaurants;
// //     // first erase restaurants that are down below now, then
// //     // render restaurants down below
// //   })
// // })
