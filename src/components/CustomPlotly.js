// in custom-plotly.js
var Plotly = require('plotly.js/lib/core');

// Load in the trace types for pie, and choropleth
Plotly.register([
    require('plotly.js/lib/pie'),
    require('plotly.js/lib/scatter'),
    require('plotly.js/lib/bar')
]);

module.exports = Plotly;
