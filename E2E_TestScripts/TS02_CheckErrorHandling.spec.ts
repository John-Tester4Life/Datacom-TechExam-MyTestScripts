import { test, expect } from '@playwright/test';

test('TC02 Check Error Handling of User Registration if blank or incorrect values are provided', async ({ page }) => {

  await test.step('Step 1 - Open "CHALLENGE - Spot the BUGS!" Page', async () => 
     { 
        await page.goto('https://qa-practice.netlify.app/bugs-form');
        await page.waitForTimeout(2000);
        await page.evaluate(() => document.body.style.zoom = '0.6');
        await page.screenshot({  path: 'screenshots/TS02_Step1-PageIsLoaded.png' })
     });

  await test.step('Step 2 - Click Register button without entering any data', async () => 
     { 
        //Check that user registration is not successful and correct warning message is displayed
            await page.getByRole('button', { name: 'Register' }).click();
            await expect.soft(page.getByText('The password should contain between [6,20] characters!'), {message: 'Check that correct warning message is displayed "The password should contain 6 to 20 characters"'}).toBeVisible();
            await page.screenshot({  path: 'screenshots/TS02_Step2-NoDataEntered.png' })
     });

  await test.step('Step 3 - Click Register button after entering correct values in password field', async () => 
     { 
        //Check that user registration is not successful and correct warning message is displayed
            //enter password with 5 characters 
            await page.getByRole('textbox', { name: 'Password' }).click();
            await page.getByRole('textbox', { name: 'Password' }).fill('12345');
            await page.getByRole('button', { name: 'Register' }).click();
            await expect.soft(page.getByText('The password should contain between [6,20] characters!'), {message: 'Enter 5 characters and check that correct warning message is displayed'}).toBeVisible();
            await page.screenshot({ path: 'screenshots/TS02_Step3-EnterPasswordWith5char.png' })
            //enter password with 21 characters
            await page.getByRole('textbox', { name: 'Password' }).click();
            await page.getByRole('textbox', { name: 'Password' }).fill('123456789012345678901');
            await page.getByRole('button', { name: 'Register' }).click();
            await expect.soft(page.getByText('The password should contain between [6,20] characters!'), {message: 'Enter 21 characters and check that same warning message is displayed'}).toBeVisible();
            await page.screenshot({ path: 'screenshots/TS02_Step3-EnterPasswordWith20char.png' })
            //enter password with 6 characters
            await page.getByRole('textbox', { name: 'Password' }).click();
            await page.getByRole('textbox', { name: 'Password' }).fill('123456');  
            await page.getByRole('button', { name: 'Register' }).click();
            await expect.soft(page.getByText('The phone number should contain at least 10 characters!'), {message: 'Enter 6 characters and check that new warning message is displayed'}).toBeVisible();
            await page.screenshot({  path: 'screenshots/TS02_Step3-EnterCorrectPasswordLength.png' })
     });

  await test.step('Step 4 - Click Register button after entering correct values in phone field', async () => 
     { 
        //Check that user registration is not successful and correct warning message is displayed
            //enter phone with 9 characters 
            await page.getByRole('textbox', { name: 'Enter phone number' }).click();
            await page.getByRole('textbox', { name: 'Enter phone number' }).fill('123456789');
            await page.getByRole('button', { name: 'Register' }).click();
            await expect.soft(page.getByText('The phone number should contain at least 10 characters!'), {message: 'Enter 9 characters and check that correct warning message is displayed'}).toBeVisible();
            await page.screenshot({  path: 'screenshots/TS02_Step4-RegisterWithPhone9char.png' })
            //enter password with 10 characters
            await page.getByRole('textbox', { name: 'Enter phone number' }).click();
            await page.getByRole('textbox', { name: 'Enter phone number' }).fill('1234567890');  
            await page.getByRole('button', { name: 'Register' }).click();
            await expect.soft(page.getByText('The first name, last name, email address should be provided!'), {message: 'Enter 10 characters and check that new warning message is displayed'}).toBeVisible();
            await page.screenshot({  path: 'screenshots/TS02_Step4-EnterCorrectPhoneLength1.png' })
            //enter password with 11 characters
            await page.getByRole('textbox', { name: 'Enter phone number' }).click();
            await page.getByRole('textbox', { name: 'Enter phone number' }).fill('12345678901');  
            await page.getByRole('button', { name: 'Register' }).click();
            await expect.soft(page.getByText('The first name, last name, email address should be provided!'), {message: 'Enter 11 characters and check that new warning message is displayed'}).toBeVisible();
            await page.screenshot({   path: 'screenshots/TS02_Step4-EnterCorrectPhoneLength2.png' })
     });
          
});