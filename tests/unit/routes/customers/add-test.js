import { module, test } from 'qunit';
import { setupTest } from 'graphql-demo/tests/helpers';

module('Unit | Route | customers/add', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:customers/add');
    assert.ok(route);
  });
});
