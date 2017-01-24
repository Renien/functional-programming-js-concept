//We could have done this with a loop?
let coutDownFrom = (num) => {
    if(num === 0) return;
    console.log(num)
    coutDownFrom(num - 1)
}

coutDownFrom(10)