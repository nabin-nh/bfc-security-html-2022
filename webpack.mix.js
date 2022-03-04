const
    mix = require('laravel-mix'),
    path = require('path'),
    nodeDir = 'node_modules',
    buildDir = path.join(__dirname, 'assets/build/js')

//Options
mix.options({
    processCssUrls: false,
}).sourceMaps(false, 'source-map')

//SCSS
.sass('assets/scss/style.scss', path.join(__dirname, 'style.css'))

//JS
.js('assets/js/app.js', (buildDir + '/app.min.js'))

//After
.after(() => {

    //Replace fontello
    const replace = require('replace-in-file')
    replace.sync({
        files: 'style.css',
        from: /\.\.\/font\/fontello/g,
        to: 'assets/fontello/font/fontello'
    })
    
})