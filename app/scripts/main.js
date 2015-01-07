/*global Devtools, $*/


window.Devtools = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');

        var router = new this.Routers.Router();

        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    Devtools.init();
});
