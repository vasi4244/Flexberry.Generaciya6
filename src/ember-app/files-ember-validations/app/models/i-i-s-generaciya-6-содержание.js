import {
  defineNamespace,
  defineProjections,
  Model as содержаниеMixin
} from '../mixins/regenerated/models/i-i-s-generaciya-6-содержание';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(содержаниеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
