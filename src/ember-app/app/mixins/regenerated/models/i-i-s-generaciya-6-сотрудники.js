import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  список: DS.belongsTo('i-i-s-generaciya-6-список', { inverse: null, async: false })
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-generaciya-6-сотрудники.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  список: {
    descriptionKey: 'models.i-i-s-generaciya-6-сотрудники.validations.список.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-generaciya-6-сотрудники', {
    имя: attr('Имя', { index: 0 }),
    список: belongsTo('i-i-s-generaciya-6-список', 'Список', {

    }, { index: 1 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-generaciya-6-сотрудники', {
    имя: attr('Имя', { index: 0 })
  });
};
