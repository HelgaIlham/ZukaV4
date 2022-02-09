/* Base Ori : Helgaa
SC Ori : Helgaa


Thanks a lot to
 
> Allah SWT
> Helga Ilham

> Agos ( Killerz Bot )
> My parents
> My Family

Note : Jangan Hapus Nama Creator!
Kalo Mau Reupload Atau Recode Kasih Credits!

*/
const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const hx = require('hxz-api')
const crypto = require('crypto')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const yts = require( 'yt-search')
const brainly = require('brainly-scraper')
const ig = require('insta-fetcher')
const cheerio = require('cheerio')
const os = require('os')
const translate = require('@vitalets/google-translate-api')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const fromData = require('form-data')
const speed = require('performance-now')
const dtod = "6281398860278@s.whatsapp.net"
const otod = "6282138919347@s.whatsapp.net"

    //── 「 Lib 」 ──//

const { y2mateA, y2mateV } = require('./lib/y2mate')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { Toxic } = require('./lib/Toxic.js')
const { uploadimg, upload } = require('./lib/uploadimg')
const { pinterest } = require('./lib/pinterest')
const { color, bgcolor } = require('./lib/color')
const { fetchJosn, fetchText } = require('./lib/fetcher')
const { antiSpam } = require('./lib/antispam')
const { exec } = require('child_process')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const Exif = require('./lib/exif')
const exif = new Exif()

    //── 「 DataBase 」 ──//

const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))



    //── 「 Settings 」 ──//


ky_ttt = []
cmhit = []
autorespon = false
playmusic = false
antidelete = false
menusimpel = false
menuall = false
baterai = {
battery: "" || "Not detected",
isCharge: "" || false
}
offline = false
publik = false
bugc = true
waktuafk = 'Nothing'
alasanafk = 'Nothing'
NamaBot = settings.NamaBot
NomorOwner = settings.NomorOwner
NamaOwner = settings.NamaOwner
multi = true
nopref = false

    //── 「 LolKey 」 ──//
    
HelKey = settings.HelKey

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	function monospace(string) {
    return '```' + string + '```'
}   
var fgi = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6281398860278-1613049930@g.us" } : {})
},
message: { 
"videoMessage": { 
"title": `${tampilUcapan}`,
"h": `${jmn}`,
'duration': '99999', 
'gifPlayback': 'true', 
'caption': `${calender}`,
'jpegThumbnail': fs.readFileSync('./helga.jpg')
}
}
    }   
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
    //── 「 Module Pembatas om 」 ──//
    
