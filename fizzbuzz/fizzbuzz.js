//---PART 0
// var sumOfArray = function getsumOfArray(){
//     var sumarray=[]
//     var count = 0
//     var sum = 0
//     while (count < sumarray.length) {
//      	sum += sumarray[count];
//      	count++
//      }
//     return sum
// }
// console.log(sumOfArray[1,2])
// console.assert(sumOfArray([1, 2]) === 3);
// console.assert(sumOfArray([]) === 0);
// console.assert(sumOfArray([1, 2, 3]) === 6);
// console.assert(sumOfArray([10, 9, 8]) === 27);



// ---PART 1
function sum(a,b){
	var a;
	var b;
	var sum = a + b;
	return sum;
}
console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

// ---PART 2 failed euclid method
// var gcdvar = function GCD (gcda, gcdb) {
// 	var gcda;
// 	var gcdb;
// 	if (gcdb > gcda){
// 		var switchgcd = gcda;
// 		gcda = gcdb;
// 		gcdb = switchgcd;
// 	}
// 	//Euclid algorithim
// 	while (gcdb === 0){
// 		var remainder = gcda % gcdb;
// 		gcda = gcdb * (Math.floor(gcda / gcdb) + remainder;
// 		gcda = gcdb;
// 		gcdb = remainder;
// 	}
// 	return gcda;
// }			
// console.log(gcdvar(20, 50));		
	
// ---PART 2 successful 
var count = 1;
var smallvar;
var theGCD = function getGCD (a,b) {
	if (a >= b) {
		smallvar = b;
	}
	else {
		smallvar = a;
	}
	while (count <= smallvar){
		if (a % count === 0 && b % count === 0){
			var gcd = count; 
		}
	count++;
	}
return gcd;
}
console.assert(theGCD(5,1) === 1);
console.assert(theGCD(15,3) === 3);
console.assert(theGCD(15,5) === 5);
console.assert(theGCD(50,20) === 10);

// ---PART 3
var theGCD = function getGCD (a,b) {
	if (a >= b) {
		var smallvar = b;
	}
	else {
		smallvar = a;
	}
	// console.log(smallvar)
	var count = 1;
	while (count <= smallvar){
		if (a % count === 0 && b % count === 0){
			var gcd = count; 
		}
	count++;
	}
	// console.log(gcd)
	return gcd;
}
console.assert(theGCD(5,1) === 1);
console.assert(theGCD(15,3) === 3);
console.assert(theGCD(15,5) === 5);
console.assert(theGCD(50,20) === 10);

var LCM = function getLCM(lcma,lcmb){
	if (lcma === 0 || lcmb === 0){
  		 var lcmfinal = 0;
  		 return lcmfinal;
  	}
	else{
  		var lcmmultiply = lcma * lcmb;
   		var lcmfinal = lcmmultiply / theGCD(lcma,lcmb);
   		// console.log(lcmfinal)
   		return lcmfinal;
	}
}
console.assert(LCM(10,10) === 10);
console.assert(LCM(2,5) === 10);
console.assert(LCM(3,6) === 6);
console.assert(LCM(0,1) === 0);

//---PART 4
var fizzbuzz = function getfizzbuzz (N) {
	var fizzbuzzarray = []
	var count =  1;
	while (count <= N ){
		if (count % 3 != 0 && count % 5 != 0){
			fizzbuzzarray.push(".")
		}
		if (count % 3 === 0 && count % 5 !=0){
			fizzbuzzarray.push("fizz")
		}
		if (count % 3 != 0 && count % 5 === 0){
			fizzbuzzarray.push("buzz")
		}
		if (count % 3 === 0 && count % 5 === 0){
			fizzbuzzarray.push("fizzbuzz")
		}
		// console.log(fizzbuzzarray)
		count++	
	}
return fizzbuzzarray.join("")
}
// console.log(fizzbuzz(10))
console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")