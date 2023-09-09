const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({
        post: {
            title: 'My First Post',
            description: 'Random data you shouldnt access'
        }
    });
});

module.exports = router;