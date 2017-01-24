import { Factory, faker } from 'ember-cli-mirage';
import { formatDatabaseDate } from 'app-utilities/utils/test-helpers';

export default Factory.extend({
    description: function () {
        return faker.company.catchPhrase();
    },
    name: function () {
        return faker.name.findName();
    },
    receivedContact: function () {
        return faker.name.findName();
    },
    receivedDate:  function () {
        return formatDatabaseDate(faker.date.recent(5));
    },
    shippingReferenceId: function () {
        return 'SHIP-' + faker.random.number(9999);
    },
    shipDate: function () {
        return formatDatabaseDate(faker.date.recent(10));
    }
});
