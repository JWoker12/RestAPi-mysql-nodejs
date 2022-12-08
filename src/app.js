import express from 'express'

//routesImports
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

//settings
app.set('nameApp', 'DataBase Express')
app.use(express.json())

//use routesImports
app.use(indexRoutes)
app.use('/api',employeesRoutes)
app.use((req, res, next) => {
    res.status(404).json({
        message: 'EndPoin Not Found'
    })
})

export default app
