const { smd } = require("../lib");
const {
  enableGreetings,
  setMessage,
  deleteMessage,
  getMessage,
  sendWelcome,
  greetingsPreview,
  clearGreetings
} = require('../lib/');

smd({
  pattern: "greet", // Trigger for the greet command
  desc: "Greet new members.",
  category: "group",
  filename: __filename
}, async (message, match) => {
  try {
    // Retrieve the saved greet message for the group
    const greet = await getMessage(message.jid, 'greet', message.id);

    // If no argument and no greet message exists, show an example
    if (!match && !greet) {
      return await message.reply('*Example: greet Hi &mention*');
    }

    // Handle toggling the greet feature on/off
    if (match === 'on' || match === 'off') {
      if (!greet) {
        return await message.reply('*Example: greet Hi &mention*');
      }
      await enableGreetings(message.jid, 'greet', match, message.id);
      return await message.reply(`_Greet ${match === 'on' ? 'Enabled' : 'Disabled'}_`);
    }

    // Handle deleting the greet message
    if (match === 'delete') {
      await deleteMessage(message.jid, 'greet', message.id);
      clearGreetings(message.jid, 'greet', message.id);
      return await message.reply('_Greet deleted_');
    }

    // Replace &mention placeholder with actual mention syntax
    const greetMessage = match.replace(/&mention/gi, `@${message.sender.split("@")[0]}`);

    // Save the new greet message
    await setMessage(message.jid, 'greet', greetMessage, true, message.id);

    // Generate and preview the saved message
    const { msg, options } = await greetingsPreview(message, 'greet', message.id);

    // Ensure message content is treated correctly
    const finalMessage = typeof msg === 'string' ? msg : msg.text || 'Default Message';
    await message.bot.sendMessage(message.chat, finalMessage, options, { quoted: message });

    return await message.reply('_Greet set_');
  } catch (error) {
    await message.error(error + "\n\ncommand: greet", error, false);
  }
});

smd({
  pattern: "depart", // Trigger for the goodbye command
  desc: "Goodbye members.",
  category: "group",
  filename: __filename
}, async (message, match) => {
  try {
    // Retrieve the saved goodbye message for the group
    const goodbye = await sendWelcome(message.jid, 'depart', message.id);

    // If no argument and no goodbye message exists, show an example
    if (!match && !depart) {
      return await message.reply('*Example: depart Bye &mention*');
    }

    // Handle toggling the goodbye feature on/off
    if (match === 'on' || match === 'off') {
      if (!depart) {
        return await message.reply('*Example: depart Bye &mention*');
      }
      await sendWelcome(message.jid, 'goodbye', match, message.id);
      return await message.reply(`_Goodbye ${match === 'on' ? 'Enabled' : 'Disabled'}_`);
    }

    // Handle deleting the goodbye message
    if (match === 'delete') {
      await sendWelcome(message.jid, 'goodbye', message.id);
      sendWelcome(message.jid, 'goodbye', message.id);
      return await message.reply('_Goodbye deleted_');
    }

    // Replace &mention placeholder with actual mention syntax
    const goodbyeMessage = match.replace(/&mention/gi, `@${message.sender.split("@")[0]}`);

    // Save the new goodbye message
    await sendWelcome(message.jid, 'goodbye', goodbyeMessage, true, message.id);

    // Generate and preview the saved message
    const { msg, options } = await greetingsPreview(message, 'goodbye', message.id);

    // Ensure message content is treated correctly
    const finalMessage = typeof msg === 'string' ? msg : msg.text || 'Default Message';
    await message.bot.sendMessage(message.chat, finalMessage, options, { quoted: message });

    return await message.reply('_Goodbye set_');
  } catch (error) {
    await message.error(error + "\n\ncommand: goodbye", error, false);
  }
});
                     