module.exports = helga = async (helga, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
	    if (mek.key && !mek.key.remoteJid == 'status@broadcast') return
	    if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !mek.key.fromMe) {
		nums = mek.participant
        longkapnye = "\n".repeat(420)
        tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @⁨${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
        helga.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        helga.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = helga.user
		m = simple.smsg(helga, mek)
		const antibot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		helga.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./helga.jpg')
		cmhit.push(command)
        mess = {
			wait: '𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿!',
			success: '𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹!',
			toxic: 'Jangan Toxic!',
			error: {
				stick: '𝗧𝗶𝗱𝗮𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗲𝗻𝗴𝗮𝗸𝘀𝗲𝘀 𝘃𝗶𝗱𝗲𝗼!',
				Iv: '𝗟𝗶𝗻𝗸 𝗧𝗶𝗱𝗮𝗸 𝗩𝗮𝗹𝗶𝗱!',
                api: '𝗘𝗿𝗿𝗼𝗿'
			},
			only: {
				group: '𝗛𝗮𝗻𝘆𝗮 𝘂𝗻𝘁𝘂𝗸 𝗱𝗶 𝗱𝗮𝗹𝗮𝗺 𝗴𝗿𝘂𝗽!',
				ownerG: '𝗛𝗮𝗻𝘆𝗮 𝘂𝗻𝘁𝘂𝗸 𝗽𝗲𝗺𝗶𝗹𝗶𝗸 𝗴𝗿𝘂𝗽!',
				ownerB: 'Khusus Owner!',
				admin: 'Khusus admins!',
				Badmin: 'Jadikan Bot admin!'
			}
		}
		const botNumber = helga.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? helga.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? helga.user.jid : helga.contacts[mek.sender]
        const pushname = mek.key.fromMe ? helga.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
		const totalchat = await helga.chats.all()
		const groupMetadata = isGroup ? await helga.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const q = args.join(' ')
		const isNsfw = isGroup ? nsfww.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiWame = isGroup ? antiwame.includes(from) : false
		 const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		if (antibot === true) return
		const katalog = (teks) => {
             res = helga.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_© Helga Zex_*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             helga.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = helga.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6282138919347-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/IlpQRKWDZed0GgVHmYJUbl', "groupName": `${NamaBot}`, "footerText": "*_© Helga Zex_*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            helga.relayWAMessage(grup)
        }
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await helga.setStatus(`❄️Base Helga | ⛈️Running Time : ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
}
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await helga.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		const pporigi = fs.readFileSync('./helga.jpg')
		const sekarang = new Date().getTime();
			
			
    //── 「 Waktuuu 」 ──//			
			
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Midnight 🌚"; break;
                case 1: jamss = "Midnight 🌚"; break;
                case 2: jamss = "Midnight 🌚"; break;
                case 3: jamss = "Midnight 🌔"; break;
                case 4: jamss = "Midnight 🌔"; break;
                case 5: jamss = "Dawn 🌄"; break;
                case 6: jamss = "Morning 🌄"; break;
                case 7: jamss = "Morning 🌄"; break;
                case 8: jamss = "Morning ☀️"; break;
                case 9: jamss = "Morning ☀️"; break;
                case 10: jamss = "Morning ☀️"; break;
                case 11: jamss = "Afternoon 🌞"; break;
                case 12: jamss = "Zuhur 🌞"; break;
                case 13: jamss = "Afternoon 🌞"; break;
                case 14: jamss = "Afternoon 🌞"; break;
                case 15: jamss = "Asr 🌞"; break;
                case 16: jamss = "Afternoon ☀️"; break;
                case 17: jamss = "Evening 🌄"; break;
                case 18: jamss = "Maghrib 🌄"; break;
                case 19: jamss = "Isha 🌙"; break;
                case 20: jamss = "Night 🌙"; break;
                case 21: jamss = "Night 🌙"; break;
                case 22: jamss = "Midnight 🌙"; break;
                case 23: jamss = "Midnight 🌚"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                        }
if(time2 < "19:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                         }
if(time2 < "18:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg')
                                         }
if(time2 < "15:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "11:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "06:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg')
}


    //── 「 Produc 」 ──//

const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": imageTime //Gambarnye
					},
					"title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
					"description": `${tampilUcapan} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${tampilUcapan} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `Subscribe YouTube Channel\nHelga Zex's!`, //Kasih namalu
                            orderTitle: `Subscribe YouTube Channel\nHelga Zex's!`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281398860278-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
	                  //pin
const pinterest = (queryy) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://id.pinterest.com/search/pins/?autologin=true&q=${queryy}`, {
      headers: {
        cookie: "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
      }
    }).then(({data}) => {
      const $ = cheerio.load(data)
      const result = []
      const hasil = []
      $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
        result.push(link)
      })
      result.forEach(function (v) {
        if (v == undefined) return
        hasil.push(v.replace(/236/g,'736'))
      })
      hasil.shift()
      resolve(hasil)
    }).catch(reject)
  })
}
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6282138919347-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6281398860278-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281398860278-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281398860278-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan} ${pushname}`,
                 "title": `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281398860278-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
                     const fmen = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2021,
                            status: 1,
                            surface : 1,
                            message: `Helga Ilham`, //Kasih namalu
                            thumbnail: fs.readFileSync('./helga.jpg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const sendBug = async (target) => {
      await helga.relayWAMessage(
        helga.prepareMessageFromContent(
          target,
          helga.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
    //But verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
helga.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebelum Mengakses Bot Verify Terlebih Dahulu Ya`
const daftar2 = '```Ketik Tombol Di Bawah Untuk Mendaftar Ke Database Helga Zex```'
const daftar3 = [{buttonId: `verify`,buttonText: {displayText: `🌸𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙀𝘿 `,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
helga.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Document
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await helga.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
helga.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await helga.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
helga.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await helga.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
helga.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await helga.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
helga.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
 if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© Helga Ilham_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === helga.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© Helga Ilham_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./database/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					helga.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        helga.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        helga.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await helga.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        helga.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			helga.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const simir = (teks) => {
			helga.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			helga.sendMessage(hehe, teks, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? helga.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : helga.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
helga.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
helga.sendMessage(from, hasil, type, options).catch(e => {
helga.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					helga.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await helga.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				helga.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
           if (budy.startsWith('>')){
if (!isOwner && !mek.key.fromMe) return
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner) return
try {
return helga.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
			// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					helga.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					helga.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					helga.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
			if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 2500) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        helga.groupRemove(from, sender);
      }
			}
        if (budy.includes("wa.me/","https://wa.me//","https://wa.me/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiWame) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				helga.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Wa.me terdeteksi Auto kick!')
			    helga.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
            }
        }
        // MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				helga.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    helga.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
                      }
if (!settings.autoread) {
helga.chatRead(from)
}
if (!settings.autocomposing) {
helga.updatePresence(from, Presence.composing)
}
if (!settings.autorecording) {
helga.updatePresence(from, Presence.recording)
}

        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (isCmd && antiSpam.isFiltered(from) && !isGroup) { console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
return reply('Tunggu Sebentar!')}  
if (isCmd && antiSpam.isFiltered(from) && isGroup) { console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
return reply('Jangan Spam Command Banh :(')}
if (isCmd && !isOwner) antiSpam.addFilter(from)
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd && !isGroup) {console.log(color('| SELF |', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
	    if (!command) {console.log(color('| PESAN |', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
		
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Reply stickernya bgsd!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
        switch (command) {
        
    //── 「 Fiturr 」 ──//        
        
        case 'about':
  if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
                if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status     
       menu = `*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *⚠️ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *‼️ PERMANENT BLOCK ‼️*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *.menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan ZukaChan di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan ZukaChan-
😖🙏

For GitHub : https://github.com/HelgaIlham
YouTube Helga : https://youtube.com/c/HelgaZexs妥
`
sendButLocation(from, `${menu}`, "*𝚉𝚞𝚔𝚊𝙲𝚑𝚊𝚗 𝚅3.0.0*", {jpegThumbnail:ofrply,name:""}, [{buttonId:`ping`,buttonText:{displayText:'SPEED BOT'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Hai Kak ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =`𝚉𝚞𝚔𝚊𝙲𝚑𝚊𝚗 𝚅3.0.0`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await helga.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
helga.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
case 'source':
case 'sourcecode':
case 'sc':
if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
reply(`Base Ori :\nhttps://github.com/HelgaIlham/BaseeZuka\nRest Api : \nhttps://api-helgazex.herokuapp.com\n\nFull Sc :\nChat Own\n\n_About :_\nhttps://youtube.com/c/HelgaZexs妥`)
break
     case 'allmenu':
  if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
        ptod = "6282138919347@s.whatsapp.net"
        stod = `${sender}`
        yes = '```'
        		var ra2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
			 stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
menu = `
Hai Kak ${pushname}, ${tampilUcapan}
Silahkan Ketik Command Berikut
Untuk Menampilkan Menu Bot


_⫹⫺🎯Library : Baileys-script_
_⫹⫺🍰Version : 4.2.8_
_⫹⫺🍧Language : Javascript_
_⫹⫺📯Author : Helga Zex's_
_⫹⫺💬Time : ${timeWib} WIB_

┌❏ FREE REST API's
│◦➛ https://api-helgazex.herokuapp.com
└❏ MY ALL SOSMED
│◦➛ https://github.com/HelgaIlham
│◦➛ https://tiktok.com/@ilhamgz_20
│◦➛ https://bit.ly/HelgaOfficials
│◦➛ https://bit.ly/Helgazex
│◦➛ https://discord.gg/6EenvMEg7k
└❏  

┌❏ INDONESIA TIME
│◦➛ WIB : ${timeWib}
│◦➛ WITA : ${timeWita}
└❏  WIT : ${timeWit}

┌❏ TODAY
│◦➛${tampilUcapan}
│◦➛Jam : ${jmn}
│◦➛Hari : ${week} ${weton}
└❏ Tanggal : ${calender}



╭─「 Download Menu 」
│ • ${prefix}ytmp4
│ • ${prefix}ytmp3
│ • ${prefix}play
│ • ${prefix}play2
│ • ${prefix}tiktoknowm
│ • ${prefix}igdl [ Link ]
│ • ${prefix}ytsearch [ query ]
│ • ${prefix}mediafire [ Link ]
╰────


╭─「 Information 」
│ • ${prefix}ping
│ • ${prefix}speed
│ • ${prefix}runtime
│ • ${prefix}donasi
│ • ${prefix}waktu
│ • ${prefix}tes
│ • ${prefix}sc
│ • ${prefix}bugreport [ query ]
╰────


╭─「 Absen/Voting menu 」
│ • hadir (reply)  ( comming soon )
│ • sakit (reply)  ( comming soon )
│ • ${prefix}mulaiabsen
│ • ${prefix}cekabsen
│ • ${prefix}delabsen  ( comming soon )
│ • vote (reply)  ( comming soon )
│ • devote (reply)  ( comming soon )
│ • ${prefix}voting @tag|text|1 (1=1 menit)
│ • ${prefix}delvote ( comming soon )
╰────


╭─「 Store Menu 」
│ • ${prefix}sewa
│ • ${prefix}sewabot
│ • ${prefix}rdp
│ • ${prefix}vps
│ • ${prefix}jasrun
╰────


╭─「 Maker Menu 」
│ • ${prefix}neon [ text ]
│ • ${prefix}joker [ text ]
│ • ${prefix}graffiti [ text ]
│ • ${prefix}blackpink [ text ]
│ • ${prefix}logo [ text ]
│ • ${prefix}logo1 [ text ]
│ • ${prefix}3d [ text ]
│ • ${prefix}harrypoter [ text ]
│ • ${prefix}matrix [ text ]
╰────


╭─「 Random Menu 」
│ • ${prefix}aesthetic
│ • ${prefix}kece
│ • ${prefix}cerpen
│ • ${prefix}cersex
│ • ${prefix}quotes
│ • ${prefix}fakta
│ • ${prefix}quotes
│ • ${prefix}quotesdiLan
│ • ${prefix}quotesanime
│ • ${prefix}quotesimage
│ • ${prefix}faktaunik
│ • ${prefix}katabijak
│ • ${prefix}pantun
│ • ${prefix}quotesislami
│ • ${prefix}bucin
│ • ${prefix}bucin2
│ • ${prefix}randomnama
│ • ${prefix}hoax
│ • ${prefix}memeindo
│ • ${prefix}darkjoke
│ • ${prefix}memekertas
│ • ${prefix}ppcp
│ • ${prefix}ppcouple
╰────


╭─「 Funyy Menu 」
│ • ${prefix}togel
│ • ${prefix}cekwatak
│ • ${prefix}cekmati [nama]
│ • ${prefix}wangy [nama]
│ • ${prefix}toxic
│ • ${prefix}truth
│ • ${prefix}dare
│ • ${prefix}apakah
│ • ${prefix}bisakah
│ • ${prefix}kapankah
│ • ${prefix}memeindo
│ • ${prefix}cecan
│ • ${prefix}cogan
│ • ${prefix}darkjoke
│ • ${prefix}rate
│ • ${prefix}bay
│ • ${prefix}selamatdatang
│ • ${prefix}jadian
│ • ${prefix}cantik
│ • ${prefix}ganteng
│ • ${prefix}hobby
│ • ${prefix}beban
│ • ${prefix}babi
│ • ${prefix}cekganteng
│ • ${prefix}cekcantik 
╰────



╭─「 Sound Menu 」
│ • ${prefix}sound1
│ • ${prefix}sound2
│ • ${prefix}sound3
│ • ${prefix}sound4
│ • ${prefix}sound5
│ • ${prefix}sound6
│ • ${prefix}sound7
│ • ${prefix}sound8
│ • ${prefix}sound9
│ • ${prefix}sound10
│ • ${prefix}sound11
│ • ${prefix}sound12
│ • ${prefix}sound13
│ • ${prefix}sound14
│ • ${prefix}sound15
│ • ${prefix}sound16
│ • ${prefix}sound17
│ • ${prefix}sound18
│ • ${prefix}sound19
│ • ${prefix}sound20
│ • ${prefix}sound21
│ • ${prefix}sound22
│ • ${prefix}sound23
│ • ${prefix}sound24
│ • ${prefix}sound25
│ • ${prefix}sound26
│ • ${prefix}sound27
│ • ${prefix}sound28
│ • ${prefix}sound29
│ • ${prefix}sound30
│ • ${prefix}sound31
│ • ${prefix}sound32
│ • ${prefix}sound33
│ • ${prefix}sound34
│ • ${prefix}sound35
│ • ${prefix}sound36
│ • ${prefix}sound37
│ • ${prefix}sound38
│ • ${prefix}sound39
│ • ${prefix}sound40
│ • ${prefix}sound41
│ • ${prefix}sound42
│ • ${prefix}sound43
│ • ${prefix}sound44
│ • ${prefix}sound45
│ • ${prefix}sound46
│ • ${prefix}sound47
│ • ${prefix}sound48
│ • ${prefix}sound49
│ • ${prefix}sound50
│ • ${prefix}sound51
│ • ${prefix}sound52
│ • ${prefix}sound53
│ • ${prefix}sound54
│ • ${prefix}sound56
│ • ${prefix}sound57
│ • ${prefix}sound58
│ • ${prefix}sound59
│ • ${prefix}sound60
│ • ${prefix}sound61
│ • ${prefix}sound62
│ • ${prefix}sound63
│ • ${prefix}sound64
│ • ${prefix}sound65
│ • ${prefix}sound66
│ • ${prefix}sound67
│ • ${prefix}sound68
│ • ${prefix}sound69
│ • ${prefix}sound70
│ • ${prefix}sound71
│ • ${prefix}sound72
│ • ${prefix}sound73
│ • ${prefix}sound74
│ • ${prefix}sound75
╰────


╭─「 Search Menu 」
│ • ${prefix}pinterest [ query ]
│ • ${prefix}google [ query ]
│ • ${prefix}ssweb [ Link ]
╰────



╭─「 Asupan Dan Cecan 」
│ • ${prefix}cecan
│ • ${prefix}random
│ • ${prefix}ukhty
│ • ${prefix}santuy
│ • ${prefix}hijaber
│ • ${prefix}indonesia
│ • ${prefix}malaysia
│ • ${prefix}thailand
│ • ${prefix}vietnam
│ • ${prefix}china
│ • ${prefix}korea
│ • ${prefix}jepang
╰────


╭─「 Dosa Menu 」
│ • ${prefix}dosa1
│ • ${prefix}dosa2
│ • ${prefix}dosa3
│ • ${prefix}dosa4
│ • ${prefix}dosa5
│ • ${prefix}dosa6
│ • ${prefix}dosa7
│ • ${prefix}dosa8
│ • ${prefix}dosa9
│ • ${prefix}dosa10
│ • ${prefix}dosa11
│ • ${prefix}dosa12
│ • ${prefix}dosa13
│ • ${prefix}dosa14
│ • ${prefix}dosa15
│ • ${prefix}dosa16
│ • ${prefix}dosa17
│ • ${prefix}dosa18
│ • ${prefix}dosa19
│ • ${prefix}dosa20
│ • ${prefix}dosa21
│ • ${prefix}dosa22
│ • ${prefix}dosa23
│ • ${prefix}dosa24
╰────



╭─「 TextPro Menu 」
│ • ${prefix}ninja teks | teks2
│ • ${prefix}joker teks | teks2
│ • ${prefix}neon_devil teks
│ • ${prefix}wolf_g teks | teks2
│ • ${prefix}lion teks | teks2
│ • ${prefix}Pornhub teks | teks2
│ • ${prefix}Horror teks | teks2
│ • ${prefix}Sketch teks
│ • ${prefix}Rainbow teks
│ • ${prefix}Demon teks
│ • ${prefix}Halloween teks
│ • ${prefix}Halloween2 teks | teks2
│ • ${prefix}Sircuit teks
│ • ${prefix}Discovery teks
│ • ${prefix}Skeleton teks
╰────


╭─「 Ephoto Menu 」
│ • ${prefix}wetglass text
│ • ${prefix}multicolor3d text
│ • ${prefix}watercolor text
│ • ${prefix}luxurygold text
│ • ${prefix}galaxywallpaper text
│ • ${prefix}lighttext text
│ • ${prefix}beautifulflower text
│ • ${prefix}puppycute text
│ • ${prefix}royaltext text
│ • ${prefix}heartshaped text
│ • ${prefix}birthdaycake text
│ • ${prefix}galaxystyle text
│ • ${prefix}hologram3d text
│ • ${prefix}greenneon text
│ • ${prefix}glossychrome text
│ • ${prefix}greenbush text
│ • ${prefix}metallogo text
│ • ${prefix}noeltext text
│ • ${prefix}glittergold text
│ • ${prefix}textcake text
│ • ${prefix}starsnight text
│ • ${prefix}wooden3d text
│ • ${prefix}textbyname text
│ • ${prefix}writegalacy text
│ • ${prefix}galaxybat text
│ • ${prefix}snow3d text
│ • ${prefix}birthdayday text
│ • ${prefix}goldplaybutton text
│ • ${prefix}silverplaybutton text
│ • ${prefix}freefire text
╰────



╭─「 Nsfw 」
│ • ${prefix}awoo
│ • ${prefix}blowjob
│ • ${prefix}hentai
│ • ${prefix}megumin
│ • ${prefix}neko
│ • ${prefix}trapnime
│ • ${prefix}loli
│ • ${prefix}husbu
│ • ${prefix}milf
│ • ${prefix}cosplay
╰────


╭─「 Group Menu 」
│ • ${prefix}nsfw 1 / 0
│ • ${prefix}group open / close
│ • ${prefix}antilink on / off
│ • ${prefix}antiwame on / off
│ • ${prefix}welcome on / off
│ • ${prefix}linkgc
│ • ${prefix}tagall
│ • ${prefix}add
│ • ${prefix}kick
│ • ${prefix}creategroup
│ • ${prefix}sticktag
│ • ${prefix}promote
│ • ${prefix}demote
│ • ${prefix}promoteall
│ • ${prefix}demoteall
│ • ${prefix}revoke
│ • ${prefix}leave
╰────


╭─「 Owner Menu 」
│ • ${prefix}setmenu
│ • ${prefix}setallmenu
│ • ${prefix}setprefix multi / nopref
│ • ${prefix}hidetag
│ • ${prefix}mode
│ • ${prefix}bc
│ • ${prefix}setbio
│ • ${prefix}setname
│ • ${prefix}self
│ • ${prefix}public
│ • ${prefix}exif
│ • ${prefix}leave
│ • ${prefix}addcmd
│ • ${prefix}delcmd
│ • ${prefix}listcmd
╰────


╭─「 Sticker Menu 」
│ • ${prefix}take
│ • ${prefix}swm
│ • ${prefix}sticker [ Reply ]
│ • ${prefix}toimg
│ • ${prefix}attp
╰────
`
sendButDocument(from, `${menu}`, "Big Thanks To\n\nAllah SWT\nMy Parrent\nZukaChan\nHelga Ilham\nAgus\nAll Creator Bot Wa", fs.readFileSync('./helga.jpg'), {mimetype:Mimetype.pdf, thumbnail:ofrply, filename:`𝚉𝚞𝚔𝚊𝙲𝚑𝚊𝚗 𝚅3.0.0`}, [{buttonId:`about`,buttonText:{displayText:'About 🐋'},type:1},{buttonId:`simple`,buttonText:{displayText:'Simple Menu 🐋'},type:1}], {quoted:fmen, contextInfo: { mentionedJid: [dtod,otod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`𝚉𝚞𝚔𝚊𝙱𝚘𝚝𝚝 𝙼𝚊𝚍𝚎 𝙱𝚢 𝙷𝚎𝚕𝚐𝚊`,body:`𝙼𝚊𝚍𝚎 𝙱𝚢 𝙷𝚎𝚕𝚐𝚊`,mediaType:"2",thumbnail:ofrply,mediaUrl:`https://youtu.be/bF7K7KL7dVY`}}})
break
case 'simple':
 stod = `${sender}`
 listMsg = {
 buttonText: 'Simple Menu Zuka',
 footerText: '*ZukaBase*',
 description: `Hai Kak @${stod.split('@')[0]}\nGunakan Bot Dengan Bijak Yaa..\n\n️💬 ${tampilUcapan}\n⏰ Jam : ${jmn}\n🌄 Hari : ${week} ${weton}\n🗓️ Tanggal : ${calender}\n`,
 sections: [
                     {
                      "title": `SILAHKAN PILIH SALAH SATU COMMAND DIBAWAH`,
 rows: [
                          {
                              "title": "Maker Menu🪔",
                              "description": 'Maker Menu, Foto Bergaya',
                              "rowId": ""
                              
                           },
                           {
                              "title": "Nsfww Menu🧧",
                              "description": 'Nsfw Menu, Anime Haram',
                              "rowId": ""
                              
                           },
                           {
                              "title": "Groupp Menu⚗️",
                              "description": 'Untuk Pengaturan Group',
                              "rowId": ""
                              
                           },
                           {
                              "title": "Tools Menu🎨",
                              "description": 'Menu Convert Media To Sticker',
                              "rowId": ""
                              
                           },
                           {
                              "title": "Randomm Menu🎳",
                              "description": 'Random Menu, Menu Yang Keren Dan Simpel',
                              "rowId": ""
                              
                           },
                           {
                              "title": "Owner Bot🐣",
                              "description": 'Owner Bot Zuka Chan!',
                              "rowId": ""
                              
                           },
                           {
                              "title": "Download Menu🎴",
                              "description": 'Untuk Mendownload Berbagai Jenis File',
                              "rowId": ""
                              
                           },
                           {
                              "title": "Source Code⚠️",
                              "description": 'Script / Sc Dari Bot ZukaBase',
                              "rowId": ""
                              
                           },
                           {
                              "title": "Asupan Menu🏖️️",
                              "description": 'Menu Yang Sangad Tydck Ramah',
                              "rowId": ""
                              
                           },
                           {
                              "title": "TextProme Menu🦈️",
                              "description": 'Kreasi Image / Gambar Keren',
                              "rowId": ""
                              
                           },
                           {
                              "title": "Ephoto Menu️🧮",
                              "description": 'Gambar-Gambar Yang Unik',
                              "rowId": ""
                              
                           },
                           {
                              "title": "Store Menu🛍️️",
                              "description": 'Menu Shop / Store Di Bot',
                              "rowId": ""
                              
                           },
                           {
                              "title": "Soundd Menu🍥️️",
                              "description": 'Sound Menu, Sound 1-75',
                              "rowId": ""
                              
                           },
                           {
                              "title": "Dosaa Menu️️🪙",
                              "description": 'Menu Penambah Dosa!',
                              "rowId": ""
                              
                           },
                           {
                              "title": "Funny Menu️️🪅",
                              "description": 'Menu Kegabutan..',
                              "rowId": ""
                              
                           },
                           
                        ]
                     }],
 listType: 1
}
helga.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'gcbot':
case 'bot':
case 'groupbot':
        if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

My Official Group⛱️

🧶 https://chat.whatsapp.com/Kw69Oel34Nd0JuluvFNVKt
🧶 https://chat.whatsapp.com/IlpQRKWDZed0GgVHmYJUbl
🧶 https://chat.whatsapp.com/DYdn8o7Wrho0K8R78IqTbB
🧶 https://chat.whatsapp.com/FNUkk0gLdc2Ik4fZr2HdHc

Zuka Group Script Base⛱️

🧶 https://chat.whatsapp.com/G0CKmdYhIt5DJmhXr2RsN5
🧶 https://chat.whatsapp.com/IQEOA0qbEY6IXyDrA7C7lO

`
sendButLocation(from, `${menu}`, `${yes}Group Officials..${yes}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'BACK TO MENU🍁'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'maker':
        if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

     *「 Menu Maker 」*

_⫹⫺${prefix}graffiti [ Text ]_
_⫹⫺${prefix}neon [ Text ]_
_⫹⫺${prefix}joker [ Text ]_
_⫹⫺${prefix}blackpink [ Text ]_
_⫹⫺${prefix}logo [ Text ]_
_⫹⫺${prefix}logo1 [ Text ]_
_⫹⫺${prefix}3d [ Text ]_
_⫹⫺${prefix}harrypoter [ Text ]_
_⫹⫺${prefix}matrix [ Text ]_

`
sendButLocation(from, `${menu}`, `${yes}Maker Menu..${yes}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'BACK TO MENU🍁'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'nsfww':
        if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

    *「 Nsfw Menu 」*
    
_⫹⫺${prefix}awoo_
_⫹⫺${prefix}blowjob_
_⫹⫺${prefix}hentai_
_⫹⫺${prefix}megumin_
_⫹⫺${prefix}neko_
_⫹⫺${prefix}trapnime_
_⫹⫺${prefix}loli_
_⫹⫺${prefix}husbu_
_⫹⫺${prefix}milf_
_⫹⫺${prefix}cosplay_

`
sendButLocation(from, `${menu}`, `${yes}Nsfww Menu..${yes}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'BACK TO MENU🍁'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'groupp':
        if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

    *「 Group Menu 」*
    
_⫹⫺${prefix}nsfw 1 / 0_
_⫹⫺${prefix}group open / close_
_⫹⫺${prefix}antilink on / off_
_⫹⫺${prefix}antiwame on / off_
_⫹⫺${prefix}welcome on / off_
_⫹⫺${prefix}linkgc_
_⫹⫺${prefix}tagall_
_⫹⫺${prefix}add_
_⫹⫺${prefix}kick_
_⫹⫺${prefix}creategroup_
_⫹⫺${prefix}sticktag_
_⫹⫺${prefix}promote_
_⫹⫺${prefix}demote_
_⫹⫺${prefix}promoteall_
_⫹⫺${prefix}demoteall_
_⫹⫺${prefix}revoke_
_⫹⫺${prefix}leave_

`
sendButLocation(from, `${menu}`, `${yes}Group Menu..${yes}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'BACK TO MENU🍁'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'tools':
        if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

    *「 Tools Menu 」*
    
_⫹⫺${prefix}take_
_⫹⫺${prefix}swm_
_⫹⫺${prefix}sticker [ Reply ]_
_⫹⫺${prefix}toimg_
_⫹⫺${prefix}attp_

`
sendButLocation(from, `${menu}`, `${yes}Tools Menu..${yes}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'BACK TO MENU🍁'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'randomm':
        if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

    *「 Random Menu 」*
    
_⫹⫺${prefix}aesthetic_
_⫹⫺${prefix}kece_
_⫹⫺${prefix}cerpen_
_⫹⫺${prefix}cersex_
_⫹⫺${prefix}quotes_
_⫹⫺${prefix}fakta_
_⫹⫺${prefix}quotes_
_⫹⫺${prefix}quotesdiLan_
_⫹⫺${prefix}quotesanime_
_⫹⫺${prefix}quotesimage_
_⫹⫺${prefix}faktaunik_
_⫹⫺${prefix}katabijak_
_⫹⫺${prefix}pantun_
_⫹⫺${prefix}quotesislami_
_⫹⫺${prefix}bucin_
_⫹⫺${prefix}bucin2_
_⫹⫺${prefix}randomnama_
_⫹⫺${prefix}hoax_
_⫹⫺${prefix}memeindo_
_⫹⫺${prefix}darkjoke_
_⫹⫺${prefix}memekertas
_⫹⫺${prefix}ppcp
_⫹⫺${prefix}ppcouple

`
sendButLocation(from, `${menu}`, `${yes}Random Menu..${yes}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'BACK TO MENU🍁'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'download':
        if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

    *「 Download Menu 」*
    
_⫹⫺${prefix}ytmp4_
_⫹⫺${prefix}ytmp3_
_⫹⫺${prefix}play_
_⫹⫺${prefix}tiktoknowm_
_⫹⫺${prefix}igdl_
_⫹⫺${prefix}ytsearch_
_⫹⫺${prefix}mediafire [ Link ]_

`
sendButLocation(from, `${menu}`, `${yes}Download Menu..${yes}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'BACK TO MENU🍁'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'asupan':
        if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

    *「 Asupann Menu 」*
    
_⫹⫺${prefix}cecan_
_⫹⫺${prefix}random_
_⫹⫺${prefix}ukhty_
_⫹⫺${prefix}santuy_
_⫹⫺${prefix}hijaber_
_⫹⫺${prefix}indonesia_
_⫹⫺${prefix}malaysia_
_⫹⫺${prefix}thailand_
_⫹⫺${prefix}vietnam_
_⫹⫺${prefix}china_
_⫹⫺${prefix}korea_
_⫹⫺${prefix}jepang_

`
sendButLocation(from, `${menu}`, `${yes}Asupan Menu..${yes}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'BACK TO MENU🍁'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'textprome':
        if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

    *「 TextProme Menu 」*
    
_⫹⫺${prefix}ninja teks | teks2_
_⫹⫺${prefix}joker teks | teks2_
_⫹⫺${prefix}neon_devil teks_
_⫹⫺${prefix}wolf_g teks | teks2_
_⫹⫺${prefix}lion teks | teks2_
_⫹⫺${prefix}Pornhub teks | teks2_
_⫹⫺${prefix}Horror teks | teks2_
_⫹⫺${prefix}Sketch teks_
_⫹⫺${prefix}Rainbow teks_
_⫹⫺${prefix}Demon teks_
_⫹⫺${prefix}Halloween teks_
_⫹⫺${prefix}Halloween2 teks | teks2_
_⫹⫺${prefix}Sircuit teks_
_⫹⫺${prefix}Discovery teks_
_⫹⫺${prefix}Skeleton teks_

`
sendButLocation(from, `${menu}`, `${yes}TextProme Menu..${yes}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'BACK TO MENU🍁'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'ephoto':
        if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

    *「 Ephoto Menu 」*
    
_⫹⫺${prefix}wetglass text_
_⫹⫺${prefix}multicolor3d text_
_⫹⫺${prefix}watercolor text_
_⫹⫺${prefix}luxurygold text_
_⫹⫺${prefix}galaxywallpaper text_
_⫹⫺${prefix}lighttext text_
_⫹⫺${prefix}beautifulflower text_
_⫹⫺${prefix}puppycute text_
_⫹⫺${prefix}royaltext text_
_⫹⫺${prefix}heartshaped text_
_⫹⫺${prefix}birthdaycake text_
_⫹⫺${prefix}galaxystyle text_
_⫹⫺${prefix}hologram3d text_
_⫹⫺${prefix}greenneon text_
_⫹⫺${prefix}glossychrome text_
_⫹⫺${prefix}greenbush text_
_⫹⫺${prefix}metallogo text_
_⫹⫺${prefix}noeltext text_
_⫹⫺${prefix}glittergold text_
_⫹⫺${prefix}textcake text_
_⫹⫺${prefix}starsnight text_
_⫹⫺${prefix}wooden3d text_
_⫹⫺${prefix}textbyname text_
_⫹⫺${prefix}writegalacy text_
_⫹⫺${prefix}galaxybat text_
_⫹⫺${prefix}snow3d text_
_⫹⫺${prefix}birthdayday text_
_⫹⫺${prefix}goldplaybutton text_
_⫹⫺${prefix}silverplaybutton text_
_⫹⫺${prefix}freefire text_

`
sendButLocation(from, `${menu}`, `${yes}Ephoto Menu..${yes}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'BACK TO MENU🍁'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'store':
        if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

    *「 Store Menu 」*
    
_⫹⫺${prefix}sewa_
_⫹⫺${prefix}sewabot_
_⫹⫺${prefix}rdp_
_⫹⫺${prefix}vps_
_⫹⫺${prefix}jasrun_

`
sendButLocation(from, `${menu}`, `${yes}Store Menu..${yes}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'BACK TO MENU🍁'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'funny':
        if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

    *「 Funny Menu 」*
    
_⫹⫺${prefix}togel_
_⫹⫺${prefix}cekwatak_
_⫹⫺${prefix}cekmati [nama]_
_⫹⫺${prefix}wangy [nama]_
_⫹⫺${prefix}toxic_
_⫹⫺${prefix}truth_
_⫹⫺${prefix}dare_
_⫹⫺${prefix}apakah_
_⫹⫺${prefix}bisakah_
_⫹⫺${prefix}kapankah_
_⫹⫺${prefix}memeindo_
_⫹⫺${prefix}cecan_
_⫹⫺${prefix}cogan_
_⫹⫺${prefix}darkjoke_
_⫹⫺${prefix}rate_
_⫹⫺${prefix}bay_
_⫹⫺${prefix}selamatdatang_
_⫹⫺${prefix}jadian_
_⫹⫺${prefix}cantik_
_⫹⫺${prefix}ganteng_
_⫹⫺${prefix}hobby_
_⫹⫺${prefix}beban_
_⫹⫺${prefix}babi_
_⫹⫺${prefix}cekganteng_
_⫹⫺${prefix}cekcantik_

`
sendButLocation(from, `${menu}`, `${yes}Funny Menu..${yes}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'BACK TO MENU🍁'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'soundd':
        if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

    *「 Sound Menu 」*
    
_⫹⫺${prefix}sound1_
_⫹⫺${prefix}sound2_
_⫹⫺${prefix}sound3_
_⫹⫺${prefix}sound4_
_⫹⫺${prefix}sound5_
_⫹⫺${prefix}sound6_
_⫹⫺${prefix}sound7_
_⫹⫺${prefix}sound8_
_⫹⫺${prefix}sound9_
_⫹⫺${prefix}sound10_
_⫹⫺${prefix}sound11_
_⫹⫺${prefix}sound12_
_⫹⫺${prefix}sound13_
_⫹⫺${prefix}sound14_
_⫹⫺${prefix}sound15_
_⫹⫺${prefix}sound16_
_⫹⫺${prefix}sound17_
_⫹⫺${prefix}sound18_
_⫹⫺${prefix}sound19_
_⫹⫺${prefix}sound20_
_⫹⫺${prefix}sound21_
_⫹⫺${prefix}sound22_
_⫹⫺${prefix}sound23_
_⫹⫺${prefix}sound24_
_⫹⫺${prefix}sound25_
_⫹⫺${prefix}sound26_
_⫹⫺${prefix}sound27_
_⫹⫺${prefix}sound28_
_⫹⫺${prefix}sound29_
_⫹⫺${prefix}sound30_
_⫹⫺${prefix}sound31
_⫹⫺${prefix}sound32
_⫹⫺${prefix}sound33
_⫹⫺${prefix}sound34
_⫹⫺${prefix}sound35
_⫹⫺${prefix}sound36
_⫹⫺${prefix}sound37
_⫹⫺${prefix}sound38
_⫹⫺${prefix}sound39
_⫹⫺${prefix}sound40
_⫹⫺${prefix}sound41
_⫹⫺${prefix}sound42
_⫹⫺${prefix}sound43
_⫹⫺${prefix}sound44
_⫹⫺${prefix}sound45
_⫹⫺${prefix}sound46
_⫹⫺${prefix}sound47
_⫹⫺${prefix}sound48
_⫹⫺${prefix}sound49
_⫹⫺${prefix}sound50
_⫹⫺${prefix}sound51
_⫹⫺${prefix}sound52
_⫹⫺${prefix}sound53
_⫹⫺${prefix}sound54
_⫹⫺${prefix}sound56
_⫹⫺${prefix}sound57
_⫹⫺${prefix}sound58
_⫹⫺${prefix}sound59
_⫹⫺${prefix}sound60
_⫹⫺${prefix}sound61
_⫹⫺${prefix}sound62
_⫹⫺${prefix}sound63
_⫹⫺${prefix}sound64
_⫹⫺${prefix}sound65
_⫹⫺${prefix}sound66
_⫹⫺${prefix}sound67
_⫹⫺${prefix}sound68
_⫹⫺${prefix}sound69
_⫹⫺${prefix}sound70
_⫹⫺${prefix}sound71
_⫹⫺${prefix}sound72_
_⫹⫺${prefix}sound73_
_⫹⫺${prefix}sound74_
_⫹⫺${prefix}sound75_

`
sendButLocation(from, `${menu}`, `${yes}Sound Menu..${yes}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'BACK TO MENU🍁'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'dosaa':
        if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

    *「 Dosa Menu 」*
    
_⫹⫺${prefix}dosa1_
_⫹⫺${prefix}dosa2_
_⫹⫺${prefix}dosa3_
_⫹⫺${prefix}dosa4_
_⫹⫺${prefix}dosa5_
_⫹⫺${prefix}dosa6_
_⫹⫺${prefix}dosa7_
_⫹⫺${prefix}dosa8_
_⫹⫺${prefix}dosa9_
_⫹⫺${prefix}dosa10_
_⫹⫺${prefix}dosa11_
_⫹⫺${prefix}dosa12_
_⫹⫺${prefix}dosa13_
_⫹⫺${prefix}dosa14_
_⫹⫺${prefix}dosa15_
_⫹⫺${prefix}dosa16_
_⫹⫺${prefix}dosa17_
_⫹⫺${prefix}dosa18_
_⫹⫺${prefix}dosa19_
_⫹⫺${prefix}dosa20_
_⫹⫺${prefix}dosa21_
_⫹⫺${prefix}dosa22_
_⫹⫺${prefix}dosa23_
_⫹⫺${prefix}dosa24_

`
sendButLocation(from, `${menu}`, `${yes}Dosa Menu..${yes}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'BACK TO MENU🍁'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'menu':
        case 'help':
        if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
        ptod = "6282138919347@s.whatsapp.net"
        var groups = helga.chats.array.filter(v => v.jid.endsWith('g.us'))
	    var privat = helga.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
		uptime = process.uptime();
		const timestampu = speed();
		const totalChat = await helga.chats.all()
		const latensi = speed() - timestampu
		var total = math(`${groups.length} ${privat.length}`)
        runtime = process.uptime()
        stod = `${sender}`
        uwu = '```'
        stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu Bot

*❍⃝⃘۪۪۪👤YourName* : *${pushname}*
*❍⃝⃘۪۪۪🔑Title* : *${isOwner ? 'Owner' : 'User'}*
*❍⃝⃘۪۪۪👑Creator* : *@${NomorOwner}*
*❍⃝⃘۪۪۪📨MyEmail* : *${settings.Mail}*
*❍⃝⃘۪۪۪❔Prefix* : *『 ${prefix} 』*
*❍⃝⃘۪۪۪📌Online* : *${waktu(runtime)}*
*❍⃝⃘۪۪۪⏱️Ping* : *${latensi.toFixed(4)} Second*
*❍⃝⃘۪۪۪🔋Baterai*  : *${baterai.battery}*
*❍⃝⃘۪۪۪📣GroupChat* : *${groups.length}*
*❍⃝⃘۪۪۪💬PrivateChat* : *${privat.length}*             
*❍⃝⃘۪۪۪⏳ChatTotal* : *${totalChat.length}*
*❍⃝⃘۪۪۪🖥Platform* : *${os.platform()}*

`
sendButDocument(from, `${menu}`, "Base : Helga\nBase Ini Sedang Dalam Tahap Pengembangan, Gunakan Bot Dengan Sebaik Mungkin!", fs.readFileSync('./helga.jpg'), {mimetype:Mimetype.pdf, thumbnail:ofrply, filename:`𝚉𝚞𝚔𝚊𝙲𝚑𝚊𝚗 𝚅3.0.0`}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'Menu 🎋'},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'Author 🍁'},type:1},{buttonId:`${prefix}gcbot`,buttonText:{displayText:'Group Bot 🎉'},type:1}], {quoted:fmen, contextInfo: { mentionedJid: [dtod,otod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`𝚉𝚞𝚔𝚊𝙱𝚘𝚝𝚝 𝙼𝚊𝚍𝚎 𝙱𝚢 𝙷𝚎𝚕𝚐𝚊`,body:`𝙼𝚊𝚍𝚎 𝙱𝚢 𝙷𝚎𝚕𝚐𝚊`,mediaType:"2",thumbnail:ofrply,mediaUrl:`https://youtu.be/bF7K7KL7dVY`}}})
break
case 'bugreport':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              helga.sendMessage('6281398860278@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
              case 'verify':
if (isRegistered) return reply(mess.success)
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const jancok = `    Verify Sukses
	         
- Nama : ${pushname}
- Nomor : @${sender.split('@')[0]}
- Seri: ${serialUser}
- Pengguna: ${_registered.length}
`
gbutsan = [
{buttonId:`owner`,buttonText:{displayText:'OWNER'},type:1},
]
mhan = await helga.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const sendBtnVeryy = {
imageMessage: mhan.message.imageMessage,
contentText:`${jancok}`,
footerText:'Terimakasih Sudah Mendaftar\n*ZukaBase*', 
buttons: gbutsan,
headerType: 4
}
helga.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
	         console.log(color('[Verify]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'Red'), 'in', color(sender || groupName))
	    // console.log(e)
        break   
    
     
       //── 「 Maker Fitur 」 ──//       
        
case 'neon':
                if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
                if (!arg) return reply(from, `Penggunaan ${prefix}neon Helga`, mek)
				sendMediaURL(from, `https://api-helgazex.herokuapp.com/api/textpro/neon?text=${arg}&apikey=${HelKey}`)
				break
case 'graffiti':
                if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
                if (!arg) return reply(from, `Penggunaan ${prefix}graffiti Helga Ganz`, mek)
				sendMediaURL(from, `https://api-helgazex.herokuapp.com/api/textpro/graffiti?text=${arg}&text2=Ganz&apikey=${HelKey}`)
				break			
case 'joker':
                if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
                if (!arg) return reply(from, `Penggunaan ${prefix}neon Helga`, mek)
				sendMediaURL(from, `https://api-helgazex.herokuapp.com/api/textpro/joker?text=${arg}&apikey=${HelKey}`)
				break
case 'blackpink':
                if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
                if (!arg) return reply(from, `Penggunaan ${prefix}neon Helga`, mek)
				sendMediaURL(from, `https://api-helgazex.herokuapp.com/api/textpro/blackpink?text=${arg}&apikey=${HelKey}`)
				break   
case 'logo':
                if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Helga Store`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api-helgazex.herokuapp.com/api/canvas/gfx3?text=${txt1}&text2=${txt2}&apikey=${HelKey}`).then((gambar) => {
                        helga.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Nih Kak!\nSubscribe YT Helga Zexs`, quoted : ftrol})
                    })
                    break
                    				
case 'logo1':
                if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Helga`)
                    txt1 = args[0]
                    getBuffer(`https://api-helgazex.herokuapp.com/api/canvas/gfx1?text=${txt1}&apikey=${HelKey}`).then((gambar) => {
                        helga.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Nih Kak!\nSubscribe YT Helga Zexs`, quoted : ftrol})
                    })
                    break		
                    		
case '3d':
                if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Zuka Chan`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api-helgazex.herokuapp.com/api/textpro/3d?text=${txt1}%${txt2}&apikey=${HelKey}`).then((gambar) => {
                        helga.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Nih Kak!\nSubscribe YT Helga Zexs`, quoted : ftrol})
                    })
                    break               
case 'matrix':
                if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Helga`)
                    txt1 = args[0]
                    getBuffer(`https://api-helgazex.herokuapp.com/api/textpro/matrix?text=${txt1}&apikey=${HelKey}`).then((gambar) => {
                        helga.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Nih Kak!\nSubscribe YT Helga Zexs`, quoted : ftrol})
                    })
                    break               
case 'harrypoter':
                if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Zuka Chan`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api-helgazex.herokuapp.com/api/textpro/harry?text=${txt1}%20${txt2}&apikey=${HelKey}`).then((gambar) => {
                        helga.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Nih Kak!\nSubscribe YT Helga Zexs`, quoted : ftrol})
                    })
                    break     

                    
                                        
    //── 「 Text Prome 」 ──//                                                                                    
                              
