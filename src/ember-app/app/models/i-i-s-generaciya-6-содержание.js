import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as содержаниеMixin
} from '../mixins/regenerated/models/i-i-s-generaciya-6-содержание';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(содержаниеMixin, Validations, {
});

defineProjections(Model);

export default Model;
