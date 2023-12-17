import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  в1: DS.attr('string'),
  в2: DS.attr('string'),
  в3: DS.attr('string'),
  вопрос: DS.attr('string'),
  настройкаОпр: DS.belongsTo('i-i-s-generaciya-6-настройка-опр', { inverse: 'содержание', async: false })
});

export let ValidationRules = {
  в1: {
    descriptionKey: 'models.i-i-s-generaciya-6-содержание.validations.в1.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  в2: {
    descriptionKey: 'models.i-i-s-generaciya-6-содержание.validations.в2.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  в3: {
    descriptionKey: 'models.i-i-s-generaciya-6-содержание.validations.в3.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  вопрос: {
    descriptionKey: 'models.i-i-s-generaciya-6-содержание.validations.вопрос.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  настройкаОпр: {
    descriptionKey: 'models.i-i-s-generaciya-6-содержание.validations.настройкаОпр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('содержаниеE', 'i-i-s-generaciya-6-содержание', {
    вопрос: attr('Вопрос', { index: 0 }),
    в1: attr('В1', { index: 1 }),
    в2: attr('В2', { index: 2 }),
    в3: attr('В3', { index: 3 })
  });
};
