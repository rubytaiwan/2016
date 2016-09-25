var path = require('path');
var fs = require('fs');
var yaml = require('js-yaml');

function loadData() {
    var RULES = /\.(yml|yaml)$/;
    var buffer = "";

    fs.readdirSync(path.resolve(__dirname, "data")).map(function(filename) {
        if(RULES.test(filename)) {
            buffer += "\n" + fs.readFileSync(path.resolve(__dirname, "data", filename))
        }
    })

    return yaml.safeLoad(buffer);
}

module.exports = function(config, options) {
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

    config.module.loaders.push({
      test: /\.yaml$/,
      include: path.resolve('data'),
      loader: 'yaml',
    })

    config.slmLoader = {
        data: loadData()
    }

    return config;
}
