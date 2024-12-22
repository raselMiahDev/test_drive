import { pgTable, varchar,serial } from 'drizzle-orm/pg-core'
export const user = pgTable("user",{
    id: serial('id').primaryKey(),
    name: varchar('name',{length:255}).notNull(),
    email: varchar('email',{length:255}).notNull().unique(),
})