require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
    console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

client.on('ready', async () => {

    const rpc = new Discord.RichPresence()
        .setApplicationId('1206534288091250758')
        .setType('STREAMING')
        .setURL(`https://www.youtube.com/watch?v=HTp5PH8ot6Q&list=RDGMEMHDXYb1_DDSgDsobPsOFxpA&ab_channel=NightLovell`)
        .setDetails(`hello i'm Hine`)
        .setName(`here is my info`)
        .setState(`have a nice day`)
        .setParty({
            max: 5001,
            current: 4690,
            id: Discord.getUUID(),
        })
        .setAssetsLargeImage(`https://media.discordapp.net/attachments/1116523223299924050/1246078570103836773/445381268_467670479251934_6674480907156068502_n.jpg?ex=665b149a&is=6659c31a&hm=0a9da7ccb12d3df06ba7d3415874166aaebb50ee5a095e57261ec732a2c41435&`)
        .setAssetsLargeText(`07/12/2006`)
        .setAssetsSmallImage(`https://media.discordapp.net/attachments/1116523223299924050/1246079929943330869/a5f0b8d12b7b58e8f82a84e9dc77e2ee.gif?ex=665b15de&is=6659c45e&hm=33d129427b3d3ea1a99bae7aff60c272706e2391d988f53759306ec32501834a&`)
        .setAssetsSmallText(`Gay`)
        .addButton(`My Website`, `https://danghien.info/`)
        .addButton(`Discord Server`, `https://discord.gg/allwaswell`);
    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.token);
