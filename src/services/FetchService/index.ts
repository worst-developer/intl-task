import * as fetch from 'node-fetch'

class FetchService {
    public fetchData = async (id:number, age:number, url:string, method:string) => {
        let params = {}

        if (method === 'PATCH') {
          params = {
            body:  JSON.stringify({age: age}),
            headers: { 'Content-Type': 'application/json' },
          }
        }
        const res = await fetch(`${url}/${id}`, {
          method,
          params
        })

        if (res.status === 429) {
          throw new Error('too many requests')
        } else if  (res.status !== 200) {
          throw new Error('ooops customer server not responding correctly')
        } else {
          return res.json()
        }
    }
}

export default new FetchService()