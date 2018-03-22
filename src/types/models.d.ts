  declare interface User {
   verb: string,
   url: string,
   age: number,
   ids: Array<number>,
 }

 interface UserResponse {
   id: string,
   name: string,
   email: string,
   age: number
 }
 
 declare interface Schema {
   type: string,
   properties: Object,
   required: string[]
 }

 declare interface ResponseSchema {
   usersData: Array<UserResponse>
 }