module.exports = {
  'title': 'Simple sub-view demo!',
  'widgets': [
    {
      'type': 'header',
      'attributes': {
        'heading': 'Pizza Place',
        'desc': 'This is an example of how sub-views work',
        'backgroundImage': 'wmfs/pizza.jpg',
        'backgroundImageAltText': 'Photograph of a pizza'
      }
    },
    {
      'id': 'starters',
      'type': 'subView',
      'attributes': {
        'heading': 'Starters!',
        'desc': 'Pick some things to start...',
        'createButtonText': 'Add a starter!',
        'instanceHeadingTemplate': '{{ item.starterType | replaceWithTitle(lists.$simpleTitleMaps.starterType)}}',
        'instanceDescTemplate': "You'll be wanting {{item.starterQuantity}} of these."
      }
    },
    {
      'type': 'heading',
      'attributes': {
        'heading': 'Starter'
      }
    },
    {
      'id': 'starterType',
      'type': 'select',
      'attributes': {
        'heading': 'Starter',
        'mandatory': true,
        'titleMap': [
          {
            'value': 'WEDGES',
            'title': 'Wedges'
          },
          {
            'value': 'CHICKEN_WINGS',
            'title': 'Chicken Wings'
          }
        ]
      }
    },
    {
      'id': 'starterQuantity',
      'type': 'number',
      'attributes': {
        'heading': 'Quantity',
        'default': 2,
        'required': true
      }
    },
    {
      'type': 'endSubView'
    },
    {
      'id': 'pizzas',
      'type': 'subView',
      'attributes': {
        'heading': 'Pizza!',
        'desc': 'The main event...',
        'createButtonText': 'Add a pizza!',
        'instanceHeadingTemplate': '{{item.pizzaType | replaceWithTitle(lists.$simpleTitleMaps.pizzaType)}}',
        'instanceDescTemplate': "You'll be wanting {{item.pizzaQuantity}} of these."
      }
    },
    {
      'type': 'heading',
      'attributes': {
        'heading': 'Pizza'
      }
    },
    {
      'id': 'pizzaType',
      'type': 'select',
      'attributes': {
        'heading': 'Pizza',
        'mandatory': true,
        'titleMap': [
          {
            'value': 'HAWAIIAN',
            'title': 'The Hawaiian'
          },
          {
            'value': 'PEPPERONI',
            'title': 'Pepperoni'
          },
          {
            'value': 'VEGGIE',
            'title': 'The Veggie'
          }
        ]
      }
    },
    {
      'id': 'pizzaQuantity',
      'type': 'number',
      'attributes': {
        'heading': 'Quantity',
        'default': 1,
        'mandatory': true
      }
    },
    {
      'id': 'dips',
      'type': 'subView',
      'attributes': {
        'heading': 'Dips!',
        'desc': 'Something to dunk those crusts into?',
        'createButtonText': 'Add a dip!',
        'instanceHeadingTemplate': '{{item.dipType | replaceWithTitle(lists.$simpleTitleMaps.dipType)}}',
        'instanceDescTemplate': "You'll be wanting {{item.dipQuantity}} of these."
      }
    },
    {
      'type': 'heading',
      'attributes': {
        'heading': 'Dip'
      }
    },
    {
      'id': 'dipType',
      'type': 'select',
      'attributes': {
        'heading': 'Dip',
        'mandatory': true,
        'titleMap': [
          {
            'value': 'BBQ',
            'title': 'Barbecue'
          },
          {
            'value': 'RANCH',
            'title': 'Ranch Dressing'
          }
        ]
      }
    },
    {
      'id': 'dipQuantity',
      'type': 'number',
      'attributes': {
        'heading': 'Quantity',
        'default': 3,
        'required': true
      }
    },
    {
      'type': 'endSubView'
    },
    {
      'type': 'endSubView'
    }
  ]
}
