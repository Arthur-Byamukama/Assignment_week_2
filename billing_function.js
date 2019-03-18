const bill=(amountTenderd,transactionCharge)=>amountTenderd-amountTenderd*transactionCharge;

console.log(bill(1000000, 0.025));

//this is the original code
/*const transactionCharge=0.025;
var amountTendered=100000;
console.log('This is what the billed amount is (less transaction charges);');
console.log(amountTendered-(transactionCharge*amountTendered));*/
