const led = require('@amperka/led').connect(P3);
const button = require('@amperka/button').connect(P2);

function onOffLed () {
  led.blink(1);
}

button.on('press', onOffLed);
