/*eslint no-alert: "error"*/
import { LightningElement, track } from 'lwc';
import io from 'socket.io-client';
//import fs from 'fs-es6';
//import path from 'path';
//import ss from 'socket.io-stream';
import { getUrlVars, insertParam, getName } from 'my/util';

export default class App extends LightningElement {
    userName = '';
    roomId = '';
    currentMessage = '';
    @track messages = [];

    connectedCallback() {
        const socket = io();

        if (typeof getUrlVars().roomId === 'undefined') {
            // eslint-disable-next-line no-alert
            this.roomId = prompt(
                'Please Enter roomId Keep Empty to create new Room',
                'PUBLICROOM'
            );
            insertParam('roomId', this.roomId);
            console.log('this roomId ' + this.roomId);
        } else {
            // eslint-disable-next-line no-alert
            this.userName = prompt('Please enter a nickname: ', getName()); // eslint-disable-line no-alert
            this.roomId = getUrlVars().roomId;
            console.log('this roomId ' + this.roomId);
        }

        socket.emit('user_join', {
            message: this.userName
        });

        this.setUpListners();
    }

    attachImage() {
        console.log('hi u wanna attach image');
    }

    uploadFile() {
        const socket = io();
        // const reader = new FileReader();
        const input = this.template.querySelector('input[type=file]');
        const file = input.files[0];

        let msg = {
            currentMessage: file,
            time: new Date().getTime(),
            ismy: true,
            username: this.userName,
            roomId: this.roomId,
            type: 'image'
        };

        socket.emit('image_upload', msg);
    }

    typing(event) {
        this.currentMessage = event.target.value;
        // console.log('msg', event.which)
        if (event.which === 13) {
            this.handleSend();
        }
    }

    handleSend() {
        if (this.currentMessage.length === 0) return;

        const socket = io();

        let msg = {
            currentMessage: this.currentMessage,
            time: new Date().getTime(),
            ismy: true,
            username: this.userName,
            roomId: this.roomId,
            type: 'text'
        };
        socket.emit('chat_message', msg);
        console.log('someone clicked!!', this.currentMessage);
        this.messages.push(msg);
        this.currentMessage = '';
    }

    setUpListners() {
        const socket = io();
        // var imgChunks = [];

        socket.on('serverMessage', (data) => {
            console.log('server replied WITH' + data.message);
        });

        socket.on('chat_message' + this.roomId, (data) => {
            if (data.username !== this.userName) {
                this.messages.push(data);
            }
            const messages = this.template.querySelector('.messages');
            console.log(
                'scrol ',
                messages.scrollTop,
                messages.clientHeight,
                messages.scrollHeight
            );
            console.log('data => ' + JSON.stringify(this.messages));
            let shouldScroll =
                messages.scrollTop + messages.clientHeight ===
                messages.scrollHeight;
            console.log(shouldScroll, 'joker');

            this.scrollToBottom(messages);
        });

        socket.on('broadcast_image' + this.roomId, (data) => {
            var img = this.template.querySelector('.showImg');

            var blob = new Blob([data.currentMessage], { type: 'image/jpeg' });
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(blob);

            img.setAttribute('src', imageUrl);
        });
    }

    scrollToBottom(messages) {
        messages.scrollTop = messages.scrollHeight + 66;
        console.log('we scolled ', messages.scrollTop);
    }
}
