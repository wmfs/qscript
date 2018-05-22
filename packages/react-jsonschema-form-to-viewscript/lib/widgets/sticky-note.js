module.exports = class StickyNote {
  constructor (options) {
    this.widget = {
      id: options.id,
      type: 'stickyNote',
      attributes: {
        heading: options.schema.title
      }
    }
    if (options.conditionalSchema.length > 0) this.widget.showWhen = options.conditionalSchema[0]
  }
}
