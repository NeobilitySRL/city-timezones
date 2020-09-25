const cityMapping = require('./data/cityMap.json')

let object = {};

for (const index in cityMapping) {
  const city = cityMapping[index];
  const key = city["city"].toLowerCase();

  if (key in object) {
    object[key].push(city);
  } else {
      object[key] = [city];
  }
}
console.log(JSON.stringify(object));