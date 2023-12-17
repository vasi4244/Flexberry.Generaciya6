import {
  defineNamespace,
  defineProjections,
  Model as ОпросMixin
} from '../mixins/regenerated/models/i-i-s-generaciya-6-опрос';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОпросMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
