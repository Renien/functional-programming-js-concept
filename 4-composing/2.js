var foods = [
    { name: 'carrots', type: 'vegetable' },
    { name: 'potato', type: 'vegetable' },
    { name: 'apple', type: 'fruit' },
    { name: 'rice', type: 'grain' },
    { name: 'grapes', type: 'fruit' },
    { name: 'beetroot', type: 'vegetable' },
]

//normal way of filtering the array
// var fruits = []
// for(var i = 0; i < foods.length; i++) {
//     if (foods[i].type === 'fruit') {
//         fruits.push(foods[i])
//     }
// }

//Functions that are sent into another functions are called 'CALL BACK FUNCTIONS'
var fruits = foods.filter(function (food) {
    return food.type === 'fruit';
});

//Simply decoupled 
var isFruit = function (food) {
    return food.type === 'fruit';
}
var fruits = foods.filter(isFruit);