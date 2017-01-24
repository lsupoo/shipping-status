import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
    include: ['currentStatus', 'receivingAddress', 'shippedFromAddress', 'fullHistory']
});
