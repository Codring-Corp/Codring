const { Webhook } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/955755244279722026/CtDq-01donht2inV_9SgiONtibIOhC7Wc1C2IqZmxu_1fDxDuYvZLwBOYWjGYGQCJswT");

const embed = new MessageBuilder()
.setTitle('My title here')
.setAuthor('Author here', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://www.google.com')
.setURL('https://www.google.com')
.addField('First field', 'this is inline', true)
.addField('Second field', 'this is not inline')
.setColor('#00b0f4')
.setThumbnail('https://cdn.discordapp.com/embed/avatars/0.png')
.setDescription('Oh look a description :)')
.setImage('https://cdn.discordapp.com/embed/avatars/0.png')
.setFooter('Hey its a footer', 'https://cdn.discordapp.com/embed/avatars/0.png')
.setTimestamp();
 
hook.send(embed);