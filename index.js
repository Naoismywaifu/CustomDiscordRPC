const rpc = require('discord-rpc');
const client = new rpc.Client({transport: 'ipc'});

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
          details: 'DETAILS',
            assets: {
                large_image: 'IMAGEID',
                small_image: 'IMAGEID',
            },
            buttons: [
                {label: 'BUTTON1', url: 'LINK1'},
                {label: 'BUTTON2', url: 'LINK2'},
            ],
        },
    });
});

client.login({clientId: 'clientID'}).catch(console.error);