case 'pornhub':
            case 'halloween':
            case 'rainbow':
            case 'demon':
            case 'halloween2':
            case 'horror':
            case 'sketch':
            case 'sircuit':
            case 'discovery':
            case 'magma':
            case 'skeleton':
            case 'neon_devil':
            case 'lion':
            case 'ninja':
            case 'wolf_g':
            if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
            reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Helga`)
                    txt1 = args[0]
                    txt2 = args[1]
                 buff = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?text=${txt1}&text2=${txt2}&apikey=Alphabot`)
                          buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: `BACK TO MENU🐣`},type:1}]
              imageMsg = (await helga.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'𝚉𝚞𝚔𝚊𝙲𝚑𝚊𝚗 𝚅3.0.0', imageMessage: imageMsg,
              contentText:`𝚉𝚞𝚔𝚊𝙱𝚘𝚝𝚝 𝙼𝚊𝚍𝚎 𝙱𝚢 𝙷𝚎𝚕𝚐𝚊`,buttons,headerType:4}
              prep = await helga.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              helga.relayWAMessage(prep)
              break                   
              
              case 'wetglass':

                case 'multicolor3d':

                case 'watercolor':

                case 'luxurygold':

                case 'galaxywallpaper':

                case 'lighttext':

                case 'beautifulflower':

                case 'puppycute':

                case 'royaltext':

                case 'heartshaped':

                case 'birthdaycake':

                case 'galaxystyle':

                case 'hologram3d':

                case 'greenneon':

                case 'glossychrome':

                case 'greenbush':

                case 'metallogo':

                case 'noeltext':

                case 'glittergold':

                case 'textcake':

                case 'starsnight':

                case 'wooden3d':

                case 'textbyname':

                case 'writegalacy':

                case 'galaxybat':

                case 'snow3d':

                case 'birthdayday':

                case 'goldplaybutton':

                case 'silverplaybutton':

                case 'freefire':
                
              if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Zuka Chan`)
                    txt1 = args[0]
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${settings.lolkey}&text=${txt1}`).then((gambar) => {
                        helga.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Nih Kak!\nSubscribe YT Helga Zexs`, quoted : ftrol})
                    })
                    break       
                    
                                                     
                case 'quotes':
  
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${settings.lolkey}`)
                    quotes = quotes.result
                    heltod = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*â€• ${heltod}*`)
                    break
                case 'quotesanime':

   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${settings.lolkey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*• ${char}*\n*• ${anime} ${episode}*`)
                    break
                case 'quotesdilan':

   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/diLan?apikey=${settings.lolkey}`)
                     reply(get_result.result)

                   break
                    break
                case 'quotesimage':
  
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
                    get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${settings.lolkey}`)
                    await helga.sendMessage(from, get_result, image)
                    break
                case 'faktaunik':

                case 'katabijak':

                case 'pantun':

                case 'bucin':
   
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${settings.lolkey}`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },]);
        break;
                    break
                case 'quotesislami':
  
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${settings.lolkey}`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },]);
break                               
               case 'randomnama':
   
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${settings.lolkey}`)
                    helga = anu.result
                   sendButMessage(from, helga, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },]);
                    break         
               case 'hoax':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${settings.lolkey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break                                                     
                                                   
               
                             
    //── 「 Asupan 」 ──//                                                                                    
                              
case 'cecan':
            case 'hijaber':
            case 'indonesia':
            case 'malaysia':
            case 'thailand':
            case 'vietnam':
            case 'china':
            case 'korea':
            case 'jepang':
            if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
            reply (mess.wait)
                 buff = await getBuffer(`https://api.zacros.my.id/asupan/${command}`)
                          buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: `BACK TO MENU🐣`},type:1}]
              imageMsg = (await helga.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'𝚉𝚞𝚔𝚊𝙲𝚑𝚊𝚗 𝚅3.0.0', imageMessage: imageMsg,
              contentText:`Nih Kak!\nJangan Lupa Subscribe YT Helga Zexs`,buttons,headerType:4}
              prep = await helga.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              helga.relayWAMessage(prep)
              break                                           
                                                                                                                               
                                                                                                                 
    //── 「 Nsfw 」 ──//        
        
