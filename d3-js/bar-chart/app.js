var width = 600;
var height = 600;

var barPadding = 20;
var barWidth = width / movieData.length - barPadding;
var yMax = d3.max(movieData.map(d => d3.max(d.annualGrosses)));

// flipping means that 0 is mapped to the bottom & height is mapped to the top!!
var yScale = d3.scaleLinear().domain([0, yMax]).range([height, 0])

var colors = {
  "G": "#27AE60",
  "PG": "#FFC300",
  "PG-13": "#E67E22",
  "R": "#C0392B"
}

d3.select('svg')
    .attr('width', width)
    .attr('height', height)
  .selectAll('rect')
  .data(movieData)
  .enter()
  .append('rect')
    .attr('x', (d, i) => ((barWidth + barPadding) * i))
    .attr('y', d => yScale(d.annualGrosses[0]))
    .attr('width', barWidth)
    .attr('height', d => height - yScale(d.annualGrosses[0]))
    .attr('fill', d => colors[d.rating])

d3.select('svg')
    .append('g')
    .call(d3.axisRight(yScale))


d3.select('input')
    .on('input', function() {
        var idx = d3.event.target.value - d3.event.target.min

        d3.selectAll("rect")
            .attr('y', d => yScale(d.annualGrosses[idx]))
            .attr('height', d => height - yScale(d.annualGrosses[idx]))

    })








