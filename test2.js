import { Selector } from 'testcafe';

fixture`Login Test`
    .page`https://dev.deepthought.education/login`; 

// Test case for valid credentials
test('Login with valid credentials', async t => {
    
    const usernameInput = Selector('#username'); 
    const passwordInput = Selector('#password'); 
    const loginButton = Selector('#login'); 

    
    await t
        .typeText(usernameInput, 'sandeshubale18') 
        .typeText(passwordInput, 'Sandy12@') 
        .click(loginButton);

    
});

// Test case for invalid credentials
test('Login with invalid credentials', async t => {
   
    const usernameInput = Selector('#username'); 
    const passwordInput = Selector('#password'); 
    const loginButton = Selector('#login'); 

   
    await t
        .typeText(usernameInput, 'sandeshubale15') 
        .typeText(passwordInput, 'Sandy123@') 
        .click(loginButton);

});