case  'awoo':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
helga.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./helga.jpg'), caption: "Nih Kak!\nSubscribe YT Helga Zexs"})
break
case  'blowjob':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
helga.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./helga.jpg'), caption: "Nih Kak!\nSubscribe YT Helga Zexs"})
break
case  'hentai': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
helga.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./helga.jpg'), caption: "Nih Kak!\nSubscribe YT Helga Zexs"})
break
case  'megumin':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
helga.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./helga.jpg'), caption: "Nih Kak!\nSubscribe YT Helga Zexs"})
break
case  'neko':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
helga.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./helga.jpg'), caption: "Nih Kak!\nSubscribe YT Helga Zexs"})
break 
case  'trapnime':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
helga.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./helga.jpg'), caption: "Nih Kak!\nSubscribe YT Helga Zexs"})
break
case 'nsfw':
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Sudah Aktif Kak')
						nsfww.push(from)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses mengaktifkan fitur nsfw')
						helga.sendMessage(from, `𝚉𝚞𝚔𝚊𝙲𝚑𝚊𝚗 𝚅3.0.0`, text)
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return reply('Sudah Mati Kak')
						var ini = nsfww.indexOf(from)
						nsfww.splice(ini, 1)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses menonaktifkan fitur nsfw')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
			case 'random':
			case 'ukhty':
            case 'santuy':
  if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
