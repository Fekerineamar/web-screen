const fs=require("fs"),axios=require("axios"),puppeteer=require("puppeteer"),spin=["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"],regex=/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,readline=require("readline").createInterface({input:process.stdin,output:process.stdout,terminal:!1}),terminal=()=>{console.clear(),setTimeout((()=>console.log("[32m","    \t \t\t\t\t\t\t     ")),200),setTimeout((()=>console.log("    \t\t\t\t\t\t\t\t     ")),250),setTimeout((()=>console.log("    \t\t\t\thttps://Github.com/FekerineAmar\t\t\t\t     ")),300),setTimeout((()=>console.log("\t    \t\t\t\t\t\t\t\t     ")),350),setTimeout((()=>console.log("\t░██╗░░░░░░░██╗███████╗██████╗░░░░░░░░██████╗░█████╗░██████╗░███████╗███████╗███╗░░██╗")),400),setTimeout((()=>console.log("\t░██║░░██╗░░██║██╔════╝██╔══██╗░░░░░░██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝████╗░██║")),450),setTimeout((()=>console.log("\t  ██╗████╗██╔╝█████╗░░██████╦╝█████╗╚█████╗░██║░░╚═╝██████╔╝█████╗░░█████╗░░██╔██╗██║")),500),setTimeout((()=>console.log("\t  ████╔═████║░██╔══╝░░██╔══██╗╚════╝░╚═══██╗██║░░██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║")),550),setTimeout((()=>console.log("\t  ╚██╔╝░╚██╔╝░███████╗██████╦╝░░░░░░██████╔╝╚█████╔╝██║░░██║███████╗███████╗██║░╚███║")),600),setTimeout((()=>console.log("\t   ╚═╝░░░╚═╝░░╚══════╝╚═════╝░░░░░░░╚═════╝░░╚════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝")),650),setTimeout((()=>console.log("    \t\t\t\t\t\t\t\t      \t             🎓")),700),setTimeout((()=>console.log("    \t\t\t\t\t\t\t\t      \t v1.01 BY_CODY4CODE")),700),setTimeout((()=>console.log("    \t\t\t\t\t\t\t\t     ")),750),setTimeout((()=>console.log("[32m%s[0m","    \t\t\t\t\t\t\t\t     ")),800),setTimeout((()=>r2()),1e3)},id=Date.now(),r2=()=>{let t,e=0,s=[],o=[],l=!1;readline.question("\n=> Choose Your URL's Path: ",(r=>{fs.existsSync("/"+r)?(()=>{try{t=fs.readFileSync("/"+r,"utf8"),!0===/\ufffd/.test(t)&&(l=!l),l?(console.log("[31m%s[0m","Please Choose a Valid File!!"),r2()):((data=t.split("\n").filter((t=>""!=t))).forEach((t=>{regex.test(t)||(t="https://"+t),regex.test(t)&&s.push(t)})),s.length?(()=>{!fs.existsSync("result")&&fs.mkdirSync("result"),!fs.existsSync(`result/result_${id}`)&&fs.mkdirSync(`result/result_${id}`),!fs.existsSync(`result/result_${id}/errors`)&&fs.mkdirSync(`result/result_${id}/errors`),!fs.existsSync(`result/result_${id}/data`)&&fs.mkdirSync(`result/result_${id}/data`);let l=0;const i=setInterval((()=>{l==spin.length&&(l=0),process.stdout.write(`\r${spin[l]} `),l++}),80);s=[...new Set(s)];let n=()=>{e<s.length?(async()=>{process.stdout.write(` - Proccessig ${e+1}/${s.length} URL's`),await axios({url:s[e],timeout:2e4}).then((l=>{let i=JSON.stringify(l.headers);(async()=>{t=l.request.host,fs.appendFileSync(`result/result_${id}/data/data.txt`,t+"\n"),fs.writeFileSync(`result/result_${id}/data/${t}.json`,i);try{r=await puppeteer.launch({args:["--no-sandbox","--disabled-setupid-sandbox"]}),l=await r.newPage(),await l.goto(s[e],{timeout:2e4}),await l.screenshot({path:`result/result_${id}/data/${t}.png`}),await r.close(),e++,n()}catch(t){"TimeoutError: Navigation timeout of 20000 ms exceeded"==t&&(fs.appendFileSync(`result/result_${id}/errors/errors.txt`,`GET: ${s[e]} => Navigation timeout\n`),fs.copyFileSync("logo/default.jpg",`result/result_${id}/data/${o[e]}.png`),e++,n())}})()})).catch((t=>{let o;o=t.response?t.response.status+" "+t.response.statusText:`${t.code} Hostname`,fs.appendFileSync(`result/result_${id}/errors/errors.txt`,`GET: ${s[e]} => ${o}\n`),e++,n()}))})(s[e]):(fs.copyFileSync("html/index.html",`result/result_${id}/result.html`),fs.copyFileSync("html/read.txt",`result/result_${id}/important!!.txt`),fs.copyFileSync("logo/logox48.svg",`result/result_${id}/data/logox48.svg`),console.log("[32m%s[0m","\nOutput ==> ",__dirname+`/result/result_${id}`),console.log("[1m%s[0m","\n                    Done 😉!    \n       Don't Forget To Fork Me On Github!"),clearInterval(i),readline.close())};n()})():(console.log("[31m%s[0m","\t\tBAD URL's!! Please Choose a Valid URL's"),r2()))}catch(t){console.log("File not found!"),r2()}})():(console.log("[31m%s[0m","Please Choose a Valid Path!!"),r2())}))};module.exports=terminal;