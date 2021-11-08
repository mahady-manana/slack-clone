import express from "express"
import cors from "cors"
import compression  from "compression"
import helmet from "helmet"

const app = express()

app.use(cors())
app.use(compression())
app.use(helmet())

export default app