reply(`Tunggu Kak!`)
asu = await getBuffer(`https://api.zacros.my.id/asupan/${command}`)
helga.sendMessage(from, asu, video, { quoted: mek, caption: "Nih Kak!\nSubscribe YT Helga Zexs"})
break
case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
       if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = ( await helga.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync('./helga.jpg')})).message.imageMessage
              buttonsMessage = {footerText:'𝚉𝚞𝚔𝚊𝙲𝚑𝚊𝚗 𝚅3.0.0', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await helga.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              helga.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
     case 'dosa1':

				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
				   case 'dosa2':

				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
				   case 'dosa3':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
				   case 'dosa4':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
				   case 'dosa5':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
				   case 'dosa6':

				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
                   case 'dosa7':

                   
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
		           case 'dosa8':
	
		        
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
				   case 'dosa10':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
				   case 'dosa11':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
				   case 'dosa12':
	
			    
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
				   case 'dosa13':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
				   case 'dosa14':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
	               case 'dosa15':

	          
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
    	           case 'dosa16':

               
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
				   case 'dosa17':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
				   case 'dosa18':

				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
				   case 'dosa19':
				 
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
				   case 'dosa20':
			
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
				   case 'dosa21':
				 
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
				   case 'dosa22':
		
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
				   case 'dosa23':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
				   case 'dosa24':
				 
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   helga.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break         
              
              
        //── 「 Owner Menu 」 ──//          
              
              case 'setmenu':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if(args[0] == 'ori'){
menusimpel = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menusimpel = false
reply('Sucsess')
}else if (!c) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: 'setmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setmenu simpel', buttonText: {displayText: 'SIMPEL'}, type: 1}]
const skuygelud = {
    contentText: `${anu}`,
    footerText: '*©Helga Zex*',
    buttons: buttons,
    headerType: 1
}
await helga.sendMessage(from, skuygelud, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'setallmenu':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if(args[0] == 'ori'){
menuall = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menuall = false
reply('Sucsess')
}else if (!c) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: 'setallmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setallmenu simpel', buttonText: {displayText: 'SIMPEL'}, type: 1}]
const skuygf = {
    contentText: `${anu}`,
    footerText: '*𝚉𝚞𝚔𝚊𝙲𝚑𝚊𝚗 𝚅3.0.0*',
    buttons: buttons,
    headerType: 1
}
await helga.sendMessage(from, skuygf, MessageType.buttonsMessage, {quoted: ftrol})
}
break
//Sampai sini
case 'jadibot':
if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
menu = `Enak aja lu mau numpang sewa lah :v`
katalog(menu)
sendButLocation(from, `Hai ${pushname} ☺️`, "*_© 𝙰𝚢𝚊𝚊 𝚅2.ೃ࿐_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}sewa`,buttonText:{displayText:'SEWA 🎟️'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'stopjadibot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
try {
reply('Oke')
fs.unlinkSync(`./sampah/${sender}.json`)
client.close()
} catch {
reply('Oke')
client.close()
}
break
case 'owner':
	case 'creator':
case 'developer':
		case 'author':
let ini_list = []
for (let i of ownerNumber) {
const vname = helga.contacts[i] != undefined ? helga.contacts[i].vname || helga.contacts[i].notify : undefined
ini_list.push({
"displayName": `Author ${NamaBot}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;𝐇𝐞𝐥𝐠𝐚 𝐙𝐞𝐱!;;;\nFN:${vname ? `${vname}` : `${helga.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
helga.sendMessage(from, {
"displayName": `Developer ${NamaBot}`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
break
case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Berhasil!")
} else {
reply('tag stickenya!')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Berhasil!")
break
case 'listcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `\`\`\`「 LIST CMD STIC 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*❏ ID :* ${i.id}\n*❏ Cmd :* ${i.chats}`
}
reply(teksnyee)
break

    //── 「 Download Menu 」 ──//

case 'ig':
case 'igdl':
case 'instagram':
if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
if (!c) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
                    case 'pinterest':
if (!q) return reply("")
pint = await pinterest (q)
helga.sendMessage(from, {url: `${pint[Math.floor(Math.random() * pint.length)]}`}, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: "Nih Kak!\nSubscribe YT Helga Zexs"})
break
case 'ssweb':
case 'ss':
             if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
             if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
             reply(mess.wait)
             ini_link = args[0]
             buff = await getBuffer(`http://hadi-api.herokuapp.com/api/ssweb?url=${ini_link}?&device=desktop&full=off`)
             buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await helga.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'𝚉𝚞𝚔𝚊𝙲𝚑𝚊𝚗 𝚅3.0.0', imageMessage: imageMsg,
              contentText:`Nih Kak!\nJangan Lupa Subscribe YT Helga Zex!`,buttons,headerType:4}
              prep = await helga.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              helga.relayWAMessage(prep)
              break
                    case 'tiktokdl': 
       case 'ttdl':
     case 'tiktok':
        case 'ttnowm': 
      case 'tiktoknowm':
             
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok.com')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break
case 'google':

   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
              if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f307ca1dc9824ae89caa976435c03178&url=http://www.google.com/search?q=${q}&oq={q}&aqs=chrome..69i57j0i433i512l2j0i512l2.858j0j4&client=ms-android-oppo&sourceid=chrome-mobile&ie=UTF-8`)
              reply(mess.wait)
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              ggs({ 'query':
 q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
} 
               helga.sendMessage(from, ss, image, {thumbnail: Buffer.alloc(0), caption: vars, quoted : ftrol})
               }).catch(e => {
               console.log(e)
               reply(`${e}`)
})
               break
        case 'mediafire':
        
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
               if (!isPremium) return reply(mess.only.premium)
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               reply(mess.wait)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`◧ Nama : ${res[0].nama}\`\`\`
\`\`\`◧ Ukuran : ${res[0].size}\`\`\`
\`\`\`◧ Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: ftrol})
             break
                case 'antidelete':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
           if (c === 'on'){
             antidelete = false
                    reply(`Berhasil mengaktifkan antidelete`)
                } else if (c === 'off'){
                    antidelete = true
                    reply(`Berhasil menonaktifkan antidelete`)
                } else if (!c) {
                    anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
const buttons = [{buttonId: 'antideletee on', buttonText: {displayText: 'ON✔️'}, type: 1},{buttonId: 'antideletee off', buttonText: {displayText: 'OFF✖️'}, type: 1}]
const buttonMessage = {
    contentText: `${anu}`,
    footerText: '*𝚉𝚞𝚔𝚊𝙲𝚑𝚊𝚗 𝚅3.0.0*',
    buttons: buttons,
    headerType: 1
}
await helga.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: ftrol})
                }
                break
                
                
    //── 「 Random Menu 」 ──//                
                
               case 'cerpen':  
if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
anu = await fetchJson(`https://api-helgazex.herokuapp.com/api/cerpen?apikey=${HelKey}`)
anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
reply(anu1)
break 
case 'kece':
case 'aesthetic':
                if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				sendMediaURL(from, `https://api-helgazex.herokuapp.com/api/aesthetic?apikey=${HelKey}`)
				break
case 'quotes':
            ini_result = await fetchJson('https://api-helgazex.herokuapp.com/api/quotes?apikey=${HelKey}')
     get_result = ini_result.result
        ini_txt = `*Helga Berkata*\n\n`
       ini_txt += `~${get_result.quotes}`
     reply(ini_txt)
     break
case 'fakta':
            ini_result = await fetchJson('https://api-helgazex.herokuapp.com/api/fakta?apikey=${HelKey}')
     get_result = ini_result.result
        ini_txt = `*Helga Berkata*\n\n`
       ini_txt += `~${get_result}`
     reply(ini_txt)
     break
case 'cersex':
            ini_result = await fetchJson('https://api-helgazex.herokuapp.com/api/cersex?apikey=${HelKey}')
     get_result = ini_result.result
        ini_txt = `*Helga*\n\n`
       ini_txt += `~${get_result.cersex}`
     reply(ini_txt)
     break          		
case 'darkjoke':
 
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
		    buff = await getBuffer(`https://lolhuman.xyz/api/meme/darkjoke?apikey=${settings.lolkey}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await helga.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'𝚉𝚞𝚔𝚊𝙱𝚘𝚝𝚝 𝙼𝚊𝚍𝚎 𝙱𝚢 𝙷𝚎𝚕𝚐𝚊', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await helga.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              helga.relayWAMessage(prep)
    
break
case 'memekertas':
                if (!isRegistered) return reply(`daftar dlu om ketik .verify`)
if (!c) return reply('Textnya Mana Kaka?')
reply(`Tunggu Kak!`)
kon = (`https://api.lolhuman.xyz/api/meme1?apikey=${settings.lolkey}&text=${c}`)
anu = await getBuffer(kon)
helga.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./helga.jpg'), caption : "Nih Kak!\nSubscribe YT Helga Zexs!"})
break
case 'memeindo':
   
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
		    buff = await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${settings.lolkey}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await helga.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'𝚉𝚞𝚔𝚊𝙱𝚘𝚝𝚝 𝙼𝚊𝚍𝚎 𝙱𝚢 𝙷𝚎𝚕𝚐𝚊', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await helga.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              helga.relayWAMessage(prep)
    
break     		
case 'ppcp':

              case 'ppcouple':
              
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
               anu = await fetchJson(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${settings.lolkey}`)
			buff1 = await getBuffer(anu.result.male)
			buttons = [{buttonId: `!ytowner`,buttonText:{displayText: `Helga Ganteng`},type:1}]
              imageMsg = (await helga.prepareMessageMedia(buff1, "imageMessage", { thumbnail: buff1, })).imageMessage
              buttonsMessage = {footerText:'𝚉𝚞𝚔𝚊𝙱𝚘𝚝𝚝 𝙼𝚊𝚍𝚎 𝙱𝚢 𝙷𝚎𝚕𝚐𝚊', imageMessage: imageMsg,
              contentText:`COWO`,buttons,headerType:4}
              prep = await helga.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              helga.relayWAMessage(prep)
              buff2 = await getBuffer(anu.result.female)
              buttons = [{buttonId: `!ytowner`,buttonText:{displayText: `Helga Ganteng`},type:1}]
              imageMsg = (await helga.prepareMessageMedia(buff2, "imageMessage", { thumbnail: buff2, })).imageMessage
              buttonsMessage = {footerText:'𝚉𝚞𝚔𝚊𝙱𝚘𝚝𝚝 𝙼𝚊𝚍𝚎 𝙱𝚢 𝙷𝚎𝚕𝚐𝚊', imageMessage: imageMsg,
              contentText:`CEWE`,buttons,headerType:4}
              prep = await helga.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
             setTimeout( async () => {
 helga.relayWAMessage(prep)
}, 5000)
break

case 'wangy':

              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
       /*case 'mining':

              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              break*/
       case 'waktu':

              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
       case 'cekmati':

              if (!q) return reply(`Invalid!`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
       case 'togel':

              reply(mess.wait)
              try {
              dataplai = await axios.get(`https://api.vhtear.com/togel&apikey=${settings.vhtearkey}`)
              dataplay = dataplai.data.result
              let tomgel = `*Huzzzzz*\n`
              for (let i = 0; i < dataplay.hasil.length; i++) {
              tomgel += `\n═════════════════\n\n*Negara* : ${dataplay.hasil[i].Negara}\n*Result* : ${dataplay.hasil[i].Senin}\n*Result* : ${dataplay.hasil[i].Selasa}\n*Result* : ${dataplay.hasil[i].Rabu}\n*Result* : ${dataplay.hasil[i].Kamis}\n*Result* : ${dataplay.hasil[i].Jumat}\n*Result* : ${dataplay.hasil[i].Sabtu}\n*Result* : ${dataplay.hasil[i].Minggu}\n`
}
              sendText(from, tomgel)
              } catch (err) {
              console.log(err)
}
              break
       case 'toxic':

              Toxic().then(toxic => {
              reply (toxic)
})
              break
       case 'apakah':

              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              helga.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: ftrol })
              break
       case 'rate':

       case 'nilai':

              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              helga.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: ftrol })
              break
      case 'bay':

      reply('sayonara kak')
      break
      case 'selamatdatang':

      reply('welcome kak')
       case 'gantengcek':

       case 'cekganteng':

              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              helga.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: ftrol })
              break
       case 'cantikcek':

       case 'cekcantik':


   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              helga.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: ftrol })
              break
       case 'cekwatak':

   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
              var namao = pushname
              var prfx = await helga.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colzak','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨ ]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':

    
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              helga.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: ftrol })
              break
       case 'bisakah':

    
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              helga.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: ftrol })
              break
       case 'kapankah':

    
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              helga.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: ftrol })
              break
       case 'truth':

    
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              helga.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: ftrol })
              break
       case 'dare':
       
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await helga.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Make Iya Donate Kagak🔗', imageMessage: imageMsg,
              contentText:'*Dare*\n\n'+ der,buttons,headerType:4}
              prep = await helga.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              helga.relayWAMessage(prep)
              break		
       case 'jadian':

   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
   
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
 
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
   
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
  
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
              
      case 'wasted':
  if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					//sticWait(from)
					owgi = await  helga.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					helga.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'pelangi':
		case 'rainbow':
  if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					//sticWait(from)
					owgi = await  helga.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					helga.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
