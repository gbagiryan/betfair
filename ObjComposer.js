const apiCalls = require('./apiCalls');

const composeObj = async () => {
  try{
    const eventTypes = await apiCalls.requestEventTypes();
    const competitions = Object.keys(eventTypes).map(async (eventType) => {
      await apiCalls.requestCompetitionsForEventType(eventType.id);
    });
    console.log(eventTypes);
  }catch (e) {
    console.log(e)
  }
};

module.exports = { composeObj };