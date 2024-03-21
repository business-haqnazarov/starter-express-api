const express = require('express');

const app = express();
const router = express.Router();


router.get('/speech', function (req, res) {
    try {
        const gtts = require('node-gtts')(req.query.lang)
        res.set({'Content-Type': 'audio/mpeg'});
        gtts.stream(req.query.text).pipe(res);
    } catch (err) {
        res.json(null)
    }
});

app.use('/', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
