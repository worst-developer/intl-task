import * as Ajv from 'ajv'
const ajv = Ajv({allErrors: true})

export default class ValidationService {
  schema: Schema
  reqData: User
  constructor(schema: Schema, reqData: User) {
    this.schema = schema
    this.reqData = reqData
  }

  get validateStart() {
    return this.validateSchema(this.schema, this.reqData)
  }

  private validateSchema(schema: Schema, reqData: User) {
    const valid = ajv.validate(schema, reqData)
    if (!valid) {
      return {
        isError: true,
        message: ajv.errors
      }
    } else return { isError: false }
  }
}
