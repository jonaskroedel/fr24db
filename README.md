<h1 align="center">
    <br>
    Flightradar24 Bot
</h1>


## About

Flightradar24 Bot is an unofficial Discord bot designed to provide users with the ability to view flight details from <a href=https://flightradar24.com>Flightradar24</a>. It is a versatile bot that can be used across multiple guilds, offering a wide range of customization options.

## Installation

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

Its important to execute the SQL-lines in ``./database/schema.sql``. If you dont know what this does, dont change anything or it will not work.

## Legal

*This bot is an independent project and is not affiliated with FlightRadar24 or any other organization. The information provided by this bot is for general informational purposes only and should not be considered as official or endorsed by FlightRadar24.*

*The bot may include links or references to external websites or services for additional information. However, we do not have control over the content or accuracy of those websites. We are not liable for any illegal, inaccurate, or offensive content that may be published on such websites. The inclusion of any links or references does not imply a recommendation or endorsement of the views expressed within them.*

*The usage of this bot is at your own will and risk. We make no warranties or representations regarding the completeness, accuracy, reliability, or suitability of the information provided. We will not be held liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from the use of this bot.*

*By using this bot, you acknowledge that the creators and developers cannot be held responsible for any consequences or damages resulting from its use. You agree to release us from any liability or claims arising out of your use of the bot.*