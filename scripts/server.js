// Simple Express server setup to serve the build output
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const path = require('path');

const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3001;
const DIST_DIR = './dist';

app.use(express.static(DIST_DIR));

app.use('*', (req, res) => {
    res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

const server = app.listen(PORT, () =>
    console.log(`✅  Server started: http://${HOST}:${PORT}`)
);
const socketIO = require('socket.io')(server);
//const io = socketIO(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));

    socket.on('user_join', (data) => console.log('data is ' + data.message));
});
