const led = require('@amperka/led').connect(P3);
const button = require('@amperka/button').connect(P2);
const buzzer = require('@amperka/buzzer').connect(P5);

button.on('press', function() {
  buzzer.turnOn();
  led.turnOn();
});

button.on('release', function() {
  buzzer.turnOff();
  led.turnOff();
});
