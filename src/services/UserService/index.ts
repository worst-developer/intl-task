import * as Router from 'koa-router'
import * as Koa from 'koa'
import { Request } from 'koa'
import Logger from '../../utils/logger'
const router = new Router()
import * as Ajv from 'ajv'
const ajv = Ajv({allErrors: true})

import * as fetch from 'node-fetch'

import UserShema from '../../schemas/Users'

router
.post('/batch', async (ctx: Koa.Context, next: Function) => {
  try {
    const requestData = ctx.request.body

    const valid = ajv.validate(UserShema, ctx.request.body)


    // I know validation must be in another place, for example - "Validation Service" (do not have enough time to implement)
    if (!valid) {
      Logger.loggerError('invalid request body')
      ctx.status = 400
      ctx.body = { error: ajv.errors }
    }

    const usersData = requestData.ids.map(async (id:number) => {
     return await fetchData(id, requestData.age, requestData.url, requestData.verb)
    })

    console.log(usersData)
    ctx.status = 200
    return ctx.body = {
      usersData
    }

  } catch (error) {
    Logger.loggerError(error)
    ctx.status = 400
    ctx.body = { error: error.message }
    return
  }
})

// I know that for this functionality must be another service, I prefer to use service oriented arch, that every functionality part is separeted as a services with helpers
const fetchData = async (id:number, age:number, url:string, type:string) => {
  const res = await fetch(`${url}/${id}`, {
    method: type,
  })

  return res.json()
}

export default router