var Encore = require('@symfony/webpack-encore');

Encore
// the project directory where all compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .createSharedEntry('layout', './assets/js/layout.js')
    .addEntry('rep_log', './assets/js/rep_log.js')
    .addEntry('login', './assets/js/login.js')
    .enableBuildNotifications()
    .autoProvidejQuery()
    .copyFiles({
        from: './assets/static',
        to: 'static/[path][name].[ext]'
    })
    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
;
// export the final configuration
module.exports = Encore.getWebpackConfig();