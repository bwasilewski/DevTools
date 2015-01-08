/*global Devtools, Backbone*/

Devtools.Routers = Devtools.Routers || {};

(function () {
    'use strict';

    Devtools.Routers.Router = Backbone.Router.extend({
        routes: {
            '' : 'defaultRoute',
            'home'     : 'homeRoute',
            'about'    : 'aboutRoute',
        },

        defaultRoute: function (actions) {
            switch (actions) {
                case 'about':
                    this.aboutRoute();
                    break;
                case 'home':
                    this.homeRoute();
                    break;
                default:
                    this.homeRoute();
                    break;
            }
        },

        homeRoute: function () {
            var contentWrapper = $('#content');

            this.closeCurrentView();

            this.currentView = new Devtools.Views.Home({
                model: new Devtools.Models.Page({})
            });

            contentWrapper.html(this.currentView.render().el);
        },

        aboutRoute: function () {
            var contentWrapper = $('#content');

            this.closeCurrentView();

            this.currentView = new Devtools.Views.About({
                model: new Devtools.Models.Page({})
            });

            contentWrapper.html(this.currentView.render().el);
        },

        closeCurrentView: function () {
            if ( this.currentView !== undefined ) {
                this.currentView.close();
            }
        }
    });

})();
