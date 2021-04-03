import express from 'express'
const router = express.Router();

/* GET default page. */
router.get('/', async function(req, res, next) {
    res.send({msg: "default page"})
});

export default router
