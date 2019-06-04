
//IMPORTS ⬇︎
const jwt = require('jsonwebtoken');
const secret = require('../../config/secrets');

//EXPORTS ⬇︎
module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, secret.jwtSecret, (error, decodedToken) => {
            if (error) {
                res.status(401).json({ message: 'Your token is not verified. ● ', error })
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        })
    } else {
        res.status(401).json({ message: 'You dont have enough tokens to play Space Invaders 👾' })
    }
};