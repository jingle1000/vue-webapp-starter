const {User} = require('../models')

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (e) {
            res.send({
                error: "Error creating user"
            })
        }
        
        
    }
}