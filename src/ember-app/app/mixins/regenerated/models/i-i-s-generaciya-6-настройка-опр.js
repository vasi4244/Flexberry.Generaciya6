import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  опрос: DS.belongsTo('i-i-s-generaciya-6-опрос', { inverse: null, async: false }),
  содержание: DS.hasMany('i-i-s-generaciya-6-содержание', { inverse: 'настройкаОпр', async: false })
});

export let ValidationRules = {
  опрос: {
    descriptionKey: 'models.i-i-s-generaciya-6-настройка-опр.validations.опрос.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  содержание: {
    descriptionKey: 'models.i-i-s-generaciya-6-настройка-опр.validations.содержание.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НастройкаОпрE', 'i-i-s-generaciya-6-настройка-опр', {
    опрос: belongsTo('i-i-s-generaciya-6-опрос', 'Опрос', {
      название: attr('Название', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'название' }),
    содержание: hasMany('i-i-s-generaciya-6-содержание', 'Содержание', {
      вопрос: attr('Вопрос', { index: 0 }),
      в1: attr('В1', { index: 1 }),
      в2: attr('В2', { index: 2 }),
      в3: attr('В3', { index: 3 })
    })
  });

  modelClass.defineProjection('НастройкаОпрL', 'i-i-s-generaciya-6-настройка-опр', {
    опрос: belongsTo('i-i-s-generaciya-6-опрос', 'Название', {
      название: attr('Название', { index: 0 })
    }, { index: -1, hidden: true })
  });
};
