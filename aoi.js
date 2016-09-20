var path = require('path');

module.exports = function(config, options) {
    /*
    config.module.postLoaders = config.module.postLoaders || [];
    config.module.postLoaders.push({
        include: path.resolve(__dirname, 'node_modules/pixi.js'),
        loader: 'ify'
    });
    */

    config.externals = {
        "pixi.js": "PIXI"
    }

    config.module.loaders.push({
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?name=[path][name].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    });

    return config;
}
