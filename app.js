const fs = require("fs")
const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch() // { headless:true,slowMo:250}
  const page = await browser.newPage()
  await page.goto('https://www.epicgames.com/store/fr/') // {waitUntil: 'networkidle2'}

  const results = await page.evaluate( () => {

    arr = Array.from(document.querySelectorAll("span"))
    .filter( x => (/Jeux gratuits/).test(x.textContent) )
    .map( x => x.textContent )

    r = arr[0].split("Gratuit")

    return r[1]

  })

  try{
    
    fs.writeFileSync(
    `C:\\Users\\${require("os").userInfo().username}\\Desktop\\epicgames_${results}.txt`,
    "")

  }catch(e){
    fs.writeFileSync("error.txt","")
  }

  await browser.close()

})()