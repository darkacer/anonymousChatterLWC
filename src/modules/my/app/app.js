import { LightningElement } from 'lwc';
import io from 'socket.io-client';

export default class App extends LightningElement {
    handleSend() {
        console.log('someone clicked!');
        const socket = io();

        socket.emit('user_join', { message: 'whats up!' });
    }
}
