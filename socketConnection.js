const tls = require('tls');

/*	Socket connection options */

const options = {
  host: 'stream-api.betfair.com',
  port: 443
};

const connectToFeed = () => {

  /*	Establish connection to the socket */

  const client = tls.connect(options, function () {
    console.log('Connected');
  });

  /*	Send authentication message */

  client.write('{"op": "authentication", "appKey": "IjPXjMxjhphGBjs3", "session": "nL8FzlayZd8kegWJ+9P9LN1j4e/Pyp0Dx1XlpFqlJlk=}"\r\n');

  /*	Subscribe to order/market stream */
  client.write('{"op":"orderSubscription","orderFilter":{"includeOverallPosition":false,"customerStrategyRefs":["betstrategy1"],"partitionMatchedByStrategyRef":true},"segmentationEnabled":true}\r\n');
  client.write('{"op":"marketSubscription","id":2,"marketFilter":{"marketIds":["1.120684740"],"bspMarket":true,"bettingTypes":["ODDS"],"eventTypeIds":["1"],"eventIds":["27540841"],"turnInPlayEnabled":true,"marketTypes":["MATCH_ODDS"],"countryCodes":["ES"]},"marketDataFilter":{}}\r\n');

  client.on('data', function (data) {
    console.log('Received: ' + data);
  });

  client.on('close', function () {
    console.log('Connection closed');
  });

  client.on('error', function (err) {
    console.log('Error:' + err);
  });

};

module.exports = { connectToFeed };