import { test, expect } from '@playwright/test';

test('TC01 Check All Objects in Main Page', async ({ page }) => {

  await test.step('Step 1 - Open "CHALLENGE - Spot the BUGS!" Page', async () => 
     { 
        await page.goto('https://qa-practice.netlify.app/bugs-form');
        await page.evaluate(() => document.body.style.zoom = '0.6');
        await page.screenshot({ path: 'screenshots/TC01_Step1-PageContents.png' })
     });

  await test.step('Step 2 - Check page header, title and description', async () => 
     { 
        //Check that Page Title is QA Practice | Learn with RV
          await expect.soft(page).toHaveTitle('QA Practice | Learn with RV');
        //Check that Header is 'CHALLENGE - Spot the BUGS!'
          await expect.soft(page.getByRole('heading', { name: 'CHALLENGE - Spot the BUGS!' }), {message: 'Check header name is correct'}).toBeVisible();
        //Check that Description is 'This page contains at least 15 bugs. How many of them can you spot?'
          await expect.soft(page.getByText('This page contains at least 15 bugs. How many of them can you spot?'), {message: 'Check header description is correct'}).toBeVisible();
     });

  await test.step('Step 3 - Check all required fields', async () => 
     { 
        test.setTimeout(60000);
        //Check First Name field
<<<<<<< HEAD
            await expect.soft(page.getByText('First Name*'), {message: 'Check First Name label is visible and mandatory'}).toBeVisible({timeout: 500});
=======
            await expect.soft(page.getByText('First Name*'), {message: 'Check First Name label is visible and mandatory'}).toBeVisible();
>>>>>>> 5c256cc3466a44dbcc9da1e634869c44191ff9f7
            await expect.soft(page.getByRole('textbox', { name: 'First Name' }), {message: 'Check First Name text box is visible'}).toBeVisible();
            await expect.soft(page.getByRole('textbox', { name: 'First Name' }), {message: 'Check First Name text box is enabled'}).toBeEnabled();

        //Check Last Name field
            await expect.soft(page.getByText('Last Name*'), {message: 'Last Name label is visible and mandatory'}).toBeVisible();
            await expect.soft(page.getByRole('textbox', { name: 'Enter last name' }), {message: 'Check Last Name text box is visible'}).toBeVisible();
            await expect.soft(page.getByRole('textbox', { name: 'Enter last name' }), {message: 'Check Last Name text box is enabled'}).toBeEnabled();
            await expect.soft(page.getByText('Note: All the fields marked with * are mandatory'), {message: 'Check reminder for mandatory fields is visible and correct'}).toBeVisible();

        //Check Phone Number field
            await expect.soft(page.getByText('Phone number*'), {message: 'Check Phone label is visible'}).toBeVisible();
            await expect.soft(page.getByRole('textbox', { name: 'Enter phone number' }), {message: 'Check Phone text box is visible'}).toBeVisible();
            await expect.soft(page.getByRole('textbox', { name: 'Enter phone number' }), {message: 'Check Phone text box is enabled'}).toBeEnabled();

        //Check Country field
            await expect.soft(page.getByText('Country', { exact: true }), {message: 'Check Country label is visible'}).toBeVisible();
            await expect.soft(page.locator('#countries_dropdown_menu')).toContainText('Select a country... Afghanistan Albania Algeria American Samoa Andorra Angola Anguilla Antigua & Barbuda Argentina Armenia Aruba Australia Austria Azerbaijan Bahamas Bahrain Bangladesh Barbados Belarus Belgium Belize Benin Bermuda Bhutan Bolivia Bonaire Bosnia & Herzegovina Botswana Brazil British Indian Ocean Ter Brunei Bulgaria Burkina Faso Burundi Cambodia Cameroon Canada Canary Islands Cape Verde Cayman Islands Central African Republic Chad Channel Islands Chile China Christmas Island Cocos Island Colombia Comoros Congo Cook Islands Costa Rica Cote DIvoire Croatia Cuba Curacao Cyprus Czech Republic Denmark Djibouti Dominica Dominican Republic East Timor Ecuador Egypt El Salvador Equatorial Guinea Eritrea Estonia Ethiopia Falkland Islands Faroe Islands Fiji Finland France French Guiana French Polynesia French Southern Ter Gabon Gambia Georgia Germany Ghana Gibraltar Great Britain Greece Greenland Grenada Guadeloupe Guam Guatemala Guinea Guyana Haiti Hawaii Honduras Hong Kong Hungary Iceland Indonesia India Iran Iraq Ireland Isle of Man Israel Italy Jamaica Japan Jordan Kazakhstan Kenya Kiribati Korea North Korea South Kuwait Kyrgyzstan Laos Latvia Lebanon Lesotho Liberia Libya Liechtenstein Lithuania Luxembourg Macau Macedonia Madagascar Malaysia Malawi Maldives Mali Malta Marshall Islands Martinique Mauritania Mauritius Mayotte Mexico Midway Islands Moldova Monaco Mongolia Montserrat Morocco Mozambique Myanmar Nambia Nauru Nepal Netherland Antilles Netherlands (Holland, Europe) Nevis New Caledonia New Zealand Nicaragua Niger Nigeria Niue Norfolk Island Norway Oman Pakistan Palau Island Palestine Panama Papua New Guinea Paraguay Peru Philippines Pitcairn Island Poland Portugal Puerto Rico Qatar Republic of Montenegro Republic of Serbia Reunion Romania Russia Rwanda St Barthelemy St Eustatius St Helena St Kitts-Nevis St Lucia St Maarten St Pierre & Miquelon St Vincent & Grenadines Saipan Samoa Samoa American San Marino Sao Tome & Principe Saudi Arabia Senegal Seychelles Sierra Leone Singapore Slovakia Slovenia Solomon Islands Somalia South Africa Spain Sri Lanka Sudan Suriname Swaziland Sweden Switzerland Syria Tahiti Taiwan Tajikistan Tanzania Thailand Togo Tokelau Tonga Trinidad & Tobago Tunisia Turkey Turkmenistan Turks & Caicos Is Tuvalu Uganda United Kingdom Ukraine United Arab Emirates United States of America Uruguay Uzbekistan Vanuatu Vatican City State Venezuela Vietnam Virgin Islands (Brit) Virgin Islands (USA) Wake Island Wallis & Futana Is Yemen Zaire Zambia Zimbabwe');
            await expect.soft(page.locator('#countries_dropdown_menu'), {message: 'Check Country drop-down list is visible'}).toBeVisible();
            await expect.soft(page.locator('#countries_dropdown_menu'), {message: 'Check Country drop-down list is enabled'}).toBeEnabled();

        //Check Email address field
            await expect.soft(page.getByText('Email address*'), {message: 'Check email address label is visible'}).toBeVisible();
            await expect.soft(page.getByRole('textbox', { name: 'Enter email' }), {message: 'Check email text box is visible'}).toBeVisible();
            await expect.soft(page.getByRole('textbox', { name: 'Enter email' }), {message: 'Check email text box is enabled'}).toBeEnabled();

        //Check Password field
            await expect.soft(page.getByText('Password*'), {message: 'Check Password label is visible amd mandatory'}).toBeVisible();
            await expect.soft(page.getByRole('textbox', { name: 'Enter password' }), {message: 'Check Password text box is visible'}).toBeVisible();
            await expect.soft(page.getByRole('textbox', { name: 'Enter password' }), {message: 'Check Password text box is enabled'}).toBeEnabled();
            await expect.soft(page.getByText('Password length validation: [6,20] characters'), {message: 'Check Reminder for Password validation is visible and correct'}).toBeVisible();

        //Check Checkbox for user agreement
            await expect.soft(page.getByText('I agree with the terms and conditions'), {message: 'Check User Agreement check box is visible'}).toBeVisible();
            await expect.soft(page.getByText('I agree with the terms and conditions'), {message: 'Check User Agreement check box is enabled'}).toBeEnabled();
     });

     await test.step('Step 4 - Check all buttons', async () => 
     { 
        //Check that Register button is visible
          await expect.soft(page.getByRole('button', { name: 'Register' }), {message: 'Check Register button is visible'}).toBeVisible();
          await expect.soft(page.getByRole('button', { name: 'Register' }), {message: 'Check Register button is enabled'}).toBeEnabled();
     });

});