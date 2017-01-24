import {Factory, faker} from 'ember-cli-mirage';
import {formatDatabaseDate} from 'app-utilities/utils/test-helpers';

export default Factory.extend({
    datetime: function () {
        return formatDatabaseDate(faker.date.recent(15));
    },
    code: function () {
        var codes = [
                'AFP',
                'ATP',
                'ATT',
                'COB',
                'DISP',
                'DLV',
                'OFD',
                'OHD',
                'POD',
                'PPOD',
                'RCD',
                'RCV',
                'RWM',
                'SPU',
                'TRAN',
            ],
            codeNumber = Math.round((Math.random() * (codes.length - 1)));
        return codes[codeNumber];
    },
    description: function () {
        return faker.company.catchPhrase();
    }
});
