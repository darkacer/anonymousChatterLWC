import { LightningElement, api } from 'lwc';

export default class Message extends LightningElement {
    @api messagedata = {};

    renderedCallback() {
        console.log('$%$%', this.messagedata);
        let msg = this.template.querySelector('.messageBox');
        if (this.messagedata.ismy) {
            msg.style.textAlign = 'right';
            msg.style.backgroundColor = '#013220';
        } else {
            msg.style.backgroundColor = '#13201b';
        }
    }
}
