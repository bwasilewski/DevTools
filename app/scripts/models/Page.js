/*global Devtools, Backbone*/

Devtools.Models = Devtools.Models || {};

(function () {
    'use strict';

    Devtools.Models.Page = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
