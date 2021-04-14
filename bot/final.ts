const TextMessage = require('viber-bot').Message.Text;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const fetch = require("node-fetch");

const START = {
	"ButtonsGroupColumns": 6,
	"ButtonsGroupRows": 1,
	"BgColor": "#FFFFFF",
	"Buttons": [{
		"ActionBody": "start",
		"ActionType": "reply",
		"BgColor": "#376080",
		"Text": '<font color="#FFFFFF"><b>Νέα Μετακίνηση</b></font>',
		"Rows": 1,
		"Columns": 6
	}]
};

export async function getFinal (code: number, name: string, address: string) {
	try {
		var apiResponse = await fetch("https://covid-19-greece.herokuapp.com/confirmed")
			.then((res: any) => res.json());

		var cases = apiResponse.cases;
		var dailyCases = cases[cases.length-1].confirmed - cases[cases.length-2].confirmed;
		var date = cases[cases.length-1].date.replace(/-/g, "/");
		date = date.slice(8,10) + date.slice(4,8) + date.slice(0,4);

		const messages = [
	    new TextMessage(`Μετακίνηση ${code} ${name} ${address}`),
			new TextMessage(`Προσεκτικά, στις ${date} η Ελλάδα είχε ${dailyCases} νέα κρούσματα.`),
	    new RichMediaMessage(START, null, null)
	  ];
	  return messages;
	}
	catch(err) {
		console.log(`Error: ${err.message}`);
		const messages = [
	    new TextMessage(`Μετακίνηση ${code} ${name} ${address}`),
	    new RichMediaMessage(START, null, null)
	  ];
	  return messages;
	}
}
