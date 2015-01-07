/*global Devtools, Backbone, JST*/

Devtools.Views = Devtools.Views || {};

(function () {
    'use strict';

    Devtools.Views.Modal = Backbone.View.extend({

        template: JST['app/scripts/templates/Modal.ejs'],

        events: {
            'click .close': 'handleClose'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },

        handleClose: function () {
            this.close();
        },

        close: function () {
            this.remove();
            this.unbind();
            this.model.unbind('change');
        }

    });

})();
