function home (req, res){
try {
    res.status(200).send({ message: "its home page" })
    
} catch (error) {
    res.status(500).send({ message: " ur bad guy" })
}

}

function contact(req, res){
    res.status(200).send({ message: "its contact page" })
}


function validation(req, res) {
   try {
   res.status(200).send({ message:{"name":req.query.name , "email":req.query.email }})
     

   } catch (error) {
      res.status(500), send("err")
   }

}


module.exports ={
    contact,
    home,
    validation
}