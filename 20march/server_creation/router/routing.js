const router = require('express').Router()
const {validation,home,contact} = require('../controller/ctr')
const { token, token2 ,queryValidation } = require('../middleware/middlware')



router.get("/home", [token, token2], home)
router.get("/contact", contact)

//FOR body , params , query
router.get("/signup", (req, res) => {
   try {
      let username = req.body.username;
      let email = req.body.email;

      res.status(200).send({ message: "req.body" })
      // res.status(200).send({message:{"name":username,"email":email}})

   } catch (error) {
      res.status(500), send("err")
   }

})

router.get("/signup/:id", (req, res) => {
   try {
      let id = req.params.id;

      let name = req.query.name
      let email = req.query.email
      

      console.log(req.query == undefined)

      if ( !(name && email)) {
         res.status(200).send({ message: "req.params with no query" })

      } else {

         res.status(200).send({ message: "req.params +  query" })
      }


   } catch (error) {
      res.status(500), send("err")
   }

})



router.get("/signup", (req, res) => {
   try {
      let username = req.body.username;
      let email = req.body.email;

      res.status(200).send({ message: "req.body" })
      // res.status(200).send({message:{"name":username,"email":email}})

   } catch (error) {
      res.status(500), send("err")
   }

})

router.get("/validation", queryValidation,validation )

//to create
// router.post('/create', middleweare , contrller)



module.exports = {

   ashta: router
}