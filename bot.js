
var irc = require('irc'),
    util = require('util');

var client = new irc.Client('irc.freenode.net',
                            '_a-bot_', {
                                channels: ['#psywerx']
                            });

client.on('message#psywerx', function (nick, text, message) {
    console.log(nick+' => '+text);
    console.log(message);
});

client.on('join#psywerx', function (nick, message) {
    console.log(nick+' has joined');
});

client.on('part#psywerx', function (nick, message) {
    console.log(nick+' has left');
});
