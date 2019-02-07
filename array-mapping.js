
//want to add new item in each object of the array, z = sqrt(x^2+y^2)


// input is an array containing objects
var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

// maps the 'input' array and running though all items
var result = input.map(function(item) {  // anonymous fn takes item as a parameter
  var sX = item.x * item.x;  // grabs the key value using our parameter and dot notation (object)
  var sY = item.y * item.y;  // grabs the key value using our parameter and dot notation (object)
  var z = Math.sqrt(sX + sY);  // sqrt method gets us the square root of the equasion

  return z;

});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);