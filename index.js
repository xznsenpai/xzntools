const chalk = require('chalk');
const axios = require('axios');
const prompt = require('prompt-sync')({ sigint: false });
const figlet = require('figlet');
const mintake = require('mintake');
const fs = require("fs");
//const google = require('google-it');

/*****IG DOWNLOAD*****/
let { igApi, getCookie } = require("insta-fetcher");
let ig = new igApi("Token"); //Untuk mendapatkan token seting di line 114

function print (string) {
    return console.log(string);
}

const banner = figlet.textSync('XZN || SENPAI', { font: 'Slant', horizontalLayout: 'default', verticalLayout: 'default', width: 50, whitespaceBreak: false });

const list_tools = `${chalk.red(banner)}
${chalk.green('[')}${chalk.white('+')}${chalk.green(']')} ${chalk.yellowBright('⫹⫺ㅤXZN || SENPAI')}

${chalk.red('[')}${chalk.whiteBright('1')}${chalk.red(']')} ${chalk.yellowBright('BlackPink Logo')}
${chalk.red('[')}${chalk.whiteBright('2')}${chalk.red(']')} ${chalk.yellowBright('Christmas')}
${chalk.red('[')}${chalk.whiteBright('3')}${chalk.red(']')} ${chalk.yellowBright('Tiktok Style')}
${chalk.red('[')}${chalk.whiteBright('4')}${chalk.red(']')} ${chalk.yellowBright('Galaxy Style')}
${chalk.red('[')}${chalk.whiteBright('5')}${chalk.red(']')} ${chalk.yellowBright('Neon Light')}
${chalk.red('[')}${chalk.whiteBright('6')}${chalk.red(']')} ${chalk.yellowBright('Session Instagram')}
${chalk.red('[')}${chalk.whiteBright('7')}${chalk.red(']')} ${chalk.yellowBright('Public Post')}
${chalk.red('[')}${chalk.whiteBright('8')}${chalk.red(']')} ${chalk.yellowBright('User Data')}
${chalk.red('[')}${chalk.whiteBright('00')}${chalk.red(']')} ${chalk.yellowBright('Exit')}
${chalk.green('[')}${chalk.white('+')}${chalk.green(']')} ${chalk.greenBright('Sisanya Antum Tambahin Sendiri Aj')}\n`
console.clear();
print(list_tools)

const user_input = prompt(`${chalk.red('[')}${chalk.whiteBright('~')}${chalk.red(']')} ${chalk.greenBright('Which option number : ')}`);

switch (user_input) {
	case "00":
        print("See You...^.^")
        process.exit();
        break
    case "1":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} Traceroute script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Text : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            mintake
           .textpro("https://textpro.me/create-blackpink-s-born-pink-album-theme-logo-online-1092.html", [ "xzn tools", input_target ])
           .then(async (res) => {
		    buffer = (await axios.get(res, { responseType: 'arraybuffer' })).data
		    fs.writeFileSync(`./Result/${input_target}.${/image/.test(res.type) ? 'jpg' : 'png'}`, buffer)
		    console.log("Silahkan Buka Folder Result")})
        } break
        case "2":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} Traceroute script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Text : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            mintake
           .textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [ input_target ])
           .then(async (res) => {
		    buffer = (await axios.get(res, { responseType: 'arraybuffer' })).data
		    fs.writeFileSync(`./Result/${input_target}.${/image/.test(res.type) ? 'jpg' : 'png'}`, buffer)
		    console.log("Silahkan Buka Folder Result")})
        } break
        case "3":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} Traceroute script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Text : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            mintake
           .textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [ input_target, "xzn tools" ])
           .then(async (res) => {
		    buffer = (await axios.get(res, { responseType: 'arraybuffer' })).data
		    fs.writeFileSync(`./Result/${input_target}.${/image/.test(res.type) ? 'jpg' : 'png'}`, buffer)
		    console.log("Silahkan Buka Folder Result")})
        } break
        case "4":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} Traceroute script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Text : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            mintake
           .textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [ input_target ])
           .then(async (res) => {
		    buffer = (await axios.get(res, { responseType: 'arraybuffer' })).data
		    fs.writeFileSync(`./Result/${input_target}.${/image/.test(res.type) ? 'jpg' : 'png'}`, buffer)
		    console.log("Silahkan Buka Folder Result")})
        } break
        case "5":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} Traceroute script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Text : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            mintake
           .textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [ input_target ])
           .then(async (res) => {
		    buffer = (await axios.get(res, { responseType: 'arraybuffer' })).data
		    fs.writeFileSync(`./Result/${input_target}.${/image/.test(res.type) ? 'jpg' : 'png'}`, buffer)
		    console.log("Silahkan Buka Folder Result")})
        } break
        case "6": {
            (async () => {
            const session_id = await getCookie("username", "pasword"); //masukkan username instagram & pasword
            console.log("your Session");
            console.log(session_id);
            })();    
        } break
        case "7": {
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} Traceroute script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Link Instagram : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
            } else {
            ig.fetchPost(input_target).then(async (res) => {
	        for (let z of res.links) {
		    buffer = (await axios.get(z.url, { responseType: 'arraybuffer' })).data
		    fs.writeFileSync(`./Result/${res.username}_${z.id}.${/image/.test(z.type) ? 'jpg' : 'mp4'}`, buffer)
		    console.log("Silahkan Buka Folder Result")}})}
        } break
        case "8": {
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} Traceroute script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('User name Ig : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
            } else {
            ig.fetchUser(input_target).then((res) => {
            console.log(res);
            });
            }
        } break
    default:
        print("Aborted!")
        process.exit();
}
