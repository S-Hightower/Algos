// in an object
pokemon[1]["name"]
pokemon[2].name

//nested array or 2d array

var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array



//flattened array
//introducing the idea of nested for loops

// [2,5,8,3,6,1,5,7,7]


function flatten(arr2d) {
        // empty array to store value
    var flat = [];
            // iterate the outside array
        for(var i=0; i < arr2d.length; i++){
            // iterate the inside array, nested loop runs its course first, then we return to outer loop
            for(var j=0; j < arr2d[i].length; j++){
            // add the element back to our result array
                flat.push(arr2d[i][j])
                // console.log(arr2d[i][j])
                // arr[index]
            }
        }
            // print out the result
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result);