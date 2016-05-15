var faker = require('faker');
var _ = require('lodash');

function logger() {
  var type = _.shuffle(['error','warn','info'])[0];
  switch (type) {
    case 'error':
      console.error('ERR '+faker.name.findName());
    break;

    case 'warn':
      console.warn('WARN '+faker.name.findName());
    break;

    default:
      console.log(faker.name.findName());
    break;
  }
}

setInterval(logger,1000);
