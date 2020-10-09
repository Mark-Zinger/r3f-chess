import {Router} from 'express';

const router = Router();

router.post('register', async (req, res)=> {
    try {
        const {email, password} = req.body
    } catch (e) {
        res.status(500).json({ message: e.message})
    }
})

router.post('login', async (req, res)=> {
    
})

export default router;