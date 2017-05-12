// var todos = [
//   "Create 1000 data visualizations with d3",
//   "Eat dinner",
//   "Sleep",
//   "Hang out with friends"
// ];

// d3.select("ul")
//   .selectAll("li")
//     .data(todos)
//     .enter()
//   .append("li")
//     .text(function(d,i) {
//       return "Todo #" + (i + 1) + ": " + d;
//     }); 

// d3.selectAll('li').on('click', function(d) {

//   // find the current todo's index in the array and remove it
//   var idx = todos.indexOf(d);
//   todos.splice(idx,1)
  
//   // update the DOM
//   d3.selectAll('li')
//     .data(todos)
//       .text(function(d,i) {
//         return "Todo #" + (i + 1) + ": " + d;
//       })
//     .exit()
//     .remove();

// });




// scatter plot kind of thing!!!

var circle = d3.select('svg').selectAll("circle")
  .data([{
    x: 50,
    y: 100
  }, {
    x: 150,
    y: 200
  }, {
    x: 250,
    y: 300
  }, {
    x: 350,
    y: 400
  }]);

circle.exit().remove();

circle.enter().append("circle")
    .attr("r", 2.5)
  .merge(circle)
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });
