d3.csv('./top_books.csv', function(d) {

    var height = 600;
    var width = 600;

    var svg = d3.select("svg")
                .attr("width", width)
                .attr("height", height);

    // d.Title
    // d.Cover
    // d.Author
    // d.Times_Shelved
    // d.Average_Rating
    // d.Number_of_Ratings
    // d.Year_Published

    var padding = 80;

    // establish ranges for axes; longevity ranking / what's made a splash quickly
    var minX = d3.min(d, d => d.Year_Published); // 
    var maxX = d3.max(d, d => d.Year_Published); // 
    
    var minY = d3.min(d, d => d.Average_Rating); // 
    var maxY = d3.max(d, d => d.Average_Rating); // 

    var minShelved = d3.min(d, d => d.Times_Shelved); // 
    var maxShelved = d3.max(d, d => d.Times_Shelved); // 

    var minRatings = d3.min(d, d => d.Number_of_Ratings); // 
    var maxRatings = d3.max(d, d => d.Number_of_Ratings); // 

    // year published
    var xScale = d3.scaleLinear()
                   .domain([minX, maxX])
                   .range([padding, width - padding]);

    // average overall rating
    var yScale = d3.scaleLinear()
                   .domain([minY, maxY])
                   .range([height - padding, padding]);

    // "desirability ranking"; how much people shelved these and want to read them
    var colorScale = d3.scaleLinear()
                   .domain([minShelved, maxShelved])
                   .range(["#1A5276","#A93226"]);

    // "impact ranking"; how many people have rated it
    var sizeScale = d3.scaleLinear()
                      .domain([minRatings, maxRatings])
                      .range([10, 50]);

    // gridlines in x axis function
    function make_x_gridlines() {   
        return d3.axisBottom(xScale)
            .ticks(20)
    }

    // gridlines in y axis function
    function make_y_gridlines() {   
        return d3.axisLeft(yScale)
            .ticks(24)
    }

    // add the X gridlines
    svg.append("g")     
        .attr("class", "grid")
        .attr("transform", "translate(0," + (height - padding) + ")")
        .call(make_x_gridlines()
            .tickSize(-440)
            .tickFormat("")
        )

    // add the Y gridlines
    svg.append("g")     
        .attr("class", "grid")
        .attr("transform", "translate(" + padding + ",0)")
        .call(make_y_gridlines()
            .tickSize(-440)
            .tickFormat("")
        )

    // y axis
    svg.append('g')
      .attr("transform", "translate(" + padding + ",0)")
      .call(d3.axisLeft(yScale));

    // text label for the y axis
      svg.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 0)
          .attr("x", 0 - (height / 2))
          .attr("dy", "1em")
          .style("text-anchor", "middle")
          .text("Average Rating");

    // x axis
    svg.append('g')
       .attr("transform", "translate(0," + (height - padding) + ")")
       // .tickFormat(d3.format("d"))
       .call(d3.axisBottom(xScale)
          .tickFormat(d3.format("d")));

    // text label for the x axis
      svg.append("text")             
          .attr("transform",
                "translate(" + (width / 2) + " ," + 
                               (height) + ")")
          .style("text-anchor", "middle")
          .text("Year Published");

    var tooltip = d3.select("body")
        .append("div")
        .classed("tooltip", true)
        .style("opacity", 0)
        .style("font-size", "12px");

    var circle = d3.select('svg').selectAll("circle").data(d);

    circle.exit().remove();

    circle.enter().append("circle")
      .merge(circle)
        .attr("r", d => sizeScale(d.Number_of_Ratings))
        .attr("cx", d => xScale(d.Year_Published))
        .attr("cy", d => yScale(d.Average_Rating))
        .attr("stroke", "black")
        .attr("stroke-width", "1px")
        .attr("fill", d => colorScale(d.Times_Shelved))
        .attr("opacity", .7)
        .on("mouseenter", function(d) {
        tooltip.text(d.Title + ", " + d.Author)
               .style("opacity", .8)
               .style("left", d3.event.pageX + "px")
               .style("top", (d3.event.pageY + 10) + "px")
               .style("padding", "3px")
               .style("color", "#fff")
               .style("background-color", "#17202A");
        })
        .on("mouseout", () => tooltip.style("opacity", 0));

});






