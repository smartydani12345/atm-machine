#! /usr/bin/env node

import inquirer from "inquirer";
 interface userInput {
    userId:string;
    userPin:number;
    accountType:string;
    transactionType:string;
    amount:number;
}
 


const userInput :userInput =await  inquirer.prompt(
    [
    {
        name:"userId",
        message:"Enter user id",
        type:"input"
},
{
    name:"userPin",
    message:"Enter your pin",
    type:"number"
},
{
    name:"accountType",
    message:"select your account type",
    type:"list",
    choices:["saving","current"]
},
{
    name:"transactionType",
    message:"select your transaction",
    type:"list",
    choices:["fast cash","cash withdraw","balance inquiry"]
},
{
    name:"amount",
    message:"enter amount you want to with draw",
    type:"number",
    when(userInput){
        return userInput.transactionType === "cash withdraw"
    }
    },
    {
        name:"amount",
        message:"select amount you want to with draw",
        type:"list",
        choices:["1000","2000","5000","10000","20000",,"25000"],
        when(userInput){
            return userInput.transactionType === "fast cash"
        }
    }

]
);

const userId = userInput.userId;
const userPin = userInput.userPin;
const enteredAmount= userInput.amount;

if ((userId && userPin) && userInput.transactionType === "balance inquiry") {
    const userBalance =  Math.floor (Math.random() * 100000);
    console.log(`Your current balance is ${userBalance}\n`);
} else if (userId && userPin) {
    const userBalance2 =  Math.floor (Math.random() * 100000);
console.log(`Your current has been debited with ${enteredAmount} and your new balance is ${userBalance2 - enteredAmount}`);
}else {
    console.log("unsufficient balance");
}
 

