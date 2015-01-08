/*global Devtools, Backbone, JST*/

Devtools.Views = Devtools.Views || {};

(function () {
    'use strict';

    Devtools.Views.Home = Devtools.Views.Page.extend({

        template: JST['app/scripts/templates/Home.ejs'],

        events: {
            'click .btn-alert': 'handleAlertClick',
            'click .btn-modal': 'handleModalClick',
            'click .btn-tooltip': 'handleTooltipClick'
        },

        onRender: function () {
            // initialize tooltips
            $('[data-toggle="tooltip"]').tooltip();
        },

        handleAlertClick: function (ev) {
            var alertWrapper = this.$('#alertWrapper');

            var alert = new Devtools.Views.Alert({
                model: new Backbone.Model({
                    title: 'Hooray!',
                    message: 'You\'ve successfully created a new alert box!'
                })
            });

            alertWrapper.append(alert.render().el);
        },

        handleModalClick: function (ev) {

            $('#modal').modal();
        },

        handleTooltipClick: function (ev) {
            // body...
        }
    });

})();
