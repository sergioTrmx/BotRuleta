const ownerNumber = ["855385638398@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '855385638398' 
// mude para seu numero

const gimagenotregister = true
// quando não há comando registrado o bot procura no google image

const sgooglenotregister = true
// quando não há comando registrado o bot procura uma pesquisa no google

const msgwelcomeimg = (numero, groupname) => {
    return `Sea bienvenido ${numero}\n\nEscreve ${prefix}menu para lista de comandos`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `Adeus ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname) => {
    return `Seja bem-vindo ${numero}\n\nAo menu do Sergio-bot`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = '1eb4ea79f7e4eef8241d5bdb054adc01'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = 'Sergio Trmx\n' 
// texto do simbolo de verificado

const prefix = '/' 
// prefixo

const blockedmsg = '*😜 Su número está bloqueado 😜*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫Este comando esta bloqueado contacte con el propietario🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*ya mamaste joto tu grupo será atacado👿*'
// mensagem de ban no anti tipos de mensagem

const adminmsgtype = '*Tu eres admin te salvaste del ban perro*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Hmmm ban por pajero...'
// mensagem de ban no antiporn

const adminmsgporn = '*Tu eres admin no te puedo banear por mandar porno*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'ya mamaste joto te vamos a atacar 👿...'
// mensagem de ban no antilink

const adminmsglink = 'no mandes link w te salvaste por ser admin 🙃'
// mensagem de quando adm manda link

const adminmsgpalavra = 'esa es una palabra prohibida para el bot 😓'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'Palavra proibida? Ja'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Ohayo gozaimasu, Onii-chan 👉👈'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Kon'nichiwa Onii-chan, aceite esse café ☕`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Konbanwa Onii-chan, espero que tenha tido um bom dia ☺️'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Dio error, intenta de nuevo :/'
// mensagem de erro

const notregister = `*Comando no registrado, escribe ${prefix}menu para ver la lista de comandos*`

// MENSAGENS DE AUTOREPLY

const botlindo = 'me ganas 🥺🙈'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'Calla maldito negro 😡'
const cadebot = 'querei ser mi onii-chan 👉👈?'
const botfdp = 'Te foder rapaz, te deitar na porrada quando tiver dormindo'
const botgostoso = 'hay bb me sonroja😳👉👈'
const botfofo = 'no se que es fofo pero chingatumadre 😳👉👈'
const botbaianor = 'Convidei sua placa-mãe pra minha rede seu corno'
const botcorno = 'Cornuda tu madre jugador de freefire'
const botputa = 'tu madre😡'
const botgay = 'como sabes'
const botviado = 'violado tu hermano😡'
const numbotfeio = 'calla hijodeputa 😡'
const pasawhats = 'wa.me/525623741080 🙈'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Espera un poco bro... ⌛',
    success: '✔️ Listo! ✔️',
    error: {
        stick: '❌ ocurrio un error :c ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ Este comando solo puede ser usado en grupos! ❌',
        ownerG: '❌ Este comando solo puede ser usado por grupo proprietário! ❌',
        ownerB: '❌ Este comando só pode ser usado por mi propietario ! ❌',
        admin: '❌ Silencio mortal eres muy gay para usar este comando ❌',
        Badmin: '❌ Este comando solo se puede usar cuando el bot es administrador! ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Mi criador^~^\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=855385638398:+855 38 563 8398\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde


// Nem ouse mexer aqui se n quiser que de erro
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.pasawhats = pasawhats
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
