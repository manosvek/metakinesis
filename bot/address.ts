const TextMessage = require('viber-bot').Message.Text;
const RichMediaMessage = require('viber-bot').Message.RichMedia;

const BACK = {
	"ButtonsGroupColumns": 6,
	"ButtonsGroupRows": 2,
	"BgColor": "#FFFFFF",
	"Buttons": [{
		"ActionBody": "back",
		"ActionType": "reply",
		"BgColor": "#376080",
		"Text": '<font color="#FFFFFF"><b>Επιστροφή στο ονοματεπώνυμο</b></font>',
		"Rows": 1,
		"Columns": 6
	}, {
		"ActionBody": "start",
		"ActionType": "reply",
		"BgColor": "#376080",
		"Text": '<font color="#FFFFFF"><b>Επιστροφή στην αρχή</b></font>',
		"Rows": 1,
		"Columns": 6
	}]
};


export function getAddress (name: string) {
  const messages = [
    new TextMessage(`Πληκτρολόγησες ${name}.`),
    new TextMessage('Πληκτρολόγησε τη διεύθυνση σου.'),
    new RichMediaMessage(BACK, null, null)
  ];
  return messages;
}
