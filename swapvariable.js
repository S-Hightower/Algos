var apples = "apples"
var oranges = "oranges"

var temp = apples
apples = oranges
oranges = temp

//can not swap values without a third variable otherwise we'd lose one of the initial values

var apples = "apples"
var oranges = "oranges"

oranges = apples 
//OR
apples = oranges


//Swap "a" and "e"
var array = ["a", "b", "c", "d", "e"]

var temp = array[0]
array[0] = array[4]
array[4] = temp

//Reverse an array

// var arr = ["a", "b", "c", "d", "e"]

//i++, arr.length - 1 - i

function reverse(arr){
    for(var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(reverse(["a", "b", "c", "d", "e"]))