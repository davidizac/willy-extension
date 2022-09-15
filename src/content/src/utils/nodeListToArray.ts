export default function nodeListToArray(nodeList): Array<HTMLElement> {
  const length = nodeList.length
  if (nodeList.hasOwnProperty) {
    return Array.prototype.slice.call(nodeList)
  }
  return new Array(length).fill().map((index) => nodeList[index])
}
