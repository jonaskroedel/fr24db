<h1 align="center">
    <br>
    Flightradar24 Bot
</h1>


##About

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren

##Installation

You can add fr24 to your server with <a href="#">this</a> link! Alternatively, you can clone this repository and host the bot yourself.

```
git clone https://github.com/jonaskroedel/fr24.git
```

After cloning run these commands:

```
npm install
npm init
npm install dotenv --save
npm install --save mysql2
npm install got@11.8.3
```

to get all the dependencies and packages. You need [Node.js](https://nodejs.org/) and [MySQL](https://www.mysql.com/) installed. I highly recommend to install [nodemon](https://www.npmjs.com/package/nodemon) as it makes testing *much* easier.

## Setting Up

You have to create a ``.env`` file in your root directory to run the bot (you can use the example file provided as a base). Your file should look something like this:

```
BOT_TOKEN=YOUR_DISCORD_TOKEN
DB_HOST=YOUR_DB_IP //eg. localhost (127.0.0.1)
DB_PORT=YOUR_DB_PORT (3306)
DB_USER=YOUR_DB_USER (root)
DB_PASS=YOUR_DB_PASSWORD (root)
DB_NAME=fr24db //YOUR_DB_NAME if you dont know what you are doing, keep it!
CLIENT_ID=YOUR_CLIENT_ID
GUILD_ID=YOUR_TEsT_GUILD_ID
```



*Please be aware that this bot does not endorse, or have any official affiliation with FlightRadar24. It is an independent project and its functionalities are not endorsed, supported, or approved by FlightRadar24 or its affiliates.*