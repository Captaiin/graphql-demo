import { module, test } from 'qunit';
import { setupTest } from 'graphql-demo/tests/helpers';

module('Unit | Controller | customer', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:customer');
    assert.ok(controller);
  });
});
