import {Given, When, Then} from '@cucumber/cucumber';
import { chromium, Browser, Page, expect } from '@playwright/test';

let browser: Browser;
let page: Page;

Given("the user is on the Login page", async function () {
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    
    await page.goto('https://conduit.bondaracademy.com/');
    await page.getByRole('link', {name:"Sign in"}).click();
})

When("the user enters valid credentials", async function() {
    await page.getByRole("textbox", { name: "Email" }).fill("TestingApiCalls@gmail.com");
    await page.getByRole("textbox", { name: "Password" }).fill("TestingApiCalls");
    await page.getByRole("button", { name: "Sign in" }).click();
})
When("the user clicks on login button", async function() {
    await page.getByRole("button", { name: "Sign in" }).click();
})
Then('the user is redirected to the Home page', async function() {
    expect(page.url()).toEqual('https://conduit.bondaracademy.com/');
    await expect(page.getByRole('link', {name:"Sign in"})).toBeVisible();
    await browser.close();
})