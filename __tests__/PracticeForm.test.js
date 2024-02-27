import 'chromedriver'
import { test, afterAll } from '@jest/globals'
import { browser, by, have,command } from 'selenidejs'
import path from 'path';

browser.config.timeout= 30000;

test('Submit form for Naruto', async () => {
  const filePath = path.resolve('testData', 'Naruto.jpg');
  
  await browser.open('https://demoqa.com/automation-practice-form');
  await browser.resizeWindow(1920,1080);

  await browser.element(by.id('firstName')).type('Naruto');
  await browser.element(by.id('lastName')).type('Uzumaki');
  await browser.element(by.id('userEmail')).type('Naruto@gmail.com');
  await browser.element(by.exactText("Male")).click();
  await browser.element(by.id("userNumber")).type("0426767891");
  await browser.executeScript("window.scrollBy(0,300)");
  await browser.element(by.id("dateOfBirthInput")).click();
  await browser.element(by.text("August")).click();
  await browser.element(by.text("2001")).click();
  await browser.element(by.attribute("aria-label","Choose Tuesday, August 21st, 2001")).click();
  await browser.element(by.id("subjectsInput")).type("Math").then(command.pressEnter);
  await browser.element(by.id("subjectsInput")).type("Eng").then(command.pressEnter);
  await browser.element(by.exactText("Sports")).click();
  await browser.element(by.id("uploadPicture")).setValue(filePath);
  await browser.element(by.id("currentAddress")).
  type("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "+
  "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "+
  "laboris nisi ut aliquip ex ea commodo consequat.");
  await browser.executeScript("window.scrollBy(0,300)");
  await browser.element(by.text("Select State")).click();
  await browser.element(by.text("Haryana")).click();
  await browser.element(by.text("Select City")).click();
  await browser.element(by.text("Panipat")).click();
  await browser.element(by.id("submit")).click();

  
  await browser
  .element(by.xpath("//table[contains(@class, 'table')]//tr[td[1]='Student Name']/td[2]"))
  .should(have.exactText("Naruto Uzumaki"));
  await browser
  .element(by.xpath("//table[contains(@class, 'table')]//tr[td[1]='Student Email']/td[2]"))
  .should(have.exactText("Naruto@gmail.com"));
  await browser.element(by.xpath("//table[contains(@class, 'table')]//tr[td[1]='Gender']/td[2]"))
  .should(have.exactText("Male"));
  await browser.element(by.xpath("//table[contains(@class, 'table')]//tr[td[1]='Mobile']/td[2]"))
  .should(have.exactText("0426767891"));
  await browser
  .element(by.xpath("//table[contains(@class, 'table')]//tr[td[1]='Date of Birth']/td[2]"))
  .should(have.exactText("21 August,2001"));
  await browser.element(by.xpath("//table[contains(@class, 'table')]//tr[td[1]='Subjects']/td[2]"))
  .should(have.exactText("Maths, English"));
  await browser.element(by.xpath("//table[contains(@class, 'table')]//tr[td[1]='Hobbies']/td[2]"))
  .should(have.exactText("Sports"));
  await browser.element(by.xpath("//table[contains(@class, 'table')]//tr[td[1]='Picture']/td[2]"))
  .should(have.exactText("Naruto.jpg"));
  await browser.element(by.xpath("//table[contains(@class, 'table')]//tr[td[1]='Address']/td[2]"))
  .should(have.exactText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "+
  "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "+
  "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."));
  await browser
  .element(by.xpath("//table[contains(@class, 'table')]//tr[td[1]='State and City']/td[2]"))
  .should(have.exactText("Haryana Panipat"));
})

afterAll (async () => { 
  await browser.quit();
}
)