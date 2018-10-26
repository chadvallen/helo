module.exports = {

    getPosts: (req, res) => {
        const db = req.app.get('db');
        db.get_posts().then(posts => {
            res.status(200).json(posts)
        })
    },

    updatePost: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.query;
        const { content } = req.body;
        db.update_post(id, content).then(post => {
            res.status(200).json(post)
        })
    }
}