case 'mulaiabsen':
if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (fs.existsSync(`./database/${from}.json`)) {
						reply(`Sesi absen sudah dimulai sebelumnya\n*${prefix}cekabsen* - untuk melihat list absen`)
					} else {
						var seeData = fs.readdirSync('./database/');
						var listed = []
						var expAbsen = moment().add(Number('30'), "minutes").unix();
						for (let i in seeData) {
							listed.push(seeData[i].replace(".json", ""));
						}
						if (!listed.includes(from)) {
							const objekAbsen = {
								status: true,
								expired_on: expAbsen,
								pushabsen: [],
							}
							fs.writeFile(`./database/${from}.json`, JSON.stringify(objekAbsen, null, 2),
							(e) => {
								if (e) return console.log(e);
								reply(`Absensi tanggal: *${calender}*\n\nKetik *hadir/izin/sakit*\n*${prefix}cekabsen* - untuk melihat list absensi\n*${prefix}hapusabsen* - untuk menghapus sesi absen\n\n(n) Waktu absensi 30 menit!`)
							})
						}
					}
					break        
case 'cekabsen':
				case 'listabsen':
				if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (fs.existsSync(`./database/${from}.json`)) {
						var db_absen = JSON.parse(fs.readFileSync(`./database/${from}.json`));
						numberAbs = 1
						teks = `Absen sekolah tanggal *${calender}*\nTotal Yang Absen: ${db_absen.pushabsen.length}\n\n`
						for (let i = 0; i < db_absen.pushabsen.length; i++) {
							teks += `*${numberAbs++}.* ${db_absen.pushabsen[i].name} ( *${db_absen.pushabsen[i].kehadiran}* )\n`
						}
						reply(`${teks}\n_Silahkan ketik *hadir/izin/sakit*_\nWaktu Absensi Sampai : ${moment(db_absen.expired_on * 1000).format('HH:mm:ss')} WIB`)
					} else {
						reply('Tidak ada sesi absen yang berlangsung!')
					}
					break		
					
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound70':
omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
helga.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
break
case 'sound71':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
omkeh = await getBuffer(`https://ojankyaa.000webhostapp.com/sound/${command}.mp3`)
helga.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
    break											
                
                case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
      if (args.length < 1) return reply(`Contoh ${prefix + command} multi/nopref`)
           if (c === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`Berhasil mengubah prefix ke ${c}`)
					}
					break
        case 'test':
				case 'cek':
				case 'tes':
