const { Server } = require('socket.io');
const db = require('./models');

module.exports = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
    connectionStateRecovery: {} // Enable connection state recovery
  });

  io.on('connection', (socket) => {
    console.log(`user is connected: ${socket.id}`);

    // socket.on('disconnect', () => {
    //   console.log(`user disconnected ${socket.id}`);
    // });

    socket.on('send_message', async (data) => {
      // console.log(data.user.name);
      socket.broadcast.emit('receive_message', data);
    
    // let message;
    // try {
    //   message = await db.Message.create({
    //     content: data.message,
    //     created_at: data.created_at,
    //     owner_id: data.owner_id,
    //     recipient_user_id: data.recipient_user_id,
    //     channel_id: data.channel_id
    //   });
    // } catch (e) {
    //   console.log(e);
    // }
    });
  });

  return io; // Export the 'io' object
};

  //   const server = app.get('server'); // Retrieve the server from the Express app
  
  //   const io = new Server(server, {
  //     connectionStateRecovery: {}
  //   });

  // io.on('connection', async (socket) => {
  //   socket.on('chat message', async (msg, clientOffset, callback) => {
  //     let result;
  //     try {
  //       result = await db.run('INSERT INTO messages (content, client_offset) VALUES (?, ?)', msg, clientOffset);
  //     } catch (e) {
  //       if (e.errno === 19 /* SQLITE_CONSTRAINT */ ) {
  //         callback();
  //       } else {
  //           console.log(e);
  //       }
  //       return;
  //     }
  //     io.emit('chat message', msg, result.lastID);
  //     callback();
  //   });

  //   if (!socket.recovered) {
  //     try {
  //       await db.each('SELECT id, content FROM messages WHERE id > ?',
  //         [socket.handshake.auth.serverOffset || 0],
  //         (_err, row) => {
  //           socket.emit('chat message', row.content, row.id);
  //         }
  //       );
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // });
