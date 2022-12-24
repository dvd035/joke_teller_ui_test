// multiple test krna hai to hr test ke liye bar-bar page visit na krna ho isliye ek 'beforeall' function bna lo
// taki page ek bar hi visit ho, or ab uspe sare test chale

const { test, expect } = require('@playwright/test');

let page; 

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://dvd035.github.io/joke-teller/');
});

test('Test1- Page has a title', async () => {
    await expect(page).toHaveTitle('Joke Teller');
});

test('Test2- Page has a button and clicking it', async () => {
    const button = page.locator('#button'); //find an element with id value = "button"(id ko # se dete hai)
    await expect(button).not.toBeEmpty(); //conforming button is present in page
    await button.click(); // clicking the button
});

test('Test2- On clicking button a joke is received from api server', async () => {
    const jokeContainer = page.locator('#jokeText') //find an element with id value = "jokeText"
    await expect(jokeContainer).not.toHaveText('', { useInnerText: true });//conforming joke received(receive hua hai to innerText empty nhi hoga)
});