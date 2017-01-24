// Functions Of Functions 
function forEach(list,fn) {
    for (let i = 0; i < list.length; i++) {
        fn( list[i] );
    }
}

//Higer-order function
forEach( [1,2,3,4,5], function each(val){
    console.log( val );
} );