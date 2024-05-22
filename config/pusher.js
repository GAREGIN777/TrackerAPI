const Pusher = require("pusher");
const pusher = new Pusher({
    appId: "1327869",
    key: "07eca6b1478a8a9ae3b0",
    secret: "2b24fac6f9c0d3168869",
    cluster: "mt1",
    useTLS: true
});

const SEND_CAPTURE_EVENT = "capture";
const SEND_LOCATION_UPDATES_EVENT = "location_updates";

const events = {SEND_CAPTURE_EVENT,SEND_LOCATION_UPDATES_EVENT}

module.exports = {pusher,events};