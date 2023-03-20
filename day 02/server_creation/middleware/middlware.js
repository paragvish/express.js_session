

exports.token = function (req, res, next) {
    let x = true

    if (x) {
        next()
    } 
    else {
        res.status(401).send({ message: "not authorised 1" })
        return;
    }

}

exports.token2 = function (req, res, next) {
    let x = true

    if (x) {
        next()
    }
    else {
        res.status(401).send({ message: "not authorised 2" })
        return;
    }

}

exports.queryValidation = (req, res, next) => {

    let name = req.query.name
    let email = req.query.email

    if (!name) {
        return res.send({ messge: "no name" });
    }
    if (!email) {
         return res.send({ message: "no email" })
    }
    next()
}    