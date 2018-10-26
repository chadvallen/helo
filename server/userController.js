module.exports = {
    registerUser: (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
        db.create_user([username, password]).then(newUsers => {
            const newUser = newUsers[0];
            req.session.user = newUser;
            res.json({ user: req.session.user })
            console.log(req.session)
        }).catch(error => {
            console.error('Error on registerUser', error);
        })
    }
}