const cardViewTracker = require('./../utils/card-view-tracker')
const ComponentBuilder = require('./../utils/Component-builder')

module.exports = function (definition, options) {
  let template = '</div>'

  const builder = new ComponentBuilder(definition)

  const actions = builder.addTag('template')
  actions.addAttribute('slot', 'buttons')
  actions.addAttribute('slot-scope', 'props')

  const cardViewId = cardViewTracker.removeCardView()

  const close = actions.addChildTag('q-btn')
  close.addAttribute(':flat', true)
  close.addAttribute('@click.native', `internals.dialogControl.${cardViewId} = false`)
  close.content('Close')

  const save = actions.addChildTag('q-btn')
  save.addAttribute(':flat', true)
  save.addAttribute('@click.native', `pushCardViewContent('${cardViewId}')`)
  save.content('Save')

  template += builder.compile()
  template += '</q-dialog>'
  return template
}