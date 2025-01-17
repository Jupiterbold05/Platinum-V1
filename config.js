//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "jadewale71@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Jupiterbold05/Platinum-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/gvdQSvi.jpeg";
global.devs = "2348084644182";
global.sudo = process.env.SUDO || "2349071978357";
global.owner = process.env.OWNER_NUMBER || "0770811929";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/gvdQSvi.jpeg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkYwVE1TMklsNTZQakRoMHBteE1ya0ZXejZsTVJJNHA4bkk1VFRrN05GWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGlwRGw2R2M1cWpnWWova1VMeXFEYnBBN29WNitpV0hkc1VqbXgwVDBYRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SU5ZUzJ0bTFHdmZGUndlaEJDWkZyWkl2MzFicEJkNzlVc3ZVeVptT1dJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkajl0MFZQekV4dExoOTBYa2hZTUJoczNyWFB3NmxFb2IzMlVhYm54V0JnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdIM1gzSmtKVFlsMEJQVlBWQ0FuRU14VHIremRlazY0bVgxb3JvQktISDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVqVHd1NDZ0YU1tMkI1VnNwMURqc1VCZU0zUmJEZGlVVnIvRWJyeUJqVHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEtvVGZxTlRYMlg3NXp6ZkVyMk5td1hqdFVJZ1FNV0lUVGZUeFJkanBuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2lIRnBEei9NWHorN1N5cWhhQkZrcWRWc2UvZVo4YzEyV0ZOb3ZXYUwwZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndiK0xvV1p4em9iK01yWG1MRURjYWpnQjE1SzY5TzRzWkQrNkluRkY0elNDR1Z5dE51NlhZd1J5ZGtoelpYUjhtalNlYzczUUY0OUthMGt6QytrUkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEsImFkdlNlY3JldEtleSI6ImNDSGNCYm5ibitWS0ZKRm5ZSzQva2VrR0MwSTVEd1VrUzdhNUgwaUNMMlE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDA3NzA4MTE5MjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjRCNDg5MzY3QUYxN0E3NDRCRjcyNTgxMzRDRkU0RDgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNzE1MjAwNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiamZIdkNFXy1TYjJVbFFtemR2OTRWQSIsInBob25lSWQiOiI5NjE3MzQxOS0wZjUyLTQyMzgtOTAwNy0xODZlNWQ3NGE4NmYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHNFaW9kNnY4TlZLa2lsVXo2RzVBSkd6cHNJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im15MTZZQVAycWVFSGE1Qk5tMjQ3RkNDU0Q0Zz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIxWllCTE1TWSIsIm1lIjp7ImlkIjoiNDA3NzA4MTE5Mjk6MjBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi77y84oGgKOKBoMKw4oGgb+KBoMKw4oGgKeKBoO+8jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFNoNVBRRUVQT3JxN3dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSVdSem5vNGJyY21pV0VGc1VGYk5qbnlLcDh6NUl2elFUWWdsSVRuTzBoWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTURZWkpyTHpYWFJyZHpHTTczRS9VTi8wZ3ZpQmVmVXE1MWVGQlpSUk5nak5MdEczUit6MFQ5VFNmbkFldHhHUkdoaE5UN2IwQWtGeWRoWDFORGdpQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkZZR1Z5ZkJmTW5zaUMyU0Y1M2pOakc2bWdaQUxETmhCZmhuUGlxSGc2NDhITUF6QTR5T3dKMG9KRGtLM2hnZjBLYVpoaHBSLzNocFRWMkdENUd3eEFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDA3NzA4MTE5Mjk6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU0ZrYzU2T0c2M0pvbGhCYkZCV3pZNThpcWZNK1NMODBFMklKU0U1enRJVyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNzE1MjAwMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCTm0ifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍™",
  author: process.env.PACK_AUTHER || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  packname: process.env.PACK_NAME || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  botname: process.env.BOT_NAME || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍",
  ownername: process.env.OWNER_NAME || "ANONIM",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDGaxLsz6PLvHvONZPeGuLUaf6UR9yIonc",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "PLATINUM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
