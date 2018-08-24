module.exports = {
  'title': 'Pizza Place',
  'widgets': [
    {
      'type': 'header',
      'attributes': {
        'heading': 'Pizza Place',
        'desc': 'This is an example view where you can order some imaginary pizza.',
        'backgroundImage': 'wmfs/pizza.jpg',
        'backgroundImageAltText': 'Photograph of a pizza'
      }
    },
    {
      'id': 'yourDetails',
      'type': 'set',
      'attributes': {
        'tocTitle': 'Your Details',
        'tocIcon': 'account_box'
      }
    },
    {
      'type': 'heading',
      'attributes': {
        'heading': 'Your Details'
      }
    },
    {
      'id': 'firstName',
      'type': 'text',
      'attributes': {
        'heading': 'First Name',
        'mandatory': true
      }
    },
    {
      'id': 'lastName',
      'type': 'text',
      'attributes': {
        'heading': 'Last Name',
        'mandatory': true
      }
    },
    {
      'id': 'phoneNumber',
      'type': 'number',
      'attributes': {
        'heading': 'Phone Number',
        'mandatory': true
      }
    },
    {
      'id': 'address',
      'type': 'address',
      'attributes': {
        'heading': 'Where do you live?',
        'mandatory': true,
        'labelPath': '$.addressLabel',
        'resultLimit': 20,
        'enableUnknownOption': false,
        'enableLocationAssist': false
      }
    },
    {
      'id': 'dietaryReq',
      'type': 'checkboxList',
      'attributes': {
        'heading': 'Do you have any dietary requirements?',
        'titleMap': [
          {
            'value': 'PEANUT',
            'title': 'Peanut Allergy'
          },
          {
            'value': 'GLUTEN_FREE',
            'title': 'Gluten Free'
          },
          {
            'value': 'DAIRY_FREE',
            'title': 'Dairy Free'
          },
          {
            'value': 'OTHER',
            'title': 'Other'
          }
        ]
      }
    },
    {
      'id': 'dietaryReqOther',
      'type': 'textarea',
      'attributes': {
        'heading': 'Please enter your other dietary requirements...'
      },
      'showWhen': "data.dietaryReq.includes('OTHER')"
    },
    {
      'type': 'endSet'
    },
    {
      'id': 'thePizza',
      'type': 'set',
      'attributes': {
        'tocTitle': 'The Pizza',
        'tocIcon': 'local_pizza'
      }
    },
    {
      'type': 'horizontalLine'
    },
    {
      'type': 'heading',
      'attributes': {
        'heading': 'The Pizza'
      }
    },
    {
      'id': 'size',
      'type': 'questionnaire',
      'attributes': {
        'heading': 'What size pizza?',
        'mandatory': true,
        'numericValue': false,
        'default': 'M',
        'titleMap': [
          {
            'value': 'S',
            'title': 'Small',
            'desc': '£5.00'
          },
          {
            'value': 'M',
            'title': 'Medium',
            'desc': '£7.00'
          },
          {
            'value': 'L',
            'title': 'Large',
            'desc': '£9.00'
          },
          {
            'value': 'XL',
            'title': 'Extra Large',
            'desc': '£13.00'
          },
          {
            'value': 'XXL',
            'title': 'Extra Extra Large',
            'desc': '£16.00'
          }
        ]
      }
    },
    {
      'id': 'savouryOrSweet',
      'type': 'radio',
      'attributes': {
        'heading': 'Would you like it savoury or sweet?',
        'mandatory': true,
        'titleMap': [
          {
            'value': 'SAVOURY',
            'title': 'Savoury'
          },
          {
            'value': 'SWEET',
            'title': 'Sweet'
          }
        ]
      }
    },
    {
      'id': 'savourySet',
      'type': 'set',
      'attributes': {
        'tocTitle': 'Savoury...'
      },
      'showWhen': "data.savouryOrSweet === 'SAVOURY'"
    },
    {
      'id': 'base',
      'type': 'select',
      'attributes': {
        'heading': 'What base would you like?',
        'default': 'TOMATO',
        'titleMap': [
          {
            'value': 'TOMATO',
            'title': 'Tomato Sauce'
          },
          {
            'value': 'BBQ',
            'title': 'BBQ'
          },
          {
            'value': 'SWEETSOUR',
            'title': 'Sweet And Sour'
          }
        ]
      }
    },
    {
      'id': 'hot',
      'type': 'switch',
      'attributes': {
        'heading': 'Do you like it hot?'
      }
    },
    {
      'id': 'howHot',
      'type': 'questionnaire',
      'attributes': {
        'heading': 'How hot do you like it?',
        'numericValue': true,
        'titleMap': [
          {
            'value': 1,
            'title': '1 Chilli',
            'desc': 'Cool'
          },
          {
            'value': 2,
            'title': '2 Chillies',
            'desc': 'Mild'
          },
          {
            'value': 3,
            'title': '3 Chillies',
            'desc': 'Medium'
          },
          {
            'value': 4,
            'title': '4 Chillies',
            'desc': 'Hot'
          },
          {
            'value': 5,
            'title': '5 Chillies',
            'desc': 'Very Hot'
          },
          {
            'value': 6,
            'title': '6 Chillies',
            'desc': 'Extremely Hot'
          }
        ]
      },
      'showWhen': 'data.hot'
    },
    {
      'id': 'info',
      'type': 'stickyNote',
      'attributes': {
        'style': 'danger',
        'heading': 'Warning!',
        'desc': "We will not be held responsible if you can't handle the heat!"
      },
      'showWhen': 'data.hot'
    },
    {
      'id': 'toppings',
      'type': 'checkboxList',
      'attributes': {
        'heading': 'Select what toppings you would like (up to 3)',
        'minLimit': 0,
        'maxLimit': 3,
        'titleMap': [
          {
            'value': 'PEPPERONI',
            'title': 'Pepperoni'
          },
          {
            'value': 'OLIVES',
            'title': 'Olives'
          },
          {
            'value': 'PEPPERS',
            'title': 'Peppers'
          },
          {
            'value': 'PINEAPPLE',
            'title': 'Pineapple'
          },
          {
            'value': 'HAM',
            'title': 'Ham'
          },
          {
            'value': 'CHICKEN',
            'title': 'Chicken'
          },
          {
            'value': 'SPICY_BEEF',
            'title': 'Spicy Beef'
          },
          {
            'value': 'JALAPENOS',
            'title': 'Jalapenos'
          }
        ]
      }
    },
    {
      'type': 'endSet'
    },
    {
      'id': 'sweetSet',
      'type': 'set',
      'attributes': {
        'tocTitle': 'Sweet...'
      },
      'showWhen': "data.savouryOrSweet === 'SWEET'"
    },
    {
      'id': 'primary',
      'type': 'select',
      'attributes': {
        'heading': 'What primary flavour would you like?',
        'titleMap': [
          {
            'value': 'MILK_CHOC',
            'title': 'Milk Chocolate'
          },
          {
            'value': 'WHITE_CHOC',
            'title': 'White Chocolate'
          },
          {
            'value': 'DARK_CHOC',
            'title': 'Dark Chocolate'
          },
          {
            'value': 'TOFFEE',
            'title': 'Toffee'
          }
        ]
      }
    },
    {
      'id': 'secondary',
      'type': 'select',
      'attributes': {
        'heading': 'What secondary flavour would you like?',
        'titleMap': [
          {
            'value': 'MILK_CHOC',
            'title': 'Milk Chocolate'
          },
          {
            'value': 'WHITE_CHOC',
            'title': 'White Chocolate'
          },
          {
            'value': 'DARK_CHOC',
            'title': 'Dark Chocolate'
          },
          {
            'value': 'TOFFEE',
            'title': 'Toffee'
          }
        ]
      },
      'showWhen': 'data.primary'
    },
    {
      'id': 'sprinkles',
      'type': 'switch',
      'attributes': {
        'heading': 'Would you like hundreds and thousands sprinkles on your pizza?'
      },
      'showWhen': 'data.secondary'
    },
    {
      'type': 'endSet'
    },
    {
      'id': 'deliveryOrCollection',
      'type': 'radio',
      'attributes': {
        'heading': 'Would you like to collect your pizza or have it delivered?',
        'default': 'COLLECT',
        'titleMap': [
          {
            'value': 'COLLECT',
            'title': 'Collect'
          },
          {
            'value': 'DELIVER',
            'title': 'Deliver'
          }
        ]
      }
    },
    {
      'id': 'deliveryNotes',
      'type': 'textarea',
      'attributes': {
        'heading': 'Any notes to the deliverer?',
        'desc': 'If you have any delivery notes, please enter them here'
      },
      'showWhen': "data.deliveryOrCollection === 'DELIVER'"
    },
    {
      'type': 'endSet'
    }
  ]
}
