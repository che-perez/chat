import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

function createChannel(name) {
  socket.emit('createChannel', { name });
}

function subscribeToChannels(cb) {
  socket.on('channel', channel => cb(channel));
  socket.emit('subscribeToChannels');
}

export {
  createChannel,
  subscribeToChannels,
};
