module.exports = {
  'title': 'Simple set demo!',
  'widgets': [
    {
      'type': 'set',
      'attributes': {
        'tocTitle': 'Profile'
      }
    },
    {
      'id': 'name',
      'type': 'text',
      'attributes': {
        'heading': 'Name',
        'placeholder': 'e.g. Lucy Smith',
        'mandatory': true,
        'minCharacters': 1,
        'maxCharacters': 100,
        'help': 'Enter your full name here'
      }
    },
    {
      'type': 'endSet'
    }
  ]
}
