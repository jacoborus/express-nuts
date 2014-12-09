express-nuts
============

Nuts template engine adapter for Express.js.

This module will add templates from Express views folder with filename as template keyname, but templates from `./templates` folder will be added with its regular keynames


Installation
------------

```
npm install express-nuts --save
```


Usage
-----

```js
// get your dependencies
var express = require('express');
var app = express();
var nuts = require('nuts');
var expressNuts = require('express-nuts');

// specify the views directory
app.set('views', './views');

// (optional) specify the regular templates directory
app.set( 'templates folder', './myFolder' );

// set nuts as template engine
expressNuts( app, nuts );
```

<br><br>
---

© 2014 Jacobo Tabernero - [jacoborus](https://github.com/jacoborus)

Released under [MIT License](https://raw.github.com/jacoborus/express-nuts/master/LICENSE)
