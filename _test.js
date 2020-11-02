Feature('');

Scenario('test home page', (I) => {
    I.amOnPage(process.env.URL);
    I.see('Todo Items');
    
});

Scenario('test contact page', (I) => {
    I.amOnPage(process.env.URL);
    I.see('Done');
});