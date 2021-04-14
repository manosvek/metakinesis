const TextMessage = require('viber-bot').Message.Text;

const KEYBOARD_JSON = {
	"Type": "keyboard",
	"Buttons": [{
			"Columns": 2,
			"Rows": 1,
			'Silent': true,
			"ActionType": "reply",
			"ActionBody": "1",
			"BgColor": "#376080",
			"Image": "https://www.dropbox.com/s/ymvr8sy5onmgs8l/image_part_001.png?dl=1"
		}, {
			"Columns": 2,
			"Rows": 1,
			'Silent': true,
			"ActionType": "reply",
			"ActionBody": "2",
			"BgColor": "#376080",
			"Image": "https://www.dropbox.com/s/c9bgnz20k83nx7w/image_part_002.png?dl=1"
		}, {
			"Columns": 2,
			"Rows": 1,
			'Silent': true,
			"ActionType": "reply",
			"ActionBody": "3",
			"BgColor": "#376080",
			"Image": "https://www.dropbox.com/s/wxztqz144u93tq4/image_part_003.png?dl=1"
		}, {
			"Columns": 2,
			"Rows": 1,
			'Silent': true,
			"ActionType": "reply",
			"ActionBody": "4",
			"BgColor": "#376080",
			"Image": "https://www.dropbox.com/s/s0alv5mwqxjvk8j/image_part_004.png?dl=1"
		}, {
			"Columns": 2,
			"Rows": 1,
			'Silent': true,
			"ActionType": "reply",
			"ActionBody": "5",
			"BgColor": "#376080",
			"Image": "https://www.dropbox.com/s/xlqbv2kv3lvy181/image_part_005.png?dl=1"
		}, {
			"Columns": 2,
			"Rows": 1,
			'Silent': true,
			"ActionType": "reply",
			"ActionBody": "6",
			"BgColor": "#376080",
			"Image": "https://www.dropbox.com/s/nehkewqe6ix4tpe/image_part_006.png?dl=1"
		}]
}


export function startMenu (userProfile: any, error: boolean) {
	if (!error) {
		return [new TextMessage(`Καλωσήρθες ${userProfile.name}! Διάλεξε τον κωδικό της μετακίνησης σου από το μενού στο κάτω μέρος της οθόνης σου.`,KEYBOARD_JSON, null, null, null,3)];
	}
  else {
		return [new TextMessage(`Ο κωδικός μετακίνησης πρέπει να είναι 1-6.`,KEYBOARD_JSON, null, null, null,3)];
	}
}
