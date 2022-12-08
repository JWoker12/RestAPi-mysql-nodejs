import app from './app.js'
import { PORT } from './config.js'
//PORT
app.listen(PORT)
console.log(`Server ${app.get('nameApp')} running on Port ${PORT}`)