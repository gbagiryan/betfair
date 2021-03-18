const axios = require('axios');

const requestEventTypes = async () => {

  try {
    const eventTypes = await axios.post('https://api.betfair.com/exchange/betting/json-rpc/v1', {
      jsonrpc: '2.0',
      id: 1,
      method: 'SportsAPING/v1.0/listEventTypes',
      'params': {
        'filter': {}
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Application': 'IjPXjMxjhphGBjs3',
        'X-Authentication': 'nL8FzlayZd8kegWJ+9P9LN1j4e/Pyp0Dx1XlpFqlJlk='
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
        'X-Application': 'IjPXjMxjhphGBjs3',
        'X-Authentication': 'nL8FzlayZd8kegWJ+9P9LN1j4e/Pyp0Dx1XlpFqlJlk='
      },
    });

    console.log(response.data.result);
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
        'X-Application': 'IjPXjMxjhphGBjs3',
        'X-Authentication': 'nL8FzlayZd8kegWJ+9P9LN1j4e/Pyp0Dx1XlpFqlJlk='
      },
    });

    console.log(response.data.result);
  } catch (error) {
    console.error(error);
  }
};

const requestMarketsForEvent = async () => {
  try {
    const response = await axios.post('https://api.betfair.com/exchange/betting/json-rpc/v1', {
      jsonrpc: '2.0',
      id: 1,
      method: 'SportsAPING/v1.0/listMarketCatalogue',
      "params": {
        "filter": {
          "eventIds": [
            "30357715"
          ]
        },
        "maxResults": "200",
        "marketProjection": [
          "COMPETITION",
          "EVENT",
          "EVENT_TYPE",
          "RUNNER_DESCRIPTION",
          "RUNNER_METADATA",
          "MARKET_START_TIME"
        ]
      },
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Application': 'IjPXjMxjhphGBjs3',
        'X-Authentication': 'nL8FzlayZd8kegWJ+9P9LN1j4e/Pyp0Dx1XlpFqlJlk='
      },
    });

    console.log(response.data);
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
      "params": {
        "marketIds": ["1.180662765"],
        "priceProjection": {
          "priceData": ["EX_BEST_OFFERS", "EX_TRADED"],
          "virtualise": "true"
        }
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Application': 'IjPXjMxjhphGBjs3',
        'X-Authentication': 'nL8FzlayZd8kegWJ+9P9LN1j4e/Pyp0Dx1XlpFqlJlk='
      },
    });

    console.log(response.data.result);
  } catch (error) {
    console.error(error);
  }
};


module.exports = {
  requestEventTypes,
  requestEventListForType,
  requestMarketsForEvent,
  requestCompetitionsForEventType,
  requestMarketBookForMarket
};