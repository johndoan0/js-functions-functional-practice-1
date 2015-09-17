
function sum(){
    var inputarray = Array.prototype.slice.call(arguments)
    var result = 0
    inputarray.forEach(
        function(b){
        result += b
        }
    )
    return result
    // return inputarray
}
// console.log(sum(1,2,3,4,5,6))
// tests
// ---
console.assert(sum(1, 2, 3) === 6)
console.assert(sum(1, 2, 3, 4) === 10)
console.assert(sum(1, 2, 3, 4, 5) === 15)

// ----------------------------
// using Array.sort(), sort the following array
// of people by name
// ----------------------------

var people = [
    {name:"Matt", alma_mater:"Univ of Texas - Austin"},
    {name:"Brian", alma_mater:"Texas A&M"},
    {name:"Jesse", alma_mater:"Univ of Texas - Austin"},
    {name:"Justin", alma_mater:"Univ of Florida"}
]

people.sort(function(a, b){
    if(a.name > b.name){
        return 1
    }
    if(a.name < b.name){
        return -1
    }
    return 0
})
// console.log(people.sort())
// tests
// ---
console.assert(people[0].name === "Brian")
console.assert(people[1].name === "Jesse")
console.assert(people[2].name === "Justin")

// ----------------------------
// Using Array.map(), Array.filter(), and Array.sort() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then sort the items alphabetically by fullname
// ----------------------------

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]

var results = customers
    .filter(function(){
        var results = []
        // var fName = customers.first
        for(var i = 0; i < customers.length; i++){
            if (customers[i].first.charAt(0) === 'J'){
                results.push(customers[i])
            }
        }    
        return results
    })
// console.log(results)

    .map(function(){
        var fullname = []
        for (var i = 0; i < customers.length; i++){
            fullname.push(customers[i].first + " " + customers[i].last)
        }
        return fullname
    })

// console.log(results)

    .sort(function(a,b){
        if (a.customers > b.customers){
            return 1
        }
        if (a.customers < b.customers){
            return -1
        }
        return 0
    })
       
console.log(results)
// tests
// ---
// console.assert(results[0].fullname === "Jack White")
// console.assert(results[2].fullname === "John Smith")