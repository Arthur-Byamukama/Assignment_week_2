var x = (t) => { return t > 2? 'val is greater than 2': t < 2? 'val is less than 2': t == 2? 'val is equal to 2': 'not known'}
console.log(x(15));

/*this is the original code
var x=1
if (x>0){
  console.log(1);
}
 else if (x<0){
   console.log(-1);
 }
  else if (x=0){
   console.log(0);
 }
*/
