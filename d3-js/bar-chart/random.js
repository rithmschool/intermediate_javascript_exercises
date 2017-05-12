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

// tooltips - to make sure there's no flicker
// style.css

// give stuff a class of "tooltip"

// .tooltip {
//     pointer-events: none
// }

/////////////////////////////////////////////////////////////////////
/////////////////////////// SCATTERPLOT /////////////////////////////
/////////////////////////////////////////////////////////////////////

var width = 500;
var height = 500;
var svg = d3.select("svg")
            .attr("width", width)
            .attr("height", height);

var padding = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 30
};

var tooltip = d3.select("body")
                .append("div")
                .classed("tooltip", true)
                .style("opacity", 0);

var xScale = d3.scaleLinear()
               .domain(d3.extent(movies, d => d.daysOpen))
               .range([padding.left,width - padding.right]);

var yScale = d3.scaleLinear()
               .domain(d3.extent(movies, d => d.total))
               .range([height - padding.top, padding.bottom]);

var colorScale = d3.scaleLinear()
                   .domain([0,1])
                   .range(['red', 'green']);

// add circles
svg.selectAll("circle")
  .data(movies)
  .enter()
  .append('circle')
  .attr('cx', d => xScale(d.daysOpen))
  .attr('cy', d => yScale(d.total))
  .attr('r', d => 5 * d.total / d.openingTotal)
  .attr('fill', d => colorScale(d.freshness))
  .attr('stroke', 'black')
  .on("mouseenter", function(d) {
    tooltip.text(d.title)
           .style("opacity", 1)
           .style("left", d3.event.pageX + "px")
           .style("top", d3.event.pageY + "px")
           .style("border", "4px solid blue")
           .style("border-radius", "4px")
           .style("padding", "10px")
           .style("background-color", "lightblue");
  })
  .on("mouseout", () => tooltip.style("opacity", 0));

svg.selectAll("text")
  .data(movies)
  .enter()
  .append("text")
    .text(d => d.title)
    .attr("x", d => xScale(d.daysOpen))
    .attr("y", d => yScale(d.total))

svg.append('g')
   .attr("class","x-axis")
   .attr("transform", "translate(0," + (height - padding.top) + ")")
   .call(d3.axisBottom(xScale));

svg.append('g')
   .attr("transform", "translate(" + padding.left + ",0)")
   .call(d3.axisLeft(yScale));

d3.select("select").on("change", function() {
  var scaleType;
  newVal = d3.select("select").property("value"); 

  if (newVal === "release") {
    scaleType = d3.scaleTime;
  } else {
    scaleType = d3.scaleLinear;
  }

  xScale = scaleType()
            .domain(d3.extent(movies, d => d[newVal]))
            .range([padding.left,width - padding.right]);
 
  var tCircle = d3.transition()
                  .duration(10000)
                  .ease(d3.easeBounceOut);

  var tAxis = d3.transition()
                .duration(5000)

  d3.selectAll('circle')
    .transition(tCircle)
      .attr('cx', d => xScale(d[newVal]));
  
  d3.selectAll('.x-axis')
    .transition(tAxis)
    .call(d3.axisBottom(xScale));

});


