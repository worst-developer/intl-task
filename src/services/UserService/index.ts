import * as Router from 'koa-router'
import * as Koa from 'koa'
import { Request } from 'koa'
import Logger from '../../utils/logger'
const router = new Router()

import FetchService from '../FetchService'
import ValidationService from '../ValidatorService'
import UserShema from '../../schemas/Users'


router
.post('/batch', async (ctx: Koa.Context, next: Function) => {
  try {
    const requestData = ctx.request.body

    const validate = new ValidationService(UserShema, requestData)

    if (validate.validateStart.isError) {
      ctx.body = { error: validate.validateStart.message }
      return ctx.status = 400
    }

    const usersData:Array<ResponseSchema> = await Promise.all(requestData.ids.map(async (id:number) => {
      return await FetchService.fetchData(id, requestData.age, requestData.url, requestData.verb)
    }))

    ctx.body = {
      usersData
    }
    return ctx.status = 200
  } catch (error) {
    Logger.loggerError(error)
    ctx.status = 400
    ctx.body = { error: error.message }
    return
  }
})

export default router