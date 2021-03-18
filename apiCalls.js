const axios = require('axios');

const sessionToken = 'T6CSLvnDS89Fc1RX0PyKb1+QV5re2KqFsEzYUxg8k1k=';
const appKey = 'IjPXjMxjhphGBjs3';

const requestEventTypes = async () => {

  try {
    const eventTypes = await axios.post('https://api.betfair.com/exchange/betting/json-rpc/v1', {
      jsonrpc: '2.0',
      id: 1,
      method: 'SportsAPING/v1.0/listEventTypes',
      'params': {
        'filter': {
          'eventTypeIds': [
            '1'
          ]
        },
        'maxResults': '10'
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Application': appKey,
        'X-Authentication': sessionToken
      },
    });

    return eventTypes.data.result;

  } catch (error) {
    console.error(error);
  }

};

const requestCompetitionsForEventType = async (eventTypeId) => {
  try {
    const response = await axios.post('https://api.betfair.com/exchange/betting/json-rpc/v1', {
      jsonrpc: '2.0',
      id: 1,
      method: 'SportsAPING/v1.0/listCompetitions',
      'params': {
        'filter': {
          'eventTypeIds': [
            eventTypeId
          ]
        }
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Application': appKey,
        'X-Authentication': sessionToken
      },
    });

    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};

const requestEventListForType = async () => {
  try {
    const response = await axios.post('https://api.betfair.com/exchange/betting/json-rpc/v1', {
      jsonrpc: '2.0',
      id: 1,
      method: 'SportsAPING/v1.0/listEvents',
      'params': {
        'filter': {
          'eventTypeIds': [
            '1'
          ]
        }
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Application': appKey,
        'X-Authentication': sessionToken
      },
    });

    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};

const requestEventListForCompetition = async (competitionId) => {
  try {
    const response = await axios.post('https://api.betfair.com/exchange/betting/json-rpc/v1', {
      jsonrpc: '2.0',
      id: 1,
      method: 'SportsAPING/v1.0/listEvents',
      'params': {
        'filter': {
          'competitionsIds': [
            competitionId
          ]
        }
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Application': appKey,
        'X-Authentication': sessionToken
      },
    });

    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};

const requestMarketsForEvent = async (eventId) => {
  try {
    const response = await axios.post('https://api.betfair.com/exchange/betting/json-rpc/v1', {
      jsonrpc: '2.0',
      id: 1,
      method: 'SportsAPING/v1.0/listMarketCatalogue',
      'params': {
        'filter': {
          'eventIds': [
            eventId
          ]
        },
        'maxResults': '10',
        'marketProjection': [
          'COMPETITION',
          'EVENT',
          'EVENT_TYPE',
          'RUNNER_DESCRIPTION',
          'RUNNER_METADATA',
          'MARKET_START_TIME'
        ]
      },
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Application': appKey,
        'X-Authentication': sessionToken
      },
    });

    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};

const requestMarketBookForMarket = async () => {
  try {
    const response = await axios.post('https://api.betfair.com/exchange/betting/json-rpc/v1', {
      jsonrpc: '2.0',
      id: 1,
      method: 'SportsAPING/v1.0/listMarketBook',
      'params': {
        'marketIds': ['1.180662765'],
        'priceProjection': {
          'priceData': ['EX_BEST_OFFERS', 'EX_TRADED'],
          'virtualise': 'true'
        }
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Application': appKey,
        'X-Authentication': sessionToken
      },
    });

    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  requestEventTypes,
  requestEventListForType,
  requestMarketsForEvent,
  requestCompetitionsForEventType,
  requestMarketBookForMarket,
  requestEventListForCompetition
};