import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    shipDate: DS.attr('string'),
    receivedContact: DS.attr('string'),
    receiveDate: DS.attr('string'),
    shippingReferenceId: DS.attr('string'),
    currentStatus: DS.belongsTo('shipping-status'),
    /**
     * Full Shipping status
     */
    fullHistory: DS.hasMany('shipping-status'),
    /**
     * Address shipment is received at
     */
    receivingAddress: DS.belongsTo('address'),
    /**
     * Address shipment is shipping to
     */
    shippedFromAddress: DS.belongsTo('address'),
    isOpen: false,
    classNamesInformation : Ember.computed('isOpen', function () {
        var classes= 'information';
        classes +=this.get('isOpen') ? 'is-open':'';
        return classes;
    }),
    classNamesHsitory : Ember.computed('isOpen', function () {
        var classes= 'history';
        classes +=this.get('isOpen') ? 'is-open':'';
        return classes;
    }),
    shippingHistoryId: Ember.computed(function() {
        return 'shippingHistory'+ this.get('id');
    }),

})
;
