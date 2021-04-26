'use strict';

const { authToken } = require('./utils/default.js');
const handleMessage = require('./messages_functions/handleMessage');

/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();


/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', async () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  handleMessage(message);
});


// Log our bot in using the token from https://discord.com/developers/applications
client.login(authToken);