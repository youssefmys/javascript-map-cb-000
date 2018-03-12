function map(array, callback) {
  var results = []
  for(let i = 0; i < array.length; i++) {
    results.push(callback(array[i]))
  }
  return results
}

const autobots = [
  { name: 'Optimus Prime', strength: 5, isTransformed: false, },
  { name: 'Ironhide', strength: 3, isTransformed: false, },
  { name: 'Bumblebee', strength: 2.5, isTransformed: false, },
  { name: 'Ratchet', strength: 1.5, isTransformed: false, },
];


transformedAutobots = map(autobots, function(element) {
  return Object.assign({}, element, {strength: element.strength * 2, isTransformed: true});
});
