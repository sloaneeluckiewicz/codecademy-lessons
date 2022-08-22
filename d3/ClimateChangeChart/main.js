let climate_daly_data = [
    {region: "Low-and-middle-income countries of the African Region", deaths: 57},
    {region: "Low-and-middle-income countries of the Americas", deaths: 2},
    {region: "Low-and-middle-income countries of the Eastern Mediterranean Region", deaths: 20},
    {region: "Low-and-middle-income countries of the European Region", deaths: 0.67},
    {region: "Low-and-middle-income countries of the South-East Asia Region", deaths: 58},
    {region: "Low-and-middle-income countries of the Western Pacific Region", deaths: 4},
    {region: "High income countries", deaths: 0.23}
];


let toggleClass = (i,toggle) => {
    _i = i+1;
    d3.select("#viz div:nth-child("+ _i +")").classed("highlightBar",toggle);
    d3.select("#legend li:nth-child("+ _i +")").classed("highlightText",toggle);
};

let divSelection = d3.select("#viz")
    .selectAll("div")

divSelection 
    .data(climate_daly_data)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("width", function(d) { return d.deaths * 8 + "px"})
    .on("mouseover", function(d,i) {
        toggleClass(i, true);
    })
    .on("mouseout", function(d,i){
        toggleClass(i, false);
    });

let listSelection = d3.select("#legend")
    .selectAll("li")

listSelection 
    .data(climate_daly_data)
    .enter()
    .append("li")
    .text(function(d){
        return `${d.region}: ${d.deaths} deaths`;
    })
    .on("mouseover", function(d,i) {
        toggleClass(i, true);
    })
    .on("mouseout", function(d,i){
        toggleClass(i, false);
    });





