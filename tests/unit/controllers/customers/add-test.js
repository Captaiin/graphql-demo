import { module, test } from 'qunit';
import { setupTest } from 'graphql-demo/tests/helpers';

module('Unit | Controller | customers/add', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:customers/add');
    assert.ok(controller);
  });
});
