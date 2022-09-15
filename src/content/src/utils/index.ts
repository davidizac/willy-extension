export function swap(json) {
  const ret = {}
  for (const key in json) {
    ret[json[key]] = key
  }
  return ret
}
