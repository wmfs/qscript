const subViewTracker = require('./../utils/sub-view-tracker')
const ComponentBuilder = require('./../utils/Component-builder')
// const GetAttribute = require('./../utils/Get-attribute')

module.exports = function endSubView (widgetDefinition, options) {
  /*
  let template = '</v-flex></v-layout></v-container></v-card-text>'
  // const getAttribute = GetAttribute(widgetDefinition)
  const builder = new ComponentBuilder(widgetDefinition)
  const actions = builder.addTag('v-card-actions')
  actions.addChildTag('v-spacer')

  const subViewId = subViewTracker.removeSubView()

  const close = actions.addChildTag('v-btn')
  close.addAttribute('color', 'blue darken-1')
  close.addAttribute('flat', null)
  close.addAttribute('@click.native', `internals.dialogControl.${subViewId} = false`)
  close.content('Close')

  const save = actions.addChildTag('v-btn')
  save.addAttribute('color', 'blue darken-1')
  save.addAttribute('flat', null)
  save.addAttribute('@click.native', `pushSubViewContent('${subViewId}')`)
  save.content('Save')

  template += builder.compile()
  template += '</v-card></v-dialog>'
  return template
  */
  const builder = new ComponentBuilder(widgetDefinition)
  const pre = builder.addTag('pre')
  pre.content('// TODO: end sub view!')
  return builder.compile()

}