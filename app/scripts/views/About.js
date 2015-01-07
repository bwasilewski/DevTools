/*global Devtools, Backbone, JST*/

Devtools.Views = Devtools.Views || {};

(function () {
    'use strict';

    Devtools.Views.About = Devtools.Views.Page.extend({

        template: JST['app/scripts/templates/About.ejs'],

        // tagName: 'div',

        // id: '',

        // className: '',

        // events: {},

        // initialize: function () {
        //     this.listenTo(this.model, 'change', this.render);
        // },

        // render: function () {
        //     this.$el.html(this.template(this.model.toJSON()));
        // }

    });

})();
