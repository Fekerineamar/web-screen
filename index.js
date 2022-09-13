// Web Scraping tool For Cypersecurity By Cody4code at: https://github.com/fekerineamar

const express = require("express");
const path = require("path");
const axios = require("axios");
const multer = require("multer");
const puppeteer = require("puppeteer");
const download = require('download');
const zipper = require('zip-local');
const fs = require("fs");

const app = express();
const port = process.env.port || 3000
app.use('/static', express.static('logo'))


let binary = false,
json = false,
filesize = false,
filename = "urls.txt",
fname,
i = 0;
let urls = './urls';
let result = './result';
let errors = './result/errors';
let filedow = path.join(__dirname + "/file.zip");
let regex =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
let list = [];


let maxSize = 1024*1024;

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "urls/");
  },
  filename: function (req, file, callback) {
    callback(null, filename);
  },
});

const upload = multer({
  storage,
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));

  fs.existsSync(filedow) && fs.unlinkSync(filedow)
  !fs.existsSync(urls) && fs.mkdirSync(urls)
  !fs.existsSync(result) && fs.mkdirSync(result)
  !fs.existsSync(errors) && fs.mkdirSync(errors)


});

app.post("/upload",upload.single("myFile"),(req, res, next) => {
  const file = req.file;
  console.log(file)
  if (!file || file.mimetype != "text/plain") {
    const error = new Error("Please upload a txt file");
    error.httpStatusCode = 400;
    res.send("Please upload a txt file");
    return
  }
  let fsr = fs.readFileSync(path.join(__dirname + "/urls/" + filename), "utf8");

  if (/\ufffd/.test(fsr) === true) binary = !binary;
  try {
    let data = JSON.parse(fsr);
    json = !json;
  } catch (e) {
    console.log("!json");
  }
  file.size > maxSize && (filesize = !filesize);
  filesize
    ? res.send("file Too Large")
    : binary || json
    ? res.send("Please upload a txt file!")
    : (() => {
        try {
          data = fsr.split('\n').filter((line) => line.trim() !== ""); // Delete Any Space
          data.forEach((e) => {
           !regex.test(e) && (e = "https://" + e);      // Check If No http before Add It!     
           console.log(e)
           regex.test(e) && list.push(e);           // Check If Is Valid URL!
          });
          !list.length && res.send('please upload valid txt file!')
        } catch (err) {
          console.error(err);
        }
        console.log(list)
        list.length && (console.log("sent!"),res.send("proccess"));
      })();  
});

app.get("/wait",(req,res) => {
  const getNewData = async (url) => {
    await axios({
          url: url,
          timeout: 15000
      })
      .then((response) => {
        let data = JSON.stringify(response.headers);
        fname = url.replace(/(http|https|www|:|[\//|\\])/mg,'')
        console.log(response.request.host)
        response.headers && (
          fs.writeFileSync(`result/${fname}.json`,data),
            (async () => {
              try{
              const browser = await puppeteer.launch({
                args: ["--no-sandbox", "--disabled-setupid-sandbox"],

              });
              const page = await browser.newPage();

              await page.goto(url,{ waitUntil: 'networkidle2',
              });
              await page.screenshot({path: `result/${fname}.png`});
              await browser.close();
              i++;
              caller()
            }catch(err){
              console.log(err);
              err == "TimeoutError: Navigation timeout of 30000 ms exceeded" ? (
                   fs.appendFileSync(`result/errors/errors.txt`,`GET: ${url} ==> request Take to long time!\n`),
                   i++,
                   caller()
                ) : console.log("error =>",err)
            }
            })()
          )
    })
    .catch((error) => {
     console.log(error.code)
     let urlname = url.replace(/(http|https|www|:|[\//|\\])/mg,'')
     let errtext;
     let errcode = "400"
     error.response ? (errtext = error.response.statusText,errcode = error.response.status) : errtext =`${error.code} Invalid Hostname`
     fs.appendFileSync(`result/errors/errors.txt`,`GET: ${url} ==> ${errcode} ${errtext}\n`)
      i++;
      caller();
    });
  }

  const caller = () => {
    i != list.length ? (getNewData(list[i])) : 
    (
      (
        ()=> {
          zipper.zip("./result/", function(error, zipped) {
              if(!error) {
                  zipped.compress();
                  var buff = zipped.memory();
                  zipped.save("file.zip", function(error) {
                      !error && (
                      res.download(filedow),
                      fs.rmSync(urls, { recursive: true, force: true }),
                      fs.rmSync(result, { recursive: true, force: true }),
                      list= [],
                      i = 0
                      )
                  })
              }
          });
          
      }
      )()
    )
  }  
!list.length ? res.send('please upload valid txt file!') : caller();
})

app.listen(port, () => console.log(`App listening on port ${port}!`));
 