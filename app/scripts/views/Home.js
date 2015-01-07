/*global Devtools, Backbone, JST*/

Devtools.Views = Devtools.Views || {};

(function () {
    'use strict';

    Devtools.Views.Home = Devtools.Views.Page.extend({

        template: JST['app/scripts/templates/Home.ejs'],

        events: {
            'click .btn-success': 'handleSuccessClick'
        },

        handleSuccessClick: function () {
            console.log('Success!');
        }

    });

})();
