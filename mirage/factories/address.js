import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    addressee: function () {
        return faker.name.findName();
    },
    addressLine1: function () {
        return faker.address.streetAddress();
    },
    addressLine2: function () {
        return faker.address.secondaryAddress();
    },
    addressLine3: function () {
        return faker.address.secondaryAddress();
    },
    city: function () {
        return faker.address.city();
    },
    state: function () {
        return faker.address.state();
    },
    zipCode: function () {
        return faker.address.zipCode();
    },
    country: function () {
        return faker.address.country();
    },
    note: function () {
        return faker.company.catchPhrase();
    },

});
