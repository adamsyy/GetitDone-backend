const puppeteer=require('puppeteer');

//anonymous function
(async()=>{
const browser=await puppeteer.launch({headless:false});
const page=await browser.newPage();

await page.goto("https://achyuthmohan.me/");
  


const grabpara=await page.evaluate(()=>{
    const pgtag=document.querySelector(".container h2")
    return pgtag.innerText
})

console.log(grabpara)

   await browser.close()
})();