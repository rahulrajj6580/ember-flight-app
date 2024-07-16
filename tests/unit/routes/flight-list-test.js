import { module, test } from 'qunit';
import { setupTest } from 'flight-app/tests/helpers';

module('Unit | Route | flight-list', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:flight-list');
    assert.ok(route);
  });
});
