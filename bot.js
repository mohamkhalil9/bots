const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "=";



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Retir'ed`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Retir'ed ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`=help|BY ! ! xLewis .`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});



client.on("message", async message => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
        if(!message.channel.guild) return;
            var args = message.content.split(" ").slice(1).join(" ");
            if(command == "bc") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**ááÃÓÝ áÇ ÊãÊáß ÕáÇÍíÉ `ADMINISTRATOR`**");
                }
                    if(!args) {
                        return message.reply("**íÌÈ Úáíß ßÊÇÈÉ ßáãÉ Çæ ÌãáÉ áÅÑÓÇá ÇáÈÑæÏßÇÓÊ**");
                    }
                        message.channel.send(`**åá ÃäÊ ãÊÃßÏ ãä ÅÑÓÇáß ÇáÈÑæÏßÇÓÊ¿\nãÍÊæì ÇáÈÑæÏßÇÓÊ: \`${args}\`**`).then(m => {
                            m.react("?")
                            .then(() => m.react("?"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "?" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "?" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.memberCount} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.forEach(member => {
                                            let bc = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("Broadcast")
                                            .addField("Server", message.guild.name)
                                            .addField("Sender", message.author.username)
                                            .addField("Message", args);

                                            member.sendEmbed(bc);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**Broadcast Canceled.**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
            if(command == "bco") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**ááÃÓÝ áÇ ÊãÊáß ÕáÇÍíÉ `ADMINISTRATOR`**");
                }
                    if(!args) {
                        return message.reply("**íÌÈ Úáíß ßÊÇÈÉ ßáãÉ Çæ ÌãáÉ áÅÑÓÇá ÇáÈÑæÏßÇÓÊ**");
                    }
                        message.channel.send(`**åá ÃäÊ ãÊÃßÏ ãä ÅÑÓÇáß ÇáÈÑæÏßÇÓÊ¿\nãÍÊæì ÇáÈÑæÏßÇÓÊ: \`${args}\`**`).then(m => {
                            m.react("?")
                            .then(() => m.react("?"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "?" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "?" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.filter(r => r.presence.status !== "offline").size} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.filter(r => r.presence.status !== "offline").forEach(member => {
                                            let bco = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("Broadcast")
                                            .addField("Server", message.guild.name)
                                            .addField("Sender", message.author.username)
                                            .addField("Message", args);

                                            member.sendEmbed(bco);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**Broadcast Canceled.**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
});



client.on("message", async message => {
    if(message.content == prefix + "server") {
        if(!message.channel.guild) return;
            if(!message.member.hasPermission("MANAGE_GUILD")) {
                return message.channel.send("áíÓ áÏíß ÇáÕáÂÍíÉ ÇáßÂÝíÉ . :broken_heart:");
            }

                let server = new Discord.RichEmbed()
                    .setAuthor(message.guild.name)
                    .setColor("RANDOM")
                    .setTitle("Server Info :hearts: :sparkles:")
                    .setDescription(`Members :bust_in_silhouette: : ${message.guild.memberCount}\nOwner :crown: : ${message.guild.owner.user.username}\nServer ID :id: : ${message.guild.id}\nRoles :lock: : ${message.guild.roles.size}\nRegion :earth_africa: : ${message.guild.region.toUpperCase()}`);
                    
                    message.channel.sendEmbed(server);
                    
    }
});

client.on("message", async message => {
    if(message.content.startsWith(prefix + "info")) {
        let help = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`** 
            ÇáÐí ÕäÚ ÇáÈæÊ åæ ! ! xLewis .
            ááÊæÇÕá ãÚå Ýí ÇáÏíÓßæÑÏ ! ! xLewis .#6334
            **`);
            message.channel.sendEmbed(help); // ÑÇÈØ ÇáÓíÑÝÑ íÚæÏ Çáì ÓíÑÝÑ CODES .
    }
});

client.on("message", async message => {
    if(message.content.startsWith(prefix + "banned")) {
        if(!message.guild) return;
        message.guild.fetchBans()
        .then(bans => {
            let b = bans.size;
            let bb = bans.map(a => `${a}`).join(" - ");
            message.channel.send(`**\`${b}\` | ${bb}**`);
        });
    }
});
client.on("message", async message => {
    if(message.content.startsWith(prefix + "invite")) {
        let invite = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setThumbnail(message.author.avatarURL)
            .setTitle("**Click Here To Invite The Bot To Your Server :sparkling_heart:**")
            .setURL(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`);
            message.channel.sendEmbed(invite);
    }
});
client.on("message", async message => {
    if(message.content.startsWith(prefix + "help")) {
        let help = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`** BY ! ! xLewis .
            ÈÑæÏßÇÓÊ ÚÇÏí : ${prefix}bc
            ÏÚæÉ ÇáÈæÊ áÓíÑÝÑß : ${prefix}invite
            ãÚáæãÇÊ Úä ÇáÓíÑÝÑ : ${prefix}server
            ÈÑæÏßÇÓÊ ááÃæäáÇíä ÝÞØ : ${prefix}bco
            íÚÑÖ áß ÚÏÏ ÇáãÊÈäÏíä ãä ÓíÑÝÑß : ${prefix}banned
            áãÚÑÝå ãä ÕäÚ ÇáÈæÊ æááÊæÇÕá ãÚå :${prefix}info
            **`);
            message.channel.sendEmbed(help); // ÑÇÈØ ÇáÓíÑÝÑ íÚæÏ Çáì ÓíÑÝÑ CODES .
    }
});


client.on("message", message => { //clear
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**? ÇÓÝ áßä åÐÇ ÇáÇãÑ ááÓíÑÝÑÇÊ ÝÞØ **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**?  áÇ íæÌÏ áÏíß ÕáÇÍíÉ áãÓÍ ÇáÔÇÊ**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``ÊÜÜã ãÓÍ ÇáÔÇÊ ``",
          color: 0x5016f3, 
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
});



client.login(process.env.BOT_TOKEN);
