var age = 15

if (age >= 16){
    console.log("You can drive")
}
if(age >= 18){
    console.log("You can buy lotto tickets")
}
if (age >= 21){
    console.log("You can buy smokes")
}
else if(age < 16){
    console.log("Come back when you're older")
}


var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
for(var i = 0; i < numbers.length; i++){
    if(numbers[i] >= 0){
        countPositives++;
    }
}
    
console.log("there are " + countPositives + " positive values");