const apiCalls = require('./apiCalls');
const fs = require('fs');

const composeObj = async () => {
  try {
    const eventTypes = await apiCalls.requestEventTypes();

    for (const eType of eventTypes) {
      eType.competitions = await apiCalls.requestCompetitionsForEventType(eType.eventType.id);
      for (const com of Object.keys(eType.competitions)) {
        eType.competitions[com].events = await apiCalls.requestEventListForCompetition(eType.competitions[com].competition.id);
        for (const event of Object.keys(eType.competitions[com].events)) {
          eType.competitions[com].events[event].markets = await apiCalls.requestMarketsForEvent(eType.competitions[com].events[event].event.id);
        }
      }
    }

    fs.writeFile('betfairJSON.txt', JSON.stringify(eventTypes), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

  } catch (e) {
    console.log(e);
  }
};

module.exports = { composeObj };