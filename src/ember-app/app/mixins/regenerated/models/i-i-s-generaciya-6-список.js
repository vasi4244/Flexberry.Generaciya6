import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  анкетирование: DS.hasMany('i-i-s-generaciya-6-анкетирование', { inverse: 'список', async: false })
});

export let ValidationRules = {
  анкетирование: {
    descriptionKey: 'models.i-i-s-generaciya-6-список.validations.анкетирование.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СписокE', 'i-i-s-generaciya-6-список', {
    анкетирование: hasMany('i-i-s-generaciya-6-анкетирование', 'Анкетирование', {
      дата: attr('Дата', { index: 0 }),
      опрос: belongsTo('i-i-s-generaciya-6-опрос', 'Опрос', {
        название: attr('Название', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('СписокL', 'i-i-s-generaciya-6-список', {
    
  });
};
