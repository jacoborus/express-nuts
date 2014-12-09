'use strict';

var path = require('path');

module.exports = function (app, nuts) {
    // normalize views path
    app.set( 'views', path.resolve( app.get( 'views' )));

    var len = app.get('views').length+1;

    nuts.addFolder('./templates', function (err) {
        if (err) { throw err;}

        nuts.addTree('./views', function (err) {
            if (err) { throw err;}

            app.engine('html', function (filePath, options, callback) { // define the template engine
                var keyname = filePath.slice( len, filePath.length ),
                    rendered = nuts.render( keyname, options );
                return callback( null, rendered );
            });
            app.set('view engine', 'html'); // register the template engine
        });
    });
};
