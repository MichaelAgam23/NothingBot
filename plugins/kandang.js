let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => { 
  let banteng = global.db.data.users[m.sender].banteng
  let harimau = global.db.data.users[m.sender].harimau
 let gajah = global.db.data.users[m.sender].gajah
let kambing = global.db.data.users[m.sender].kambing
let panda = global.db.data.users[m.sender].panda
 let buaya = global.db.data.users[m.sender].buaya
 let kerbau = global.db.data.users[m.sender].kerbau
let sapi = global.db.data.users[m.sender].sapi
 let monyet = global.db.data.users[m.sender].monyet
 let babihutan = global.db.data.users[m.sender].babihutan
 let babi = global.db.data.users[m.sender].babi
 let ayam = global.db.data.users[m.sender].ayam

let zer = `
*âã KANDANG ð¾ ãâ*
    
 *â©   ï¸ ð = [ ${banteng} ] Ekor Banteng*
 *â©   ï¸ ð = [ ${harimau} ] Ekor Harimau*
 *â©   ï¸ ð = [ ${gajah} ] Ekor Gajah*
 *â©   ï¸ ð = [ ${kambing} ] Ekor Kambing*
 *â©   ï¸ ð¼ = [ ${panda} ] Ekor Panda*
 *â©   ï¸ ð = [ ${buaya} ] Ekor Buaya*
 *â©   ï¸ ð = [ ${kerbau} ] Ekor Kerbau*
 *â©   ï¸ ð® = [ ${sapi} ] Ekor Sapi*
 *â©   ï¸ ð = [ ${monyet} ] Ekor Monyet*
 *â©   ï¸ ð = [ ${babihutan} ] Ekor Babi Hutan*
 *â©   ï¸ ð = [ ${babi} ] Ekor Babi*
 *â©   ï¸ ð = [ ${ayam} ] Ekor Ayam*
 `.trim()
 conn.sendButton(m.chat, zer,wm, 'ðShop', '.pasar', m)
} 
handler.help = ['kandang']
handler.command= /^(kandang)$/i
handler.register = true
let wm = global.botwm

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)