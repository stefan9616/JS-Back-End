const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const photoService = require('../services/photoService');
const { getErrorMessage } = require('../utils/errorUtils');

router.get('/create', isAuth, (req, res) => {
    res.render('create');
});

router.get('/catalog', async (req, res) => {
    const photo = await photoService.getAll();

    res.render('catalog', { photo });
});

router.get('/profile', (req, res) => {
    res.render('profile');
});

router.post('/create', isAuth, async (req, res) => {

    const photoData = req.body;

    try {
        await photoService.create(photoData);
    } catch (error) {
        return res.status(400).render('create', { error: getErrorMessage(error) });
    }
    res.redirect('/catalog')

});

module.exports = router;

