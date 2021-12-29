const id_chatruoli = ""; // id chat roles
const comandoruoli = "";// command <prefix + name> <-role>
const listaruoli = ""

const id_ruoloitaliano = "860645401438584912";
const id_ruoloenglesh = "860645747463815210";

client.on('message', (message) => {
    const args = message.content.split(' ')

    if (message.channel.id === id_chatruoli) {
        if (message.content.startsWith(comandoruoli)) {
            if (message.author.bot) {

            } else {
                if (!args[1]) {
                    message.channel.send(`${message.author.username}, utilizzo sbagliato! Utilizzo corretto: ${comandoruoli} <ruolo>. Lista dei ruoli ottenibili: ${listaruoli}`)
                    setTimeout(function() {
                        message.channel.bulkDelete(2);
                    }, 5000);
                } else {
                  // italiano
                    if (args[1] === "italiano") {
                        message.channel.send(`${message.author.username}, ti è stato aggiunto il ruolo!`)
                        setTimeout(function() {
                            message.channel.bulkDelete(2);
                        }, 3000);
                        const ruoloitaliano = message.member.guild.roles.cache.find(role => role.id === id_ruoloitaliano)
                        if (ruoloitaliano) message.guild.members.cache.get(message.author.id).roles.add(ruoloitaliano)
                    }
                       
                    // englesh
                    if (args[1] === "englesh") {
                        message.channel.send(`${message.author.username}, you have been added the role!`)
                        setTimeout(function() {
                            message.channel.bulkDelete(2);
                        }, 3000);
                        const ruoloenglesh = message.member.guild.roles.cache.find(role => role.id === id_ruoloenglesh)
                        if (ruoloenglesh) message.guild.members.cache.get(message.author.id).roles.add(ruoloenglesh)
                    }
                    
                }
            }
        }
    }

})
