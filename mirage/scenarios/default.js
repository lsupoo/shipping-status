export default function (server) {

    /*
     Seed your development database using your factories.
     This data will not be loaded in your tests.

     Make sure to define a factory for each model you want to create.
     */

    // server.createList('post', 10);
    for(var i = 1; i <= 20; ++i) {
        var receivingAddress = server.create('address'),
            shippedFromAddress = server.create('address'),
            currentStatus = server.create('shipping-status'),
            fullHistory = server.createList('shipping-status', 5);
        server.create('shipping-information', {receivingAddress, shippedFromAddress, currentStatus, fullHistory});
    }
}
