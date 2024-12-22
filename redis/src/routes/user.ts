import {Router} from 'express'
import { redisClient } from '../db'
import {z} from 'zod'
import { db } from '../db'
import { user } from '../models/user'
const router = Router()


const userSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
})
router.post('/signUp', async (req, res) => {
    try {
      const { name, email } = userSchema.parse(req.body);
      const [newUser] = await db.insert(user).values({ name, email }).returning('*');
  
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Invalid data' });
    }
  });





