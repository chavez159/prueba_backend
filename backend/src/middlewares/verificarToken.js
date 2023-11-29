import Jwt from 'jsonwebtoken';

export const verificarToken = (req, res, next) => {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1]
    : null
    if(!token){
        res.status(400).json({message: "no se encontró token"})
    }else{
        Jwt.verify(token, 'palabraSecreta', (err, decoded) => {
            if(err){
                res.status(400).json({message: "token inválido"})
            }else{
                req.decoded = decoded
                next()
            }
        })
    }
}