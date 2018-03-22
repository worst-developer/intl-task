const UserSchema = {
    'type': 'object',
    'properties': {
    'age': {
      'description': 'positive integer or string of user age',
      'type': 'integer',
      'minimum': 1,
      'maximum': 110,
    },
    'url': {
      'type': 'string',
      'maxLength': 128 },
    'verb': {
      'type': 'string',
      'enum': ['POST', 'PATCH', 'GET'],
    },
    'ids': {
      'description': 'User ids to change age value',
      'type': 'array',
      'maxItems': 5,
      'minItems': 1,
      },
    },
    'required': ['age', 'url', 'verb', 'ids'],
  }

export default UserSchema