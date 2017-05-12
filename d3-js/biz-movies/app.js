d3.csv('./biz_movies.csv', function(d) {

    var height = 600;
    var width = 600;

    var svg = d3.select("svg")
                .attr("width", width)
                .attr("height", height);

    for (var i = 0; i < d.length; i++) {
        // d.Title & d.Director 
        d[i].Mins = +d[i].Mins;
        d[i].Rating = +d[i].Rating;
        d[i].Year = +d[i].Year;
    }

    var padding = 50;

    var min_rating = d3.min(d, d => d.Rating); // 5.9
    var max_rating = d3.max(d, d => d.Rating); // 9.2
    
    var min_mins = d3.min(d, d => d.Mins); // 85
    var max_mins = d3.max(d, d => d.Mins); // 202

    var minScale = d3.scaleLinear()
               .domain([min_mins,max_mins])
               .range([padding, width - padding]);

    var ratingScale = d3.scaleLinear()
                   .domain([min_rating,max_rating])
                   .range([height - padding, padding]);

    var colorScale = d3.scaleLinear()
                   .domain([min_rating,max_rating])
                   .range(["#1A5276","#27AE60"]);

    var tooltip = d3.select("body")
        .append("div")
        .classed("tooltip", true)
        .style("opacity", 0);

    var circle = d3.select('svg').selectAll("circle").data(d);

    circle.exit().remove();

    circle.enter().append("circle")
        .attr("r", 8)
      .merge(circle)
        .attr("cx", d => minScale(d.Mins))
        .attr("cy", d => ratingScale(d.Rating))
        .attr("stroke", "black")
        .attr("stroke-width", "1px")
        .attr("fill", d => colorScale(d.Rating))
        .on("mouseenter", function(d) {
        tooltip.text(d.Title + ", " + d.Year)
               .style("opacity", .8)
               .style("left", d3.event.pageX + "px")
               .style("top", (d3.event.pageY + 10) + "px")
               .style("border", "1px solid black")
               .style("border-radius", "4px")
               .style("padding", "3px")
               .style("background-color", "#DAF7A6");
        })
        .on("mouseout", () => tooltip.style("opacity", 0));

    // y axis
    svg.append('g')
      .attr("transform", "translate(" + padding + ",0)")
      .call(d3.axisLeft(ratingScale));

    // text label for the y axis
      svg.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 0)
          .attr("x", 0 - (height / 2))
          .attr("dy", "1em")
          .style("text-anchor", "middle")
          .text("Rating");

    // x axis
    svg.append('g')
       .attr("transform", "translate(0," + (height - padding) + ")")
       .call(d3.axisBottom(minScale));

    // text label for the x axis
      svg.append("text")             
          .attr("transform",
                "translate(" + (width / 2) + " ," + 
                               (height) + ")")
          .style("text-anchor", "middle")
          .text("Minutes");

});









