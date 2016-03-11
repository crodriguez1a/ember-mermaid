import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mermaid-chart', 'Integration | Component | mermaid chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mermaid-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mermaid-chart}}
      sequenceDiagram
        Alice->John: Hello John, how are you?
        John-->Alice: Great!
    {{/mermaid-chart}}
  `);

  assert.equal(this.$().text().trim(), 'AliceJohnHello John, how are you?Great!AliceJohn', 'Graph data was passed');
});

test('it needs tests', function(assert) {
  assert.ok(false, 'Write some tests man.');
});
