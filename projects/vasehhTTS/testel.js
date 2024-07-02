const fs = require('fs');

const options = {
  method: 'POST',
  headers: {
    'xi-api-key': 'sk_c37662c4250f30db5ac5b155427f5ec3d43b0f20b8acee8b',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    text: "hello there how are you doing today?",
    voice_settings: {
      stability: 0.5,
      similarity_boost: 0.75
    }
  })
};

fetch('https://api.elevenlabs.io/v1/text-to-speech/srUyX1KiPXUS7jvGq3HY', options)
  .then(response => response.arrayBuffer())
  .then(buffer => {
    fs.writeFileSync('output.mp3', Buffer.from(buffer));
    console.log('Audio file saved as output.mp3');
  })
  .catch(err => console.error(err));