if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				runtime = process.uptime()
				reply(`- Active Maszeh!\n${waktu(runtime)}`)
				break
case 'mode':
buttonss = [{buttonId: `public`, buttonText: {displayText: 'PUBLIC👥'}, type: 1},{buttonId: `self`, buttonText: {displayText: 'SELF👤'}, type: 1}]
const buMess = {
    contentText: "SELF/PUBLIC",
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await helga.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: ftrol})
break
				case 'public':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			publik = true
				reply('Sukses mengubah mode self ke public')
			break
			case 'self':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				publik = false
				reply('Sukses mengubah mode public ke self')
			break
				case 'antiwame':
				if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'on') {
						if (isAntiWame) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur 4')
						helga.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti wa.me\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiWame) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antiwame')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antiwame off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antiwame on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*_𝚉𝚞𝚔𝚊𝙲𝚑𝚊𝚗 𝚅3.0.0*',
    buttons: punten,
    headerType: 1
}
await helga.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
				 case 'antilink':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						helga.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antilink off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antilink on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*𝚉𝚞𝚔𝚊𝙲𝚑𝚊𝚗 𝚅3.0.0*',
    buttons: punten,
    headerType: 1
}
await helga.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break 
				case 'demote':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			demote = mek.message.extendedTextMessage.contextInfo.participant
		    helga.groupDemoteAdmin(from, [demote])
						reply('Sukses demote admin')
						break
					case 'promote':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			promote = mek.message.extendedTextMessage.contextInfo.participant
		    helga.groupMakeAdmin(from, [promote])
						reply('Sukses promote member')
						break
				case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await helga.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					helga.sendMessage(from, yeh, text, { quoted: mek })
					break
					case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          json = ['action', 'inviteReset', from]
         helga.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
case 'gc': case 'group':
buttonss = [{buttonId: `opengc`, buttonText: {displayText: 'OPEN'}, type: 1},{buttonId: `closegc`, buttonText: {displayText: 'CLOSE'}, type: 1}]
const bMess = {
    contentText: 'OPEN/CLOSE\n\nGroup',
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await helga.sendMessage(from, bMess, MessageType.buttonsMessage, {quoted: ftrol})
break
					case 'opengc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   reply(`Sukses membuka grup ${groupName}`)
						helga.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegc':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						reply(`Sukses menutup grup ${groupName}`)
						helga.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
				case 'demoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                helga.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                helga.groupMakeAdmin(from, members_id)
                break
				case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				helga.updatePresence(from, Presence.composing)
				helga.groupLeave(from)
						break
				case 'bc':
					helga.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Teksnya?')
					anu = await helga.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await helga.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							helga.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await helga.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							helga.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await helga.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							helga.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							//sendMess(_.jid, `${body.slice(4)}`)
buttons = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `sewa`, buttonText: {displayText: 'SEWA BOT'}, type: 1}]
const btnbc = {
    contentText: `${body.slice(4)}`,
    footerText: '*𝚉𝚞𝚔𝚊𝙲𝚑𝚊𝚗 𝚅3.0.0*',
    buttons: buttons,
    headerType: 1
}
await helga.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
				case 'ttp4':  
				case 'ttp2':  
				case 'ttp3':  
				case 'ttp':  
				case 'attp':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp ZukaChan`)
					atetepe = await getBuffer(`https://hardianto.xyz/api/ttpcustom?text=${encodeURIComponent(c)}&color=black&apikey=hardianto`)
					helga.sendMessage(from, atetepe, sticker, { quoted: mek })
					break             
            case 'hidetag':
            if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break
                case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
                case 'play':
				  if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
		 if (!q) return reply('Linknya?')
			 let query = args.join(" ")
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 *🎄Judul :* ${res.all[0].title}
 *🎉ID Video :* ${res.all[0].videoId}
 *🎋Diupload Pada :* ${res.all[0].ago}
 *🗺Views :* ${res.all[0].views}
 *📻Durasi :* ${res.all[0].timestamp}
 *⛽Channel :* ${res.all[0].author.name}
 *🔗Link Video :* ${res.all[0].url}

