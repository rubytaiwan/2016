var path = require('path');
var fs = require('fs');
var yaml = require('js-yaml');

function loadData() {
    var RULES = /\.(yml|yaml)$/;
    var buffer = "";

    fs.readdirSync(path.resolve(__dirname, "data")).map(function(filename) {
        if(RULES.test(filename)) {
            buffer += fs.readFileSync(path.resolve(__dirname, "data", filename))
        }
    })

    return yaml.safeLoad(buffer);
}

module.exports = function(config, options) {

    config.module.postLoaders = config.module.postLoaders || [];
    config.module.postLoaders.push({
        include: path.resolve(__dirname, 'node_modules/pixi.js'),
        loader: 'ify'
    });

    config.module.loaders.push({
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?name=[path][name].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    });

    config.slmLoader = {
        data: loadData()
    }

    return config;
}
