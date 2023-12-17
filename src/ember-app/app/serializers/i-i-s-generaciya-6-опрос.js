import { Serializer as ОпросSerializer } from
  '../mixins/regenerated/serializers/i-i-s-generaciya-6-опрос';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОпросSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
