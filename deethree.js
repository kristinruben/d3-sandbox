var w = 900;
var h = 300;
var barPadding = 1;

var dataset = [ 5, 10, 13, 46, 19, 21, 25, 22, 18, 15, 13,
        11, 12, 15, 20, 18, 6, 4, 17, 16, 18, 23, 25 ];

var svg = d3.select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
      return i * (w / dataset.length);
   })
   .attr("y", function(d) {
      return h - (d * 4);
   })
   .attr("width", w / dataset.length - barPadding)
   .attr("height", function(d) {
      return d * 4;
   })
   .attr("fill", function(d) {
    return "rgb(220, 0, " + (d * 11) + ")";
   });

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function(d) {
        return d;
   })
   .attr("x", function(d, i) {
     return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
   })
   .attr("y", function(d) {
     return h - (d * 4) + 15;
   })
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "white")
   .attr("text-anchor", "middle")


var yAxis = d3.svg.axis()
                 .scale(yScale)
                 .orient("left")
                 .ticks(5);
svg.append("g")
   .attr("class", "axis")
   .attr("transform", "translate(" + barPadding + ",0)")
   .call(yAxis);
