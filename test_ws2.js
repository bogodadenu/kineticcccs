const WebSocket = require('ws');

const ws = new WebSocket('wss://f1dash.net/ws', {
  headers: {
    Origin: 'http://localhost:3000'
  }
});

ws.on('open', () => {
  console.log('Connected directly!');
  ws.close();
});

ws.on('error', (err) => {
  console.error('Error connecting:', err.message);
});
