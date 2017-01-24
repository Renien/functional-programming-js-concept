var foods = [
    { name: 'carrots', type: 'vegetable' },
    { name: 'potato', type: 'vegetable' },
    { name: 'apple', type: 'fruit' },
    { name: 'rice', type: 'grain' },
    { name: 'grapes', type: 'fruit' },
    { name: 'beetroot', type: 'vegetable' },
]

//Normal way...
 var names = [];
 for (var i = 0; i < foods.length; i++) {
     names.push(foods[i].name); 
 }

//Map function...
 var names = foods.map(function(food) {
     return food.name;
 });

 //ECMA6 function 
//var names = foods.map((x) => x.name);