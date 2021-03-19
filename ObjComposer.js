const apiCalls = require('./apiCalls');
const fs = require('fs');

const composeObj = async () => {
  try {
    const eventTypes = await apiCalls.requestEventTypes();

    eventTypes[0].competitions = await apiCalls.requestCompetitionsForEventType(eventTypes[0].eventType.id);
    eventTypes[0].competitions[0].events = await apiCalls.requestEventListForCompetition(eventTypes[0].competitions[0].id);
    eventTypes[0].competitions[0].events[0].markets = await apiCalls.requestMarketsForEvent(eventTypes[0].competitions[0].events[0].event.id);
    eventTypes[0].competitions[0].events[0].markets[0].marketBook = await apiCalls.requestMarketBookForMarket(eventTypes[0].competitions[0].events[0].markets[0].marketId);

    // for (const eType of eventTypes) {
    //   eType.competitions = await apiCalls.requestCompetitionsForEventType(eType.eventType.id);
    //   for (const com of Object.keys(eType.competitions)) {
    //     eType.competitions[com].events = await apiCalls.requestEventListForCompetition(eType.competitions[com].competition.id);
    //     for (const event of Object.keys(eType.competitions[com].events)) {
    //       eType.competitions[com].events[event].markets = await apiCalls.requestMarketsForEvent(eType.competitions[com].events[event].event.id);
    //       for (const market of Object.keys(eType.competitions[com].events[event].markets)) {
    //         eType.competitions[com].events[event].markets[market].marketBooks = await apiCalls.requestMarketBookForMarket(eType.competitions[com].events[event].event.markets[market].market.id);
    //       }
    //     }
    //   }
    // }

    fs.writeFile('betfairJSON.txt', JSON.stringify(eventTypes), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

  } catch (e) {
    console.log(e);
  }
};

module.exports = { composeObj };