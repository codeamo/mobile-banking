'use strict'

const models = require('../models/index');

//create User
exports.createUser = async ctx => {
  try {
    const {firstName, lastName, email, password, imgUrl, balance, currency} = ctx.request.body;
    const user = await models.User.create({firstName, lastName, email, password, imgUrl, balance, currency});
    ctx.body = user;
    ctx.status = 201;
  } catch (error) {
    ctx.status = 500;
    ctx.body = error;
  }
};

//Create credit card
exports.createCard = async ctx => {
  try {
    const {cardNumber, cardName, expM, expY, cvv,  email} = ctx.request.body;
    const userId = ctx.params.userId;  
    const card = await models.Card.create({cardNumber, cardName, expM, expY, cvv, email, userId});
    ctx.body = card;
    ctx.status = 201;
  } catch (error) {
    ctx.status = 500;
    ctx.body = error;
  }
};

//create transaction 
exports.createTx = async ctx => {
  try {
    const { TransactionAmount, sender, recipient } = ctx.request.body;
    const userId = ctx.params.userId;  
    console.log(ctx.request.sender);  
    const transaction = await models.Tx.create({ TransactionAmount, sender, recipient, userId });
    ctx.body = transaction;
    ctx.status = 201;
  } catch (error) {
    ctx.status = 201;
    ctx.body = error;
  }
}

//Make transfer 
// const checkBalance = (ctx.body.request) => {

// }


//The last 4 transaction history



//The last 4 people we sent money


//list of all current users
