import { Serializer as содержаниеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-generaciya-6-содержание';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(содержаниеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
