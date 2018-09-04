const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const cors = require('cors')
const Chatkit = require('pusher-chatkit-server')

const PORT = process.env.PORT || 3001;
const app = express();


//chatkit Api keys

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:2c71e154-5d0b-4137-8aec-4088095b5730',
  key: 'c9798998-5a44-4ca7-978c-474c9bc92bb4:O8OEpnP9CnApnPYgt4r3XJpTFhWZiONCMPOEWJ7oKNE=',
})


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

app.post('/users', (req, res) => {
  const { username } = req.body
  chatkit
    .createUser({ 
	id: username, 
	name: username 
     })
    .then(() => res.sendStatus(201))
    .catch(error => {
      if (error.error_type === 'services/chatkit/user_already_exists') {
        res.sendStatus(200)
      } else {
        res.status(error.status).json(error)
      }
    })
})


app.post('/authenticate', (req, res) => {
  const authData = chatkit.authenticate({ userId: req.query.user_id })
  res.status(authData.status).send(authData.body)
})


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
