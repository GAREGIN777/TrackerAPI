const express = require('express');
const path = require('path');
const config = require("./config");


const bodyParser = require('body-parser');


// Create an instance of an Express application
const app = express();
const {pusher,events} = config.pusher;


app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());


// Define a route that sends a JSON response
//Uid is initiated as channel uid
app.post('/api/sendLocationUpdates/:channelId',(req,res) => {
    const {points} = req.body;
    const {channelId} = req.params;

    if (points === null) {
        return res.status(400).json({ success: false, error: 'Data cannot be null' });
    }
    else {
        //res.json(messageObj);
        pusher.trigger( channelId, events.SEND_LOCATION_UPDATES_EVENT, points)
            .then(() => res.status(200).json({ success: true }))
            .catch(error => res.status(500).json({ success: false, error: error.message }));
    }
});


// Define the port number to listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});