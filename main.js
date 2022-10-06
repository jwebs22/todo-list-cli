//just for playing and not messing up the main file beyond recognition. 

const prompt = require('prompt-sync')({sigint: true});

function userPrompt()
{
console.log(`\n~ Select An Action ~`);
console.log(`\n[1] Create A To-Do Item.`);
console.log(`[2] Complete A To-Do Item.`);
console.log(`[3] Overwhelmed? Immediate Help Here. `);
console.log(`[4] Exit Application. `);
action = Number(prompt("> "));
}

function list()
{  
    console.log(`You have ${listArray.length} to-do item(s).`);
    
    for (let i = 0; i < listArray.length; i++)
    {
        let status = "";

        if (statusArray[i] === false)
        {
            status = "[incomplete]";
        } else if (statusArray[i] === true)
        {
            status = "[complete]";
        }

        console.log(`${i + 1}. ${status} ${listArray[i]}`);    
    }
}

console.log(`\nWelcome to the To-Do List Manager Application!`);
console.log(`==============================================`);

let listArray = []; 
let statusArray = [];

userPrompt();

while (action !== 4)
{
if (action === 1)
{
    console.log(`\n~ Create A New To-Do Item ~`);
    console.log(`What is this to-do item called? `);
    let addItem = prompt("> ");

    while (addItem.length === 0)
    {
        console.log("Invalid. Input cannot be empty. Try again.");
        addItem = prompt("> ")
    }

    listArray.push(addItem);
    statusArray.push(false);
    
    list();
    userPrompt();  
} else if (action === 2)
{
    if (listArray.length !== 0)
    {
        console.log(`\n~ Completing A To-Do Item ~`);
        console.log(`Which to-do item would you like to complete?`);
        list();

        let completedItem = Number(prompt("> "));
        while (isNaN(completedItem) || completedItem > statusArray.length || completedItem < 1)
        {
            console.log("Please input a number that corresponds to an item in list: ");
            completedItem = Number(prompt("> "));
        }

        statusArray[completedItem - 1] = true;

        list();
        userPrompt();
    } else
    {
        console.log("Please add an item to the list first!");
        userPrompt();
    } 
} else if (action === 3)  
{
    console.log("Call (719) 266-2837 for immediate assistance!");
    userPrompt();
} 
else 
{
    console.log(`Invalid Action!`);
    userPrompt();
}
}
