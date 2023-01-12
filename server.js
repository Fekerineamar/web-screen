const { url } = require("inspector");

const puppeteer = require("puppeteer"),
  axios = require("axios"),
  fs = require("fs"),

spin = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"],
readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: !1,
  });
(() => {
  console.clear(),
    setTimeout(() => console.log("[32m", "    \t \t\t\t\t\t\t     "), 200),
    setTimeout(() => console.log("    \t\t\t\t\t\t\t\t     "), 250),
    setTimeout(
      () =>
        console.log("    \t\t\t\thttps://Github.com/FekerineAmar\t\t\t\t     "),
      300
    ),
    setTimeout(() => console.log("\t    \t\t\t\t\t\t\t\t     "), 350),
    setTimeout(
      () =>
        console.log(
          "\t░██╗░░░░░░░██╗███████╗██████╗░░░░░░░░██████╗░█████╗░██████╗░███████╗███████╗███╗░░██╗"
        ),
      400
    ),
    setTimeout(
      () =>
        console.log(
          "\t░██║░░██╗░░██║██╔════╝██╔══██╗░░░░░░██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝████╗░██║"
        ),
      450
    ),
    setTimeout(
      () =>
        console.log(
          "\t  ██╗████╗██╔╝█████╗░░██████╦╝█████╗╚█████╗░██║░░╚═╝██████╔╝█████╗░░█████╗░░██╔██╗██║"
        ),
      500
    ),
    setTimeout(
      () =>
        console.log(
          "\t  ████╔═████║░██╔══╝░░██╔══██╗╚════╝░╚═══██╗██║░░██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║"
        ),
      550
    ),
    setTimeout(
      () =>
        console.log(
          "\t  ╚██╔╝░╚██╔╝░███████╗██████╦╝░░░░░░██████╔╝╚█████╔╝██║░░██║███████╗███████╗██║░╚███║"
        ),
      600
    ),
    setTimeout(
      () =>
        console.log(
          "\t   ╚═╝░░░╚═╝░░╚══════╝╚═════╝░░░░░░░╚═════╝░░╚════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝"
        ),
      650
    ),
    setTimeout(
      () => console.log("    \t\t\t\t\t\t\t\t      \t             🎓"),
      700
    ),
    setTimeout(
      () => console.log("    \t\t\t\t\t\t\t\t      \t v1.01 BY_CODY4CODE"),
      700
    ),
    setTimeout(
      () => console.log("[32m%s[0m", "☠ Happy Hacking ☠    \t\t\t\t\t\t\t\t     "),
      750
    ),
    setTimeout(() => r2(), 1e3);
})(),
  (id = Date.now()),
  (r2 = () => {
    const e = [
      "--autoplay-policy=user-gesture-required",
      "--disable-background-networking",
      "--disable-background-timer-throttling",
      "--disable-backgrounding-occluded-windows",
      "--disable-breakpad",
      "--disable-client-side-phishing-detection",
      "--disable-component-update",
      "--disable-default-apps",
      "--disable-dev-shm-usage",
      "--disable-domain-reliability",
      "--disable-extensions",
      "--disable-features=AudioServiceOutOfProcess",
      "--disable-hang-monitor",
      "--disable-ipc-flooding-protection",
      "--disable-notifications",
      "--disable-offer-store-unmasked-wallet-cards",
      "--disable-popup-blocking",
      "--disable-print-preview",
      "--disable-prompt-on-repost",
      "--disable-renderer-backgrounding",
      "--disable-setuid-sandbox",
      "--disable-speech-api",
      "--disable-sync",
      "--hide-scrollbars",
      "--ignore-gpu-blacklist",
      "--metrics-recording-only",
      "--mute-audio",
      "--no-default-browser-check",
      "--no-first-run",
      "--no-pings",
      "--no-sandbox",
      "--no-zygote",
      "--password-store=basic",
      "--use-gl=swiftshader",
      "--use-mock-keychain",
    ];
    let t,
      s = 0,
      o = [],
      l = !1;
    readline.question("\n=> Choose Your URL's Path: ", (i) => {
      fs.existsSync(i)
        ? (() => {
            try {
              (t = fs.readFileSync(i, "utf8")),
                !0 === /\ufffd/.test(t) && (l = !l),
                l
                  ? (console.log("[31m%s[0m", "Please Choose a Valid File!!"), r2())
                  : (t
                      .split("\n")
                      .filter((e) => "" != e)
                      .map((e) => o.push(e)),
                    o.length
                      ? (() => {
                          !fs.existsSync("result") && fs.mkdirSync("result"),
                            !fs.existsSync(`result/result_${id}`) &&
                              fs.mkdirSync(`result/result_${id}`),
                            !fs.existsSync(`result/result_${id}/errors`) &&
                              fs.mkdirSync(`result/result_${id}/errors`),
                            !fs.existsSync(`result/result_${id}/data`) &&
                              fs.mkdirSync(`result/result_${id}/data`);
                          let t = 0;
                          const l = setInterval(() => {
                            t == spin.length && (t = 0),
                              process.stdout.write(`\r${spin[t]} `),
                              t++;
                          }, 80);
                          (o = [...new Set(o)]),
                            fs.copyFileSync(
                              "html/index.html",
                              `result/result_${id}/result.html`
                            ),
                            fs.copyFileSync(
                              "html/read.txt",
                              `result/result_${id}/important!!.txt`
                            ),
                            fs.copyFileSync(
                              "logo/logox48.svg",
                              `result/result_${id}/data/logox48.svg`
                            );
                          let i = () => {
                            s < o.length
                              ? (async () => {
                                  process.stdout.write (
                                    ` - Proccessig ${s + 1}/${o.length} URL's`
                                  );
                                  try {
                                    let t, l,
                                    r = o[s].replace(/(http(s?)):\/\//i, ""),
                                      urls = "https://" + r;
                                    const screen = async (h) => {
                                      t = await puppeteer.launch({
                                        args: e,
                                      }),
                                        l = await t.newPage(),
                                        await l.goto(urls, {
                                          timeout: 1e4,
                                        }),
                                        r.endsWith("/") &&
                                          (r = r.replaceAll("/", "")),
                                        await l.screenshot({
                                          path: `result/result_${id}/data/${r}.jpg`,
                                        }),
                                        fs.appendFileSync(
                                          `result/result_${id}/data/data.txt`,
                                          r + "\n"
                                        ),
                                        fs.writeFileSync(
                                          `result/result_${id}/data/${r}.json`,
                                          JSON.stringify(h)
                                        ),
                                        await t.close(),
                                        s++,
                                        i();
                                    };
                                    axios.get(urls,{timeout:1e4}).then(res => res.headers && screen(res.headers)).catch((e)=>{
                                      e.code && fs.appendFileSync(`result/result_${id}/errors/errors.txt`, `GET: ${o[s]+" => "+e.code}\n`);
                                      s++,
                                      i()
                                    })
                                    }catch(e){
                                    "TimeoutError: Navigation timeout of 10000 ms exceeded" ===
                                      e &&
                                      (fs.copyFileSync(
                                        "logo/default.jpg",
                                        `result/result_${id}/data/${r}.jpg`
                                      ),
                                      fs.appendFileSync(
                                        `result/result_${id}/errors/errors.txt`,
                                        `GET: ${o[s]} => Navigation timeout of 10000 ms exceeded\n`
                                      )),
                                      s++,
                                      i()};
                                })(o[s])
                              : (console.log(
                                  "[1m%s[0m",
                                  "\n                    Done 😉!    \n       Don't Forget To Fork Me On Github!"
                                ),
                                console.log(
                                  "[32m%s[0m",
                                  "\nOutput ==> ",
                                  __dirname + `/result/result_${id}`
                                ),
                                clearInterval(l),
                                readline.close(),
                                process.exit());
                          };
                          i();
                        })()
                      : (console.log(
                          "[31m%s[0m",
                          "\t\tBAD URL's!! Please Choose a Valid URL's"
                        ),
                        r2()));
            } catch (e) {
              console.log("File not found!"), r2();
            }
          })()
        : (console.log("[31m%s[0m", "Please Choose a Valid Path!!"), r2());
    });
  });
