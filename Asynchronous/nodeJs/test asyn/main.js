const { buyTollRoadCard, topUpBalance, useTollRoad } = require('./utils');

async function getTollAccess() {
  try {
    const card = await buyTollRoadCard(25);        
    const balance = await topUpBalance(card, 10);            
    await useTollRoad (balance);     
  } catch (error) {
    console.log(error.message);
  }
}

getTollAccess();
 