*Pilih Media Yang Akan Di Download*
`
buttons = [{buttonId:`.ytmp3 ${res.all[0].url}`,buttonText:{displayText:'🎵AUDIO'},type:1},{buttonId:`ytmp4 ${res.all[0].url}`,buttonText:{displayText:'MP4📰'},type:1}]

imageMessage = (await helga.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await helga.prepareMessageFromContent(from,{buttonsMessage},{})

helga.relayWAMessage(prep)
break
case 'play2':
   
if (isMuted) return    
   if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				helga.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted: ftrol, caption: 'Nih Gan'})
					break
case 'ytmp3':
if (!q)return reply(`Example : ${prefix + command} [Link]`)
ppec = await fetchJson(`https://api.zekais.com/ytmp4?url=${q}&apikey=zekais`)
ytt = `「 *YOUTUBE MP3* 」\n\n▢ *Judul :* ${ppec.title}\n▢ *Size : ${ppec.size}*\n▢ *Ext: Mp3*\n▢ *Like : ${ppec.likes}*\n▢ *Dislike : ${ppec.dislike}*\n▢ *Views : ${ppec.views}*\n▢ *Upload : ${ppec.uploadDate}*\n\n*[ Wait ]Tunggu Sebentar kak...*`
buff = await getBuffer(ppec.thumb)
reply(mess.wait)
helga.sendMessage(from, buff, image, {quoted: mek, caption: ytt})
sendMediaURL(from,ppec.result)
break 
case 'ytmp4':
if (!isGroup) return reply(mess.only.group) 
if (!q)return reply(`Example : ${prefix + command} [Link]`)

mp4 = await fetchJson(`https://api.zekais.com/ytmp4?url=${q}&apikey=zekais`)

ytt3 = `「 *YOUTUBE MP4* 」\n\n▢ *Judul :* ${mp4.title}\n▢ *Size : ${mp4.size}*\n▢ *Ext: Mp4*\n▢ *Quality : ${mp4.quality}*\n▢ *Like : ${mp4.likes}*\n▢ *Dislike : ${mp4.dislike}*\n▢ *Views : ${mp4.views}*\n▢ *Upload : ${mp4.uploadDate}*\n\n*[ Wait ]Tunggu Sebentar kak...*`

buff = await getBuffer(mp4.thumb)

reply(mess.wait)

helga.sendMessage(from, buff, image, {quoted: mek, caption: ytt3})
sendMediaURL(from,mp4.result,`「 *YOUTUBE MP4* 」\n▢ *Judul :* ${mp4.title}\n▢ *Size : ${mp4.size}*\n▢ *Ext: Mp4*\n▢ *Quality : ${mp4.quality}*`)

break                
						case 'ytsearch':
            
            if (!args.length) return reply('Judulnya apa kak?')
            try {
            	reply(`Tunggu Kak!`)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `* YOUTUBE SEARCH*
* Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
* Judul:* ${items[i].title}
* Id:* ${items[i].id}
* Ditonton:* ${items[i].views}
* Durasi:* ${items[i].duration}
* Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await helga.sendMessage(from, thumb, image, {quoted: ftrol, caption: `${hehe}───────────────\n
`, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdreply:{title:`SEARCH: ${args[0]}`,body:"YOUTUBE SEARCH",mediaType:"2",thumbnail:pporigi,mediaUrl:`https://youtu.be/JN_Gw2GzuqQ`}}})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break    
case 'tourl':

            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await helga.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break            
            
            
            
  //── 「 Store Menu 」 ──//                     
            
            
case 'sewabot':
case 'sewa':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				runtime = process.uptime()
				tod = '```'
				memek =`┏━━⬣ 𝐏𝐫𝐢𝐜𝐞 𝐋𝐢𝐬𝐭 𝐎𝐧𝐞✨
┃💌 : SEWA 5K/MINGGU
┃💌 : SEWA 10K/BLN
┃💌 : SEWA PERMANEN 25K
┗━━⬣

┏━━⬣ 𝐏𝐫𝐢𝐜𝐞 𝐋𝐢𝐬𝐭 𝐓𝐰𝐨🎋
┃💌 : JADI BOT 30K/BLN
┃💌 : JADI BOT + OWNER 35K
┃💌 : BUAT BELI APIKEY!
┗━━⬣

┏━━⬣ 𝐌𝐢𝐧𝐚𝐭?𝐂𝐡𝐚𝐭♨️
┃💌 : *SERING² DONASI✨*
┃💌 : ==============
┃💌 : wa.me/6281398860278
┃💌 : ==============
┃💌 : Instagram : _*@helga_store20*_
┃💌 : YouTube : _*Helga Zex's*_
┗━━⬣`
				sendButLocation(from, `${memek}`, `${tod}Subscribe Channel\nHelga Zex!!${tod}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Done 🌌'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
				break
case 'rdp':
case 'vps':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				runtime = process.uptime()
				tod = '```'
				memek =`Helga Store Promo only Rdp
OS All Windows!

Garansi 1 Bulan Pnuh!
Jika Tidak Melanggar TOS!

RAM • vCpu • SSD • NOM

2 GB | 1 vCpu | 136GB : 20K
4 GB | 2 vCpu | 136GB : 35K
8 GB | 4 vCpu | 136GB : 75K


List Vps By Helga Store

RAM • vCpu • SSD • NOM

1 GB | 1 vCpu | 136GB : 10K
2 GB | 1 vCpu | 136GB : 20K

Note : Free Peng Install An Google Chrome

Minat?Chat
https://wa.me/6281398860278`
				sendButLocation(from, `${memek}`, `Subscribe Channel\nHelga Zex!!`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Done 🌌'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
				break
case 'jasrun':
case 'jasarun':
case 'kebutuhanbot':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				runtime = process.uptime()
				tod = '```'
				memek =`https://chat.whatsapp.com/KnylQRBnBcMFtVVmMh2Nxx

˖ ݁ ˓ *Masuk Kak*
˖ ݁ ˓ *Open Jasa Run Bot Wa*
- Di Run Menggunakan 

> Vps
> Rdp

_Bisa Beli Script Bot WhatsApp Juga_`
				sendButLocation(from, `${memek}`, `Subscribe Channel\nHelga Zex!!`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Done 🌌'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
				break								            
case 'donate': 
       case 'donasi':
            gopeynya = 'https://e.top4top.io/p_21336v4de1.jpg'
            buff = await getBuffer(gopeynya)
            teksnya = `
DONASI OM\nSESUNGGUH NYA ORANG YANG MEMBERI LEBIH BAIK DARI MENERIMA ☝\n\nDana ️🎁: 081398860278\nOvo 🎊: 081398860278\nPulsa Tsel 📺: 082138919347\nPulsa Tsel 📺: 081398860278
`
  buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: `Owner👑`},type:1}]
              imageMsg = (await helga.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Ikhlas', imageMessage: imageMsg,
              contentText: teksnya,buttons,headerType:4}
              prep = await helga.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              helga.relayWAMessage(prep)
              break				
            
  //── 「 Pembatas 」 ──//               
            
            case 'exif':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
				case 'sticker':
					case 'stiker':
					case 's':
					if (!isRegistered) return reply(`Registrasi Dulu Kak Ketik .verify`)
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await helga.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											helga.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await helga.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											helga.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'stickerwm':
					case 'swm':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await helga.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											helga.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await helga.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											helga.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'takestick':
					case 'take':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
						if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await helga.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							helga.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
			case 'speed':
			case 'ping':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
					const timestampi = speed();
					const latensyi = speed() - timestampi
					reply(`Speed: ${latensyi.toFixed(4)} Second`)
					break
				case 'return':
				if (!isOwner) return reply(mess.only.ownerB)
					return helga.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
					if (err) return helga.sendMessage(from, `root @helga ilham:~ ${err}`, text, { quoted: mek })
                 break
                 case 'toimg':
				case 'tomedia':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await helga.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await helga.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							helga.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break
				case 'sticktag':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await helga.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				helga.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
			case 'runtime':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				runtime = process.uptime()
				tod = '```'
				memek =`Waktu Aktif Bot : ${waktu(runtime)}`
				sendButLocation(from, `${memek}`, `${tod}Subscribe Channel\nHelga Zex!!${tod}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'AUTHOR🍁'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
				break
			case 'setbio':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					helga.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'setname':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                helga.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
			case 'add':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			add = mek.message.extendedTextMessage.contextInfo.participant
		    helga.groupAdd(from, [add])
				reply('Sukses menambahkan peserta')
				break
				case 'kick':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			kick = mek.message.extendedTextMessage.contextInfo.participant
		    helga.groupRemove(from, [kick])
						reply('Sukses mengeluarkan peserta')
                    break
                    case 'creategroup':
			case 'creategrup':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					helga.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
            case 'welcome': 
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					if (args[0] === 'on') {
						if (isWelkom) return reply('Sudah Aktif Kak')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome')
					} else if (args[0] === 'off') {
						if (!isWelkom) return reply('Sudah Mati Kak')
						var ini = welkom.indexOf(from)
						welkom.splice(ini, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'welcome off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'welcome on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btngrass = {
    contentText: `${anu}`,
    footerText: '*𝚉𝚞𝚔𝚊𝙲𝚑𝚊𝚗 𝚅3.0.0*',
    buttons: punten,
    headerType: 1
}
await helga.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
					default:
		break
		 if (isMedia && isAuto && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = mek
						const media = await helga.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(dla.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								helga.sendMessage(from, buffer, sticker, { quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
				//DATABASE
	           // FOR VIDEO OR G
		   if ((isMedia & isAuto && !mek.message.imageMessage || isQuotedVideo)) {
						const encmedia = mek
						const media = await helga.downloadAndSaveMediaMessage(encmedia)
						if (Buffer.byteLength(media) >= 6186598.4) return reply(`sizenya terlalu gede sayang, dd gakuat :(`)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal, video nya kebesaran, dd gakuat`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								helga.sendMessage(from, buff, sticker, { quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
						}
					  }
					} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
	console.log(color('[ ERROR ]', 'red'), e)
	// console.log(e)
	}
    }
    }