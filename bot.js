
var irc = require('irc'),
    graphite = require('graphite'),
    util = require('util');

var irc_client = new irc.Client('irc.freenode.net',
                                '_stats_', {
                                channels: ['#psywerx']
                            });
var graph_client = graphite.createClient('plaintext://localhost:2003');

var url = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;

irc_client.on('message#psywerx', function (nick, text, message) {
    graph_client.write({message: 1,
                        words: text.split(' ').length,
                        links: text.split(url).length},
                       function (err) {
                           if (err) {
                               console.log(err);
                           }
                        });
});

irc_client.on('join#psywerx', function (nick, message) {
    graph_client.write({join: 1}, function (err) {});
});

irc_client.on('part#psywerx', function (nick, message) {
    graph_client.write({leave: 1}, function(err) {});
});
