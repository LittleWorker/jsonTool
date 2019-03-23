function getTypeOf(data) {
  const toString = Object.prototype.toString
  const map = {
    '[object array]': 'array',
    '[object object]': 'object',
    '[object string]': 'string',
    '[object function]': 'function',
    '[object number]': 'number',
    '[object boolean]': 'boolean',
    '[object undefined]': 'undefined',
    '[object null]': 'null'
  }
  return map[toString.call(data).toLowerCase()]
}
export { getTypeOf }
