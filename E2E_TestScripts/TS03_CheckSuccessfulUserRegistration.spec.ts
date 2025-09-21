import { test, expect } from '@playwright/test';

test('TC03 Check User Registration if correct values are provided', async ({ page }) => {

  const timestamp = new Date().toISOString().slice(0, 16);

  await test.step('Step 1 - Open "CHALLENGE - Spot the BUGS!" Page', async () => 
     { 
        await page.goto('https://qa-practice.netlify.app/bugs-form');
        await page.evaluate(() => document.body.style.zoom = '0.6');
        await page.screenshot({  path: 'screenshots/TS03_Step1-PageIsLoaded.png'  })
     });

  await test.step('Step 2 - Provide valid field values', async () => 
     { 
        //Provide valid data on each field
            await page.getByRole('textbox', { name: 'First Name' }).click();
            await page.getByRole('textbox', { name: 'First Name' }).fill('John');
            await page.getByRole('textbox', { name: 'Last Name* Phone nunber*' }).click();
            await page.getByRole('textbox', { name: 'Last Name* Phone nunber*' }).fill('Tester');
            await page.getByRole('textbox', { name: 'Enter phone number' }).click();
            await page.getByRole('textbox', { name: 'Enter phone number' }).fill('12345678901');
            await page.locator('#countries_dropdown_menu').selectOption('Philippines');
            await page.getByRole('textbox', { name: 'Enter email' }).click();
            await page.getByRole('textbox', { name: 'Enter email' }).fill('john.tester@outlook.com');
            await page.getByRole('textbox', { name: 'Password' }).click();
            await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
            await expect.soft(page.getByText('I agree with the terms and conditions'), {message: 'Check User Agreement check box is enabled'}).toBeEnabled();
            await page.screenshot({  path: 'screenshots/TS03_Step2-ProvidedValidData.png'  })
          
     });

  await test.step('Step 3 - Click Register button and check that correct user details are registered', async () => 
     { 
        //Click Register button
            await page.getByRole('button', { name: 'Register' }).click();
      
        //Check that user registration is successful and all values displayed were the same with all data provided by the user
            await expect.soft(page.locator('#message'),      {message:'Check that correct notification message for successful user registration is displayed'}).toContainText('Successfully registered the following information');
            await expect.soft(page.locator('#resultFn'),     {message:'Check that first name displayed is same as the data entered by user'}).toContainText('First Name: John');
            await expect.soft(page.locator('#resultLn'),     {message:'Check that last name displayed is same as the data entered by user'}).toContainText('Last Name: Tester');
            await expect.soft(page.locator('#resultPhone'),  {message:'Check that phone number displayed is same as the data entered by user'}).toContainText('Phone Number: 12345678901');
            await expect.soft(page.locator('#country'),      {message:'Check that country displayed is same as the data entered by user'}).toContainText('Country: Philippines');
            await expect.soft(page.locator('#resultEmail'),  {message:'Check that email address displayed is same as the data entered by user'}).toContainText('Email: john.tester@outlook.com');
            await page.screenshot({  path: 'screenshots/TS03_Step3-UserRegistrationIsSuccessful.png'  })
     });
          
});