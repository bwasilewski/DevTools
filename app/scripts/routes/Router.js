/*global Devtools, Backbone*/

Devtools.Routers = Devtools.Routers || {};

(function () {
    'use strict';

    Devtools.Routers.Router = Backbone.Router.extend({
        routes: {
            '' : 'defaultRoute',
            'home'     : 'homeRoute',
            'about'    : 'aboutRoute',
            'contact'  : 'contactRoute'
        },

        defaultRoute: function (actions) {
            // console.log('Actions: ', actions);

            this.homeRoute();
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

        contactRoute: function () {
            var contentWrapper = $('#content');

            this.closeCurrentView();

            this.currentView = new Devtools.Views.Contact({
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
