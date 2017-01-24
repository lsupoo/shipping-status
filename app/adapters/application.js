import HalAppAdapter from "app-utilities/adapters/hal-application-adapter";
export default HalAppAdapter.extend({
    pathForType: function (type) {
        var newType = type;
        if (type==='shipping-information')
        {
            newType= 'shipment';
        }
        return newType;
    }
});
