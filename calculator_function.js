/*var dob = "03-23-1990";
var currentdate="12-03-2019";
age = currentdate.slice(6,10)-dob.slice(6,10);
{
  console.log("my age is " + age)
}*/

var ageCalc = date => {
    var d = String(new Date().getFullYear());
    var x = date.split("-")[2];
    var age = d - x;
    return age;
        }

ageCalc ("03-04-1990")
