
// Importe les dépendances
const Discord = require('discord.js');
const client = new Discord.Client();

// Écoute l'événement ready (quand le bot est prêt)
client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

// Écoute l'événement message (quand un message est envoyé)
client.on('message', message => {
  if (!message.content.startsWith('!') || message.author.bot) return;

  // Sépare le message en commandes et arguments
  const args = message.content.slice(1).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // Vérifie si la commande est "!jaune"
  if (command === 'jaune') {
    // Vérifie si l'auteur du message a le rôle 
    if (!message.member.roles.cache.some(role => role.id === '1088919450415284374''1100839717756489798')) {
      return message.reply('Seuls les rôles STAFF et Modérateurs peuvent utiliser cette commande.');
    }

    // Trouve le rôle "Carton Jaune" dans le serveur
    const role = message.guild.roles.cache.find(role => role.id === '1105034478096744520');
    if (!role) {
      return message.reply('Le rôle n'existe pas.');
    }

    // Vérifie si un membre a été mentionné dans le message
    const member = message.mentions.members.first();
    if (!member) {
      return message.reply('Mentionne un membre pour lui attribuer le rôle".');
    }

    // Attribue le rôle "Carton Jaune" au membre
    member.roles.add(role)
      .then(() => {
        message.reply(`Le rôle "Carton Jaune" a été attribué à ${member.user.tag}.`);
      })
      .catch(error => {
        console.error('Une erreur est survenue lors de l'attribution du rôle :', error);
        message.reply('Une erreur est survenue lors de l'attribution du rôle. Veuillez réessayer.');
      });


// Écoute l'événement message (quand un message est envoyé)
client.on('message', message => {
    if (!message.content.startsWith('!') || message.author.bot) return;
  
    // Sépare le message en commandes et arguments
    const args = message.content.slice(1).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    // Vérifie si la commande est "!jaune"
    if (command === 'rouge') {
      // Vérifie si l'auteur du message a le rôle 
      if (!message.member.roles.cache.some(role => role.id === '1088919450415284374''1100839717756489798')) {
        return message.reply('Seuls les rôles STAFF et Modérateurs peuvent utiliser cette commande.');
      }
  
      // Trouve le rôle "Carton Rouge" dans le serveur
      const role = message.guild.roles.cache.find(role => role.id === '1105034681587617984');
      if (!role) {
        return message.reply('Le rôle n'existe pas.');
      }
  
      // Vérifie si un membre a été mentionné dans le message
      const member = message.mentions.members.first();
      if (!member) {
        return message.reply('Mentionne un membre pour lui attribuer le rôle".');
      }
  
      // Attribue le rôle "Carton Rouge" au membre
      member.roles.add(role)
        .then(() => {
          message.reply(`Le rôle "Carton Rouge" a été attribué à ${member.user.tag}.`);
        })
        .catch(error => {
          console.error('Une erreur est survenue lors de l'attribution du rôle :', error);
          message.reply('Une erreur est survenue lors de l'attribution du rôle. Veuillez réessayer.');
        });

client.login("");
}
});