const io = require('socket.io')();
const r = require('rethinkdb');

function createChannel({ connection, name }) {
  return r.table('channels')
  .insert({
    name,
    timestamp: new Date(),
  })
  .run(connection)
  .then(() => console.log('New Channel: ', name));
}

function subscribeToChannels({ client, connection }) {
  r.table('channels')
  .changes({ include_initial: true })
  .run(connection)
  .then((cursor) => {
    cursor.each((err, channelRow) => client.emit('channel', channelRow.new_val));
  });
}


r.connect({
  host: 'localhost',
  port: 28015,
  db: 'chat_app'
}).then((connection) => {
  io.on('connection', (client) => {
    client.on('createChannel', ({ name }) => {
      createChannel({ connection, name });
    });

    client.on('subscribeToChannels', () => subscribeToChannels({
      client,
      connection,
    }));
  });
});


const port = 8000;
io.listen(port);
console.log('knock knock ', port);

