# NodeFID
A NodeJS app that get input from stdin and send it via sockets. As been developped for use with a RFID reader.

Require socket.io and readline.

The app is designed to send the result only when:
- You asked to get the result (status = 1)
- The socket is initialized
