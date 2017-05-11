// enter selection is - "data with no elements" - creates nodes to tie to the data
// exit selection is - "elements with no data" - more elements than data to join to
// groups/update -- are the intersection of the two (data joined to elements)

// selectAll tag doesn't HAVE to match the append tag - but usually isn't

// try with an arrow function
// .text(d => d.quote)

// d3.select("body")
//   .selectAll("p") // looks for p - we don't have any though
//   .data(movies) // expects an array of data
//   .enter() // enter nodes that d3 created to make movies same amt of "selectAll" nodes
//   .append("p")
//     .text(function(d) {
//       return d.quote;
//     });

///////// VERSION 1 //////////

// var colors = {
//     "G" : "green",
//     "PG" : "yellow",
//     "PG-13" : "orange",
//     "R" : "red"
// }

// d3.select("body")
//   .selectAll("p") // looks for p - we don't have any though
//   .data(movies) // expects an array of data
//   .enter() // enter nodes that d3 created to make movies same amt of "selectAll" nodes
//   .append("p")
//     .text(function(d) {
//       return `"${d.quote}" - ${d.title} (${d.year})`;
//     })
//     .style('font-size', d => d.quote.length < 40 ? "2em" : "1em")
//     .style('background-color', d => colors[d.rating])
//     .style('padding', '20px')

///////// VERSION 2 //////////

// var colors = {
//   "G": "green",
//   "PG": "yellow",
//   "PG-13": "orange",
//   "R": "red"
// }

// d3.select("body")
//   .selectAll("p")
//   .data(movies)
//     .text(d => `"${d.quote}" - ${d.title} (${d.year})`)
//     .style('font-size', d => d.quote.length < 40 ? '2em' : '1em')
//     .style('background-color', d => colors[d.rating])
//     .style('padding', '20px')
//     .style('border-radius', '8px')
//   .enter()
//   .append("p")
//     .text(d => `"${d.quote}" - ${d.title} (${d.year})`)
//     .style('font-size', d => d.quote.length < 40 ? '2em' : '1em')
//     .style('background-color', d => colors[d.rating])
//     .style('padding', '20px')
//     .style('border-radius', '8px');


///////// VERSION 3 //////////


var colors = {
  "G": "green",
  "PG": "yellow",
  "PG-13": "orange",
  "R": "red"
}

var pTags = d3.select("body")
              .selectAll("p")
              .data(movies);

pTags
  .enter()
  .append("p")
    .style('border', '5px solid blue')
  .merge(pTags)
    .text(d => `"${d.quote}" - ${d.title} (${d.year})`)
    .style('font-size', d => d.quote.length < 40 ? '2em' : '1em')
    .style('background-color', d => colors[d.rating])
    .style('padding', '20px')
    .style('border-radius', '8px');










    