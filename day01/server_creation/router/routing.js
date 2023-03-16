const router = require('express').Router()
const {home , contact} = require('../controller/ctr')
const { token, token2 } = require('../middleware/middlware')



router.get("/home", [token,token2],home )
router.get("/contact", contact)



module.exports = {
    
   ashta: router
}