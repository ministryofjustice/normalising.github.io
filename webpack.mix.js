const _mix = require('laravel-mix');

let publicPath = './dist/';

if (!_mix.inProduction()) {
    publicPath += 'technology-diversity-statistics/';
}

_mix.sass('app/sass/app.scss', publicPath + 'css/')
    .sass('app/sass/ie-8.scss', publicPath + 'css/')
    .js('node_modules/chroma-js/chroma-light.js', publicPath + 'js/')
    .js('node_modules/highcharts/highcharts.js', publicPath + 'js/')
    .js('node_modules/highcharts/modules/exporting.js', publicPath + 'js/')
    .js([
        'app/js/app.js',
        'app/js/colours.js',
        'app/js/charts.js',
        'app/js/charts-init.js'
    ], publicPath + 'js/')
    .copy('index.html', publicPath + 'index.html')
    .copy('README.ghp.md', publicPath + 'README.md')
    .copy('node_modules/govuk-frontend/govuk/assets', publicPath + 'assets/')
    .options({
        processCssUrls: false
    }).sourceMaps();
