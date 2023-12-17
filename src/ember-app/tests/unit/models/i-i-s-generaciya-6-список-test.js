import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-generaciya-6-список', 'Unit | Model | i-i-s-generaciya-6-список', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-generaciya-6-анкетирование',
    'model:i-i-s-generaciya-6-настройка-опр',
    'model:i-i-s-generaciya-6-опрос',
    'model:i-i-s-generaciya-6-содержание',
    'model:i-i-s-generaciya-6-сотрудники',
    'model:i-i-s-generaciya-6-список',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
