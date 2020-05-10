import { LightningElement, api } from 'lwc';

export default class Message extends LightningElement {
    @api messagedata = {};
    @api type = '';

    isImage = false;
    isMessage = false;

    renderedCallback() {
        console.log('$%$%', this.messagedata);

        if (this.type === 'image') {
            this.isImage = true;
            let img = this.template.querySelector('.showImg');

            let blob = new Blob([this.messagedata.currentMessage], {
                type: 'image/jpeg'
            });
            let urlCreator = window.URL || window.webkitURL;
            let imageUrl = urlCreator.createObjectURL(blob);

            img.setAttribute('src', imageUrl);
            img.setAttribute('width', '30%');
        }
        if (this.type === 'text') {
            this.isMessage = true;
            let msg = this.template.querySelector('.messageBox');
            console.log('msg cllas is ', msg);
            if (this.messagedata.ismy) {
                msg.style.textAlign = 'right';
                msg.style.backgroundColor = '#013220';
                msg.classList.add('my');
            } else {
                msg.style.backgroundColor = '#13201b';
                msg.classList.add('notmy');
            }
        }
    }
}
