import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  A,
  keys,
  getOwner
} = Ember;

export default Ember.Controller.extend({
  @computed('currentPath')
  menu() {
    return A([
      {
        name: 'Usage',
        route: 'usage',
        icon: '',
        isActive: false
      },
      {
        name: 'Configuration',
        route: 'configuration',
        icon: '',
        isActive: false
      },
      {
        name: 'Examples',
        route: 'examples',
        icon: '',
        isActive: false
      },
      {
        name: 'Theming',
        route: 'theming',
        icon: '',
        isActive: false
      },
      {
        name: 'Documentation',
        route: 'documentation',
        icon: '',
        isActive: false
      }
    ]);
  }
});
