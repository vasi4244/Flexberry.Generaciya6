import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  опрос: DS.belongsTo('i-i-s-generaciya-6-опрос', { inverse: null, async: false }),
  список: DS.belongsTo('i-i-s-generaciya-6-список', { inverse: 'анкетирование', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-generaciya-6-анкетирование.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  опрос: {
    descriptionKey: 'models.i-i-s-generaciya-6-анкетирование.validations.опрос.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  список: {
    descriptionKey: 'models.i-i-s-generaciya-6-анкетирование.validations.список.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АнкетированиеE', 'i-i-s-generaciya-6-анкетирование', {
    дата: attr('Дата', { index: 0 }),
    опрос: belongsTo('i-i-s-generaciya-6-опрос', 'Опрос', {
      название: attr('Название', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'название' })
  });
};
