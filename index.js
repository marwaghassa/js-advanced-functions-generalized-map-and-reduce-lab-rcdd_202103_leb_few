// Add your functions here
function map(array, cb) {
  let r = []
  for (let i = 0; i < array.length; i++) {
    r.push(cb(array[i]))
  }

  return r;
}

function reduce(array, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}