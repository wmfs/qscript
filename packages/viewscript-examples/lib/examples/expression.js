module.exports = {
  'title': 'Simple expression demo!',
  'widgets': [
    {
      'type': 'header',
      'attributes': {
        'heading': 'All done!',
        'desc': "We're all done here, we would really appreciate some feedback though!"
      }
    },
    {
      'id': 'userWantsToGiveFeedback',
      'type': 'switch',
      'attributes': {
        'default': false,
        'heading': 'I would like to leave some feedback'
      }
    },
    {
      'id': 'feedback',
      'showWhen': 'data.userWantsToGiveFeedback',
      'type': 'textarea',
      'attributes': {
        'heading': 'Feedback',
        'desc': 'How did you feel using our app?'
      }
    }
  ]
}
