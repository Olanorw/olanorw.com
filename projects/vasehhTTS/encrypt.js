const CryptoJS = require('crypto-js');

const keys = {
    twitchOAuthToken: 'tv5w1d7osoca97dk8nsx2y13e6chl8',
    twitchClientID: '4xa8gnw4bmikrcxc0r24vy2qduc0cv',
    twitchChannelID: '27391370',
    elevenLabsAPIKey: 'sk_c37662c4250f30db5ac5b155427f5ec3d43b0f20b8acee8b',
    elevenLabsVoiceID: 'srUyX1KiPXUS7jvGq3HY'
};

const secret = 'your-secret-passphrase';

const encryptedKeys = CryptoJS.AES.encrypt(JSON.stringify(keys), secret).toString();
console.log(encryptedKeys);
