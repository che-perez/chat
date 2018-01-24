const io = require('socket.io')()
const r = require('rethinkdb')

// Channels

// POST
function createChannel({ connection, name }) {
  return r.table('channels')
  .insert({
    name,
    timestamp: new Date(),
  })
  .run(connection)
  .then(() => console.log('New Channel: ', name))
}

// GET
function subscribeToChannels({ client, connection }) {
  r.table('channels')
  .changes({ include_initial: true })
  .run(connection)
  .then((cursor) => {
    cursor.each((err, channelRow) => client.emit('channel', channelRow.new_val))
  })
}

// Messages

// GET
function subscribeToMessage({ client, connection, channelId }) {
  r.table('message')
  .filter(r.row('channelId')
  .eq(channelId))
  .changes({include_initial: true, include_types: true })
  .run(connection)
  .then((cursor) => {
    cursor.each((err, messageRow) => client.emit(`channelMessage: ${channelId}`, messageRow.new_val))
  })
}

// POST
function handleMessagePublish({ connection, channelId, name, message }) {
  console.log('saving message to db')
  r.table('message')
  .insert({
    channelId,
    name,
    message,
    timestamp: new Date(),
  }).run(connection)
}


function showSubmit(res){
  console.log(res)
}


r.connect({
  host: 'localhost',
  port: 28015,
  db: 'chat_app'
}).then((connection) => {
  io.on('connection', (client) => {

    client.on('createChannel', ({ name }) => {
      createChannel({ connection, name })
    })

    client.on('subscribeToChannels', () => subscribeToChannels({
      client,
      connection,
    }))

    client.on('publishMessage', (channelId, name, message) => {
      handleMessagePublish({
        connection,
        channelId,
        name,
        message,
      })
    }
      )

    client.on('subscribeToMessage', (channelId) => {
      subscribeToMessage({
        client,
        connection,
        channelId,
      })
    })

  })
})


const port = 8000
io.listen(port)
console.log('knock knock', port)

