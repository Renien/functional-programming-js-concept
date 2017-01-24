var foods = [
    { name: 'carrots', type: 'vegetable', price: 10 },
    { name: 'potato', type: 'vegetable', price: 103 },
    { name: 'apple', type: 'fruit', price: 200 },
    { name: 'rice', type: 'grain', price: 70 },
    { name: 'grapes', type: 'fruit', price: 100 },
    { name: 'beetroot', type: 'vegetable', price: 90 },
]

 var totalPrice = 0;
 for (var i = 0; i < foods.length; i++) {
     totalPrice += foods[i].price;
 }

//Example for reduce function
 var totalPrice = foods.reduce(function(sum, food) {
     return sum + food.price;
 }, 0);

 