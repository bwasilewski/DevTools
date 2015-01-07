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
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },

        close: function () {
            this.remove();
            this.unbind();
            this.model.unbind('change');
        }

    });

})();
