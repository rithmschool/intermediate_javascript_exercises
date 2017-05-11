// d3.max returns maximum value in an array

var dogs = [{
    name: "A",
    age: 14
}, {
    name: "B",
    age: 3
}, {
    name: "C",
    age: 89
}]

// can also pass a callback function

d3.max(dogs, d => d.age)

// there's also a min

d3.min([5,2,6,1,3])3

// scale: takes in endpoints and maps them to one another

var scale = d3.scaleLinear().domain([1,100]).range([-4,2])

var scale = d3.scaleLinear().domain([1,100]).range(["red", "green"])

// csvs

d3.csv('./example.csv', function(foo) {
    console.log(foo);
});

