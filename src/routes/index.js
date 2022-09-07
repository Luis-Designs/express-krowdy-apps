import { Router } from "express"

import { createName, getNames } from '../controllers/tasks.controllers.js'

const miniApp = Router()

miniApp.get('/', (req, res) => {
    res.json({ sms: 'Hello world' })
})

miniApp.get('/names', getNames)

miniApp.get('/registrar', createName)

export default miniApp
