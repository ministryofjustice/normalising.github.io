const chroma = require('chroma-js');
MOJDI = MOJDI || {};

// init
MOJDI.colour = {};

// lightness : values representing a percentage
// @use to increase the lightness of a base colour
MOJDI.colour.lightness = ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];

MOJDI.colour.defaults = {
    blue: '#220550',
    apple: '#DD333A',
    magenta: '#D1116C',
    jade: '#118576',
    teal: '#1483A4',
    cobalt: '#126DCE',
    grey: '#dedede'
};

// Highcharts colours
MOJDI.colour.ChartColours = function (HC, colours, reverse) {
    let reversed = (reverse) || colours;
    HC.setOptions({
        colors: colours.reverse()
    });
};

// Get a default colour
MOJDI.colour.Get = function (name) {
    return MOJDI.colour.defaults[name] || null;
};

MOJDI.colour.Shade = (name, lightness) => {
    let colour = MOJDI.colour.defaults[name] || null;

    if (!colour) {
        colour = name;
    }

    if (colour && typeof lightness !== 'undefined') {
        let scale = chroma.scale(['white', colour]).colors(MOJDI.colour.lightness.length);
        let index = MOJDI.colour.lightness.findIndex((value) => value === lightness);
        return scale[index];
    }

    return colour;
};

module.exports = MOJDI.colour;
