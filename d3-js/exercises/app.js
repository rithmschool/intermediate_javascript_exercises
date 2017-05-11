// app.js
var svgWidth = 500;
var svgHeight = 500;
var barWidth = 90;
var barGap = 10;

d3.select("body")
  .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
  .selectAll('rect')
    .data([
      svgHeight * Math.random(), 
      svgHeight * Math.random(), 
      svgHeight * Math.random(), 
      svgHeight * Math.random(), 
      svgHeight * Math.random()
    ])
    .enter()
  .append('rect')
    .attr('width', barWidth)
    .attr('height', function(d) { return d; })
    .attr('y', function(d) { return svgHeight - d; })
    .attr('x', function(d, i) { return (barWidth + barGap) * i; })
    .attr('fill', 'blue');