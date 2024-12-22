import { createPool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as redis from 'redis'

export const db = drizzle(createPool({connectionString:process.env.DATABASE_URL}))

export const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
})
redisClient.on('error',(err)=> console.error("Redis error",err))
