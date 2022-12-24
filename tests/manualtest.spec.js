const { test, expect } = require('@playwright/test');

test('Page has a title, a button and on clicking button a joke is received from api server', async ({ page }) => {
    await page.goto('https://dvd035.github.io/joke-teller/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Joke Teller');
  
    const button = page.locator('#button'); //find an element with id value = "button"
     await expect(button).not.toBeEmpty(); //conforming button is present in page

     await button.click(); // clicking the button
     
     const jokeContainer = page.locator('#jokeText') //find an element with id value = "jokeText"
     await expect(jokeContainer).not.toHaveText('',{useInnerText:true}); //conforming joke received(receive hua hai to innerText empty nhi hoga)
  });

