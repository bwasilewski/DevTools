/*global Devtools, Backbone, JST*/

Devtools.Views = Devtools.Views || {};

(function () {
    'use strict';

    Devtools.Views.Page = Backbone.View.extend({

        template: JST['app/scripts/templates/Page.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            var self = this;

            this.$el.html(this.template(this.model.toJSON()));

            // _.defer(function () {
                self.onRender();
            // });

            return this;
        },

        onRender: function () { },

        close: function () {
            this.remove();
            this.unbind();
            this.model.unbind('change');
        }

    });

})();
