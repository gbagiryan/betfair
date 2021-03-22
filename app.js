const apiCalls = require('./apiCalls');
const ObjComposer = require('./ObjComposer');
const socketConnection = require('./socketConnection');
const RabbitReceiver = require('./RabbitReceiver');
const express = require('express');
const app = express();
const port = 5000;

// app.listen(port, () => console.log(`app started at port ${port}`));

// ObjComposer.composeObj();
// socketConnection.connectToFeed();
// RabbitReceiver.connectToRabbit();

// apiCalls.requestEventTypes();
// apiCalls.requestEventListForType();
// apiCalls.requestMarketsForEvent();
// apiCalls.requestCompetitionsForEventType();
// apiCalls.requestMarketBookForMarket();