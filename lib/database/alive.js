const mongoose = require('mongoose');
const Alive = new mongoose.Schema({
  id: { type: String,  unique: true ,required: true, default:"1"},
  text: { type: String, default:"Im Online , How can i help you" },
  get: { type: String, default:"i am mr theekshana 
i may help with you 
⛔wa unbaned
⛔wa baned
⛔bot create
⛔heroku account sale 
⛔fake whatsapp number salesale
⛔spam projeter 
🤗my whatsapp group 
🖇️ *Group Link*
https://chat.whatsapp.com/E0b13EB30fCKhurY8hL8Pc
💌please join 💌
💌support my whatsapp group 💌
💞💞Thanks for useing my sevicesevice💞💞


*©  THEEKSHANA - ＭＤ  |  ２０２４*
*_ʀᴇᴅ-ᴅʀᴀɢᴏɴ • ᴇᴠᴇʟᴏᴄᴏᴅᴇ_*"},
  url: { type: String, default:""},
  image: { type: Boolean, default: false },
  video: { type: Boolean, default: true  }
});

const alive =mongoose.model("alive", Alive)
module.exports = { alive }




