import Dexie from 'dexie'

//dexie采用懒加载的方式、第一条数据插入之前时还没有创建数据库
var db = new Dexie('mydb')
db.version(1).stores({
    person: "++id, name, age"
})

export default db