var Alexa = require('ask-sdk-core')
var axios = require('axios')

function getfromDollarsamount() {
  return axios.get('http://data.fixer.io/api/convert? access_key = 9b4a86f5f67f1aa2cf8167de8138cbdc & 
  from =USD & to = EUR & amount = x').then(function (response) {
    return response.data.quote
  })
}
function getfromEurossamount() {
    return axios.get('http://data.fixer.io/api/convert? access_key = 9b4a86f5f67f1aa2cf8167de8138cbdc & 
    from =EUR & to = USD & amount = x').then(function (response) {
      return response.data.quote
    })
  }  


const TranslatefromDollarsIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'TranslatefromDollarsIntent';
  },
  handle(handlerInput) {
    const name = handlerInput.requestEnvelope.request.intent.slots.x.value;

    return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
  },
};



const TranslatefromEurosIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'TranslatefromEurosIntent';
  },
  handle(handlerInput) {
    const name = handlerInput.requestEnvelope.request.intent.slots.y.value;
    

    return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
  },
};

const RatetoMobileIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'RatetoMobileIntent';
  },
  handle(handlerInput) {
    const name = handlerInput.requestEnvelope.request.intent.slots.Name.value;

    return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
  },
};

const EurostoMobileIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'EurostoMobileIntent';
  },
  handle(handlerInput) {
    const name = handlerInput.requestEnvelope.request.intent.slots.Name.value;
    const speechText = ‘Hello ' + name + '!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
  },
};

const DollarstoMobileIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'DollarstoMobileIntent';
  },
  handle(handlerInput) {
    const name = handlerInput.requestEnvelope.request.intent.slots.Name.value;
    const speechText = ‘Hello ' + name + '!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
  },
};

const Alexa = require('ask-sdk-core');
const skillBuilder = Alexa.SkillBuilders.custom();
 
exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    GreetingIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    TranslatefromDollarsIntentHandler,
    TranslatefromEurosIntentHandler,
    RatetoMobileIntentHandler,
    EurostoMobileIntentHandler,
    DollarstoMobileIntentHandler
  )
  .lambda();

{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"Text to speak back to the user."},
    "card": {
      "type": "Simple",
      "title": "Example of the Card Title",
      "content": "Example of card content. This card has just plain text content.\nThe content is formatted with line breaks to improve readability."
    }
  }
}

