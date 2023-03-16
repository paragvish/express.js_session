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


module.exports ={
    contact,
    home
}