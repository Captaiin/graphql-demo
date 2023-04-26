import { module, test } from 'qunit';
import { setupTest } from 'graphql-demo/tests/helpers';

module('Unit | Route | customer/edit', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:customer/edit');
    assert.ok(route);
  });
});
