import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import path = require("path");

let browser:Browser;
let page:Page;
let context:BrowserContext;

BeforeAll(async function(){
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    pageFixture.page = page;
})


Before(async function(){
    context = await browser.newContext();
    page = await browser.newPage();
    pageFixture.page = page;
})

After(async function({pickle,result}){
    if(result?.status == Status.FAILED){
        const screenshot = pageFixture.page.screenshot({path:`../../test-result/screenshots/${pickle.name}.png`, type:"png"})
        this.attach(screenshot, "image/png")
    }

    await page.close();
    await context.close();
})

AfterAll(async function(){
    await browser.close();
})