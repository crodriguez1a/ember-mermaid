import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('usage', { path: '/' });
  this.route('examples');
  this.route('theming');
  this.route('documentation');
  this.route('configuration');
});

export default Router;
