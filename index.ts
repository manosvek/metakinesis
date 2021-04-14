const Bot = require('viber-bot').Bot;
const Events = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;

const express = require('express');
const app = express();

import {startMenu} from './bot/startMenu';
import {getName} from './bot/name';
import {getAddress} from './bot/address';
import {getFinal} from './bot/final';

if (!process.env.BOT_ACCOUNT_TOKEN) {
  console.log('Could not find bot account token key.');
  process.exit(1);
}
if (!process.env.EXPOSE_URL) {
  console.log('Could not find exposing url');
  process.exit(1);
}

const bot = new Bot({
  authToken: process.env.BOT_ACCOUNT_TOKEN,
  name: "Echo Bot",
  avatar: ""
});


// Start conversation with user
bot.onConversationStarted((userProfile: any, isSubscribed: any, context: any) =>
	bot.sendMessage(userProfile, startMenu(userProfile, false), ["got code"])
);

// Global variables to store user information
var code = 0;
var name = "";
var address = "";

bot.on(Events.MESSAGE_RECEIVED, async (message: any, response: any) => {
	// Log traffic for analysis
	console.log(`${response.userProfile.name} said: \"${message.text}\"`);

	// If user chose code
	if (message.trackingData[0] === "got code") {
    if (message.text.match(/^[1-6]$/)) {
      code = message.text;
  		bot.sendMessage(response.userProfile, getName(code), ["got name"]);
    }
    else if (message.text !== "") {
      bot.sendMessage(response.userProfile, startMenu(response.userProfile, true), ["got code"]);
    }
	}
	// If user entered his/her name or pressed button
	else if (message.trackingData[0] === "got name") {
		if (message.text === "start") {
			// Start over
			bot.sendMessage(response.userProfile, startMenu(response.userProfile, false), ["got code"]);
		}
		else {
			name = message.text;
			bot.sendMessage(response.userProfile, getAddress(name), ["got address"]);
		}
	}
	// If user entered his/her address or pressed a button
	else if (message.trackingData[0] === "got address") {
		if (message.text === "start") {
			// Start over
			bot.sendMessage(response.userProfile, startMenu(response.userProfile, false), ["got code"]);
		}
		else if (message.text === "back") {
			// Go back
			bot.sendMessage(response.userProfile, getName(code), ["got name"]);
		}
		else {
			address = message.text;
			bot.sendMessage(response.userProfile, await getFinal(code, name, address), ["done"]);
		}
	}
	else if (message.trackingData[0] === "done" && message.text === "start") {
		bot.sendMessage(response.userProfile, startMenu(response.userProfile, false), ["got code"]);
	}
});


bot.onSubscribe((response: any) => console.log(`Subscribed: ${response.userProfile.name}`));


const port = process.env.PORT || 3000;
app.use("/viber/webhook", bot.middleware());
app.listen(port, () => {
  console.log(`Application running on port: ${port}`);
  bot.setWebhook(`${process.env.EXPOSE_URL}/viber/webhook`).catch((error: any) => {
    console.log('Can not set webhook on following server. Is it running?');
    console.error(error);
    process.exit(1);
  });
});
