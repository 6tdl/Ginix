const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms')

const token = 'NjgxMTk2NzgxMDYwODgyNjE3.XlPH6g.55C2NIPRRV46hjI0KVlIK90T-RM';

const PREFIX = '!'

bot.on('ready', () =>{
    console.log('Ginix is ON');
    bot.user.setActivity('with 6tdl')


})





bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case 'giant':
            if(!message.member.roles.find(r =>r.name === "Devs")) return message.channel.send('لا يوجد لديك صلاحيات لهذا الأمر')
            var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
            if(!person) return  message.reply("I CANT FIND THE USER " + person)
 
            let mainrole = message.guild.roles.find(role => role.name === "🔹 Member");
            let role = message.guild.roles.find(role => role.name === "🔹 Giant");
           
 
            if(!role) return message.reply("Couldn't find the Giant role.")
 
 
            let time = args[2];
            if(!time){
                return message.reply("You didnt put a time!");
            }
 
            person.removeRole(mainrole.id)
            person.addRole(role.id);
 
 
            message.channel.send(`@${person.user.tag} has now Giant for ${ms(ms(time))}`)
 
            setTimeout(function(){
               
                person.addRole(mainrole.id)
                person.removeRole(role.id);
                console.log(role.id)
                message.channel.send(`@${person.user.tag} Giant has been gone.`)
            }, ms(time));
 
 
   
        break;
    }
 
 
});


bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case 'vip':
            if(!message.member.roles.find(r =>r.name === "Devs")) return message.channel.send('لا يوجد لديك صلاحيات لهذا الأمر')
            var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
            if(!person) return  message.reply("I CANT FIND THE USER " + person)
 
            let mainrole = message.guild.roles.find(role => role.name === "🔹 Member");
            let role = message.guild.roles.find(role => role.name === "🔹 VIP");
           
 
            if(!role) return message.reply("Couldn't find the Vip role.")
 
 
            let time = args[2];
            if(!time){
                return message.reply("You didnt put a time!");
            }
 
            person.removeRole(mainrole.id)
            person.addRole(role.id);
 
 
            message.channel.send(`@${person.user.tag} has now Vip for ${ms(ms(time))}`)
 
            setTimeout(function(){
               
                person.addRole(mainrole.id)
                person.removeRole(role.id);
                console.log(role.id)
                message.channel.send(`@${person.user.tag} Vip has been gone.`)
            }, ms(time));
 
 
   
        break;
    }
 
 
});


bot.login(token);