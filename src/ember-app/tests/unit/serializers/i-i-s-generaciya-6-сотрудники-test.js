import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-generaciya-6-сотрудники', 'Unit | Serializer | i-i-s-generaciya-6-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-generaciya-6-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
