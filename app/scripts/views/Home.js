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

        handleAlertClick: function (ev) {
            var alertWrapper = $('#alertWrapper');

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

        },

        handleTooltipClick: function (ev) {
            // body...
        }
    });

})();
