const TextMessage = require('viber-bot').Message.Text;
const RichMediaMessage = require('viber-bot').Message.RichMedia;

const START = {
	"ButtonsGroupColumns": 6,
	"ButtonsGroupRows": 1,
	"BgColor": "#FFFFFF",
	"Buttons": [{
		"ActionBody": "start",
		"ActionType": "reply",
		"BgColor": "#376080",
		"Text": '<font color="#FFFFFF"><b>Επιστροφή στην αρχή</b></font>',
		"Rows": 1,
		"Columns": 6
	}]
};

export function getName (code: number) {
  const messages = [
    new TextMessage(`Επέλεξες τον κωδικό ${code}.`),
    new TextMessage('Πληκτρολόγησε το ονοματεπώνυμο σου.'),
    new RichMediaMessage(START, null, null)
  ];

  return messages;
}
