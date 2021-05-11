import express from 'express'
import { router } from './controllers'

const app = express()
const port = 8080

export default () => {
    app.use(router)

    app.listen(port, () => {
        console.log(`server started at http://localhost:${port}`)
    })
}
