const axios = require('axios')
const call = async ()=>{
try {
   const res =await axios.get('https://jsonplaceholder.typicode.com/todos/5')
   console.log(res.data)
} catch (error) {
    console.log(error)
}
}
call();
