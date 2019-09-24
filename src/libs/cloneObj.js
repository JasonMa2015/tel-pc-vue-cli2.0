export const cloneObj = (source) => {
  let newObject = {}
  for (let key in source) {
    newObject[key] = (typeof (source[key]) === 'object') ? cloneObj(source[key]) : source[key]
  }
  return newObject
}
