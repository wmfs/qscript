const ComponentBuilder = require('./../utils/Component-builder')
const GetAttribute = require('./../utils/Get-attribute')

// default
// desc
// enabled
// heading
// help
// mandatory
// maxCharacters
// minCharacters
// placeholder

module.exports = function textConverter (widgetDefinition, options) {
  const getAttribute = GetAttribute(widgetDefinition)
  const builder = new ComponentBuilder(widgetDefinition)
  const textField = builder.addTag('q-input')
  textField.addAttribute('id', widgetDefinition.id)
  textField.bindToModel(widgetDefinition)
  textField.addAttribute('class', 'q-ma-xl')
  textField.addAttribute('float-label', getAttribute('heading'))
  return builder.compile()}