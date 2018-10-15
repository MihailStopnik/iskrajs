const led = require('@amperka/led')
  .connect(P3)
  .turnOn();
const button = require('@amperka/button').connect(P2);
const pot = require('@amperka/pot').connect(A0);

function upgradeBrightness() {
  let value = pot.read();
  led.brightness(value);
}

function ledToggle() {
  led.toggle();
}
setInterval(upgradeBrightness, 10);
button.on('release', ledToggle);
