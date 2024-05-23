const { E6 } = require("furry-wrapper-neww") //npm i furry-wrapper-neww
const discordjs = require("discord.js") //npm i discord.js

const bot = new discordjs.Client({intents: Object.keys(discordjs.GatewayIntentBits).map((a) => {return discordjs.GatewayIntentBits[a]})})

//MAKE SURE TO ALLOW ALL INTENTS!!!!!! (idk why)

bot.on('ready', async (client) => {
    // DEBUG--
    console.log('\u001b[32m[+] ' + bot.user.username + " has logged in")

    var first = await bot.users.fetch('user id')
    var second = await bot.users.fetch('user id')

    first.createDM() //First user the bot will dm to.
    second.createDM() //Second user the bot will dm to.

    setInterval(async () => {     //You can enter whatever tags you like
        E6(["male/male -female -eating_feces -scat -gore -watersports -loli -cub -fart -vore -feral"]).then((r) => {
            first.send(r["file"]["url"])
            second.send(r["file"]["url"])
        })
        .catch(console.log)
    }, 3000)
})

bot.login("TOKEN HERE") //Put in brackets your discord bot token!!
