import { test, expect } from '@playwright/test';
// const Login = require('../pages/login')
require('dotenv').config()

// test('login', async({page})=>{
//   const login = new Login(page);
//   await page.goto(login.baseurl());
//   await expect(page.getByText("Login")).toBeVisible();
//   await page.login.username_input().fill(process.env.USERNAME);
//   await page.login.password_input().fill(process.env.PASSWORD);
// })

test("Test CI/CD", async({page})=>{
  console.log("Automation triggered");
  await page.goto("http://localhost:3000")
})