'use strict';

const $ = require('jquery');
global.$ = $;
require('bootstrap');

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
