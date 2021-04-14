# :robot: metakinesis


A **Viber bot** designed to help people in Greece send the required message to go out during Covid-19 measures. This project was developed in Typescript using NodeJS viber-bot package.

**\*Disclaimer:\*** Do not show the message from this bot to any authority check, it holds no real life value. Send to 13033 instead.

<!-- toc -->
* [Usage](#usage)
* [Setup](#setup)
* [Contact](#contact)
<!-- tocstop -->

# Usage
<!-- usage -->
The bot prompts the user for all required information and displays final message along with latest information of daily Covid-19 cases in Greece. Cases numbers were pooled from [Coronavirus Greece API](https://covid-19-greece.herokuapp.com) developed by volunteers of [COVID-19 Response Greece](https://www.covid19response.gr/index_en.html).

<img src="./media/viber-bot.gif" height="600">
<!-- usagestop -->


# Setup
<!-- setup -->

First of all clone this repository.
```sh
git clone https://github.com/manosvek/metakinesis
cd metakinesis/
```

Then install dependencies.
```sh
npm i --save @types/node node-fetch viber-bot
```

Compile Typescript files.
```sh
npm run build
```

Run index.js providing environmental variables for bot account token and expose URL.
```sh
BOT_ACCOUNT_TOKEN=<your-token> EXPOSE_URL=<your-URL> node index.js
```

(Note) You can use ngrok to tunnel a local port to an https url. Default port is 3000, otherwise you have to provide PORT environmental variable.
```sh
ngrok http 3000
```
<!-- setupstop -->


# Contact
<!-- contact -->
If you have any questions/suggestions/want-to-say-hi please feel free to [reach out](mailto:manosvek@gmail.com?subject=[GitHub]%20Metakinesis)! :call_me_hand:
<!-- contactstop -->
