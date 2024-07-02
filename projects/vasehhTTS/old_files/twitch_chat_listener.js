const net = require('net');
const https = require('https');
const fs = require('fs');

// Replace with your actual tokens and keys
const twitchOAuthToken = ''; // Replace with your new OAuth token
const twitchUsername = '';
const twitchChannel = ''; // Twitch channel name
const elevenLabsAPIKey = '';
const elevenLabsVoiceID = ''; // Replace with your desired voice ID from ElevenLabs

// Function to connect to Twitch IRC
function connectTwitchIRC() {
    const client = new net.Socket();
    client.connect(6667, 'irc.chat.twitch.tv', () => {
        console.log('Connected to Twitch IRC');
        client.write(`PASS oauth:${twitchOAuthToken}\r\n`);
        client.write(`NICK ${twitchUsername}\r\n`);
        client.write(`JOIN #${twitchChannel}\r\n`);
    });

    client.on('data', (data) => {
        const message = data.toString();
        console.log('Received data:', message);
        if (message.startsWith('PING')) {
            client.write('PONG :tmi.twitch.tv\r\n');
            console.log('Sent PONG response');
        } else {
            handleMessageEvent(message);
        }
    });

    client.on('error', (error) => {
        console.error('Socket error:', error);
    });

    client.on('close', () => {
        console.log('Disconnected from Twitch IRC');
        // Reconnect after a delay
        setTimeout(connectTwitchIRC, 5000);
    });
}

// Function to handle chat messages
function handleMessageEvent(message) {
    const messageParts = message.split(' ');
    if (message.includes('PRIVMSG')) {
        const chatMessage = messageParts.slice(3).join(' ').replace(/^\:/, '');
        console.log(`Received message: ${chatMessage}`);
        sendToElevenLabs(chatMessage);
    }
}

// Function to send message to ElevenLabs API
function sendToElevenLabs(chatMessage) {
    const postData = JSON.stringify({
        text: chatMessage,
        voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75
        }
    });

    const options = {
        hostname: 'api.elevenlabs.io',
        path: `/v1/text-to-speech/${elevenLabsVoiceID}`,
        method: 'POST',
        headers: {
            'xi-api-key': elevenLabsAPIKey,
            'Content-Type': 'application/json',
            'Content-Length': postData.length
        }
    };

    const req = https.request(options, (res) => {
        let data = [];

        res.on('data', (chunk) => {
            data.push(chunk);
        });

        res.on('end', () => {
            const buffer = Buffer.concat(data);
            const filename = `output_${Date.now()}.mp3`;
            fs.writeFileSync(filename, buffer);
            console.log(`Audio file saved as ${filename}`);
        });
    });

    req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
    });

    req.write(postData);
    req.end();
}

// Start the connection
connectTwitchIRC();
