var w = 1100;
var h = 500;
var margin = {top: 20, right: 20, bottom: 30, left: 50};
var barPadding = 1;

var dataset = [ 5, 10, 13, 46, 19, 21, 25, 22, 18, 15, 13,
        11, 12, 15, 20, 18, 6, 4, 17, 16, 18, 23, 25 ];

var xRange = d3.scaleLinear().range([w, 50]);
var yRange = d3.scaleLinear().range([h - 50, 30]);

var xAxis = d3.axisBottom(xRange);
var yAxis = d3.axisLeft(yRange);

var svg = d3.select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
      return (i * (w / dataset.length)) + margin.left;
   })
   .attr("y", function(d) {
      return h - (d * 6) - margin.bottom - margin.top;
   })
   .attr("width", (w / dataset.length - barPadding))
   .attr("height", function(d) {
      return d * 6;
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
     return (i * (w / dataset.length) + (w / dataset.length - barPadding) / 2) + margin.left;
   })
   .attr("y", function(d) {
     return h - (d * 6) + 18 - margin.bottom - margin.top;
   })
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "white")
   .attr("text-anchor", "middle");

svg.append("g")
   .attr("class", "axis")
   .attr("transform", "translate(0," + 450 + ")")
   .call(xAxis)

svg.append("g")
   .attr("class", "axis")
   .attr("transform", "translate(" + barPadding * 50 + ",0)")
   .call(yAxis.ticks(5).tickFormat(function(d) { return d; }))
   .append("text");
