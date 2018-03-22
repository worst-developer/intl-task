# intl-task

# on branch [finished-task](https://github.com/yarossia/intl-task/tree/finished-task) task is completed but after provided time for task overed

To run back-end server u need - ```yarn dev-server``` you can start the server, before you need to install dependencies. </br>

Time was limited so what is ready: project boilerplate with typescript validation and koa as main library for back-end,
also finisshed validating data on request so it will reject half of invalid requests, back-end logic is half ready because of 
js async currently return Promise<pending> and catching bad responses also not ready, but as you can see pretty good basis is ready 
so I can easily finish it in additional hour.

req examle: 

type: POST
localhost:5555/batch

```
{ 
	"verb": "GET",
	"url": " https://guesty-user-service.herokuapp.com/user",
	"age": 9,
	"ids": ["ja2S-hs81-ksn3-iQI9","ja2S-hs81-ksn3-iQI9","ja2S-hs81-ksn3-iQI9"]
}
```
