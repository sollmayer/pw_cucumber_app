import {Given, When, Then} from '@cucumber/cucumber';
import { chromium, Browser, Page, expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

Given("the user is on the Login page", async function () {
    await pageFixture.page.goto('https://conduit.bondaracademy.com/');
    await pageFixture.page.getByRole('link', {name:"Sign in"}).click();
})

When("the user enters valid credentials", async function() {
    await pageFixture.page.getByRole("textbox", { name: "Email" }).fill("TestingApiCalls@gmail.com");
    await pageFixture.page.getByRole("textbox", { name: "Password" }).fill("TestingApiCalls");
})
When("the user clicks on login button", async function() {
    await pageFixture.page.getByRole("button", { name: "Sign in" }).click();
})
Then('the user is redirected to the Home page', async function() {
    await expect(pageFixture.page).toHaveURL('https://conduit.bondaracademy.com/')
    await expect(pageFixture.page.getByRole('link', {name:"Sign in"})).not.toBeVisible();
})