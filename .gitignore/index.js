const Discord=require("discord.js") 
const fuzzy = require ('fuzzyset.js')

const mute = FuzzySet(['connard', 'enculé', 'fdp', 'pd', 'PD', 'va te faire foutre', 'Fils de pute', 'pénis', 'siméon', 'filip', 'bite', 'penis', 'Fils de put e','pute', 'anthon', 'put e','put', 'fesse radium', 'est casser','put e'])
const bot = new Discord.Client ()
bot.on ('message', function (message) {
    console.log(message.content);
    console.log(message.author.username);
    const mots = message.content.split (' ');
    console.log(mots);
    const motBan = mots.some(mot => {
        const score = mute.get (mot);
        console.log (`${mot} => ${score}`);
        return score != null && score.some(s => s[0]>0.85)
    });

    if (motBan) {
        message.reply(" ton message n'arrivera jamais à la réalité");
        console.log("message éffacé");
        message.delete().catch(result => {
            console.log(result)
        })
    }
}) 
const newLocal = bot.login("NDYwNDYxNjQ5NjYxMzk0OTQ0.DhFNIA.enDE9YXvDmvWq9bCslViVEx-J4M");



