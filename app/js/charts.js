const Highcharts = require('highcharts');
require('highcharts/modules/accessibility')(Highcharts);
require('highcharts/modules/data')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/item-series')(Highcharts);

/**
 * functional imports
 */
import { Options } from './charts-init';
import { ChartColours, Shade, Get } from './colours';
// charts
import gender from './charts/gender';
import genderPayGap from './charts/gender-pay-gap';
import ethnicity from './charts/ethnicity';
import sexualOrientation from './charts/sexual-orientation';
import disability from './charts/disability';
import faith from './charts/faith';
import age from './charts/age';


ChartColours(Highcharts, [
    Get('jade'),
    Get('blue'),
    Get('grey')
]);
Highcharts.chart(Options(gender));


// generate a new set of colours for the chart
ChartColours(Highcharts, [
    Get('jade'),
    Shade('jade', '50'),
    Get('grey')
]);
Highcharts.chart(Options(genderPayGap));

ChartColours(Highcharts, [
    Get('magenta'),
    Get('blue'),
    Get('grey')
]);
Highcharts.chart(Options(ethnicity));

ChartColours(Highcharts, [
    Get('apple'),
    Get('blue'),
    Get('grey')
]);
Highcharts.chart(Options(sexualOrientation));

ChartColours(Highcharts, [
    Get('cobalt'),
    Get('blue'),
    Get('grey')
]);
Highcharts.chart(Options(disability));

ChartColours(Highcharts, [
    Get('teal'),
    Get('blue'),
    Get('grey')
]);
Highcharts.chart(Options(faith));

ChartColours(Highcharts, [
    Get('jade'),
    Get('cobalt'),
    Get('apple'),
    Get('teal'),
    Get('magenta'),
    Get('blue')
]);
Highcharts.chart(Options(age));
