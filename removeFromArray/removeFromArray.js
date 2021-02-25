const removeFromArray = function(arr,...remove) {
  for (i = 0; i < remove.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (remove[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
 return arr;
}

module.exports = removeFromArray
