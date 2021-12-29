// command roles

const id_chatruoli = "";
//                   ⬆️ ID role channel
const comandoruoli = "";
//                   ⬆️ Command roles < prefix + name > < -role >
const listaruoli = ""
//                 ⬆️ list roles < italian, englesh >

const id_ruolonamerole = "";
//                       ⬆️ id role

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
                  // role gives
                    if (args[1] === "") {
//                                  ⬆️ name role < nameroles > < italian >
                        message.channel.send(`${message.author.username}, ti è stato aggiunto il ruolo!`)
                        setTimeout(function() {
                            message.channel.bulkDelete(2);
                        }, 3000);
                        const ruolo<name> = message.member.guild.roles.cache.find(role => role.id === id_ruolo<name>)
//                                   ⬆️ name Roles                                  //                   ⬆️ this is id name roles
                        if (ruolo<name>) message.guild.members.cache.get(message.author.id).roles.add(ruolo<name>)
//                           ⬆️ name Roles                                         //                  ⬆️ name Roles
                    }
                    
                    if (args[1] === "") {
//                                  ⬆️ name role 2 < nameroles > < italian >
                        message.channel.send(`${message.author.username}, ti è stato aggiunto il ruolo!`)
                        setTimeout(function() {
                            message.channel.bulkDelete(2);
                        }, 3000);
                        const ruolo<name> = message.member.guild.roles.cache.find(role => role.id === id_ruolo<name>)
//                                   ⬆️ name Roles2                                  //                   ⬆️ this is id name roles2
                        if (ruolo<name>) message.guild.members.cache.get(message.author.id).roles.add(ruolo<name>)
//                           ⬆️ name Roles                                         //                  ⬆️ name Roles2
                    }
                    
                }
            }
        }
    }

})
