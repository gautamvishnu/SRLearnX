export function initiateEaseBuzzPayment(access_key, callback,component) {
    var easebuzzCheckout = new EasebuzzCheckout("TX6DM1IACI", "prod") // for test enviroment pass "test"
    var options = {
        access_key: access_key, // access key received via Initiate Payment
        onResponse: (response) => {
            callback(response,component);
        },
        theme: "#123456" // color hex
    }
    easebuzzCheckout.initiatePayment(options);
}