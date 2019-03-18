var fizzBuzz = num => {
for (var n =1; n <= num; n++){
if (n%3===0 && n%5===0){
 console.log("FizzBuzz!" + "(" + n + ")");
}else if (n%3===0) {
 console.log("Fizz!" + "(" + n + ")");
}else if (n%5===0){
 console.log("Buzz!" + "(" + n + ")");
}else{
 console.log(n);
}
}
return ("finished!");
}
fizzBuzz (100)

/* this is the original code
var x = 1;
while (x <= 100){
 if (x%3===0 && x%5===0){
   console.log("FizzBuzz");
 }else if (x%3===0) {
   console.log("Fizz");
 }else if (x%5===0){
   console.log("Buzz");
 }else{
   console.log(x);
 }
 x ++;
}
*/
