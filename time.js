const today = new Date()


let val = today
val = today.getMonth() 
val = today.getFullYear()
val = today.getHours()
val = today.getTime()
console.log(val)
val = new Date("2023-09-12")
val.setDate(13)
console.log(val)
