import {
  defineNamespace,
  defineProjections,
  Model as НастройкаОпрMixin
} from '../mixins/regenerated/models/i-i-s-generaciya-6-настройка-опр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НастройкаОпрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
