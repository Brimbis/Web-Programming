const authentication = (req, res, next) => {
    const token = req.headers['authorization'];
    console.log("token: ", token.log);
    if (token === 'secret123') {
        next(); // Proceed
    } else {
        res.status(401).send({error: 'Unauthorized Access'});
    }
}
module.exports = authentication;