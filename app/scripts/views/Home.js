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

        initialize: function () {

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

            console.log('Alert!');
        },

        handleModalClick: function (ev) {
            var modalWrapper = this.$('#modalWrapper');

            var modal = new Devtools.Views.Modal({
                model: new Backbone.Model({
                    title: 'Cool Modal',
                    message: 'You\'ve successfully created a new modal!'
                })
            });

            modalWrapper.html(modal.render().el);
        },

        handleTooltipClick: function (ev) {
            // body...
        }
    });

})();
