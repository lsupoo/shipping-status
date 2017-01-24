import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
    currentStatus: belongsTo('shipping-status'),
    fullHistory: hasMany('shipping-status'),
    receivingAddress: belongsTo('address'),
    shippedFromAddress: belongsTo('address')
});